"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Activity {
  id: string
  user: string
  action: string
  item: string
  time: string
}

interface ActivityFeedProps {
  activities: Activity[]
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback>{activity.user.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="text-sm">
              <span className="font-medium">{activity.user}</span>{" "}
              <span className="text-muted-foreground">{activity.action}</span>{" "}
              <span className="font-medium">{activity.item}</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">{activity.time}</div>
          </div>
        </div>
      ))}

      {activities.length === 0 && <div className="text-center py-8 text-muted-foreground">No recent activity.</div>}
    </div>
  )
}
