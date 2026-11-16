'use client'

import { useSyncExternalStore } from 'react'

const HOVER_QUERY = '(hover: hover) and (pointer: fine)'

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(HOVER_QUERY)
  mq.addEventListener('change', onChange)
  return () => mq.removeEventListener('change', onChange)
}

/**
 * Returns true only on devices with a real hover-capable pointer (desktop mouse).
 * Touch devices report false, so hover-only animations can be skipped to avoid
 * touch firing pointerenter and causing scale "wobble" while scrolling.
 */
export function useHasHover() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(HOVER_QUERY).matches, () => false)
}
