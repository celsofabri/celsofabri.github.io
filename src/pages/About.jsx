import styles from './About.module.css'
import Badge from '../components/Badge'
import CompanyLogo from '../components/CompanyLogo'
import Reveal from '../components/Reveal'
import { profile } from '../config/profile'

export default function About() {
  return (
    <div className={`container ${styles.page}`}>
      <Reveal as="section" className={styles.section}>
        <h1 className={styles.heading}>Sobre mim</h1>
        {profile.bio.split('\n').map((paragraph, i) => (
          <p key={i} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </Reveal>

      <Reveal as="section" className={styles.section}>
        <h2 className={styles.subheading}>Habilidades</h2>
        <div className={styles.badges}>
          {profile.skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </Reveal>

      <section className={`${styles.section} ${styles.wideSection}`}>
        <Reveal as="div">
          <h2 className={styles.subheading}>Experiência</h2>
        </Reveal>
        <div className={styles.resume}>
          {profile.experience.map((entry, index) => (
            <Reveal
              key={entry.company}
              as="article"
              className={styles.company}
              delay={Math.min(index, 5) * 60}
            >
              <div className={styles.companyHeader}>
                <CompanyLogo company={entry.company} logo={entry.logo} />
                <div className={styles.companyMeta}>
                  <h3 className={styles.companyName}>{entry.company}</h3>
                  {entry.location && <p className={styles.location}>{entry.location}</p>}
                </div>
              </div>

              <div className={styles.roles}>
                {entry.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className={styles.role}>
                    <div className={styles.roleHeader}>
                      <h4 className={styles.roleTitle}>{role.role}</h4>
                      <span className={styles.period}>{role.period}</span>
                    </div>
                    {role.highlights?.length > 0 && (
                      <ul className={styles.highlights}>
                        {role.highlights.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {profile.certifications?.length > 0 && (
        <Reveal as="section" className={styles.section}>
          <h2 className={styles.subheading}>Certificações</h2>
          <ul className={styles.certList}>
            {profile.certifications.map((cert) => (
              <li key={cert} className={styles.certItem}>
                {cert}
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      {profile.education.length > 0 && (
        <Reveal as="section" className={styles.section}>
          <h2 className={styles.subheading}>Formação acadêmica</h2>
          <div className={styles.educationList}>
            {profile.education.map((item, index) => (
              <div key={index} className={styles.educationCard}>
                <div className={styles.educationHeader}>
                  <CompanyLogo company={item.institution} logo={item.logo} />
                  <h3 className={styles.companyName}>{item.institution}</h3>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <p className={styles.degree}>{item.degree}</p>
              </div>
            ))}
          </div>
        </Reveal>
      )}

      {profile.languages?.length > 0 && (
        <Reveal as="section" className={styles.section}>
          <h2 className={styles.subheading}>Idiomas</h2>
          <div className={styles.badges}>
            {profile.languages.map((lang) => (
              <Badge key={lang.name}>
                {lang.name} · {lang.level}
              </Badge>
            ))}
          </div>
        </Reveal>
      )}
    </div>
  )
}
