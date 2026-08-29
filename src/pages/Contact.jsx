import { useState } from 'react'
import styles from './Contact.module.css'
import SocialLinks from '../components/SocialLinks'
import Reveal from '../components/Reveal'
import { profile } from '../config/profile'
import { web3formsConfig, isWeb3formsConfigured } from '../config/web3forms'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function sendViaMailto() {
    const subject = encodeURIComponent(`Contato via portfólio — ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (!isWeb3formsConfigured()) {
      sendViaMailto()
      return
    }

    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3formsConfig.accessKey,
          subject: `Contato via portfólio — ${form.name}`,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })
      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        throw new Error(result.message || 'Falha ao enviar')
      }
    } catch (error) {
      console.error('Falha ao enviar via Web3Forms:', error)
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
        <label className={styles.field}>
          <span>Nome</span>
          <input
            type="text"
            name="name"
            required
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

        <button type="submit" className={styles.submit} disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
        </button>

        {status === 'success' && (
          <p className={styles.feedbackSuccess}>Mensagem enviada com sucesso! Retorno em breve.</p>
        )}
        {status === 'error' && (
          <p className={styles.feedbackError}>
            Não consegui enviar agora. Tente novamente ou escreva direto para{' '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </p>
        )}
      </Reveal>
    </div>
  )
}
