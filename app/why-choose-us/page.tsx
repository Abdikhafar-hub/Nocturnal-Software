import type { Metadata } from "next"
import PageLayout from "@/components/page-layout"
import WhyChooseUs from "@/components/sections/why-choose-us"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nocturnalsoftwaresolutions.com"

export const metadata: Metadata = {
  title: "Why Choose Us - Leading Software Development Company",
  description:
    "Discover why businesses choose Nocturnal Software Solutions - innovation, precision, clean UI, advanced UX, and comprehensive digital transformation expertise.",
  keywords: [
    "why choose nocturnal software",
    "best software development company",
    "software development expertise",
    "digital transformation experts",
  ],
  openGraph: {
    title: "Why Choose Us - Nocturnal Software Solutions",
    description:
      "Discover why businesses choose us for innovation, precision, clean UI, and advanced UX in software development.",
    url: `${siteUrl}/why-choose-us`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/why-choose-us`,
  },
}

export default function WhyChooseUsPage() {
  return (
    <PageLayout activeSection="why-us">
      <WhyChooseUs />
    </PageLayout>
  )
}

