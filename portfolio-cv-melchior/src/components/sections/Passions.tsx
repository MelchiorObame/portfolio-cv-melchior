import { RevealWrapper } from '../ui/RevealWrapper'
import { passions } from '../../data/portfolio'
import { cn } from '../../lib/utils'

export function Passions() {
  return (
    <section id="passions" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <RevealWrapper>
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-2 px-3 py-1.5 border border-[var(--line)] rounded-full mb-7 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">
            Off-screen — 07
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <h2 className="font-display text-[clamp(48px,7vw,112px)] leading-[0.95] tracking-[-0.02em] mb-16">
            Ce qui se passe <span className="italic text-ink-2">quand je ferme</span>{' '}
            <span className="text-accent italic">VS Code.</span>
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {passions.map((p, i) => (
            <RevealWrapper key={p.id} delay={i * 0.12}>
              <div className="rounded-card overflow-hidden border border-[var(--line)] bg-card flex flex-col min-h-[480px] transition-transform duration-350 hover:-translate-y-1.5">
                <div
                  className={cn(
                    'aspect-square overflow-hidden',
                    p.visual === 'dessin' && 'visual-dessin',
                    p.visual === 'sport' && 'visual-sport',
                    p.visual === 'read' && 'visual-read',
                  )}
                />
                <div className="p-7 flex-1 flex flex-col gap-3">
                  <div className="font-mono text-[11px] text-ink-3 uppercase tracking-[0.12em]">
                    {p.num}
                  </div>
                  <h3 className="font-display italic text-[36px] leading-none">{p.title}</h3>
                  <p className="text-sm text-ink-2 leading-[1.55] mt-auto">{p.desc}</p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
