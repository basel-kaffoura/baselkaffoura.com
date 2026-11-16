'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Lock, Globe } from 'lucide-react'
import { Badge } from './Badge'
import { EnlargeHint, ImageLightbox, type LightboxImage } from './ImageLightbox'
import { scaleInVariant, fadeInVariant, cardHover, viewportOptions } from '@/lib/animations'
import { useHasHover } from '@/hooks/useHasHover'
import type { Project } from '@/types'

const marketFlag: Record<string, string> = {
  'United Kingdom': '🇬🇧',
  'United States': '🇺🇸',
  'United Arab Emirates': '🇦🇪',
  Internal: '🏢',
  Iraq: '🇮🇶',
  Syria: '🇸🇾',
}

const categoryLabel: Record<string, string> = {
  fintech: 'Fintech',
  'admin-tools': 'Admin Tool',
  'internal-tools': 'Internal',
  ecommerce: 'E-Commerce',
  edtech: 'EdTech',
  lms: 'LMS',
  'real-estate': 'Real Estate',
  saas: 'SaaS',
  marketing: 'Marketing',
}

const imageAreaClass = 'relative h-40 bg-linear-to-br from-(--bg-surface-2) to-(--bg-surface) overflow-hidden'

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const hasHover = useHasHover()
  const reduceMotion = useReducedMotion()
  // On touch devices / reduced-motion: opacity-only entrance — avoids
  // scale+box-shadow repaint that flickers during mobile scroll.
  const entrance = hasHover && !reduceMotion ? scaleInVariant : fadeInVariant
  const [preview, setPreview] = useState<LightboxImage | null>(null)
  const closePreview = useCallback(() => setPreview(null), [])

  const privateBadge = project.isPrivate && (
    <div className="absolute inset-0 flex items-end p-3 pointer-events-none">
      <span className="flex items-center gap-1.5 text-xs text-(--c-muted) bg-(--bg)/80 px-2 py-1 rounded-full md:backdrop-blur-sm">
        <Lock size={10} />
        Private / Protected
      </span>
    </div>
  )
  return (
    <motion.div
      variants={entrance}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewportOptions, margin: '-40px' }}
      whileHover={hasHover ? cardHover : undefined}
      transition={{ delay: index * 0.05 }}
      className="group relative flex flex-col rounded-2xl border border-(--c-border) bg-(--bg-surface) overflow-hidden hover:border-primary/30 transition-all duration-300"
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      {/* Badge strip */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-(--bg-surface) border-b border-(--c-border)">
        <div className="flex gap-2">
          <Badge variant="category">{categoryLabel[project.category] ?? project.category}</Badge>
          {project.featured && <Badge variant="accent">Featured</Badge>}
        </div>
        <span className="text-base" title={project.market}>
          {marketFlag[project.market] ?? '🌍'}
        </span>
      </div>

      {/* Image: opens the full-size original in a zoomable viewer */}
      {project.imageUrl ? (
        <button
          type="button"
          onClick={() => setPreview({ src: project.imageUrl!, alt: project.title, caption: project.title })}
          className={`${imageAreaClass} group block w-full cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary`}
          aria-label={`Enlarge image: ${project.title}`}
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            loading="lazy"
            className="object-cover opacity-80 [@media(hover:hover)]:group-hover:opacity-95 transition-opacity duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {privateBadge}
          <EnlargeHint />
        </button>
      ) : (
        <div className={imageAreaClass}>
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="w-16 h-16 rounded-full bg-primary/30 blur-xl" />
          </div>
          {privateBadge}
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {project.company && (
          <p className="text-xs text-(--c-muted) flex items-center gap-1.5">
            <Globe size={11} />
            {project.company}
          </p>
        )}

        <h3 className="font-semibold text-(--c-text) leading-snug group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-(--c-muted) leading-relaxed line-clamp-3 group-hover:line-clamp-none flex-1 transition-all duration-300">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="tech">{tech}</Badge>
          ))}
          {project.techStack.length > 5 && (
            <Badge variant="outline">+{project.techStack.length - 5}</Badge>
          )}
        </div>

        {/* Links */}
        {project.liveUrl && (
          <div className="pt-2 mt-auto">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark font-medium transition-colors"
            >
              <ExternalLink size={14} />
              Live site
            </a>
          </div>
        )}
      </div>
      <ImageLightbox image={preview} onClose={closePreview} />
    </motion.div>
  )
}
