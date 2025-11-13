"use client"

import { useEffect, useRef } from "react"
import { Sparkles, Settings, Palette } from "lucide-react"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0")
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-card/30 about-section w-full overflow-x-hidden">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700 about-container w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-stretch about-grid">
          {/* Text Content */}
          <div className="about-content order-2 md:order-1">
            <h2 className="about-title font-bold mb-4 sm:mb-6 text-primary">
              About Nocturnal Software Solutions
            </h2>
            <p className="about-description text-foreground/70 mb-4">
              We are a software company dedicated to delivering innovative digital solutions that drive
              business transformation. With expertise spanning web development, mobile applications, enterprise systems,
              and AI integration, we partner with businesses of all sizes.
            </p>
            <p className="about-description text-foreground/70 mb-6 sm:mb-8">
              Our core principles—innovation, precision, clean UI, and advanced user experience—guide every project we
              undertake. We don't just build software; we build the future.
            </p>
            <div className="space-y-3 sm:space-y-4 about-features">
              <div className="flex gap-3 sm:gap-4 about-feature-item">
                <div className="about-icon-wrapper bg-primary/20">
                  <Sparkles className="text-primary about-icon" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="about-feature-title font-semibold mb-1">Innovation First</h3>
                  <p className="about-feature-description text-foreground/60">Cutting-edge technology and forward-thinking solutions</p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4 about-feature-item">
                <div className="about-icon-wrapper bg-primary/20">
                  <Settings className="text-primary about-icon" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="about-feature-title font-semibold mb-1">Precision Engineering</h3>
                  <p className="about-feature-description text-foreground/60">Meticulous attention to detail in every line of code</p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4 about-feature-item">
                <div className="about-icon-wrapper bg-primary/20">
                  <Palette className="text-primary about-icon" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="about-feature-title font-semibold mb-1">User-Centric Design</h3>
                  <p className="about-feature-description text-foreground/60">Beautiful interfaces that users love to interact with</p>
                </div>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="relative about-image-wrapper order-1 md:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl sm:rounded-2xl blur-3xl" />
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-full min-h-[300px] sm:min-h-[400px] md:min-h-full">
              <img
                src="/about.jpg"
                alt="About Nocturnal Software Solutions"
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
