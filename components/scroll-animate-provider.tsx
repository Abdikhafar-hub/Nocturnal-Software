"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { initScrollAnimate, refreshScrollAnimate } from "@/lib/scroll-animate"

/**
 * ScrollAnimateProvider
 * 
 * Initializes scroll animations for all elements with data-scroll-animate attributes.
 * Should be placed at the root of your application.
 */
export function ScrollAnimateProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Wait for DOM to be ready and ensure all elements are rendered
    const initialize = () => {
      if (typeof window !== 'undefined') {
        // Small delay to ensure all components are mounted
        setTimeout(() => {
          initScrollAnimate()
        }, 100)
      }
    }

    // Initialize immediately if DOM is ready, otherwise wait
    if (typeof window !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize)
      } else {
        // DOM is already ready - use requestAnimationFrame for next paint
        requestAnimationFrame(() => {
          setTimeout(initialize, 50)
        })
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        document.removeEventListener('DOMContentLoaded', initialize)
      }
    }
  }, [])

  // Refresh animations on route changes (for Next.js App Router)
  useEffect(() => {
    const timer = setTimeout(() => {
      refreshScrollAnimate()
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname])

  return <>{children}</>
}
