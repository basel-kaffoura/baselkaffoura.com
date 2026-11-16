'use client'

import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainer, viewportOptions } from '@/lib/animations'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  tag?: string
}

export function SectionHeader({ title, subtitle, align = 'center', tag }: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className={align === 'center' ? 'text-center' : 'text-left'}
    >
      {tag && (
        <motion.div variants={fadeUpVariant} className="mb-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 uppercase tracking-widest">
            {tag}
          </span>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUpVariant}
        className="text-3xl sm:text-4xl font-bold text-(--c-text) leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUpVariant}
          className="mt-4 text-(--c-muted) text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        variants={fadeUpVariant}
        className={`mt-4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent ${align === 'left' ? 'max-w-[120px]' : 'max-w-[80px] mx-auto'}`}
      />
    </motion.div>
  )
}
