import type { Metadata } from "next"
import PageLayout from "@/components/page-layout"
import AllBlogs from "@/components/sections/all-blogs"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nocturnalsoftwaresolutions.com"

export const metadata: Metadata = {
  title: "All Blog Posts - Technology Insights & Best Practices",
  description:
    "Explore all our blog posts covering software development, cybersecurity, AI, blockchain, and technology best practices. Stay updated with the latest trends and insights.",
  keywords: [
    "technology blog",
    "software development blog",
    "cybersecurity insights",
    "AI and machine learning",
    "blockchain technology",
    "tech best practices",
  ],
  openGraph: {
    title: "All Blog Posts - Nocturnal Software Solutions",
    description:
      "Explore all our blog posts covering software development, cybersecurity, AI, blockchain, and technology best practices.",
    url: `${siteUrl}/blogs`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/blogs`,
  },
}

export default function BlogsPage() {
  return (
    <PageLayout activeSection="blog">
      <AllBlogs />
    </PageLayout>
  )
}


