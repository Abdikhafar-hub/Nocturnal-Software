"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative text-white/80 footer-section w-full overflow-x-hidden" style={{ backgroundColor: "rgba(1, 28, 64, 1)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative footer-container">
        {/* Upper Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12 footer-grid">
          {/* Brand Column - Left */}
          <div className="relative footer-brand-col">
            <div className="space-y-3 sm:space-y-4 footer-brand-content">
              <Link href="/" className="footer-company-name-link">
                <h3 className="footer-company-name text-white font-bold text-lg sm:text-xl md:text-2xl">
                  Nocturnal Software Solutions
                </h3>
              </Link>
              <p className="footer-description text-white/70 font-light italic leading-relaxed">
                Empowering businesses with advanced software solutions, real-world expertise, and comprehensive digital transformation through cutting-edge technology.
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-2 sm:gap-3 pt-2 footer-social-icons">
                <a
                  href="#"
                  className="footer-social-icon rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="footer-social-icon-inner text-white/80" />
                </a>
                <a
                  href="#"
                  className="footer-social-icon rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="footer-social-icon-inner text-white/80" />
                </a>
                <a
                  href="#"
                  className="footer-social-icon rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Github"
                >
                  <Github className="footer-social-icon-inner text-white/80" />
                </a>
                <a
                  href="#"
                  className="footer-social-icon rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="footer-social-icon-inner text-white/80" />
                </a>
              </div>
            </div>
          </div>

          {/* Platform Column */}
          <div className="footer-column">
            <h3 className="footer-column-title font-semibold mb-4 sm:mb-6 text-[oklch(0.65_0.15_280)] uppercase tracking-wide">
              Platform
            </h3>
            <ul className="space-y-2 sm:space-y-3 footer-column-list">
              <li className="flex items-center gap-2 footer-column-item">
                <span className="footer-bullet rounded-full bg-orange-500 flex-shrink-0"></span>
                <a href="#services" className="footer-link text-white/70 hover:text-white transition-colors duration-200">
                  Web Development
                </a>
              </li>
              <li className="flex items-center gap-2 footer-column-item">
                <span className="footer-bullet rounded-full bg-orange-500 flex-shrink-0"></span>
                <a href="#services" className="footer-link text-white/70 hover:text-white transition-colors duration-200">
                  Mobile Apps
                </a>
              </li>
              <li className="flex items-center gap-2 footer-column-item">
                <span className="footer-bullet rounded-full bg-orange-500 flex-shrink-0"></span>
                <a href="#services" className="footer-link text-white/70 hover:text-white transition-colors duration-200">
                  AI Solutions
                </a>
              </li>
              <li className="flex items-center gap-2 footer-column-item">
                <span className="footer-bullet rounded-full bg-orange-500 flex-shrink-0"></span>
                <a href="#services" className="footer-link text-white/70 hover:text-white transition-colors duration-200">
                  Cloud Services
                </a>
              </li>
              <li className="flex items-center gap-2 footer-column-item">
                <span className="footer-bullet rounded-full bg-orange-500 flex-shrink-0"></span>
                <a href="#portfolio" className="footer-link text-white/70 hover:text-white transition-colors duration-200">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="footer-column">
            <h3 className="footer-column-title font-semibold mb-4 sm:mb-6 text-[oklch(0.65_0.15_280)] uppercase tracking-wide">
              Resources
            </h3>
            <ul className="space-y-2 sm:space-y-3 footer-column-list">
              <li className="flex items-center gap-2 footer-column-item">
                <span className="footer-bullet rounded-full bg-orange-500 flex-shrink-0"></span>
                <a href="#services" className="footer-link text-white/70 hover:text-white transition-colors duration-200">
                  Documentation
                </a>
              </li>
              <li className="flex items-center gap-2 footer-column-item">
                <span className="footer-bullet rounded-full bg-orange-500 flex-shrink-0"></span>
                <a href="#contact" className="footer-link text-white/70 hover:text-white transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li className="flex items-center gap-2 footer-column-item">
                <span className="footer-bullet rounded-full bg-orange-500 flex-shrink-0"></span>
                <a href="#" className="footer-link text-white/70 hover:text-white transition-colors duration-200">
                  API Documentation
                </a>
              </li>
              <li className="flex items-center gap-2 footer-column-item">
                <span className="footer-bullet rounded-full bg-orange-500 flex-shrink-0"></span>
                <a href="#" className="footer-link text-white/70 hover:text-white transition-colors duration-200">
                  System Status
                </a>
              </li>
              <li className="flex items-center gap-2 footer-column-item">
                <span className="footer-bullet rounded-full bg-orange-500 flex-shrink-0"></span>
                <a href="#contact" className="footer-link text-white/70 hover:text-white transition-colors duration-200">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-column">
            <h3 className="footer-column-title font-semibold mb-4 sm:mb-6 text-[oklch(0.65_0.15_280)] uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3 footer-column-list">
              <li className="flex items-center gap-2 footer-column-item">
                <span className="footer-bullet rounded-full bg-orange-500 flex-shrink-0"></span>
                <a href="#about" className="footer-link text-white/70 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li className="flex items-center gap-2 footer-column-item">
                <span className="footer-bullet rounded-full bg-orange-500 flex-shrink-0"></span>
                <a href="#team" className="footer-link text-white/70 hover:text-white transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li className="flex items-center gap-2 footer-column-item">
                <span className="footer-bullet rounded-full bg-orange-500 flex-shrink-0"></span>
                <a href="#" className="footer-link text-white/70 hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li className="flex items-center gap-2 footer-column-item">
                <span className="footer-bullet rounded-full bg-orange-500 flex-shrink-0"></span>
                <Link href="/privacy-policy" className="footer-link text-white/70 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li className="flex items-center gap-2 footer-column-item">
                <span className="footer-bullet rounded-full bg-orange-500 flex-shrink-0"></span>
                <Link href="/terms-of-service" className="footer-link text-white/70 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 space-y-2 sm:space-y-4 footer-bottom">
          <p className="footer-copyright text-white/60">
            &copy; {currentYear} Nocturnal Software Solutions. All rights reserved.
          </p>
          <p className="footer-built-with text-white/60 flex items-center gap-1.5">
            Built with{" "}
            <Heart className="footer-heart-icon text-orange-500 fill-orange-500" />{" "}
            for businesses worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
