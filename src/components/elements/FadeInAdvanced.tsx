import type { Transition } from 'motion/react'
import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type AnimationVariant =
  | 'fadeIn'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'fadeInUp'
  | 'fadeInDown'
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideInUp'
  | 'slideInDown'
  | 'zoomIn'
  | 'zoomOut'
  | 'bounceIn'
  | 'flipInX'
  | 'flipInY'

interface VariantConfig {
  initial: {
    opacity?: number
    x?: number
    y?: number
    scale?: number
    rotateX?: number
    rotateY?: number
  }
  animate: {
    opacity?: number
    x?: number
    y?: number
    scale?: number
    rotateX?: number
    rotateY?: number
    transition?: Transition
  }
}

interface FadeInAdvancedProps {
  children: ReactNode
  variant?: AnimationVariant
  delay?: number
  duration?: number
  distance?: number
  className?: string
  triggerOnce?: boolean
  threshold?: number | 'some' | 'all'
  animateOnLoad?: boolean
}

/**
 * Advanced FadeIn Component with smooth, visible entrance animations
 */
function FadeInAdvanced({
  children,
  variant = 'fadeInUp',
  delay = 0,
  duration = 800,
  distance = 50,
  className = '',
  triggerOnce = true,
  threshold = 'some',
  animateOnLoad = false,
}: FadeInAdvancedProps) {
  // Use different default distance for slide animations
  const isSlideAnimation = variant.startsWith('slideIn')
  const finalDistance = isSlideAnimation && distance === 50 ? 120 : distance
  const finalDuration = isSlideAnimation && duration === 800 ? 1000 : duration

  // Animation variants matching WOW.js patterns
  const variants: Record<AnimationVariant, VariantConfig> = {
    // Fade animations
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -finalDistance },
      animate: { opacity: 1, x: 0 },
    },
    fadeInRight: {
      initial: { opacity: 0, x: finalDistance },
      animate: { opacity: 1, x: 0 },
    },
    fadeInUp: {
      initial: { opacity: 0, y: finalDistance },
      animate: { opacity: 1, y: 0 },
    },
    fadeInDown: {
      initial: { opacity: 0, y: -finalDistance },
      animate: { opacity: 1, y: 0 },
    },

    // Slide animations
    slideInLeft: {
      initial: { opacity: 0, x: -finalDistance },
      animate: { opacity: 1, x: 0 },
    },
    slideInRight: {
      initial: { opacity: 0, x: finalDistance },
      animate: { opacity: 1, x: 0 },
    },
    slideInUp: {
      initial: { opacity: 0, y: finalDistance },
      animate: { opacity: 1, y: 0 },
    },
    slideInDown: {
      initial: { opacity: 0, y: -finalDistance },
      animate: { opacity: 1, y: 0 },
    },

    // Zoom animations
    zoomIn: {
      initial: { opacity: 0, scale: 0.85 },
      animate: { opacity: 1, scale: 1 },
    },
    zoomOut: {
      initial: { opacity: 0, scale: 1.15 },
      animate: { opacity: 1, scale: 1 },
    },

    // Bounce animations
    bounceIn: {
      initial: { opacity: 0, scale: 0.5 },
      animate: {
        opacity: 1,
        scale: 1,
        transition: {
          type: 'spring',
          bounce: 0.4,
          duration: finalDuration / 1000,
        },
      },
    },

    // Flip animations
    flipInX: {
      initial: { opacity: 0, rotateX: 60 },
      animate: { opacity: 1, rotateX: 0 },
    },
    flipInY: {
      initial: { opacity: 0, rotateY: 60 },
      animate: { opacity: 1, rotateY: 0 },
    },
  }

  const selectedVariant = variants[variant] || variants.fadeInUp
  const { initial, animate } = selectedVariant
  const { transition, ...animateProps } = animate

  const motionVariants = {
    hidden: initial,
    visible: {
      ...animateProps,
      transition: {
        duration: finalDuration / 1000,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1], // Smooth, natural cubic-bezier
        ...transition,
      },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      {...(animateOnLoad
        ? { animate: 'visible' }
        : {
            whileInView: 'visible',
            viewport: {
              once: triggerOnce,
              amount: threshold,
              margin: '0px 0px -30px 0px',
            },
          })}
      variants={motionVariants}
    >
      {children}
    </motion.div>
  )
}

export default FadeInAdvanced

export type { AnimationVariant, FadeInAdvancedProps }

