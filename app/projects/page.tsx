import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Users, Code, Zap, Heart } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Projects - Nexara",
  description:
    "Explore Nexara's innovative projects spanning web applications, development tools, and community initiatives.",
  keywords: "Nexara projects, web applications, development tools, open source, community initiatives",
}

export default function ProjectsPage() {
  const projectStats = [
    { label: "Active Projects", value: "15+", icon: Code },
    { label: "Contributors", value: "50+", icon: Users },
    { label: "Technologies", value: "8", icon: Zap },
    { label: "Community Stars", value: "200+", icon: Heart },
  ]

  const featuredProjects = [
    {
      title: "Initiative Tracking Dashboard",
      description:
        "Comprehensive project management system for tracking initiatives, milestones, and team collaboration.",
      category: "Web Application",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      status: "Active",
      link: "/tracking-system",
      github: "#",
      image: "/placeholder.svg?height=200&width=400&text=Initiative+Dashboard",
    },
    {
      title: "Wellness Dashboard",
      description:
        "Health and wellness tracking system with habit monitoring, exercise tracking, and mental health support.",
      category: "Web Application",
      technologies: ["React", "Node.js", "MongoDB"],
      status: "Active",
      link: "/wellness-dashboard",
      github: "#",
      image: "/placeholder.svg?height=200&width=400&text=Wellness+Dashboard",
    },
    {
      title: "Meeting Preparation System",
      description:
        "Professional meeting tools with agenda management, document preparation, and collaboration features.",
      category: "Development Tool",
      technologies: ["Next.js", "TypeScript", "Prisma"],
      status: "Active",
      link: "/meeting-preparation",
      github: "#",
      image: "/placeholder.svg?height=200&width=400&text=Meeting+System",
    },
    {
      title: "Feedback Management System",
      description: "Community feedback platform with analytics, response tracking, and improvement suggestions.",
      category: "Web Application",
      technologies: ["React", "Express", "PostgreSQL"],
      status: "Active",
      link: "/feedback-system",
      github: "#",
      image: "/placeholder.svg?height=200&width=400&text=Feedback+System",
    },
    {
      title: "Document Repository",
      description: "Knowledge management system for organizing, searching, and sharing documentation across teams.",
      category: "Development Tool",
      technologies: ["Next.js", "Elasticsearch", "AWS"],
      status: "Beta",
      link: "/overview/mj-ahmad",
      github: "#",
      image: "/placeholder.svg?height=200&width=400&text=Document+Repository",
    },
    {
      title: "Real-time Collaboration Tools",
      description: "Team collaboration features with live editing, chat integration, and project synchronization.",
      category: "Community Initiative",
      technologies: ["Socket.io", "React", "Redis"],
      status: "Development",
      link: "/advanced-tracking",
      github: "#",
      image: "/placeholder.svg?height=200&width=400&text=Collaboration+Tools",
    },
  ]

  const categories = [
    { name: "Web Applications", count: 3, color: "bg-blue-100 text-blue-800" },
    { name: "Development Tools", count: 2, color: "bg-green-100 text-green-800" },
    { name: "Community Initiatives", count: 1, color: "bg-purple-100 text-purple-800" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nexara Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our innovative projects spanning web applications, development tools, and community initiatives.
            Each project embodies our commitment to empowering communities through technology.
          </p>

          {/* Project Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {projectStats.map((stat, index) => (
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

        {/* Project Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Categories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <Badge key={index} className={`${category.color} px-4 py-2 text-sm font-medium`}>
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <Badge
                      variant={
                        project.status === "Active" ? "default" : project.status === "Beta" ? "secondary" : "outline"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1">
                      <Link href={project.link}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.github}>
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-lg p-8 text-center shadow-sm border">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to Contribute?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our community of developers, designers, and innovators. Contribute to existing projects or propose new
            initiatives that align with our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/community">
                <Users className="h-5 w-5 mr-2" />
                Join Community
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contributing">
                <Github className="h-5 w-5 mr-2" />
                Start Contributing
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
