import styles from './ProjectCard.module.css'
import { languageColor } from '../utils/languageColors'

// Card compacto de repositório. A página de portfólio dá o palco aos cases do
// Behance, então aqui o formato é deliberadamente discreto: sem capa, altura
// baixa e informação densa.
export default function ProjectCard({ repo }) {
  const { name, description, html_url: htmlUrl, homepage, language, stargazers_count: stars } = repo

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <svg viewBox="0 0 16 16" className={styles.icon} aria-hidden="true" fill="currentColor">
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.25.25 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
        </svg>
        <h3 className={styles.title}>{name}</h3>
      </header>

      <p className={styles.description}>
        {description || 'Sem descrição disponível para este repositório.'}
      </p>

      <footer className={styles.footer}>
        <div className={styles.meta}>
          {language && (
            <span className={styles.language}>
              <span className={styles.dot} style={{ background: languageColor(language) }} />
              {language}
            </span>
          )}
          {stars > 0 && <span className={styles.stars}>★ {stars}</span>}
        </div>

        <div className={styles.links}>
          <a href={htmlUrl} target="_blank" rel="noreferrer" className={styles.link}>
            Código
          </a>
          {homepage && (
            <a href={homepage} target="_blank" rel="noreferrer" className={styles.linkPrimary}>
              Deploy ↗
            </a>
          )}
        </div>
      </footer>
    </article>
  )
}
