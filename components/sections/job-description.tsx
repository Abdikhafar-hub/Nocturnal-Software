"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, CheckCircle2, Code, TrendingUp, Briefcase } from "lucide-react"
import { jobs, type Job } from "@/lib/jobs-data"

interface JobDescriptionProps {
  jobId: string
}

const getLocationColor = (location: string) => {
  switch (location) {
    case "Remote":
      return "bg-green-100 text-green-700 border-green-200"
    case "Hybrid":
      return "bg-blue-100 text-blue-700 border-blue-200"
    case "On-site":
      return "bg-purple-100 text-purple-700 border-purple-200"
    default:
      return "bg-gray-100 text-gray-700 border-gray-200"
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "Full-time":
      return "bg-primary/10 text-primary border-primary/20"
    case "Contract":
      return "bg-orange-100 text-orange-700 border-orange-200"
    case "Internship":
      return "bg-pink-100 text-pink-700 border-pink-200"
    default:
      return "bg-gray-100 text-gray-700 border-gray-200"
  }
}

export default function JobDescription({ jobId }: JobDescriptionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const job = jobs.find((j) => j.id === jobId)

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

  if (!job) {
    return (
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4 text-primary">Job Not Found</h1>
          <p className="text-foreground/70 mb-8">The job you're looking for doesn't exist.</p>
          <Link
            href="/careers"
            className="inline-flex items-center text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Careers
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 job-description-section w-full overflow-x-hidden">
      <div ref={ref} className="max-w-4xl mx-auto opacity-0 translate-y-10 transition-all duration-700 job-description-container w-full">
        {/* Back Button */}
        <Link
          href="/careers"
          className="inline-flex items-center text-primary hover:text-accent transition-colors mb-8 job-description-back"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Careers
        </Link>

        {/* Job Header */}
        <div className="mb-8 sm:mb-12 job-description-header">
          <h1 className="job-description-title font-bold text-3xl sm:text-4xl md:text-5xl mb-4 text-primary">
            {job.title}
          </h1>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 job-description-badges">
            <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border ${getLocationColor(job.location)}`}>
              <MapPin className="inline w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />
              {job.location}
            </span>
            <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border ${getTypeColor(job.type)}`}>
              <Clock className="inline w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />
              {job.type}
            </span>
          </div>
          <p className="job-description-summary text-base sm:text-lg text-foreground/80 leading-relaxed">
            {job.summary}
          </p>
        </div>

        {/* Responsibilities */}
        <div className="mb-6 sm:mb-8 md:mb-12 job-description-section-card">
          <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
            <h2 className="job-description-section-title font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-primary flex items-center gap-2 sm:gap-3">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              Responsibilities
            </h2>
            <ul className="space-y-2.5 sm:space-y-3 job-description-list">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 leading-relaxed text-sm sm:text-base">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Required Skills */}
        <div className="mb-6 sm:mb-8 md:mb-12 job-description-section-card">
          <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
            <h2 className="job-description-section-title font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-primary flex items-center gap-2 sm:gap-3">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              Required Skills
            </h2>
            <ul className="space-y-2.5 sm:space-y-3 job-description-list">
              {job.requiredSkills.map((skill, index) => (
                <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 leading-relaxed text-sm sm:text-base">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nice-to-Have Skills */}
        {job.niceToHaveSkills.length > 0 && (
          <div className="mb-6 sm:mb-8 md:mb-12 job-description-section-card">
            <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
              <h2 className="job-description-section-title font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-accent flex items-center gap-2 sm:gap-3">
                <Code className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                Nice-to-Have Skills
              </h2>
              <ul className="space-y-2.5 sm:space-y-3 job-description-list">
                {job.niceToHaveSkills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 leading-relaxed text-sm sm:text-base">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* What Success Looks Like */}
        <div className="mb-6 sm:mb-8 md:mb-12 job-description-section-card">
          <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
            <h2 className="job-description-section-title font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-primary flex items-center gap-2 sm:gap-3">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              What Success Looks Like
            </h2>
            <ul className="space-y-2.5 sm:space-y-3 job-description-list">
              {job.successMetrics.map((metric, index) => (
                <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 leading-relaxed text-sm sm:text-base">{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tools and Technologies */}
        <div className="mb-6 sm:mb-8 md:mb-12 job-description-section-card">
          <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
            <h2 className="job-description-section-title font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-primary flex items-center gap-2 sm:gap-3">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              Tools and Technologies
            </h2>
            <ul className="space-y-2 job-description-list">
              {job.toolsAndTech.map((tool, index) => (
                <li key={index} className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                  • {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Growth Opportunities */}
        <div className="mb-6 sm:mb-8 md:mb-12 job-description-section-card">
          <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
            <h2 className="job-description-section-title font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-accent flex items-center gap-2 sm:gap-3">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              Growth Opportunities
            </h2>
            <ul className="space-y-2.5 sm:space-y-3 job-description-list">
              {job.growthOpportunities.map((opportunity, index) => (
                <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 leading-relaxed text-sm sm:text-base">{opportunity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Apply Section */}
        <div className="job-description-apply bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center">
          <h2 className="job-description-apply-title font-bold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-primary">
            Ready to Apply?
          </h2>
          <p className="job-description-apply-text text-foreground/80 mb-5 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Send us your resume and a brief note about why you're interested in this role.
            We'd love to hear from you!
          </p>
          <a
            href={`mailto:careers@nocturnalsoftware.com?subject=Application for ${encodeURIComponent(job.title)}`}
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  )
}

