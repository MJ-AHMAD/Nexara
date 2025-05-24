import type { Metadata } from "next"
import Link from "next/link"
import { Map, Home, Rocket, BookOpen, Users, Wrench, LifeBuoy, Scale, Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Sitemap | Nexara",
  description: "Complete sitemap of all pages and sections available on the Nexara platform.",
  keywords: "sitemap, navigation, pages, Nexara platform, site structure",
}

export default function SitemapPage() {
  const siteStructure = [
    {
      title: "Main Pages",
      icon: Home,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      pages: [
        { name: "Home", url: "/", description: "Main landing page with platform overview" },
        { name: "About", url: "/about", description: "Learn about Nexara and our mission" },
        { name: "My Journey", url: "/my-journey", description: "MJ Ahmad's personal journey and vision" },
        { name: "Vision Timeline", url: "/vision-timeline", description: "Timeline of Nexara's development" },
        { name: "Overview", url: "/overview", description: "Comprehensive platform overview" },
        { name: "Style Guide", url: "/style-guide", description: "Design and branding guidelines" },
        { name: "Brand Guidelines", url: "/brand-guidelines", description: "Complete brand usage guidelines" },
        { name: "Brand Assets", url: "/brand-assets", description: "Downloadable brand assets and templates" },
      ],
    },
    {
      title: "Initiatives",
      icon: Rocket,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
      pages: [
        { name: "Yunus Inspire", url: "/yunus-inspire", description: "Social impact and microfinance initiatives" },
        { name: "Trusted Ally", url: "/trusted-ally", description: "Community building and support systems" },
        { name: "Infinity Nexus", url: "/infinity-nexus", description: "Technology and innovation projects" },
        {
          name: "Initiative Relationship",
          url: "/initiative-relationship",
          description: "How our initiatives connect and work together",
        },
        { name: "Yunus Legacy", url: "/yunus-legacy", description: "Dr. Muhammad Yunus's impact and legacy" },
        { name: "Mental Strength", url: "/mental-strength", description: "Mental health and resilience resources" },
      ],
    },
    {
      title: "Resources",
      icon: BookOpen,
      color: "text-amber-600",
      bgColor: "bg-amber-100",
      pages: [
        { name: "Documentation", url: "/docs", description: "Comprehensive platform documentation" },
        { name: "API Reference", url: "/api", description: "Complete API documentation and examples" },
        { name: "Tutorials", url: "/tutorials", description: "Step-by-step learning guides" },
        { name: "Examples", url: "/examples", description: "Real-world implementation examples" },
        { name: "Wiki", url: "/wiki", description: "Community knowledge base" },
        { name: "Getting Started", url: "/docs/getting-started", description: "Quick start guide for new users" },
      ],
    },
    {
      title: "Community",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      pages: [
        { name: "Code of Conduct", url: "/code-of-conduct", description: "Community guidelines and standards" },
        { name: "Contributing", url: "/contributing", description: "How to contribute to Nexara" },
        { name: "Governance", url: "/governance", description: "Project governance and decision-making" },
        {
          name: "Community Guidelines",
          url: "/community-guidelines",
          description: "Detailed community participation rules",
        },
        { name: "Events", url: "/events", description: "Upcoming community events and meetups" },
        { name: "Roadmap", url: "/roadmap", description: "Platform development roadmap" },
        { name: "Changelog", url: "/changelog", description: "Recent updates and changes" },
      ],
    },
    {
      title: "Tools & Features",
      icon: Wrench,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
      pages: [
        { name: "JSON Structure", url: "/json-structure", description: "JSON data structure tools" },
        { name: "Markdown Structure", url: "/markdown-structure", description: "Markdown editing and preview" },
        { name: "Feedback System", url: "/feedback-system", description: "User feedback and rating system" },
        { name: "Wellness Dashboard", url: "/wellness-dashboard", description: "Personal wellness tracking" },
        { name: "Tracking System", url: "/tracking-system", description: "Project and task tracking" },
        {
          name: "Meeting Preparation",
          url: "/meeting-preparation",
          description: "Meeting planning and preparation tools",
        },
        { name: "Project Focus", url: "/project-focus", description: "Project management and focus tools" },
        { name: "Future Technology", url: "/future-technology", description: "Emerging technology showcase" },
      ],
    },
    {
      title: "Support",
      icon: LifeBuoy,
      color: "text-rose-600",
      bgColor: "bg-rose-100",
      pages: [
        { name: "FAQ", url: "/faq", description: "Frequently asked questions" },
        { name: "Contact", url: "/contact", description: "Get in touch with our team" },
        { name: "Issues", url: "/issues", description: "Report bugs and technical issues" },
        { name: "Security", url: "/security", description: "Security policies and reporting" },
        { name: "Support", url: "/support", description: "General support and help resources" },
      ],
    },
    {
      title: "Legal",
      icon: Scale,
      color: "text-gray-600",
      bgColor: "bg-gray-100",
      pages: [
        { name: "Privacy Policy", url: "/privacy", description: "How we handle your personal data" },
        { name: "Terms of Service", url: "/terms", description: "Terms and conditions for platform use" },
        { name: "Sitemap", url: "/sitemap", description: "Complete site navigation structure" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
            <Map className="h-8 w-8 text-gray-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete navigation structure of the Nexara platform. Find any page or resource quickly and easily.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search pages..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Site Structure */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {siteStructure.map((section, index) => {
              const IconComponent = section.icon
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 ${section.bgColor} rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`h-6 w-6 ${section.color}`} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                      <p className="text-sm text-gray-500">{section.pages.length} pages</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {section.pages.map((page, pageIndex) => (
                      <div
                        key={pageIndex}
                        className="border-l-2 border-gray-100 pl-4 hover:border-blue-300 transition-colors"
                      >
                        <Link href={page.url} className={`block ${section.color} hover:underline font-medium`}>
                          {page.name}
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Statistics */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Platform Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600">
                    {siteStructure.reduce((total, section) => total + section.pages.length, 0)}
                  </div>
                  <div className="text-sm text-gray-600">Total Pages</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600">3</div>
                  <div className="text-sm text-gray-600">Core Initiatives</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">{siteStructure.length}</div>
                  <div className="text-sm text-gray-600">Main Sections</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600">6</div>
                  <div className="text-sm text-gray-600">Resource Types</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors">
              ← Back to Home
            </Link>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-gray-600 hover:text-gray-800 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-gray-800 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
