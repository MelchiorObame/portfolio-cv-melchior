import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { RevealWrapper } from '../ui/RevealWrapper'
import { languages } from '../../data/portfolio'
import { barFill } from '../../lib/motionVariants'
import { useTheme } from '../../hooks/useTheme'

function LanguageBar({ percent }: { percent: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const { theme } = useTheme()
  const noAnim = theme.animations === 'none'
  const variant = barFill(percent)

  return (
    <div ref={ref} className="h-1 bg-[var(--line)] rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-accent rounded-full"
        variants={variant}
        initial={noAnim ? 'visible' : 'hidden'}
        animate={noAnim || inView ? 'visible' : 'hidden'}
      />
    </div>
  )
}

export function Languages() {
  return (
    <section id="langues">
      <div className="container">
        <RevealWrapper>
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-2 px-3 py-1.5 border border-[var(--line)] rounded-full mb-7 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">
            Langues — 06
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <h2 className="font-display text-[clamp(48px,7vw,112px)] leading-[0.95] tracking-[-0.02em] mb-16">
            Trois langues, <span className="italic text-ink-2">trois cultures.</span>
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {languages.map((lang, i) => (
            <RevealWrapper key={lang.id} delay={i * 0.12}>
              <div className="p-7 border border-[var(--line)] rounded-card">
                <div className="font-display italic text-[32px] leading-none mb-3.5">{lang.name}</div>
                <div className="font-mono text-[11px] text-ink-3 uppercase tracking-[0.1em] mb-3">
                  {lang.level}
                </div>
                <LanguageBar percent={lang.percent} />
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
