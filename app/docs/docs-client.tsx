"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Search,
  FileText,
  Code,
  Rocket,
  Users,
  Shield,
  Settings,
  Globe,
  Zap,
  ArrowRight,
  Clock,
  Star,
  ExternalLink,
  ChevronRight,
  BookMarked,
  Lightbulb,
  Target,
} from "lucide-react"
import Link from "next/link"

export default function DocsClient() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const documentationSections = [
    {
      id: "getting-started",
      title: "Getting Started",
      description: "Quick start guides and basic setup instructions",
      icon: Rocket,
      color: "blue",
      articles: 8,
      lastUpdated: "2024-01-15",
      featured: true,
    },
    {
      id: "platform-overview",
      title: "Platform Overview",
      description: "Understanding Nexara and its core initiatives",
      icon: Globe,
      color: "emerald",
      articles: 12,
      lastUpdated: "2024-01-14",
      featured: true,
    },
    {
      id: "api-reference",
      title: "API Reference",
      description: "Complete API documentation and endpoints",
      icon: Code,
      color: "purple",
      articles: 25,
      lastUpdated: "2024-01-13",
      featured: false,
    },
    {
      id: "initiatives",
      title: "Initiatives Guide",
      description: "Yunus Inspire, Trusted Ally, and Infinity Nexus",
      icon: Target,
      color: "amber",
      articles: 15,
      lastUpdated: "2024-01-12",
      featured: true,
    },
    {
      id: "components",
      title: "Components",
      description: "UI components and implementation guides",
      icon: Settings,
      color: "rose",
      articles: 18,
      lastUpdated: "2024-01-11",
      featured: false,
    },
    {
      id: "deployment",
      title: "Deployment",
      description: "Deploy and configure your Nexara applications",
      icon: Zap,
      color: "indigo",
      articles: 10,
      lastUpdated: "2024-01-10",
      featured: false,
    },
    {
      id: "community",
      title: "Community",
      description: "Contributing guidelines and community resources",
      icon: Users,
      color: "green",
      articles: 7,
      lastUpdated: "2024-01-09",
      featured: false,
    },
    {
      id: "security",
      title: "Security",
      description: "Security best practices and guidelines",
      icon: Shield,
      color: "red",
      articles: 6,
      lastUpdated: "2024-01-08",
      featured: false,
    },
  ]

  const quickStartGuides = [
    {
      title: "5-Minute Quick Start",
      description: "Get up and running with Nexara in just 5 minutes",
      duration: "5 min",
      difficulty: "Beginner",
      link: "/docs/quick-start",
    },
    {
      title: "Platform Setup Guide",
      description: "Complete setup and configuration walkthrough",
      duration: "15 min",
      difficulty: "Intermediate",
      link: "/docs/platform-setup",
    },
    {
      title: "First Project Tutorial",
      description: "Create your first project using Nexara initiatives",
      duration: "20 min",
      difficulty: "Beginner",
      link: "/docs/first-project",
    },
  ]

  const popularArticles = [
    {
      title: "Understanding Nexara Initiatives",
      category: "Platform Overview",
      views: "12.5k",
      rating: 4.9,
      link: "/docs/nexara-initiatives",
    },
    {
      title: "API Authentication Guide",
      category: "API Reference",
      views: "8.2k",
      rating: 4.8,
      link: "/docs/api-auth",
    },
    {
      title: "Component Library Usage",
      category: "Components",
      views: "6.7k",
      rating: 4.7,
      link: "/docs/component-library",
    },
    {
      title: "Deployment Best Practices",
      category: "Deployment",
      views: "5.9k",
      rating: 4.8,
      link: "/docs/deployment-practices",
    },
  ]

  const filteredSections = documentationSections.filter((section) => {
    const matchesSearch =
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || section.id === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "text-blue-600 bg-blue-100",
      emerald: "text-emerald-600 bg-emerald-100",
      purple: "text-purple-600 bg-purple-100",
      amber: "text-amber-600 bg-amber-100",
      rose: "text-rose-600 bg-rose-100",
      indigo: "text-indigo-600 bg-indigo-100",
      green: "text-green-600 bg-green-100",
      red: "text-red-600 bg-red-100",
    }
    return colorMap[color as keyof typeof colorMap] || "text-gray-600 bg-gray-100"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-6">
            <BookOpen className="h-8 w-8 text-slate-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nexara Documentation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive documentation for the Nexara platform. Learn how to build, deploy, and scale applications
            using Yunus Inspire, Trusted Ally, and Infinity Nexus initiatives.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>

        {/* Quick Start Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Quick Start Guides</h2>
            <Link
              href="/docs/getting-started"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2 font-medium"
            >
              View All Guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {quickStartGuides.map((guide, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      {guide.difficulty}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="h-3 w-3" />
                      {guide.duration}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={guide.link}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Start Guide <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Documentation Sections */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-9">
            <TabsTrigger value="all">All</TabsTrigger>
            {documentationSections.slice(0, 8).map((section) => (
              <TabsTrigger key={section.id} value={section.id} className="hidden lg:flex">
                {section.title.split(" ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSections.map((section) => {
                const IconComponent = section.icon
                return (
                  <Card key={section.id} className="group hover:shadow-lg transition-shadow relative">
                    {section.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-amber-100 text-amber-800 border-amber-200">Featured</Badge>
                      </div>
                    )}
                    <CardHeader>
                      <div
                        className={`w-12 h-12 rounded-lg ${getColorClasses(section.color)} flex items-center justify-center mb-4`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {section.title}
                      </CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{section.articles} articles</span>
                          <span>Updated {section.lastUpdated}</span>
                        </div>
                      </div>
                      <Link
                        href={`/docs/${section.id}`}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Explore Section <ChevronRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Popular Articles */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Popular Articles</h2>
            <Link
              href="/docs/popular"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2 font-medium"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2">
                        {article.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span>{article.rating}</span>
                        </div>
                        <span>{article.views} views</span>
                      </div>
                    </div>
                    <Link
                      href={article.link}
                      className="text-blue-600 hover:text-blue-800 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Additional Resources</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">API Reference</h3>
                <p className="text-sm text-gray-600 mb-4">Complete API documentation</p>
                <Link href="/api" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View API Docs
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookMarked className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold mb-2">Tutorials</h3>
                <p className="text-sm text-gray-600 mb-4">Step-by-step learning guides</p>
                <Link href="/tutorials" className="text-emerald-600 hover:text-emerald-800 text-sm font-medium">
                  Start Learning
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Examples</h3>
                <p className="text-sm text-gray-600 mb-4">Real-world implementations</p>
                <Link href="/examples" className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                  Browse Examples
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold mb-2">Wiki</h3>
                <p className="text-sm text-gray-600 mb-4">Community knowledge base</p>
                <Link href="/wiki" className="text-amber-600 hover:text-amber-800 text-sm font-medium">
                  Explore Wiki
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our community and support team are here to help you succeed with Nexara.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Users className="h-4 w-4" />
              Contact Support
            </Link>
            <Link
              href="/community-guidelines"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
