"use client"

import type React from "react"
import { useScrollAnimate, type AnimationType } from "@/hooks/use-scroll-animate"

export interface ScrollRevealProps {
  children: React.ReactNode
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
   * Whether to animate only once
   * @default true
   */
  once?: boolean
  /**
   * Offset from viewport bottom to trigger animation (in pixels)
   * @default 100
   */
  offset?: number
  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * ScrollReveal Component
 * 
 * Wraps content and animates it into view when scrolled into viewport.
 * 
 * @example
 * ```tsx
 * <ScrollReveal animation="fade-up" delay={100}>
 *   <h2>Animated Title</h2>
 * </ScrollReveal>
 * ```
 */
export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  once = true,
  offset = 50, // Trigger earlier
  className = "",
}: ScrollRevealProps) {
  const ref = useScrollAnimate({
    animation,
    delay,
    once,
    offset,
  })

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </div>
  )
}
