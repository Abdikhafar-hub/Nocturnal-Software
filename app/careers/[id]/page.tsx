import type { Metadata } from "next"
import { notFound } from "next/navigation"
import PageLayout from "@/components/page-layout"
import JobDescription from "@/components/sections/job-description"
import { jobs } from "@/lib/jobs-data"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nocturnalsoftwaresolutions.com"

export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }))
}

// Helper to handle params for both Next.js 13/14 and 15
async function getParams(params: Promise<{ id: string }> | { id: string }): Promise<{ id: string }> {
  return params instanceof Promise ? await params : params
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> | { id: string } }): Promise<Metadata> {
  const { id } = await getParams(params)
  const job = jobs.find((j) => j.id === id)

  if (!job) {
    return {
      title: "Job Not Found",
    }
  }

  return {
    title: `${job.title} - Careers`,
    description: job.summary,
    openGraph: {
      title: `${job.title} - Nocturnal Software Solutions`,
      description: job.summary,
      url: `${siteUrl}/careers/${job.id}`,
      type: "website",
    },
    alternates: {
      canonical: `${siteUrl}/careers/${job.id}`,
    },
  }
}

export default async function JobPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
  const { id } = await getParams(params)
  const job = jobs.find((j) => j.id === id)

  if (!job) {
    notFound()
  }

  return (
    <PageLayout activeSection="careers">
      <JobDescription jobId={id} />
    </PageLayout>
  )
}

