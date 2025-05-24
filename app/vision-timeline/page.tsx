import type { Metadata } from "next"
import { VisionTimeline } from "@/components/vision-timeline"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Vision Timeline | MJ AHMAD",
  description:
    "Explore the evolution of Yunus Inspire, Trusted Ally & Infinity Nexus from concept to global open-source project.",
}

export default function VisionTimelinePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <Link href="/about-me">
              <Button variant="ghost" className="flex items-center gap-2 pl-0 hover:pl-2 transition-all duration-200">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to About Me</span>
              </Button>
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Vision Timeline</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              The evolution of Yunus Inspire, Trusted Ally & Infinity Nexus from initial concept to global open-source
              project
            </p>
          </div>

          <VisionTimeline />
        </div>
      </main>
      <Footer />
    </>
  )
}
