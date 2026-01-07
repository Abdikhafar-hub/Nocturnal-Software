"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { MapPin, Clock, ArrowRight, GraduationCap, TrendingUp, Users, Heart, Briefcase } from "lucide-react"
import { jobs, type JobType, type LocationType } from "@/lib/jobs-data"

const getLocationColor = (location: LocationType) => {
  switch (location) {
    case "Remote":
      return "bg-green-100 text-green-700 border-green-200"
    case "Hybrid":
      return "bg-blue-100 text-blue-700 border-blue-200"
    case "On-site":
      return "bg-purple-100 text-purple-700 border-purple-200"
  }
}

const getTypeColor = (type: JobType) => {
  switch (type) {
    case "Full-time":
      return "bg-primary/10 text-primary border-primary/20"
    case "Contract":
      return "bg-orange-100 text-orange-700 border-orange-200"
    case "Internship":
      return "bg-pink-100 text-pink-700 border-pink-200"
  }
}

export default function Careers() {
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
    <section id="careers" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 careers-section w-full overflow-x-hidden">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700 careers-container w-full">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 careers-header">
          <h1 className="careers-title font-bold mb-4 sm:mb-6 text-primary text-3xl sm:text-4xl md:text-5xl">
            Build Your Career With Us
          </h1>
          <p className="careers-subtitle text-foreground/70 max-w-3xl mx-auto text-lg sm:text-xl">
            Join a team of passionate engineers building the future of AI-driven software solutions.
            We're looking for talented individuals who share our commitment to excellence and innovation.
          </p>
        </div>

        {/* Open Roles Section */}
        <div className="mb-16 sm:mb-20 careers-roles-section">
          <h2 className="careers-section-title font-bold mb-8 sm:mb-10 text-2xl sm:text-3xl text-primary">
            Open Roles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 careers-roles-grid">
            {jobs.map((job) => (
              <Link
                key={job.id}
                href={`/careers/${job.id}`}
                className="careers-job-card group relative bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="careers-job-title font-bold text-xl sm:text-2xl text-primary group-hover:text-accent transition-colors">
                      {job.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4 careers-job-badges">
                    <span className={`px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${getLocationColor(job.location)}`}>
                      <MapPin className="inline w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
                      {job.location}
                    </span>
                    <span className={`px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${getTypeColor(job.type)}`}>
                      <Clock className="inline w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
                      {job.type}
                    </span>
                  </div>
                  <p className="careers-job-summary text-foreground/70 mb-4 leading-relaxed">
                    {job.summary}
                  </p>
                  <div className="flex items-center text-primary font-semibold group-hover:text-accent transition-colors">
                    <span className="text-sm sm:text-base">View Details</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Learning & Growth Section */}
        <div className="mb-16 sm:mb-20 careers-learning-section">
          <h2 className="careers-section-title font-bold mb-8 sm:mb-10 text-2xl sm:text-3xl text-primary">
            Learning & Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 careers-learning-grid">
            <div className="careers-feature-card bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="careers-feature-icon-wrapper bg-primary/10 rounded-xl p-2.5 sm:p-3 flex-shrink-0">
                  <GraduationCap className="text-primary careers-feature-icon" />
                </div>
                <h3 className="careers-feature-title font-bold text-lg sm:text-xl text-primary">Mentorship</h3>
              </div>
              <p className="careers-feature-description text-foreground/70 leading-relaxed text-sm sm:text-base">
                Work alongside experienced engineers who are committed to your growth. Regular one-on-one sessions and code reviews help you learn and improve continuously.
              </p>
            </div>

            <div className="careers-feature-card bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="careers-feature-icon-wrapper bg-accent/10 rounded-xl p-2.5 sm:p-3 flex-shrink-0">
                  <TrendingUp className="text-accent careers-feature-icon" />
                </div>
                <h3 className="careers-feature-title font-bold text-lg sm:text-xl text-accent">Learning Budget</h3>
              </div>
              <p className="careers-feature-description text-foreground/70 leading-relaxed text-sm sm:text-base">
                Annual budget for courses, certifications, books, and conferences. We invest in your professional development because your growth is our success.
              </p>
            </div>

            <div className="careers-feature-card bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="careers-feature-icon-wrapper bg-primary/10 rounded-xl p-2.5 sm:p-3 flex-shrink-0">
                  <Briefcase className="text-primary careers-feature-icon" />
                </div>
                <h3 className="careers-feature-title font-bold text-lg sm:text-xl text-primary">Access to Research</h3>
              </div>
              <p className="careers-feature-description text-foreground/70 leading-relaxed text-sm sm:text-base">
                Access to latest research papers, AI models, and cutting-edge tools. Work on innovative projects that push the boundaries of what's possible.
              </p>
            </div>

            <div className="careers-feature-card bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="careers-feature-icon-wrapper bg-accent/10 rounded-xl p-2.5 sm:p-3 flex-shrink-0">
                  <Users className="text-accent careers-feature-icon" />
                </div>
                <h3 className="careers-feature-title font-bold text-lg sm:text-xl text-accent">Career Growth Paths</h3>
              </div>
              <p className="careers-feature-description text-foreground/70 leading-relaxed text-sm sm:text-base">
                Clear progression paths from junior to senior roles, with opportunities to specialize or move into leadership. Your career trajectory is in your hands.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits & Work Style Section */}
        <div className="mb-16 sm:mb-20 careers-benefits-section">
          <h2 className="careers-section-title font-bold mb-8 sm:mb-10 text-2xl sm:text-3xl text-primary">
            Benefits & Work Style
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 careers-benefits-grid">
            {[
              { icon: "🌍", title: "Remote-Friendly", description: "Work from anywhere. We support flexible remote work arrangements." },
              { icon: "⏰", title: "Flexible Hours", description: "Choose your working hours. We focus on results, not hours clocked." },
              { icon: "💰", title: "Competitive Compensation", description: "Fair and competitive salaries based on skills and experience." },
              { icon: "📈", title: "Performance-Based Growth", description: "Clear performance metrics and regular reviews for career advancement." },
              { icon: "⚖️", title: "Work-Life Balance", description: "We respect your time. No excessive overtime or weekend work." },
              { icon: "🏥", title: "Health & Wellness", description: "Health insurance and wellness programs to keep you at your best." },
            ].map((benefit, index) => (
              <div key={index} className="careers-benefit-card bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{benefit.icon}</div>
                <h3 className="careers-benefit-title font-bold text-base sm:text-lg mb-2 text-primary">{benefit.title}</h3>
                <p className="careers-benefit-description text-foreground/70 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Process Section */}
        <div className="mb-16 sm:mb-20 careers-process-section">
          <h2 className="careers-section-title font-bold mb-8 sm:mb-10 text-2xl sm:text-3xl text-primary">
            Hiring Process
          </h2>
          <div className="careers-process-steps space-y-6 sm:space-y-8">
            {[
              { step: "1", title: "Application Review", description: "We review your application and portfolio. Typically takes 2-3 business days." },
              { step: "2", title: "Technical Interview", description: "A conversation about your experience, technical skills, and problem-solving approach." },
              { step: "3", title: "Practical Task or Discussion", description: "A small project or technical discussion relevant to the role. We value practical skills over perfect answers." },
              { step: "4", title: "Final Conversation", description: "Meet the team, discuss culture fit, and ask any questions. We want to ensure it's a great fit for both sides." },
            ].map((process, index) => (
              <div key={index} className="careers-process-step bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="careers-process-number flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="careers-process-number-text font-bold text-primary text-xl sm:text-2xl">{process.step}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="careers-process-title font-bold text-lg sm:text-xl md:text-2xl mb-2 text-primary">{process.title}</h3>
                  <p className="careers-process-description text-foreground/70 leading-relaxed text-sm sm:text-base">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diversity & Inclusion Section */}
        <div className="careers-diversity-section">
          <div className="careers-diversity-card bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="careers-diversity-icon-wrapper bg-primary/20 rounded-full p-3 sm:p-4">
                <Heart className="text-primary careers-diversity-icon" />
              </div>
            </div>
            <h2 className="careers-diversity-title font-bold mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl text-primary">
              Diversity & Inclusion
            </h2>
            <p className="careers-diversity-text text-foreground/80 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
              We believe great ideas come from diverse perspectives. We welcome talent from all backgrounds and experiences.
              Our commitment to inclusion means everyone has an equal opportunity to grow, contribute, and succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

