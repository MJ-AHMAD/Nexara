"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Calendar, CheckCircle, Clock, Target, Users, Zap, Globe, Shield } from "lucide-react"

const roadmapData = {
  current: {
    version: "1.0.0",
    releaseDate: "May 21, 2023",
    progress: 100,
  },
  shortTerm: {
    title: "Short-term Goals (Next 3 months)",
    progress: 65,
    items: [
      {
        category: "Core Features",
        status: "in-progress",
        progress: 70,
        items: [
          { title: "Enhance Wellness Dashboard with customizable metrics", status: "completed", priority: "high" },
          {
            title: "Add data export functionality to all tracking components",
            status: "in-progress",
            priority: "high",
          },
          { title: "Implement dark mode toggle across all pages", status: "completed", priority: "medium" },
          { title: "Improve mobile responsiveness for all components", status: "in-progress", priority: "high" },
        ],
      },
      {
        category: "Technical Improvements",
        status: "in-progress",
        progress: 60,
        items: [
          { title: "Optimize performance for large datasets", status: "planned", priority: "high" },
          { title: "Implement comprehensive error handling", status: "in-progress", priority: "medium" },
          { title: "Add unit tests for core components", status: "planned", priority: "medium" },
          { title: "Improve accessibility compliance", status: "in-progress", priority: "high" },
        ],
      },
      {
        category: "Documentation",
        status: "in-progress",
        progress: 65,
        items: [
          { title: "Create comprehensive API documentation", status: "in-progress", priority: "medium" },
          { title: "Add more code examples and tutorials", status: "planned", priority: "low" },
          { title: "Improve inline code documentation", status: "completed", priority: "medium" },
        ],
      },
    ],
  },
  midTerm: {
    title: "Mid-term Goals (3-6 months)",
    progress: 25,
    items: [
      {
        category: "Core Features",
        status: "planned",
        progress: 30,
        items: [
          { title: "Add multi-language support", status: "planned", priority: "high" },
          { title: "Implement user authentication system", status: "planned", priority: "high" },
          { title: "Create data visualization dashboard", status: "planned", priority: "medium" },
          { title: "Add offline support with service workers", status: "planned", priority: "low" },
        ],
      },
      {
        category: "Technical Improvements",
        status: "planned",
        progress: 20,
        items: [
          { title: "Migrate to Next.js App Router (if not already using it)", status: "completed", priority: "high" },
          { title: "Implement server-side rendering for all pages", status: "planned", priority: "medium" },
          { title: "Add end-to-end testing", status: "planned", priority: "medium" },
          { title: "Optimize bundle size", status: "planned", priority: "low" },
        ],
      },
      {
        category: "Community",
        status: "planned",
        progress: 25,
        items: [
          { title: "Create contributor onboarding process", status: "planned", priority: "medium" },
          { title: "Establish regular community meetings", status: "planned", priority: "low" },
          { title: "Develop plugin/extension system", status: "planned", priority: "low" },
        ],
      },
    ],
  },
  longTerm: {
    title: "Long-term Goals (6+ months)",
    progress: 10,
    items: [
      {
        category: "Core Features",
        status: "planned",
        progress: 15,
        items: [
          { title: "Implement AI-powered insights and recommendations", status: "planned", priority: "high" },
          { title: "Add collaborative features for team projects", status: "planned", priority: "medium" },
          { title: "Create mobile applications (iOS/Android)", status: "planned", priority: "medium" },
          { title: "Develop desktop application", status: "planned", priority: "low" },
        ],
      },
      {
        category: "Technical Improvements",
        status: "planned",
        progress: 5,
        items: [
          { title: "Implement real-time synchronization", status: "planned", priority: "high" },
          { title: "Add advanced data analytics", status: "planned", priority: "medium" },
          { title: "Explore blockchain integration for data verification", status: "planned", priority: "low" },
          { title: "Implement advanced security features", status: "planned", priority: "high" },
        ],
      },
      {
        category: "Community and Business",
        status: "planned",
        progress: 10,
        items: [
          { title: "Establish sustainable funding model", status: "planned", priority: "high" },
          { title: "Create educational resources and courses", status: "planned", priority: "medium" },
          { title: "Develop partnership program", status: "planned", priority: "medium" },
          { title: "Host community events and hackathons", status: "planned", priority: "low" },
        ],
      },
    ],
  },
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "in-progress":
      return <Clock className="h-4 w-4 text-blue-500" />
    case "planned":
      return <Target className="h-4 w-4 text-gray-500" />
    default:
      return <Target className="h-4 w-4 text-gray-500" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800"
    case "in-progress":
      return "bg-blue-100 text-blue-800"
    case "planned":
      return "bg-gray-100 text-gray-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-800"
    case "medium":
      return "bg-yellow-100 text-yellow-800"
    case "low":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function RoadmapPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("short-term")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Roadmap</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our development journey and upcoming features. This roadmap outlines our planned improvements, new
            features, and long-term vision for the MJ-AHMAD OVERVIEW project.
          </p>
        </div>

        {/* Current Version Status */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              Current Version: {roadmapData.current.version}
            </CardTitle>
            <CardDescription>Released on {roadmapData.current.releaseDate}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Progress value={roadmapData.current.progress} className="flex-1" />
              <span className="text-sm font-medium">{roadmapData.current.progress}% Complete</span>
            </div>
          </CardContent>
        </Card>

        {/* Roadmap Timeline */}
        <Tabs value={selectedTimeframe} onValueChange={setSelectedTimeframe} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="short-term" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Short-term
            </TabsTrigger>
            <TabsTrigger value="mid-term" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Mid-term
            </TabsTrigger>
            <TabsTrigger value="long-term" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Long-term
            </TabsTrigger>
          </TabsList>

          <TabsContent value="short-term" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {roadmapData.shortTerm.title}
                  <Badge variant="outline" className="bg-blue-100 text-blue-800">
                    {roadmapData.shortTerm.progress}% Complete
                  </Badge>
                </CardTitle>
                <Progress value={roadmapData.shortTerm.progress} className="mt-2" />
              </CardHeader>
              <CardContent className="space-y-6">
                {roadmapData.shortTerm.items.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                      <div className="flex items-center gap-2">
                        <Progress value={category.progress} className="w-24" />
                        <span className="text-sm text-gray-600">{category.progress}%</span>
                      </div>
                    </div>
                    <div className="grid gap-3">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center justify-between p-3 bg-white rounded-lg border"
                        >
                          <div className="flex items-center gap-3">
                            {getStatusIcon(item.status)}
                            <span className="text-sm font-medium">{item.title}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={getPriorityColor(item.priority)}>{item.priority}</Badge>
                            <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mid-term" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {roadmapData.midTerm.title}
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                    {roadmapData.midTerm.progress}% Complete
                  </Badge>
                </CardTitle>
                <Progress value={roadmapData.midTerm.progress} className="mt-2" />
              </CardHeader>
              <CardContent className="space-y-6">
                {roadmapData.midTerm.items.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                      <div className="flex items-center gap-2">
                        <Progress value={category.progress} className="w-24" />
                        <span className="text-sm text-gray-600">{category.progress}%</span>
                      </div>
                    </div>
                    <div className="grid gap-3">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center justify-between p-3 bg-white rounded-lg border"
                        >
                          <div className="flex items-center gap-3">
                            {getStatusIcon(item.status)}
                            <span className="text-sm font-medium">{item.title}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={getPriorityColor(item.priority)}>{item.priority}</Badge>
                            <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="long-term" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {roadmapData.longTerm.title}
                  <Badge variant="outline" className="bg-purple-100 text-purple-800">
                    {roadmapData.longTerm.progress}% Complete
                  </Badge>
                </CardTitle>
                <Progress value={roadmapData.longTerm.progress} className="mt-2" />
              </CardHeader>
              <CardContent className="space-y-6">
                {roadmapData.longTerm.items.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                      <div className="flex items-center gap-2">
                        <Progress value={category.progress} className="w-24" />
                        <span className="text-sm text-gray-600">{category.progress}%</span>
                      </div>
                    </div>
                    <div className="grid gap-3">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center justify-between p-3 bg-white rounded-lg border"
                        >
                          <div className="flex items-center gap-3">
                            {getStatusIcon(item.status)}
                            <span className="text-sm font-medium">{item.title}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={getPriorityColor(item.priority)}>{item.priority}</Badge>
                            <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Contribution CTA */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6" />
              How to Contribute
            </CardTitle>
            <CardDescription>
              We welcome contributions to help us achieve these goals! Your input shapes our roadmap.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="/contributing">Contributing Guide</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/issues">Report Issues</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/contact">Suggest Features</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Last Updated */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <Calendar className="h-4 w-4 inline mr-2" />
          Last updated: May 21, 2023
        </div>
      </div>
    </div>
  )
}
