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
    <section 
      id="hero" 
      className="relative flex items-center justify-center overflow-hidden hero-section"
      style={{ 
        minHeight: '100vh',
      }}
    >
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
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          {/* Subtle dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/45" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center hero-content">
        {/* Badge */}
        <div className="mb-4 sm:mb-6 inline-block animate-fade-in">
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/25 text-white text-xs sm:text-sm font-medium border border-white/40 backdrop-blur-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            Welcome to the Future
          </span>
        </div>

        {/* Main Heading - Fluid Typography */}
        <h1 className="hero-title font-bold mb-4 sm:mb-6 leading-tight text-balance animate-fade-in-delay-1 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          {slides[currentSlide].title}{" "}
          <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            {slides[currentSlide].highlight}
          </span>
        </h1>

        {/* Description - Fluid Typography */}
        <p className="hero-description text-white/95 mb-6 sm:mb-8 max-w-2xl mx-auto text-balance animate-fade-in-delay-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          {slides[currentSlide].description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center animate-fade-in-delay-3">
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 sm:px-8 sm:py-6 text-sm sm:text-base font-semibold group w-full sm:w-auto"
          >
            Get a Quote
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button
            onClick={() => scrollToSection("portfolio")}
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-6 py-5 sm:px-8 sm:py-6 text-sm sm:text-base font-semibold w-full sm:w-auto"
          >
            View Our Work
          </Button>
        </div>

        {/* Stats - Responsive Grid - Always Horizontal */}
        <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 pt-8 sm:pt-12 border-t border-white/30 animate-fade-in-delay-4 hero-stats">
          <div className="stat-item">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">50+</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-white/90 mt-1 sm:mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Projects Delivered</div>
          </div>
          <div className="stat-item">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">10+</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-white/90 mt-1 sm:mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Industries Served</div>
          </div>
          <div className="stat-item">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">100%</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-white/90 mt-1 sm:mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Responsive Positioning */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-1.5 sm:p-2 rounded-full backdrop-blur-sm transition-all hero-nav-button"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-1.5 sm:p-2 rounded-full backdrop-blur-sm transition-all hero-nav-button"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Slide indicators - Responsive Positioning */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2 hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-6 sm:w-8" : "bg-white/40 w-1.5 sm:w-2"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator - Responsive Positioning */}
      <div className="absolute bottom-12 sm:bottom-20 left-1/2 -translate-x-1/2 z-10 hero-scroll-indicator">
        <div className="flex flex-col items-center gap-1.5 sm:gap-2 animate-bounce">
          <span className="text-xs sm:text-sm text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">Scroll to explore</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1.5 sm:p-2">
            <div className="w-1 h-1.5 sm:h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
