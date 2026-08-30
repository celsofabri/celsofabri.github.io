import { useReveal } from '../hooks/useReveal'

// `...rest` é essencial: sem ele qualquer prop passada ao Reveal (o `onSubmit`
// do formulário de contato, por exemplo) era silenciosamente descartada.
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
