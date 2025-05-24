import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import { ProjectDashboard } from "@/components/overview/project-dashboard"
import { Database, Globe, Shield, BarChart2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Infinity Nexus Overview | Project Dashboard",
  description: "Comprehensive overview of the Infinity Nexus data research project",
}

export default function InfinityNexusOverviewPage() {
  const keyObjectives = [
    {
      id: 1,
      objective: "Global Data Hub Creation",
      description: "Establish a comprehensive data repository for scientific research with focus on Cox's Bazar",
      icon: <Database className="h-5 w-5 text-primary" />,
    },
    {
      id: 2,
      objective: "Research Collaboration",
      description: "Foster international collaboration between researchers, institutions, and communities",
      icon: <Globe className="h-5 w-5 text-primary" />,
    },
    {
      id: 3,
      objective: "Data Security & Ethics",
      description: "Implement robust security measures and ethical frameworks for data handling",
      icon: <Shield className="h-5 w-5 text-primary" />,
    },
    {
      id: 4,
      objective: "Insights & Analytics",
      description: "Develop advanced analytics capabilities to derive meaningful insights from collected data",
      icon: <BarChart2 className="h-5 w-5 text-primary" />,
    },
  ]

  const keyTasks = [
    { id: 1, task: "Complete data architecture design", completed: true },
    { id: 2, task: "Establish data collection protocols", completed: true },
    { id: 3, task: "Implement security infrastructure", completed: true },
    { id: 4, task: "Develop analytics dashboard", completed: false },
    { id: 5, task: "Create researcher onboarding process", completed: true },
    { id: 6, task: "Launch public data portal", completed: false },
  ]

  const agenda = [
    {
      id: 1,
      time: "Q2 2023",
      item: "Data Architecture Design",
      duration: "60 days",
      description: "Define core data structures, schemas, and storage solutions",
    },
    {
      id: 2,
      time: "Q3 2023",
      item: "Security Implementation",
      duration: "45 days",
      description: "Deploy comprehensive security measures and access controls",
    },
    {
      id: 3,
      time: "Q4 2023",
      item: "Data Collection Framework",
      duration: "90 days",
      description: "Establish protocols and tools for consistent data gathering",
    },
    {
      id: 4,
      time: "Q1 2024",
      item: "Analytics Platform Development",
      duration: "75 days",
      description: "Build advanced analytics and visualization capabilities",
    },
    {
      id: 5,
      time: "Q2 2024",
      item: "Researcher Portal Launch",
      duration: "30 days",
      description: "Deploy interface for researcher access and collaboration",
    },
    {
      id: 6,
      time: "Q3 2024",
      item: "Public Data Access",
      duration: "45 days",
      description: "Create public-facing data portal with appropriate access controls",
    },
  ]

  const teamMembers = [
    {
      id: 1,
      name: "Data Architecture Team",
      role: "Infrastructure",
      responsibilities: ["Database design", "Data modeling", "Storage optimization", "System scalability"],
    },
    {
      id: 2,
      name: "Security & Compliance Team",
      role: "Protection",
      responsibilities: ["Security implementation", "Privacy controls", "Compliance monitoring", "Ethical frameworks"],
    },
    {
      id: 3,
      name: "Analytics & Insights Team",
      role: "Intelligence",
      responsibilities: ["Data analysis", "Visualization development", "Insight generation", "Reporting automation"],
    },
    {
      id: 4,
      name: "Research Coordination Team",
      role: "Collaboration",
      responsibilities: [
        "Researcher onboarding",
        "Institutional partnerships",
        "Data sharing protocols",
        "Community engagement",
      ],
    },
  ]

  const customSections = [
    {
      title: "Research Focus Areas",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Environmental Monitoring</div>
              <p className="text-sm text-muted-foreground mb-3">
                Tracking environmental changes and impacts in the Cox's Bazar region.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Climate Data</Badge>
                <Badge variant="outline">Biodiversity</Badge>
                <Badge variant="outline">Water Quality</Badge>
                <Badge variant="outline">Land Use</Badge>
              </div>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Public Health Research</div>
              <p className="text-sm text-muted-foreground mb-3">
                Analyzing health trends and outcomes in local communities.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Disease Patterns</Badge>
                <Badge variant="outline">Healthcare Access</Badge>
                <Badge variant="outline">Nutrition</Badge>
                <Badge variant="outline">Sanitation</Badge>
              </div>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Socioeconomic Analysis</div>
              <p className="text-sm text-muted-foreground mb-3">
                Studying economic factors and social dynamics in the region.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Economic Indicators</Badge>
                <Badge variant="outline">Education</Badge>
                <Badge variant="outline">Employment</Badge>
                <Badge variant="outline">Social Mobility</Badge>
              </div>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Humanitarian Response</div>
              <p className="text-sm text-muted-foreground mb-3">
                Evaluating effectiveness of humanitarian interventions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Aid Distribution</Badge>
                <Badge variant="outline">Shelter</Badge>
                <Badge variant="outline">Protection</Badge>
                <Badge variant="outline">Education</Badge>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Data Collection Status",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-3">Data Sources</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                  <span className="text-sm">Satellite Imagery</span>
                  <Badge>Active</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                  <span className="text-sm">Field Surveys</span>
                  <Badge>Active</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                  <span className="text-sm">Sensor Networks</span>
                  <Badge>Active</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                  <span className="text-sm">Public Records</span>
                  <Badge variant="outline">Pending</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                  <span className="text-sm">Community Reports</span>
                  <Badge>Active</Badge>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Data Volume</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Environmental Data</span>
                    <span className="text-sm font-medium">1.2 TB</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Health Records</span>
                    <span className="text-sm font-medium">850 GB</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Socioeconomic Surveys</span>
                    <span className="text-sm font-medium">620 GB</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Humanitarian Reports</span>
                    <span className="text-sm font-medium">780 GB</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "55%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <ProjectDashboard
      title="Infinity Nexus Project Overview"
      subtitle="Global standard data hub for scientific research with focus on Cox's Bazar"
      projectName="Infinity Nexus"
      organizationName="Nexara Research"
      startDate="February 5, 2023"
      endDate="Ongoing"
      location="Cox's Bazar, Bangladesh"
      contactPerson="Research Director"
      progress={78}
      documentsReady={16}
      totalDocuments={22}
      keyObjectives={keyObjectives}
      keyTasks={keyTasks}
      agenda={agenda}
      teamMembers={teamMembers}
      customSections={customSections}
    />
  )
}
