import { memo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp } from '../../lib/motionVariants'
import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../lib/utils'

interface RevealWrapperProps {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

export const RevealWrapper = memo(function RevealWrapper({
  children,
  delay = 0,
  className,
  as = 'div',
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -50px 0px', amount: 0.12 })
  const { theme } = useTheme()
  const noAnim = theme.animations === 'none'

  const MotionEl = motion[as as 'div'] as typeof motion.div

  return (
    <MotionEl
      ref={ref}
      className={cn(className)}
      variants={fadeUp}
      initial={noAnim ? 'visible' : 'hidden'}
      animate={noAnim || inView ? 'visible' : 'hidden'}
      transition={delay > 0 ? { delay } : undefined}
    >
      {children}
    </MotionEl>
  )
})
