import { useState } from 'react'
import styles from './CompanyLogo.module.css'
import { companyColor, companyInitials } from '../utils/companyColor'

export default function CompanyLogo({ company, logo }) {
  const [failed, setFailed] = useState(false)

  if (logo && !failed) {
    return (
      <div className={styles.logo}>
        <img src={logo} alt={company} onError={() => setFailed(true)} />
      </div>
    )
  }

  return (
    <div className={styles.logo} style={{ background: companyColor(company) }} aria-hidden="true">
      <span className={styles.initials}>{companyInitials(company)}</span>
    </div>
  )
}
