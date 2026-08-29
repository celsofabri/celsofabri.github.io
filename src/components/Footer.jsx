import styles from './Footer.module.css'
import SocialLinks from './SocialLinks'
import { profile } from '../config/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {year} {profile.name}. Todos os direitos reservados.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
