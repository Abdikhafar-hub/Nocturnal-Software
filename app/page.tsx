"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Services from "@/components/sections/services"
import Portfolio from "@/components/sections/portfolio"
import Industries from "@/components/sections/industries"
import WhyChooseUs from "@/components/sections/why-choose-us"
import Testimonials from "@/components/sections/testimonials"
import Technologies from "@/components/sections/technologies"
import Statistics from "@/components/sections/statistics"
import Team from "@/components/sections/team"
import Blog from "@/components/sections/blog"
import Contact from "@/components/sections/contact"
import CTA from "@/components/sections/cta"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "services",
        "portfolio",
        "industries",
        "why-us",
        "testimonials",
        "technologies",
        "statistics",
        "team",
        "contact",
      ]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Industries />
      <WhyChooseUs />
      <Testimonials />
      <Technologies />
      <Statistics />
      <Team />
      <Blog />
      <Contact />
      <CTA />
      <Footer />
    </main>
  )
}
