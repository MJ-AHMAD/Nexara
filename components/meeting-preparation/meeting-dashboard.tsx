"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectFolderStructure } from "./project-folder-structure"
import {
  Calendar,
  Clock,
  Users,
  FileText,
  CheckSquare,
  HelpCircle,
  Presentation,
  MessageSquare,
  Download,
  Share2,
  Printer,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface MeetingDashboardProps {
  meetingDate: string
  meetingTime: string
  meetingLocation: string
  contactPerson: string
  projectName: string
  organizationName: string
}

export function MeetingDashboard({
  meetingDate,
  meetingTime,
  meetingLocation,
  contactPerson,
  projectName,
  organizationName,
}: MeetingDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for the dashboard
  const preparationProgress = 85
  const documentsReady = 12
  const totalDocuments = 14

  const keyTasks = [
    { id: 1, task: "Finalize sponsorship proposal", completed: true },
    { id: 2, task: "Prepare presentation slides", completed: true },
    { id: 3, task: "Compile case studies and testimonials", completed: true },
    { id: 4, task: "Review Q&A preparation document", completed: true },
    { id: 5, task: "Practice presentation delivery", completed: false },
    { id: 6, task: "Prepare follow-up email template", completed: true },
  ]

  const meetingAgenda = [
    { id: 1, time: "2:00 PM", item: "Introduction and Welcome", duration: "5 min" },
    { id: 2, time: "2:05 PM", item: "Infinity Nexus Project Overview", duration: "15 min" },
    { id: 3, time: "2:20 PM", item: "Sponsorship Proposal Presentation", duration: "20 min" },
    { id: 4, time: "2:40 PM", item: "Benefits for Sponsors", duration: "15 min" },
    { id: 5, time: "2:55 PM", item: "Q&A Session", duration: "20 min" },
    { id: 6, time: "3:15 PM", item: "Next Steps and Action Items", duration: "10 min" },
    { id: 7, time: "3:25 PM", item: "Closing Remarks", duration: "5 min" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Sponsorship Meeting Dashboard</h1>
          <p className="text-muted-foreground">Preparation for financial institution sponsorship meeting</p>
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
            <CardTitle className="text-sm font-medium">Meeting Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">{meetingDate}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">{meetingTime}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">Contact: {contactPerson}</span>
              </div>
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">Location: {meetingLocation}</span>
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
                <span className="text-sm ml-2">Cox's Bazar, Bangladesh</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium">Type:</span>
                <span className="text-sm ml-2">Sponsorship Request</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Preparation Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm font-medium">{preparationProgress}%</span>
                </div>
                <Progress value={preparationProgress} className="h-2" />
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
                <CardTitle>Meeting Objective</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Secure financial sponsorship for the Infinity Nexus project by presenting a compelling case for
                  partnership, demonstrating clear benefits, and establishing next steps for formal agreement.
                </p>

                <div className="mt-4">
                  <h4 className="font-medium mb-2">Key Outcomes:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Establish strong first impression and relationship</li>
                    <li>Clearly communicate project vision and impact</li>
                    <li>Address potential concerns and questions</li>
                    <li>Secure commitment for next steps in sponsorship process</li>
                    <li>Identify specific areas of interest for customized proposal</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Discussion Points</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckSquare className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Project Vision & Impact</p>
                      <p className="text-sm text-muted-foreground">
                        Global standard data hub for scientific research with focus on Cox's Bazar
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Sponsorship Requirements</p>
                      <p className="text-sm text-muted-foreground">
                        Financial needs, resource allocation, and implementation timeline
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Sponsor Benefits</p>
                      <p className="text-sm text-muted-foreground">
                        Brand visibility, access to innovations, community engagement
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Partnership Structure</p>
                      <p className="text-sm text-muted-foreground">
                        Sponsorship tiers, recognition, and engagement opportunities
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Preparation Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium flex items-center mb-2">
                    <Presentation className="h-4 w-4 mr-2" />
                    Presentation Materials
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm">Main presentation deck</span>
                    </li>
                    <li className="flex items-center">
                      <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm">Project overview document</span>
                    </li>
                    <li className="flex items-center">
                      <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm">Budget breakdown</span>
                    </li>
                    <li className="flex items-center">
                      <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm">Visual assets & infographics</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium flex items-center mb-2">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Q&A Preparation
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm">Anticipated questions doc</span>
                    </li>
                    <li className="flex items-center">
                      <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm">Technical FAQ</span>
                    </li>
                    <li className="flex items-center">
                      <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm">Objection handling guide</span>
                    </li>
                    <li className="flex items-center">
                      <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm">Supporting statistics</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium flex items-center mb-2">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Follow-up Materials
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm">Thank you email template</span>
                    </li>
                    <li className="flex items-center">
                      <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm">Draft partnership agreement</span>
                    </li>
                    <li className="flex items-center">
                      <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm">Next steps document</span>
                    </li>
                    <li className="flex items-center">
                      <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm">Additional resources list</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Project Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <ProjectFolderStructure />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="agenda">
          <Card>
            <CardHeader>
              <CardTitle>Meeting Agenda</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Detailed Timeline</h3>
                  <Badge variant="outline">Total: 90 minutes</Badge>
                </div>

                <div className="space-y-2">
                  {meetingAgenda.map((item, index) => (
                    <div key={item.id} className="flex items-start p-3 rounded-md border">
                      <div className="flex-shrink-0 w-16 text-center">
                        <div className="font-medium">{item.time}</div>
                        <div className="text-xs text-muted-foreground">{item.duration}</div>
                      </div>
                      <Separator orientation="vertical" className="mx-4 h-10" />
                      <div>
                        <div className="font-medium">{item.item}</div>
                        <div className="text-sm text-muted-foreground">
                          {index === 0 && "Brief introduction of attendees and meeting objectives"}
                          {index === 1 && "Present vision, mission, current status, and future roadmap"}
                          {index === 2 && "Detail financial requirements, resource allocation, and timeline"}
                          {index === 3 && "Explain brand visibility, data access, and engagement opportunities"}
                          {index === 4 && "Address questions from financial institution representatives"}
                          {index === 5 && "Establish follow-up timeline and documentation sharing plan"}
                          {index === 6 && "Thank participants and summarize key points"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-muted p-4 rounded-md">
                  <h4 className="font-medium mb-2">Presentation Tips:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Begin with a compelling story about the impact of data sharing in research</li>
                    <li>Use visual aids effectively, especially when presenting statistics</li>
                    <li>Allow time for questions throughout, not just during Q&A</li>
                    <li>Emphasize local impact in Cox's Bazar alongside global significance</li>
                    <li>Close with a clear, specific call to action regarding next steps</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks">
          <Card>
            <CardHeader>
              <CardTitle>Preparation Tasks</CardTitle>
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
                    <h4 className="font-medium mb-2">Pre-Meeting Checklist:</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                        <span>Confirm meeting details with all participants</span>
                      </li>
                      <li className="flex items-center">
                        <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                        <span>Test presentation equipment and connectivity</span>
                      </li>
                      <li className="flex items-center">
                        <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                        <span>Prepare printed copies of key documents</span>
                      </li>
                      <li className="flex items-center">
                        <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                        <span>Review latest financial institution news</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">Post-Meeting Actions:</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <CheckSquare className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>Send thank you email within 24 hours</span>
                      </li>
                      <li className="flex items-center">
                        <CheckSquare className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>Share requested additional information</span>
                      </li>
                      <li className="flex items-center">
                        <CheckSquare className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>Schedule follow-up meeting if appropriate</span>
                      </li>
                      <li className="flex items-center">
                        <CheckSquare className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>Update CRM with meeting outcomes</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 border rounded-md">
                  <h4 className="font-medium mb-2">Team Responsibilities:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h5 className="text-sm font-medium">MJ Ahmad</h5>
                      <ul className="text-sm mt-1 space-y-1">
                        <li>Lead presentation</li>
                        <li>Project vision overview</li>
                        <li>Final Q&A responses</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Technical Lead</h5>
                      <ul className="text-sm mt-1 space-y-1">
                        <li>Technical implementation details</li>
                        <li>Data security explanations</li>
                        <li>Technical Q&A support</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Financial Officer</h5>
                      <ul className="text-sm mt-1 space-y-1">
                        <li>Budget presentation</li>
                        <li>ROI calculations</li>
                        <li>Financial documentation</li>
                      </ul>
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
