'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

interface TypingTitleProps {
  titles: string[]
}

// Types and deletes each title in turn. Lives in its own component so each
// keystroke re-renders one line instead of the whole hero, and pauses while
// off-screen so the page stays idle when the hero isn't visible.
export function TypingTitle({ titles }: TypingTitleProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const reduceMotion = useReducedMotion()
  const [visible, setVisible] = useState(true)
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const current = titles[titleIndex]

  useEffect(() => {
    if (!visible || reduceMotion) return
    const finishedTyping = !isDeleting && charIndex === current.length
    const delay = finishedTyping ? 2200 : isDeleting ? 40 : 65
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) setCharIndex(charIndex + 1)
        else setIsDeleting(true)
      } else if (charIndex > 0) {
        setCharIndex(charIndex - 1)
      } else {
        setIsDeleting(false)
        setTitleIndex((titleIndex + 1) % titles.length)
      }
    }, delay)
    return () => clearTimeout(timeout)
  }, [visible, reduceMotion, charIndex, isDeleting, titleIndex, current, titles.length])

  return (
    <p ref={ref} className="text-lg sm:text-xl font-medium text-(--c-muted)">
      {reduceMotion ? titles[0] : current.slice(0, charIndex)}
      <span className="cursor-blink text-primary ml-0.5">|</span>
    </p>
  )
}
