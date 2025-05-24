"use client"

import { useState } from "react"
import { AdvancedReports } from "@/components/tracking/advanced-reports"
import { WorkflowManagement } from "@/components/tracking/workflow-management"
import { ArchiveManagement } from "@/components/tracking/archive-management"
import { RealTimeCollaboration } from "@/components/tracking/real-time-collaboration"
import { AIInsights } from "@/components/tracking/ai-insights"
import { PasswordProtection } from "@/components/password-protection"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Brain, Clock, FileArchive, FileCheck, Home, MessageSquare, Settings, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Mock data for transactions
const mockTransactions = Array.from({ length: 100 }).map((_, i) => {
  const types = ["donation", "product", "service", "offer"]
  const statuses = ["pending", "completed", "cancelled"]
  const categories = ["education", "health", "environment", "community", "technology"]

  const randomDate = (start: Date, end: Date) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  }

  return {
    id: `TRX-${(i + 1).toString().padStart(3, "0")}`,
    type: types[Math.floor(Math.random() * types.length)],
    name: `Transaction ${i + 1}`,
    description: `Description for transaction ${i + 1}`,
    amount: Math.floor(Math.random() * 1000) + 10,
    date: randomDate(new Date(2024, 0, 1), new Date())
      .toISOString()
      .split("T")[0],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    category: categories[Math.floor(Math.random() * categories.length)],
    contactName: `Contact ${i + 1}`,
    contactEmail: `contact${i + 1}@example.com`,
    contactPhone: `+1234567${i.toString().padStart(4, "0")}`,
  }
})

// Mock current user
const currentUser = {
  id: "user-1",
  name: "John Doe",
  email: "john.doe@example.com",
  role: "staff",
  avatar: "/stylized-jd-initials.png",
  status: "online",
}

export default function AdvancedTrackingPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={() => setIsAuthenticated(true)} />
  }

  return (
    <div className="container mx-auto py-6 px-4 max-w-7xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Advanced Tracking & Workflow System</h1>
          <p className="text-muted-foreground">Comprehensive reporting, workflow management, and archiving system</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="outline" size="sm">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link href="/tracking-system">
            <Button variant="outline" size="sm">
              <FileCheck className="h-4 w-4 mr-2" />
              Standard Tracking
            </Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="reports" className="space-y-6">
        <TabsList className="grid grid-cols-1 md:grid-cols-6 mb-8">
          <TabsTrigger value="reports">
            <BarChart className="h-4 w-4 mr-2" />
            Advanced Reports
          </TabsTrigger>
          <TabsTrigger value="workflow">
            <Clock className="h-4 w-4 mr-2" />
            Workflow Management
          </TabsTrigger>
          <TabsTrigger value="archive">
            <FileArchive className="h-4 w-4 mr-2" />
            Archive Management
          </TabsTrigger>
          <TabsTrigger value="collaboration">
            <MessageSquare className="h-4 w-4 mr-2" />
            Collaboration
          </TabsTrigger>
          <TabsTrigger value="ai-insights">
            <Brain className="h-4 w-4 mr-2" />
            AI Insights
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Settings className="h-4 w-4 mr-2" />
            System Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="reports">
          <AdvancedReports transactions={mockTransactions} />
        </TabsContent>

        <TabsContent value="workflow">
          <WorkflowManagement />
        </TabsContent>

        <TabsContent value="archive">
          <ArchiveManagement />
        </TabsContent>

        <TabsContent value="collaboration">
          <RealTimeCollaboration
            documentId="doc-001"
            documentTitle="Monthly Sales Report - May 2025"
            currentUser={currentUser}
          />
        </TabsContent>

        <TabsContent value="ai-insights">
          <AIInsights data={mockTransactions} />
        </TabsContent>

        <TabsContent value="settings">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">User Permissions</h3>
              <p className="text-muted-foreground mb-4">
                Configure user roles and permissions for different system components
              </p>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span>5 active users</span>
              </div>
              <Button className="mt-4" variant="outline">
                Manage Permissions
              </Button>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Workflow Configuration</h3>
              <p className="text-muted-foreground mb-4">
                Customize approval workflows, notification settings, and escalation paths
              </p>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span>3 active workflows</span>
              </div>
              <Button className="mt-4" variant="outline">
                Configure Workflows
              </Button>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Report Templates</h3>
              <p className="text-muted-foreground mb-4">Manage report templates, custom fields, and export formats</p>
              <div className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-muted-foreground" />
                <span>12 templates defined</span>
              </div>
              <Button className="mt-4" variant="outline">
                Edit Templates
              </Button>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">AI Configuration</h3>
              <p className="text-muted-foreground mb-4">
                Configure AI analysis settings, insight preferences, and data sources
              </p>
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-muted-foreground" />
                <span>AI analysis enabled</span>
              </div>
              <Button className="mt-4" variant="outline">
                Configure AI
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
