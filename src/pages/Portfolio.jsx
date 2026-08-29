import { useMemo, useState } from 'react'
import styles from './Portfolio.module.css'
import ProjectCard from '../components/ProjectCard'
import Badge from '../components/Badge'
import Reveal from '../components/Reveal'
import { useGithubRepos } from '../hooks/useGithubRepos'
import { profile } from '../config/profile'

export default function Portfolio() {
  const { repos, status } = useGithubRepos(profile.githubUsername)
  const [activeLanguage, setActiveLanguage] = useState('Todos')

  const languages = useMemo(() => {
    const set = new Set(repos.map((repo) => repo.language).filter(Boolean))
    return ['Todos', ...Array.from(set).sort()]
  }, [repos])

  const filteredRepos = useMemo(() => {
    if (activeLanguage === 'Todos') return repos
    return repos.filter((repo) => repo.language === activeLanguage)
  }, [repos, activeLanguage])

  return (
    <div className={`container ${styles.page}`}>
      <Reveal as="header" className={styles.header}>
        <h1 className={styles.heading}>Portfólio</h1>
        <p className={styles.subheading}>
          Projetos públicos direto do meu{' '}
          <a href={profile.github} target="_blank" rel="noreferrer" className={styles.githubLink}>
            GitHub
          </a>
          .
        </p>
      </Reveal>

      {status === 'loading' && <p className={styles.status}>Carregando projetos…</p>}

      {status === 'error' && (
        <p className={styles.status}>
          Não foi possível carregar os repositórios agora. Tente novamente mais tarde.
        </p>
      )}

      {status === 'success' && (
        <>
          <Reveal className={styles.filters}>
            {languages.map((language) => (
              <Badge
                key={language}
                active={activeLanguage === language}
                onClick={() => setActiveLanguage(language)}
              >
                {language}
              </Badge>
            ))}
          </Reveal>

          <div className={styles.grid}>
            {filteredRepos.map((repo, index) => (
              <Reveal key={repo.id} delay={Math.min(index, 6) * 60}>
                <ProjectCard repo={repo} />
              </Reveal>
            ))}
          </div>

          {filteredRepos.length === 0 && (
            <p className={styles.status}>Nenhum projeto encontrado para este filtro.</p>
          )}
        </>
      )}
    </div>
  )
}
