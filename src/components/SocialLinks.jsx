import styles from './SocialLinks.module.css'
import { profile } from '../config/profile'

const icons = {
  github: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.79-.25.79-.55v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.7 5.39-5.27 5.67.42.36.78 1.08.78 2.18v3.23c0 .3.21.66.8.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm18.4 2H3.6l8.4 6.3L20.4 6ZM3 8.1V18h18V8.1l-8.7 6.5a1 1 0 0 1-1.2 0L3 8.1Z" />
    </svg>
  ),
}

export default function SocialLinks({ className = '' }) {
  const links = [
    { key: 'github', href: profile.github, label: 'GitHub' },
    { key: 'linkedin', href: profile.linkedin, label: 'LinkedIn' },
    { key: 'email', href: `mailto:${profile.email}`, label: 'E-mail' },
  ]

  return (
    <div className={`${styles.links} ${className}`}>
      {links.map((link) => (
        <a
          key={link.key}
          href={link.href}
          target={link.key === 'email' ? undefined : '_blank'}
          rel="noreferrer"
          className={styles.link}
          aria-label={link.label}
          title={link.label}
        >
          {icons[link.key]}
        </a>
      ))}
    </div>
  )
}
