import { useEffect, useRef, useState } from 'react'

type Props = {
  enabled?: boolean
  ignoreReducedMotion?: boolean
}

const CustomCursor: React.FC<Props> = ({
  enabled = true,
  ignoreReducedMotion = false,
}) => {
  const [isSupported, setIsSupported] = useState(false)
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const innerRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const targetPos = useRef({ x: 0, y: 0 })
  const currentPos = useRef({ x: 0, y: 0 })
  const isMoving = useRef(false)

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return

    // Disable completely on mobile / touch devices and reduced-motion
    const hasPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const prefersReduced =
      !ignoreReducedMotion &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!hasPointer || isTouch || prefersReduced) {
      setIsSupported(false)
      return
    }

    setIsSupported(true)
  }, [enabled, ignoreReducedMotion])

  useEffect(() => {
    if (!isSupported) return

    const cursor = cursorRef.current
    const inner = innerRef.current
    if (!cursor || !inner) return

    let isVisible = false

    const tick = () => {
      const dx = targetPos.current.x - currentPos.current.x
      const dy = targetPos.current.y - currentPos.current.y

      // Smooth lerp trailing cursor
      currentPos.current.x += dx * 0.25
      currentPos.current.y += dy * 0.25

      cursor.style.transform = `translate3d(calc(${currentPos.current.x}px - 50%), calc(${currentPos.current.y}px - 50%), 0)`

      // If close enough and mouse stopped moving, stop the RAF loop to save CPU
      if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1 && !isMoving.current) {
        currentPos.current.x = targetPos.current.x
        currentPos.current.y = targetPos.current.y
        cursor.style.transform = `translate3d(calc(${targetPos.current.x}px - 50%), calc(${targetPos.current.y}px - 50%), 0)`
        rafRef.current = null
        return
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    let moveTimeout: NodeJS.Timeout | null = null

    const onMove = (e: MouseEvent) => {
      targetPos.current.x = e.clientX
      targetPos.current.y = e.clientY

      if (!isVisible) {
        isVisible = true
        cursor.style.opacity = '0.7'
        inner.style.opacity = '0.6'
      }

      // Fast inner dot follows pointer immediately
      inner.style.transform = `translate3d(${e.clientX - 3}px, ${e.clientY - 3}px, 0)`

      isMoving.current = true
      if (moveTimeout) clearTimeout(moveTimeout)
      moveTimeout = setTimeout(() => {
        isMoving.current = false
      }, 100)

      // Start RAF loop only if not already animating
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    const onDown = () => {
      cursor.classList.add('cc-click')
      inner.classList.add('cc-inner-hover')
    }

    const onUp = () => {
      cursor.classList.remove('cc-click')
      inner.classList.remove('cc-inner-hover')
    }

    const onMouseLeave = () => {
      isVisible = false
      cursor.style.opacity = '0'
      inner.style.opacity = '0'
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onMouseLeave)
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      if (moveTimeout) clearTimeout(moveTimeout)
    }
  }, [isSupported])

  if (!isSupported) return null

  return (
    <div className="custom-cursor" style={{ position: 'relative' }}>
      <div ref={cursorRef} className="custom-cursor__cursor" style={{ opacity: 0 }}></div>
      <div ref={innerRef} className="custom-cursor__cursor-two" style={{ opacity: 0 }}></div>
    </div>
  )
}

export default CustomCursor

