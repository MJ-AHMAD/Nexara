import type { Metadata } from "next"
import { ProjectDashboard } from "@/components/overview/project-dashboard"
import { Users, Heart, Star, Compass, Calendar, FileText } from "lucide-react"
import { DocumentDashboard } from "@/components/document-repository/document-dashboard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "MJ AHMAD Overview | Project Dashboard",
  description: "Comprehensive overview of MJ AHMAD's leadership initiatives and personal brand",
}

export default function MJAhmadOverviewPage() {
  const keyObjectives = [
    {
      id: 1,
      objective: "Global Leadership Development",
      description: "Establish thought leadership in technology, social impact, and community development",
      icon: <Compass className="h-5 w-5 text-primary" />,
    },
    {
      id: 2,
      objective: "Knowledge Sharing",
      description: "Create and distribute educational content to empower communities and individuals",
      icon: <Star className="h-5 w-5 text-primary" />,
    },
    {
      id: 3,
      objective: "Community Engagement",
      description: "Build meaningful connections with communities and stakeholders around the world",
      icon: <Users className="h-5 w-5 text-primary" />,
    },
    {
      id: 4,
      objective: "Humanitarian Impact",
      description: "Drive initiatives that create lasting positive change for vulnerable populations",
      icon: <Heart className="h-5 w-5 text-primary" />,
    },
  ]

  const keyTasks = [
    { id: 1, task: "Develop leadership content series", completed: true },
    { id: 2, task: "Establish mentorship program", completed: true },
    { id: 3, task: "Launch personal brand website", completed: true },
    { id: 4, task: "Create educational resource library", completed: false },
    { id: 5, task: "Organize community leadership summit", completed: false },
    { id: 6, task: "Publish thought leadership articles", completed: true },
  ]

  const agenda = [
    {
      id: 1,
      time: "Q2 2023",
      item: "Personal Brand Development",
      duration: "60 days",
      description: "Establish consistent messaging and visual identity across platforms",
    },
    {
      id: 2,
      time: "Q3 2023",
      item: "Content Strategy Implementation",
      duration: "90 days",
      description: "Create and distribute educational and inspirational content",
    },
    {
      id: 3,
      time: "Q4 2023",
      item: "Community Engagement Program",
      duration: "45 days",
      description: "Launch initiatives to connect with global communities",
    },
    {
      id: 4,
      time: "Q1 2024",
      item: "Leadership Summit Planning",
      duration: "60 days",
      description: "Organize virtual summit for emerging leaders",
    },
    {
      id: 5,
      time: "Q2 2024",
      item: "Mentorship Program Expansion",
      duration: "30 days",
      description: "Scale mentorship initiatives to reach more individuals",
    },
    {
      id: 6,
      time: "Q3 2024",
      item: "Impact Assessment",
      duration: "45 days",
      description: "Measure and report on outcomes of leadership initiatives",
    },
  ]

  const teamMembers = [
    {
      id: 1,
      name: "Content Creation Team",
      role: "Education",
      responsibilities: [
        "Educational content development",
        "Thought leadership articles",
        "Video production",
        "Social media content",
      ],
    },
    {
      id: 2,
      name: "Community Engagement Team",
      role: "Outreach",
      responsibilities: [
        "Event organization",
        "Community building",
        "Partnership development",
        "Volunteer coordination",
      ],
    },
    {
      id: 3,
      name: "Mentorship Program Team",
      role: "Development",
      responsibilities: ["Mentor recruitment", "Program curriculum", "Participant matching", "Impact assessment"],
    },
    {
      id: 4,
      name: "Brand Management Team",
      role: "Communication",
      responsibilities: ["Brand consistency", "Public relations", "Media engagement", "Digital presence"],
    },
  ]

  const customSections = [
    {
      title: "Leadership Initiatives",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Global Mentorship Program</div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Active</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Connecting experienced leaders with emerging talent across borders.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="h-4 w-4 mr-1" />
                <span>125 participants</span>
              </div>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Leadership Content Series</div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Active</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Educational content on leadership principles and practices.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Star className="h-4 w-4 mr-1" />
                <span>42 publications</span>
              </div>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Community Leadership Summit</div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-sm">Planning</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Virtual gathering of community leaders to share best practices.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Scheduled Q3 2024</span>
              </div>
            </div>
            <div className="border rounded-md p-4">
              <div className="text-lg font-medium mb-2">Educational Resource Library</div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-sm">In Development</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Comprehensive collection of leadership and development resources.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <FileText className="h-4 w-4 mr-1" />
                <span>68 resources created</span>
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
              <div className="text-3xl font-bold">12,500+</div>
              <div className="text-sm text-muted-foreground">People Reached</div>
            </div>
            <div className="bg-muted rounded-md p-4 text-center">
              <div className="text-3xl font-bold">35</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="bg-muted rounded-md p-4 text-center">
              <div className="text-3xl font-bold">87%</div>
              <div className="text-sm text-muted-foreground">Positive Feedback</div>
            </div>
          </div>

          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-3">Key Performance Indicators</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Community Engagement</span>
                  <span className="text-sm font-medium">92%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Content Effectiveness</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Mentorship Success Rate</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Global Reach</span>
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
    {
      title: "Nexara Document Repository",
      content: <DocumentDashboard />,
    },
  ]

  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="overview">Leadership Overview</TabsTrigger>
        <TabsTrigger value="documents">Document Repository</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="mt-6">
        <ProjectDashboard
          title="MJ AHMAD Leadership Overview"
          subtitle="Personal brand and leadership initiatives focused on global impact"
          projectName="MJ AHMAD"
          organizationName="Personal Brand"
          startDate="March 10, 2023"
          endDate="Ongoing"
          location="Global"
          contactPerson="MJ Ahmad"
          progress={85}
          documentsReady={22}
          totalDocuments={26}
          keyObjectives={keyObjectives}
          keyTasks={keyTasks}
          agenda={agenda}
          teamMembers={teamMembers}
          customSections={customSections.slice(0, 2)}
        />
      </TabsContent>
      <TabsContent value="documents" className="mt-6">
        <div className="space-y-6">
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Nexara Document Repository</h2>
            <p className="text-muted-foreground">Comprehensive document management system for all Nexara initiatives</p>
          </div>
          <DocumentDashboard />
        </div>
      </TabsContent>
    </Tabs>
  )
}
