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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-primary">About Nocturnal Software Solutions</h2>
            <p className="text-foreground/70 text-lg mb-4">
              We are a software company dedicated to delivering innovative digital solutions that drive
              business transformation. With expertise spanning web development, mobile applications, enterprise systems,
              and AI integration, we partner with businesses of all sizes.
            </p>
            <p className="text-foreground/70 text-lg mb-6">
              Our core principles—innovation, precision, clean UI, and advanced user experience—guide every project we
              undertake. We don't just build software; we build the future.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Innovation First</h3>
                  <p className="text-foreground/60 text-sm">Cutting-edge technology and forward-thinking solutions</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Settings className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Precision Engineering</h3>
                  <p className="text-foreground/60 text-sm">Meticulous attention to detail in every line of code</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Palette className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">User-Centric Design</h3>
                  <p className="text-foreground/60 text-sm">Beautiful interfaces that users love to interact with</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden h-full">
              <img
                src="/about.jpg"
                alt="About Nocturnal Software Solutions"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
