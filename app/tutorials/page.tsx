import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Play, Clock, Users, Star, ArrowRight, Code, Lightbulb, Target, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Tutorials - Nexara Platform",
  description:
    "Learn how to use Nexara platform with comprehensive tutorials covering Yunus Inspire, Trusted Ally, and Infinity Nexus initiatives.",
}

export default function TutorialsPage() {
  const tutorials = [
    {
      id: 1,
      title: "Getting Started with Nexara Platform",
      description: "Learn the basics of navigating and using the Nexara ecosystem",
      duration: "15 min",
      level: "Beginner",
      category: "Getting Started",
      image: "/programming-course.png",
      topics: ["Navigation", "Basic Features", "User Interface"],
    },
    {
      id: 2,
      title: "Understanding Nexara Initiatives",
      description: "Deep dive into Yunus Inspire, Trusted Ally, and Infinity Nexus",
      duration: "25 min",
      level: "Intermediate",
      category: "Initiatives",
      image: "/infinity-nexus-concept.png",
      topics: ["Yunus Inspire", "Trusted Ally", "Infinity Nexus"],
    },
    {
      id: 3,
      title: "Working with JSON Data",
      description: "Learn to create, edit, and validate JSON structures",
      duration: "20 min",
      level: "Intermediate",
      category: "Data Management",
      image: "/web-development-concept.png",
      topics: ["JSON Editor", "Validation", "Structure Analysis"],
    },
    {
      id: 4,
      title: "Project Planning & Tracking",
      description: "Master project management features and tracking systems",
      duration: "30 min",
      level: "Advanced",
      category: "Project Management",
      image: "/leadership-book.png",
      topics: ["Planning", "Tracking", "Reporting", "Analytics"],
    },
    {
      id: 5,
      title: "Wellness Dashboard Setup",
      description: "Configure and use the wellness tracking features",
      duration: "18 min",
      level: "Beginner",
      category: "Wellness",
      image: "/wellness-meditation-nature-zen.png",
      topics: ["Health Tracking", "Habits", "Goals", "Progress"],
    },
    {
      id: 6,
      title: "API Integration Guide",
      description: "Connect external services and build integrations",
      duration: "35 min",
      level: "Advanced",
      category: "Development",
      image: "/mobile-app-development.png",
      topics: ["API Keys", "Endpoints", "Authentication", "SDKs"],
    },
  ]

  const categories = [
    { name: "All", count: tutorials.length },
    { name: "Getting Started", count: 1 },
    { name: "Initiatives", count: 1 },
    { name: "Data Management", count: 1 },
    { name: "Project Management", count: 1 },
    { name: "Wellness", count: 1 },
    { name: "Development", count: 1 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
            <BookOpen className="h-8 w-8 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nexara Learning Hub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the Nexara platform with our comprehensive tutorials. Learn about Yunus Inspire, Trusted Ally, and
            Infinity Nexus initiatives from beginner basics to advanced techniques.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-emerald-600 mb-2">6</div>
              <div className="text-sm text-gray-600">Total Tutorials</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600 mb-2">2.5h</div>
              <div className="text-sm text-gray-600">Total Duration</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-purple-600 mb-2">6</div>
              <div className="text-sm text-gray-600">Categories</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-amber-600 mb-2">Free</div>
              <div className="text-sm text-gray-600">All Content</div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Path */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-500" />
              Recommended Learning Path
            </CardTitle>
            <CardDescription>Follow this path for the best learning experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <span className="font-medium">Start Here</span>
                </div>
                <p className="text-sm text-gray-600">Getting Started with Nexara Platform</p>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 self-center hidden md:block" />
              <div className="flex-1 p-4 bg-emerald-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <span className="font-medium">Learn Concepts</span>
                </div>
                <p className="text-sm text-gray-600">Understanding Nexara Initiatives</p>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 self-center hidden md:block" />
              <div className="flex-1 p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <span className="font-medium">Practice</span>
                </div>
                <p className="text-sm text-gray-600">Working with JSON Data</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tutorials Grid */}
        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
            {categories.map((category) => (
              <TabsTrigger key={category.name.toLowerCase()} value={category.name.toLowerCase()}>
                {category.name} ({category.count})
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.map((tutorial) => (
                <Card key={tutorial.id} className="group hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={tutorial.image || "/placeholder.svg"}
                      alt={tutorial.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        {tutorial.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {tutorial.duration}
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="outline"
                        className={
                          tutorial.level === "Beginner"
                            ? "text-green-600 border-green-200"
                            : tutorial.level === "Intermediate"
                              ? "text-yellow-600 border-yellow-200"
                              : "text-red-600 border-red-200"
                        }
                      >
                        {tutorial.level}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">4.8</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">
                      {tutorial.title}
                    </CardTitle>
                    <CardDescription>{tutorial.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {tutorial.topics.map((topic) => (
                          <Badge key={topic} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 group">
                        <Play className="h-4 w-4" />
                        Start Tutorial
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Individual category tabs would filter the tutorials */}
          {categories.slice(1).map((category) => (
            <TabsContent key={category.name.toLowerCase()} value={category.name.toLowerCase()}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutorials
                  .filter((tutorial) => tutorial.category === category.name)
                  .map((tutorial) => (
                    <Card key={tutorial.id} className="group hover:shadow-lg transition-shadow">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={tutorial.image || "/placeholder.svg"}
                          alt={tutorial.title}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <div className="bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {tutorial.duration}
                          </div>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                        <CardDescription>{tutorial.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                          <Play className="h-4 w-4" />
                          Start Tutorial
                        </button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Quick Tips */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Quick Tips for Success
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Start Small</h3>
                <p className="text-sm text-gray-600">
                  Begin with basic tutorials and gradually progress to advanced topics.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold mb-2">Practice Regularly</h3>
                <p className="text-sm text-gray-600">
                  Apply what you learn immediately for better retention and understanding.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Join Community</h3>
                <p className="text-sm text-gray-600">Connect with other learners and get help when you need it.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Learning?</h2>
          <p className="text-gray-600 mb-6">Join thousands of users who have mastered the Nexara platform</p>
          <div className="flex justify-center gap-4">
            <Link
              href="/tutorials/getting-started"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Play className="h-4 w-4" />
              Start First Tutorial
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Users className="h-4 w-4" />
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
