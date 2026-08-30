import { useCallback, useEffect, useRef, useState } from 'react'

const OFFSET_X = 28
const OFFSET_Y = -110
const EASING = 0.18

// Faz um elemento seguir o cursor com uma leve inércia. Usado na página de
// portfólio para mostrar a capa do case sob o mouse enquanto a lista é
// percorrida. A posição é escrita direto no style do nó (via ref) para não
// disparar re-render a cada mousemove.
//
// Só liga em ponteiros finos (mouse/trackpad) e quando o visitante não pediu
// menos movimento — em toque, o componente cai no thumbnail inline.
export function useCursorPreview() {
  const [enabled, setEnabled] = useState(false)
  const nodeRef = useRef(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const frame = useRef(0)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setEnabled(fine.matches && !calm.matches)

    sync()
    fine.addEventListener('change', sync)
    calm.addEventListener('change', sync)

    return () => {
      fine.removeEventListener('change', sync)
      calm.removeEventListener('change', sync)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * EASING
      current.current.y += (target.current.y - current.current.y) * EASING

      if (nodeRef.current) {
        nodeRef.current.style.transform =
          `translate3d(${current.current.x.toFixed(1)}px, ${current.current.y.toFixed(1)}px, 0)`
      }

      frame.current = requestAnimationFrame(tick)
    }

    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [enabled])

  const aim = useCallback((event) => {
    const width = nodeRef.current?.offsetWidth ?? 260
    const height = nodeRef.current?.offsetHeight ?? 200
    const maxX = window.innerWidth - width - 16
    const maxY = window.innerHeight - height - 16

    target.current.x = Math.min(Math.max(event.clientX + OFFSET_X, 16), Math.max(maxX, 16))
    target.current.y = Math.min(Math.max(event.clientY + OFFSET_Y, 16), Math.max(maxY, 16))
  }, [])

  // Ao entrar numa nova linha, teleporta o preview em vez de deslizá-lo desde
  // a posição anterior — o rastro atravessando a tela distrai mais do que ajuda.
  const snap = useCallback(
    (event) => {
      aim(event)
      current.current.x = target.current.x
      current.current.y = target.current.y
      if (nodeRef.current) {
        nodeRef.current.style.transform =
          `translate3d(${current.current.x}px, ${current.current.y}px, 0)`
      }
    },
    [aim],
  )

  return { enabled, nodeRef, aim, snap }
}
