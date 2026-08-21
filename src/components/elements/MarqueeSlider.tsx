import React, { useEffect, useRef, useState } from 'react'

interface MarqueeSliderProps {
  mode?: '1' | '2' | '3' | '4' | '5'
  children: React.ReactNode
  className?: string
  direction?: 'left' | 'right' | 'up' | 'down'
  speed?: number
  pauseOnHover?: boolean
}

const MarqueeSlider: React.FC<MarqueeSliderProps> = ({
  mode = '1',
  children,
  className = '',
  direction = 'left',
  speed,
  pauseOnHover = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Speed mapping based on mode or explicit speed prop
  const getSpeed = () => {
    if (speed) return speed
    const speeds: Record<'1' | '2' | '3' | '4' | '5', number> = {
      '1': 35,
      '2': 30,
      '3': 25,
      '4': 40,
      '5': 45,
    }
    return speeds[mode] || 35
  }

  // IntersectionObserver to only animate when visible in viewport
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { rootMargin: '100px', threshold: 0 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const durationSec = getSpeed()
  const isRight = direction === 'right'

  return (
    <div
      ref={containerRef}
      className={`css-marquee-wrapper marquee_mode-${mode} ${className}`}
      style={{
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100vw',
        position: 'relative',
      }}
    >
      <div
        className={`css-marquee-track ${isRight ? 'css-marquee-right' : 'css-marquee-left'} ${pauseOnHover ? 'css-marquee-hover-pause' : ''}`}
        style={{
          display: 'flex',
          width: 'max-content',
          willChange: 'transform',
          animationDuration: `${durationSec}s`,
          animationPlayState: isVisible ? 'running' : 'paused',
        }}
      >
        <div className="css-marquee-content" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          {children}
        </div>
        <div className="css-marquee-content" aria-hidden="true" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default MarqueeSlider

