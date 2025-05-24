import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink, Rocket, Users, Code, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InitiativeIndicator } from "@/components/initiative-indicator"

export const metadata: Metadata = {
  title: "Getting Started - Nexara Wiki",
  description: "Complete guide to start using the Nexara platform and its three core initiatives.",
}

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/wiki"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Wiki
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-amber-100 text-amber-800 border-amber-200">
              <Rocket className="h-3 w-3 mr-1" />
              Getting Started
            </Badge>
            <Badge variant="outline">5 min read</Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started with Nexara</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Welcome to Nexara! This guide will help you understand our platform and get started with our three core
            initiatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              {/* What is Nexara */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">N</span>
                    </div>
                    What is Nexara?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Nexara is a comprehensive platform founded by MJ Ahmad that brings together three powerful
                    initiatives designed to create positive impact in communities worldwide.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <InitiativeIndicator initiative="yunus" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Yunus Inspire</h4>
                        <p className="text-sm text-blue-700">Social Impact</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg">
                      <InitiativeIndicator initiative="trusted" />
                      <div>
                        <h4 className="font-semibold text-emerald-900">Trusted Ally</h4>
                        <p className="text-sm text-emerald-700">Community Support</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                      <InitiativeIndicator initiative="infinity" />
                      <div>
                        <h4 className="font-semibold text-purple-900">Infinity Nexus</h4>
                        <p className="text-sm text-purple-700">Technology Innovation</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Start Steps */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Quick Start Guide</CardTitle>
                  <CardDescription>Follow these steps to get started with Nexara</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Explore the Platform</h4>
                        <p className="text-gray-600 mb-3">
                          Start by browsing through our main sections and understanding how each initiative works.
                        </p>
                        <Link href="/" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                          Visit Homepage <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Choose Your Initiative</h4>
                        <p className="text-gray-600 mb-3">
                          Select the initiative that aligns with your interests and goals.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Link href="/yunus-inspire" className="text-blue-600 hover:text-blue-700">
                            Yunus Inspire
                          </Link>
                          <span className="text-gray-400">•</span>
                          <Link href="/trusted-ally" className="text-emerald-600 hover:text-emerald-700">
                            Trusted Ally
                          </Link>
                          <span className="text-gray-400">•</span>
                          <Link href="/infinity-nexus" className="text-purple-600 hover:text-purple-700">
                            Infinity Nexus
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Join the Community</h4>
                        <p className="text-gray-600 mb-3">
                          Connect with like-minded individuals and start contributing to our mission.
                        </p>
                        <Link
                          href="/contributing"
                          className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                        >
                          Learn How to Contribute <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Start Building</h4>
                        <p className="text-gray-600 mb-3">
                          Use our tools, APIs, and resources to create meaningful solutions.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Link href="/api" className="text-blue-600 hover:text-blue-700">
                            API Docs
                          </Link>
                          <span className="text-gray-400">•</span>
                          <Link href="/tutorials" className="text-blue-600 hover:text-blue-700">
                            Tutorials
                          </Link>
                          <span className="text-gray-400">•</span>
                          <Link href="/examples" className="text-blue-600 hover:text-blue-700">
                            Examples
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Features */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Open Source</h4>
                        <p className="text-gray-600 text-sm">Fully open source and community-driven development</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Comprehensive Documentation</h4>
                        <p className="text-gray-600 text-sm">Detailed guides, tutorials, and API references</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Active Community</h4>
                        <p className="text-gray-600 text-sm">Vibrant community of contributors and users</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Modern Technology</h4>
                        <p className="text-gray-600 text-sm">Built with cutting-edge technologies and best practices</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card>
                <CardHeader>
                  <CardTitle>What's Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Now that you understand the basics, here are some recommended next steps:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Link href="/wiki/installation" className="group">
                      <Card className="h-full hover:shadow-md transition-shadow">
                        <CardContent className="p-4 text-center">
                          <Code className="h-8 w-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                          <h4 className="font-semibold text-gray-900 mb-1">Installation Guide</h4>
                          <p className="text-sm text-gray-600">Set up Nexara locally</p>
                        </CardContent>
                      </Card>
                    </Link>
                    <Link href="/wiki/contributing" className="group">
                      <Card className="h-full hover:shadow-md transition-shadow">
                        <CardContent className="p-4 text-center">
                          <Heart className="h-8 w-8 text-emerald-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                          <h4 className="font-semibold text-gray-900 mb-1">Contributing</h4>
                          <p className="text-sm text-gray-600">Join our community</p>
                        </CardContent>
                      </Card>
                    </Link>
                    <Link href="/tutorials" className="group">
                      <Card className="h-full hover:shadow-md transition-shadow">
                        <CardContent className="p-4 text-center">
                          <Users className="h-8 w-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                          <h4 className="font-semibold text-gray-900 mb-1">Tutorials</h4>
                          <p className="text-sm text-gray-600">Learn step by step</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">On This Page</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    <a
                      href="#what-is-nexara"
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      What is Nexara?
                    </a>
                    <a
                      href="#quick-start"
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Quick Start Guide
                    </a>
                    <a
                      href="#key-features"
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Key Features
                    </a>
                    <a href="#next-steps" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      What's Next?
                    </a>
                  </nav>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link
                      href="/wiki/installation"
                      className="block text-sm text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Installation Guide
                    </Link>
                    <Link
                      href="/wiki/api-reference"
                      className="block text-sm text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      API Reference
                    </Link>
                    <Link
                      href="/wiki/contributing"
                      className="block text-sm text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Contributing Guide
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Help */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Can't find what you're looking for?</p>
                  <div className="space-y-2">
                    <Link href="/contact" className="block text-sm text-blue-600 hover:text-blue-700 transition-colors">
                      Contact Support
                    </Link>
                    <Link href="/issues" className="block text-sm text-blue-600 hover:text-blue-700 transition-colors">
                      Report an Issue
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
