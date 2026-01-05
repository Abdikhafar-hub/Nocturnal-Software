"use client"

import { useEffect, useRef } from "react"
import { Code2, Smartphone, Zap, Cloud, Palette, Brain, Code, CodeSquare, Network } from "lucide-react"

const services = [
  {
    icon: CodeSquare,
    image: "/1.png",
    title: "Web & Mobile App Development",
    description: "Modern, responsive websites and mobile applications built with cutting-edge technologies and best practices.",
    color: "from-blue-500 to-blue-600",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Zap,
    image: "/2.png",
    title: "Enterprise & Management Systems",
    description: "Custom enterprise and management systems tailored to your business needs, including ERP, CRM, and more.",
    color: "from-amber-500 to-amber-600",
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    icon: Brain,
    image: "/3.png",
    title: "AI & Machine Learning Solutions",
    description: "Advanced AI and machine learning models to automate tasks, enhance decision-making, and drive innovation across your business.",
    color: "from-purple-500 to-purple-600",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Cloud,
    image: "/4.png",
    title: "DevOps & Cloud Solutions",
    description: "Streamline deployment, scaling, and performance monitoring through modern DevOps practices and cloud-native solutions.",
    color: "from-cyan-500 to-cyan-600",
    iconColor: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    icon: Code,
    image: "/6.png",
    title: "Software Consultancy",
    description: "Expert guidance and strategic advice to help you make informed technology decisions and optimize your software solutions.",
    color: "from-emerald-500 to-emerald-600",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Network,
    image: "/5.png",
    title: "API Development & Integration",
    description: "Robust RESTful and GraphQL APIs with seamless third-party integrations, microservices architecture, and comprehensive API documentation.",
    color: "from-indigo-500 to-indigo-600",
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
]

export default function Services() {
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
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 services-section w-full overflow-x-hidden">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700 services-container w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 services-header">
          <h2 className="services-title font-bold mb-3 sm:mb-4 text-primary">Our Services</h2>
          <p className="services-subtitle text-foreground/70 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to transform your business and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 services-grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative h-full services-card"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="relative h-full bg-gradient-to-br from-white to-slate-50/50 rounded-xl sm:rounded-2xl border border-slate-200 p-2 sm:p-3 md:p-4 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden group-hover:-translate-y-1">
                  {/* Accent gradient overlay */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  
                  {/* Subtle gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-xl sm:rounded-2xl`}
                  />

                  {/* Content wrapper */}
                  <div className="relative z-10 flex flex-col h-full services-card-content">
                    {/* Service Image */}
                    <div className="relative mb-2 sm:mb-2.5 md:mb-3 services-image-wrapper bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden rounded-lg sm:rounded-xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 services-image"
                      />
                    </div>

                    {/* Icon with enhanced styling */}
                    <div className="mb-2 sm:mb-2.5 md:mb-3 services-icon-wrapper">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500 rounded-lg sm:rounded-xl`} />
                        <div
                          className={`relative services-icon-container bg-gradient-to-br ${service.bgColor} rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl border border-white/50`}
                        >
                          <Icon className={`${service.iconColor} services-icon group-hover:scale-110 transition-transform duration-500`} />
                        </div>
                      </div>
                    </div>

                    {/* Title and description */}
                    <h3 className="services-card-title font-bold mb-1 sm:mb-1.5 md:mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <p className="services-card-description text-gray-600 flex-grow leading-relaxed mb-0">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
