'use client'

import { cn } from '@/lib/utils'

export interface FilterOption {
  value: string
  label: string
  count?: number
}

interface FilterBarProps {
  options: FilterOption[]
  active: string
  onChange: (value: string) => void
}

export function FilterBar({ options, active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={cn(
            'inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer',
            active === opt.value
              ? 'bg-primary text-[#080c16] shadow-[0_0_16px_rgba(0,212,255,0.3)]'
              : 'bg-(--bg-surface) text-(--c-muted) border border-(--c-border) hover:text-primary hover:border-primary/40'
          )}
        >
          {opt.label}
          {opt.count !== undefined && (
            <span
              className={cn(
                'text-xs px-1.5 py-0.5 rounded-full',
                active === opt.value
                  ? 'bg-[#080c16]/20'
                  : 'bg-(--bg-surface-2)'
              )}
            >
              {opt.count}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
