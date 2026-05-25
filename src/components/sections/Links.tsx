import { FiExternalLink } from 'react-icons/fi'
import { RevealWrapper } from '../ui/RevealWrapper'
import { Eyebrow } from '../ui/Eyebrow'
import { socialLinks } from '../../data/portfolio'

export function Links() {
  return (
    <section id="links">
      <div className="container">
        <RevealWrapper>
          <Eyebrow icon={FiExternalLink}>Ailleurs — 09</Eyebrow>
        </RevealWrapper>

        <RevealWrapper>
          <h2 className="font-display text-[clamp(48px,7vw,112px)] leading-[0.95] tracking-[-0.02em] mb-16">
            Mes <span className="italic text-ink-2">autres</span> espaces.
          </h2>
        </RevealWrapper>

        <div className="border-t border-[var(--line)]">
          {socialLinks.map((link) => (
            <RevealWrapper key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-row group flex items-center gap-6 py-6 px-2 border-b border-[var(--line)] transition-all duration-300 hover:text-accent-ink hover:pl-6 cursor-pointer"
              >
                <div className="font-mono text-xs text-ink-3 w-8 shrink-0">{link.num}</div>
                <div className="font-display italic text-[clamp(24px,3vw,40px)] flex-1">
                  {link.name}
                  {link.nameItalic && <em> {link.nameItalic}</em>}
                </div>
                <div className="font-mono text-xs text-ink-3 group-hover:text-white/70 transition-colors hidden sm:block">
                  {link.host}
                </div>
                <div className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-lg">
                  ↗
                </div>
              </a>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
