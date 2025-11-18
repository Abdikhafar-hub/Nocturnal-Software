import type { Metadata } from "next"
import PageLayout from "@/components/page-layout"
import About from "@/components/sections/about"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nocturnalsoftwaresolutions.com"

export const metadata: Metadata = {
  title: "About Us - Innovation-Driven Software Solutions",
  description:
    "Learn about Nocturnal Software Solutions - a software company dedicated to delivering innovative digital solutions that drive business transformation. Based in Nairobi, Kenya.",
  keywords: [
    "about nocturnal software",
    "software company Kenya",
    "Nairobi software development",
    "digital transformation company",
    "enterprise software solutions",
  ],
  openGraph: {
    title: "About Us - Nocturnal Software Solutions",
    description:
      "We are a software company dedicated to delivering innovative digital solutions that drive business transformation.",
    url: `${siteUrl}/about`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
}

export default function AboutPage() {
  return (
    <PageLayout activeSection="about">
      <About />
    </PageLayout>
  )
}

