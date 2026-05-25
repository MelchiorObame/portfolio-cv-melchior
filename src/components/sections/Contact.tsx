import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { RevealWrapper } from '../ui/RevealWrapper'
import { WordReveal } from '../ui/WordReveal'
import { cn } from '../../lib/utils'

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse e-mail invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères').max(2000),
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: ContactFormData) => {
    window.location.href = `mailto:obamemelchior@gmail.com?subject=Contact%20%E2%80%94%20${encodeURIComponent(data.name)}&body=${encodeURIComponent(data.message)}`
    reset()
  }

  const inputClass =
    'w-full bg-transparent border border-[var(--line)] rounded-card px-5 py-4 font-mono text-sm text-ink placeholder:text-ink-3 focus:outline-none focus:border-accent transition-colors duration-200'

  return (
    <section id="contact" className="text-center overflow-hidden relative py-[calc(var(--pad-section)+40px)]">
      <div
        className="blob absolute bottom-[-200px] left-[10%] w-[480px] h-[480px] rounded-full blur-[60px] opacity-35 pointer-events-none"
        style={{ background: 'var(--accent)', zIndex: -1 }}
      />
      <div
        className="blob absolute top-0 right-[-120px] w-[280px] h-[280px] rounded-full blur-[60px] opacity-35 pointer-events-none"
        style={{ background: 'var(--highlight)', zIndex: -1 }}
      />

      <div className="container">
        <RevealWrapper>
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-2 px-3 py-1.5 border border-[var(--line)] rounded-full mb-7 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">
            Contact — 10
          </div>
        </RevealWrapper>

        <WordReveal
          as="h2"
          className="font-display text-[clamp(64px,12vw,200px)] leading-[0.95] tracking-[-0.03em] [text-wrap:balance]"
        >
          Travaillons <span className="italic text-ink-2">ensemble.</span>
        </WordReveal>

        <RevealWrapper delay={0.12}>
          <a
            href="mailto:obamemelchior@gmail.com"
            className="inline-flex items-center gap-4 mt-12 font-mono text-sm px-8 py-[18px] rounded-full bg-ink text-[var(--bg)] hover:bg-accent hover:text-accent-ink transition-all duration-300 hover:-translate-y-1"
          >
            obamemelchior@gmail.com <span>→</span>
          </a>
        </RevealWrapper>

        <RevealWrapper delay={0.24} className="mt-20 font-mono text-xs text-ink-3 flex gap-8 justify-center flex-wrap">
          <span>Paris &amp; remote</span>
          <a href="tel:+33629188111" className="text-ink border-b border-[var(--line)] hover:text-accent hover:border-accent transition-colors pb-0.5">
            +33 6 29 18 81 11 ↗
          </a>
          <a href="https://www.linkedin.com/in/melchior-obame" target="_blank" rel="noopener noreferrer" className="text-ink border-b border-[var(--line)] hover:text-accent hover:border-accent transition-colors pb-0.5">
            LinkedIn ↗
          </a>
          <span>Disponible 2026</span>
        </RevealWrapper>

        <RevealWrapper delay={0.3} className="mt-20 max-w-xl mx-auto text-left">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div>
              <input
                {...register('name')}
                placeholder="Votre nom"
                className={cn(inputClass, errors.name && 'border-red-500')}
              />
              {errors.name && (
                <p className="font-mono text-[11px] text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <input
                {...register('email')}
                type="email"
                placeholder="votre@email.com"
                className={cn(inputClass, errors.email && 'border-red-500')}
              />
              {errors.email && (
                <p className="font-mono text-[11px] text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <textarea
                {...register('message')}
                placeholder="Votre message..."
                rows={5}
                className={cn(inputClass, 'resize-none', errors.message && 'border-red-500')}
              />
              {errors.message && (
                <p className="font-mono text-[11px] text-red-500 mt-1">{errors.message.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="font-mono text-sm px-8 py-4 rounded-full bg-ink text-[var(--bg)] hover:bg-accent hover:text-accent-ink transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50"
            >
              {isSubmitting ? 'Envoi…' : isSubmitSuccessful ? 'Merci ✓' : 'Envoyer →'}
            </button>
          </form>
        </RevealWrapper>
      </div>
    </section>
  )
}
