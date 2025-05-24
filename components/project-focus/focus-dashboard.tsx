"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  BarChart,
  Target,
  Clock,
  Calendar,
  CheckCircle2,
  AlertCircle,
  FileText,
  Users,
  MessageSquare,
  Bell,
  Plus,
  MoreHorizontal,
  Zap,
  Flame,
  Lightbulb,
} from "lucide-react"
import { ProjectMetrics } from "./project-metrics"
import { TaskList } from "./task-list"
import { ActivityFeed } from "./activity-feed"
import { TeamMembers } from "./team-members"
import { MilestoneTimeline } from "./milestone-timeline"
import { ProjectInsights } from "./project-insights"
import { FocusTimer } from "./focus-timer"
import { DistractionBlocker } from "./distraction-blocker"

// Sample project data
const sampleProjects = [
  {
    id: "proj-1",
    name: "Website Redesign",
    description: "Complete overhaul of company website with modern design and improved UX",
    progress: 68,
    priority: "High",
    dueDate: "2023-12-15",
    status: "In Progress",
    owner: "Alex Johnson",
    team: ["alex", "sarah", "michael", "jessica"],
    tasks: {
      total: 24,
      completed: 16,
      inProgress: 5,
      blocked: 3,
    },
    milestones: [
      { id: "ms-1", name: "Design Approval", dueDate: "2023-10-10", completed: true },
      { id: "ms-2", name: "Frontend Development", dueDate: "2023-11-15", completed: true },
      { id: "ms-3", name: "Backend Integration", dueDate: "2023-11-30", completed: false },
      { id: "ms-4", name: "Testing & QA", dueDate: "2023-12-10", completed: false },
      { id: "ms-5", name: "Launch", dueDate: "2023-12-15", completed: false },
    ],
    recentActivities: [
      {
        id: "act-1",
        user: "sarah",
        action: "completed task",
        item: "Implement responsive design",
        time: "2 hours ago",
      },
      { id: "act-2", user: "michael", action: "commented on", item: "API Integration", time: "4 hours ago" },
      { id: "act-3", user: "alex", action: "updated", item: "Project timeline", time: "Yesterday" },
    ],
  },
  {
    id: "proj-2",
    name: "Mobile App Development",
    description: "Create a cross-platform mobile application for customer engagement",
    progress: 42,
    priority: "Medium",
    dueDate: "2024-01-20",
    status: "In Progress",
    owner: "Sarah Williams",
    team: ["sarah", "david", "emma", "alex"],
    tasks: {
      total: 32,
      completed: 13,
      inProgress: 8,
      blocked: 1,
    },
    milestones: [
      { id: "ms-1", name: "Requirements Gathering", dueDate: "2023-09-30", completed: true },
      { id: "ms-2", name: "UI/UX Design", dueDate: "2023-10-31", completed: true },
      { id: "ms-3", name: "Core Functionality", dueDate: "2023-12-15", completed: false },
      { id: "ms-4", name: "Beta Testing", dueDate: "2024-01-10", completed: false },
      { id: "ms-5", name: "App Store Submission", dueDate: "2024-01-20", completed: false },
    ],
    recentActivities: [
      { id: "act-1", user: "emma", action: "uploaded", item: "New app icons", time: "1 hour ago" },
      { id: "act-2", user: "david", action: "fixed bug in", item: "Authentication module", time: "Yesterday" },
      { id: "act-3", user: "sarah", action: "scheduled", item: "Team review meeting", time: "2 days ago" },
    ],
  },
  {
    id: "proj-3",
    name: "Market Expansion Strategy",
    description: "Research and develop strategy for entering new international markets",
    progress: 25,
    priority: "Critical",
    dueDate: "2023-12-31",
    status: "At Risk",
    owner: "Michael Chen",
    team: ["michael", "jessica", "robert", "emma"],
    tasks: {
      total: 18,
      completed: 4,
      inProgress: 6,
      blocked: 2,
    },
    milestones: [
      { id: "ms-1", name: "Market Research", dueDate: "2023-10-31", completed: true },
      { id: "ms-2", name: "Competitor Analysis", dueDate: "2023-11-15", completed: false },
      { id: "ms-3", name: "Strategy Development", dueDate: "2023-12-10", completed: false },
      { id: "ms-4", name: "Executive Presentation", dueDate: "2023-12-20", completed: false },
      { id: "ms-5", name: "Implementation Plan", dueDate: "2023-12-31", completed: false },
    ],
    recentActivities: [
      { id: "act-1", user: "robert", action: "added", item: "New market research data", time: "3 hours ago" },
      { id: "act-2", user: "michael", action: "updated", item: "Risk assessment", time: "Yesterday" },
      {
        id: "act-3",
        user: "jessica",
        action: "completed",
        item: "Competitor analysis for Region A",
        time: "3 days ago",
      },
    ],
  },
]

export function FocusDashboard() {
  const [activeProject, setActiveProject] = useState(sampleProjects[0])
  const [focusMode, setFocusMode] = useState(false)
  const [showNewProjectForm, setShowNewProjectForm] = useState(false)
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    dueDate: "",
    priority: "Medium",
  })

  // Calculate days remaining
  const calculateDaysRemaining = (dueDate: string) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const daysRemaining = calculateDaysRemaining(activeProject.dueDate)

  // Status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500 hover:bg-green-600"
      case "In Progress":
        return "bg-blue-500 hover:bg-blue-600"
      case "At Risk":
        return "bg-amber-500 hover:bg-amber-600"
      case "Delayed":
        return "bg-red-500 hover:bg-red-600"
      default:
        return "bg-slate-500 hover:bg-slate-600"
    }
  }

  // Priority badge color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "bg-red-500 hover:bg-red-600"
      case "High":
        return "bg-orange-500 hover:bg-orange-600"
      case "Medium":
        return "bg-blue-500 hover:bg-blue-600"
      case "Low":
        return "bg-green-500 hover:bg-green-600"
      default:
        return "bg-slate-500 hover:bg-slate-600"
    }
  }

  // Toggle focus mode
  const toggleFocusMode = () => {
    setFocusMode(!focusMode)
  }

  // Handle new project form
  const handleNewProjectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewProject((prev) => ({ ...prev, [name]: value }))
  }

  const handleNewProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would save the new project to your backend
    console.log("New project:", newProject)
    setShowNewProjectForm(false)
    setNewProject({
      name: "",
      description: "",
      dueDate: "",
      priority: "Medium",
    })
  }

  return (
    <div className={`container mx-auto p-4 transition-all duration-300 ${focusMode ? "max-w-4xl" : "max-w-7xl"}`}>
      {/* Header with Focus Mode Toggle */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <Target className="mr-2 h-8 w-8 text-primary" />
            Project Focus Dashboard
          </h1>
          <p className="text-muted-foreground">Stay focused on your most important targets and projects</p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant={focusMode ? "default" : "outline"}
            onClick={toggleFocusMode}
            className="flex items-center gap-2"
          >
            <Zap className={`h-4 w-4 ${focusMode ? "text-white" : "text-amber-500"}`} />
            {focusMode ? "Exit Focus Mode" : "Enter Focus Mode"}
          </Button>
          <Button onClick={() => setShowNewProjectForm(true)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>

      {/* Project Selection (Hidden in Focus Mode) */}
      {!focusMode && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {sampleProjects.map((project) => (
            <Card
              key={project.id}
              className={`cursor-pointer transition-all hover:shadow-md ${activeProject.id === project.id ? "ring-2 ring-primary" : ""}`}
              onClick={() => setActiveProject(project)}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <Badge className={getPriorityColor(project.priority)}>{project.priority}</Badge>
                </div>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex justify-between items-center mb-2 text-sm">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                    {calculateDaysRemaining(project.dueDate)} days left
                  </span>
                  <Badge variant="outline" className={`${getStatusColor(project.status)} text-white`}>
                    {project.status}
                  </Badge>
                </div>
                <Progress value={project.progress} className="h-2" />
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex justify-between items-center w-full">
                  <div className="flex -space-x-2">
                    {project.team.slice(0, 3).map((member, i) => (
                      <Avatar key={i} className="h-6 w-6 border-2 border-background">
                        <AvatarFallback className="text-xs">{member.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                    ))}
                    {project.team.length > 3 && (
                      <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs border-2 border-background">
                        +{project.team.length - 3}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    {project.tasks.completed}/{project.tasks.total}
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* Active Project Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - 2/3 width on large screens */}
        <div className="lg:col-span-2 space-y-6">
          {/* Project Header */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <div>
                  <CardTitle className="text-2xl flex items-center">
                    {activeProject.name}
                    <Badge className={`ml-3 ${getPriorityColor(activeProject.priority)}`}>
                      {activeProject.priority}
                    </Badge>
                    <Badge variant="outline" className={`ml-2 ${getStatusColor(activeProject.status)} text-white`}>
                      {activeProject.status}
                    </Badge>
                  </CardTitle>
                  <CardDescription className="mt-1">{activeProject.description}</CardDescription>
                </div>
                <Button variant="outline" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground">Progress</div>
                  <div className="text-2xl font-bold">{activeProject.progress}%</div>
                  <Progress value={activeProject.progress} className="h-2 mt-2" />
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground">Due Date</div>
                  <div className="text-2xl font-bold flex items-center">
                    <Calendar className="h-5 w-5 mr-1 text-muted-foreground" />
                    <span>
                      {new Date(activeProject.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </span>
                  </div>
                  <div className={`text-sm mt-1 ${daysRemaining < 7 ? "text-red-500" : "text-muted-foreground"}`}>
                    {daysRemaining} days remaining
                  </div>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground">Tasks</div>
                  <div className="text-2xl font-bold">
                    {activeProject.tasks.completed}/{activeProject.tasks.total}
                  </div>
                  <div className="grid grid-cols-3 gap-1 mt-2">
                    <div className="text-xs">
                      <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-1"></span>
                      Done: {activeProject.tasks.completed}
                    </div>
                    <div className="text-xs">
                      <span className="inline-block h-2 w-2 rounded-full bg-blue-500 mr-1"></span>
                      Active: {activeProject.tasks.inProgress}
                    </div>
                    <div className="text-xs">
                      <span className="inline-block h-2 w-2 rounded-full bg-red-500 mr-1"></span>
                      Blocked: {activeProject.tasks.blocked}
                    </div>
                  </div>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground">Team</div>
                  <div className="text-2xl font-bold">{activeProject.team.length}</div>
                  <div className="flex mt-2 -space-x-2">
                    {activeProject.team.slice(0, 4).map((member, i) => (
                      <Avatar key={i} className="h-6 w-6 border-2 border-background">
                        <AvatarFallback className="text-xs">{member.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                    ))}
                    {activeProject.team.length > 4 && (
                      <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs border-2 border-background">
                        +{activeProject.team.length - 4}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs for Tasks, Timeline, and Activity */}
          <Tabs defaultValue="tasks">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="tasks" className="flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Tasks
              </TabsTrigger>
              <TabsTrigger value="timeline" className="flex items-center">
                <BarChart className="h-4 w-4 mr-2" />
                Timeline
              </TabsTrigger>
              <TabsTrigger value="activity" className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                Activity
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tasks">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle>Project Tasks</CardTitle>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-1" />
                      Add Task
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <TaskList />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="timeline">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Project Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <MilestoneTimeline milestones={activeProject.milestones} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <ActivityFeed activities={activeProject.recentActivities} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Project Metrics */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Project Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <ProjectMetrics />
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - 1/3 width on large screens */}
        <div className="space-y-6">
          {/* Focus Timer (Only visible in focus mode) */}
          {focusMode && (
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Flame className="h-5 w-5 mr-2 text-primary" />
                  Focus Session
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FocusTimer />
              </CardContent>
            </Card>
          )}

          {/* Team Members */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-muted-foreground" />
                  Team
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-xs">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <TeamMembers />
            </CardContent>
          </Card>

          {/* Project Insights */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-amber-500" />
                AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ProjectInsights />
            </CardContent>
          </Card>

          {/* Distraction Blocker (Only visible in focus mode) */}
          {focusMode && (
            <Card className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-red-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                  Distraction Blocker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <DistractionBlocker />
              </CardContent>
            </Card>
          )}

          {/* Upcoming Deadlines */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                Upcoming Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeProject.milestones
                  .filter((m) => !m.completed)
                  .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
                  .slice(0, 3)
                  .map((milestone) => (
                    <div key={milestone.id} className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{milestone.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(milestone.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        </div>
                      </div>
                      <div
                        className={`text-sm ${
                          calculateDaysRemaining(milestone.dueDate) < 3
                            ? "text-red-500"
                            : calculateDaysRemaining(milestone.dueDate) < 7
                              ? "text-amber-500"
                              : "text-muted-foreground"
                        }`}
                      >
                        {calculateDaysRemaining(milestone.dueDate)} days left
                      </div>
                    </div>
                  ))}
                {activeProject.milestones.filter((m) => !m.completed).length === 0 && (
                  <div className="text-center py-4 text-muted-foreground">All milestones completed!</div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline" className="justify-start">
                  <Bell className="h-4 w-4 mr-2" />
                  Set Reminder
                </Button>
                <Button variant="outline" className="justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Team Meeting
                </Button>
                <Button variant="outline" className="justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send Update
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* New Project Form Modal */}
      {showNewProjectForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Create New Project</CardTitle>
              <CardDescription>Add a new project to track and manage</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleNewProjectSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Project Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={newProject.name}
                    onChange={handleNewProjectChange}
                    placeholder="Enter project name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Description
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    value={newProject.description}
                    onChange={handleNewProjectChange}
                    placeholder="Enter project description"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="dueDate" className="text-sm font-medium">
                      Due Date
                    </label>
                    <Input
                      id="dueDate"
                      name="dueDate"
                      type="date"
                      value={newProject.dueDate}
                      onChange={handleNewProjectChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="priority" className="text-sm font-medium">
                      Priority
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      value={newProject.priority}
                      onChange={handleNewProjectChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                      <option value="Critical">Critical</option>
                    </select>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setShowNewProjectForm(false)}>
                Cancel
              </Button>
              <Button onClick={handleNewProjectSubmit}>Create Project</Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  )
}
