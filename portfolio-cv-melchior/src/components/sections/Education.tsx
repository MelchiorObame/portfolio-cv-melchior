import { RevealWrapper } from '../ui/RevealWrapper'
import { education } from '../../data/portfolio'

export function Education() {
  return (
    <section id="education">
      <div className="container">
        <RevealWrapper>
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-2 px-3 py-1.5 border border-[var(--line)] rounded-full mb-7 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">
            Formation — 05
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <h2 className="font-display text-[clamp(48px,7vw,112px)] leading-[0.95] tracking-[-0.02em] mb-16">
            <span className="italic text-ink-2">École</span> &amp; classes prépa.
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <RevealWrapper key={edu.id} delay={i * 0.12}>
              <div className="p-9 border border-[var(--line)] rounded-card bg-card transition-transform duration-350 hover:-translate-y-1">
                <div className="font-mono text-xs text-ink-3 tracking-[0.06em] mb-3.5">{edu.years}</div>
                <h3 className="font-display italic text-[28px] leading-[1.1] mb-1.5">{edu.school}</h3>
                <p className="text-[15px] text-ink-2">{edu.degree}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
