"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, BellOff, Smartphone, Globe, MessageSquare } from "lucide-react"

export function DistractionBlocker() {
  const [blockers, setBlockers] = useState({
    notifications: true,
    socialMedia: true,
    email: false,
    messaging: false,
  })

  // Toggle blocker state
  const toggleBlocker = (blocker: keyof typeof blockers) => {
    setBlockers((prev) => ({
      ...prev,
      [blocker]: !prev[blocker],
    }))
  }

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground mb-2">
        Enable blockers to minimize distractions during your focus sessions.
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BellOff className="h-4 w-4 text-muted-foreground" />
            <span>Notifications</span>
          </div>
          <Switch checked={blockers.notifications} onCheckedChange={() => toggleBlocker("notifications")} />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <span>Social Media</span>
            <Badge variant="outline" className="text-xs">
              Top Distraction
            </Badge>
          </div>
          <Switch checked={blockers.socialMedia} onCheckedChange={() => toggleBlocker("socialMedia")} />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
            <span>Email</span>
          </div>
          <Switch checked={blockers.email} onCheckedChange={() => toggleBlocker("email")} />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smartphone className="h-4 w-4 text-muted-foreground" />
            <span>Messaging</span>
          </div>
          <Switch checked={blockers.messaging} onCheckedChange={() => toggleBlocker("messaging")} />
        </div>
      </div>

      <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 flex gap-2">
        <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0" />
        <div className="text-sm">
          <p className="font-medium text-amber-600 dark:text-amber-400">Distraction Alert</p>
          <p className="text-muted-foreground">
            You've been distracted 8 times in your last focus session. Enable more blockers to improve focus.
          </p>
        </div>
      </div>

      <Button className="w-full">Block All Distractions</Button>
    </div>
  )
}
