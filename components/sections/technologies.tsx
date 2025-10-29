"use client"

import { useEffect, useRef } from "react"

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
]

export default function Technologies() {
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
    <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">Technologies We Use</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            We leverage the latest and most reliable technologies to build robust solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg p-4 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <p className="font-semibold">{tech.name}</p>
                <p className="text-xs text-foreground/50 mt-1">{tech.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
