"use client"
import { ProjectPlanViewer } from "@/components/project-plan-viewer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// Sample project plan data
const projectPlanData = {
  phase_1: {
    title: "Initial Planning and Strategy",
    objectives_finalization: [
      "Determine the project's goals, purpose, and primary content",
      "Plan strategies to attract students",
      "Technological decisions: React.js (Frontend), Node.js (Backend), Hosting with Vercel",
    ],
    team_formation: [
      "Recruit one Frontend Developer",
      "Recruit one Backend Developer",
      "Recruit one UI/UX Designer",
      "Recruit one Project Manager",
      "Recruit one Content Creator",
    ],
    timeline_setup: "Aim to complete the project within 3 months",
  },
  phase_2: {
    title: "Website Development",
    frontend_development: [
      "Develop Landing Page",
      "Develop Courses Page",
      "Develop Community Section",
      "Develop Contact Page",
    ],
    backend_development: ["Setup Database", "Implement Authentication (JWT/OAuth)", "Build RESTful APIs"],
    integration: "Establish proper connection between Frontend and Backend",
    testing: ["Conduct Beta Testing", "Fix Bugs"],
  },
  phase_3: {
    title: "Content Development",
    course_creation: ["Create simple and small courses on HTML, CSS, Python, and GitHub"],
    practice_tasks: ["Add beginner-level tasks for student practice"],
    resources: ["Setup Interactive Code Editor", "Provide Downloadable PDF Guides", "Create Video Tutorials"],
  },
  phase_4: {
    title: "Community Building",
    social_media_setup: ["Create LinkedIn and Facebook pages", "Add logo and cover images"],
    engagement_activities: ["Organize coding challenges", "Host mentorship programs"],
    forum_creation: "Develop Q&A platform for students",
  },
  phase_5: {
    title: "Launch and Promotion",
    website_hosting: "Host the website on Vercel",
    launch_event: ["Organize launch event on social media and community platforms"],
    marketing_campaign: ["Run promotions and media coverage targeting students"],
  },
  budget_proposal: {
    estimated_budget_breakdown: [
      {
        category: "Website Development",
        cost: "$5,000",
        details: "Frontend, Backend, Integration, Hosting",
      },
      {
        category: "Content Creation",
        cost: "$2,000",
        details: "Course material, Video Tutorials, Resources",
      },
      {
        category: "Team Salaries",
        cost: "$10,000",
        details: "Developers, Designers, Project Manager",
      },
      {
        category: "Marketing",
        cost: "$3,000",
        details: "Social Media Ads, Community Promotion",
      },
      {
        category: "Hosting and Tools",
        cost: "$1,000",
        details: "Vercel Hosting, Azure DevOps, Domain Costs",
      },
      {
        category: "Miscellaneous Costs",
        cost: "$1,000",
        details: "Unexpected expenses and small adjustments",
      },
    ],
    total_estimated_budget: "$22,000",
  },
}

export default function ProjectPlanPage() {
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

        <h1 className="text-3xl font-bold mb-6">Yunus Inspire Project Plan</h1>

        <ProjectPlanViewer data={projectPlanData} />
      </div>
    </main>
  )
}
