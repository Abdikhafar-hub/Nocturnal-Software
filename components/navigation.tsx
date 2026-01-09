"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  activeSection: string
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", id: "hero", href: "/" },
    { label: "About", id: "about", href: "/about" },
    { label: "Services", id: "services", href: "/services" },
    { label: "Portfolio", id: "portfolio", href: "/portfolio" },
    { label: "Industries", id: "industries", href: "/industries" },
    { label: "Why Us", id: "why-us", href: "/why-choose-us" },
    { label: "Team", id: "team", href: "/team" },
    { label: "Careers", id: "careers", href: "/careers" },
    { label: "Contact", id: "contact", href: "/#contact" },
  ]

  const handleNavClick = (item: typeof navItems[0], e: React.MouseEvent) => {
    if (item.href === "/") {
      e.preventDefault()
      if (isHomePage) {
        scrollToSection("hero")
      } else {
        window.location.href = "/"
      }
    } else if (item.href.startsWith("/#")) {
      e.preventDefault()
      if (isHomePage) {
        scrollToSection(item.id)
      } else {
        window.location.href = `/${item.href}`
      }
    } else if (isHomePage) {
      // On home page, try to scroll first, then navigate if section doesn't exist
      e.preventDefault()
      const element = document.getElementById(item.id)
      if (element) {
        scrollToSection(item.id)
      } else {
        window.location.href = item.href
      }
    }
    // If not on home page, let Next.js Link handle navigation
    setIsOpen(false)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur-xl border-b border-blue-900/50 shadow-lg"
      style={{ backgroundColor: "rgba(1, 28, 64, 0.95)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group relative z-10 -ml-4 sm:-ml-6 lg:-ml-8"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault()
                scrollToSection("hero")
              }
            }}
          >
            <img
              src="/logo.png"
              alt="Nocturnal Software Solutions"
              className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-auto object-contain transition-all duration-300 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (isHomePage && activeSection === item.id)
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  className="relative px-4 py-2 text-sm font-medium transition-all duration-300 group"
                >
                  <span
                    className={`relative z-10 ${
                      isActive
                        ? "text-primary"
                        : "text-white/70 group-hover:text-white"
                    } transition-colors duration-300`}
                  >
                    {item.label}
                  </span>
                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                  )}
                  {/* Hover underline */}
                  <span className="absolute bottom-0 left-1/2 right-1/2 h-0.5 bg-primary/50 rounded-full transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-4 items-center">
            <Button
              onClick={() => {
                if (isHomePage) {
                  scrollToSection("contact")
                } else {
                  window.location.href = "/#contact"
                }
              }}
              className="relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-6 py-2 rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110 relative z-10"
            aria-label="Toggle menu"
          >
            <div className="relative">
              {isOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 border-t border-blue-900/50" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-4 pb-4 rounded-b-lg backdrop-blur-sm" style={{ backgroundColor: "rgba(1, 28, 64, 0.95)" }}>
            {navItems.map((item) => {
              const isActive = pathname === item.href || (isHomePage && activeSection === item.id)
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`relative text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-primary/20 to-accent/20 text-primary font-semibold shadow-md shadow-primary/10"
                      : "text-white/70 hover:text-white hover:bg-primary/5"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-r-full" />
                  )}
                </Link>
              )
            })}
            <div className="px-4 pt-2">
              <Button
                onClick={() => {
                  if (isHomePage) {
                    scrollToSection("contact")
                  } else {
                    window.location.href = "/#contact"
                  }
                }}
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold py-3 rounded-lg shadow-lg shadow-primary/25 transition-all duration-300"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
