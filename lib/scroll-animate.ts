/**
 * Scroll Animation Utility
 * 
 * Uses Intersection Observer API to trigger CSS-based scroll animations.
 * Elements animate into view as they enter the viewport.
 * 
 * Features:
 * - Multiple animation types (fade-up, slide-left, slide-right, scale-in, fade-down)
 * - Stagger support for grouped elements
 * - Animates only once by default
 * - Respects reduced motion preferences
 * - Performant and lightweight
 */

export type AnimationType = 'fade-up' | 'fade-down' | 'slide-left' | 'slide-right' | 'scale-in' | 'fade-in'

export interface ScrollAnimateOptions {
  /**
   * Animation type
   * @default 'fade-up'
   */
  animation?: AnimationType
  
  /**
   * Delay in milliseconds before animation starts
   * @default 0
   */
  delay?: number
  
  /**
   * Whether to animate only once (true) or every time element enters viewport (false)
   * @default true
   */
  once?: boolean
  
  /**
   * Offset from viewport bottom to trigger animation (in pixels)
   * @default 100
   */
  offset?: number
  
  /**
   * Threshold for intersection (0-1)
   * @default 0.1
   */
  threshold?: number
}

const DEFAULT_OPTIONS: Required<ScrollAnimateOptions> = {
  animation: 'fade-up',
  delay: 0,
  once: true,
  offset: 50, // Trigger earlier - when element is 50px from viewport
  threshold: 0.05, // Lower threshold - trigger when just 5% visible
}

/**
 * Check if user prefers reduced motion
 */
function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Initialize scroll animations for elements with data-scroll-animate attribute
 * 
 * Usage in HTML:
 * <div data-scroll-animate="fade-up" data-scroll-delay="100">
 *   Content
 * </div>
 */
export function initScrollAnimate(options: Partial<ScrollAnimateOptions> = {}) {
  if (typeof window === 'undefined') return null
  if (prefersReducedMotion()) return null

  const config = { ...DEFAULT_OPTIONS, ...options }
  
  // Find all elements with data-scroll-animate attribute
  const elements = document.querySelectorAll<HTMLElement>('[data-scroll-animate]')
  
  if (elements.length === 0) return null

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const element = entry.target as HTMLElement
        const animationType = element.dataset.scrollAnimate || config.animation
        const delay = parseInt(element.dataset.scrollDelay || '0', 10) || config.delay
        const once = element.dataset.scrollOnce !== 'false' && config.once

        // Apply animation after delay
        setTimeout(() => {
          element.classList.add(animationType, 'animate')
        }, delay)

        // Unobserve if animating only once
        if (once) {
          observer.unobserve(element)
        }
      })
    },
    {
      rootMargin: `0px 0px -${config.offset}px 0px`,
      threshold: config.threshold,
    }
  )

  // Observe all elements
  elements.forEach((element) => {
    // Set initial state
    const animationType = element.dataset.scrollAnimate || config.animation
    element.classList.add(animationType)
    observer.observe(element)
  })

  return observer
}

/**
 * Initialize scroll animations with stagger for grouped elements
 * 
 * Usage:
 * initScrollAnimateStagger('[data-stagger-group="features"]', {
 *   animation: 'fade-up',
 *   staggerDelay: 100
 * })
 */
export function initScrollAnimateStagger(
  selector: string,
  options: ScrollAnimateOptions & { staggerDelay?: number } = {}
) {
  if (typeof window === 'undefined') return
  if (prefersReducedMotion()) return

  const config = { ...DEFAULT_OPTIONS, ...options }
  const staggerDelay = options.staggerDelay || 100

  const groups = document.querySelectorAll<HTMLElement>(selector)

  if (groups.length === 0) return

  groups.forEach((group) => {
    const elements = group.querySelectorAll<HTMLElement>('[data-stagger-item]')
    
    elements.forEach((element, index) => {
      const animationType = element.dataset.scrollAnimate || config.animation
      const delay = (index * staggerDelay) + (config.delay || 0)
      
      element.classList.add(animationType)
      element.dataset.scrollDelay = delay.toString()
    })
  })

  // Initialize animations for staggered elements
  return initScrollAnimate(config)
}

/**
 * Manually trigger animation for a specific element
 */
export function triggerScrollAnimate(
  element: HTMLElement,
  animation: AnimationType = 'fade-up',
  delay: number = 0
) {
  if (prefersReducedMotion()) {
    element.classList.add(animation, 'animate')
    return
  }

  setTimeout(() => {
    element.classList.add(animation, 'animate')
  }, delay)
}

/**
 * Refresh scroll animations (useful after dynamic content loads)
 */
export function refreshScrollAnimate() {
  if (typeof window === 'undefined') return
  
  // Remove all animation classes
  const animatedElements = document.querySelectorAll<HTMLElement>('.animate')
  animatedElements.forEach((element) => {
    element.classList.remove('animate', 'fade-up', 'fade-down', 'slide-left', 'slide-right', 'scale-in', 'fade-in')
  })

  // Reinitialize
  return initScrollAnimate()
}
