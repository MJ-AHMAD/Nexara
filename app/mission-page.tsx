"use client"
import { MissionViewer } from "@/components/mission-viewer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// Sample mission data
const missionData = {
  project: {
    name: "Yunus Inspire",
    slogan: "Empowering the minds of Bangladesh, one dream at a time",
    mission:
      "To inspire and enable Bangladeshi students by providing free, accessible, and innovative resources in technology and programming, ensuring every learner has the tools to unlock their potential and contribute meaningfully to a prosperous and equitable society.",
    vision:
      "To establish a generation of confident, skilled, and ethical leaders who will drive innovation, unity, and sustainable progress, building a brighter future for Bangladesh while honoring the enduring legacy of Nobel Laureate Professor Muhammad Yunus.",
    key_values: {
      empowerment: "Students are empowered with knowledge, tools, and mentorship.",
      equality: "Ensuring equal access for all, irrespective of socio-economic background.",
      collaboration: "Encouraging teamwork and a shared vision for growth.",
      sustainability: "Promoting responsible and sustainable technological practices.",
      innovation: "Fostering creativity and problem-solving through modern technology.",
      inspiration: "Guided by the values and spirit of Professor Yunus to shape a better society.",
      integrity: "Upholding honesty, respect, and social responsibility.",
    },
  },
}

export default function MissionPage() {
  return (
    <main className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to JSON Viewer
            </Button>
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-6">Yunus Inspire Mission</h1>

        <MissionViewer data={missionData} />
      </div>
    </main>
  )
}
