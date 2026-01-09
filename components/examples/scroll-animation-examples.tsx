/**
 * Scroll Animation Examples
 * 
 * This file demonstrates various ways to use the scroll animation system.
 * You can reference these examples when implementing animations in your components.
 */

"use client"

import ScrollReveal from "@/components/scroll-reveal"
import { useScrollAnimate, useScrollAnimateStagger } from "@/hooks/use-scroll-animate"

// Example 1: Basic data attribute usage
export function Example1_DataAttributes() {
  return (
    <section>
      <div data-scroll-animate="fade-down">
        <h2>Section Title</h2>
        <p>This fades in from top</p>
      </div>
      
      <div data-scroll-animate="fade-up" data-scroll-delay="200">
        <p>This fades in from bottom after 200ms</p>
      </div>
    </section>
  )
}

// Example 2: Using ScrollReveal component
export function Example2_ScrollRevealComponent() {
  return (
    <section>
      <ScrollReveal animation="fade-up" delay={0}>
        <h2>Animated Title</h2>
      </ScrollReveal>
      
      <ScrollReveal animation="slide-left" delay={100}>
        <p>Slides in from right</p>
      </ScrollReveal>
      
      <ScrollReveal animation="scale-in" delay={200}>
        <div>Scales in from center</div>
      </ScrollReveal>
    </section>
  )
}

// Example 3: Card grid with stagger using ScrollReveal
export function Example3_CardGridStagger() {
  const cards = [
    { id: 1, title: "Card 1", content: "Content 1" },
    { id: 2, title: "Card 2", content: "Content 2" },
    { id: 3, title: "Card 3", content: "Content 3" },
    { id: 4, title: "Card 4", content: "Content 4" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <ScrollReveal
          key={card.id}
          animation="fade-up"
          delay={index * 100} // Stagger by 100ms
        >
          <div className="p-4 bg-white rounded-lg shadow">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}

// Example 4: Using the hook directly
export function Example4_UseHook() {
  const ref1 = useScrollAnimate({ animation: 'fade-up', delay: 0 })
  const ref2 = useScrollAnimate({ animation: 'slide-left', delay: 100 })
  const ref3 = useScrollAnimate({ animation: 'slide-right', delay: 200 })

  return (
    <section>
      <div ref={ref1 as React.RefObject<HTMLDivElement>}>
        <h2>Fade Up</h2>
      </div>
      
      <div ref={ref2 as React.RefObject<HTMLDivElement>}>
        <p>Slide Left</p>
      </div>
      
      <div ref={ref3 as React.RefObject<HTMLDivElement>}>
        <p>Slide Right</p>
      </div>
    </section>
  )
}

// Example 5: Staggered animations using hook
export function Example5_StaggerHook() {
  const items = [1, 2, 3, 4, 5, 6]

  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item, index) => {
        const ref = useScrollAnimateStagger({
          animation: 'fade-up',
          index,
          staggerDelay: 100,
        })

        return (
          <div
            key={item}
            ref={ref as React.RefObject<HTMLDivElement>}
            className="p-4 bg-white rounded-lg"
          >
            Item {item}
          </div>
        )
      })}
    </div>
  )
}

// Example 6: Mixed animation types
export function Example6_MixedAnimations() {
  const features = [
    { id: 1, title: "Feature 1", animation: "fade-up" as const },
    { id: 2, title: "Feature 2", animation: "slide-left" as const },
    { id: 3, title: "Feature 3", animation: "slide-right" as const },
    { id: 4, title: "Feature 4", animation: "scale-in" as const },
  ]

  return (
    <div className="grid grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <div
          key={feature.id}
          data-scroll-animate={feature.animation}
          data-scroll-delay={index * 100}
          className="p-6 bg-white rounded-lg"
        >
          <h3>{feature.title}</h3>
        </div>
      ))}
    </div>
  )
}

// Example 7: Hero section with sequential animations
export function Example7_HeroSection() {
  return (
    <section className="hero py-20">
      {/* Trust Badge */}
      <div data-scroll-animate="fade-down" data-scroll-delay="0">
        <span className="text-sm text-gray-600">Trusted by thousands</span>
      </div>

      {/* Main Heading */}
      <h1
        data-scroll-animate="scale-in"
        data-scroll-delay="100"
        className="text-4xl font-bold"
      >
        Welcome to Our Platform
      </h1>

      {/* Description */}
      <p
        data-scroll-animate="fade-up"
        data-scroll-delay="200"
        className="text-lg text-gray-600"
      >
        Transform your business with our innovative solutions
      </p>

      {/* CTA Buttons */}
      <div
        data-scroll-animate="fade-up"
        data-scroll-delay="300"
        className="flex gap-4"
      >
        <button className="px-6 py-3 bg-primary text-white rounded">
          Get Started
        </button>
        <button className="px-6 py-3 border border-gray-300 rounded">
          Learn More
        </button>
      </div>
    </section>
  )
}

// Example 8: Repeating animations (animate every time)
export function Example8_RepeatingAnimations() {
  return (
    <section>
      {/* This animates every time it enters viewport */}
      <div data-scroll-animate="fade-up" data-scroll-once="false">
        <p>This will animate every time you scroll to it</p>
      </div>

      {/* Using component */}
      <ScrollReveal animation="fade-up" once={false}>
        <p>Also animates every time</p>
      </ScrollReveal>
    </section>
  )
}
