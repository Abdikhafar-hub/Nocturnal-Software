"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content:
      "Nocturnal Software Solutions transformed our business with their innovative approach and technical expertise. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO, FinanceHub",
    content:
      "The team delivered an enterprise platform that exceeded our expectations. Their attention to detail and commitment to quality is unmatched.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Founder, StartupXYZ",
    content:
      "From concept to launch, they guided us through every step. The final product is beautiful, functional, and user-friendly.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Product Manager, RetailCo",
    content:
      "Working with Nocturnal was a game-changer. They understood our vision and brought it to life with cutting-edge technology.",
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

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

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="max-w-4xl mx-auto opacity-0 translate-y-10 transition-all duration-700">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">What Our Clients Say</h2>
          <p className="text-foreground/70 text-lg">Real feedback from businesses we've helped transform.</p>
        </div>

        <div className="relative">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-primary text-primary" />
              ))}
            </div>

            <p className="text-lg md:text-xl mb-8 text-foreground/80 italic">"{testimonials[current].content}"</p>

            <div>
              <p className="font-semibold text-lg">{testimonials[current].name}</p>
              <p className="text-foreground/60">{testimonials[current].role}</p>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === current ? "bg-primary w-8" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
