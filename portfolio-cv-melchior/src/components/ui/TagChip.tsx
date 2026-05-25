import { cn } from '../../lib/utils'

interface TagChipProps {
  children: React.ReactNode
  highlight?: boolean
  className?: string
  ghost?: boolean
}

export function TagChip({ children, highlight, className, ghost }: TagChipProps) {
  return (
    <span
      className={cn(
        'font-mono text-[11px] px-2.5 py-1 border rounded-full',
        highlight
          ? 'bg-accent text-accent-ink border-accent'
          : ghost
            ? 'border-white/20 text-white/80'
            : 'bg-card border-[var(--line)] text-ink-2',
        'skill-chip',
        className,
      )}
    >
      {children}
    </span>
  )
}
