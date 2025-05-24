"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Search,
  BookOpen,
  Code,
  Users,
  Settings,
  HelpCircle,
  Rocket,
  Shield,
  Heart,
  Calendar,
  ChevronRight,
  Star,
  Clock,
  User,
  Tag,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface WikiPage {
  id: string
  title: string
  description: string
  category: string
  lastUpdated: string
  author: string
  readTime: string
  tags: string[]
  featured?: boolean
  href: string
}

const wikiPages: WikiPage[] = [
  {
    id: "getting-started",
    title: "Getting Started with Nexara",
    description: "Complete guide to start using the Nexara platform and its three core initiatives.",
    category: "Basics",
    lastUpdated: "2025-01-24",
    author: "MJ Ahmad",
    readTime: "5 min",
    tags: ["beginner", "setup", "overview"],
    featured: true,
    href: "/wiki/getting-started",
  },
  {
    id: "installation",
    title: "Installation Guide",
    description: "Step-by-step instructions for installing and configuring Nexara locally.",
    category: "Setup",
    lastUpdated: "2025-01-24",
    author: "Development Team",
    readTime: "8 min",
    tags: ["installation", "setup", "development"],
    featured: true,
    href: "/wiki/installation",
  },
  {
    id: "yunus-inspire",
    title: "Yunus Inspire Initiative",
    description: "Learn about the social impact initiative inspired by Nobel laureate Muhammad Yunus.",
    category: "Initiatives",
    lastUpdated: "2025-01-24",
    author: "MJ Ahmad",
    readTime: "6 min",
    tags: ["yunus", "social-impact", "microfinance"],
    href: "/wiki/yunus-inspire",
  },
  {
    id: "trusted-ally",
    title: "Trusted Ally Initiative",
    description: "Discover how Trusted Ally builds community support and reliable partnerships.",
    category: "Initiatives",
    lastUpdated: "2025-01-24",
    author: "Community Team",
    readTime: "7 min",
    tags: ["trusted-ally", "community", "support"],
    href: "/wiki/trusted-ally",
  },
  {
    id: "infinity-nexus",
    title: "Infinity Nexus Initiative",
    description: "Explore the technology and innovation hub that drives future solutions.",
    category: "Initiatives",
    lastUpdated: "2025-01-24",
    author: "Tech Team",
    readTime: "9 min",
    tags: ["infinity-nexus", "technology", "innovation"],
    href: "/wiki/infinity-nexus",
  },
  {
    id: "api-reference",
    title: "API Reference",
    description: "Complete API documentation with endpoints, authentication, and examples.",
    category: "Development",
    lastUpdated: "2025-01-24",
    author: "API Team",
    readTime: "15 min",
    tags: ["api", "development", "reference"],
    href: "/wiki/api-reference",
  },
  {
    id: "components",
    title: "Component Library",
    description: "Documentation for all UI components and their usage patterns.",
    category: "Development",
    lastUpdated: "2025-01-24",
    author: "UI Team",
    readTime: "12 min",
    tags: ["components", "ui", "development"],
    href: "/wiki/components",
  },
  {
    id: "contributing",
    title: "Contributing Guide",
    description: "How to contribute to Nexara projects and become part of our community.",
    category: "Community",
    lastUpdated: "2025-01-24",
    author: "Community Team",
    readTime: "10 min",
    tags: ["contributing", "community", "open-source"],
    href: "/wiki/contributing",
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Common issues and their solutions to help you resolve problems quickly.",
    category: "Support",
    lastUpdated: "2025-01-24",
    author: "Support Team",
    readTime: "8 min",
    tags: ["troubleshooting", "support", "help"],
    href: "/wiki/troubleshooting",
  },
  {
    id: "best-practices",
    title: "Best Practices",
    description: "Recommended practices for using Nexara effectively and efficiently.",
    category: "Guidelines",
    lastUpdated: "2025-01-24",
    author: "MJ Ahmad",
    readTime: "11 min",
    tags: ["best-practices", "guidelines", "optimization"],
    href: "/wiki/best-practices",
  },
  {
    id: "security",
    title: "Security Guidelines",
    description: "Security best practices and guidelines for safe usage of Nexara.",
    category: "Security",
    lastUpdated: "2025-01-24",
    author: "Security Team",
    readTime: "9 min",
    tags: ["security", "safety", "guidelines"],
    href: "/wiki/security",
  },
  {
    id: "deployment",
    title: "Deployment Guide",
    description: "Instructions for deploying Nexara applications to various platforms.",
    category: "Setup",
    lastUpdated: "2025-01-24",
    author: "DevOps Team",
    readTime: "13 min",
    tags: ["deployment", "hosting", "production"],
    href: "/wiki/deployment",
  },
]

const categories = [
  { name: "All", icon: BookOpen, count: wikiPages.length },
  { name: "Basics", icon: Rocket, count: wikiPages.filter((p) => p.category === "Basics").length },
  { name: "Setup", icon: Settings, count: wikiPages.filter((p) => p.category === "Setup").length },
  { name: "Initiatives", icon: Heart, count: wikiPages.filter((p) => p.category === "Initiatives").length },
  { name: "Development", icon: Code, count: wikiPages.filter((p) => p.category === "Development").length },
  { name: "Community", icon: Users, count: wikiPages.filter((p) => p.category === "Community").length },
  { name: "Support", icon: HelpCircle, count: wikiPages.filter((p) => p.category === "Support").length },
  { name: "Guidelines", icon: Shield, count: wikiPages.filter((p) => p.category === "Guidelines").length },
  { name: "Security", icon: Shield, count: wikiPages.filter((p) => p.category === "Security").length },
]

export default function WikiClient() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPages = wikiPages.filter((page) => {
    const matchesSearch =
      page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || page.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPages = wikiPages.filter((page) => page.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">Nexara Wiki</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Comprehensive documentation for the Nexara platform and its three core initiatives:
              <span className="font-semibold text-white"> Yunus Inspire</span>,
              <span className="font-semibold text-white"> Trusted Ally</span>, and
              <span className="font-semibold text-white"> Infinity Nexus</span>
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search documentation, guides, and tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-white/95 backdrop-blur-sm border-0 rounded-xl shadow-lg focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Articles */}
        {searchQuery === "" && selectedCategory === "All" && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <Star className="h-6 w-6 text-amber-500" />
              <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPages.map((page) => (
                <Card
                  key={page.id}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="mb-3 bg-amber-100 text-amber-800 border-amber-200">
                        Featured
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        {page.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{page.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">{page.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {page.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(page.lastUpdated).toLocaleDateString()}
                        </div>
                      </div>
                      <Link
                        href={page.href}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group-hover:gap-3 transition-all"
                      >
                        Read More
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {searchQuery ? `Search Results (${filteredPages.length})` : "All Documentation"}
            </h2>
            <div className="text-sm text-gray-500">
              {filteredPages.length} article{filteredPages.length !== 1 ? "s" : ""} found
            </div>
          </div>

          <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2 h-auto p-2 bg-gray-100 rounded-xl mb-8">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg transition-all"
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs font-medium">{category.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              )
            })}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-0">
            <div className="grid gap-6">
              {filteredPages.map((page) => (
                <Card
                  key={page.id}
                  className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="outline" className="text-xs">
                            {page.category}
                          </Badge>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            {page.readTime}
                          </div>
                          {page.featured && (
                            <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          {page.title}
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">{page.description}</p>

                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {page.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            Updated {new Date(page.lastUpdated).toLocaleDateString()}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {page.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="ml-6">
                        <Link
                          href={page.href}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group-hover:gap-3"
                        >
                          Read Article
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPages.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search terms or browse different categories.</p>
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("All")
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Quick Links */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Access</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/api" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Code className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">API Documentation</h4>
                  <p className="text-gray-600 text-sm">Complete API reference and examples</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/tutorials" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-12 w-12 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Tutorials</h4>
                  <p className="text-gray-600 text-sm">Step-by-step learning guides</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/examples" className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Rocket className="h-12 w-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Examples</h4>
                  <p className="text-gray-600 text-sm">Real-world implementation examples</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Community Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Help us improve the documentation by contributing, reporting issues, or suggesting new content.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contributing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Heart className="h-5 w-5" />
              Contribute
            </Link>
            <Link
              href="/issues"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <HelpCircle className="h-5 w-5" />
              Report Issue
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Users className="h-5 w-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
