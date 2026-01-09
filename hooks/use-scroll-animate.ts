"use client"

import { useEffect, useRef, type RefObject } from "react"
import type { AnimationType, ScrollAnimateOptions } from "@/lib/scroll-animate"
import { triggerScrollAnimate } from "@/lib/scroll-animate"

export interface UseScrollAnimateOptions extends ScrollAnimateOptions {
  /**
   * Whether to enable the animation
   * @default true
   */
  enabled?: boolean
}

/**
 * React hook for scroll animations
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const ref = useScrollAnimate({ animation: 'fade-up', delay: 100 })
 *   return <div ref={ref}>Content</div>
 * }
 * ```
 */
export function useScrollAnimate(
  options: UseScrollAnimateOptions = {}
): RefObject<HTMLElement> {
  const {
    animation = 'fade-up',
    delay = 0,
    enabled = true,
    once = true,
    offset = 50, // Trigger earlier
    threshold = 0.05, // Lower threshold
  } = options

  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!enabled || !ref.current) return

    const element = ref.current

    // Check for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.classList.add(animation, 'animate')
      return
    }

    // Set initial state
    element.classList.add(animation)

    // Create Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setTimeout(() => {
          element.classList.add('animate')
        }, delay)

        if (once) {
          observer.unobserve(element)
        }
      },
      {
        rootMargin: `0px 0px -${offset}px 0px`,
        threshold,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [animation, delay, enabled, once, offset, threshold])

  return ref
}

/**
 * React hook for scroll animations with stagger support
 * 
 * @example
 * ```tsx
 * function CardGrid() {
 *   const items = [1, 2, 3, 4]
 *   return (
 *     <div>
 *       {items.map((item, index) => {
 *         const ref = useScrollAnimateStagger({ animation: 'fade-up', index, staggerDelay: 100 })
 *         return <div key={item} ref={ref}>Card {item}</div>
 *       })}
 *     </div>
 *   )
 * }
 * ```
 */
export function useScrollAnimateStagger(
  options: UseScrollAnimateOptions & { index: number; staggerDelay?: number } = { index: 0 }
): RefObject<HTMLElement> {
  const {
    animation = 'fade-up',
    delay = 0,
    enabled = true,
    once = true,
    offset = 50, // Trigger earlier
    threshold = 0.05, // Lower threshold
    index,
    staggerDelay = 100,
  } = options

  const ref = useRef<HTMLElement>(null)
  const totalDelay = (index * staggerDelay) + delay

  useEffect(() => {
    if (!enabled || !ref.current) return

    const element = ref.current

    // Check for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.classList.add(animation, 'animate')
      return
    }

    // Set initial state
    element.classList.add(animation)

    // Create Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setTimeout(() => {
          element.classList.add('animate')
        }, totalDelay)

        if (once) {
          observer.unobserve(element)
        }
      },
      {
        rootMargin: `0px 0px -${offset}px 0px`,
        threshold,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [animation, totalDelay, enabled, once, offset, threshold])

  return ref
}
