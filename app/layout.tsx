import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import StructuredData from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nocturnalsoftwaresolutions.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nocturnal Software Solutions - Innovation-Driven Digital Solutions",
    template: "%s | Nocturnal Software Solutions",
  },
  description:
    "Nocturnal Software Solutions provides cutting-edge software development, full-stack solutions, and digital transformation services. We build the future, one line of code at a time. Based in Nairobi, Kenya.",
  keywords: [
    "Nocturnal Software Solutions",
    "software development",
    "full-stack development",
    "web development",
    "mobile app development",
    "digital transformation",
    "software solutions",
    "Nairobi Kenya",
    "enterprise software",
    "custom software",
    "cloud solutions",
    "cybersecurity",
    "AI solutions",
    "blockchain development",
  ],
  authors: [{ name: "Nocturnal Software Solutions" }],
  creator: "Nocturnal Software Solutions",
  publisher: "Nocturnal Software Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Nocturnal Software Solutions",
    title: "Nocturnal Software Solutions - Innovation-Driven Digital Solutions",
    description:
      "We build the future, one line of code at a time. Full-stack software solutions for businesses, enterprises, and innovators. Based in Nairobi, Kenya.",
    images: [
      {
        url: `${siteUrl}/favicon.jpeg`,
        width: 512,
        height: 512,
        alt: "Nocturnal Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nocturnal Software Solutions - Innovation-Driven Digital Solutions",
    description:
      "We build the future, one line of code at a time. Full-stack software solutions for businesses, enterprises, and innovators.",
    images: [`${siteUrl}/favicon.jpeg`],
    creator: "@nocturnalsoftware",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.jpeg",
    shortcut: "/favicon.jpeg",
    apple: "/favicon.jpeg",
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your Google Search Console verification code here when available
    // google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <StructuredData />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
