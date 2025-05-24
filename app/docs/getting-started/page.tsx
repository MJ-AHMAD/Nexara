import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, ExternalLink, Rocket, ArrowRight, Clock, Users, Zap, Target } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Getting Started - Nexara Documentation",
  description: "Quick start guide to get up and running with the Nexara platform and its initiatives.",
}

export default function GettingStartedPage() {
  const steps = [
    {
      title: "Platform Overview",
      description: "Understand Nexara and its three core initiatives",
      duration: "5 min",
      completed: false,
    },
    {
      title: "Environment Setup",
      description: "Install and configure your development environment",
      duration: "10 min",
      completed: false,
    },
    {
      title: "First Project",
      description: "Create your first project using Nexara initiatives",
      duration: "15 min",
      completed: false,
    },
    {
      title: "Deploy & Share",
      description: "Deploy your project and share with the community",
      duration: "10 min",
      completed: false,
    },
  ]

  const initiatives = [
    {
      name: "Yunus Inspire",
      description: "Social impact and microfinance initiatives inspired by Dr. Muhammad Yunus",
      color: "blue",
      link: "/docs/yunus-inspire",
    },
    {
      name: "Trusted Ally",
      description: "Community building and support systems for collaborative growth",
      color: "emerald",
      link: "/docs/trusted-ally",
    },
    {
      name: "Infinity Nexus",
      description: "Technology and innovation projects for limitless possibilities",
      color: "purple",
      link: "/docs/infinity-nexus",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Rocket className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started with Nexara</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to Nexara! This guide will help you understand our platform and get you up and running with your
            first project in under 30 minutes.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-sm text-gray-600">Core Initiatives</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-emerald-600 mb-2">40+</div>
              <div className="text-sm text-gray-600">Components</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-sm text-gray-600">Documentation Pages</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Community Support</div>
            </CardContent>
          </Card>
        </div>

        {/* Getting Started Steps */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-500" />
              Your Learning Path
            </CardTitle>
            <CardDescription>Follow these steps to master the Nexara platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg border border-gray-200">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    {step.duration}
                  </div>
                  <Button variant="outline" size="sm">
                    Start
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Nexara Initiatives */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Explore Nexara Initiatives</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {initiative.name}
                  </CardTitle>
                  <CardDescription>{initiative.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={initiative.link}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-purple-500" />
                For Developers
              </CardTitle>
              <CardDescription>Technical resources and API documentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link
                href="/api"
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">API Reference</span>
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </Link>
              <Link
                href="/examples"
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">Code Examples</span>
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </Link>
              <Link
                href="/docs/components"
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">Component Library</span>
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-emerald-500" />
                For Community
              </CardTitle>
              <CardDescription>Community resources and contribution guides</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link
                href="/contributing"
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">Contributing Guide</span>
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </Link>
              <Link
                href="/community-guidelines"
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">Community Guidelines</span>
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </Link>
              <Link
                href="/wiki"
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">Community Wiki</span>
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              Ready to Build?
            </CardTitle>
            <CardDescription>Choose your next step based on your goals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/tutorials"
                className="p-4 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors text-center"
              >
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Start Learning</h3>
                <p className="text-sm text-gray-600">Follow our step-by-step tutorials</p>
              </Link>
              <Link
                href="/examples"
                className="p-4 rounded-lg border border-gray-200 hover:bg-emerald-50 hover:border-emerald-200 transition-colors text-center"
              >
                <Code className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Explore Examples</h3>
                <p className="text-sm text-gray-600">See real-world implementations</p>
              </Link>
              <Link
                href="/contact"
                className="p-4 rounded-lg border border-gray-200 hover:bg-purple-50 hover:border-purple-200 transition-colors text-center"
              >
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Get Support</h3>
                <p className="text-sm text-gray-600">Connect with our community</p>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
