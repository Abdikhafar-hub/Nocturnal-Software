"use client"

import { ReactNode } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import NocturnalWebGLBackground from "@/components/nocturnal-webgl-background"

interface PageLayoutProps {
  children: ReactNode
  activeSection?: string
}

export default function PageLayout({ children, activeSection = "hero" }: PageLayoutProps) {
  return (
    <main className="min-h-screen bg-background relative">
      <NocturnalWebGLBackground />
      <Navigation activeSection={activeSection} />
      {children}
      <Footer />
    </main>
  )
}

