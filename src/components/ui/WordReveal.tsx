import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { wordVariant } from '../../lib/motionVariants'
import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../lib/utils'

interface WordRevealProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'p'
}

let wordIndex = 0

function processNode(node: React.ReactNode, noAnim: boolean): React.ReactNode {
  if (typeof node === 'string') {
    return node.split(/(\s+)/).map((part) => {
      if (/^\s+$/.test(part)) return part
      const idx = wordIndex++
      return (
        <motion.span
          key={idx}
          className="inline-block"
          variants={wordVariant}
          custom={idx}
          style={{ display: 'inline-block', willChange: 'transform, opacity' }}
        >
          {part}
        </motion.span>
      )
    })
  }
  if (React.isValidElement(node)) {
    const el = node as React.ReactElement<{ children?: React.ReactNode; className?: string }>
    return React.cloneElement(el, {
      ...el.props,
      children: React.Children.map(el.props.children, (child) => processNode(child, noAnim)),
    })
  }
  return node
}

export function WordReveal({ children, className, as: Tag = 'h2' }: WordRevealProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -50px 0px', amount: 0.12 })
  const { theme } = useTheme()
  const noAnim = theme.animations === 'none'

  wordIndex = 0

  const processed = React.Children.map(children, (child) => processNode(child, noAnim))

  return (
    <motion.div
      ref={ref}
      initial={noAnim ? 'visible' : 'hidden'}
      animate={noAnim || inView ? 'visible' : 'hidden'}
      transition={{ staggerChildren: 0.04 }}
    >
      <Tag className={cn(className)}>{processed}</Tag>
    </motion.div>
  )
}
