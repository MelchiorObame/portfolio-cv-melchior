import { RevealWrapper } from '../ui/RevealWrapper'
import { TagChip } from '../ui/TagChip'
import { projects } from '../../data/portfolio'
import { cn } from '../../lib/utils'
import type { Project } from '../../types/portfolio'

function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const spanClass = {
    12: 'col-span-12',
    7: 'col-span-12 md:col-span-7',
    5: 'col-span-12 md:col-span-5',
    6: 'col-span-12 md:col-span-6',
    4: 'col-span-12 md:col-span-4',
  }[project.span]

  return (
    <RevealWrapper delay={delay} className={spanClass}>
      <a
        href={project.href}
        className={cn(
          'project-card group relative rounded-card overflow-hidden border flex flex-col justify-between p-9 min-h-[320px] transition-transform duration-400 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1.5 block',
          project.featured
            ? 'bg-ink text-[var(--bg)] border-transparent min-h-[480px]'
            : 'bg-card border-[var(--line)]',
        )}
      >
        {project.featured && (
          <div
            className="absolute top-9 right-9 w-[280px] h-[280px] rounded-full opacity-90 blur-[2px] hidden md:block"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, var(--accent), transparent 65%), conic-gradient(from 0deg, #ff5a1f, #ffba49, #4e7c3a, #2c5e4f, #ff5a1f)',
              animation: 'spin 30s linear infinite',
            }}
          />
        )}

        <div>
          <div
            className={cn(
              'font-mono text-[11px] tracking-[0.12em] uppercase mb-4',
              project.featured ? 'text-highlight' : 'text-ink-3',
            )}
          >
            {project.tag}
          </div>
          <h3 className="font-display text-[clamp(32px,3.4vw,56px)] leading-[1.02] tracking-[-0.015em]">
            {project.titleParts.map((line, li) => (
              <span key={li} className="block">
                {line.map((part, pi) =>
                  part.italic ? (
                    <em key={pi} className="italic text-accent">
                      {part.text}
                    </em>
                  ) : (
                    <span key={pi}>{part.text}</span>
                  ),
                )}
              </span>
            ))}
          </h3>
          <p
            className={cn(
              'mt-4 text-[15px] max-w-[540px]',
              project.featured ? 'opacity-70' : 'text-ink-2',
            )}
          >
            {project.desc}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-6">
          {project.tech.map((t) => (
            <TagChip key={t} ghost={project.featured}>
              {t}
            </TagChip>
          ))}
        </div>

        <div
          className={cn(
            'absolute right-7 bottom-7 w-12 h-12 rounded-full border flex items-center justify-center text-lg transition-all duration-350',
            'group-hover:rotate-[-45deg] group-hover:bg-accent group-hover:border-accent group-hover:text-accent-ink',
            project.featured ? 'border-white/25' : 'border-[var(--line)]',
          )}
        >
          →
        </div>
      </a>
    </RevealWrapper>
  )
}

export function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <RevealWrapper>
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-2 px-3 py-1.5 border border-[var(--line)] rounded-full mb-7 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">
            Projets phares — 03
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <h2 className="font-display text-[clamp(48px,7vw,112px)] leading-[0.95] tracking-[-0.02em] mb-16">
            Selected <span className="italic text-ink-2">work.</span>
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-12 gap-6">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              delay={p.featured ? 0 : (i % 3) * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
