'use client'

import { useSyncExternalStore } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

const subscribe = () => () => {}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  // false on the server and during hydration, true once running in the browser
  const mounted = useSyncExternalStore(subscribe, () => true, () => false)

  if (!mounted) return <div className="w-11 h-11 md:w-9 md:h-9" />

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="w-11 h-11 md:w-9 md:h-9 flex items-center justify-center rounded-lg border border-(--c-border) text-(--c-muted) hover:text-primary hover:border-primary/40 transition-all cursor-pointer"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
