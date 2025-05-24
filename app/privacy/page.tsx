import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Mail, Calendar, FileText, Eye, Lock, Users, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Nexara",
  description:
    "Learn how Nexara protects your privacy and handles your personal data across our platform and initiatives.",
  keywords: "privacy policy, data protection, GDPR, personal data, Nexara",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how Nexara collects, uses, and protects your personal
            information.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Last updated: January 2025</span>
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
                <Link href="#information-collection" className="text-blue-600 hover:text-blue-800 transition-colors">
                  1. Information We Collect
                </Link>
                <Link href="#information-use" className="text-blue-600 hover:text-blue-800 transition-colors">
                  2. How We Use Information
                </Link>
                <Link href="#information-sharing" className="text-blue-600 hover:text-blue-800 transition-colors">
                  3. Information Sharing
                </Link>
                <Link href="#data-security" className="text-blue-600 hover:text-blue-800 transition-colors">
                  4. Data Security
                </Link>
                <Link href="#your-rights" className="text-blue-600 hover:text-blue-800 transition-colors">
                  5. Your Rights
                </Link>
                <Link href="#cookies" className="text-blue-600 hover:text-blue-800 transition-colors">
                  6. Cookies & Tracking
                </Link>
                <Link href="#children" className="text-blue-600 hover:text-blue-800 transition-colors">
                  7. Children's Privacy
                </Link>
                <Link href="#contact" className="text-blue-600 hover:text-blue-800 transition-colors">
                  8. Contact Us
                </Link>
              </div>
            </div>

            {/* Sections */}
            <section id="information-collection" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                  <li>Name, email address, and contact information when you register</li>
                  <li>Profile information for Yunus Inspire, Trusted Ally, and Infinity Nexus initiatives</li>
                  <li>Payment information for premium services (processed securely)</li>
                  <li>Communication preferences and feedback</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">Usage Information</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                  <li>Pages visited, features used, and time spent on our platform</li>
                  <li>Device information, browser type, and operating system</li>
                  <li>IP address and general location information</li>
                  <li>Interaction with our initiatives and community features</li>
                </ul>
              </div>
            </section>

            <section id="information-use" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">2. How We Use Information</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Provide and improve our platform services</li>
                  <li>Facilitate participation in Yunus Inspire, Trusted Ally, and Infinity Nexus initiatives</li>
                  <li>Send important updates and communications</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                  <li>Prevent fraud and ensure platform security</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section id="information-sharing" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">3. Information Sharing</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 mb-4">
                  We do not sell your personal information. We may share information in these limited circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>With trusted service providers who assist our operations</li>
                  <li>In case of business transfer or merger</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>
              </div>
            </section>

            <section id="data-security" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">4. Data Security</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 mb-4">We implement industry-standard security measures:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication systems</li>
                  <li>Secure data centers and backup systems</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>
            </section>

            <section id="your-rights" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">5. Your Rights</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Delete your account and data</li>
                  <li>Export your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Object to certain data processing</li>
                </ul>
              </div>
            </section>

            <section id="contact" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">6. Contact Us</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">For privacy-related questions or requests, contact us:</p>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Email:</strong> privacy@nexara.com
                  </p>
                  <p>
                    <strong>Privacy Officer:</strong> MJ Ahmad
                  </p>
                  <p>
                    <strong>Response Time:</strong> Within 30 days
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              ← Back to Home
            </Link>
            <div className="flex gap-4">
              <Link href="/terms" className="text-gray-600 hover:text-gray-800 transition-colors">
                Terms of Service
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
