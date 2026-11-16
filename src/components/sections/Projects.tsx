'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionNav } from '@/components/ui/SectionNav'
import { FilterBar, type FilterOption } from '@/components/ui/FilterBar'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { CaseStudyCard } from '@/components/ui/CaseStudyCard'
import { projects } from '@/data/projects'
import type { ProjectCategory } from '@/types'

const caseStudies = projects.filter((p) => p.caseStudy)
const gridProjects = projects.filter((p) => !p.caseStudy)

const FILTERS: FilterOption[] = [
  { value: 'all', label: 'All' },
  { value: 'fintech', label: 'Fintech' },
  { value: 'admin-tools', label: 'Admin Tools' },
  { value: 'internal-tools', label: 'Internal' },
  { value: 'ecommerce', label: 'E-Commerce' },
  { value: 'edtech', label: 'EdTech' },
  { value: 'real-estate', label: 'Real Estate' },
  { value: 'saas', label: 'SaaS' },
]

export function Projects() {
  const [active, setActive] = useState<string>('all')

  const filtered =
    active === 'all'
      ? gridProjects
      : gridProjects.filter((p) => p.category === active as ProjectCategory)

  return (
    <SectionWrapper id="projects">
      <SectionHeader
        tag="Projects"
        title="What I've Built"
        subtitle="Production platforms, internal tools, and full-stack products across fintech, e-commerce, and SaaS"
      />

      {caseStudies.length > 0 && (
        <div className="mt-10 flex flex-col gap-6">
          {caseStudies.map((project) => (
            <CaseStudyCard key={project.id} project={project} />
          ))}
        </div>
      )}

      <p className="mt-16 text-xs font-semibold text-(--c-muted) uppercase tracking-widest">More projects</p>

      <div className="mt-6 mb-12">
        <FilterBar
          options={FILTERS.map((f) => ({
            ...f,
            count: f.value === 'all' ? gridProjects.length : gridProjects.filter((p) => p.category === f.value).length,
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="text-center text-(--c-muted) py-16">No projects in this category yet.</p>
      )}

      <SectionNav
        prev={{ id: 'skills', label: 'Skills' }}
        next={{ id: 'cv', label: 'CV / Resume' }}
      />
    </SectionWrapper>
  )
}
