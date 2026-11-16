'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Download, Award } from 'lucide-react'
import { Badge } from './Badge'
import { scaleInVariant, fadeInVariant, cardHover, viewportOptions } from '@/lib/animations'
import { useHasHover } from '@/hooks/useHasHover'
import type { Certificate } from '@/types'

const categoryColors: Record<string, 'primary' | 'accent' | 'purple' | 'success'> = {
  ai: 'primary',
  backend: 'purple',
  cloud: 'accent',
  devops: 'success',
  frontend: 'primary',
}

const issuerIcon: Record<string, string> = {
  'Anthropic Education': '🤖',
  Udemy: '🎓',
  AWS: '☁️',
  Coursera: '🎓',
  Google: '🔵',
}

interface CertificateCardProps {
  cert: Certificate
  index?: number
}

export function CertificateCard({ cert, index = 0 }: CertificateCardProps) {
  const hasHover = useHasHover()
  const reduceMotion = useReducedMotion()
  const entrance = hasHover && !reduceMotion ? scaleInVariant : fadeInVariant
  return (
    <motion.div
      variants={entrance}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewportOptions, margin: '-40px' }}
      whileHover={hasHover ? cardHover : undefined}
      transition={{ delay: index * 0.05 }}
      className="group flex flex-col rounded-2xl border border-(--c-border) bg-(--bg-surface) p-5 gap-4 hover:border-primary/30 transition-all duration-300"
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="w-10 h-10 rounded-xl bg-(--bg-surface-2) flex items-center justify-center text-lg shrink-0">
          {issuerIcon[cert.issuer] ?? <Award size={20} className="text-primary" />}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-(--c-muted)">{cert.issuer}</p>
          <p className="text-xs text-(--c-muted) mt-0.5">{cert.date}</p>
        </div>
        <Badge variant={categoryColors[cert.category] ?? 'default'}>
          {cert.category.toUpperCase()}
        </Badge>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-(--c-text) text-sm leading-snug group-hover:text-primary transition-colors">
        {cert.title}
      </h3>

      {cert.description && (
        <p className="text-xs text-(--c-muted) leading-relaxed line-clamp-2 flex-1">
          {cert.description}
        </p>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2 pt-4 mt-auto border-t border-(--c-border)">
        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-dark border border-primary/30 hover:border-primary/60 px-3 py-1.5 rounded-full transition-all duration-200"
          >
            <ExternalLink size={11} />
            Verify Certificate
          </a>
        )}
        {cert.downloadPath && (
          <a
            href={cert.downloadPath}
            download
            className="inline-flex items-center gap-1.5 text-xs text-(--c-muted) hover:text-primary transition-colors ml-auto"
          >
            <Download size={12} />
            PDF
          </a>
        )}
      </div>
    </motion.div>
  )
}
