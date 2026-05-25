import { FiAward } from 'react-icons/fi'
import { RevealWrapper } from '../ui/RevealWrapper'
import { Eyebrow } from '../ui/Eyebrow'
import { certifications } from '../../data/portfolio'

export function Certifications() {
  return (
    <section id="certs">
      <div className="container">
        <RevealWrapper>
          <Eyebrow icon={FiAward}>Certifications — 05b</Eyebrow>
        </RevealWrapper>

        <RevealWrapper>
          <h2 className="font-display text-[clamp(48px,7vw,112px)] leading-[0.95] tracking-[-0.02em] mb-16">
            Officiel, <span className="italic text-ink-2">vérifié</span>, à jour.
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <RevealWrapper key={cert.id} delay={i * 0.12}>
              <div className="cert-card relative flex flex-col gap-4 p-8 border border-[var(--line)] rounded-card bg-card min-h-[280px] overflow-hidden transition-all duration-350 hover:-translate-y-1.5 hover:border-accent">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-mono text-[22px] font-semibold text-accent border-[1.5px]"
                  style={{
                    background: 'color-mix(in oklab, var(--accent) 14%, transparent)',
                    borderColor: 'color-mix(in oklab, var(--accent) 30%, transparent)',
                  }}
                >
                  {cert.badge}
                </div>
                <div>
                  <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink-3 mb-1">
                    {cert.issuer}
                  </div>
                  <h3 className="font-display italic text-[28px] leading-[1.1]">
                    {cert.name} <span className="text-accent">{cert.level}</span>
                  </h3>
                </div>
                <div className="mt-auto flex items-center justify-between font-mono text-[11px] text-ink-3 pt-4 border-t border-[var(--line)]">
                  <span>{cert.meta}</span>
                  <a
                    href={cert.verifyHref}
                    className="text-ink-2 hover:text-accent transition-colors after:content-['_↗'] after:inline-block after:transition-transform hover:after:translate-x-0.5 hover:after:-translate-y-0.5"
                  >
                    vérifier
                  </a>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
