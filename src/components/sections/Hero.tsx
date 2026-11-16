'use client'

import { Download, Mail, ChevronRight, Globe2, Award } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Button } from '@/components/ui/Button'
import { SectionNav } from '@/components/ui/SectionNav'
import { TypingTitle } from '@/components/ui/TypingTitle'
import { scrollToSection } from '@/lib/utils'

const TITLES = [
  'Senior Software Engineer',
  'Senior Web Developer',
  'React & Next.js Developer',
  'Python FastAPI Engineer',
  'Vue.js & Nuxt Developer',
  'Node.js Developer',
  'Product-Focused Platform Engineer',
]

const TECH_BADGES = [
  'PHP', 'Laravel', 'React', 'TypeScript', 'Next.js', 'Telnyx', 'WebRTC', 'Python',
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden hero-bg"
    >
      {/* Animated gradient orbs (desktop only: large animated blurs are slow on mobile Safari) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="orb absolute -top-24 -left-24 w-96 h-96 bg-primary/8 dark:bg-primary/12" />
        <div className="orb orb-2 absolute top-1/3 -right-32 w-80 h-80 bg-purple/8 dark:bg-purple/12" />
        <div className="orb orb-3 absolute -bottom-20 left-1/4 w-72 h-72 bg-accent/6 dark:bg-accent/10" />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30 dark:opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
        {/* Entrance is CSS transform only, so every line is visible at first paint (LCP) */}
        <div className="flex flex-col items-center gap-6">
          {/* Status badge */}
          <div className="hero-rise">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border bg-(--bg-surface)/80 md:backdrop-blur-sm border-(--c-border) text-(--c-muted)">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Dubai, UAE · Open to Global Opportunities & Relocation
              <Globe2 size={18} className="text-primary" />
            </span>
          </div>

          {/* Name — rendered visible on first paint (LCP element, not JS-gated) */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none">
              <span className="gradient-text">Basel</span>
              <br />
              <span className="text-(--c-text)">Kaffoura</span>
            </h1>
          </div>

          {/* Typing title */}
          <div className="hero-rise h-8 flex items-center" style={{ animationDelay: '0.08s' }}>
            <TypingTitle titles={TITLES} />
          </div>

          {/* Tagline */}
          <p
            className="hero-rise max-w-2xl text-sm sm:text-base text-(--c-muted) leading-relaxed"
            style={{ animationDelay: '0.16s' }}
          >
            8+ years building production-grade platforms across fintech, EdTech, and enterprise —
            delivering scalable solutions for clients in the{' '}
            <span className="text-(--c-text) font-medium">UAE</span>,{' '}
            <span className="text-(--c-text) font-medium">UK</span>, and{' '}
            <span className="text-(--c-text) font-medium">US</span>.
          </p>

          {/* CTAs */}
          <div className="hero-rise flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: '0.24s' }}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('projects')}
              iconRight={<ChevronRight size={16} />}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              icon={<Mail size={16} />}
            >
              Get In Touch
            </Button>
          </div>

          {/* Secondary CTAs */}
          <div className="hero-rise flex flex-wrap items-center justify-center gap-2.5" style={{ animationDelay: '0.32s' }}>
            <a
              href="/Basel_Kaffoura_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-(--c-muted) border border-(--c-border) bg-(--bg-surface)/60 md:backdrop-blur-sm hover:text-primary hover:border-primary/50 hover:bg-(--bg-surface) transition-all duration-200"
            >
              <Download size={15} className="text-primary group-hover:scale-110 transition-transform" />
              Download CV
            </a>
            <button
              onClick={() => scrollToSection('certificates')}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-(--c-muted) border border-(--c-border) bg-(--bg-surface)/60 md:backdrop-blur-sm hover:text-primary hover:border-primary/50 hover:bg-(--bg-surface) transition-all duration-200 cursor-pointer"
            >
              <Award size={15} className="text-primary group-hover:scale-110 transition-transform" />
              View Certificates
            </button>
            <a
              href="https://github.com/basel-kaffoura"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-(--c-muted) border border-(--c-border) bg-(--bg-surface)/60 md:backdrop-blur-sm hover:text-primary hover:border-primary/50 hover:bg-(--bg-surface) transition-all duration-200"
            >
              <FaGithub size={15} className="group-hover:scale-110 transition-transform" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/basel-kaffoura"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-(--c-muted) border border-(--c-border) bg-(--bg-surface)/60 md:backdrop-blur-sm hover:text-primary hover:border-primary/50 hover:bg-(--bg-surface) transition-all duration-200"
            >
              <FaLinkedin size={15} className="group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
          </div>

          {/* Tech badges */}
          <div className="hero-rise flex flex-wrap justify-center gap-2 mt-2" style={{ animationDelay: '0.4s' }}>
            {TECH_BADGES.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full border border-(--c-border) bg-(--bg-surface)/80 md:backdrop-blur-sm text-(--c-muted) hover:border-primary/40 hover:text-primary transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>


      {/* Section nav (hidden but keeps prev/next spacing) */}
      <div className="sr-only">
        <SectionNav next={{ id: 'about', label: 'About' }} />
      </div>
    </section>
  )
}
