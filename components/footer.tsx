"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NS</span>
              </div>
              <span className="font-bold text-lg">Nocturnal</span>
            </Link>
            <p className="text-foreground/60 text-sm">Building the future, one line of code at a time.</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-foreground/60 hover:text-foreground transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/60 hover:text-foreground transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/60 hover:text-foreground transition-colors">
                  AI Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/60 hover:text-foreground transition-colors">
                  Cloud Services
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-foreground/60 hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-foreground/60 hover:text-foreground transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/60 hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Twitter size={20} className="text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} className="text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Github size={20} className="text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            &copy; {currentYear} Nocturnal Software Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
