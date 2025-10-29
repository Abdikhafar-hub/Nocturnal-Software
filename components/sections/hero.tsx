"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/hero1.png",
      title: "We Build the Future,",
      highlight: "One Line of Code at a Time",
      description: "AI-driven digital solutions for businesses, enterprises, and innovators.",
    },
    {
      image: "/hero3.png",
      title: "Enterprise Solutions,",
      highlight: "Built for Scale",
      description: "Scalable platforms that grow with your business and handle millions of users.",
    },
    {
      image: "/hero2.png",
      title: "Innovation Meets,",
      highlight: "Excellence",
      description: "Cutting-edge technology that transforms your vision into reality.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: '80px' }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: '80px',
          }}
        >
          {/* Subtle dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/45" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 inline-block animate-fade-in">
          <span className="px-4 py-2 rounded-full bg-white/25 text-white text-sm font-medium border border-white/40 backdrop-blur-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            Welcome to the Future
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance animate-fade-in-delay-1 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          {slides[currentSlide].title}{" "}
          <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            {slides[currentSlide].highlight}
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-2xl mx-auto text-balance animate-fade-in-delay-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          {slides[currentSlide].description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-semibold group"
          >
            Get a Quote
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button
            onClick={() => scrollToSection("portfolio")}
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-8 py-6 text-base font-semibold"
          >
            View Our Work
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 pt-12 border-t border-white/30 animate-fade-in-delay-4">
          <div>
            <div className="text-3xl font-bold text-blue-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">50+</div>
            <div className="text-sm text-white/90 mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">10+</div>
            <div className="text-sm text-white/90 mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Industries Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">100%</div>
            <div className="text-sm text-white/90 mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Client Satisfaction</div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-8" : "bg-white/40 w-2"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
