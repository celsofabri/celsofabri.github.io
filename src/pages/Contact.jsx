import { useEffect, useRef, useState } from 'react'
import styles from './Contact.module.css'
import SocialLinks from '../components/SocialLinks'
import Reveal from '../components/Reveal'
import { profile } from '../config/profile'
import { web3formsConfig, isWeb3formsConfigured } from '../config/web3forms'

const EMPTY_FORM = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | success | error | mailto
  const [errorDetail, setErrorDetail] = useState('')
  // Honeypot: campo fora da tela que só um bot preenche.
  const [botcheck, setBotcheck] = useState('')
  const feedbackRef = useRef(null)

  const isSending = status === 'sending'
  const hasFeedback = status === 'success' || status === 'error' || status === 'mailto'

  // Leva o foco para o aviso ao final do envio, para quem navega por teclado ou
  // leitor de tela não ficar sem saber o que aconteceu.
  useEffect(() => {
    if (hasFeedback) feedbackRef.current?.focus()
  }, [hasFeedback, status])

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Some com o aviso anterior assim que o visitante volta a escrever.
    setStatus((prev) => (prev === 'sending' ? prev : 'idle'))
  }

  function sendViaMailto() {
    const subject = encodeURIComponent(`Contato via portfólio — ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (isSending) return

    // Bot preencheu o honeypot: finge sucesso e não envia nada.
    if (botcheck) {
      setStatus('success')
      setForm(EMPTY_FORM)
      return
    }

    if (!isWeb3formsConfigured()) {
      sendViaMailto()
      setStatus('mailto')
      return
    }

    setStatus('sending')
    setErrorDetail('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3formsConfig.accessKey,
          subject: `Contato via portfólio — ${form.name}`,
          from_name: 'Portfólio celsofabri.com',
          // Responder o e-mail recebido responde direto para o visitante.
          replyto: form.email,
          botcheck,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok || !result.success) {
        throw new Error(result.message || `A API respondeu ${response.status}.`)
      }

      setStatus('success')
      setForm(EMPTY_FORM)
    } catch (error) {
      console.error('Falha ao enviar via Web3Forms:', error)
      setErrorDetail(error.message || '')
      setStatus('error')
    }
  }

  return (
    <div className={`container ${styles.page}`}>
      <Reveal as="header" className={styles.header}>
        <h1 className={styles.heading}>Contato</h1>
        <p className={styles.subheading}>
          Tem um projeto em mente ou quer bater um papo? Fico à disposição.
        </p>
        <SocialLinks className={styles.social} />
      </Reveal>

      <Reveal as="form" className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={styles.fields} disabled={isSending}>
          <label className={styles.field}>
            <span>Nome</span>
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Seu nome"
            />
          </label>

          <label className={styles.field}>
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="voce@email.com"
            />
          </label>

          <label className={styles.field}>
            <span>Mensagem</span>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Como posso ajudar?"
            />
          </label>

          <input
            type="text"
            name="botcheck"
            className={styles.honeypot}
            value={botcheck}
            onChange={(event) => setBotcheck(event.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <button type="submit" className={styles.submit}>
            {isSending ? 'Enviando…' : 'Enviar mensagem'}
          </button>
        </fieldset>

        {/* Região viva: o resultado é anunciado por leitores de tela sem precisar
            de navegação, e recebe o foco pelo efeito acima. */}
        <div
          ref={feedbackRef}
          tabIndex={-1}
          role="status"
          aria-live="polite"
          className={styles.feedback}
        >
          {status === 'success' && (
            <p className={styles.feedbackSuccess}>
              Mensagem enviada com sucesso! Vou responder no e-mail que você deixou.
            </p>
          )}

          {status === 'mailto' && (
            <p className={styles.feedbackInfo}>
              Abri seu cliente de e-mail com a mensagem pronta. Se nada aconteceu, escreva direto
              para <a href={`mailto:${profile.email}`}>{profile.email}</a>.
            </p>
          )}

          {status === 'error' && (
            <p className={styles.feedbackError}>
              Não consegui enviar agora. Tente novamente ou escreva direto para{' '}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>.
              {errorDetail && <span className={styles.errorDetail}>Detalhe: {errorDetail}</span>}
            </p>
          )}
        </div>
      </Reveal>
    </div>
  )
}
