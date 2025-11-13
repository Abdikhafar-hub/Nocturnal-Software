export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nocturnalsoftwaresolutions.com"

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nocturnal Software Solutions",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Nocturnal Software Solutions provides cutting-edge software development, full-stack solutions, and digital transformation services. We build the future, one line of code at a time.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kolobot Road",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254717219448",
      contactType: "Customer Service",
      email: "info@nocturnalsoftware.com",
      areaServed: "KE",
      availableLanguage: ["en"],
    },
    sameAs: [
      // Add your social media profiles here when available
      // "https://www.linkedin.com/company/nocturnal-software-solutions",
      // "https://twitter.com/nocturnalsoftware",
      // "https://github.com/nocturnal-software",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nocturnal Software Solutions",
    url: siteUrl,
    description:
      "Nocturnal Software Solutions - Innovation-Driven Digital Solutions. We build the future, one line of code at a time.",
    publisher: {
      "@type": "Organization",
      name: "Nocturnal Software Solutions",
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development Services",
    provider: {
      "@type": "Organization",
      name: "Nocturnal Software Solutions",
    },
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: siteUrl,
      servicePhone: "+254717219448",
      serviceEmail: "info@nocturnalsoftware.com",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  )
}

