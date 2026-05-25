import type { IconType } from 'react-icons'

interface EyebrowProps {
  icon: IconType
  children: React.ReactNode
}

export function Eyebrow({ icon: Icon, children }: EyebrowProps) {
  return (
    <div className="inline-flex items-center gap-3 font-mono text-[13px] tracking-[0.14em] uppercase text-ink-2 px-4 py-2.5 border border-[var(--line)] rounded-full mb-8">
      <Icon className="text-accent shrink-0" size={14} />
      {children}
    </div>
  )
}
