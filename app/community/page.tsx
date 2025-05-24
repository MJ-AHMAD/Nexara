import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  Code,
  BookOpen,
  Palette,
  MessageCircle,
  Bug,
  Globe,
  Calendar,
  Github,
  Twitter,
  Linkedin,
  Heart,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Community - Nexara",
  description:
    "Join the Nexara community of developers, designers, and innovators working together to empower communities through technology.",
  keywords: "Nexara community, open source, collaboration, developers, contributors, community guidelines",
}

export default function CommunityPage() {
  const communityStats = [
    { label: "Community Members", value: "500+", icon: Users },
    { label: "Contributions", value: "1,200+", icon: Code },
    { label: "Active Projects", value: "25+", icon: BookOpen },
    { label: "Countries", value: "15+", icon: Globe },
  ]

  const contributionWays = [
    {
      title: "Code Contributions",
      description: "Contribute to our open-source projects by fixing bugs, adding features, or improving performance.",
      icon: Code,
      color: "bg-blue-100 text-blue-600",
      link: "/contributing",
    },
    {
      title: "Documentation",
      description: "Help improve our documentation, write tutorials, or create guides for new contributors.",
      icon: BookOpen,
      color: "bg-green-100 text-green-600",
      link: "/docs",
    },
    {
      title: "Design & UX",
      description: "Contribute to visual design, user experience improvements, and interface enhancements.",
      icon: Palette,
      color: "bg-purple-100 text-purple-600",
      link: "/design-guidelines",
    },
    {
      title: "Community Support",
      description: "Help other community members by answering questions and providing guidance.",
      icon: MessageCircle,
      color: "bg-orange-100 text-orange-600",
      link: "/community-support",
    },
    {
      title: "Testing & QA",
      description: "Test our applications, report bugs, and help ensure quality across all projects.",
      icon: Bug,
      color: "bg-red-100 text-red-600",
      link: "/testing",
    },
    {
      title: "Translation",
      description: "Help make Nexara accessible globally by translating content into different languages.",
      icon: Globe,
      color: "bg-teal-100 text-teal-600",
      link: "/translation",
    },
  ]

  const featuredContributors = [
    {
      name: "MJ Ahmad",
      role: "Founder & Lead Developer",
      avatar: "/mjahmad.png",
      contributions: "500+",
      specialties: ["Full-stack Development", "Project Architecture", "Community Leadership"],
    },
    {
      name: "Sarah Chen",
      role: "UX Designer",
      avatar: "/placeholder.svg?height=40&width=40&text=SC",
      contributions: "150+",
      specialties: ["User Experience", "Interface Design", "Accessibility"],
    },
    {
      name: "Ahmed Rahman",
      role: "Backend Developer",
      avatar: "/placeholder.svg?height=40&width=40&text=AR",
      contributions: "200+",
      specialties: ["API Development", "Database Design", "Performance Optimization"],
    },
    {
      name: "Lisa Johnson",
      role: "Documentation Lead",
      avatar: "/placeholder.svg?height=40&width=40&text=LJ",
      contributions: "100+",
      specialties: ["Technical Writing", "Tutorial Creation", "Knowledge Management"],
    },
  ]

  const upcomingEvents = [
    {
      title: "Monthly Community Meetup",
      date: "March 15, 2024",
      time: "7:00 PM UTC",
      type: "Virtual",
      description: "Join our monthly community meetup to discuss project updates and network with fellow contributors.",
    },
    {
      title: "Hackathon: Social Impact",
      date: "March 22-24, 2024",
      time: "48 Hours",
      type: "Hybrid",
      description: "Build innovative solutions for social impact challenges using Nexara technologies.",
    },
    {
      title: "Workshop: Contributing to Open Source",
      date: "March 30, 2024",
      time: "2:00 PM UTC",
      type: "Virtual",
      description: "Learn how to make your first contribution to open source projects with hands-on guidance.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to the Nexara Community</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join a vibrant community of developers, designers, and innovators working together to empower communities
            through technology. Together, we're building solutions that make a difference.
          </p>

          {/* Community Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {communityStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Ways to Contribute */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ways to Contribute</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributionWays.map((way, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${way.color} flex items-center justify-center mb-4`}>
                    <way.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{way.title}</CardTitle>
                  <CardDescription>{way.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={way.link}>Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Contributors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Contributors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredContributors.map((contributor, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarImage src={contributor.avatar || "/placeholder.svg"} alt={contributor.name} />
                    <AvatarFallback>
                      {contributor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{contributor.name}</CardTitle>
                  <CardDescription>{contributor.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {contributor.contributions} contributions
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    {contributor.specialties.map((specialty, specIndex) => (
                      <Badge key={specIndex} variant="outline" className="text-xs mr-1">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{event.type}</Badge>
                    <Calendar className="h-4 w-4 text-gray-500" />
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>
                    {event.date} • {event.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{event.description}</p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-center">Community Guidelines</CardTitle>
              <CardDescription className="text-center">
                Our community thrives on respect, collaboration, and shared learning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">✅ Do:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Be respectful and inclusive</li>
                    <li>• Help others learn and grow</li>
                    <li>• Share knowledge and resources</li>
                    <li>• Follow our code of conduct</li>
                    <li>• Provide constructive feedback</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">❌ Don't:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Use discriminatory language</li>
                    <li>• Spam or self-promote excessively</li>
                    <li>• Share inappropriate content</li>
                    <li>• Violate intellectual property</li>
                    <li>• Engage in harassment</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button asChild variant="outline">
                  <Link href="/code-of-conduct">Read Full Guidelines</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Get Involved */}
        <div className="bg-white rounded-lg p-8 text-center shadow-sm border">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Involved?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our community today and start making a difference. Whether you're a seasoned developer or just getting
            started, there's a place for you in the Nexara community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contributing">
                <Heart className="h-5 w-5 mr-2" />
                Start Contributing
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="https://github.com/nexara" target="_blank">
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex justify-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://twitter.com/nexara" target="_blank">
                <Twitter className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://linkedin.com/company/nexara" target="_blank">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/nexara" target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
