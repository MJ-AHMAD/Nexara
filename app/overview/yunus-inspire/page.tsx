import type { Metadata } from "next"
import { ProjectDashboard } from "@/components/overview/project-dashboard"
import { Target, Briefcase, Globe, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Yunus Inspire Overview | Project Dashboard",
  description: "Comprehensive overview of the Yunus Inspire social business initiatives",
}

export default function YunusInspireOverviewPage() {
  const keyObjectives = [
    {
      id: 1,
      objective: "Social Business Development",
      description: "Create sustainable social businesses that address community needs while being financially viable",
      icon: <Briefcase className="h-5 w-5 text-primary" />,
    },
    {
      id: 2,
      objective: "Community Empowerment",
      description: "Empower local communities through skills development, employment, and ownership",
      icon: <Users className="h-5 w-5 text-primary" />,
    },
    {
      id: 3,
      objective: "Global Collaboration",
      description: "Foster international partnerships to scale successful social business models",
      icon: <Globe className="h-5 w-5 text-primary" />,
    },
    {
      id: 4,
      objective: "Social Impact Measurement",
      description: "Develop robust frameworks to measure and communicate social impact",
      icon: <Target className="h-5 w-5 text-primary" />,
    },
  ]

  const keyTasks = [
    { id: 1, task: "Complete social business model canvas", completed: true },
    { id: 2, task: "Establish community partnerships", completed: true },
    { id: 3, task: "Develop impact measurement framework", completed: false },
    { id: 4, task: "Launch pilot social businesses", completed: true },
    { id: 5, task: "Create training curriculum", completed: true },
    { id: 6, task: "Secure seed funding for expansion", completed: false },
  ]

  const agenda = [
    {
      id: 1,
      time: "Q2 2023",
      item: "Social Business Model Development",
      duration: "60 days",
      description: "Design sustainable business models that address community needs",
    },
    {
      id: 2,
      time: "Q3 2023",
      item: "Community Engagement & Training",
      duration: "90 days",
      description: "Build local capacity and establish community partnerships",
    },
    {
      id: 3,
      time: "Q4 2023",
      item: "Pilot Business Launch",
      duration: "45 days",
      description: "Launch initial social businesses in target communities",
    },
    {
      id: 4,
      time: "Q1 2024",
      item: "Impact Measurement Implementation",
      duration: "30 days",
      description: "Deploy frameworks to track social and economic outcomes",
    },
    {
      id: 5,
      time: "Q2 2024",
      item: "Scaling Strategy Development",
      duration: "60 days",
      description: "Create plans for expanding successful business models",
    },
    {
      id: 6,
      time: "Q3 2024",
      item: "Knowledge Sharing Platform",
      duration: "45 days",
      description: "Build resources to share learnings and best practices",
    },
  ]

  const teamMembers = [
    {
      id: 1,
      name: "Business Development Team",
      role: "Strategy",
      responsibilities: ["Business model design", "Financial planning", "Market analysis", "Sustainability assessment"],
    },
    {
      id: 2,
      name: "Community Engagement Team",
      role: "Outreach",
      responsibilities: [
        "Community needs assessment",
        "Partnership building",
        "Training coordination",
        "Local leadership development",
      ],
    },
    {
      id: 3,
      name: "Impact Measurement Team",
      role: "Evaluation",
      responsibilities: [
        "Framework development",
        "Data collection",
        "Analysis and reporting",
        "Continuous improvement",
      ],
    },
    {
      id: 4,
      name: "Operations Team",
      role: "Implementation",
      responsibilities: ["Business setup", "Supply chain management", "Quality control", "Operational efficiency"],
    },
  ]

  const customSections = [
    {
      title: "Active Social Businesses",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Community Craft Cooperative</div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Operational</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Artisan cooperative producing handcrafted goods for local and international markets.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Employees: 28</span>
                <span className="text-muted-foreground">Revenue: $42,500</span>
              </div>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Sustainable Agriculture Initiative</div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Operational</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Organic farming collective providing nutritious food and stable income for farmers.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Farmers: 45</span>
                <span className="text-muted-foreground">Land: 12 hectares</span>
              </div>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Clean Water Enterprise</div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Operational</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Community-based water purification and distribution system providing clean water access.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Communities: 8</span>
                <span className="text-muted-foreground">People served: 12,500</span>
              </div>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Vocational Training Center</div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-sm">Expanding</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Skills development center providing training and job placement services.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Trainees: 120</span>
                <span className="text-muted-foreground">Placement rate: 78%</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Impact Metrics",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-muted rounded-md p-4 text-center">
              <div className="text-3xl font-bold">245</div>
              <div className="text-sm text-muted-foreground">Jobs Created</div>
            </div>
            <div className="bg-muted rounded-md p-4 text-center">
              <div className="text-3xl font-bold">15,800+</div>
              <div className="text-sm text-muted-foreground">Lives Impacted</div>
            </div>
            <div className="bg-muted rounded-md p-4 text-center">
              <div className="text-3xl font-bold">7</div>
              <div className="text-sm text-muted-foreground">Social Businesses</div>
            </div>
          </div>

          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-3">Sustainable Development Goals Contribution</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-blue-50 p-3 rounded-md text-center">
                <div className="text-blue-600 font-medium">SDG 1</div>
                <div className="text-xs text-muted-foreground">No Poverty</div>
              </div>
              <div className="bg-green-50 p-3 rounded-md text-center">
                <div className="text-green-600 font-medium">SDG 2</div>
                <div className="text-xs text-muted-foreground">Zero Hunger</div>
              </div>
              <div className="bg-red-50 p-3 rounded-md text-center">
                <div className="text-red-600 font-medium">SDG 3</div>
                <div className="text-xs text-muted-foreground">Good Health</div>
              </div>
              <div className="bg-purple-50 p-3 rounded-md text-center">
                <div className="text-purple-600 font-medium">SDG 5</div>
                <div className="text-xs text-muted-foreground">Gender Equality</div>
              </div>
              <div className="bg-blue-50 p-3 rounded-md text-center">
                <div className="text-blue-600 font-medium">SDG 6</div>
                <div className="text-xs text-muted-foreground">Clean Water</div>
              </div>
              <div className="bg-yellow-50 p-3 rounded-md text-center">
                <div className="text-yellow-600 font-medium">SDG 8</div>
                <div className="text-xs text-muted-foreground">Decent Work</div>
              </div>
              <div className="bg-orange-50 p-3 rounded-md text-center">
                <div className="text-orange-600 font-medium">SDG 10</div>
                <div className="text-xs text-muted-foreground">Reduced Inequalities</div>
              </div>
              <div className="bg-green-50 p-3 rounded-md text-center">
                <div className="text-green-600 font-medium">SDG 12</div>
                <div className="text-xs text-muted-foreground">Responsible Consumption</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <ProjectDashboard
      title="Yunus Inspire Project Overview"
      subtitle="Social business initiatives inspired by Nobel Laureate Muhammad Yunus"
      projectName="Yunus Inspire"
      organizationName="Nexara Social Impact"
      startDate="April 12, 2023"
      endDate="Ongoing"
      location="Cox's Bazar, Bangladesh"
      contactPerson="Social Business Director"
      progress={65}
      documentsReady={14}
      totalDocuments={20}
      keyObjectives={keyObjectives}
      keyTasks={keyTasks}
      agenda={agenda}
      teamMembers={teamMembers}
      customSections={customSections}
    />
  )
}
