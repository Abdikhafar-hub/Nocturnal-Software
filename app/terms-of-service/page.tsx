import type { Metadata } from "next"
import PageLayout from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Scale, AlertCircle, Shield, Users, CreditCard, Ban } from "lucide-react"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nocturnalsoftwaresolutions.com"

export const metadata: Metadata = {
  title: "Terms of Service - Legal Terms and Conditions",
  description:
    "Nocturnal Software Solutions Terms of Service. Read our terms and conditions governing the use of our services, software solutions, and website.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "legal terms",
    "user agreement",
    "service agreement",
    "Nocturnal Software Solutions",
  ],
  openGraph: {
    title: "Terms of Service - Nocturnal Software Solutions",
    description:
      "Our terms of service outlining the legal terms and conditions for using our software solutions and services.",
    url: `${siteUrl}/terms-of-service`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/terms-of-service`,
  },
}

export default function TermsOfServicePage() {
  return (
    <PageLayout activeSection="terms-of-service">
      <div className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-4 sm:pb-8 lg:pb-12 px-3 sm:px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-4 sm:mb-6 lg:mb-8 text-center">
            <div className="flex justify-center mb-2 sm:mb-3 lg:mb-4">
              <Scale className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4 text-primary">Terms of Service</h1>
            <p className="text-muted-foreground text-xs sm:text-sm lg:text-lg">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {/* Introduction */}
          <Card className="mb-4 sm:mb-6 lg:mb-8 border-primary/20">
            <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
              <div className="article-content">
                <p className="text-sm sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4 leading-relaxed">
                  Welcome to <strong className="text-primary">Nocturnal Software Solutions</strong> ("<strong className="text-primary">Nocturnal</strong>", "<strong className="text-primary">we</strong>", "<strong className="text-primary">us</strong>", or "<strong className="text-primary">our</strong>"). These Terms of Service ("<strong className="text-primary">Terms</strong>") govern your access to and use of our website, software solutions, services, and related products (collectively, the "<strong className="text-primary">Services</strong>").
                </p>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base lg:text-base leading-relaxed">
                  Please read these Terms carefully before using our Services. By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use our Services.
                </p>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base lg:text-base leading-relaxed">
                  These Terms constitute a legally binding agreement between you and <strong className="text-primary">Nocturnal Software Solutions</strong>. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Table of Contents */}
          <Card className="mb-4 sm:mb-6 lg:mb-8">
            <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-primary flex items-center gap-1.5 sm:gap-2">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                Table of Contents
              </h2>
              <ol className="list-decimal list-inside space-y-1.5 sm:space-y-2 text-xs sm:text-sm lg:text-base text-muted-foreground">
                <li><a href="#acceptance" className="text-primary hover:underline">Acceptance of Terms</a></li>
                <li><a href="#definitions" className="text-primary hover:underline">Definitions</a></li>
                <li><a href="#eligibility" className="text-primary hover:underline">Eligibility and Account Registration</a></li>
                <li><a href="#services" className="text-primary hover:underline">Description of Services</a></li>
                <li><a href="#use-of-services" className="text-primary hover:underline">Use of Services</a></li>
                <li><a href="#user-accounts" className="text-primary hover:underline">User Accounts and Responsibilities</a></li>
                <li><a href="#intellectual-property" className="text-primary hover:underline">Intellectual Property Rights</a></li>
                <li><a href="#payments" className="text-primary hover:underline">Payments and Billing</a></li>
                <li><a href="#privacy" className="text-primary hover:underline">Privacy and Data Protection</a></li>
                <li><a href="#prohibited-activities" className="text-primary hover:underline">Prohibited Activities</a></li>
                <li><a href="#termination" className="text-primary hover:underline">Termination</a></li>
                <li><a href="#disclaimers" className="text-primary hover:underline">Disclaimers and Limitations of Liability</a></li>
                <li><a href="#indemnification" className="text-primary hover:underline">Indemnification</a></li>
                <li><a href="#dispute-resolution" className="text-primary hover:underline">Dispute Resolution</a></li>
                <li><a href="#governing-law" className="text-primary hover:underline">Governing Law and Jurisdiction</a></li>
                <li><a href="#changes" className="text-primary hover:underline">Changes to Terms</a></li>
                <li><a href="#miscellaneous" className="text-primary hover:underline">Miscellaneous Provisions</a></li>
                <li><a href="#contact" className="text-primary hover:underline">Contact Information</a></li>
              </ol>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Section 1: Acceptance */}
            <Card id="acceptance">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    1. Acceptance of Terms
                  </h2>
                  <p>By accessing, browsing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and all applicable laws and regulations.</p>
                  <p>If you do not agree with any part of these Terms, you must not use our Services. Your use of our Services constitutes your acceptance of these Terms and your agreement to comply with them.</p>
                  <p>These Terms apply to all users of our Services, including without limitation, users who are browsers, vendors, customers, merchants, and contributors of content.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Definitions */}
            <Card id="definitions">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    2. Definitions
                  </h2>
                  <ul className="space-y-2">
                    <li>
                      <strong className="text-primary">"Services"</strong> means all software solutions, applications, websites, platforms, tools, and related services provided by Nocturnal Software Solutions.
                    </li>
                    <li>
                      <strong className="text-primary">"User"</strong>, <strong className="text-primary">"You"</strong>, or <strong className="text-primary">"Your"</strong> refers to the individual or entity accessing or using our Services.
                    </li>
                    <li>
                      <strong className="text-primary">"Content"</strong> means all information, data, text, software, music, sound, photographs, graphics, video, messages, or other materials.
                    </li>
                    <li>
                      <strong className="text-primary">"User Content"</strong> means any Content that you submit, post, transmit, or make available through our Services.
                    </li>
                    <li>
                      <strong className="text-primary">"Intellectual Property"</strong> means all intellectual property rights, including but not limited to copyrights, trademarks, patents, trade secrets, and proprietary information.
                    </li>
                    <li>
                      <strong className="text-primary">"Account"</strong> means the account you create to access and use our Services.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Eligibility */}
            <Card id="eligibility">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    3. Eligibility and Account Registration
                  </h2>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">3.1 Age Requirement</h3>
                  <p>You must be at least <strong className="text-primary">18 years old</strong> (or the age of majority in your jurisdiction) to use our Services. By using our Services, you represent and warrant that you meet this age requirement.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">3.2 Account Registration</h3>
                  <p>To access certain features of our Services, you may be required to create an account. When creating an account, you agree to:</p>
                  <ul>
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Accept responsibility for all activities that occur under your account</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">3.3 Account Security</h3>
                  <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:</p>
                  <ul>
                    <li>Use a strong, unique password</li>
                    <li>Not share your account credentials with third parties</li>
                    <li>Log out of your account when using shared devices</li>
                    <li>Immediately notify us of any suspected unauthorized access</li>
                  </ul>
                  <p>We are not liable for any loss or damage arising from your failure to protect your account credentials.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Services */}
            <Card id="services">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    4. Description of Services
                  </h2>
                  <p>Nocturnal Software Solutions provides a range of software development, consulting, and technology services, including but not limited to:</p>
                  <ul>
                    <li>Custom software development and solutions</li>
                    <li>Web and mobile application development</li>
                    <li>Cloud computing and infrastructure services</li>
                    <li>Artificial intelligence and machine learning solutions</li>
                    <li>Cybersecurity services</li>
                    <li>Digital transformation consulting</li>
                    <li>Technical support and maintenance</li>
                    <li>Related professional services</li>
                  </ul>
                  <p>We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time, with or without notice. We do not guarantee that our Services will be available at all times or that they will be error-free.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 5: Use of Services */}
            <Card id="use-of-services">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    5. Use of Services
                  </h2>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">5.1 Permitted Use</h3>
                  <p>You may use our Services only for lawful purposes and in accordance with these Terms. You agree to use our Services:</p>
                  <ul>
                    <li>In compliance with all applicable laws and regulations</li>
                    <li>In a manner that does not infringe upon the rights of others</li>
                    <li>Without attempting to gain unauthorized access to our systems</li>
                    <li>Without interfering with or disrupting the Services</li>
                    <li>In accordance with any additional terms or guidelines we provide</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">5.2 License Grant</h3>
                  <p>Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for your personal or internal business purposes.</p>
                  <p>This license does not include the right to:</p>
                  <ul>
                    <li>Resell or redistribute our Services</li>
                    <li>Modify, adapt, or create derivative works</li>
                    <li>Reverse engineer, decompile, or disassemble our software</li>
                    <li>Remove or alter any proprietary notices</li>
                    <li>Use our Services for any illegal or unauthorized purpose</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 6: User Accounts */}
            <Card id="user-accounts">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    6. User Accounts and Responsibilities
                  </h2>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">6.1 User Content</h3>
                  <p>You retain ownership of any User Content you submit through our Services. However, by submitting User Content, you grant us a worldwide, royalty-free, non-exclusive, perpetual, irrevocable license to:</p>
                  <ul>
                    <li>Use, reproduce, modify, adapt, and publish your User Content</li>
                    <li>Display and distribute your User Content through our Services</li>
                    <li>Use your User Content for marketing and promotional purposes</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">6.2 Content Standards</h3>
                  <p>You agree that your User Content will not:</p>
                  <ul>
                    <li>Violate any laws or regulations</li>
                    <li>Infringe upon any intellectual property rights</li>
                    <li>Contain defamatory, libelous, or offensive material</li>
                    <li>Include malicious code, viruses, or harmful software</li>
                    <li>Violate any person's privacy or publicity rights</li>
                    <li>Contain false or misleading information</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">6.3 Content Monitoring</h3>
                  <p>We reserve the right, but are not obligated, to monitor, review, edit, or remove User Content at our sole discretion. We may remove any User Content that violates these Terms or is otherwise objectionable.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 7: Intellectual Property */}
            <Card id="intellectual-property">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    7. Intellectual Property Rights
                  </h2>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">7.1 Our Intellectual Property</h3>
                  <p>All content, features, functionality, and intellectual property of our Services, including but not limited to:</p>
                  <ul>
                    <li>Software, code, and applications</li>
                    <li>Text, graphics, logos, icons, and images</li>
                    <li>Audio, video, and multimedia content</li>
                    <li>Trademarks, service marks, and trade names</li>
                    <li>Designs, layouts, and user interfaces</li>
                  </ul>
                  <p>are owned by Nocturnal Software Solutions or our licensors and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">7.2 Trademarks</h3>
                  <p>The "<strong className="text-primary">Nocturnal Software Solutions</strong>" name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Nocturnal Software Solutions or our affiliates. You may not use such marks without our prior written permission.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">7.3 Respect for Intellectual Property</h3>
                  <p>You agree not to:</p>
                  <ul>
                    <li>Copy, reproduce, or distribute our intellectual property without authorization</li>
                    <li>Create derivative works based on our Services</li>
                    <li>Remove or alter any copyright, trademark, or proprietary notices</li>
                    <li>Use our intellectual property in any manner that suggests endorsement or affiliation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 8: Payments */}
            <Card id="payments">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    8. Payments and Billing
                  </h2>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">8.1 Payment Terms</h3>
                  <p>If you purchase Services from us, you agree to pay all fees and charges associated with your purchase in accordance with the pricing and payment terms provided at the time of purchase.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">8.2 Pricing</h3>
                  <p>All prices are stated in the currency specified at the time of purchase. We reserve the right to change our prices at any time, but price changes will not affect orders already placed.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">8.3 Payment Methods</h3>
                  <p>We accept various payment methods, including credit cards, debit cards, bank transfers, and other payment methods as specified. You agree to provide accurate payment information and authorize us to charge your payment method for all fees.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">8.4 Billing and Invoicing</h3>
                  <p>For subscription-based Services, you will be billed in advance on a recurring basis (monthly, quarterly, or annually) as specified in your subscription plan. You are responsible for all charges incurred under your account.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">8.5 Refunds</h3>
                  <p>Refund policies vary depending on the type of Service purchased. Please refer to the specific refund policy provided at the time of purchase or contact us for more information.</p>
                  <p>Generally, we do not provide refunds for:</p>
                  <ul>
                    <li>Digital products or services that have been delivered</li>
                    <li>Custom development work that has been completed</li>
                    <li>Services that have been used or consumed</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">8.6 Late Payments</h3>
                  <p>If payment is not received by the due date, we may:</p>
                  <ul>
                    <li>Suspend or terminate your access to Services</li>
                    <li>Charge late fees or interest as permitted by law</li>
                    <li>Engage collection agencies or take legal action</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">8.7 Taxes</h3>
                  <p>You are responsible for paying all applicable taxes, duties, and fees associated with your purchase, unless otherwise specified. Prices do not include taxes unless explicitly stated.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 9: Privacy */}
            <Card id="privacy">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    9. Privacy and Data Protection
                  </h2>
                  <p>Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>, which is incorporated into these Terms by reference.</p>
                  <p>By using our Services, you consent to the collection and use of your information as described in our Privacy Policy, which complies with the <strong className="text-primary">Kenya Data Protection Act, 2019</strong>, <strong className="text-primary">GDPR</strong>, and other applicable data protection laws.</p>
                  <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or destruction.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 10: Prohibited Activities */}
            <Card id="prohibited-activities">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <Ban className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    10. Prohibited Activities
                  </h2>
                  <p>You agree not to engage in any of the following prohibited activities:</p>
                  
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">10.1 Illegal Activities</h3>
                  <ul>
                    <li>Using our Services for any illegal purpose or in violation of any laws</li>
                    <li>Transmitting or storing illegal content</li>
                    <li>Engaging in fraud, money laundering, or other financial crimes</li>
                    <li>Violating export control laws or sanctions</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">10.2 Security Violations</h3>
                  <ul>
                    <li>Attempting to gain unauthorized access to our systems or networks</li>
                    <li>Interfering with or disrupting the security or functionality of our Services</li>
                    <li>Introducing viruses, malware, or other harmful code</li>
                    <li>Conducting security testing or penetration testing without authorization</li>
                    <li>Attempting to bypass or circumvent security measures</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">10.3 Abuse and Harassment</h3>
                  <ul>
                    <li>Harassing, threatening, or abusing other users</li>
                    <li>Transmitting spam, unsolicited messages, or bulk communications</li>
                    <li>Impersonating others or providing false information</li>
                    <li>Collecting or harvesting information about other users</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">10.4 Intellectual Property Violations</h3>
                  <ul>
                    <li>Infringing upon intellectual property rights</li>
                    <li>Copying, modifying, or distributing our proprietary content</li>
                    <li>Reverse engineering or decompiling our software</li>
                    <li>Using our trademarks or branding without permission</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">10.5 Service Abuse</h3>
                  <ul>
                    <li>Overloading or overwhelming our systems</li>
                    <li>Using automated systems to access our Services (scraping, crawling, etc.) without permission</li>
                    <li>Reselling or redistributing our Services without authorization</li>
                    <li>Using our Services to compete with us</li>
                  </ul>

                  <p className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <strong className="text-destructive">Violation of these prohibitions may result in immediate termination of your account and legal action.</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 11: Termination */}
            <Card id="termination">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    11. Termination
                  </h2>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">11.1 Termination by You</h3>
                  <p>You may terminate your account and stop using our Services at any time by contacting us or using the account deletion features (if available).</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">11.2 Termination by Us</h3>
                  <p>We may suspend or terminate your access to our Services immediately, without prior notice, if:</p>
                  <ul>
                    <li>You violate these Terms or our policies</li>
                    <li>You engage in fraudulent, illegal, or harmful activities</li>
                    <li>You fail to pay fees when due</li>
                    <li>We are required to do so by law</li>
                    <li>We discontinue the Services</li>
                    <li>For any other reason at our sole discretion</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">11.3 Effect of Termination</h3>
                  <p>Upon termination:</p>
                  <ul>
                    <li>Your right to access and use our Services will immediately cease</li>
                    <li>We may delete your account and User Content</li>
                    <li>You remain responsible for all fees and charges incurred before termination</li>
                    <li>Provisions that by their nature should survive termination will remain in effect</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">11.4 Data Retention</h3>
                  <p>We may retain your information for a reasonable period after termination as required by law or for legitimate business purposes, in accordance with our Privacy Policy.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 12: Disclaimers */}
            <Card id="disclaimers">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    12. Disclaimers and Limitations of Liability
                  </h2>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">12.1 Service Availability</h3>
                  <p>We strive to provide reliable Services, but we do not guarantee that our Services will be:</p>
                  <ul>
                    <li>Available at all times or without interruption</li>
                    <li>Error-free or free from defects</li>
                    <li>Compatible with all devices or systems</li>
                    <li>Secure from unauthorized access or attacks</li>
                  </ul>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">12.2 Disclaimer of Warranties</h3>
                  <p>OUR SERVICES ARE PROVIDED "<strong className="text-primary">AS IS</strong>" AND "<strong className="text-primary">AS AVAILABLE</strong>" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</p>
                  <ul>
                    <li>IMPLIED WARRANTIES OF MERCHANTABILITY</li>
                    <li>FITNESS FOR A PARTICULAR PURPOSE</li>
                    <li>NON-INFRINGEMENT</li>
                    <li>ACCURACY, RELIABILITY, OR COMPLETENESS</li>
                  </ul>
                  <p>We disclaim all warranties to the maximum extent permitted by applicable law.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">12.3 Limitation of Liability</h3>
                  <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NOCTURNAL SOFTWARE SOLUTIONS SHALL NOT BE LIABLE FOR:</p>
                  <ul>
                    <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                    <li>LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES</li>
                    <li>DAMAGES RESULTING FROM USE OR INABILITY TO USE OUR SERVICES</li>
                    <li>DAMAGES RESULTING FROM UNAUTHORIZED ACCESS OR DATA BREACHES</li>
                    <li>DAMAGES RESULTING FROM THIRD-PARTY CONDUCT</li>
                  </ul>
                  <p>Our total liability for any claims arising from or related to our Services shall not exceed the amount you paid to us in the twelve (12) months preceding the claim, or one hundred dollars ($100), whichever is greater.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">12.4 Exclusions</h3>
                  <p>Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability. In such jurisdictions, our liability will be limited to the maximum extent permitted by law.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 13: Indemnification */}
            <Card id="indemnification">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    13. Indemnification
                  </h2>
                  <p>You agree to indemnify, defend, and hold harmless Nocturnal Software Solutions, its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to:</p>
                  <ul>
                    <li>Your use or misuse of our Services</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any rights of another party</li>
                    <li>Your User Content</li>
                    <li>Your breach of any applicable laws or regulations</li>
                  </ul>
                  <p>We reserve the right to assume exclusive defense and control of any matter subject to indemnification by you, and you agree to cooperate with our defense of such claims.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 14: Dispute Resolution */}
            <Card id="dispute-resolution">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <Scale className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    14. Dispute Resolution
                  </h2>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">14.1 Informal Resolution</h3>
                  <p>Before initiating formal dispute resolution proceedings, you agree to first contact us to attempt to resolve the dispute informally. We will make good faith efforts to resolve disputes within <strong className="text-primary">30 days</strong> of receiving your notice.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">14.2 Mediation</h3>
                  <p>If informal resolution is unsuccessful, disputes may be resolved through mediation in accordance with the rules of a recognized mediation service in Kenya, before proceeding to arbitration or litigation.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">14.3 Arbitration</h3>
                  <p>Any disputes that cannot be resolved through mediation shall be resolved through binding arbitration in accordance with the Arbitration Act of Kenya or other applicable arbitration rules. The arbitration shall be conducted in Nairobi, Kenya, in the English language.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">14.4 Class Action Waiver</h3>
                  <p>You agree that any disputes will be resolved on an individual basis and waive any right to participate in class actions, collective actions, or representative proceedings.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">14.5 Exceptions</h3>
                  <p>Notwithstanding the above, either party may seek injunctive relief in any court of competent jurisdiction to protect intellectual property rights or prevent irreparable harm.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 15: Governing Law */}
            <Card id="governing-law">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <Scale className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    15. Governing Law and Jurisdiction
                  </h2>
                  <p>These Terms shall be governed by and construed in accordance with the laws of <strong className="text-primary">Kenya</strong>, without regard to its conflict of law provisions.</p>
                  <p>Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the courts of <strong className="text-primary">Nairobi, Kenya</strong>, and you consent to the personal jurisdiction of such courts.</p>
                  <p>If you are located outside Kenya, you agree that you are responsible for compliance with local laws in your jurisdiction, and you acknowledge that our Services may not be available in all jurisdictions.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 16: Changes */}
            <Card id="changes">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    16. Changes to Terms
                  </h2>
                  <p>We reserve the right to modify these Terms at any time. We will notify you of material changes by:</p>
                  <ul>
                    <li>Posting the updated Terms on our website with a new "Last Updated" date</li>
                    <li>Sending an email notification to the address associated with your account</li>
                    <li>Displaying a prominent notice on our Services</li>
                  </ul>
                  <p>Your continued use of our Services after the effective date of the updated Terms constitutes your acceptance of the changes. If you do not agree to the modified Terms, you must stop using our Services.</p>
                  <p>We encourage you to review these Terms periodically to stay informed about any updates.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 17: Miscellaneous */}
            <Card id="miscellaneous">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    17. Miscellaneous Provisions
                  </h2>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">17.1 Entire Agreement</h3>
                  <p>These Terms, together with our Privacy Policy and any other legal notices published by us, constitute the entire agreement between you and Nocturnal Software Solutions regarding the use of our Services.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">17.2 Severability</h3>
                  <p>If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect, and the invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">17.3 Waiver</h3>
                  <p>Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by us.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">17.4 Assignment</h3>
                  <p>You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms or any rights hereunder without restriction.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">17.5 Force Majeure</h3>
                  <p>We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to natural disasters, war, terrorism, labor disputes, government actions, or failures of third-party services.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">17.6 Relationship</h3>
                  <p>These Terms do not create a partnership, joint venture, employment, or agency relationship between you and Nocturnal Software Solutions.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">17.7 Notices</h3>
                  <p>All notices and communications under these Terms shall be in writing and delivered to the contact information provided in the "Contact Information" section below.</p>

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">17.8 Language</h3>
                  <p>These Terms are written in English. Any translations are provided for convenience only, and in case of conflict, the English version shall prevail.</p>
                </div>
              </CardContent>
            </Card>

            {/* Section 18: Contact */}
            <Card id="contact">
              <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
                <div className="article-content">
                  <h2 className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    18. Contact Information
                  </h2>
                  <p>If you have any questions, concerns, or requests regarding these Terms, please contact us:</p>
                  
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p><strong className="text-primary">Nocturnal Software Solutions</strong></p>
                    <p><strong>Contact: Abdikhafar Issack</strong></p>
                    <p>Email: <a href="mailto:abdikhafarissack@gmail.com" className="text-primary hover:underline">abdikhafarissack@gmail.com</a></p>
                    <p>Phone: <a href="tel:+2547219448" className="text-primary hover:underline">+2547219448</a></p>
                    <p>Address: Nairobi, Kenya</p>
                  </div>

                  <p className="mt-4">We will respond to your inquiries within a reasonable timeframe.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Note */}
          <Card className="mt-4 sm:mt-6 lg:mt-8 border-primary/20">
            <CardContent className="pt-3 sm:pt-4 lg:pt-6 px-3 sm:px-4 lg:px-6">
              <div className="article-content text-center">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  These Terms of Service are effective as of {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} and are governed by the laws of Kenya.
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                  By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  )
}

