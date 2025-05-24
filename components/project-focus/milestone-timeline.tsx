"use client"

import { CheckCircle, Circle } from "lucide-react"

interface Milestone {
  id: string
  name: string
  dueDate: string
  completed: boolean
}

interface MilestoneTimelineProps {
  milestones: Milestone[]
}

export function MilestoneTimeline({ milestones }: MilestoneTimelineProps) {
  // Sort milestones by due date
  const sortedMilestones = [...milestones].sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-muted-foreground/20" />

      {/* Milestones */}
      <div className="space-y-8">
        {sortedMilestones.map((milestone, index) => (
          <div key={milestone.id} className="relative pl-10">
            {/* Milestone indicator */}
            <div className="absolute left-0 top-0.5">
              {milestone.completed ? (
                <CheckCircle className="h-7 w-7 text-green-500 bg-background rounded-full" />
              ) : (
                <Circle className="h-7 w-7 text-muted-foreground/50 bg-background rounded-full" />
              )}
            </div>

            {/* Milestone content */}
            <div className={`${milestone.completed ? "opacity-70" : ""}`}>
              <h3 className={`text-lg font-medium ${milestone.completed ? "line-through text-muted-foreground" : ""}`}>
                {milestone.name}
              </h3>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <span>
                  Due:{" "}
                  {new Date(milestone.dueDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                {milestone.completed && (
                  <span className="ml-3 text-green-500 flex items-center">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Completed
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
