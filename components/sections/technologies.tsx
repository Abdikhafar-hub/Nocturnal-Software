"use client"

import { useEffect, useRef } from "react"

const technologies = [
  { 
    name: "React & Next.js", 
    category: "Frontend",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
    ]
  },
  { 
    name: "JavaScript & TypeScript", 
    category: "Language",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    ]
  },
  { 
    name: "Node.js & Python", 
    category: "Backend",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    ]
  },
  { 
    name: "PostgreSQL", 
    category: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
  },
  { 
    name: "TensorFlow, PyTorch & Pandas", 
    category: "AI/ML",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
    ]
  },
  { 
    name: "Docker & Kubernetes", 
    category: "DevOps",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg"
    ]
  },
  { 
    name: "AWS & Google Cloud", 
    category: "Cloud",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
    ]
  },
  { 
    name: "Kali Linux & Metasploit", 
    category: "Cybersecurity",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kalilinux/kalilinux-original.svg",
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/metasploit.svg"
    ]
  },
]

export default function Technologies() {
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
    <section id="technologies" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-card/30 technologies-section w-full overflow-x-hidden">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700 technologies-container w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 technologies-header">
          <h2 className="technologies-title font-bold mb-3 sm:mb-4 text-primary">Technologies We Use</h2>
          <p className="technologies-subtitle text-foreground/70 max-w-2xl mx-auto">
            We leverage the latest and most reliable technologies to build robust solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 technologies-grid">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer technologies-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center gap-2 sm:gap-3 technologies-card-content">
                {tech.icons ? (
                  <div className="technologies-icons-wrapper flex items-center justify-center mb-1 sm:mb-2">
                    {tech.icons.map((iconUrl, idx) => (
                      <img 
                        key={idx}
                        src={iconUrl} 
                        alt={`${tech.name} ${idx + 1}`}
                        className="technologies-icon object-contain filter group-hover:scale-110 transition-transform duration-300"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="technologies-icon-wrapper flex items-center justify-center mb-1 sm:mb-2">
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="technologies-icon-single object-contain filter group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="technologies-text">
                  <p className="technologies-name font-semibold">{tech.name}</p>
                  <p className="technologies-category text-foreground/50 mt-0.5 sm:mt-1">{tech.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
