import type { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
  },
}

export const wordVariant: Variants = {
  hidden: { opacity: 0, y: '0.4em' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.04, ease: [0.2, 0.7, 0.2, 1] },
  }),
}

export const panelVariant: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 400, damping: 30 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 8,
    transition: { duration: 0.18 },
  },
}

export function barFill(percent: number): Variants {
  return {
    hidden: { width: '0%' },
    visible: {
      width: `${percent}%`,
      transition: { duration: 1.6, ease: [0.2, 0.7, 0.2, 1] },
    },
  }
}
