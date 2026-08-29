import styles from './ProjectCard.module.css'
import { languageColor } from '../utils/languageColors'

export default function ProjectCard({ repo }) {
  const { name, description, html_url: htmlUrl, homepage, language, stargazers_count: stars } = repo

  return (
    <article className={styles.card}>
      <div className={styles.thumb} aria-hidden="true">
        <span className={styles.thumbInitial}>{name.charAt(0).toUpperCase()}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>
          {description || 'Sem descrição disponível para este repositório.'}
        </p>

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
            Repositório
          </a>
          {homepage && (
            <a href={homepage} target="_blank" rel="noreferrer" className={styles.linkPrimary}>
              Ver deploy
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
