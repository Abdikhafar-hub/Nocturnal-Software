"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Linkedin, Github, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "Abdikhafar Mohamed Issack",
    role: "Founder Nocturnal Software Solutions, Full Stack Software Engineer, DevSecOps, AI/ML Engineer,",
    bio: "A versatile tech innovator skilled in full-stack development, DevSecOps, AI/ML, and cloud engineering — known for crafting scalable, secure, and impactful digital solutions. With a track record of award-winning projects, he turns complex ideas into reliable systems that fuel business growth and innovation.",
    image: "/meee.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/abdikhafar-issack/",
      github: "https://github.com/Abdikhafar-hub",
      twitter: "https://twitter.com/abdikhafar_issack",
      email: "abdikhafarissack@gmail.com",
    },
  },
  {
    name: "George Williams Ochieng",
    role: "Co-founder Nocturnal Software Solutions,",
    bio: "A dedicated technology professional committed to driving innovation and delivering exceptional software solutions. Passionate about building transformative digital experiences that make a meaningful impact.",
    image: "/william.png",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    name: "Brian Thomas Mboya",
    role: "Investment and Credit Risk Management Professional, Actuarial Science Graduate, Rust and Power BI Developer",
    bio: "A financial professional with expertise in investment and credit risk management. As an R and Power BI developer, he builds scalable systems and data visualization solutions that transform complex financial data into actionable insights for data-driven decision-making.",
    image: "/brian.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/brian-mboya-8967311b2/",
      github: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    name: "Hafsa Abdinassir",
    role: "Sales and Marketing Agent",
    bio: "A dynamic sales and marketing professional dedicated to driving business growth through strategic outreach and customer engagement. Specializes in building strong client relationships, developing effective marketing campaigns, and identifying new business opportunities. Known for excellent communication skills and a results-driven approach to expanding market presence and increasing brand visibility.",
    image: "/hafsa.png",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "#",
    },
  },
]

interface TeamProps {
  limit?: number
}

export default function Team({ limit }: TeamProps) {
  const ref = useRef<HTMLDivElement>(null)
  const displayedMembers = limit ? teamMembers.slice(0, limit) : teamMembers

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
    <section id="team" className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 team-section w-full overflow-x-hidden">
      <div ref={ref} className="max-w-[90rem] mx-auto opacity-0 translate-y-10 transition-all duration-700 team-container w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 team-header">
          <h2 className="team-title font-bold mb-3 sm:mb-4 text-primary break-words whitespace-normal">Meet Our Team</h2>
          <p className="team-subtitle text-foreground/70 max-w-2xl mx-auto">
            The talented individuals behind our innovative solutions and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 team-grid">
          {displayedMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border-2 border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 team-card"
            >
              {/* Image Frame */}
              <div className="relative team-image-wrapper overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-3 sm:p-4 md:p-6">
                <div className="relative team-image-container rounded-lg sm:rounded-xl overflow-hidden border-2 sm:border-4 border-white shadow-2xl group-hover:shadow-primary/20 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 team-image"
                  />
                </div>
              </div>

              {/* Info Section */}
              <div className="p-4 sm:p-5 md:p-6 team-info">
                <h3 className="team-name font-bold text-gray-900 mb-1 sm:mb-2">{member.name}</h3>
                <div className="text-primary mb-2 sm:mb-3 team-role">
                  {member.role.split(', ').map((part, idx, arr) => {
                    const isFounder = part.toLowerCase().includes('founder')
                    return (
                      <span key={idx}>
                        <span className={isFounder ? "team-role-founder font-bold" : "team-role-text font-semibold"}>
                          {part}
                        </span>
                        {idx < arr.length - 1 && <span className="mx-1">•</span>}
                      </span>
                    )
                  })}
                </div>
                <p className="text-gray-600 team-bio leading-relaxed mb-4 sm:mb-5">{member.bio}</p>

                {/* Social Links */}
                <div className="flex gap-2 sm:gap-3 team-socials">
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-link w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="text-blue-600 team-social-icon" />
                  </a>
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-link w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-100 hover:bg-slate-900 border border-slate-200 hover:border-slate-900 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="text-slate-600 hover:text-white team-social-icon transition-colors" />
                  </a>
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-link w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="text-blue-600 team-social-icon" />
                  </a>
                  <a
                    href={`mailto:${member.socials.email}`}
                    className="team-social-link w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="text-primary team-social-icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-8 sm:mt-12 md:mt-16">
            <Link href="/team">
              <Button className="relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105">
                <span className="relative z-10">See All Team Members</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

