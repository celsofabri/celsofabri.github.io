import { useMemo, useState } from 'react'
import styles from './Portfolio.module.css'
import CaseIndex from '../components/CaseIndex'
import ProjectCard from '../components/ProjectCard'
import Badge from '../components/Badge'
import Reveal from '../components/Reveal'
import { useGithubRepos } from '../hooks/useGithubRepos'
import { profile } from '../config/profile'
import { behanceCases, behanceProfileUrl, caseCategories } from '../config/behance'

export default function Portfolio() {
  const { repos, status } = useGithubRepos(profile.githubUsername)
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [activeLanguage, setActiveLanguage] = useState('Todos')

  const filteredCases = useMemo(() => {
    if (activeCategory === 'Todos') return behanceCases
    return behanceCases.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const period = useMemo(() => {
    const years = behanceCases.map((item) => Number(item.year))
    return `${Math.min(...years)}—${Math.max(...years)}`
  }, [])

  const languages = useMemo(() => {
    const set = new Set(repos.map((repo) => repo.language).filter(Boolean))
    return ['Todos', ...Array.from(set).sort()]
  }, [repos])

  const filteredRepos = useMemo(() => {
    if (activeLanguage === 'Todos') return repos
    return repos.filter((repo) => repo.language === activeLanguage)
  }, [repos, activeLanguage])

  return (
    <div className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />

      <section className={`container ${styles.hero}`}>
        <Reveal className={styles.heroCopy}>
          <p className={styles.eyebrow}>Portfólio</p>
          <h1 className={styles.heading}>
            Cases <span className="gradient-text">selecionados</span>
          </h1>
          <p className={styles.lead}>
            Produto, interface e front-end — de manuais de marca e sites de campanha a plataformas
            de pagamento e design systems. Passe o mouse para espiar, clique para abrir o case.
          </p>
        </Reveal>

        <Reveal className={styles.stats} delay={120}>
          <div className={styles.stat}>
            <strong>{behanceCases.length}</strong>
            <span>cases publicados</span>
          </div>
          <div className={styles.stat}>
            <strong>{period}</strong>
            <span>anos de trabalho</span>
          </div>
          <div className={styles.stat}>
            <a href={behanceProfileUrl} target="_blank" rel="noreferrer">
              Behance <span aria-hidden="true">↗</span>
            </a>
            <span>perfil completo</span>
          </div>
        </Reveal>
      </section>

      <section className={`container ${styles.section}`}>
        <Reveal className={styles.toolbar}>
          <div className={styles.filters}>
            {caseCategories.map((category) => (
              <Badge
                key={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
          <p className={styles.count}>
            {filteredCases.length} de {behanceCases.length}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <CaseIndex cases={filteredCases} />
        </Reveal>
      </section>

      <section className={`container ${styles.section} ${styles.github}`}>
        <Reveal className={styles.githubHeader}>
          <div>
            <p className={styles.eyebrowMuted}>Complemento</p>
            <h2 className={styles.subheading}>Código aberto no GitHub</h2>
            <p className={styles.githubLead}>
              Experimentos, estudos e projetos pessoais — puxados automaticamente da API do{' '}
              <a href={profile.github} target="_blank" rel="noreferrer" className={styles.inlineLink}>
                GitHub
              </a>
              , sempre atualizados.
            </p>
          </div>

          {status === 'success' && languages.length > 1 && (
            <div className={styles.filters}>
              {languages.map((language) => (
                <Badge
                  key={language}
                  active={activeLanguage === language}
                  onClick={() => setActiveLanguage(language)}
                >
                  {language}
                </Badge>
              ))}
            </div>
          )}
        </Reveal>

        {status === 'loading' && <p className={styles.status}>Carregando repositórios…</p>}

        {status === 'error' && (
          <p className={styles.status}>
            Não foi possível carregar os repositórios agora. Tente novamente mais tarde.
          </p>
        )}

        {status === 'success' && (
          <>
            <div className={styles.grid}>
              {filteredRepos.map((repo, index) => (
                <Reveal key={repo.id} delay={Math.min(index, 6) * 50}>
                  <ProjectCard repo={repo} />
                </Reveal>
              ))}
            </div>

            {filteredRepos.length === 0 && (
              <p className={styles.status}>Nenhum repositório encontrado para este filtro.</p>
            )}
          </>
        )}
      </section>
    </div>
  )
}
