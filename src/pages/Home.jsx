import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import SocialLinks from '../components/SocialLinks'
import Reveal from '../components/Reveal'
import { profile } from '../config/profile'
import { asset } from '../utils/assetPath'

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.copy}>
          <p className={styles.eyebrow}>Olá, eu sou</p>
          <h1 className={styles.name}>{profile.name}</h1>
          <h2 className={styles.title}>
            <span className="gradient-text">{profile.title}</span>
          </h2>
          <p className={styles.subtitle}>{profile.heroSubtitle}</p>

          <div className={styles.actions}>
            <Link to="/portfolio" className={styles.primaryButton}>
              Ver Portfólio
            </Link>
            <Link to="/contato" className={styles.secondaryButton}>
              Entrar em Contato
            </Link>
          </div>

          <SocialLinks className={styles.social} />
        </Reveal>

        <Reveal className={styles.portraitWrap} delay={120}>
          <div className={styles.portraitGlow} aria-hidden="true" />
          <img src={asset(profile.avatar)} alt={profile.name} className={styles.portrait} />
        </Reveal>
      </div>
    </section>
  )
}
