import { FiCpu } from 'react-icons/fi'
import { RevealWrapper } from '../ui/RevealWrapper'
import { Eyebrow } from '../ui/Eyebrow'
import { skillCategories } from '../../data/portfolio'
import { cn } from '../../lib/utils'

export function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <RevealWrapper>
          <Eyebrow icon={FiCpu}>Stack technique — 04</Eyebrow>
        </RevealWrapper>

        <RevealWrapper>
          <h2 className="font-display text-[clamp(48px,7vw,112px)] leading-[0.95] tracking-[-0.02em] mb-16">
            Les outils <span className="italic text-ink-2">que je manie</span>
            <br />
            au quotidien.
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {skillCategories.map((cat, i) => (
            <RevealWrapper key={cat.id} delay={i % 2 === 1 ? 0.12 : 0}>
              <div>
                <h3 className="font-display italic text-[28px] mb-5 font-normal">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={cn(
                        'skill-chip font-sans text-sm px-4 py-2 border rounded-full transition-all duration-300 cursor-default',
                        'hover:-translate-y-0.5 hover:bg-ink hover:text-[var(--bg)] hover:border-ink',
                        skill.highlight
                          ? 'bg-accent text-accent-ink border-accent'
                          : 'bg-card border-[var(--line)]',
                      )}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
