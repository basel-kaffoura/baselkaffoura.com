'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion, useIsPresent, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useActiveSection } from '@/hooks/useActiveSection'
import { scrollToSection } from '@/lib/utils'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'cv', label: 'CV' },
  { id: 'certificates', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
]

const MENU_ID = 'mobile-menu'

interface MobileMenuProps {
  activeSection: string
  onNavigate: (id: string) => void
  onClose: () => void
}

function MobileMenu({ activeSection, onNavigate, onClose }: MobileMenuProps) {
  // During the exit animation, let taps pass through to the page underneath.
  const isPresent = useIsPresent()
  const reduceMotion = useReducedMotion()
  const duration = reduceMotion ? 0 : 0.18

  return (
    <motion.div
      className="fixed inset-0 z-40 md:hidden"
      // touch-action: none stops swipes on the overlay from scrolling the page underneath.
      style={{ pointerEvents: isPresent ? 'auto' : 'none', touchAction: 'none', overscrollBehavior: 'contain' }}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration }}
    >
      <motion.div
        id={MENU_ID}
        className="absolute top-16 left-0 right-0 border-b border-(--c-border) p-4 space-y-1 shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
        style={{ background: 'var(--bg)' }}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: reduceMotion ? 0 : -8 }}
        animate={{ y: 0 }}
        exit={{ y: reduceMotion ? 0 : -8 }}
        transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
      >
        {NAV_LINKS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => onNavigate(id)}
            className={cn(
              'w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors',
              activeSection === id
                ? 'text-primary bg-primary/10'
                : 'text-(--c-muted) hover:text-(--c-text) hover:bg-(--bg-surface)'
            )}
          >
            {label}
          </button>
        ))}
      </motion.div>
    </motion.div>
  )
}

export function Navbar() {
  const activeSection = useActiveSection()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // While the menu is open: close on Escape, and close if the layout switches to desktop.
  useEffect(() => {
    if (!menuOpen) return
    const close = () => setMenuOpen(false)
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    const desktop = window.matchMedia('(min-width: 768px)')
    window.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', close)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', close)
    }
  }, [menuOpen])

  const handleNav = (id: string) => {
    setMenuOpen(false)
    scrollToSection(id)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'md:backdrop-blur-md border-b border-(--c-border) shadow-[0_1px_30px_rgba(0,0,0,0.2)]'
            : 'bg-transparent'
        )}
        style={{ background: scrolled ? 'var(--bg-nav)' : undefined }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNav('hero')}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-[#080c16] font-bold text-sm shadow-[0_0_12px_rgba(0,212,255,0.4)]">
                BK
              </div>
              <span className="font-semibold text-(--c-text) hidden sm:block group-hover:text-primary transition-colors">
                Basel Kaffoura
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleNav(id)}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer',
                    activeSection === id
                      ? 'text-primary bg-primary/10'
                      : 'text-(--c-muted) hover:text-(--c-text) hover:bg-(--bg-surface)'
                  )}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg border border-(--c-border) text-(--c-muted) cursor-pointer"
                aria-label="Menu"
                aria-expanded={menuOpen}
                aria-controls={MENU_ID}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            key="mobile-menu"
            activeSection={activeSection}
            onNavigate={handleNav}
            onClose={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
