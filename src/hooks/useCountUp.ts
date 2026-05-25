import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export function useCountUp(target: number | null, suffix = '') {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(target === null ? '∞' : '0' + suffix)

  useEffect(() => {
    if (!inView || target === null) return
    let cur = 0
    const step = Math.max(1, Math.ceil(target / 30))
    const tick = () => {
      cur = Math.min(target, cur + step)
      setDisplay(cur + suffix)
      if (cur < target) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, suffix])

  return { ref, display }
}
