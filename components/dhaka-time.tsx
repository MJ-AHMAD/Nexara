"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Timer } from "lucide-react"
import { formatDhakaDate, formatDhakaTime } from "@/lib/date-utils"

export function DhakaTime() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date())
  const [countdownTime, setCountdownTime] = useState<string>("00:00:00")

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      // Get current time
      const now = new Date()
      setCurrentTime(now)

      // Calculate countdown to 11:59 PM
      const endOfDay = new Date(now)
      endOfDay.setHours(23, 59, 0, 0) // 11:59 PM

      let diff = endOfDay.getTime() - now.getTime()

      // If it's already past 11:59 PM, set countdown to 0
      if (diff < 0) {
        diff = 0
      }

      // Convert to hours, minutes, seconds
      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setCountdownTime(
        `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
      )
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col sm:flex-row gap-2 text-sm">
      <Card className="flex-1">
        <CardContent className="flex items-center p-2">
          <Clock className="h-4 w-4 mr-2" />
          <div>
            <div>{formatDhakaDate(currentTime)}</div>
            <div className="font-mono">{formatDhakaTime(currentTime)}</div>
            <div className="text-xs text-muted-foreground">Dhaka, Bangladesh</div>
          </div>
        </CardContent>
      </Card>

      <Card className="flex-1">
        <CardContent className="flex items-center p-2">
          <Timer className="h-4 w-4 mr-2" />
          <div>
            <div className="font-mono text-lg">{countdownTime}</div>
            <div className="text-xs text-muted-foreground">Countdown to 11:59 PM</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default DhakaTime
