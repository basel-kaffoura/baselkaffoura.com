'use client'

import { ChevronLeft, ChevronRight, ChevronsUp } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

interface NavTarget {
  id: string
  label: string
}

interface SectionNavProps {
  prev?: NavTarget
  next?: NavTarget
  showBackToTop?: boolean
}

export function SectionNav({ prev, next, showBackToTop }: SectionNavProps) {
  return (
    <div className="flex items-center justify-between mt-16 pt-8 border-t border-(--c-border)">
      <div className="flex-1">
        {prev && (
          <button
            onClick={() => scrollToSection(prev.id)}
            className="group inline-flex items-center gap-2 text-sm text-(--c-muted) hover:text-primary transition-colors cursor-pointer"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>{prev.label}</span>
          </button>
        )}
      </div>

      {showBackToTop && (
        <button
          onClick={() => scrollToSection('hero')}
          className="group flex items-center gap-2 px-4 py-2 rounded-full border border-(--c-border) text-sm text-(--c-muted) hover:text-primary hover:border-primary/40 transition-all cursor-pointer"
        >
          <ChevronsUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          Back to top
        </button>
      )}

      <div className="flex-1 flex justify-end">
        {next && (
          <button
            onClick={() => scrollToSection(next.id)}
            className="group inline-flex items-center gap-2 text-sm text-(--c-muted) hover:text-primary transition-colors cursor-pointer"
          >
            <span>{next.label}</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </div>
  )
}
