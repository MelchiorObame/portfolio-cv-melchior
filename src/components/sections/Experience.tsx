import { FiBriefcase } from 'react-icons/fi'
import { RevealWrapper } from '../ui/RevealWrapper'
import { TagChip } from '../ui/TagChip'
import { Eyebrow } from '../ui/Eyebrow'
import { experience } from '../../data/portfolio'
import type { Experience as ExperienceType } from '../../types/portfolio'

function CompanyLogo({ logo, company }: { logo?: string; company: string }) {
  if (!logo) return null
  return (
    <img
      src={logo}
      alt={company}
      className="xp-logo h-7 w-auto max-w-[80px] object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
    />
  )
}

function SubEntry({ job }: { job: ExperienceType }) {
  return (
    <RevealWrapper>
      <div className="group grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-8 py-6 relative">
        {/* sub-dot */}
        <div className="hidden md:block absolute left-[-33px] top-[26px] w-2.5 h-2.5 rounded-full border-2 border-[var(--line)] bg-[var(--bg)] z-10 group-hover:border-accent transition-colors duration-300" />
        {/* sub-connector */}
        <div className="hidden md:block absolute left-[-29px] top-0 bottom-0 w-px bg-[var(--line)]" />

        <div className="font-mono text-[11px] text-ink-3 tracking-[0.04em] pt-0.5 leading-relaxed">
          {job.period}
          <br />
          <span className="text-ink-3">{job.duration}</span>
        </div>

        <div className="transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:translate-x-1.5">
          <div className="flex items-center gap-3 mb-1">
            <CompanyLogo logo={job.logo} company={job.company} />
            <h4 className="font-display italic text-[clamp(20px,2vw,28px)] leading-none tracking-[-0.015em]">
              {job.company}
            </h4>
          </div>
          <div className="text-xs text-ink-3 font-mono mb-2.5">
            {job.role}
            {job.via && <span className="opacity-60"> · {job.via}</span>}
            {job.location && <span className="opacity-60"> · {job.location}</span>}
          </div>
          <p className="text-[14px] text-ink-2 leading-[1.6] max-w-[660px]">{job.desc}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {job.tags.map((tag) => (
              <TagChip key={tag}>{tag}</TagChip>
            ))}
          </div>
        </div>
      </div>
    </RevealWrapper>
  )
}

function TopEntry({ job, isFirst }: { job: ExperienceType; isFirst: boolean }) {
  const hasChildren = job.children && job.children.length > 0

  return (
    <RevealWrapper>
      <div className="relative">
        {/* Timeline dot */}
        <div
          className="hidden md:block absolute left-[179px] top-[38px] w-3.5 h-3.5 rounded-full border-2 border-accent bg-[var(--bg)] z-10 transition-all duration-300"
          style={{ boxShadow: isFirst ? '0 0 14px var(--accent)' : undefined }}
        />

        <div className={`group grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-12 pt-9 pb-${hasChildren ? '4' : '9'}`}>
          <div className="font-mono text-xs text-ink-3 tracking-[0.04em] pt-1.5 md:pr-8">
            {job.period}
            <br />
            <span>{job.duration}</span>
          </div>

          <div className="transition-transform duration-400 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:translate-x-2">
            {/* Company header */}
            <div className="flex items-center gap-4 mb-1.5">
              <CompanyLogo logo={job.logo} company={job.company} />
              <h3 className="font-display italic text-[clamp(28px,3vw,44px)] leading-[1.05] tracking-[-0.015em]">
                <span className="text-ink-3 not-italic font-sans font-normal text-[0.7em] mr-1.5">@</span>
                {job.company}
              </h3>
            </div>

            <div className="text-sm text-ink-2 mb-3.5 font-mono text-xs tracking-[0.03em]">
              {job.role}
              {job.location && <span className="text-ink-3"> · {job.location}</span>}
            </div>

            {!hasChildren && (
              <>
                <p className="text-[15px] text-ink-2 leading-[1.6] max-w-[720px]">{job.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {job.tags.map((tag) => <TagChip key={tag}>{tag}</TagChip>)}
                </div>
              </>
            )}

            {hasChildren && (
              <>
                <p className="text-[14px] text-ink-3 leading-[1.6] max-w-[640px] mb-6 italic">{job.desc}</p>

                {/* Sub-missions grouped block */}
                <div className="relative pl-10 ml-1 border-l-2 border-accent/20">
                  <div className="absolute -left-[1px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />
                  {job.children!.map((child) => (
                    <SubEntry key={child.id} job={child} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* bottom separator */}
        <div className="h-px bg-[var(--line)]" />
      </div>
    </RevealWrapper>
  )
}

export function Experience() {
  return (
    <section id="xp">
      <div className="container">
        <RevealWrapper>
          <Eyebrow icon={FiBriefcase}>Expérience — 02</Eyebrow>
        </RevealWrapper>

        <RevealWrapper>
          <h2 className="font-display text-[clamp(48px,7vw,112px)] leading-[0.95] tracking-[-0.02em] mb-16">
            Six ans <span className="italic text-ink-2">à industrialiser</span> l&apos;IA{' '}
            <span className="text-accent italic">en prod.</span>
          </h2>
        </RevealWrapper>

        <div className="max-w-[1100px] relative">
          {/* Main timeline line */}
          <div className="hidden md:block absolute left-[179px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/25 to-transparent" />

          <div className="border-t border-[var(--line)]">
            {experience.map((job, idx) => (
              <TopEntry key={job.id} job={job} isFirst={idx === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
