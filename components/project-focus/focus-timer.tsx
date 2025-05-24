"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Play, Pause, RotateCcw, Bell } from "lucide-react"

export function FocusTimer() {
  const [isRunning, setIsRunning] = useState(false)
  const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 minutes in seconds
  const [totalTime, setTotalTime] = useState(25 * 60) // 25 minutes in seconds
  const [timerType, setTimerType] = useState<"focus" | "break">("focus")
  const [sessionsCompleted, setSessionsCompleted] = useState(0)

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Calculate progress percentage
  const progressPercentage = ((totalTime - timeLeft) / totalTime) * 100

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (isRunning && timeLeft === 0) {
      // Timer completed
      setIsRunning(false)

      // Play notification sound (would be implemented in a real app)
      console.log("Timer completed!")

      // Switch timer type and reset
      if (timerType === "focus") {
        setSessionsCompleted((prev) => prev + 1)
        setTimerType("break")
        setTimeLeft(5 * 60) // 5 minute break
        setTotalTime(5 * 60)
      } else {
        setTimerType("focus")
        setTimeLeft(25 * 60) // Back to 25 minute focus
        setTotalTime(25 * 60)
      }
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning, timeLeft, timerType])

  // Start/pause timer
  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  // Reset timer
  const resetTimer = () => {
    setIsRunning(false)
    if (timerType === "focus") {
      setTimeLeft(25 * 60)
    } else {
      setTimeLeft(5 * 60)
    }
  }

  return (
    <div className="text-center">
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1">{timerType === "focus" ? "Focus Session" : "Break Time"}</h3>
        <p className="text-sm text-muted-foreground">
          {timerType === "focus" ? "Stay focused on your current task" : "Take a short break to recharge"}
        </p>
      </div>

      <div className="relative mb-6">
        <div className="text-4xl font-mono font-bold mb-2">{formatTime(timeLeft)}</div>
        <Progress value={progressPercentage} className="h-2" />
      </div>

      <div className="flex justify-center gap-2 mb-4">
        <Button onClick={toggleTimer} variant="outline" size="icon" className="h-10 w-10 rounded-full">
          {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button onClick={resetTimer} variant="outline" size="icon" className="h-10 w-10 rounded-full">
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      <div className="text-sm text-muted-foreground">
        {sessionsCompleted > 0 && (
          <div className="flex items-center justify-center gap-1">
            <Bell className="h-3 w-3" />
            <span>
              {sessionsCompleted} {sessionsCompleted === 1 ? "session" : "sessions"} completed
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
