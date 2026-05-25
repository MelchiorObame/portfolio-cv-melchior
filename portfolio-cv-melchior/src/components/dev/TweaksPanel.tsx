import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'
import { panelVariant } from '../../lib/motionVariants'
import type { Palette, Density, AnimLevel } from '../../types/portfolio'

const palettes: Palette[] = ['cream', 'ink', 'moss', 'rose']
const densities: Density[] = ['comfy', 'compact']
const animLevels: AnimLevel[] = ['marked', 'subtle', 'none']

export function TweaksPanel() {
  const [open, setOpen] = useState(false)
  const { theme, setPalette, setDensity, setAnimations, setAccent } = useTheme()

  return (
    <div className="fixed bottom-6 right-6 z-[9998] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            variants={panelVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-72 rounded-card border border-[var(--line)] bg-[var(--bg)] shadow-2xl p-5 font-mono text-xs"
          >
            <div className="text-ink-3 uppercase tracking-[0.15em] text-[10px] mb-4">
              Tweaks — dev only
            </div>

            <Section label="Palette">
              <div className="flex gap-2 flex-wrap">
                {palettes.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPalette(p)}
                    className={`px-3 py-1 rounded-full border transition-all ${
                      theme.palette === p
                        ? 'bg-accent text-accent-ink border-accent'
                        : 'border-[var(--line)] text-ink-2 hover:border-accent'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </Section>

            <Section label="Density">
              <div className="flex gap-2">
                {densities.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDensity(d)}
                    className={`px-3 py-1 rounded-full border transition-all ${
                      theme.density === d
                        ? 'bg-accent text-accent-ink border-accent'
                        : 'border-[var(--line)] text-ink-2 hover:border-accent'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </Section>

            <Section label="Animations">
              <div className="flex gap-2 flex-wrap">
                {animLevels.map((a) => (
                  <button
                    key={a}
                    onClick={() => setAnimations(a)}
                    className={`px-3 py-1 rounded-full border transition-all ${
                      theme.animations === a
                        ? 'bg-accent text-accent-ink border-accent'
                        : 'border-[var(--line)] text-ink-2 hover:border-accent'
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </Section>

            {theme.palette === 'cream' && (
              <Section label="Accent color">
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={theme.accent}
                    onChange={(e) => setAccent(e.target.value)}
                    className="w-8 h-8 rounded border border-[var(--line)] cursor-pointer bg-transparent"
                  />
                  <span className="text-ink-3">{theme.accent}</span>
                </div>
              </Section>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        className="w-10 h-10 rounded-full bg-ink text-[var(--bg)] flex items-center justify-center text-base shadow-lg hover:bg-accent transition-colors"
        title="Toggle tweaks panel"
      >
        {open ? '✕' : '⚙'}
      </button>
    </div>
  )
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <div className="text-ink-3 text-[10px] uppercase tracking-[0.12em] mb-2">{label}</div>
      {children}
    </div>
  )
}
