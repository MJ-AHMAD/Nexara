import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, Clock, Users, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Meeting Preparation | Nexara",
  description: "Prepare for important meetings with comprehensive dashboards and resources",
}

export default function MeetingPreparationPage() {
  const meetings = [
    {
      id: "infinity-nexus-sponsorship",
      title: "Infinity Nexus Sponsorship Meeting",
      description: "Financial institution sponsorship meeting for Infinity Nexus project",
      date: "June 15, 2023",
      time: "2:00 PM - 3:30 PM",
      location: "Financial Institution Headquarters",
      contact: "Sarah Johnson, CSR Director",
      type: "Sponsorship",
      status: "Upcoming",
      link: "/infinity-nexus-meeting",
    },
    {
      id: "nexara-overview",
      title: "Nexara Platform Overview",
      description: "Comprehensive overview of the Nexara platform and initiatives",
      date: "Ongoing",
      time: "N/A",
      location: "Global",
      contact: "Platform Team",
      type: "Project Overview",
      status: "Active",
      link: "/overview/nexara",
    },
    {
      id: "mj-ahmad-overview",
      title: "MJ AHMAD Leadership Overview",
      description: "Personal brand and leadership initiatives focused on global impact",
      date: "Ongoing",
      time: "N/A",
      location: "Global",
      contact: "MJ Ahmad",
      type: "Project Overview",
      status: "Active",
      link: "/overview/mj-ahmad",
    },
    {
      id: "infinity-nexus-overview",
      title: "Infinity Nexus Project Overview",
      description: "Global standard data hub for scientific research with focus on Cox's Bazar",
      date: "Ongoing",
      time: "N/A",
      location: "Cox's Bazar, Bangladesh",
      contact: "Research Director",
      type: "Project Overview",
      status: "Active",
      link: "/overview/infinity-nexus",
    },
    {
      id: "yunus-inspire-overview",
      title: "Yunus Inspire Project Overview",
      description: "Social business initiatives inspired by Nobel Laureate Muhammad Yunus",
      date: "Ongoing",
      time: "N/A",
      location: "Cox's Bazar, Bangladesh",
      contact: "Social Business Director",
      type: "Project Overview",
      status: "Active",
      link: "/overview/yunus-inspire",
    },
    {
      id: "trusted-ally-overview",
      title: "Trusted Ally Project Overview",
      description: "Community support and development programs for Cox's Bazar region",
      date: "Ongoing",
      time: "N/A",
      location: "Cox's Bazar, Bangladesh",
      contact: "Community Director",
      type: "Project Overview",
      status: "Active",
      link: "/overview/trusted-ally",
    },
  ]

  return (
    <div className="container mx-auto py-6 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Meeting Preparation</h1>
          <p className="text-muted-foreground mt-2">Comprehensive dashboards and resources for all your meetings</p>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="meetings">Meetings</TabsTrigger>
          <TabsTrigger value="overviews">Project Overviews</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meetings.map((meeting) => (
              <Card key={meeting.id} className="overflow-hidden transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <Badge variant={meeting.status === "Upcoming" ? "default" : "outline"}>{meeting.status}</Badge>
                    <Badge variant="outline">{meeting.type}</Badge>
                  </div>
                  <CardTitle className="mt-4">{meeting.title}</CardTitle>
                  <CardDescription>{meeting.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{meeting.date}</span>
                    </div>
                    {meeting.time !== "N/A" && (
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">{meeting.time}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Contact: {meeting.contact}</span>
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Location: {meeting.location}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50 pt-2">
                  <Link href={meeting.link} className="w-full">
                    <Button variant="default" className="w-full">
                      Open Dashboard
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="meetings">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meetings
              .filter((m) => m.type === "Sponsorship")
              .map((meeting) => (
                <Card key={meeting.id} className="overflow-hidden transition-all hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <Badge variant={meeting.status === "Upcoming" ? "default" : "outline"}>{meeting.status}</Badge>
                      <Badge variant="outline">{meeting.type}</Badge>
                    </div>
                    <CardTitle className="mt-4">{meeting.title}</CardTitle>
                    <CardDescription>{meeting.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">{meeting.date}</span>
                      </div>
                      {meeting.time !== "N/A" && (
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">{meeting.time}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Contact: {meeting.contact}</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Location: {meeting.location}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/50 pt-2">
                    <Link href={meeting.link} className="w-full">
                      <Button variant="default" className="w-full">
                        Open Dashboard
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="overviews">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meetings
              .filter((m) => m.type === "Project Overview")
              .map((meeting) => (
                <Card key={meeting.id} className="overflow-hidden transition-all hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <Badge variant={meeting.status === "Upcoming" ? "default" : "outline"}>{meeting.status}</Badge>
                      <Badge variant="outline">{meeting.type}</Badge>
                    </div>
                    <CardTitle className="mt-4">{meeting.title}</CardTitle>
                    <CardDescription>{meeting.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">{meeting.date}</span>
                      </div>
                      {meeting.time !== "N/A" && (
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">{meeting.time}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Contact: {meeting.contact}</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Location: {meeting.location}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/50 pt-2">
                    <Link href={meeting.link} className="w-full">
                      <Button variant="default" className="w-full">
                        Open Dashboard
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
