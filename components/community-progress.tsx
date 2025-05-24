"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Github, Users, GitPullRequest, GitMerge, BookOpen, Calendar } from "lucide-react"
import Link from "next/link"

// This would typically come from an API
const communityData = {
  contributors: 42,
  stars: 178,
  forks: 37,
  issues: { open: 23, closed: 89 },
  pullRequests: { open: 15, merged: 127, closed: 19 },
  commits: 843,
  releases: 7,
}

const milestoneData = [
  { name: "Core Components", value: 90 },
  { name: "Wellness Tools", value: 75 },
  { name: "Project Management", value: 60 },
  { name: "Documentation", value: 45 },
  { name: "Testing", value: 30 },
]

const upcomingMilestones = [
  { name: "Mobile Responsive Design", date: "June 15, 2023", progress: 65 },
  { name: "Dark Mode Enhancements", date: "June 30, 2023", progress: 40 },
  { name: "Accessibility Improvements", date: "July 15, 2023", progress: 25 },
  { name: "Vision Dashboard", date: "July 30, 2023", progress: 10 },
]

const contributionsData = [
  { name: "Code", value: 127 },
  { name: "Documentation", value: 85 },
  { name: "Issues", value: 69 },
  { name: "Discussion", value: 42 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82ca9d"]

export function CommunityProgress() {
  const [activeChart, setActiveChart] = useState("milestones")

  return (
    <section className="py-12 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Project Progress</h2>
          <p className="text-muted-foreground mt-2">
            Tracking our journey in building Yunus Inspire, Infinity Nexus & Trusted Ally
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Users className="mr-2 h-5 w-5 text-blue-500" />
                Project Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {communityData.contributors}
                  </div>
                  <div className="text-sm text-muted-foreground">Contributors</div>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{communityData.stars}</div>
                  <div className="text-sm text-muted-foreground">Stars</div>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">{communityData.forks}</div>
                  <div className="text-sm text-muted-foreground">Forks</div>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{communityData.commits}</div>
                  <div className="text-sm text-muted-foreground">Commits</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="https://github.com/mj-ahmad/infinity-nexus">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <GitPullRequest className="mr-2 h-5 w-5 text-purple-500" />
                Contributions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Open Issues</span>
                    <span className="font-medium">{communityData.issues.open}</span>
                  </div>
                  <Progress
                    value={
                      (communityData.issues.open / (communityData.issues.open + communityData.issues.closed)) * 100
                    }
                    className="h-2"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Open Pull Requests</span>
                    <span className="font-medium">{communityData.pullRequests.open}</span>
                  </div>
                  <Progress
                    value={
                      (communityData.pullRequests.open /
                        (communityData.pullRequests.open +
                          communityData.pullRequests.merged +
                          communityData.pullRequests.closed)) *
                      100
                    }
                    className="h-2"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Merged Pull Requests</span>
                    <span className="font-medium">{communityData.pullRequests.merged}</span>
                  </div>
                  <Progress
                    value={
                      (communityData.pullRequests.merged /
                        (communityData.pullRequests.open +
                          communityData.pullRequests.merged +
                          communityData.pullRequests.closed)) *
                      100
                    }
                    className="h-2"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Releases</span>
                    <span className="font-medium">{communityData.releases}</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="https://github.com/mj-ahmad/infinity-nexus/pulls">
                  <GitMerge className="mr-2 h-4 w-4" />
                  View Pull Requests
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Calendar className="mr-2 h-5 w-5 text-green-500" />
                Upcoming Milestones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingMilestones.map((milestone, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{milestone.name}</span>
                      <span className="text-muted-foreground">{milestone.date}</span>
                    </div>
                    <Progress value={milestone.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="https://github.com/mj-ahmad/infinity-nexus/milestones">
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Roadmap
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Tabs defaultValue="milestones" className="w-full" onValueChange={setActiveChart}>
          <div className="flex justify-center mb-4">
            <TabsList>
              <TabsTrigger value="milestones">Project Milestones</TabsTrigger>
              <TabsTrigger value="contributions">Contribution Types</TabsTrigger>
            </TabsList>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                {activeChart === "milestones" ? "Project Milestones Progress" : "Contribution Distribution"}
              </CardTitle>
              <CardDescription>
                {activeChart === "milestones"
                  ? "Current progress across key project areas"
                  : "Breakdown of different types of community contributions"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full">
                <TabsContent value="milestones" className="mt-0 h-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={milestoneData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {milestoneData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </TabsContent>

                <TabsContent value="contributions" className="mt-0 h-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={contributionsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {contributionsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </TabsContent>
              </div>
            </CardContent>
          </Card>
        </Tabs>
      </div>
    </section>
  )
}
