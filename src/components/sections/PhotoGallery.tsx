import { FiCamera } from 'react-icons/fi'
import { RevealWrapper } from '../ui/RevealWrapper'
import { Eyebrow } from '../ui/Eyebrow'

const cells = [
  { cls: 'col-span-3 row-span-2', label: '01 — Paris, hiver', delay: 0 },
  { cls: 'col-span-3 row-span-1', label: '02 — atelier', delay: 0.12 },
  { cls: 'col-span-2 row-span-2', label: '03 — portrait', delay: 0.24 },
  { cls: 'col-span-1 row-span-1', label: '04', delay: 0 },
  { cls: 'col-span-2 row-span-1', label: '05 — rue', delay: 0.12 },
  { cls: 'col-span-3 row-span-1', label: '06 — voyage', delay: 0.24 },
]

export function PhotoGallery() {
  return (
    <section id="photo">
      <div className="container">
        <RevealWrapper>
          <Eyebrow icon={FiCamera}>Photographie — 08</Eyebrow>
        </RevealWrapper>

        <RevealWrapper>
          <h2 className="font-display text-[clamp(48px,7vw,112px)] leading-[0.95] tracking-[-0.02em] mb-16">
            <span className="italic text-ink-2">Carnet</span> visuel.
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-6 grid-rows-[140px] auto-rows-[140px] gap-3 max-sm:grid-cols-2">
          {cells.map((cell, i) => (
            <RevealWrapper
              key={i}
              delay={cell.delay}
              className={`photo-cell relative rounded-lg overflow-hidden bg-[var(--bg-2)] transition-transform duration-400 hover:scale-[0.98]
                ${cell.cls}
                max-sm:col-span-1 max-sm:row-span-1`}
            >
              <div
                data-label={cell.label}
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg, transparent 0 10px, rgba(24,22,18,0.04) 10px 11px)',
                }}
              />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
