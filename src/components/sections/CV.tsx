'use client'

import { motion } from 'framer-motion'
import { Download, GraduationCap, Calendar, Award } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionNav } from '@/components/ui/SectionNav'
import { Button } from '@/components/ui/Button'
import { TimelineItem } from '@/components/ui/TimelineItem'
import { fadeUpVariant, staggerContainer, viewportOptions } from '@/lib/animations'
import { experience } from '@/data/experience'
import { education } from '@/data/education'

export function CV() {
  return (
    <SectionWrapper id="cv" alt>
      <SectionHeader
        tag="CV / Resume"
        title="Work Experience"
        subtitle="My professional journey building production-grade platforms across fintech, e-learning, and enterprise"
      />

      {/* Download buttons */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="flex flex-wrap justify-center gap-3 mt-8 mb-16"
      >
        <Button
          variant="primary"
          href="/Basel_Kaffoura_CV.pdf"
          external
          icon={<Download size={15} />}
        >
          Download Resume (PDF)
        </Button>
        <Button
          variant="outline"
          icon={<Award size={15} />}
          onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View Certificates
        </Button>
      </motion.div>

      {/* Work experience timeline */}
      <div className="mb-16">
        <motion.p
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-xs font-semibold text-(--c-muted) uppercase tracking-widest mb-8"
        >
          Work History
        </motion.p>
        <div>
          {experience.map((exp, i) => (
            <TimelineItem key={exp.id} item={exp} isLast={i === experience.length - 1} />
          ))}
        </div>
      </div>

      {/* Education */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="space-y-4"
      >
        <motion.p variants={fadeUpVariant} className="text-xs font-semibold text-(--c-muted) uppercase tracking-widest">
          Education
        </motion.p>
        {education.map((edu) => (
          <motion.div
            key={edu.id}
            variants={fadeUpVariant}
            className="rounded-2xl border border-(--c-border) bg-(--bg-surface) p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-primary/20 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <GraduationCap size={22} className="text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-(--c-text)">{edu.degree}</h3>
              {edu.major && <p className="text-sm text-(--c-muted) mt-0.5">{edu.major}</p>}
              <p className="text-sm text-primary mt-0.5">{edu.institution}</p>
              <p className="text-xs text-(--c-muted) mt-1">{edu.location}</p>
            </div>
            <div className="flex flex-col items-end gap-2 shrink-0">
              <div className="flex items-center gap-1.5 text-sm text-(--c-muted)">
                <Calendar size={14} />
                {edu.period ?? edu.graduationYear}
              </div>
              {edu.certificate && (
                <a
                  href={edu.certificate}
                  download
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark font-medium transition-colors"
                >
                  <Download size={13} />
                  Graduation Certificate
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <SectionNav
        prev={{ id: 'projects', label: 'Projects' }}
        next={{ id: 'certificates', label: 'Certificates' }}
      />
    </SectionWrapper>
  )
}
