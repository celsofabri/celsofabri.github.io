import { useId, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './CaseIndex.module.css'
import { useCursorPreview } from '../hooks/useCursorPreview'
import { asset } from '../utils/assetPath'

export default function CaseIndex({ cases }) {
  const [openSlug, setOpenSlug] = useState(null)
  const [hoveredSlug, setHoveredSlug] = useState(null)
  const { enabled: previewEnabled, nodeRef, aim, snap } = useCursorPreview()
  const baseId = useId()

  const hovered = cases.find((item) => item.slug === hoveredSlug)
  const showPreview = previewEnabled && hovered && hovered.slug !== openSlug

  return (
    <div
      className={styles.wrap}
      onMouseMove={previewEnabled ? aim : undefined}
      onMouseLeave={() => setHoveredSlug(null)}
    >
      <ol className={styles.list}>
        {cases.map((item, index) => {
          const isOpen = item.slug === openSlug
          const panelId = `${baseId}-${item.slug}`

          return (
            <li
              key={item.slug}
              className={`${styles.row} ${isOpen ? styles.rowOpen : ''}`}
              onMouseEnter={(event) => {
                setHoveredSlug(item.slug)
                if (previewEnabled) snap(event)
              }}
            >
              <button
                type="button"
                className={styles.head}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenSlug(isOpen ? null : item.slug)}
              >
                <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>

                <img
                  src={asset(item.cover)}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className={styles.thumb}
                />

                <span className={styles.headText}>
                  <span className={styles.title}>{item.title}</span>
                  <span className={styles.summary}>{item.summary}</span>
                </span>

                <span className={styles.role}>{item.role}</span>
                <span className={styles.year}>{item.year}</span>
                <span className={styles.toggle} aria-hidden="true">
                  <span className={styles.toggleBar} />
                  <span className={`${styles.toggleBar} ${styles.toggleBarVertical}`} />
                </span>
              </button>

              <div
                id={panelId}
                className={styles.panel}
                role="region"
                aria-label={item.title}
                inert={!isOpen}
              >
                <div className={styles.panelInner}>
                  <div className={styles.panelGrid}>
                    <figure className={styles.figure}>
                      <img
                        src={asset(item.cover)}
                        alt={`Capa do projeto ${item.title}`}
                        loading="lazy"
                        className={styles.cover}
                      />
                    </figure>

                    <div className={styles.detail}>
                      <p className={styles.category}>{item.category}</p>

                      {item.description.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)} className={styles.paragraph}>
                          {paragraph}
                        </p>
                      ))}

                      <ul className={styles.tools}>
                        {item.tools.map((tool) => (
                          <li key={tool} className={styles.tool}>
                            {tool}
                          </li>
                        ))}
                      </ul>

                      {item.credits && <p className={styles.credits}>{item.credits}</p>}

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.cta}
                      >
                        Ver case completo no Behance
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ol>

      {/* Vai para o body: qualquer ancestral com `transform` (o wrapper de
          animação `.reveal`, por exemplo) criaria um bloco de contenção e
          quebraria o `position: fixed` do preview. */}
      {previewEnabled &&
        createPortal(
          <div
            ref={nodeRef}
            className={`${styles.preview} ${showPreview ? styles.previewVisible : ''}`}
            aria-hidden="true"
          >
            {hovered && <img src={asset(hovered.cover)} alt="" />}
          </div>,
          document.body,
        )}
    </div>
  )
}
