import type { Metadata } from "next"
import { ProjectDashboard } from "@/components/overview/project-dashboard"
import { Heart, Users, LifeBuoy, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Trusted Ally Overview | Project Dashboard",
  description: "Comprehensive overview of the Trusted Ally community support programs",
}

export default function TrustedAllyOverviewPage() {
  const keyObjectives = [
    {
      id: 1,
      objective: "Community Support Programs",
      description: "Develop and implement comprehensive support programs for vulnerable communities",
      icon: <Heart className="h-5 w-5 text-primary" />,
    },
    {
      id: 2,
      objective: "Emergency Response Readiness",
      description: "Establish systems and resources for rapid response to community emergencies",
      icon: <LifeBuoy className="h-5 w-5 text-primary" />,
    },
    {
      id: 3,
      objective: "Community Resilience Building",
      description: "Strengthen community capacity to withstand and recover from challenges",
      icon: <Shield className="h-5 w-5 text-primary" />,
    },
    {
      id: 4,
      objective: "Inclusive Development",
      description: "Ensure all community members, especially the most vulnerable, benefit from development",
      icon: <Users className="h-5 w-5 text-primary" />,
    },
  ]

  const keyTasks = [
    { id: 1, task: "Complete community needs assessment", completed: true },
    { id: 2, task: "Establish community support centers", completed: true },
    { id: 3, task: "Train community volunteers", completed: true },
    { id: 4, task: "Develop emergency response protocols", completed: false },
    { id: 5, task: "Create resource distribution system", completed: true },
    { id: 6, task: "Implement monitoring and evaluation framework", completed: false },
  ]

  const agenda = [
    {
      id: 1,
      time: "Q2 2023",
      item: "Community Assessment & Planning",
      duration: "60 days",
      description: "Conduct comprehensive needs assessment and program planning",
    },
    {
      id: 2,
      time: "Q3 2023",
      item: "Infrastructure Development",
      duration: "90 days",
      description: "Establish physical and organizational infrastructure for programs",
    },
    {
      id: 3,
      time: "Q4 2023",
      item: "Capacity Building",
      duration: "45 days",
      description: "Train staff, volunteers, and community leaders",
    },
    {
      id: 4,
      time: "Q1 2024",
      item: "Program Implementation",
      duration: "60 days",
      description: "Launch core community support programs",
    },
    {
      id: 5,
      time: "Q2 2024",
      item: "Monitoring & Evaluation",
      duration: "30 days",
      description: "Implement systems to track outcomes and impact",
    },
    {
      id: 6,
      time: "Q3 2024",
      item: "Program Refinement",
      duration: "45 days",
      description: "Adjust programs based on feedback and evaluation",
    },
  ]

  const teamMembers = [
    {
      id: 1,
      name: "Program Development Team",
      role: "Strategy",
      responsibilities: ["Needs assessment", "Program design", "Implementation planning", "Resource allocation"],
    },
    {
      id: 2,
      name: "Community Engagement Team",
      role: "Outreach",
      responsibilities: [
        "Community mobilization",
        "Volunteer coordination",
        "Local partnerships",
        "Feedback collection",
      ],
    },
    {
      id: 3,
      name: "Emergency Response Team",
      role: "Preparedness",
      responsibilities: ["Response planning", "Training coordination", "Resource management", "Coordination systems"],
    },
    {
      id: 4,
      name: "Monitoring & Evaluation Team",
      role: "Assessment",
      responsibilities: ["Framework development", "Data collection", "Impact assessment", "Reporting and learning"],
    },
  ]

  const customSections = [
    {
      title: "Active Support Programs",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Emergency Relief Distribution</div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Active</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Coordinated distribution of essential supplies during emergencies.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Communities: 12</span>
                <span className="text-muted-foreground">Beneficiaries: 8,500</span>
              </div>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Health & Wellness Program</div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Active</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Preventive healthcare, wellness education, and medical referrals.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Clinics: 5</span>
                <span className="text-muted-foreground">Patients: 3,200</span>
              </div>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Education Support Initiative</div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Active</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Access to educational resources, tutoring, and school supplies.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Schools: 8</span>
                <span className="text-muted-foreground">Students: 1,850</span>
              </div>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Community Resilience Training</div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-sm">Expanding</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Disaster preparedness and community leadership development.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Leaders trained: 120</span>
                <span className="text-muted-foreground">Communities: 9</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Community Impact",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-muted rounded-md p-4 text-center">
              <div className="text-3xl font-bold">18,500+</div>
              <div className="text-sm text-muted-foreground">People Supported</div>
            </div>
            <div className="bg-muted rounded-md p-4 text-center">
              <div className="text-3xl font-bold">24</div>
              <div className="text-sm text-muted-foreground">Communities</div>
            </div>
            <div className="bg-muted rounded-md p-4 text-center">
              <div className="text-3xl font-bold">9</div>
              <div className="text-sm text-muted-foreground">Support Programs</div>
            </div>
          </div>

          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-3">Program Effectiveness</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Emergency Response</span>
                  <span className="text-sm font-medium">92%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Health Outcomes</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Education Access</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Community Resilience</span>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "65%" }}></div>
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
      title="Trusted Ally Project Overview"
      subtitle="Community support and development programs for Cox's Bazar region"
      projectName="Trusted Ally"
      organizationName="Nexara Community"
      startDate="May 20, 2023"
      endDate="Ongoing"
      location="Cox's Bazar, Bangladesh"
      contactPerson="Community Director"
      progress={82}
      documentsReady={19}
      totalDocuments={24}
      keyObjectives={keyObjectives}
      keyTasks={keyTasks}
      agenda={agenda}
      teamMembers={teamMembers}
      customSections={customSections}
    />
  )
}
