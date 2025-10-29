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
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">Our Portfolio</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Showcase of our latest projects and success stories.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-primary/20 text-primary hover:bg-primary/30">{project.category}</Badge>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/60">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
