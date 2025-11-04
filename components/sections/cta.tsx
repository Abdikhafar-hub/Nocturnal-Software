"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Sparkles } from "lucide-react"

export default function CTA() {
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
    <section id="cta" className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Full-width gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-accent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto opacity-0 translate-y-10 transition-all duration-700">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold">Let's Build Something Amazing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Let's work together to bring your vision to life. Our team is ready to help you build innovative solutions that drive success and growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-6 py-5 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <a href="#contact">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="!border-2 !border-white/70 hover:!border-white hover:!bg-white/20 !text-white !bg-white/5 px-6 py-5 text-base font-semibold transition-all duration-300 backdrop-blur-sm shadow-lg"
              >
                <a href="#contact" className="!text-white">
                  Request a Quote
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 mt-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white" />
                <span>No commitment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white" />
                <span>Fast response</span>
              </div>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative hidden md:block">
            <div className="relative w-full h-64">
              {/* Animated rocket icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl animate-pulse" />
                  <div className="relative w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center animate-bounce">
                    <Rocket className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 right-12 w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

