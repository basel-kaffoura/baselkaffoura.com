'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionNav } from '@/components/ui/SectionNav'
import { FilterBar, type FilterOption } from '@/components/ui/FilterBar'
import { CertificateCard } from '@/components/ui/CertificateCard'
import { certifications } from '@/data/certifications'
import type { CertCategory } from '@/types'

const FILTERS: FilterOption[] = [
  { value: 'all', label: 'All' },
  { value: 'backend', label: 'Backend' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'cloud', label: 'Cloud' },
  { value: 'devops', label: 'DevOps' },
  { value: 'ai', label: 'AI & MCP' },
]

export function Certificates() {
  const [active, setActive] = useState<string>('all')

  const filtered =
    active === 'all'
      ? certifications
      : certifications.filter((c) => c.category === active as CertCategory)

  return (
    <SectionWrapper id="certificates">
      <SectionHeader
        tag="Certifications"
        title="Certificates"
        subtitle="Verified credentials from Udemy and Anthropic."
      />

      <div className="mt-10 mb-12">
        <FilterBar
          options={FILTERS.map((f) => ({
            ...f,
            count: f.value === 'all' ? certifications.length : certifications.filter((c) => c.category === f.value).length,
          }))}
          active={active}
          onChange={setActive}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((cert, i) => (
            <CertificateCard key={cert.id} cert={cert} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="text-center text-(--c-muted) py-12">No certificates in this category.</p>
      )}

      <SectionNav
        prev={{ id: 'cv', label: 'CV / Resume' }}
        next={{ id: 'contact', label: 'Contact' }}
      />
    </SectionWrapper>
  )
}
