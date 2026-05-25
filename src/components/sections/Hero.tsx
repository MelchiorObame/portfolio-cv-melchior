import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { StatusPill } from '../ui/StatusPill'
import { RevealWrapper } from '../ui/RevealWrapper'
import { marqueeItems } from '../../data/portfolio'

const marqueeContent = [...marqueeItems, ...marqueeItems]

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const photoY = useTransform(scrollY, [0, 600], [0, -60])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-[120px] pb-[60px]"
    >
      {/* blobs */}
      <div
        className="absolute rounded-full blur-[60px] pointer-events-none -z-10"
        style={{
          width: 480, height: 480,
          background: 'var(--accent)',
          top: -120, left: -180, opacity: 0.35,
        }}
      />
      <div
        className="absolute rounded-full blur-[60px] pointer-events-none -z-10"
        style={{
          width: 380, height: 380,
          background: 'var(--secondary)',
          bottom: -120, right: '20%', opacity: 0.25,
        }}
      />
      <div
        className="absolute rounded-full blur-[60px] pointer-events-none -z-10"
        style={{
          width: 280, height: 280,
          background: 'var(--highlight)',
          top: '40%', right: -100, opacity: 0.35,
        }}
      />

      <div className="container">
        <StatusPill />

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-[clamp(32px,5vw,80px)] items-center flex-1 pt-10">
          {/* Left — name + meta */}
          <div>
            <h1
              className="font-display text-[clamp(72px,14vw,220px)] leading-[0.86] tracking-[-0.035em] [text-wrap:balance]"
            >
              <span className="block italic">Melchior</span>
              <span className="block font-sans font-semibold tracking-[-0.04em]">
                Obame<span className="text-accent">.</span>
              </span>
            </h1>

            <RevealWrapper delay={0.12}>
              <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-4 mt-12 max-w-[540px] font-mono text-xs text-ink-2 tracking-[0.04em]">
                <dt className="uppercase text-ink-3">Rôle</dt>
                <dd>AI / ML / MLOps — Senior Engineer</dd>
                <dt className="uppercase text-ink-3">Focus</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {['GenAI', 'Multi-Agent', 'MLOps', 'AWS'].map((t) => (
                    <span key={t} className="px-2 py-0.5 border border-[var(--line)] rounded text-ink">
                      {t}
                    </span>
                  ))}
                </dd>
                <dt className="uppercase text-ink-3">Lieu</dt>
                <dd className="text-ink">Paris, FR</dd>
                <dt className="uppercase text-ink-3">Année</dt>
                <dd className="text-ink">2026 — currently @ CNP Assurances</dd>
              </dl>
            </RevealWrapper>
          </div>

          {/* Right — photo card */}
          <motion.div
            ref={photoRef}
            style={{ y: photoY }}
            className="relative aspect-[3/4] w-full max-w-[380px] ml-auto rounded-card overflow-hidden"
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, var(--bg-2), var(--highlight))',
                boxShadow: '0 30px 80px -30px rgba(0,0,0,0.35)',
                transform: 'rotate(2deg)',
                borderRadius: 'var(--radius)',
              }}
            />
            {/* sticker */}
            <div
              className="absolute -top-[22px] -right-[22px] w-[110px] h-[110px] rounded-full bg-accent text-accent-ink grid place-items-center font-mono text-[10px] tracking-[0.12em] text-center p-3"
              style={{
                transform: 'rotate(-12deg)',
                animation: 'spin 20s linear infinite',
              }}
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                <defs>
                  <path
                    id="circ"
                    d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                  />
                </defs>
                <text fontFamily="JetBrains Mono" fontSize="9" fill="currentColor" letterSpacing="2">
                  <textPath href="#circ">AVAILABLE · 2026 · AVAILABLE · 2026 · </textPath>
                </text>
              </svg>
              <span className="relative z-10">★</span>
            </div>

            {/* placeholder */}
            <div
              className="absolute inset-0 flex items-end justify-center pb-6"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(135deg, transparent 0 14px, rgba(0,0,0,0.04) 14px 15px)',
              }}
            >
              <span className="font-mono text-[11px] text-ink-2 bg-[var(--bg)] px-2.5 py-1 rounded">
                // portrait — glisse une photo
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* marquee */}
      <div
        className="border-t border-b border-[var(--line)] py-5 overflow-hidden whitespace-nowrap font-display italic text-[clamp(36px,5vw,72px)] leading-none mt-10"
        aria-hidden="true"
      >
        <div className="marquee-track inline-flex gap-12">
          {[...marqueeContent, ...marqueeContent].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-12">
              {item}
              {i % 1 === 0 && (
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 shrink-0 text-accent"
                  style={{ animation: 'spin 8s linear infinite' }}
                >
                  <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
                </svg>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
