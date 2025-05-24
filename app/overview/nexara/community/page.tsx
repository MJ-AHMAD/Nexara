import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FileText, Heart, Settings, Shield, Users, ArrowRight, BookOpen, Code } from "lucide-react"

export const metadata: Metadata = {
  title: "Nexara Community | Project Overview",
  description: "Community resources and guidelines for the Nexara project",
}

export default function NexaraCommunityPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Nexara Community</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Resources, guidelines, and documentation for contributing to and participating in the Nexara community
          </p>
        </div>

        <Separator className="my-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span>Code of Conduct</span>
              </CardTitle>
              <CardDescription>Our commitment to a respectful community</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>
                We are committed to providing a friendly, safe, and welcoming environment for all, regardless of level
                of experience, gender identity and expression, sexual orientation, disability, personal appearance, body
                size, race, ethnicity, age, religion, nationality, or other similar characteristic.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/code-of-conduct" className="text-primary hover:underline inline-flex items-center group">
                Read our Code of Conduct
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-rose-600" />
                <span>Contributing</span>
              </CardTitle>
              <CardDescription>How to contribute to Nexara projects</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>
                We welcome contributions from everyone. Whether you're fixing a typo, improving documentation, or
                implementing a new feature, your help is appreciated. Our contributing guidelines will help you get
                started with the development workflow, coding standards, and more.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/contributing" className="text-primary hover:underline inline-flex items-center group">
                View Contributing Guidelines
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-amber-600" />
                <span>Governance</span>
              </CardTitle>
              <CardDescription>How decisions are made in the project</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>
                Our governance model outlines how the project is managed, how decisions are made, and the roles and
                responsibilities within the community. Understanding our governance helps contributors know how to
                effectively participate in the project's development and direction.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/governance" className="text-primary hover:underline inline-flex items-center group">
                Explore Governance Model
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-emerald-600" />
                <span>Community Guidelines</span>
              </CardTitle>
              <CardDescription>Best practices for community interaction</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>
                Our community guidelines provide practical advice for interacting with other community members,
                participating in discussions, and collaborating effectively. Following these guidelines helps create a
                positive and productive environment for everyone.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/community-guidelines"
                className="text-primary hover:underline inline-flex items-center group"
              >
                Read Community Guidelines
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardFooter>
          </Card>
        </div>

        <Separator className="my-8" />

        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center">Additional Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                  <span>Documentation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Comprehensive guides and API references for all Nexara projects.</p>
              </CardContent>
              <CardFooter>
                <Link href="/docs" className="text-primary hover:underline inline-flex items-center group">
                  View Documentation
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-indigo-600" />
                  <span>GitHub Repositories</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Source code, issue tracking, and project management for all Nexara projects.</p>
              </CardContent>
              <CardFooter>
                <Link
                  href="https://github.com/nexara"
                  className="text-primary hover:underline inline-flex items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit GitHub
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  <span>Community Forum</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discuss ideas, ask questions, and connect with other community members.</p>
              </CardContent>
              <CardFooter>
                <Link href="/forum" className="text-primary hover:underline inline-flex items-center group">
                  Join the Discussion
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
