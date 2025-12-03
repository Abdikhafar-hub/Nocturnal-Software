import type { Metadata } from "next"
import PageLayout from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Eye, FileText, Globe, AlertCircle } from "lucide-react"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nocturnalsoftwaresolutions.com"

export const metadata: Metadata = {
  title: "Privacy Policy - Data Protection & Privacy Rights",
  description:
    "Nocturnal Software Solutions Privacy Policy. Learn how we protect your personal data in accordance with the Kenya Data Protection Act, 2019 and international data protection regulations.",
  keywords: [
    "privacy policy",
    "data protection",
    "Kenya Data Protection Act",
    "GDPR",
    "personal data",
    "data privacy",
    "Nocturnal Software Solutions",
  ],
  openGraph: {
    title: "Privacy Policy - Nocturnal Software Solutions",
    description:
      "Our comprehensive privacy policy detailing how we protect your personal data in accordance with Kenyan and international data protection laws.",
    url: `${siteUrl}/privacy-policy`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <PageLayout activeSection="privacy-policy">
      <div className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-4 sm:pb-8 lg:pb-12 px-3 sm:px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-4 sm:mb-6 lg:mb-8 text-center">
            <div className="flex justify-center mb-2 sm:mb-3 lg:mb-4">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4 text-primary">Privacy Policy</h1>
            <p className="text-muted-foreground text-xs sm:text-sm lg:text-lg">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {/* Introduction */}
          <Card className="mb-4 sm:mb-6 lg:mb-8 border-primary/20">
            <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
              <div className="article-content">
                <p className="text-sm sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4 leading-relaxed">
                  <strong className="text-primary">Nocturnal Software Solutions</strong> ("<strong className="text-primary">Nocturnal</strong>", "<strong className="text-primary">we</strong>", "<strong className="text-primary">us</strong>", or "<strong className="text-primary">our</strong>") is committed to protecting your personal data and respecting your privacy. We process all personal information in accordance with the <strong className="text-primary">Kenya Data Protection Act, 2019 (DPA)</strong>, the <strong className="text-primary">Data Protection (General) Regulations, 2021</strong>, and other applicable data protection laws and regulations worldwide, including but not limited to the <strong className="text-primary">General Data Protection Regulation (GDPR)</strong> of the European Union, the <strong className="text-primary">California Consumer Privacy Act (CCPA)</strong>, and other relevant international data protection frameworks.
                </p>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base lg:text-base leading-relaxed">
                  This <strong className="text-primary">Privacy Policy</strong> explains how we <strong className="text-primary">collect</strong>, <strong className="text-primary">use</strong>, <strong className="text-primary">disclose</strong>, <strong className="text-primary">store</strong>, and <strong className="text-primary">protect</strong> your <strong className="text-primary">personal information</strong> when you visit our <strong className="text-primary">website</strong>, use our <strong className="text-primary">services</strong>, or <strong className="text-primary">interact</strong> with us. By using our services, you <strong className="text-primary">agree</strong> to the <strong className="text-primary">collection and use</strong> of information in accordance with this <strong className="text-primary">policy</strong>.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Section 1: Definitions */}
            <Card id="definitions">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    1. Definitions
                  </h2>
                  <ul className="space-y-2">
                    <li>
                      <strong className="text-primary">Personal Data</strong>: Any information relating to an identified or identifiable natural person ("<strong className="text-primary">Data Subject</strong>"), including but not limited to name, identification number, location data, online identifier, or factors specific to physical, physiological, genetic, mental, economic, cultural, or social identity.
                    </li>
                    <li>
                      <strong className="text-primary">Processing</strong>: Any operation or set of operations performed on personal data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure, transmission, dissemination, alignment, combination, restriction, erasure, or destruction.
                    </li>
                    <li>
                      <strong className="text-primary">Data Controller</strong>: The natural or legal person, public authority, agency, or other body which, alone or jointly with others, determines the purposes and means of processing personal data.
                    </li>
                    <li>
                      <strong className="text-primary">Data Processor</strong>: A natural or legal person, public authority, agency, or other body which processes personal data on behalf of the data controller.
                    </li>
                    <li>
                      <strong className="text-primary">Consent</strong>: Any freely given, specific, informed, and unambiguous indication of the data subject's wishes by which they, by a statement or by clear affirmative action, signify agreement to the processing of personal data.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Information We Collect */}
            <Card id="information-we-collect">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    2. Information We Collect
                  </h2>
                  <p>We collect various types of information to provide and improve our services:</p>
                  
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">2.1 Personal Information</h3>
                  <p>We may collect the following personal information:</p>
                  <ul>
                    <li><strong className="text-primary">Identity Data</strong>: Name, title, date of birth, gender, national identification number, passport number</li>
                    <li><strong className="text-primary">Contact Data</strong>: Email address, postal address, telephone number, mobile number</li>
                    <li><strong className="text-primary">Professional Data</strong>: Job title, company name, industry, work address</li>
                    <li><strong className="text-primary">Financial Data</strong>: Bank account details, payment card information, billing address (processed securely through third-party payment processors)</li>
                    <li><strong className="text-primary">Technical Data</strong>: Internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system, device information</li>
                    <li><strong className="text-primary">Usage Data</strong>: Information about how you use our website and services, including pages visited, time spent on pages, click patterns, and navigation paths</li>
                    <li><strong className="text-primary">Marketing and Communications Data</strong>: Your preferences in receiving marketing communications from us, communication preferences, and your responses to surveys and feedback</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">2.2 Sensitive Personal Data</h3>
                  <p>We may collect <strong className="text-primary">sensitive personal data</strong> (as defined under the <strong className="text-primary">Kenya Data Protection Act</strong>) only when:</p>
                  <ul>
                    <li>You have given explicit consent</li>
                    <li>It is necessary for the performance of a contract</li>
                    <li>It is required by law</li>
                    <li>It is necessary to protect vital interests</li>
                  </ul>
                  <p>Sensitive personal data may include:</p>
                  <ul>
                    <li>Racial or ethnic origin</li>
                    <li>Religious or philosophical beliefs</li>
                    <li>Health information</li>
                    <li>Biometric data</li>
                    <li>Political opinions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: How We Collect Information */}
            <Card id="how-we-collect">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    3. How We Collect Information
                  </h2>
                  <p>We collect information through various methods:</p>
                  
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">3.1 Direct Collection</h3>
                  <ul>
                    <li>When you fill out forms on our website (contact forms, service inquiries, newsletter subscriptions)</li>
                    <li>When you communicate with us via email, phone, or other channels</li>
                    <li>When you register for an account or use our services</li>
                    <li>When you participate in surveys, contests, or promotional activities</li>
                    <li>When you make a purchase or enter into a contract with us</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">3.2 Automated Collection</h3>
                  <ul>
                    <li><strong className="text-primary">Cookies and Similar Technologies</strong>: We use cookies, web beacons, and similar tracking technologies to collect information about your browsing behavior</li>
                    <li><strong className="text-primary">Server Logs</strong>: Our servers automatically log information about your visit, including IP address, browser type, referring pages, and timestamps</li>
                    <li><strong className="text-primary">Analytics Tools</strong>: We use third-party analytics services to understand how visitors interact with our website</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">3.3 Third-Party Sources</h3>
                  <ul>
                    <li>Public databases and directories</li>
                    <li>Social media platforms (when you interact with us on social media)</li>
                    <li>Business partners and service providers</li>
                    <li>Credit reference agencies (where applicable)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Legal Basis for Processing */}
            <Card id="legal-basis">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    4. Legal Basis for Processing
                  </h2>
                  <p>Under the <strong className="text-primary">Kenya Data Protection Act, 2019</strong> and <strong className="text-primary">General Data Protection Regulation (GDPR)</strong>, we process your personal data based on the following legal grounds:</p>
                  
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">4.1 Consent</h3>
                  <p>We process your personal data when you have given clear consent for specific purposes, such as:</p>
                  <ul>
                    <li>Marketing communications</li>
                    <li>Newsletter subscriptions</li>
                    <li>Non-essential cookies</li>
                    <li>Participation in surveys or research</li>
                  </ul>
                  <p>You have the right to withdraw your consent at any time. Withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">4.2 Contract Performance</h3>
                  <p>We process personal data when it is necessary for:</p>
                  <ul>
                    <li>Performing a contract with you</li>
                    <li>Taking steps at your request before entering into a contract</li>
                    <li>Providing our services and fulfilling our obligations</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">4.3 Legal Obligation</h3>
                  <p>We process personal data to comply with legal obligations, including:</p>
                  <ul>
                    <li>Tax and accounting requirements</li>
                    <li>Regulatory compliance</li>
                    <li>Court orders and legal proceedings</li>
                    <li>Anti-money laundering and fraud prevention</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">4.4 Legitimate Interests</h3>
                  <p>We process personal data based on our legitimate interests, balanced against your rights and freedoms, including:</p>
                  <ul>
                    <li>Business operations and administration</li>
                    <li>Website security and fraud prevention</li>
                    <li>Improving our services and user experience</li>
                    <li>Direct marketing (where permitted by law)</li>
                    <li>Network and information security</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">4.5 Vital Interests</h3>
                  <p>We may process personal data to protect the vital interests of you or another natural person, particularly in emergency situations.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">4.6 Public Task</h3>
                  <p>Where applicable, we may process personal data in the public interest or in the exercise of official authority.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 5: How We Use Your Information */}
            <Card id="how-we-use">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <Lock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    5. How We Use Your Information
                  </h2>
                  <p>We use your personal information for the following purposes:</p>
                  
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">5.1 Service Delivery</h3>
                  <ul>
                    <li>Providing, maintaining, and improving our software solutions and services</li>
                    <li>Processing transactions and managing payments</li>
                    <li>Managing your account and customer relationship</li>
                    <li>Responding to your inquiries, requests, and support needs</li>
                    <li>Delivering technical support and customer service</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">5.2 Communication</h3>
                  <ul>
                    <li>Sending service-related communications (notices, updates, security alerts)</li>
                    <li>Responding to your communications and requests</li>
                    <li>Sending marketing communications (with your consent or where permitted by law)</li>
                    <li>Providing information about new products, services, and features</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">5.3 Business Operations</h3>
                  <ul>
                    <li>Managing our business operations and administration</li>
                    <li>Conducting market research and analysis</li>
                    <li>Developing new products and services</li>
                    <li>Analyzing usage patterns and trends</li>
                    <li>Improving website functionality and user experience</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">5.4 Legal and Compliance</h3>
                  <ul>
                    <li>Complying with legal obligations and regulatory requirements</li>
                    <li>Enforcing our terms of service and policies</li>
                    <li>Protecting our rights, property, and safety</li>
                    <li>Preventing fraud, abuse, and illegal activities</li>
                    <li>Responding to legal requests and court orders</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">5.5 Security and Safety</h3>
                  <ul>
                    <li>Detecting and preventing security threats</li>
                    <li>Protecting against unauthorized access and data breaches</li>
                    <li>Monitoring and analyzing security incidents</li>
                    <li>Maintaining the integrity and security of our systems</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 6: Data Sharing and Disclosure */}
            <Card id="data-sharing">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    6. Data Sharing and Disclosure
                  </h2>
                  <p>We do not sell your personal data. We may share your information in the following circumstances:</p>
                  
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">6.1 Service Providers</h3>
                  <p>We may share personal data with trusted third-party service providers who assist us in operating our business, including:</p>
                  <ul>
                    <li><strong className="text-primary">Cloud Service Providers</strong>: For hosting and data storage</li>
                    <li><strong className="text-primary">Payment Processors</strong>: For processing payments and transactions</li>
                    <li><strong className="text-primary">Analytics Providers</strong>: For website analytics and performance monitoring</li>
                    <li><strong className="text-primary">Email Service Providers</strong>: For sending communications</li>
                    <li><strong className="text-primary">Customer Support Tools</strong>: For managing customer inquiries</li>
                    <li><strong className="text-primary">Marketing Platforms</strong>: For marketing automation and campaigns</li>
                  </ul>
                  <p>All service providers are contractually obligated to protect your personal data and use it only for specified purposes.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">6.2 Business Transfers</h3>
                  <p>In the event of a merger, acquisition, reorganization, or sale of assets, your personal data may be transferred to the acquiring entity, subject to the same privacy protections.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">6.3 Legal Requirements</h3>
                  <p>We may disclose personal data when required by law or to:</p>
                  <ul>
                    <li>Comply with legal obligations and court orders</li>
                    <li>Respond to government requests and regulatory inquiries</li>
                    <li>Protect our rights, property, and safety</li>
                    <li>Prevent or investigate fraud, abuse, or illegal activities</li>
                    <li>Enforce our terms of service and policies</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">6.4 With Your Consent</h3>
                  <p>We may share your personal data with third parties when you have given explicit consent for such sharing.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">6.5 Anonymized Data</h3>
                  <p>We may share aggregated, anonymized, or de-identified data that cannot be used to identify you for research, analytics, and business purposes.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 7: Data Security */}
            <Card id="data-security">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    7. Data Security
                  </h2>
                  <p>We implement appropriate <strong className="text-primary">technical and organizational measures</strong> to protect your personal data against unauthorized access, alteration, disclosure, or destruction, in accordance with the <strong className="text-primary">Kenya Data Protection Act</strong> and international best practices.</p>
                  
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">7.1 Technical Safeguards</h3>
                  <ul>
                    <li><strong className="text-primary">Encryption</strong>: We use industry-standard encryption (SSL/TLS) for data in transit and encryption at rest for sensitive data</li>
                    <li><strong className="text-primary">Access Controls</strong>: We implement strict access controls and authentication mechanisms to limit access to personal data</li>
                    <li><strong className="text-primary">Network Security</strong>: We use firewalls, intrusion detection systems, and other network security measures</li>
                    <li><strong className="text-primary">Secure Infrastructure</strong>: Our systems are hosted on secure, monitored infrastructure with regular security updates</li>
                    <li><strong className="text-primary">Data Backup</strong>: We maintain regular backups of data with secure storage and recovery procedures</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">7.2 Organizational Safeguards</h3>
                  <ul>
                    <li><strong className="text-primary">Employee Training</strong>: Our staff receive regular training on data protection and privacy</li>
                    <li><strong className="text-primary">Confidentiality Agreements</strong>: All employees and contractors are bound by confidentiality obligations</li>
                    <li><strong className="text-primary">Data Protection Officer</strong>: We have designated personnel responsible for data protection compliance</li>
                    <li><strong className="text-primary">Incident Response</strong>: We have procedures in place to detect, respond to, and report data breaches</li>
                    <li><strong className="text-primary">Regular Audits</strong>: We conduct regular security audits and assessments</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">7.3 Data Breach Notification</h3>
                  <p>In the event of a <strong className="text-primary">personal data breach</strong> that is likely to result in a high risk to your rights and freedoms, we will:</p>
                  <ul>
                    <li>Notify the <strong className="text-primary">Office of the Data Protection Commissioner (ODPC)</strong> in Kenya within 72 hours (where feasible)</li>
                    <li>Notify affected individuals without undue delay</li>
                    <li>Provide clear information about the nature of the breach and measures taken</li>
                    <li>Comply with all applicable breach notification requirements under relevant data protection laws</li>
                  </ul>

                  <p className="mt-4 p-4 bg-muted rounded-lg">
                    <strong className="text-primary">Note</strong>: While we implement robust security measures, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, but we are committed to protecting your data to the best of our ability.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 8: Data Retention */}
            <Card id="data-retention">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    8. Data Retention
                  </h2>
                  <p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
                  
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">8.1 Retention Periods</h3>
                  <ul>
                    <li><strong className="text-primary">Active Customer Data</strong>: Retained for the duration of our business relationship and for a reasonable period thereafter (typically 7 years for accounting and legal purposes)</li>
                    <li><strong className="text-primary">Marketing Data</strong>: Retained until you withdraw consent or opt-out, or for a maximum of 3 years of inactivity</li>
                    <li><strong className="text-primary">Website Analytics Data</strong>: Retained for up to 26 months (as per standard analytics practices)</li>
                    <li><strong className="text-primary">Legal and Compliance Records</strong>: Retained as required by applicable laws (e.g., 7 years for tax records in Kenya)</li>
                    <li><strong className="text-primary">Support Communications</strong>: Retained for 3 years after the resolution of the support request</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">8.2 Deletion Criteria</h3>
                  <p>We will delete or anonymize your personal data when:</p>
                  <ul>
                    <li>The purpose for which it was collected has been fulfilled</li>
                    <li>The retention period has expired</li>
                    <li>You request deletion and we have no legal basis to retain it</li>
                    <li>It is no longer necessary for legal or business purposes</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">8.3 Exceptions</h3>
                  <p>We may retain certain personal data for longer periods when:</p>
                  <ul>
                    <li>Required by law or regulatory obligations</li>
                    <li>Necessary for legal claims or proceedings</li>
                    <li>Required for legitimate business interests (e.g., fraud prevention)</li>
                    <li>Data has been anonymized and cannot be used to identify you</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 9: Your Rights */}
            <Card id="your-rights">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    9. Your Rights Under Data Protection Laws
                  </h2>
                  <p>Under the <strong className="text-primary">Kenya Data Protection Act, 2019</strong>, <strong className="text-primary">General Data Protection Regulation (GDPR)</strong>, and other applicable data protection laws, you have the following rights:</p>
                  
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">9.1 Right of Access</h3>
                  <p>You have the right to obtain confirmation as to whether we process your personal data and to access your personal data, including:</p>
                  <ul>
                    <li>Copies of your personal data</li>
                    <li>Information about the purposes of processing</li>
                    <li>Categories of personal data processed</li>
                    <li>Recipients or categories of recipients</li>
                    <li>Retention periods</li>
                    <li>Your rights regarding the data</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">9.2 Right to Rectification</h3>
                  <p>You have the right to request correction of inaccurate or incomplete personal data. We will update your information promptly upon verification.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">9.3 Right to Erasure ("Right to be Forgotten")</h3>
                  <p>You have the right to request deletion of your personal data when:</p>
                  <ul>
                    <li>The data is no longer necessary for the original purpose</li>
                    <li>You withdraw consent and there is no other legal basis</li>
                    <li>You object to processing and there are no overriding legitimate grounds</li>
                    <li>The data has been unlawfully processed</li>
                    <li>Deletion is required to comply with legal obligations</li>
                  </ul>
                  <p>Note: We may not be able to delete data if we have a legal obligation to retain it.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">9.4 Right to Restrict Processing</h3>
                  <p>You have the right to request restriction of processing when:</p>
                  <ul>
                    <li>You contest the accuracy of the data</li>
                    <li>Processing is unlawful, but you oppose erasure</li>
                    <li>We no longer need the data, but you require it for legal claims</li>
                    <li>You have objected to processing, pending verification</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">9.5 Right to Data Portability</h3>
                  <p>You have the right to receive your personal data in a structured, commonly used, and machine-readable format and to transmit that data to another controller, where technically feasible.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">9.6 Right to Object</h3>
                  <p>You have the right to object to processing of your personal data based on legitimate interests or for direct marketing purposes. We will stop processing unless we can demonstrate compelling legitimate grounds.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">9.7 Right to Withdraw Consent</h3>
                  <p>Where processing is based on consent, you have the right to withdraw consent at any time. Withdrawal does not affect the lawfulness of processing before withdrawal.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">9.8 Right to Lodge a Complaint</h3>
                  <p>You have the right to lodge a complaint with the <strong className="text-primary">Office of the Data Protection Commissioner (ODPC)</strong> in Kenya or your local data protection authority if you believe your rights have been violated.</p>
                  <p><strong className="text-primary">ODPC Contact Information:</strong></p>
                  <ul>
                    <li>Website: <a href="https://www.odpc.go.ke" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.odpc.go.ke</a></li>
                    <li>Email: info@odpc.go.ke</li>
                    <li>Phone: +254 20 490 6000</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">9.9 Exercising Your Rights</h3>
                  <p>To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below. We will respond to your request within <strong className="text-primary">30 days</strong> (or as required by applicable law).</p>
                  <p>We may require verification of your identity before processing your request to protect your privacy and security.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 10: Cookies */}
            <Card id="cookies">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    10. Cookies and Tracking Technologies
                  </h2>
                  <p>We use <strong className="text-primary">cookies</strong> and similar tracking technologies to collect and store information about your preferences and browsing behavior.</p>
                  
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">10.1 Types of Cookies</h3>
                  <ul>
                    <li><strong className="text-primary">Essential Cookies</strong>: Required for the website to function properly (e.g., authentication, security)</li>
                    <li><strong className="text-primary">Analytics Cookies</strong>: Help us understand how visitors use our website (e.g., Google Analytics)</li>
                    <li><strong className="text-primary">Functional Cookies</strong>: Remember your preferences and settings</li>
                    <li><strong className="text-primary">Marketing Cookies</strong>: Used to deliver relevant advertisements and track campaign effectiveness</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">10.2 Cookie Management</h3>
                  <p>You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.</p>
                  <p>For more information about our cookie practices, please refer to our Cookie Policy (if applicable) or contact us.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 11: International Transfers */}
            <Card id="international-transfers">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    11. International Data Transfers
                  </h2>
                  <p>Your personal data may be transferred to and processed in countries outside Kenya, including countries that may not have the same data protection laws.</p>
                  
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">11.1 Transfer Safeguards</h3>
                  <p>When transferring personal data internationally, we implement appropriate safeguards, including:</p>
                  <ul>
                    <li><strong className="text-primary">Standard Contractual Clauses (SCCs)</strong>: Approved by the European Commission and ODPC</li>
                    <li><strong className="text-primary">Adequacy Decisions</strong>: Transfers to countries with adequate data protection laws</li>
                    <li><strong className="text-primary">Binding Corporate Rules</strong>: For transfers within our corporate group</li>
                    <li><strong className="text-primary">Certification Schemes</strong>: Such as Privacy Shield (where applicable)</li>
                    <li><strong className="text-primary">Explicit Consent</strong>: Where you have provided informed consent</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">11.2 Your Rights</h3>
                  <p>You have the right to be informed about international transfers and to request information about the safeguards in place.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 12: Children's Privacy */}
            <Card id="children-privacy">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    12. Children's Privacy
                  </h2>
                  <p>Our services are not directed to individuals under the age of <strong className="text-primary">18</strong> (or the age of majority in your jurisdiction). We do not knowingly collect personal data from children without parental consent.</p>
                  <p>If we become aware that we have collected personal data from a child without parental consent, we will take steps to delete such information promptly.</p>
                  <p>If you are a parent or guardian and believe your child has provided us with personal data, please contact us immediately.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 13: Third-Party Links */}
            <Card id="third-party">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    13. Third-Party Links and Services
                  </h2>
                  <p>Our website may contain links to third-party websites, applications, or services. We are not responsible for the privacy practices or content of these third parties.</p>
                  <p>We encourage you to review the privacy policies of any third-party services you access through our website.</p>
                  <p>This Privacy Policy applies only to information collected by <strong className="text-primary">Nocturnal Software Solutions</strong>.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 14: Changes to Policy */}
            <Card id="changes">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    14. Changes to This Privacy Policy
                  </h2>
                  <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.</p>
                  <p>We will notify you of material changes by:</p>
                  <ul>
                    <li>Posting the updated policy on our website with a new "Last Updated" date</li>
                    <li>Sending an email notification (for significant changes)</li>
                    <li>Displaying a prominent notice on our website</li>
                  </ul>
                  <p>Your continued use of our services after the effective date of the updated policy constitutes acceptance of the changes.</p>
                  <p>We encourage you to review this Privacy Policy periodically to stay informed about how we protect your personal data.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 15: Contact Us */}
            <Card id="contact">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    15. Contact Us
                  </h2>
                  <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
                  
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p><strong className="text-primary">Nocturnal Software Solutions</strong></p>
                    <p><strong>Chief Technology Officer: Abdikhafar Issack</strong></p>
                    <p>Email: <a href="mailto:abdikhafarissack@gmail.com" className="text-primary hover:underline">abdikhafarissack@gmail.com</a></p>
                    <p>Phone: <a href="tel:+2547219448" className="text-primary hover:underline">+2547219448</a></p>
                    <p>Address: Nairobi, Kenya</p>
                  </div>

                  <p className="mt-4">We are committed to addressing your concerns and will respond to your inquiries within <strong className="text-primary">30 days</strong> (or as required by applicable law).</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Note */}
          <Card className="mt-4 sm:mt-6 lg:mt-8 border-primary/20">
            <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
              <div className="article-content text-center">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  This Privacy Policy is effective as of {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} and complies with the <strong className="text-primary">Kenya Data Protection Act, 2019</strong>, <strong className="text-primary">General Data Protection Regulation (GDPR)</strong>, and other applicable data protection laws.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  )
}

