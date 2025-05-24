"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ProjectFolderStructure } from "@/components/meeting-preparation/project-folder-structure"
import { Calendar, Clock, Users, FileText, Download, Share2, Printer, ArrowLeft } from "lucide-react"
import NextLink from "next/link"

export interface ProjectDashboardProps {
  title: string
  subtitle: string
  projectName: string
  organizationName: string
  startDate: string
  endDate: string
  location: string
  contactPerson: string
  progress: number
  documentsReady: number
  totalDocuments: number
  keyObjectives: {
    id: number
    objective: string
    description: string
    icon: React.ReactNode
  }[]
  keyTasks: {
    id: number
    task: string
    completed: boolean
  }[]
  agenda: {
    id: number
    time: string
    item: string
    duration: string
    description?: string
  }[]
  teamMembers: {
    id: number
    name: string
    role: string
    responsibilities: string[]
  }[]
  folderStructure?: any // We'll use the existing component but with custom data
  customSections?: {
    title: string
    content: React.ReactNode
  }[]
}

export function ProjectDashboard({
  title,
  subtitle,
  projectName,
  organizationName,
  startDate,
  endDate,
  location,
  contactPerson,
  progress,
  documentsReady,
  totalDocuments,
  keyObjectives,
  keyTasks,
  agenda,
  teamMembers,
  folderStructure,
  customSections,
}: ProjectDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <NextLink href="/overview">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Button>
            </NextLink>
            <Badge variant="outline" className="text-xs">
              {organizationName}
            </Badge>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Project Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">Start: {startDate}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">End: {endDate}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">Contact: {contactPerson}</span>
              </div>
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">Location: {location}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Project Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-sm font-medium">Project:</span>
                <Badge variant="outline" className="ml-2">
                  {projectName}
                </Badge>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium">Organization:</span>
                <span className="text-sm ml-2">{organizationName}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium">Focus Area:</span>
                <span className="text-sm ml-2">{location}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium">Status:</span>
                <Badge className="ml-2" variant="default">
                  Active
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Project Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm font-medium">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted rounded-md p-2 text-center">
                  <div className="text-2xl font-bold">{documentsReady}</div>
                  <div className="text-xs text-muted-foreground">Documents Ready</div>
                </div>
                <div className="bg-muted rounded-md p-2 text-center">
                  <div className="text-2xl font-bold">{totalDocuments}</div>
                  <div className="text-xs text-muted-foreground">Total Documents</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="agenda">Agenda</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keyObjectives.map((objective) => (
                    <div key={objective.id} className="flex items-start">
                      <div className="mt-0.5 mr-3 bg-primary/10 p-2 rounded-md">{objective.icon}</div>
                      <div>
                        <h4 className="font-medium">{objective.objective}</h4>
                        <p className="text-sm text-muted-foreground">{objective.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="border rounded-md p-3">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{member.name}</h4>
                        <Badge variant="outline">{member.role}</Badge>
                      </div>
                      <div className="text-sm">
                        <h5 className="font-medium text-muted-foreground mb-1">Responsibilities:</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          {member.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {customSections &&
            customSections.map((section, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent>{section.content}</CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Project Documents</CardTitle>
            </CardHeader>
            <CardContent>{folderStructure ? folderStructure : <ProjectFolderStructure />}</CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="agenda">
          <Card>
            <CardHeader>
              <CardTitle>Project Agenda</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Timeline</h3>
                  <Badge variant="outline">
                    Total:{" "}
                    {agenda.reduce((acc, item) => {
                      const minutes = Number.parseInt(item.duration.split(" ")[0])
                      return acc + minutes
                    }, 0)}{" "}
                    minutes
                  </Badge>
                </div>

                <div className="space-y-2">
                  {agenda.map((item) => (
                    <div key={item.id} className="flex items-start p-3 rounded-md border">
                      <div className="flex-shrink-0 w-16 text-center">
                        <div className="font-medium">{item.time}</div>
                        <div className="text-xs text-muted-foreground">{item.duration}</div>
                      </div>
                      <Separator orientation="vertical" className="mx-4 h-10" />
                      <div>
                        <div className="font-medium">{item.item}</div>
                        {item.description && <div className="text-sm text-muted-foreground">{item.description}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks">
          <Card>
            <CardHeader>
              <CardTitle>Project Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Key Tasks</h3>
                  <div className="space-y-2">
                    {keyTasks.map((task) => (
                      <div key={task.id} className="flex items-center p-3 rounded-md border">
                        <div
                          className={`flex-shrink-0 h-5 w-5 rounded-full mr-3 ${task.completed ? "bg-green-500" : "bg-amber-500"}`}
                        />
                        <div className="flex-grow">
                          <span className={task.completed ? "line-through text-muted-foreground" : ""}>
                            {task.task}
                          </span>
                        </div>
                        <Badge variant={task.completed ? "outline" : "secondary"}>
                          {task.completed ? "Completed" : "Pending"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">Upcoming Deadlines:</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>
                          Project phase 1 completion -{" "}
                          {new Date(new Date().setDate(new Date().getDate() + 14)).toLocaleDateString()}
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>
                          Stakeholder review meeting -{" "}
                          {new Date(new Date().setDate(new Date().getDate() + 7)).toLocaleDateString()}
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>
                          Documentation submission -{" "}
                          {new Date(new Date().setDate(new Date().getDate() + 21)).toLocaleDateString()}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">Task Categories:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span className="text-sm">Planning (4)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-sm">Development (7)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <span className="text-sm">Research (3)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                        <span className="text-sm">Testing (5)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <span className="text-sm">Deployment (2)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                        <span className="text-sm">Documentation (6)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
