import { FiUser } from 'react-icons/fi'
import { RevealWrapper } from '../ui/RevealWrapper'
import { WordReveal } from '../ui/WordReveal'
import { AnimatedNumber } from '../ui/AnimatedNumber'
import { Eyebrow } from '../ui/Eyebrow'
import { stats } from '../../data/portfolio'

export function About() {
  return (
    <section id="about">
      <div className="container">
        <RevealWrapper>
          <Eyebrow icon={FiUser}>À propos — 01</Eyebrow>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-[clamp(48px,7vw,120px)] items-start">
          <WordReveal
            as="h2"
            className="font-display italic text-[clamp(32px,3.6vw,52px)] leading-[1.1] tracking-[-0.015em] [text-wrap:balance]"
          >
            Je mets en{' '}
            <span className="text-accent">production</span> des modèles IA, j&apos;orchestre des
            pipelines CI/CD fiables, et je conçois des architectures multi-agents qui livrent une
            vraie valeur métier.
          </WordReveal>

          <RevealWrapper delay={0.12} className="text-[17px] text-ink-2 leading-[1.7] space-y-4">
            <p>
              5+ années à industrialiser le cycle de vie de l&apos;IA : du POC au déploiement à
              grande échelle, en passant par le monitoring, le re-training et la gouvernance des
              données.
            </p>
            <p>
              À l&apos;aise avec AWS, Databricks, Airflow, Terraform — j&apos;applique les bonnes
              pratiques MLOps pour transformer des expériences de data science en systèmes
              production-grade. Et depuis 2 ans, je conçois des solutions GenAI : RAG, agents
              autonomes, orchestrateurs multi-agents.
            </p>
            <p>
              Aujourd&apos;hui chez Devoteam, j&apos;interviens sur des missions stratégiques — CNP
              Assurances, Ubisoft × AWS, Decathlon, L&apos;Équipe, +Simple…
            </p>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 pt-12 border-t border-[var(--line)]">
          {stats.map((stat, i) => (
            <RevealWrapper key={stat.label} delay={i * 0.12}>
              <div>
                <AnimatedNumber
                  target={stat.countTo}
                  suffix={stat.suffix}
                  fallback={stat.value}
                  className="font-display italic text-[clamp(48px,5vw,72px)] leading-none tracking-[-0.02em] text-accent"
                />
                <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3 mt-2">
                  {stat.label}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
