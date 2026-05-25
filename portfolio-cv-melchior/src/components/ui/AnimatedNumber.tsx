import { useCountUp } from '../../hooks/useCountUp'

interface AnimatedNumberProps {
  target: number | null
  suffix?: string
  fallback?: string
  className?: string
}

export function AnimatedNumber({ target, suffix = '', fallback, className }: AnimatedNumberProps) {
  const { ref, display } = useCountUp(target, suffix)
  return (
    <div ref={ref} className={className}>
      {target === null ? (fallback ?? '∞') : display}
    </div>
  )
}
