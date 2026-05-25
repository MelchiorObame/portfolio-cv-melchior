import { FiBriefcase } from 'react-icons/fi'
import { RevealWrapper } from '../ui/RevealWrapper'
import { TagChip } from '../ui/TagChip'
import { Eyebrow } from '../ui/Eyebrow'
import { experience } from '../../data/portfolio'

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
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute left-[179px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-30" />

          {experience.map((job, idx) => (
            <RevealWrapper key={job.id}>
              <div className="group grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-12 py-9 relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-[172px] top-[42px] w-3.5 h-3.5 rounded-full border-2 border-accent bg-[var(--bg)] z-10 transition-all duration-300 group-hover:bg-accent group-hover:shadow-[0_0_12px_var(--accent)]"
                  style={{ boxShadow: idx === 0 ? '0 0 16px var(--accent)' : undefined }}
                />

                <div className="font-mono text-xs text-ink-3 tracking-[0.04em] pt-1.5 md:pr-8">
                  {job.period}
                  <br />
                  <span className="text-ink-3">{job.duration}</span>
                </div>
                <div className="transition-transform duration-400 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:translate-x-2">
                  <h3 className="font-display italic text-[clamp(28px,3vw,44px)] leading-[1.05] tracking-[-0.015em] mb-1.5">
                    <span className="text-ink-3 not-italic font-sans font-normal text-[0.7em] mr-2">
                      @
                    </span>
                    {job.company}
                  </h3>
                  <div className="text-sm text-ink-2 mb-3.5">
                    {job.role}
                    {job.via && (
                      <>
                        <span className="inline-block mx-2 opacity-50">·</span>
                        {job.via}
                      </>
                    )}
                    {job.location && (
                      <>
                        <span className="inline-block mx-2 opacity-50">·</span>
                        {job.location}
                      </>
                    )}
                  </div>
                  <p className="text-[15px] text-ink-2 leading-[1.6] max-w-[720px]">{job.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {job.tags.map((tag) => (
                      <TagChip key={tag}>{tag}</TagChip>
                    ))}
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
