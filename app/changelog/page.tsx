"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Search, Plus, Bug, Shield, Zap, GitCommit } from "lucide-react"

const changelogData = [
  {
    version: "1.2.0",
    date: "2023-12-15",
    type: "major",
    status: "upcoming",
    changes: {
      added: [
        "Multi-language support for English, Bengali, and Spanish",
        "Advanced data visualization dashboard",
        "Real-time collaboration features",
        "Mobile app for iOS and Android",
        "AI-powered insights and recommendations",
      ],
      improved: [
        "Performance optimization for large datasets",
        "Enhanced mobile responsiveness",
        "Improved accessibility compliance",
        "Better error handling and user feedback",
      ],
      fixed: [
        "Memory leaks in data processing components",
        "Inconsistent styling across different browsers",
        "Issues with file upload validation",
      ],
      security: [
        "Enhanced encryption for sensitive data",
        "Improved authentication mechanisms",
        "Updated dependencies to latest secure versions",
      ],
    },
  },
  {
    version: "1.1.0",
    date: "2023-10-20",
    type: "minor",
    status: "released",
    changes: {
      added: [
        "Dark mode toggle across all pages",
        "Data export functionality for tracking components",
        "Enhanced wellness dashboard with customizable metrics",
        "FAQ page with comprehensive Q&A",
        "Support pages for issues, contact, and security",
        "Project roadmap visualization",
      ],
      improved: [
        "Better mobile navigation experience",
        "Faster page load times",
        "Enhanced search functionality",
        "Improved form validation",
      ],
      fixed: [
        "Navigation menu not closing on mobile",
        "Incorrect date formatting in some components",
        "Theme persistence issues",
        "Form submission errors on slow connections",
      ],
      security: [
        "Updated all dependencies to latest versions",
        "Improved input sanitization",
        "Enhanced CSRF protection",
      ],
    },
  },
  {
    version: "1.0.1",
    date: "2023-06-15",
    type: "patch",
    status: "released",
    changes: {
      added: [
        "Loading states for better user experience",
        "Error boundaries for graceful error handling",
        "Analytics tracking for user interactions",
      ],
      improved: [
        "Code organization and documentation",
        "Performance of image loading",
        "Accessibility of form components",
      ],
      fixed: [
        "Broken links in navigation menu",
        "Inconsistent button styling",
        "Memory leaks in timer components",
        "Issues with password protection component",
      ],
      security: [
        "Fixed XSS vulnerability in user input fields",
        "Updated authentication token handling",
        "Improved session management",
      ],
    },
  },
  {
    version: "1.0.0",
    date: "2023-05-21",
    type: "major",
    status: "released",
    changes: {
      added: [
        "Initial project setup and architecture",
        "Wellness Dashboard with water, exercise, sleep, and habit tracking",
        "Project Focus with task management and focus timer",
        "Meeting Preparation tools with document management",
        "Tracking System for invoices and reporting",
        "Personal Notes with password protection",
        "JSON and Markdown structure visualization",
        "ISS Tracker with real-time data",
        "Time Management features",
        "Open source project setup with comprehensive documentation",
        "Initiative pages for Yunus Inspire, Trusted Ally, and Infinity Nexus",
        "Product showcase and e-commerce functionality",
        "Community features and contributor guidelines",
      ],
      improved: [],
      fixed: [],
      security: [
        "Implemented secure authentication system",
        "Added input validation and sanitization",
        "Configured secure headers and HTTPS",
      ],
    },
  },
]

const getVersionTypeColor = (type: string) => {
  switch (type) {
    case "major":
      return "bg-red-100 text-red-800"
    case "minor":
      return "bg-blue-100 text-blue-800"
    case "patch":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "upcoming":
      return "bg-purple-100 text-purple-800"
    case "released":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getChangeIcon = (type: string) => {
  switch (type) {
    case "added":
      return <Plus className="h-4 w-4 text-green-600" />
    case "improved":
      return <Zap className="h-4 w-4 text-blue-600" />
    case "fixed":
      return <Bug className="h-4 w-4 text-orange-600" />
    case "security":
      return <Shield className="h-4 w-4 text-red-600" />
    default:
      return <GitCommit className="h-4 w-4 text-gray-600" />
  }
}

export default function ChangelogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")

  const filteredChangelog = changelogData.filter((version) => {
    const matchesSearch =
      searchTerm === "" ||
      version.version.toLowerCase().includes(searchTerm.toLowerCase()) ||
      Object.values(version.changes)
        .flat()
        .some((change) => change.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesType = selectedType === "all" || version.type === selectedType

    return matchesSearch && matchesType
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Changelog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track all changes, improvements, and new features in the MJ-AHMAD OVERVIEW project. Stay updated with our
            development progress and version history.
          </p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search & Filter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search versions, features, or changes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Tabs value={selectedType} onValueChange={setSelectedType}>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="major">Major</TabsTrigger>
                  <TabsTrigger value="minor">Minor</TabsTrigger>
                  <TabsTrigger value="patch">Patch</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardContent>
        </Card>

        {/* Changelog Entries */}
        <div className="space-y-8">
          {filteredChangelog.map((version, index) => (
            <Card key={version.version} className="relative">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl font-bold">v{version.version}</span>
                    <Badge className={getVersionTypeColor(version.type)}>{version.type}</Badge>
                    <Badge className={getStatusColor(version.status)}>{version.status}</Badge>
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    {version.date}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(version.changes).map(
                  ([changeType, changes]) =>
                    changes.length > 0 && (
                      <div key={changeType} className="space-y-3">
                        <h3 className="flex items-center gap-2 text-lg font-semibold capitalize">
                          {getChangeIcon(changeType)}
                          {changeType}
                        </h3>
                        <ul className="space-y-2">
                          {changes.map((change, changeIndex) => (
                            <li key={changeIndex} className="flex items-start gap-3 text-sm">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700">{change}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ),
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredChangelog.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Contribution CTA */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitCommit className="h-6 w-6" />
              Stay Updated
            </CardTitle>
            <CardDescription>Want to be notified about new releases and updates?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="https://github.com/MJ-AHMAD/MJ-AHMAD-OVERVIEW" target="_blank" rel="noopener noreferrer">
                  Watch on GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/roadmap">View Roadmap</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/contributing">Contribute</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>
            This changelog follows{" "}
            <a
              href="https://keepachangelog.com/en/1.0.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Keep a Changelog
            </a>{" "}
            format and{" "}
            <a
              href="https://semver.org/spec/v2.0.0.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Semantic Versioning
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
