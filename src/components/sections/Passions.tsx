import { FiHeart } from 'react-icons/fi'
import { RevealWrapper } from '../ui/RevealWrapper'
import { Eyebrow } from '../ui/Eyebrow'
import { passions } from '../../data/portfolio'
import { cn } from '../../lib/utils'

export function Passions() {
  return (
    <section id="passions" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <RevealWrapper>
          <Eyebrow icon={FiHeart}>Off-screen — 07</Eyebrow>
        </RevealWrapper>

        <RevealWrapper>
          <h2 className="font-display text-[clamp(48px,7vw,112px)] leading-[0.95] tracking-[-0.02em] mb-16">
            Ce qui se passe <span className="italic text-ink-2">quand je ferme</span>{' '}
            <span className="text-accent italic">VS Code.</span>
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          {passions.map((p, i) => (
            <RevealWrapper key={p.id} delay={i * 0.12} className="h-full">
              <div className="h-full rounded-card overflow-hidden border border-[var(--line)] bg-card flex flex-col transition-transform duration-350 hover:-translate-y-1.5">
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
