"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FeedbackForm } from "@/components/feedback-system/feedback-form"
import { FeedbackTracker } from "@/components/feedback-system/feedback-tracker"
import { FeedbackDashboard } from "@/components/feedback-system/feedback-dashboard"
import { FeedbackAnalytics } from "@/components/feedback-system/feedback-analytics"
import { FeedbackResponse } from "@/components/feedback-system/feedback-response"
import { MessageSquare, BarChart3, ArrowRight } from "lucide-react"

export default function FeedbackSystemPage() {
  const [role, setRole] = useState<"user" | "admin">("user")

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Feedback & Communication System</h1>
          <p className="text-muted-foreground">
            A comprehensive system for submitting, tracking, and managing feedback, complaints, and suggestions.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm mr-2">View as:</span>
          <Tabs value={role} onValueChange={(value) => setRole(value as "user" | "admin")} className="w-[300px]">
            <TabsList>
              <TabsTrigger value="user" className="flex-1">
                User View
              </TabsTrigger>
              <TabsTrigger value="admin" className="flex-1">
                Admin View
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {role === "user" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeedbackForm />
          <FeedbackTracker />
        </div>
      ) : (
        <Tabs defaultValue="dashboard">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="dashboard">
              <MessageSquare className="h-4 w-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="respond">
              <ArrowRight className="h-4 w-4 mr-2" />
              Respond
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-0">
            <FeedbackDashboard />
          </TabsContent>

          <TabsContent value="analytics" className="mt-0">
            <FeedbackAnalytics />
          </TabsContent>

          <TabsContent value="respond" className="mt-0">
            <FeedbackResponse />
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}
