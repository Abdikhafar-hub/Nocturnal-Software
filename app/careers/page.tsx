import type { Metadata } from "next"
import PageLayout from "@/components/page-layout"
import Careers from "@/components/sections/careers"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nocturnalsoftwaresolutions.com"

export const metadata: Metadata = {
  title: "Careers - Join Our Team",
  description:
    "Build your career with Nocturnal Software Solutions. We're hiring talented engineers, AI/ML specialists, and developers. Join a team building the future of AI-driven software.",
  keywords: [
    "careers",
    "jobs",
    "software engineer jobs",
    "AI engineer jobs",
    "developer jobs Kenya",
    "tech jobs Nairobi",
    "software development careers",
  ],
  openGraph: {
    title: "Careers - Nocturnal Software Solutions",
    description:
      "Join our team of passionate engineers building the future of AI-driven software solutions.",
    url: `${siteUrl}/careers`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/careers`,
  },
}

export default function CareersPage() {
  return (
    <PageLayout activeSection="careers">
      <Careers />
    </PageLayout>
  )
}

