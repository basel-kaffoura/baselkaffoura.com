'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Minus, Plus, Maximize, Maximize2, X } from 'lucide-react'

export interface LightboxImage {
  src: string
  alt: string
  caption?: string
}

interface ImageLightboxProps {
  image: LightboxImage | null
  onClose: () => void
}

interface View {
  scale: number
  x: number
  y: number
}

interface Bounds {
  width: number
  height: number
  stageWidth: number
  stageHeight: number
  centerX: number
  centerY: number
}

const MIN_SCALE = 1
const MAX_SCALE = 6
const STEP = 1.5
const DOUBLE_TAP_SCALE = 2.5
const FIT: View = { scale: 1, x: 0, y: 0 }

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

// Keeps the zoomed image from being dragged out of view.
function clampView(view: View, b: Bounds): View {
  const scale = clamp(view.scale, MIN_SCALE, MAX_SCALE)
  if (scale === MIN_SCALE) return FIT
  const maxX = Math.max(0, (b.width * scale - b.stageWidth) / 2 + 24)
  const maxY = Math.max(0, (b.height * scale - b.stageHeight) / 2 + 24)
  return { scale, x: clamp(view.x, -maxX, maxX), y: clamp(view.y, -maxY, maxY) }
}

// Always visible on touch screens; on desktop it appears on hover or keyboard focus.
export function EnlargeHint() {
  return (
    <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 rounded-lg bg-black/65 px-2.5 py-1.5 text-xs font-medium text-white transition-opacity [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 group-focus-visible:opacity-100">
      <Maximize2 size={13} aria-hidden />
      Enlarge
    </span>
  )
}

export function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  if (!image) return null
  return createPortal(<Viewer image={image} onClose={onClose} />, document.body)
}

function Viewer({ image, onClose }: { image: LightboxImage; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [view, setView] = useState<View>(FIT)
  const [smooth, setSmooth] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const pointers = useRef(new Map<number, { x: number; y: number }>())
  const gesture = useRef({ moved: false, pinched: false, startedOnImage: false, startDist: 0, startMid: { x: 0, y: 0 }, startView: FIT, lastTap: 0, lastTapX: 0, lastTapY: 0 })

  const getBounds = useCallback((): Bounds | null => {
    const img = imgRef.current
    const stage = stageRef.current
    if (!img || !stage) return null
    const r = stage.getBoundingClientRect()
    return {
      width: img.offsetWidth,
      height: img.offsetHeight,
      stageWidth: r.width,
      stageHeight: r.height,
      centerX: r.left + r.width / 2,
      centerY: r.top + r.height / 2,
    }
  }, [])

  // Zooms by `factor`, keeping the point under (px, py) in place.
  const zoomAt = useCallback(
    (factor: number, px?: number, py?: number, animate = false) => {
      const b = getBounds()
      if (!b) return
      setSmooth(animate)
      setView((v) => {
        const scale = clamp(v.scale * factor, MIN_SCALE, MAX_SCALE)
        const ox = (px ?? b.centerX) - b.centerX
        const oy = (py ?? b.centerY) - b.centerY
        const k = scale / v.scale
        return clampView({ scale, x: ox - k * (ox - v.x), y: oy - k * (oy - v.y) }, b)
      })
    },
    [getBounds]
  )

  const panBy = useCallback(
    (dx: number, dy: number, animate = false) => {
      const b = getBounds()
      if (!b) return
      setSmooth(animate)
      setView((v) => (v.scale === MIN_SCALE ? v : clampView({ ...v, x: v.x + dx, y: v.y + dy }, b)))
    },
    [getBounds]
  )

  const reset = useCallback(() => {
    setSmooth(true)
    setView(FIT)
  }, [])

  // Closing goes through history so the phone's back gesture also closes the viewer.
  const requestClose = useCallback(() => {
    if (window.history.state?.imageLightbox) window.history.back()
    else onClose()
  }, [onClose])

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    window.history.pushState({ ...window.history.state, imageLightbox: true }, '')
    const onPop = () => onClose()
    window.addEventListener('popstate', onPop)
    return () => {
      window.removeEventListener('popstate', onPop)
      previousFocus?.focus({ preventScroll: true })
    }
  }, [onClose])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const keys: Record<string, () => void> = {
        Escape: requestClose,
        '+': () => zoomAt(STEP, undefined, undefined, true),
        '=': () => zoomAt(STEP, undefined, undefined, true),
        '-': () => zoomAt(1 / STEP, undefined, undefined, true),
        '0': reset,
        ArrowLeft: () => panBy(80, 0, true),
        ArrowRight: () => panBy(-80, 0, true),
        ArrowUp: () => panBy(0, 80, true),
        ArrowDown: () => panBy(0, -80, true),
      }
      if (keys[e.key]) {
        e.preventDefault()
        keys[e.key]()
        return
      }
      if (['PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) e.preventDefault()
      if (e.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled])')
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        // Clicking the image moves focus to the page body; bring Tab back into the dialog.
        if (!dialogRef.current?.contains(document.activeElement)) {
          e.preventDefault()
          if (e.shiftKey) last.focus()
          else first.focus()
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [requestClose, zoomAt, panBy, reset])

  // Wheel and trackpad-pinch zoom; registered natively so the page behind never scrolls.
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const speed = e.ctrlKey ? 0.01 : 0.0015
      zoomAt(Math.exp(-e.deltaY * speed), e.clientX, e.clientY)
    }
    stage.addEventListener('wheel', onWheel, { passive: false })
    return () => stage.removeEventListener('wheel', onWheel)
  }, [zoomAt])

  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    const g = gesture.current
    if (pointers.current.size === 1) {
      g.moved = false
      g.pinched = false
      g.startedOnImage = e.target === imgRef.current
    } else if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()]
      g.pinched = true
      g.startDist = Math.hypot(a.x - b.x, a.y - b.y)
      g.startMid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }
      g.startView = view
    }
  }

  const onPointerMove = (e: React.PointerEvent) => {
    const prev = pointers.current.get(e.pointerId)
    if (!prev) return
    const next = { x: e.clientX, y: e.clientY }
    pointers.current.set(e.pointerId, next)
    const g = gesture.current
    if (pointers.current.size === 2) {
      const b = getBounds()
      if (!b || !g.startDist) return
      const [p1, p2] = [...pointers.current.values()]
      const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y)
      const mid = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 }
      const s0 = g.startView
      const scale = clamp(s0.scale * (dist / g.startDist), MIN_SCALE, MAX_SCALE)
      const k = scale / s0.scale
      const o0x = g.startMid.x - b.centerX
      const o0y = g.startMid.y - b.centerY
      setSmooth(false)
      setView(clampView({ scale, x: mid.x - b.centerX - k * (o0x - s0.x), y: mid.y - b.centerY - k * (o0y - s0.y) }, b))
      g.moved = true
    } else if (pointers.current.size === 1) {
      const dx = next.x - prev.x
      const dy = next.y - prev.y
      if (Math.abs(dx) + Math.abs(dy) > 2) g.moved = true
      panBy(dx, dy)
    }
  }

  const onPointerUp = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId)) return
    pointers.current.delete(e.pointerId)
    const g = gesture.current
    if (pointers.current.size > 0 || g.moved || g.pinched) return

    const now = Date.now()
    const isDoubleTap = now - g.lastTap < 300 && Math.hypot(e.clientX - g.lastTapX, e.clientY - g.lastTapY) < 30
    g.lastTap = isDoubleTap ? 0 : now
    g.lastTapX = e.clientX
    g.lastTapY = e.clientY
    if (isDoubleTap) {
      if (view.scale > MIN_SCALE) reset()
      else zoomAt(DOUBLE_TAP_SCALE, e.clientX, e.clientY, true)
      return
    }
    // A single tap outside the image closes the viewer. (Pointer capture retargets
    // pointerup to the stage, so where the tap started is recorded on pointerdown.)
    if (!g.startedOnImage && view.scale === MIN_SCALE) requestClose()
  }

  const onPointerCancel = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId)
  }

  const percent = Math.round(view.scale * 100)
  const controlClass =
    'w-11 h-11 flex items-center justify-center rounded-xl text-white/85 hover:text-white hover:bg-white/10 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-default focus-visible:outline-2 focus-visible:outline-primary'

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Image preview: ${image.alt}`}
      className="lightbox-in fixed inset-0 z-[100] flex flex-col bg-[#05080f] text-white"
    >
      <div className="flex items-center gap-3 px-3 sm:px-5 py-2.5 border-b border-white/10">
        <p className="flex-1 min-w-0 truncate text-sm text-white/75">{image.caption ?? image.alt}</p>
        <div className="flex items-center gap-1">
          <button type="button" className={controlClass} onClick={() => zoomAt(1 / STEP, undefined, undefined, true)} disabled={view.scale <= MIN_SCALE} aria-label="Zoom out">
            <Minus size={18} />
          </button>
          <span className="w-14 text-center text-sm tabular-nums text-white/80" aria-live="polite">{percent}%</span>
          <button type="button" className={controlClass} onClick={() => zoomAt(STEP, undefined, undefined, true)} disabled={view.scale >= MAX_SCALE} aria-label="Zoom in">
            <Plus size={18} />
          </button>
          <button type="button" className={controlClass} onClick={reset} disabled={view.scale === MIN_SCALE} aria-label="Fit to screen">
            <Maximize size={17} />
          </button>
          <span className="w-px h-6 bg-white/15 mx-1" aria-hidden />
          <button ref={closeRef} type="button" className={controlClass} onClick={requestClose} aria-label="Close preview">
            <X size={20} />
          </button>
        </div>
      </div>

      <div
        ref={stageRef}
        className="relative flex-1 overflow-hidden flex items-center justify-center p-3 sm:p-8 select-none"
        style={{ touchAction: 'none', overscrollBehavior: 'contain', cursor: view.scale > MIN_SCALE ? 'grab' : 'zoom-in' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        {!loaded && <p className="absolute text-sm text-white/60">Loading…</p>}
        {/* The original file, not an optimised thumbnail, so zooming stays sharp. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={image.src}
          alt={image.alt}
          draggable={false}
          onLoad={() => setLoaded(true)}
          className="max-w-full max-h-full rounded-lg shadow-2xl"
          style={{
            transform: `translate3d(${view.x}px, ${view.y}px, 0) scale(${view.scale})`,
            transition: smooth ? 'transform 0.22s ease-out' : 'none',
            opacity: loaded ? 1 : 0,
          }}
        />
      </div>

      <p className="px-4 py-2.5 text-center text-xs text-white/55 border-t border-white/10">
        <span className="hidden [@media(hover:hover)]:inline">Scroll to zoom · drag to move · double-click to toggle · Esc to close</span>
        <span className="[@media(hover:hover)]:hidden">Pinch to zoom · drag to move · double-tap to toggle · tap outside to close</span>
      </p>
    </div>
  )
}
