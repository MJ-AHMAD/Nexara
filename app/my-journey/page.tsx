import type { Metadata } from "next"
import { PersonalJourney } from "@/components/personal-journey"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Github, Twitter, Linkedin, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "MJ AHMAD's Journey | INFINITY NEXUS & TRUSTED ALLY",
  description:
    "Learn about MJ AHMAD's personal journey, background, and the vision behind INFINITY NEXUS & TRUSTED ALLY.",
}

export default function MyJourneyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 pl-0 hover:pl-2 transition-all duration-200">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Journey & Vision</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            The story behind INFINITY NEXUS & TRUSTED ALLY and the path that led me here
          </p>
        </div>

        <PersonalJourney />

        <div className="mt-16 bg-slate-50 dark:bg-slate-900 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            I'm always open to connecting with like-minded individuals who share my passion for technology, community
            building, and creating positive impact. Feel free to reach out through any of these channels.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>contact@mjahmad.com</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Twitter className="h-4 w-4 text-blue-500" />
              <span>Twitter</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Linkedin className="h-4 w-4 text-blue-700" />
              <span>LinkedIn</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
