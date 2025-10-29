"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create floating orbs
    const createOrb = () => {
      const orb = document.createElement("div")
      const size = Math.random() * 300 + 100
      const duration = Math.random() * 20 + 20

      orb.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(140, 70, 220, 0.1) 0%, transparent 70%);
        border-radius: 50%;
        filter: blur(40px);
        animation: float ${duration}s infinite ease-in-out;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
      `

      container.appendChild(orb)
    }

    // Create multiple orbs
    for (let i = 0; i < 5; i++) {
      createOrb()
    }

    // Add animation keyframes
    const style = document.createElement("style")
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translate(0, 0); }
        25% { transform: translate(30px, -30px); }
        50% { transform: translate(-20px, 20px); }
        75% { transform: translate(20px, 30px); }
      }
    `
    document.head.appendChild(style)

    return () => {
      style.remove()
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }} />
}
