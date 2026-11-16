'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Download } from 'lucide-react'
import { Badge } from './Badge'
import { fadeUpVariant, viewportOptions } from '@/lib/animations'
import type { WorkExperience } from '@/types'

interface TimelineItemProps {
  item: WorkExperience
  isLast?: boolean
}

export function TimelineItem({ item, isLast }: TimelineItemProps) {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className="relative flex gap-6"
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 mt-1.5 shrink-0" />
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-primary/40 to-(--c-border) mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-10">
        <div className="rounded-2xl border border-(--c-border) bg-(--bg-surface) p-5 sm:p-6 hover:border-primary/20 transition-colors">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
            <div>
              <h3 className="font-semibold text-(--c-text) text-lg">{item.role}</h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                {item.websites ? (
                  <span className="flex flex-wrap items-center gap-x-1.5 text-sm font-medium">
                    {item.websites.map((w, i) => (
                      <span key={w.url} className="flex items-center gap-x-1.5">
                        <a
                          href={w.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {w.label}
                        </a>
                        {i < item.websites!.length - 1 && (
                          <span className="text-(--c-muted)">/</span>
                        )}
                      </span>
                    ))}
                  </span>
                ) : item.website ? (
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    {item.company}
                  </a>
                ) : (
                  <span className="text-primary text-sm font-medium">{item.company}</span>
                )}
                <span className="flex items-center gap-1 text-xs text-(--c-muted)">
                  <MapPin size={11} />
                  {item.location}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-(--c-muted) shrink-0">
              <Calendar size={12} />
              <span>
                {item.period.start} — {item.period.end}
              </span>
            </div>
          </div>

          {item.description && (
            <p className="text-sm text-(--c-muted) leading-relaxed mb-4 italic">
              {item.description}
            </p>
          )}

          {/* Responsibilities */}
          <ul className="space-y-2">
            {item.responsibilities.map((resp, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-(--c-muted) leading-relaxed">
                <span className="text-primary mt-1.5 shrink-0">▸</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          {item.techStack && item.techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-(--c-border)">
              {item.techStack.map((tech) => (
                <Badge key={tech} variant="tech">{tech}</Badge>
              ))}
            </div>
          )}

          {/* Experience certificate */}
          {item.certificate && (
            <div className="mt-4 pt-4 border-t border-(--c-border)">
              <a
                href={item.certificate}
                download
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark font-medium transition-colors"
              >
                <Download size={14} />
                Experience Certificate
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
