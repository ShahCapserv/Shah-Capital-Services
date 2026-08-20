import React, { useState, useEffect } from 'react'

export const Preloader: React.FC = () => {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    let isLoaded = false
    let isMinTimeElapsed = false

    const handleLoad = () => {
      isLoaded = true
      checkAndHide()
    }

    const checkAndHide = () => {
      if (isLoaded && isMinTimeElapsed) {
        setFadeOut(true)
        setTimeout(() => {
          setVisible(false)
        }, 600) // matches CSS transition duration
      }
    }

    // Minimum display time for the animated logo to play at least once/a bit (e.g. 2.5 seconds)
    const minTimeTimeout = setTimeout(() => {
      isMinTimeElapsed = true
      checkAndHide()
    } , 2500)

    // Safety fallback timeout: hide preloader after 6 seconds regardless
    const fallbackTimeout = setTimeout(() => {
      isLoaded = true
      isMinTimeElapsed = true
      checkAndHide()
    }, 6000)

    if (document.readyState === 'complete') {
      isLoaded = true
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
      clearTimeout(minTimeTimeout)
      clearTimeout(fallbackTimeout)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999,
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.6s ease-in-out',
        pointerEvents: fadeOut ? 'none' : 'auto',
      }}
    >
      <img
        src="/ANI Logo2.gif"
        alt="Loading..."
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
  )
}
