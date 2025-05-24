"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Minus, Activity, Timer } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

type ExerciseLog = {
  type: string
  duration: number
  date: string
  time: string
  calories: number
}

export function ExerciseTracker() {
  const [exerciseMinutes, setExerciseMinutes] = useState(0)
  const [progress, setProgress] = useState(0)
  const [exerciseType, setExerciseType] = useState("walking")
  const [duration, setDuration] = useState(15)
  const [exerciseLog, setExerciseLog] = useState<ExerciseLog[]>([])
  const [showAnimation, setShowAnimation] = useState(false)

  const exerciseGoal = 30 // 30 minutes daily

  // Exercise types with calorie burn rates (calories per minute)
  const exerciseTypes = {
    walking: 4,
    running: 10,
    cycling: 8,
    swimming: 9,
    yoga: 3,
    strength: 6,
    hiit: 12,
  }

  // Exercise icons
  const exerciseIcons: Record<string, string> = {
    walking: "🚶",
    running: "🏃",
    cycling: "🚴",
    swimming: "🏊",
    yoga: "🧘",
    strength: "🏋️",
    hiit: "⚡",
  }

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== "undefined") {
      // Load saved data from localStorage
      const savedMinutes = localStorage.getItem("exerciseMinutes")
      const savedProgress = localStorage.getItem("exerciseProgress")
      const savedLog = localStorage.getItem("exerciseLog")

      if (savedMinutes) setExerciseMinutes(Number.parseInt(savedMinutes))
      if (savedProgress) setProgress(Number.parseInt(savedProgress))
      if (savedLog) {
        try {
          setExerciseLog(JSON.parse(savedLog))
        } catch (e) {
          console.error("Error parsing exercise log:", e)
          setExerciseLog([])
        }
      }
    }
  }, [])

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== "undefined") {
      // Save to localStorage whenever values change
      localStorage.setItem("exerciseMinutes", exerciseMinutes.toString())
      localStorage.setItem("exerciseProgress", progress.toString())
      localStorage.setItem("exerciseLog", JSON.stringify(exerciseLog))
    }
  }, [exerciseMinutes, progress, exerciseLog])

  const logExercise = () => {
    const newTotalMinutes = exerciseMinutes + duration
    setExerciseMinutes(newTotalMinutes)
    setProgress(Math.min(Math.round((newTotalMinutes / exerciseGoal) * 100), 100))

    const now = new Date()
    const dateString = now.toLocaleDateString("en-US", { month: "short", day: "numeric" })
    const timeString = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })

    // Calculate calories burned based on exercise type
    const caloriesPerMinute = exerciseTypes[exerciseType as keyof typeof exerciseTypes] || 5
    const caloriesBurned = Math.round(duration * caloriesPerMinute)

    const newLog: ExerciseLog = {
      type: exerciseType,
      duration: duration,
      date: dateString,
      time: timeString,
      calories: caloriesBurned,
    }

    setExerciseLog([...exerciseLog, newLog])

    // Show animation
    setShowAnimation(true)
    setTimeout(() => setShowAnimation(false), 1500)

    // Dispatch goal complete event if target reached
    if (newTotalMinutes >= exerciseGoal && exerciseMinutes < exerciseGoal) {
      const event = new Event("goalComplete")
      document.dispatchEvent(event)
    }
  }

  const resetExercise = () => {
    setExerciseMinutes(0)
    setProgress(0)
    setExerciseLog([])
  }

  // Calculate total calories burned
  const totalCalories = exerciseLog.reduce((total, log) => total + log.calories, 0)

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600&query=fitness%20exercise%20activity')] bg-cover bg-center opacity-5"></div>
          <CardHeader className="relative z-10">
            <CardTitle>Exercise Tracker</CardTitle>
            <CardDescription>Track your daily physical activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 relative z-10">
            <div className="flex justify-center">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-200 stroke-current"
                    strokeWidth="10"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                  ></circle>
                  <circle
                    className="text-green-500 stroke-current"
                    strokeWidth="10"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * progress) / 100}
                  ></circle>
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <div className={`text-2xl ${showAnimation ? "animate-pulse" : ""}`}>
                    {exerciseIcons[exerciseType] || <Activity className="h-8 w-8 text-green-500" />}
                  </div>
                  <span className="text-2xl font-bold mt-1">
                    {exerciseMinutes}/{exerciseGoal}
                  </span>
                  <span className="text-sm text-muted-foreground">minutes</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Exercise Type</label>
                  <Select value={exerciseType} onValueChange={setExerciseType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select exercise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="walking">🚶 Walking</SelectItem>
                      <SelectItem value="running">🏃 Running</SelectItem>
                      <SelectItem value="cycling">🚴 Cycling</SelectItem>
                      <SelectItem value="swimming">🏊 Swimming</SelectItem>
                      <SelectItem value="yoga">🧘 Yoga</SelectItem>
                      <SelectItem value="strength">🏋️ Strength Training</SelectItem>
                      <SelectItem value="hiit">⚡ HIIT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium">Duration (minutes)</label>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setDuration(Math.max(5, duration - 5))}
                      className="h-10 w-10"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(Number.parseInt(e.target.value) || 0)}
                      className="h-10 text-center mx-2"
                      min="5"
                      max="120"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setDuration(Math.min(120, duration + 5))}
                      className="h-10 w-10"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-4 pt-2">
                <Button variant="default" onClick={logExercise} className="bg-green-500 hover:bg-green-600">
                  <Timer className="h-4 w-4 mr-2" />
                  Log Exercise
                </Button>
                <Button variant="outline" size="sm" onClick={resetExercise}>
                  Reset
                </Button>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <div>
                <p className="text-sm font-medium">Total Calories Burned</p>
                <p className="text-2xl font-bold">{totalCalories} kcal</p>
              </div>
              <div>
                <p className="text-sm font-medium">Weekly Target</p>
                <p className="text-2xl font-bold">{exerciseGoal * 7} min</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600&query=fitness%20tracker%20activity%20log')] bg-cover bg-center opacity-5"></div>
          <CardHeader className="relative z-10">
            <CardTitle>Activity Log</CardTitle>
            <CardDescription>Your exercise history</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="space-y-4">
              {exerciseLog.length > 0 ? (
                exerciseLog.map((log, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div>
                      <p className="font-medium capitalize">
                        <span className="mr-2">{exerciseIcons[log.type] || "🏃"}</span>
                        {log.type}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {log.date} at {log.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p>{log.duration} min</p>
                      <p className="text-sm text-muted-foreground">{log.calories} kcal</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted-foreground">No exercise recorded today</p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start relative z-10">
            <Separator className="my-2" />
            <div className="space-y-2 w-full">
              <h4 className="font-medium">Exercise Benefits:</h4>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Improves cardiovascular health</li>
                <li>Increases strength and endurance</li>
                <li>Reduces stress and anxiety</li>
                <li>Improves sleep quality</li>
                <li>Boosts mood and energy levels</li>
              </ul>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
