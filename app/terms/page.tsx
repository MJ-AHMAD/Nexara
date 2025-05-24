import type { Metadata } from "next"
import Link from "next/link"
import { FileText, Mail, Calendar, Shield, Users, AlertTriangle, Scale, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | Nexara",
  description: "Read the terms and conditions for using Nexara platform and participating in our initiatives.",
  keywords: "terms of service, user agreement, legal terms, Nexara platform",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
            <FileText className="h-8 w-8 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These terms govern your use of the Nexara platform and participation in our initiatives.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Effective: January 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              <span>Version 2.1</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="#acceptance" className="text-emerald-600 hover:text-emerald-800 transition-colors">
                  1. Acceptance of Terms
                </Link>
                <Link href="#services" className="text-emerald-600 hover:text-emerald-800 transition-colors">
                  2. Our Services
                </Link>
                <Link href="#user-accounts" className="text-emerald-600 hover:text-emerald-800 transition-colors">
                  3. User Accounts
                </Link>
                <Link href="#acceptable-use" className="text-emerald-600 hover:text-emerald-800 transition-colors">
                  4. Acceptable Use
                </Link>
                <Link
                  href="#intellectual-property"
                  className="text-emerald-600 hover:text-emerald-800 transition-colors"
                >
                  5. Intellectual Property
                </Link>
                <Link href="#liability" className="text-emerald-600 hover:text-emerald-800 transition-colors">
                  6. Limitation of Liability
                </Link>
                <Link href="#termination" className="text-emerald-600 hover:text-emerald-800 transition-colors">
                  7. Termination
                </Link>
                <Link href="#governing-law" className="text-emerald-600 hover:text-emerald-800 transition-colors">
                  8. Governing Law
                </Link>
              </div>
            </div>

            {/* Sections */}
            <section id="acceptance" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 mb-4">
                  By accessing or using the Nexara platform, you agree to be bound by these Terms of Service and all
                  applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from
                  using or accessing this platform.
                </p>
                <p className="text-gray-600">
                  These terms apply to all users of the platform, including participants in Yunus Inspire, Trusted Ally,
                  and Infinity Nexus initiatives.
                </p>
              </div>
            </section>

            <section id="services" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">2. Our Services</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 mb-4">Nexara provides:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    <strong>Yunus Inspire:</strong> Social impact and microfinance initiatives
                  </li>
                  <li>
                    <strong>Trusted Ally:</strong> Community building and support systems
                  </li>
                  <li>
                    <strong>Infinity Nexus:</strong> Technology and innovation projects
                  </li>
                  <li>Documentation, tutorials, and educational resources</li>
                  <li>Community forums and collaboration tools</li>
                  <li>API access and development tools</li>
                </ul>
              </div>
            </section>

            <section id="user-accounts" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">3. User Accounts</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Responsibility</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                  <li>You are responsible for maintaining the confidentiality of your account</li>
                  <li>You must provide accurate and complete information</li>
                  <li>You are responsible for all activities under your account</li>
                  <li>You must notify us immediately of any unauthorized use</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Termination</h3>
                <p className="text-gray-600">
                  We reserve the right to terminate accounts that violate these terms or engage in harmful activities.
                </p>
              </div>
            </section>

            <section id="acceptable-use" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">4. Acceptable Use</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Prohibited Activities</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                  <li>Violating any applicable laws or regulations</li>
                  <li>Harassing, threatening, or intimidating other users</li>
                  <li>Posting spam, malware, or malicious content</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Interfering with the platform's operation</li>
                  <li>Impersonating others or providing false information</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">Community Standards</h3>
                <p className="text-gray-600">
                  We expect all users to maintain respectful and constructive interactions that align with our mission
                  of empowering communities.
                </p>
              </div>
            </section>

            <section id="intellectual-property" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="h-6 w-6 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-900">5. Intellectual Property</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Our Content</h3>
                <p className="text-gray-600 mb-4">
                  The Nexara platform, including its design, features, and content, is protected by copyright,
                  trademark, and other intellectual property laws.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">User Content</h3>
                <p className="text-gray-600 mb-4">
                  You retain ownership of content you create, but grant us a license to use, display, and distribute it
                  on our platform.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">Open Source</h3>
                <p className="text-gray-600">
                  Certain components of our platform are open source and governed by their respective licenses.
                </p>
              </div>
            </section>

            <section id="liability" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">6. Limitation of Liability</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 mb-4">
                  Nexara is provided "as is" without warranties of any kind. We are not liable for any indirect,
                  incidental, or consequential damages arising from your use of the platform.
                </p>
                <p className="text-gray-600">
                  Our total liability shall not exceed the amount you paid for our services in the past 12 months.
                </p>
              </div>
            </section>

            <section id="contact" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">7. Contact Information</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">For questions about these terms, contact us:</p>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Email:</strong> legal@nexara.com
                  </p>
                  <p>
                    <strong>Legal Team:</strong> MJ Ahmad
                  </p>
                  <p>
                    <strong>Address:</strong> Nexara Legal Department
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-800 transition-colors"
            >
              ← Back to Home
            </Link>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-gray-600 hover:text-gray-800 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
