import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -50px 0px', amount: threshold })
  return { ref, inView }
}
