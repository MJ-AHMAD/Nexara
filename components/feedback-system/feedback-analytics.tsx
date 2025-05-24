"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, ArrowUp, BarChart3, Clock, PieChartIcon } from "lucide-react"

// Mock data for demonstration
const typeData = [
  { name: "Complaints", value: 35, color: "#ef4444" },
  { name: "Suggestions", value: 25, color: "#22c55e" },
  { name: "Questions", value: 18, color: "#3b82f6" },
  { name: "Comments", value: 12, color: "#a855f7" },
  { name: "Advice", value: 10, color: "#f59e0b" },
]

const statusData = [
  { name: "Pending", value: 15, color: "#f59e0b" },
  { name: "In Progress", value: 23, color: "#3b82f6" },
  { name: "Under Review", value: 18, color: "#a855f7" },
  { name: "Resolved", value: 32, color: "#22c55e" },
  { name: "Closed", value: 12, color: "#6b7280" },
]

const priorityData = [
  { name: "Low", value: 45, color: "#3b82f6" },
  { name: "Medium", value: 32, color: "#f59e0b" },
  { name: "High", value: 18, color: "#f97316" },
  { name: "Critical", value: 5, color: "#ef4444" },
]

const timeToResolutionData = [
  { name: "Less than 1 day", value: 30 },
  { name: "1-2 days", value: 25 },
  { name: "3-5 days", value: 20 },
  { name: "6-10 days", value: 15 },
  { name: "More than 10 days", value: 10 },
]

const weeklyTrendsData = [
  { date: "May 1", new: 12, resolved: 8 },
  { date: "May 8", new: 15, resolved: 10 },
  { date: "May 15", new: 18, resolved: 14 },
  { date: "May 22", new: 22, resolved: 16 },
  { date: "May 29", new: 17, resolved: 20 },
  { date: "Jun 5", new: 25, resolved: 18 },
  { date: "Jun 12", new: 20, resolved: 22 },
]

const teamPerformanceData = [
  { name: "Support Team", resolved: 45, timeToResolve: 2.3 },
  { name: "Product Team", resolved: 32, timeToResolve: 4.1 },
  { name: "Finance Team", resolved: 18, timeToResolve: 1.8 },
  { name: "Technical Team", resolved: 25, timeToResolve: 3.2 },
]

const feedbackSourcesData = [
  { name: "Website Form", value: 45 },
  { name: "Email", value: 25 },
  { name: "Mobile App", value: 18 },
  { name: "Social Media", value: 12 },
]

export function FeedbackAnalytics() {
  // Calculate combined statistics
  const totalFeedback = typeData.reduce((sum, item) => sum + item.value, 0)
  const resolvedFeedback = statusData.find((item) => item.name === "Resolved")?.value || 0
  const closedFeedback = statusData.find((item) => item.name === "Closed")?.value || 0
  const totalResolved = resolvedFeedback + closedFeedback
  const resolutionRate = ((totalResolved / totalFeedback) * 100).toFixed(1)

  const criticalFeedback = priorityData.find((item) => item.name === "Critical")?.value || 0
  const highFeedback = priorityData.find((item) => item.name === "High")?.value || 0
  const criticalHighRate = (((criticalFeedback + highFeedback) / totalFeedback) * 100).toFixed(1)

  const pendingFeedback = statusData.find((item) => item.name === "Pending")?.value || 0
  const inProgressFeedback = statusData.find((item) => item.name === "In Progress")?.value || 0
  const underReviewFeedback = statusData.find((item) => item.name === "Under Review")?.value || 0
  const openFeedback = pendingFeedback + inProgressFeedback + underReviewFeedback

  // Calculate week-over-week change
  const lastWeekNew = weeklyTrendsData[weeklyTrendsData.length - 2].new
  const currentWeekNew = weeklyTrendsData[weeklyTrendsData.length - 1].new
  const percentChange = (((currentWeekNew - lastWeekNew) / lastWeekNew) * 100).toFixed(1)
  const isIncreasing = currentWeekNew > lastWeekNew

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Analytics & Insights</CardTitle>
        <CardDescription>
          Analyze feedback trends, performance metrics, and key insights to improve your service.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col space-y-1">
                <span className="text-sm text-muted-foreground">Total Feedback</span>
                <span className="text-2xl font-bold">{totalFeedback}</span>
                <div className="flex items-center gap-1 text-xs">
                  {isIncreasing ? (
                    <>
                      <ArrowUp className="h-3 w-3 text-red-500" />
                      <span className="text-red-500">{percentChange}% from last week</span>
                    </>
                  ) : (
                    <>
                      <ArrowDown className="h-3 w-3 text-green-500" />
                      <span className="text-green-500">{Math.abs(Number(percentChange))}% from last week</span>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col space-y-1">
                <span className="text-sm text-muted-foreground">Resolution Rate</span>
                <span className="text-2xl font-bold">{resolutionRate}%</span>
                <span className="text-xs text-muted-foreground">
                  {totalResolved} of {totalFeedback} resolved
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col space-y-1">
                <span className="text-sm text-muted-foreground">Open Feedback</span>
                <span className="text-2xl font-bold">{openFeedback}</span>
                <div className="flex items-center gap-1 text-xs">
                  <Badge variant="outline" className="text-xs px-1">
                    {pendingFeedback} pending
                  </Badge>
                  <Badge variant="outline" className="text-xs px-1">
                    {inProgressFeedback} in progress
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col space-y-1">
                <span className="text-sm text-muted-foreground">Critical/High Issues</span>
                <span className="text-2xl font-bold">{criticalHighRate}%</span>
                <span className="text-xs text-muted-foreground">
                  {criticalFeedback + highFeedback} of {totalFeedback} items
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="grid grid-cols-3 w-[400px] mb-6">
            <TabsTrigger value="overview">
              <PieChartIcon className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="trends">
              <BarChart3 className="h-4 w-4 mr-2" />
              Trends
            </TabsTrigger>
            <TabsTrigger value="performance">
              <Clock className="h-4 w-4 mr-2" />
              Performance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Feedback by Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={typeData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {typeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Feedback by Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={statusData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {statusData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Feedback by Priority</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={priorityData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {priorityData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Time to Resolution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={timeToResolutionData} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} tickMargin={25} />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" name="Count" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Feedback Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={feedbackSourcesData}
                        layout="vertical"
                        margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" width={80} />
                        <Tooltip />
                        <Bar dataKey="value" name="Count" fill="#a855f7" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Weekly Trends</CardTitle>
                <CardDescription>New vs. Resolved Feedback Items</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weeklyTrendsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="new" name="New Feedback" stroke="#3b82f6" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="resolved" name="Resolved Feedback" stroke="#22c55e" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Team Performance</CardTitle>
                <CardDescription>Feedback Resolution by Team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={teamPerformanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" orientation="left" stroke="#3b82f6" />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#f59e0b"
                        label={{ value: "Days to Resolve", angle: 90, position: "insideRight" }}
                      />
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="left" dataKey="resolved" name="Issues Resolved" fill="#3b82f6" />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="timeToResolve"
                        name="Avg. Days to Resolve"
                        stroke="#f59e0b"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
