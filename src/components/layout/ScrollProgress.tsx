'use client'

import { useScrollProgress } from '@/hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 z-100 h-0.5">
      <div
        className="h-full progress-bar-gradient transition-all duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
