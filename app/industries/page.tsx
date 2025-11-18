import type { Metadata } from "next"
import PageLayout from "@/components/page-layout"
import Industries from "@/components/sections/industries"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nocturnalsoftwaresolutions.com"

export const metadata: Metadata = {
  title: "Industries We Serve - Industry-Specific Software Solutions",
  description:
    "We provide specialized software solutions across multiple industries including healthcare, finance, education, e-commerce, manufacturing, and more.",
  keywords: [
    "healthcare software solutions",
    "fintech software development",
    "education technology solutions",
    "e-commerce software",
    "manufacturing software",
    "industry-specific software",
  ],
  openGraph: {
    title: "Industries We Serve - Nocturnal Software Solutions",
    description:
      "We provide specialized software solutions across multiple industries including healthcare, finance, education, and more.",
    url: `${siteUrl}/industries`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/industries`,
  },
}

export default function IndustriesPage() {
  return (
    <PageLayout activeSection="industries">
      <Industries />
    </PageLayout>
  )
}

