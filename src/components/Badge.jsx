import styles from './Badge.module.css'

export default function Badge({ children, active = false, onClick, as = 'span' }) {
  const Tag = onClick ? 'button' : as

  return (
    <Tag
      type={onClick ? 'button' : undefined}
      className={`${styles.badge} ${active ? styles.active : ''}`}
      onClick={onClick}
    >
      {children}
    </Tag>
  )
}
