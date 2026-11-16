'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionNav } from '@/components/ui/SectionNav'
import { FilterBar, type FilterOption } from '@/components/ui/FilterBar'
import { staggerFast, fadeUpVariant } from '@/lib/animations'
import { skills } from '@/data/skills'
import type { SkillCategory } from '@/types'

const FILTERS: FilterOption[] = [
  { value: 'all', label: 'All' },
  { value: 'backend', label: 'Backend' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'realtime-comms', label: 'Voice & Real-time' },
  { value: 'ai-tools', label: 'AI & Speech' },
  { value: 'messaging', label: 'Messaging' },
  { value: 'styling-design', label: 'Design' },
  { value: 'databases', label: 'Databases' },
  { value: 'testing', label: 'Testing' },
  { value: 'digital-identity', label: 'Identity & KYC' },
  { value: 'compliance', label: 'Compliance' },
  { value: 'devops', label: 'DevOps' },
  { value: 'cms-platforms', label: 'CMS' },
  { value: 'api-integrations', label: 'Integrations' },
  { value: 'seo-cro', label: 'SEO / CRO' },
]

const levelDot: Record<string, string> = {
  expert: 'bg-success',
  advanced: 'bg-primary',
  intermediate: 'bg-warning',
}

const levelLabel: Record<string, string> = {
  expert: 'Expert',
  advanced: 'Advanced',
  intermediate: 'Intermediate',
}

const categoryLabel: Record<SkillCategory, string> = {
  backend: 'Backend',
  frontend: 'Frontend',
  'realtime-comms': 'Voice & Real-time Communications',
  messaging: 'Messaging & Omnichannel',
  'styling-design': 'Styling & Design',
  databases: 'Databases',
  'digital-identity': 'Digital Identity & KYC',
  compliance: 'Compliance & Security',
  'ai-tools': 'AI, Speech & LLM',
  testing: 'Testing & Quality',
  devops: 'DevOps & Cloud',
  'cms-platforms': 'CMS & Platforms',
  'api-integrations': 'Integrations',
  'seo-cro': 'SEO & CRO',
}

export function Skills() {
  const [active, setActive] = useState<string>('all')

  const filtered =
    active === 'all'
      ? skills
      : skills.filter((s) => s.category === active)

  const grouped = filtered.reduce<Record<SkillCategory, typeof filtered>>(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = []
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<SkillCategory, typeof filtered>
  )

  return (
    <SectionWrapper id="skills" alt>
      <SectionHeader
        tag="Skills"
        title="Technical Stack"
        subtitle="Technologies I use to build fast, scalable, production-grade software"
      />

      <div className="mt-10 mb-12">
        <FilterBar
          options={FILTERS.map((f) => ({
            ...f,
            count: f.value === 'all' ? skills.length : skills.filter((s) => s.category === f.value).length,
          }))}
          active={active}
          onChange={setActive}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-8"
        >
          {(Object.keys(grouped) as SkillCategory[]).map((cat) => (
            <motion.div
              key={cat}
              variants={staggerFast}
              initial="hidden"
              animate="visible"
            >
              <p className="text-xs font-semibold text-(--c-muted) uppercase tracking-widest mb-4">
                {categoryLabel[cat]}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {grouped[cat].map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeUpVariant}
                    className="group relative inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-(--c-border) bg-(--bg-surface) text-sm text-(--c-text) hover:border-primary/40 hover:text-primary transition-all duration-200 cursor-default"
                  >
                    {skill.level && (
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${levelDot[skill.level] ?? 'bg-gray-400'}`}
                        title={levelLabel[skill.level]}
                      />
                    )}
                    <span className="font-medium">{skill.name}</span>
                    {skill.note && (
                      <span className="hidden sm:group-hover:inline-flex text-xs text-(--c-muted) ml-1">
                        — {skill.note}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center text-xs text-(--c-muted)">
        {Object.entries(levelDot).map(([level, dotClass]) => (
          <span key={level} className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${dotClass}`} />
            {levelLabel[level]}
          </span>
        ))}
      </div>

      <SectionNav
        prev={{ id: 'about', label: 'About' }}
        next={{ id: 'projects', label: 'Projects' }}
      />
    </SectionWrapper>
  )
}
