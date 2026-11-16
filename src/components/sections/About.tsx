'use client'

import { motion } from 'framer-motion'
import { MapPin, Briefcase, Globe, Code2 } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionNav } from '@/components/ui/SectionNav'
import { fadeUpVariant, slideInLeftVariant, slideInRightVariant, staggerContainer, viewportOptions } from '@/lib/animations'

const STATS = [
  { value: '8+', label: 'Years Experience', icon: <Briefcase size={18} /> },
  { value: '15+', label: 'Projects Built', icon: <Code2 size={18} /> },
  { value: '4', label: 'Markets Served', icon: <Globe size={18} /> },
  { value: 'UAE', label: 'Dubai Based', icon: <MapPin size={18} /> },
]

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        tag="About Me"
        title="Who I Am"
        subtitle="Senior Software Engineer building production-grade platforms across fintech, e-learning, and enterprise"
      />

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <motion.div
          variants={slideInLeftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="space-y-5"
        >
          <p className="text-(--c-text) leading-relaxed text-base">
            Senior Software Engineer with <strong className="text-primary">8+ years</strong> of professional
            experience building production-grade platforms across fintech, e-learning, and enterprise — serving
            clients in the <strong className="text-(--c-text)">UAE</strong>,{' '}
            <strong className="text-(--c-text)">UK</strong>, and{' '}
            <strong className="text-(--c-text)">US</strong> markets. Currently at{' '}
            <a
              href="https://ndhfinancial.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              NDH Financial
            </a>{' '}
            and{' '}
            <strong className="text-(--c-text)">Louis Charles International</strong> — building loan funnels,
            lead management systems, and internal business tools processing 1,200+ applications per day.
          </p>

          <p className="text-(--c-muted) leading-relaxed">
            My backend roots are in <strong className="text-(--c-text)">PHP/Laravel</strong>. I&apos;ve since
            expanded to <strong className="text-(--c-text)">Python FastAPI</strong> and{' '}
            <strong className="text-(--c-text)">Node.js</strong> for modern async APIs, and migrated my
            frontend stack from Vue.js/Nuxt to{' '}
            <strong className="text-(--c-text)">React and Next.js</strong>. I work across the full product
            lifecycle — architecture, APIs, frontend UIs, third-party integrations, monitoring, and SEO/CRO
            that moves real conversion metrics.
          </p>

          <p className="text-(--c-muted) leading-relaxed">
            I stay current with emerging tools — including AI integrations with{' '}
            <strong className="text-(--c-text)">Anthropic&apos;s Claude</strong> and Model Context Protocol
            (MCP-certified, May 2026) — and believe great software is clean, observable, and built to scale.
          </p>

          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {[
              ['Location', 'Dubai, UAE (UTC +4)'],
              ['Employment', 'Full-time at Louis Charles'],
              ['Markets', 'UAE (LMS) · UK & US Fintech'],
              ['Email', 'baselkaffoura@gmail.com'],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="text-xs text-(--c-muted) uppercase tracking-wide">{label}</span>
                <span className="text-sm text-(--c-text) font-medium">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats + highlights */}
        <motion.div
          variants={slideInRightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="space-y-6"
        >
          {/* Stats grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map(({ value, label, icon }) => (
              <motion.div
                key={label}
                variants={fadeUpVariant}
                className="rounded-2xl border border-(--c-border) bg-(--bg-surface) p-5 text-center hover:border-primary/30 transition-colors"
              >
                <div className="text-primary flex justify-center mb-2">{icon}</div>
                <div className="text-2xl font-bold gradient-text-primary">{value}</div>
                <div className="text-xs text-(--c-muted) mt-1">{label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills highlights */}
          <div className="rounded-2xl border border-(--c-border) bg-(--bg-surface) p-5">
            <p className="text-xs font-semibold text-(--c-muted) uppercase tracking-widest mb-4">
              Core Expertise
            </p>
            <div className="space-y-3">
              {[
                { label: 'Backend Engineering', tags: ['PHP', 'Laravel', 'Python', 'FastAPI', 'Node.js'] },
                { label: 'Frontend Development', tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'] },
                { label: 'Fintech & Integrations', tags: ['Twilio', 'Meta Ads', 'Google Ads', 'GoHighLevel'] },
                { label: 'Infrastructure & AI', tags: ['Docker', 'AWS', 'Claude', 'MCP'] },
              ].map(({ label, tags }) => (
                <div key={label}>
                  <p className="text-xs text-(--c-muted) mb-1.5">{label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs rounded-md bg-(--bg-surface-2) border border-(--c-border) text-(--c-text) font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <SectionNav
        prev={{ id: 'hero', label: 'Home' }}
        next={{ id: 'skills', label: 'Skills' }}
      />
    </SectionWrapper>
  )
}
