"use client"

import { useEffect, useRef } from "react"
import { Building2, Briefcase, Shield, GraduationCap, Heart, Globe, TrendingUp } from "lucide-react"

const industries = [
  { icon: Building2, name: "Corporate", color: "blue", iconColor: "text-blue-600", bgColor: "bg-blue-50", hoverBg: "bg-blue-100", borderColor: "border-blue-200", gradient: "from-blue-500 to-blue-600" },
  { icon: TrendingUp, name: "Finance & Marketing", color: "emerald", iconColor: "text-emerald-600", bgColor: "bg-emerald-50", hoverBg: "bg-emerald-100", borderColor: "border-emerald-200", gradient: "from-emerald-500 to-emerald-600" },
  { icon: Shield, name: "Government", color: "amber", iconColor: "text-amber-600", bgColor: "bg-amber-50", hoverBg: "bg-amber-100", borderColor: "border-amber-200", gradient: "from-amber-500 to-amber-600" },
  { icon: GraduationCap, name: "Education", color: "purple", iconColor: "text-purple-600", bgColor: "bg-purple-50", hoverBg: "bg-purple-100", borderColor: "border-purple-200", gradient: "from-purple-500 to-purple-600" },
  { icon: Heart, name: "Healthcare", color: "rose", iconColor: "text-rose-600", bgColor: "bg-rose-50", hoverBg: "bg-rose-100", borderColor: "border-rose-200", gradient: "from-rose-500 to-rose-600" },
  { icon: Globe, name: "Any Industry", color: "teal", iconColor: "text-teal-600", bgColor: "bg-teal-50", hoverBg: "bg-teal-100", borderColor: "border-teal-200", gradient: "from-teal-500 to-teal-600" },
]

export default function Industries() {
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
    <section id="industries" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 industries-section w-full overflow-x-hidden">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700 industries-container w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 industries-header">
          <h2 className="industries-title font-bold mb-3 sm:mb-4 text-primary">Industries We Serve</h2>
          <p className="industries-subtitle text-foreground/70 max-w-2xl mx-auto">
            Expertise across diverse sectors with proven success in delivering tailored solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-4 industries-grid">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className={`group relative bg-white border-2 ${industry.borderColor} rounded-xl sm:rounded-2xl industries-card p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-2xl cursor-pointer hover:-translate-y-1`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon container with colorful background */}
                <div className="relative mb-2 sm:mb-3 md:mb-4 industries-icon-wrapper">
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-10 blur-lg group-hover:opacity-20 rounded-lg sm:rounded-xl transition-opacity duration-300`} />
                  <div className={`relative industries-icon-container ${industry.bgColor} group-hover:${industry.hoverBg} rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md group-hover:shadow-lg border border-white/50`}>
                    <Icon className={`${industry.iconColor} industries-icon group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>
                
                {/* Industry name */}
                <p className="industries-name font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  {industry.name}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
