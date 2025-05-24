"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart4, PieChart, LineChart, TrendingUp } from "lucide-react"

export function ProjectMetrics() {
  return (
    <Tabs defaultValue="progress">
      <TabsList className="grid grid-cols-4 mb-4">
        <TabsTrigger value="progress" className="flex items-center">
          <BarChart4 className="h-4 w-4 mr-2" />
          Progress
        </TabsTrigger>
        <TabsTrigger value="tasks" className="flex items-center">
          <PieChart className="h-4 w-4 mr-2" />
          Tasks
        </TabsTrigger>
        <TabsTrigger value="time" className="flex items-center">
          <LineChart className="h-4 w-4 mr-2" />
          Time
        </TabsTrigger>
        <TabsTrigger value="performance" className="flex items-center">
          <TrendingUp className="h-4 w-4 mr-2" />
          Performance
        </TabsTrigger>
      </TabsList>

      <TabsContent value="progress">
        <Card>
          <CardContent className="pt-6">
            <div className="h-[200px] flex items-center justify-center bg-muted/30 rounded-md">
              <div className="text-center">
                <BarChart4 className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                <p className="text-muted-foreground">Progress chart visualization would appear here</p>
                <p className="text-xs text-muted-foreground mt-1">Showing weekly progress over time</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="tasks">
        <Card>
          <CardContent className="pt-6">
            <div className="h-[200px] flex items-center justify-center bg-muted/30 rounded-md">
              <div className="text-center">
                <PieChart className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                <p className="text-muted-foreground">Task distribution chart would appear here</p>
                <p className="text-xs text-muted-foreground mt-1">Showing tasks by status and assignee</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="time">
        <Card>
          <CardContent className="pt-6">
            <div className="h-[200px] flex items-center justify-center bg-muted/30 rounded-md">
              <div className="text-center">
                <LineChart className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                <p className="text-muted-foreground">Time tracking chart would appear here</p>
                <p className="text-xs text-muted-foreground mt-1">Showing hours spent per day/week</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="performance">
        <Card>
          <CardContent className="pt-6">
            <div className="h-[200px] flex items-center justify-center bg-muted/30 rounded-md">
              <div className="text-center">
                <TrendingUp className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                <p className="text-muted-foreground">Performance metrics would appear here</p>
                <p className="text-xs text-muted-foreground mt-1">Showing velocity, burndown, and efficiency</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
