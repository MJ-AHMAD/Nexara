"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface BudgetItem {
  category: string
  cost: string
  details: string
}

interface ProjectPlanData {
  phase_1: {
    title: string
    objectives_finalization: string[]
    team_formation: string[]
    timeline_setup: string
  }
  phase_2: {
    title: string
    frontend_development: string[]
    backend_development: string[]
    integration: string
    testing: string[]
  }
  phase_3: {
    title: string
    course_creation: string[]
    practice_tasks: string[]
    resources: string[]
  }
  phase_4: {
    title: string
    social_media_setup: string[]
    engagement_activities: string[]
    forum_creation: string
  }
  phase_5: {
    title: string
    website_hosting: string
    launch_event: string[]
    marketing_campaign: string[]
  }
  budget_proposal: {
    estimated_budget_breakdown: BudgetItem[]
    total_estimated_budget: string
  }
}

interface ProjectPlanViewerProps {
  data: ProjectPlanData
}

export function ProjectPlanViewer({ data }: ProjectPlanViewerProps) {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="phases">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="phases">Project Phases</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
        </TabsList>

        <TabsContent value="phases" className="space-y-6 mt-6">
          <PhaseCard
            phase="Phase 1"
            title={data.phase_1.title}
            items={[
              { title: "Objectives", list: data.phase_1.objectives_finalization },
              { title: "Team", list: data.phase_1.team_formation },
              { title: "Timeline", list: [data.phase_1.timeline_setup] },
            ]}
          />

          <PhaseCard
            phase="Phase 2"
            title={data.phase_2.title}
            items={[
              { title: "Frontend", list: data.phase_2.frontend_development },
              { title: "Backend", list: data.phase_2.backend_development },
              { title: "Integration", list: [data.phase_2.integration] },
              { title: "Testing", list: data.phase_2.testing },
            ]}
          />

          <PhaseCard
            phase="Phase 3"
            title={data.phase_3.title}
            items={[
              { title: "Courses", list: data.phase_3.course_creation },
              { title: "Practice", list: data.phase_3.practice_tasks },
              { title: "Resources", list: data.phase_3.resources },
            ]}
          />

          <PhaseCard
            phase="Phase 4"
            title={data.phase_4.title}
            items={[
              { title: "Social Media", list: data.phase_4.social_media_setup },
              { title: "Engagement", list: data.phase_4.engagement_activities },
              { title: "Forum", list: [data.phase_4.forum_creation] },
            ]}
          />

          <PhaseCard
            phase="Phase 5"
            title={data.phase_5.title}
            items={[
              { title: "Hosting", list: [data.phase_5.website_hosting] },
              { title: "Launch", list: data.phase_5.launch_event },
              { title: "Marketing", list: data.phase_5.marketing_campaign },
            ]}
          />
        </TabsContent>

        <TabsContent value="budget" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Budget Proposal</CardTitle>
              <CardDescription>
                Total Estimated Budget:{" "}
                <span className="font-bold text-primary">{data.budget_proposal.total_estimated_budget}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.budget_proposal.estimated_budget_breakdown.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{item.category}</h3>
                      <p className="text-sm text-muted-foreground">{item.details}</p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <Badge variant="outline" className="text-lg font-semibold">
                        {item.cost}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface PhaseCardProps {
  phase: string
  title: string
  items: {
    title: string
    list: string[]
  }[]
}

function PhaseCard({ phase, title, items }: PhaseCardProps) {
  return (
    <Card>
      <CardHeader>
        <Badge className="w-fit mb-2">{phase}</Badge>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-medium text-sm">{item.title}</h3>
              <ul className="space-y-1">
                {item.list.map((listItem, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    • {listItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
