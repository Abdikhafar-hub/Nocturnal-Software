"use client"

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Duncan Ochieng",
    role: "Cybersecurity Engineer",
    content:
      "Working with Nocturnal was a game-changer. They understood our vision and brought it to life with cutting-edge technology.",
    rating: 5,
    avatar: "/test1.png",
  },
  {
    name: "Hussein Mohamed",
    role: "entepreneur, Startup Founder",
    content:
      "Nocturnal Software Solutions transformed our business with their innovative approach and technical expertise. Highly recommended!",
    rating: 5,
    avatar: "/test.png",
  },
  {
    name: "Kelvin Ochieng",
    role: "Full Stack Software Engineer",
    content:
      "Professional, reliable, and innovative. They delivered exactly what we needed and more.",
    rating: 5,
    avatar: "/test2.png",
  },
  {
    name: "Robert Mwenda",
    role: "medical doctor",
    content:
      "Exceptional service and outstanding results. The team's expertise in modern technologies is truly impressive.",
    rating: 5,
    avatar: "/test4.png",
  },
  
]

export default function Testimonials() {
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

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden testimonials-section w-full">
      <div ref={ref} className="max-w-7xl mx-auto opacity-0 translate-y-10 transition-all duration-700 testimonials-container w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 testimonials-header">
          <h2 className="testimonials-title font-bold mb-3 sm:mb-4 text-primary">What Our Clients Say</h2>
          <p className="testimonials-subtitle text-foreground/70">Real feedback from businesses we've helped transform.</p>
        </div>

        <div className="relative testimonials-carousel-wrapper">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none testimonials-fade-left" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none testimonials-fade-right" />

          {/* Carousel container */}
          <div className="overflow-hidden">
            <div 
              className="flex animate-testimonials-scroll testimonials-carousel"
              style={{
                width: 'max-content',
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="flex-shrink-0 testimonials-card-wrapper"
                >
                  <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 testimonials-card">
                    {/* Stars */}
                    <div className="flex gap-1 mb-3 sm:mb-4 testimonials-stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="testimonials-star fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="testimonials-content text-foreground/80 italic flex-grow mb-4 sm:mb-6 line-clamp-5">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="mt-auto pt-3 sm:pt-4 border-t border-border flex items-center gap-2 sm:gap-3 testimonials-author">
                      <Avatar className="testimonials-avatar border-2 border-primary/20">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="testimonials-author-name font-semibold">{testimonial.name}</p>
                        <p className="testimonials-author-role text-foreground/60">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes testimonials-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-280px * 6));
            }
          }

          @media (min-width: 640px) {
            @keyframes testimonials-scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-344px * 6));
              }
            }
          }

          @media (min-width: 768px) {
            @keyframes testimonials-scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-404px * 6));
              }
            }
          }

          .animate-testimonials-scroll {
            animation: testimonials-scroll 30s linear infinite !important;
          }

          .animate-testimonials-scroll:hover {
            animation-play-state: paused !important;
          }
        `
      }} />
    </section>
  )
}
