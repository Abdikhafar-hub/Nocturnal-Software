import type { Metadata } from "next"
import PageLayout from "@/components/page-layout"
import Services from "@/components/sections/services"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nocturnalsoftwaresolutions.com"

export const metadata: Metadata = {
  title: "Our Services - Software Development & Digital Solutions",
  description:
    "Comprehensive software development services including web & mobile app development, enterprise systems, AI & ML solutions, cloud services, cybersecurity, and more. Based in Nairobi, Kenya.",
  keywords: [
    "software development services",
    "web development Kenya",
    "mobile app development",
    "enterprise software solutions",
    "AI machine learning services",
    "cloud computing services",
    "cybersecurity solutions",
    "blockchain development",
  ],
  openGraph: {
    title: "Our Services - Nocturnal Software Solutions",
    description:
      "Comprehensive software development services including web & mobile app development, enterprise systems, AI & ML solutions, and more.",
    url: `${siteUrl}/services`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/services`,
  },
}

export default function ServicesPage() {
  return (
    <PageLayout activeSection="services">
      <Services />
    </PageLayout>
  )
}

