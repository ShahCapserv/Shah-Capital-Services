import React, { useState, useEffect } from 'react'

export const Preloader: React.FC = () => {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    let isMounted = true
    let isResourcesLoaded = false
    let isMinTimeElapsed = false

    const checkAndHide = () => {
      if (isResourcesLoaded && isMinTimeElapsed && isMounted) {
        setFadeOut(true)
        setTimeout(() => {
          if (isMounted) {
            setVisible(false)
          }
        }, 600) // matches CSS transition duration
      }
    }

    // Ensure all styles, fonts, and stylesheets are completely ready before hiding
    const waitForResources = async () => {
      try {
        if ('fonts' in document) {
          await document.fonts.ready
        }
        if (document.readyState !== 'complete') {
          await new Promise<void>((resolve) => {
            window.addEventListener('load', () => resolve(), { once: true })
          })
        }
      } catch (e) {
        // Fallback in case of browser API differences
      } finally {
        isResourcesLoaded = true
        checkAndHide()
      }
    }

    waitForResources()

    // Minimum display time for the animated logo to play cleanly
    const minTimeTimeout = setTimeout(() => {
      isMinTimeElapsed = true
      checkAndHide()
    }, 2000)

    // Safety fallback timeout: hide preloader after 5 seconds regardless
    const fallbackTimeout = setTimeout(() => {
      isResourcesLoaded = true
      isMinTimeElapsed = true
      checkAndHide()
    }, 5000)

    return () => {
      isMounted = false
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
