"use client"

import { useEffect, useRef } from "react"
import { Target, Eye } from "lucide-react"

export default function MissionVision() {
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
    <section id="mission-vision" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background/50 mission-vision-section w-full overflow-x-hidden">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700 mission-vision-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-stretch mission-vision-grid">
          {/* Mission Card */}
          <div className="mission-vision-card relative bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl sm:rounded-2xl opacity-0 hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="mission-vision-icon-wrapper bg-primary/20 rounded-xl p-3 sm:p-4">
                  <Target className="text-primary mission-vision-icon" />
                </div>
                <h2 className="mission-vision-title font-bold text-primary text-2xl sm:text-3xl">
                  Mission
                </h2>
              </div>
              <div className="space-y-4 text-foreground/80">
                <p className="mission-vision-text leading-relaxed">
                  Our mission is to build <span className="font-bold text-primary">reliable</span>, <span className="font-bold text-primary">secure</span>, and <span className="font-bold text-primary">high-quality</span> <span className="font-bold text-accent">AI-driven</span> software that solves <span className="font-bold text-primary">real-world problems</span> with <span className="font-bold text-primary">precision</span> and <span className="font-bold text-primary">integrity</span>.
                  We focus on delivering <span className="font-bold text-accent">practical intelligence</span>, <span className="font-bold text-primary">engineered systems</span>, and <span className="font-bold text-primary">scalable solutions</span> that empower businesses and institutions to make better decisions, operate efficiently, and grow sustainably.
                </p>
                <p className="mission-vision-text leading-relaxed">
                  We are committed to <span className="font-bold text-primary">excellence</span> in engineering, <span className="font-bold text-accent">responsible use of AI</span>, and <span className="font-bold text-primary">long-term value creation</span> over short-term trends.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="mission-vision-card relative bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl sm:rounded-2xl opacity-0 hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="mission-vision-icon-wrapper bg-accent/20 rounded-xl p-3 sm:p-4">
                  <Eye className="text-accent mission-vision-icon" />
                </div>
                <h2 className="mission-vision-title font-bold text-accent text-2xl sm:text-3xl">
                  Vision
                </h2>
              </div>
              <div className="space-y-4 text-foreground/80">
                <p className="mission-vision-text leading-relaxed">
                  Our vision is to become a <span className="font-bold text-accent">trusted global AI technology company</span> that shapes the future of <span className="font-bold text-primary">intelligent systems</span> across critical industries.
                  We aim to lead the next generation of software where artificial intelligence is <span className="font-bold text-primary">transparent</span>, <span className="font-bold text-primary">secure</span>, and deeply integrated into everyday operations, not as a buzzword, but as <span className="font-bold text-accent">dependable infrastructure</span>.
                </p>
                <p className="mission-vision-text leading-relaxed">
                  We envision a future where AI <span className="font-bold text-primary">enhances human capability</span>, strengthens industries, and drives progress through <span className="font-bold text-accent">quality</span>, <span className="font-bold text-primary">ethics</span>, and <span className="font-bold text-accent">innovation</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

