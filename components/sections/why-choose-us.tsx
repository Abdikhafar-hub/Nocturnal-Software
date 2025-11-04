"use client"

import { useEffect, useRef } from "react"
import { Zap, Shield, TrendingUp, Users, Clock, Rocket } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Rapid Development Cycles",
    description: "We leverage agile methodologies and modern development frameworks to deliver high-quality software solutions efficiently. Our streamlined processes enable faster time-to-market while maintaining code quality and best practices.",
    color: "blue",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    gradient: "from-blue-500 to-blue-600",
    borderColor: "border-blue-200",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "We implement comprehensive security measures including advanced encryption protocols, regular security audits, and compliance with industry standards. Your digital assets and sensitive information are protected with enterprise-level safeguards.",
    color: "emerald",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    gradient: "from-emerald-500 to-emerald-600",
    borderColor: "border-emerald-200",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "With over 50 successful projects delivered across multiple industries, we maintain a 100% client satisfaction rate. Our solutions consistently deliver measurable business outcomes and return on investment.",
    color: "purple",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
    gradient: "from-purple-500 to-purple-600",
    borderColor: "border-purple-200",
  },
  {
    icon: Users,
    title: "Experienced Development Team",
    description: "Our team consists of senior developers, architects, and technical specialists with extensive experience across full-stack development, cloud infrastructure, and enterprise systems design.",
    color: "amber",
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
    gradient: "from-amber-500 to-amber-600",
    borderColor: "border-amber-200",
  },
  {
    icon: Clock,
    title: "Continuous Support & Maintenance",
    description: "We provide comprehensive support services including 24/7 system monitoring, rapid incident response, and proactive maintenance. Our dedicated support team ensures optimal system performance and minimal downtime.",
    color: "cyan",
    iconColor: "text-cyan-600",
    bgColor: "bg-cyan-50",
    gradient: "from-cyan-500 to-cyan-600",
    borderColor: "border-cyan-200",
  },
  {
    icon: Rocket,
    title: "Scalable Architecture",
    description: "Our solutions are designed with scalability and future growth in mind. We utilize modern technology stacks and architectural patterns that allow your platform to evolve and scale according to business requirements.",
    color: "rose",
    iconColor: "text-rose-600",
    bgColor: "bg-rose-50",
    gradient: "from-rose-500 to-rose-600",
    borderColor: "border-rose-200",
  },
]

export default function WhyChooseUs() {
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
    <section id="why-us" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white why-choose-us-section w-full overflow-x-hidden">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700 why-choose-us-container w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 why-choose-us-header">
          <h2 className="why-choose-us-title font-bold mb-3 sm:mb-4 text-primary">Why Choose Us</h2>
          <p className="why-choose-us-subtitle text-foreground/70 max-w-2xl mx-auto">
            We deliver enterprise software solutions that combine technical excellence, strategic thinking, and proven methodologies to achieve measurable business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 why-choose-us-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`group relative bg-white border-2 ${feature.borderColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden why-choose-us-card`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-500`} />
                
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-t-xl sm:rounded-t-2xl`} />

                {/* Content */}
                <div className="relative z-10 why-choose-us-card-content">
                  {/* Icon with colorful background */}
                  <div className="mb-3 sm:mb-4 md:mb-6 why-choose-us-icon-wrapper">
                    <div className="relative inline-block">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 blur-xl group-hover:opacity-20 rounded-lg sm:rounded-xl transition-opacity duration-500`} />
                      <div className={`relative why-choose-us-icon-container ${feature.bgColor} rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg border border-white/50`}>
                        <Icon className={`${feature.iconColor} why-choose-us-icon group-hover:scale-110 transition-transform duration-500`} />
                      </div>
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="why-choose-us-card-title font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-gray-950 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="why-choose-us-card-description text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
