"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Briefcase, Calendar, Award } from "lucide-react"

const statistics = [
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "Happy Clients",
    description: "Satisfied customers worldwide",
  },
  {
    icon: Briefcase,
    value: 100,
    suffix: "+",
    label: "Projects Completed",
    description: "Successfully delivered solutions",
  },
  {
    icon: Calendar,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Of excellence in software development",
  },
  {
    icon: Award,
    value: 10,
    suffix: "+",
    label: "Industries Served",
    description: "Industries we have served",
  },
]

export default function Statistics() {
  const ref = useRef<HTMLDivElement>(null)
  const [countersStarted, setCountersStarted] = useState(false)
  const [counts, setCounts] = useState(statistics.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersStarted) {
          entry.target.classList.add("opacity-100", "translate-y-0")
          setCountersStarted(true)

          // Animate counters
          statistics.forEach((stat, index) => {
            const duration = 2000 // 2 seconds
            const increment = stat.value / (duration / 16) // 60fps
            let current = 0

            const timer = setInterval(() => {
              current += increment
              if (current >= stat.value) {
                current = stat.value
                clearInterval(timer)
              }

              setCounts((prev) => {
                const newCounts = [...prev]
                newCounts[index] = Math.floor(current)
                return newCounts
              })
            }, 16)
          })
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [countersStarted])

  return (
    <section id="statistics" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-card/50 statistics-section w-full overflow-x-hidden">
      <div ref={ref} className="max-w-7xl mx-auto opacity-0 translate-y-10 transition-all duration-700 statistics-container w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 statistics-header">
          <h2 className="statistics-title font-bold mb-3 sm:mb-4 text-primary">Our Impact</h2>
          <p className="statistics-subtitle text-foreground/70 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and client success.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 statistics-grid">
          {statistics.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 statistics-card"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex flex-col items-center gap-2 sm:gap-3 md:gap-4 statistics-card-content">
                  <div className="statistics-icon-wrapper rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="statistics-icon text-primary" />
                  </div>
                  <div className="statistics-text">
                    <div className="flex items-baseline justify-center gap-0.5 sm:gap-1 mb-1 sm:mb-2 statistics-value-wrapper">
                      <span className="statistics-value font-bold text-primary">
                        {counts[index]}
                      </span>
                      <span className="statistics-suffix font-bold text-primary">
                        {stat.suffix}
                      </span>
                    </div>
                    <h3 className="statistics-label font-semibold mb-0.5 sm:mb-1">{stat.label}</h3>
                    <p className="statistics-description text-foreground/60">{stat.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

