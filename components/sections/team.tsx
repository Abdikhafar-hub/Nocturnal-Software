"use client"

import { useEffect, useRef } from "react"
import { Linkedin, Github, Twitter, Mail } from "lucide-react"

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
    role: "Penetration Tester, Security Researcher, Cybersecurity Engineer",
    bio: "A cybersecurity expert with a passion for uncovering vulnerabilities and building secure systems. With a background in penetration testing, security research, and cybersecurity engineering, he specializes in identifying and mitigating security risks in digital environments. Known for his meticulous approach and deep technical knowledge, he ensures organizations stay ahead of emerging threats and maintain robust security posture.",
    image: "/william.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/george-williams-869a66357/",
      github: "https://github.com",
      twitter: "https://twitter.com",
      email: "sarah@nocturnalsoftware.com",
    },
  },
]

export default function Team() {
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
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">Meet Our Team</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            The talented individuals behind our innovative solutions and exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative h-[480px] overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-6">
                <div className="relative h-full rounded-xl overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-primary/20 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-primary mb-3">
                  {member.role.split(', ').map((part, idx, arr) => {
                    const isFounder = part.toLowerCase().includes('founder')
                    return (
                      <span key={idx}>
                        <span className={isFounder ? "font-bold text-lg" : "font-semibold"}>
                          {part}
                        </span>
                        {idx < arr.length - 1 && <span className="mx-1">•</span>}
                      </span>
                    )
                  })}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{member.bio}</p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="text-blue-600 w-5 h-5" />
                  </a>
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-900 border border-slate-200 hover:border-slate-900 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="text-slate-600 hover:text-white w-5 h-5 transition-colors" />
                  </a>
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="text-blue-600 w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.socials.email}`}
                    className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="text-primary w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

