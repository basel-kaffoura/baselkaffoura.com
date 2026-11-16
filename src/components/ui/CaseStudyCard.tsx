'use client'

import { useCallback, useId, useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import {
  AudioLines,
  CalendarDays,
  ChevronDown,
  ClipboardList,
  ExternalLink,
  Globe,
  Lock,
  LockKeyhole,
  MessagesSquare,
  PhoneCall,
  Plug,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { Badge } from './Badge'
import { EnlargeHint, ImageLightbox, type LightboxImage } from './ImageLightbox'
import { fadeUpVariant, viewportOptions } from '@/lib/animations'
import { cn } from '@/lib/utils'
import type { CaseStudyIcon, Project } from '@/types'

const areaIcon: Record<CaseStudyIcon, typeof PhoneCall> = {
  phone: PhoneCall,
  shield: ShieldCheck,
  audio: AudioLines,
  messages: MessagesSquare,
  workflow: Workflow,
  lock: LockKeyhole,
  form: ClipboardList,
  calendar: CalendarDays,
  ai: Sparkles,
  plug: Plug,
}

const zoomableClass =
  'group relative block w-full aspect-[1847/702] rounded-xl overflow-hidden border border-(--c-border) bg-(--bg-surface-2) cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

interface CaseStudyCardProps {
  project: Project
}

export function CaseStudyCard({ project }: CaseStudyCardProps) {
  const [open, setOpen] = useState(false)
  const [preview, setPreview] = useState<LightboxImage | null>(null)
  const closePreview = useCallback(() => setPreview(null), [])
  const id = useId()
  const reduceMotion = useReducedMotion()
  const study = project.caseStudy
  if (!study) return null

  const titleId = `${id}-title`
  const detailsId = `${id}-details`

  return (
    <motion.article
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      aria-labelledby={titleId}
      className="rounded-2xl border border-(--c-border) bg-(--bg-surface) overflow-hidden"
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      {/* Header */}
      <div className="p-6 sm:p-8 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">Case study</Badge>
          <Badge variant="category">{project.market}</Badge>
          {project.isPrivate && (
            <span className="inline-flex items-center gap-1.5 text-xs text-(--c-muted)">
              <Lock size={11} aria-hidden />
              Private platform
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          {project.company && (
            <p className="text-xs text-(--c-muted) flex items-center gap-1.5">
              <Globe size={11} aria-hidden />
              {project.company}
            </p>
          )}
          <h3 id={titleId} className="text-2xl sm:text-3xl font-bold text-(--c-text) leading-tight text-balance">
            {project.title}
          </h3>
          <p className="text-base sm:text-lg text-primary font-medium text-balance">{study.tagline}</p>
        </div>

        <p className="text-sm sm:text-base text-(--c-muted) leading-relaxed max-w-3xl">{project.description}</p>

        {project.productUrl && (
          <a
            href={project.productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1.5 text-sm text-primary hover:text-primary-dark font-medium transition-colors"
          >
            <ExternalLink size={14} aria-hidden />
            Product site
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>

      {/* Screenshot */}
      {project.imageUrl && (
        <figure className="px-6 sm:px-8">
          <button
            type="button"
            onClick={() => setPreview({ src: project.imageUrl!, alt: study.imageAlt ?? project.title, caption: study.imageCaption })}
            className={zoomableClass}
            aria-label={`Enlarge image: ${study.imageCaption ?? project.title}`}
          >
            <Image
              src={project.imageUrl}
              alt={study.imageAlt ?? project.title}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-left-top"
            />
            <EnlargeHint />
          </button>
          {study.imageCaption && (
            <figcaption className="mt-2 text-xs text-(--c-muted)">{study.imageCaption}</figcaption>
          )}
        </figure>
      )}

      {/* Summary */}
      <div className="p-6 sm:p-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="flex flex-col gap-6">
          <dl className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {study.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col rounded-xl border border-(--c-border) bg-(--bg) px-4 py-3">
                <dt className="text-xs text-(--c-muted)">{stat.label}</dt>
                <dd className="order-first text-xl sm:text-2xl font-bold font-heading text-(--c-text)">{stat.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-(--c-muted) uppercase tracking-widest">My role</p>
            <p className="text-sm text-(--c-muted) leading-relaxed">{study.role}</p>
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 content-start">
          {study.areas.map((area) => {
            const Icon = areaIcon[area.icon]
            return (
              <li key={area.title} className="flex gap-3 rounded-xl border border-(--c-border) bg-(--bg) p-4">
                <span className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Icon size={17} className="text-primary" aria-hidden />
                </span>
                <div className="flex flex-col gap-1 min-w-0">
                  <p className="font-semibold text-sm text-(--c-text)">{area.title}</p>
                  <p className="text-sm text-(--c-muted) leading-relaxed">{area.summary}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Details toggle */}
      <div className="border-t border-(--c-border) px-6 sm:px-8 py-4">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={detailsId}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
        >
          {open ? 'Hide case study details' : 'Read the full case study'}
          <ChevronDown
            size={16}
            aria-hidden
            className={cn('transition-transform duration-300', open && 'rotate-180')}
          />
        </button>
      </div>

      <motion.div
        id={detailsId}
        initial={false}
        animate={open ? 'open' : 'closed'}
        variants={{ open: { height: 'auto', opacity: 1 }, closed: { height: 0, opacity: 0 } }}
        transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
        inert={!open}
      >
        <div className="px-6 sm:px-8 pb-8 flex flex-col gap-8">
          <section className="flex flex-col gap-2 max-w-3xl">
            <h4 className="text-xs font-semibold text-(--c-muted) uppercase tracking-widest">Context</h4>
            <p className="text-sm text-(--c-muted) leading-relaxed">{study.context}</p>
          </section>

          {study.screenshot && (
            <section className="flex flex-col gap-2">
              <h4 className="text-xs font-semibold text-(--c-muted) uppercase tracking-widest">Inside the product</h4>
              <figure>
                <button
                  type="button"
                  onClick={() => setPreview(study.screenshot!)}
                  className={zoomableClass}
                  aria-label={`Enlarge image: ${study.screenshot.caption ?? study.screenshot.alt}`}
                >
                  <Image
                    src={study.screenshot.src}
                    alt={study.screenshot.alt}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="object-cover object-left-top"
                  />
                  <EnlargeHint />
                </button>
                {study.screenshot.caption && (
                  <figcaption className="mt-2 text-xs text-(--c-muted)">{study.screenshot.caption}</figcaption>
                )}
              </figure>
            </section>
          )}

          <div className="grid gap-8 md:grid-cols-2">
            {study.areas.map((area) => {
              const Icon = areaIcon[area.icon]
              return (
                <section key={area.title} className="flex flex-col gap-3">
                  <h4 className="flex items-center gap-2 font-semibold text-(--c-text)">
                    <Icon size={16} className="text-primary" aria-hidden />
                    {area.title}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {area.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm text-(--c-muted) leading-relaxed">
                        <span className="text-primary mt-1.5 shrink-0" aria-hidden>▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )
            })}
          </div>

          <section className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-(--c-muted) uppercase tracking-widest">Engineering practice</h4>
            <ul className="flex flex-col gap-2">
              {study.practice.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-(--c-muted) leading-relaxed">
                  <span className="text-primary mt-1.5 shrink-0" aria-hidden>▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-(--c-muted) uppercase tracking-widest">Stack & integrations</h4>
            <div className="flex flex-wrap gap-1.5">
              {[...project.techStack, ...(project.integrations ?? [])].map((tech) => (
                <Badge key={tech} variant="tech">{tech}</Badge>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
      <ImageLightbox image={preview} onClose={closePreview} />
    </motion.article>
  )
}
