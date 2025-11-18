import type { Metadata } from "next"
import PageLayout from "@/components/page-layout"
import Portfolio from "@/components/sections/portfolio"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nocturnalsoftwaresolutions.com"

export const metadata: Metadata = {
  title: "Our Portfolio - Software Development Projects & Case Studies",
  description:
    "Explore our portfolio of successful software development projects including web applications, mobile apps, enterprise systems, and digital transformation solutions.",
  keywords: [
    "software development portfolio",
    "web development projects",
    "mobile app portfolio",
    "enterprise software case studies",
    "digital transformation projects",
  ],
  openGraph: {
    title: "Our Portfolio - Nocturnal Software Solutions",
    description:
      "Explore our portfolio of successful software development projects and digital transformation solutions.",
    url: `${siteUrl}/portfolio`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/portfolio`,
  },
}

export default function PortfolioPage() {
  return (
    <PageLayout activeSection="portfolio">
      <Portfolio />
    </PageLayout>
  )
}

