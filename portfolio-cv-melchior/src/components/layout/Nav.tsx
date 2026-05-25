import { useState } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useActiveSection } from '../../hooks/useActiveSection'
import { CVModal } from '../ui/CVModal'
import { cn } from '../../lib/utils'

const navLinks = [
  { href: '#about', label: 'À propos' },
  { href: '#xp', label: 'Expérience' },
  { href: '#projects', label: 'Projets' },
  { href: '#skills', label: 'Stack' },
  { href: '#certs', label: 'Certifs' },
  { href: '#passions', label: 'Passions' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const active = useActiveSection()
  const [cvOpen, setCvOpen] = useState(false)
  const { scrollY } = useScroll()
  const bg = useTransform(scrollY, [0, 40], ['transparent', 'rgba(0,0,0,0)'])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between gap-6 px-[clamp(20px,4vw,56px)] transition-all duration-300"
        style={{ paddingTop: 18, paddingBottom: 18 }}
        data-scrolled={undefined}
        onViewportEnter={undefined}
      >
        <NavInner active={active} onCvClick={() => setCvOpen(true)} />
      </motion.nav>
      <NavScrolled active={active} onCvClick={() => setCvOpen(true)} bg={bg} />
      <CVModal open={cvOpen} onOpenChange={setCvOpen} />
    </>
  )
}

function NavInner({
  active,
  onCvClick,
  scrolled,
}: {
  active: string
  onCvClick: () => void
  scrolled?: boolean
}) {
  return (
    <>
      <a
        href="#hero"
        className="font-display italic text-[26px] leading-none tracking-[-0.01em] text-ink"
      >
        M<span className="text-accent">.</span>Obame
      </a>

      <div className="hidden md:flex gap-7 text-sm font-medium">
        {navLinks.map(({ href, label }) => {
          const id = href.replace('#', '')
          const isActive = active === id
          return (
            <a
              key={href}
              href={href}
              className={cn(
                'relative py-1.5 transition-colors',
                'after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-full after:bg-accent',
                'after:transition-transform after:duration-350 after:ease-[cubic-bezier(.7,0,.3,1)]',
                isActive
                  ? 'after:scale-x-100 after:origin-left'
                  : 'after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left',
              )}
            >
              {label}
            </a>
          )
        })}
      </div>

      <button
        onClick={onCvClick}
        className={cn(
          'flex items-center gap-2 text-[13px] font-semibold px-[18px] py-2.5 rounded-full transition-all duration-300',
          'hover:-translate-y-0.5 group',
          scrolled
            ? 'bg-ink text-[var(--bg)] hover:bg-accent hover:text-accent-ink'
            : 'bg-ink text-[var(--bg)] hover:bg-accent hover:text-accent-ink',
        )}
      >
        CV
        <span className="inline-block transition-transform duration-300 group-hover:rotate-[-45deg]">
          →
        </span>
      </button>
    </>
  )
}

function NavScrolled({
  active,
  onCvClick,
}: {
  active: string
  onCvClick: () => void
  bg: MotionValue<string>
}) {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [30, 60], [0, 1])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[99] flex items-center justify-between gap-6 px-[clamp(20px,4vw,56px)] border-b border-[var(--line)]"
      style={{
        paddingTop: 12,
        paddingBottom: 12,
        opacity,
        background: 'color-mix(in oklab, var(--bg) 88%, transparent)',
        backdropFilter: 'blur(14px)',
      }}
    >
      <NavInner active={active} onCvClick={onCvClick} scrolled />
    </motion.nav>
  )
}
