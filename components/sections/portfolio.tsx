"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web",
    description: "Full-stack e-commerce solution with AI-powered recommendations",
    image: "/udgon.png",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile",
    description: "Secure mobile banking application with real-time transactions",
    image: "/app.png",
  },
  {
    title: "AI Analytics Dashboard",
    category: "AI",
    description: "Advanced analytics platform powered by machine learning",
    image: "/analytics-dashboard.png",
  },
  {
    title: "Enterprise CRM System",
    category: "Systems",
    description: "Comprehensive CRM solution for enterprise management",
    image: "/enterprise-crm-system-interface.jpg",
  },
  {
    title: "SaaS Management Tool",
    category: "Web",
    description: "Cloud-based SaaS platform for business management",
    image: "/saas-management-tool-dashboard.jpg",
  },
  {
    title: "IoT Monitoring System",
    category: "Systems",
    description: "Real-time IoT device monitoring and control system",
    image: "/iot-monitoring-system-dashboard.jpg",
  },
]

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null)
  const [filter, setFilter] = useState("All")

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

  const categories = ["All", "Web", "Mobile", "AI", "Systems"]
  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-card/30 portfolio-section w-full overflow-x-hidden">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700 portfolio-container w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 portfolio-header">
          <h2 className="portfolio-title font-bold mb-3 sm:mb-4 text-primary">Our Portfolio</h2>
          <p className="portfolio-subtitle text-foreground/70 max-w-2xl mx-auto">
            Showcase of our latest projects and success stories.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 portfolio-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`portfolio-filter-btn px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-medium transition-all text-sm sm:text-base ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg sm:rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 portfolio-card"
            >
              <div className="relative portfolio-image-wrapper bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 portfolio-image"
                />
              </div>
              <div className="portfolio-card-content p-3 sm:p-4 md:p-6">
                <Badge className="portfolio-badge mb-2 sm:mb-3 bg-primary/20 text-primary hover:bg-primary/30 text-xs sm:text-sm">{project.category}</Badge>
                <h3 className="portfolio-card-title font-semibold mb-1.5 sm:mb-2">{project.title}</h3>
                <p className="portfolio-card-description text-foreground/60">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
