'use client'

import { useState, useEffect, useRef } from 'react'

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'cv', 'certificates', 'contact']

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('hero')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const options: IntersectionObserverInit = {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, options)

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return activeSection
}
