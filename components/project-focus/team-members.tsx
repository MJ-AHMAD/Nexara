"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Sample team members data
const teamMembers = [
  {
    id: "user-1",
    name: "Alex Johnson",
    role: "Project Lead",
    avatar: "/abstract-letter-aj.png",
    status: "online",
    tasks: 8,
    completedTasks: 5,
  },
  {
    id: "user-2",
    name: "Sarah Williams",
    role: "UX Designer",
    avatar: "/stylized-sw.png",
    status: "online",
    tasks: 6,
    completedTasks: 4,
  },
  {
    id: "user-3",
    name: "Michael Chen",
    role: "Frontend Developer",
    avatar: "/microphone-concert-stage.png",
    status: "away",
    tasks: 10,
    completedTasks: 7,
  },
  {
    id: "user-4",
    name: "Jessica Taylor",
    role: "Backend Developer",
    avatar: "/abstract-geometric-jt.png",
    status: "offline",
    tasks: 7,
    completedTasks: 3,
  },
]

export function TeamMembers() {
  // Get status indicator color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "away":
        return "bg-amber-500"
      case "offline":
        return "bg-slate-300"
      default:
        return "bg-slate-300"
    }
  }

  return (
    <div className="space-y-3">
      {teamMembers.map((member) => (
        <div key={member.id} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar>
                <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span
                className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-background ${getStatusColor(member.status)}`}
              />
            </div>
            <div>
              <div className="font-medium">{member.name}</div>
              <div className="text-xs text-muted-foreground">{member.role}</div>
            </div>
          </div>
          <div className="text-sm">
            <Badge variant="outline" className="text-xs">
              {member.completedTasks}/{member.tasks} tasks
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}
