'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Mail, MapPin, MessageSquare } from 'lucide-react'
import { FaWhatsapp, FaTelegram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SectionNav } from '@/components/ui/SectionNav'
import { slideInLeftVariant, slideInRightVariant, viewportOptions } from '@/lib/animations'

// The form and its libraries (validation, phone input with country data) download
// only when the section nears the viewport, keeping them off the initial page load.
const ContactForm = dynamic(() => import('@/components/ui/ContactForm').then((mod) => mod.ContactForm), {
  ssr: false,
})

const SOCIALS = [
  {
    icon: <FaLinkedin size={18} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/basel-kaffoura',
    href: 'https://linkedin.com/in/basel-kaffoura',
  },
  {
    icon: <FaGithub size={18} />,
    label: 'GitHub',
    value: 'github.com/basel-kaffoura',
    href: 'https://github.com/basel-kaffoura',
  },
  {
    icon: <FaWhatsapp size={18} />,
    label: 'WhatsApp',
    value: '+971 50 389 8795',
    href: 'https://wa.me/971503898795',
  },
  {
    icon: <FaTelegram size={18} />,
    label: 'Telegram',
    value: '@basel_kaffoura',
    href: 'https://t.me/basel_kaffoura',
  },
]

function DeferredContactForm() {
  const ref = useRef<HTMLDivElement>(null)
  const [near, setNear] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true)
          observer.disconnect()
        }
      },
      { rootMargin: '800px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Reserves the form's height so nothing shifts when it loads.
  return (
    <div ref={ref} className="min-h-[605px] sm:min-h-[495px]">
      {near && <ContactForm />}
    </div>
  )
}

export function Contact() {
  return (
    <SectionWrapper id="contact" alt>
      <SectionHeader
        tag="Contact"
        title="Get In Touch"
        subtitle="Open to new opportunities — feel free to reach out and I'll get back to you as soon as possible."
      />

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact form */}
        <motion.div
          variants={slideInLeftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="rounded-2xl border border-(--c-border) bg-(--bg-surface) p-6 sm:p-8"
        >
          <DeferredContactForm />
        </motion.div>

        {/* Contact info + socials */}
        <motion.div
          variants={slideInRightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="space-y-8"
        >
          {/* Info */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-(--c-muted) mb-0.5">Email</p>
                <a href="mailto:baselkaffoura@gmail.com" className="text-sm text-(--c-text) hover:text-primary transition-colors">
                  baselkaffoura@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-(--c-muted) mb-0.5">Location</p>
                <p className="text-sm text-(--c-text)">Dubai, UAE (UTC +4)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MessageSquare size={18} />
              </div>
              <div>
                <p className="text-xs text-(--c-muted) mb-0.5">Response time</p>
                <p className="text-sm text-(--c-text)">Usually within 12 hours</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs font-semibold text-(--c-muted) uppercase tracking-widest mb-4">
              Connect
            </p>
            <div className="space-y-3">
              {SOCIALS.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-(--c-border) bg-(--bg-surface) hover:border-primary/40 hover:text-primary transition-all group"
                >
                  <span className="text-(--c-muted) group-hover:text-primary transition-colors">{icon}</span>
                  <div>
                    <p className="text-xs text-(--c-muted)">{label}</p>
                    <p className="text-sm text-(--c-text) font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <SectionNav
        prev={{ id: 'certificates', label: 'Certificates' }}
        showBackToTop
      />
    </SectionWrapper>
  )
}
