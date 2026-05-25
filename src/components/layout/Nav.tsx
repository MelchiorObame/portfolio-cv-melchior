import { useState } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
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

  const py         = useTransform(scrollY, [0, 60], [18, 12])
  const bg         = useTransform(scrollY, [0, 60], ['rgba(0,0,0,0)', 'color-mix(in oklab, var(--bg) 88%, transparent)'])
  const blurPx     = useTransform(scrollY, [0, 60], [0, 14])
  const backdropFilter = useMotionTemplate`blur(${blurPx}px)`
  const borderOp   = useTransform(scrollY, [0, 60], [0, 1])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between gap-6 px-[clamp(20px,4vw,56px)]"
        style={{
          paddingTop: py,
          paddingBottom: py,
          background: bg,
          backdropFilter,
        }}
      >
        {/* border-bottom via motion opacity */}
        <motion.div
          className="absolute inset-x-0 bottom-0 h-px bg-[var(--line)]"
          style={{ opacity: borderOp }}
        />

        {/* Logo */}
        <a href="#hero" className="relative z-10 shrink-0">
          <img
            src="/images/logo.png"
            alt="Melchior Obame"
            width={40}
            height={40}
            className="nav-logo h-20 w-auto"
          />
        </a>

        {/* Links */}
        <div className="hidden md:flex gap-7 text-sm font-medium relative z-10">
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
                  'after:transition-transform after:duration-[350ms] after:ease-[cubic-bezier(.7,0,.3,1)]',
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

        {/* CTA */}
        <button
          onClick={() => setCvOpen(true)}
          className="relative z-10 flex items-center gap-2 text-[13px] font-semibold px-[18px] py-2.5 rounded-full bg-ink text-[var(--bg)] hover:bg-accent hover:text-accent-ink transition-all duration-300 hover:-translate-y-0.5 group"
        >
          CV
          <span className="inline-block transition-transform duration-300 group-hover:rotate-[-45deg]">
            →
          </span>
        </button>
      </motion.nav>

      <CVModal open={cvOpen} onOpenChange={setCvOpen} />
    </>
  )
}
