import { motion, useScroll, useTransform } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <motion.div
      style={{ width }}
      className="fixed top-0 left-0 h-[2px] bg-accent z-[200]"
    />
  )
}
