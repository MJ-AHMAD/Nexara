"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MoreHorizontal, AlertCircle, Clock, ArrowUp, ArrowRight, ArrowDown, MessageSquare } from "lucide-react"

// Sample tasks data
const sampleTasks = [
  {
    id: "task-1",
    title: "Design homepage wireframes",
    description: "Create wireframes for the new homepage design",
    status: "Completed",
    priority: "High",
    assignee: "sarah",
    dueDate: "2023-11-05",
    comments: 3,
  },
  {
    id: "task-2",
    title: "Implement responsive navigation",
    description: "Create responsive navigation menu for all device sizes",
    status: "In Progress",
    priority: "High",
    assignee: "alex",
    dueDate: "2023-11-10",
    comments: 5,
  },
  {
    id: "task-3",
    title: "Set up CI/CD pipeline",
    description: "Configure continuous integration and deployment pipeline",
    status: "Blocked",
    priority: "Critical",
    assignee: "michael",
    dueDate: "2023-11-12",
    comments: 2,
  },
  {
    id: "task-4",
    title: "Create API documentation",
    description: "Document all API endpoints and parameters",
    status: "Not Started",
    priority: "Medium",
    assignee: "jessica",
    dueDate: "2023-11-15",
    comments: 0,
  },
  {
    id: "task-5",
    title: "Implement authentication system",
    description: "Set up user authentication and authorization",
    status: "In Progress",
    priority: "High",
    assignee: "david",
    dueDate: "2023-11-18",
    comments: 7,
  },
]

export function TaskList() {
  const [tasks, setTasks] = useState(sampleTasks)
  const [filter, setFilter] = useState("all")

  // Filter tasks based on status
  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.status.toLowerCase() === filter.toLowerCase())

  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500 hover:bg-green-600"
      case "In Progress":
        return "bg-blue-500 hover:bg-blue-600"
      case "Blocked":
        return "bg-red-500 hover:bg-red-600"
      case "Not Started":
        return "bg-slate-500 hover:bg-slate-600"
      default:
        return "bg-slate-500 hover:bg-slate-600"
    }
  }

  // Get priority icon
  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "Critical":
        return <ArrowUp className="h-3 w-3 text-red-500" />
      case "High":
        return <ArrowUp className="h-3 w-3 text-orange-500" />
      case "Medium":
        return <ArrowRight className="h-3 w-3 text-blue-500" />
      case "Low":
        return <ArrowDown className="h-3 w-3 text-green-500" />
      default:
        return <ArrowRight className="h-3 w-3 text-slate-500" />
    }
  }

  // Toggle task completion
  const toggleTaskCompletion = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "Completed" ? "In Progress" : "Completed",
            }
          : task,
      ),
    )
  }

  return (
    <div>
      {/* Task Filters */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        <Button variant={filter === "all" ? "default" : "outline"} size="sm" onClick={() => setFilter("all")}>
          All
        </Button>
        <Button
          variant={filter === "in progress" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("in progress")}
        >
          In Progress
        </Button>
        <Button
          variant={filter === "completed" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
        <Button variant={filter === "blocked" ? "default" : "outline"} size="sm" onClick={() => setFilter("blocked")}>
          Blocked
        </Button>
        <Button
          variant={filter === "not started" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("not started")}
        >
          Not Started
        </Button>
      </div>

      {/* Tasks List */}
      <div className="space-y-3">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`p-3 border rounded-lg transition-all ${
              task.status === "Completed" ? "bg-muted/30" : "bg-background hover:shadow-sm"
            }`}
          >
            <div className="flex items-start gap-3">
              <Checkbox
                checked={task.status === "Completed"}
                onCheckedChange={() => toggleTaskCompletion(task.id)}
                className="mt-1"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3
                    className={`font-medium ${task.status === "Completed" ? "line-through text-muted-foreground" : ""}`}
                  >
                    {task.title}
                  </h3>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Badge variant="outline" className={`${getStatusColor(task.status)} text-white text-xs`}>
                      {task.status}
                    </Badge>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{task.description}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Avatar className="h-5 w-5 mr-1">
                      <AvatarFallback className="text-[10px]">{task.assignee.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span>{task.assignee}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>
                      {new Date(task.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </span>
                  </div>
                  <div className="flex items-center">
                    {getPriorityIcon(task.priority)}
                    <span className="ml-1">{task.priority}</span>
                  </div>
                  {task.status === "Blocked" && (
                    <div className="flex items-center text-red-500">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      <span>Blocked</span>
                    </div>
                  )}
                  {task.comments > 0 && (
                    <div className="flex items-center">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      <span>{task.comments}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredTasks.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">No tasks found matching the current filter.</div>
        )}
      </div>
    </div>
  )
}
