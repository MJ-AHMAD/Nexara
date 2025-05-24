import type { Metadata } from "next"
import { ProjectDashboard } from "@/components/overview/project-dashboard"
import { BarChart2, Globe, Zap, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Nexara Overview | Project Dashboard",
  description: "Comprehensive overview of the Nexara platform and initiatives",
}

export default function NexaraOverviewPage() {
  const keyObjectives = [
    {
      id: 1,
      objective: "Unified Platform Development",
      description:
        "Create a seamless platform that integrates all Nexara initiatives and provides a cohesive user experience",
      icon: <BarChart2 className="h-5 w-5 text-primary" />,
    },
    {
      id: 2,
      objective: "Global Community Building",
      description:
        "Foster a diverse, inclusive community of contributors, developers, and users across all Nexara projects",
      icon: <Globe className="h-5 w-5 text-primary" />,
    },
    {
      id: 3,
      objective: "Open Source Excellence",
      description: "Establish best practices for open source development, documentation, and community governance",
      icon: <Shield className="h-5 w-5 text-primary" />,
    },
    {
      id: 4,
      objective: "Innovation Acceleration",
      description:
        "Drive technological innovation through collaborative research and development across all initiatives",
      icon: <Zap className="h-5 w-5 text-primary" />,
    },
  ]

  const keyTasks = [
    { id: 1, task: "Complete platform integration architecture", completed: true },
    { id: 2, task: "Establish unified design system", completed: true },
    { id: 3, task: "Implement cross-project authentication", completed: false },
    { id: 4, task: "Create comprehensive documentation hub", completed: false },
    { id: 5, task: "Launch community contribution portal", completed: true },
    { id: 6, task: "Develop analytics dashboard for all projects", completed: false },
  ]

  const agenda = [
    {
      id: 1,
      time: "Q2 2023",
      item: "Platform Architecture Design",
      duration: "90 days",
      description: "Define core architecture and integration patterns for all Nexara projects",
    },
    {
      id: 2,
      time: "Q3 2023",
      item: "Initial Integration Implementation",
      duration: "60 days",
      description: "Connect core systems and establish shared authentication",
    },
    {
      id: 3,
      time: "Q4 2023",
      item: "Community Portal Development",
      duration: "45 days",
      description: "Build contributor onboarding and project management tools",
    },
    {
      id: 4,
      time: "Q1 2024",
      item: "Documentation System Launch",
      duration: "30 days",
      description: "Deploy comprehensive documentation with multi-project search",
    },
    {
      id: 5,
      time: "Q2 2024",
      item: "Analytics & Insights Platform",
      duration: "60 days",
      description: "Implement cross-project metrics and reporting",
    },
    {
      id: 6,
      time: "Q3 2024",
      item: "Global Community Summit",
      duration: "14 days",
      description: "Host virtual summit for all Nexara project contributors",
    },
  ]

  const teamMembers = [
    {
      id: 1,
      name: "Platform Architecture Team",
      role: "Technical Foundation",
      responsibilities: [
        "System architecture design",
        "Integration patterns",
        "Performance optimization",
        "Security implementation",
      ],
    },
    {
      id: 2,
      name: "User Experience Team",
      role: "Interface Design",
      responsibilities: [
        "Design system development",
        "User research",
        "Accessibility compliance",
        "Interface prototyping",
      ],
    },
    {
      id: 3,
      name: "Community Management Team",
      role: "Engagement",
      responsibilities: [
        "Contributor onboarding",
        "Documentation oversight",
        "Community events",
        "Support coordination",
      ],
    },
    {
      id: 4,
      name: "Project Management Office",
      role: "Coordination",
      responsibilities: ["Cross-project planning", "Resource allocation", "Timeline management", "Risk assessment"],
    },
  ]

  const customSections = [
    {
      title: "Platform Integration Status",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Authentication</div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Completed</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Unified authentication system implemented across all projects with SSO support.
              </p>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Design System</div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Completed</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Shared component library and design tokens established for consistent UX.
              </p>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Data Exchange</div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-sm">In Progress</span>
              </div>
              <p className="text-sm text-muted-foreground">API gateway and data sharing protocols under development.</p>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Analytics</div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-sm">In Progress</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Unified metrics collection and reporting dashboard in development.
              </p>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Documentation</div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm">Planning</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Centralized documentation system with cross-project search planned.
              </p>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Deployment</div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm">Planning</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Unified CI/CD pipeline and infrastructure management in planning phase.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Project Interdependencies",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground mb-4">
            Nexara serves as the central hub connecting all initiatives. This diagram shows the relationships and
            dependencies between projects.
          </p>
          <div className="border rounded-md p-6 bg-muted/30">
            <div className="flex flex-col items-center">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md mb-4 font-medium">
                Nexara Platform
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-md mb-2 text-sm font-medium w-full text-center">
                    Infinity Nexus
                  </div>
                  <div className="border-l-2 border-dashed h-8 border-blue-300"></div>
                  <div className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs w-full text-center">
                    Data Research
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-green-100 text-green-800 px-3 py-2 rounded-md mb-2 text-sm font-medium w-full text-center">
                    Yunus Inspire
                  </div>
                  <div className="border-l-2 border-dashed h-8 border-green-300"></div>
                  <div className="bg-green-50 text-green-600 px-2 py-1 rounded text-xs w-full text-center">
                    Social Business
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-md mb-2 text-sm font-medium w-full text-center">
                    Trusted Ally
                  </div>
                  <div className="border-l-2 border-dashed h-8 border-purple-300"></div>
                  <div className="bg-purple-50 text-purple-600 px-2 py-1 rounded text-xs w-full text-center">
                    Community Support
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-amber-100 text-amber-800 px-3 py-2 rounded-md mb-2 text-sm font-medium w-full text-center">
                    MJ AHMAD
                  </div>
                  <div className="border-l-2 border-dashed h-8 border-amber-300"></div>
                  <div className="bg-amber-50 text-amber-600 px-2 py-1 rounded text-xs w-full text-center">
                    Leadership
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
      title="Nexara Platform Overview"
      subtitle="Unified platform for innovation, education, and community development"
      projectName="Nexara"
      organizationName="Nexara Foundation"
      startDate="January 15, 2023"
      endDate="Ongoing"
      location="Global"
      contactPerson="Platform Team"
      progress={72}
      documentsReady={18}
      totalDocuments={25}
      keyObjectives={keyObjectives}
      keyTasks={keyTasks}
      agenda={agenda}
      teamMembers={teamMembers}
      customSections={customSections}
    />
  )
}
