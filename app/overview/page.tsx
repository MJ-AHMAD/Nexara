import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, FileText, Calendar, CheckSquare, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Project Overviews | Nexara",
  description: "Comprehensive dashboards for all Nexara projects and initiatives",
}

export default function OverviewPage() {
  const projects = [
    {
      id: "nexara",
      name: "Nexara",
      description: "The unified platform for innovation, education, and community development",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      stats: "5 initiatives · 12 team members · 85% progress",
    },
    {
      id: "mj-ahmad",
      name: "MJ AHMAD",
      description: "Personal brand and leadership initiatives focused on global impact",
      icon: <Users className="h-8 w-8 text-primary" />,
      stats: "3 active projects · 8 partnerships · 92% engagement",
    },
    {
      id: "infinity-nexus",
      name: "Infinity Nexus",
      description: "Global standard data hub for scientific research with focus on Cox's Bazar",
      icon: <FileText className="h-8 w-8 text-primary" />,
      stats: "4 research areas · 6 institutions · 78% completion",
    },
    {
      id: "yunus-inspire",
      name: "Yunus Inspire",
      description: "Social business initiatives inspired by Nobel Laureate Muhammad Yunus",
      icon: <Calendar className="h-8 w-8 text-primary" />,
      stats: "7 social businesses · 15 communities · 65% impact",
    },
    {
      id: "trusted-ally",
      name: "Trusted Ally",
      description: "Community support and development programs for Cox's Bazar region",
      icon: <CheckSquare className="h-8 w-8 text-primary" />,
      stats: "9 programs · 4 regions · 82% satisfaction",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Project Overviews</h1>
        <p className="text-muted-foreground mt-2">Comprehensive dashboards for all Nexara projects and initiatives</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                {project.icon}
                <div className="rounded-full px-2 py-1 text-xs bg-primary/10 text-primary">Active</div>
              </div>
              <CardTitle className="mt-4">{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{project.stats}</p>
            </CardContent>
            <CardFooter className="bg-muted/50 pt-2">
              <Link href={`/overview/${project.id}`} className="w-full">
                <Button variant="default" className="w-full">
                  Open Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
