"use client"

import { AlertTriangle, TrendingUp, Lightbulb, CheckCircle, XCircle } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function ProjectInsights() {
  return (
    <div className="space-y-4">
      {/* Risk Alert */}
      <div className="flex gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
        <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-medium text-red-600 dark:text-red-400">Risk Detected</h4>
          <p className="text-sm text-muted-foreground">
            Backend integration milestone is at risk of missing the deadline. Consider allocating additional resources.
          </p>
        </div>
      </div>

      {/* Positive Trend */}
      <div className="flex gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
        <TrendingUp className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-medium text-green-600 dark:text-green-400">Positive Trend</h4>
          <p className="text-sm text-muted-foreground">
            Task completion rate has increased by 15% in the last week. Team productivity is improving.
          </p>
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <h4 className="font-medium flex items-center mb-2">
          <Lightbulb className="h-4 w-4 mr-2 text-amber-500" />
          AI Recommendations
        </h4>
        <div className="space-y-2">
          <div className="flex gap-2 items-start">
            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
            <p className="text-sm">Schedule a team meeting to address the backend integration blockers</p>
          </div>
          <div className="flex gap-2 items-start">
            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
            <p className="text-sm">Consider breaking down the API integration task into smaller subtasks</p>
          </div>
          <div className="flex gap-2 items-start">
            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
            <p className="text-sm">Reallocate resources from completed design tasks to backend development</p>
          </div>
        </div>
      </div>

      <Separator />

      {/* Project Health */}
      <div>
        <h4 className="font-medium mb-2">Project Health Assessment</h4>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm">Timeline</span>
            </div>
            <span className="text-sm text-green-500">On Track</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
              <span className="text-sm">Budget</span>
            </div>
            <span className="text-sm text-amber-500">At Risk</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <XCircle className="h-4 w-4 text-red-500 mr-2" />
              <span className="text-sm">Resources</span>
            </div>
            <span className="text-sm text-red-500">Insufficient</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm">Quality</span>
            </div>
            <span className="text-sm text-green-500">Good</span>
          </div>
        </div>
      </div>
    </div>
  )
}
