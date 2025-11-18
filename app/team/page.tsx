import type { Metadata } from "next"
import PageLayout from "@/components/page-layout"
import Team from "@/components/sections/team"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nocturnalsoftwaresolutions.com"

export const metadata: Metadata = {
  title: "Meet Our Team - Expert Software Developers & Engineers",
  description:
    "Meet the talented team of software developers, engineers, and digital transformation experts at Nocturnal Software Solutions.",
  keywords: [
    "software development team",
    "software engineers Kenya",
    "development team",
    "software experts",
  ],
  openGraph: {
    title: "Meet Our Team - Nocturnal Software Solutions",
    description:
      "Meet the talented team of software developers, engineers, and digital transformation experts.",
    url: `${siteUrl}/team`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/team`,
  },
}

export default function TeamPage() {
  return (
    <PageLayout activeSection="team">
      <Team />
    </PageLayout>
  )
}

