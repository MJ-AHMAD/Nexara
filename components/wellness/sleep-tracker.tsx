"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Moon, Clock, BedDouble, AlarmClock, Sparkles } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type SleepLog = {
  date: string
  bedtime: string
  wakeTime: string
  duration: number
  quality: number
}

export function SleepTracker() {
  const [sleepHours, setSleepHours] = useState(0)
  const [progress, setProgress] = useState(0)
  const [bedtime, setBedtime] = useState("22:30")
  const [wakeTime, setWakeTime] = useState("06:30")
  const [sleepQuality, setSleepQuality] = useState(3)
  const [sleepLog, setSleepLog] = useState<SleepLog[]>([])
  const [showAnimation, setShowAnimation] = useState(false)

  const sleepGoal = 8 // 8 hours daily

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== "undefined") {
      // Load saved data from localStorage
      const savedHours = localStorage.getItem("sleepHours")
      const savedProgress = localStorage.getItem("sleepProgress")
      const savedBedtime = localStorage.getItem("bedtime")
      const savedWakeTime = localStorage.getItem("wakeTime")
      const savedLog = localStorage.getItem("sleepLog")

      if (savedHours) setSleepHours(Number.parseFloat(savedHours))
      if (savedProgress) setProgress(Number.parseInt(savedProgress))
      if (savedBedtime) setBedtime(savedBedtime)
      if (savedWakeTime) setWakeTime(savedWakeTime)
      if (savedLog) {
        try {
          setSleepLog(JSON.parse(savedLog))
        } catch (e) {
          console.error("Error parsing sleep log:", e)
          setSleepLog([])
        }
      }
    }
  }, [])

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== "undefined") {
      // Save to localStorage whenever values change
      localStorage.setItem("sleepHours", sleepHours.toString())
      localStorage.setItem("sleepProgress", progress.toString())
      localStorage.setItem("bedtime", bedtime)
      localStorage.setItem("wakeTime", wakeTime)
      localStorage.setItem("sleepLog", JSON.stringify(sleepLog))
    }
  }, [sleepHours, progress, bedtime, wakeTime, sleepLog])

  const calculateSleepDuration = (bedtime: string, wakeTime: string) => {
    const [bedHours, bedMinutes] = bedtime.split(":").map(Number)
    const [wakeHours, wakeMinutes] = wakeTime.split(":").map(Number)

    let hours = wakeHours - bedHours
    let minutes = wakeMinutes - bedMinutes

    if (minutes < 0) {
      minutes += 60
      hours -= 1
    }

    if (hours < 0) {
      hours += 24
    }

    return hours + minutes / 60
  }

  const logSleep = () => {
    const duration = calculateSleepDuration(bedtime, wakeTime)
    setSleepHours(duration)
    setProgress(Math.min(Math.round((duration / sleepGoal) * 100), 100))

    const now = new Date()
    const dateString = now.toLocaleDateString("en-US", { month: "short", day: "numeric" })

    const newLog: SleepLog = {
      date: dateString,
      bedtime: bedtime,
      wakeTime: wakeTime,
      duration: duration,
      quality: sleepQuality,
    }

    setSleepLog([...sleepLog, newLog])

    // Show animation
    setShowAnimation(true)
    setTimeout(() => setShowAnimation(false), 1500)

    // Dispatch goal complete event if target reached
    if (duration >= sleepGoal && sleepHours < sleepGoal) {
      const event = new Event("goalComplete")
      document.dispatchEvent(event)
    }
  }

  const resetSleep = () => {
    setSleepHours(0)
    setProgress(0)
    setSleepLog([])
  }

  // Calculate average sleep quality
  const averageQuality =
    sleepLog.length > 0 ? Math.round(sleepLog.reduce((total, log) => total + log.quality, 0) / sleepLog.length) : 0

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600&query=night%20sky%20stars%20sleep')] bg-cover bg-center opacity-10"></div>
          <CardHeader className="relative z-10">
            <CardTitle>Sleep Tracker</CardTitle>
            <CardDescription>Track your sleep schedule and quality</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 relative z-10">
            <div className="flex justify-center">
              <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Night sky background in the circle */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-purple-900 opacity-30"></div>
                  {showAnimation && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles className="h-16 w-16 text-yellow-200 animate-pulse" />
                    </div>
                  )}
                </div>

                <svg className="w-full h-full relative z-10" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-200 stroke-current"
                    strokeWidth="10"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                  ></circle>
                  <circle
                    className="text-purple-500 stroke-current"
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
                  <Moon className="h-8 w-8 text-purple-500" />
                  <span className="text-2xl font-bold">
                    {sleepHours.toFixed(1)}/{sleepGoal}
                  </span>
                  <span className="text-sm text-muted-foreground">hours</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bedtime">Bedtime</Label>
                  <div className="flex items-center">
                    <BedDouble className="h-4 w-4 mr-2 text-muted-foreground" />
                    <Input id="bedtime" type="time" value={bedtime} onChange={(e) => setBedtime(e.target.value)} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wakeTime">Wake Time</Label>
                  <div className="flex items-center">
                    <AlarmClock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <Input id="wakeTime" type="time" value={wakeTime} onChange={(e) => setWakeTime(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Sleep Quality</Label>
                <div className="flex justify-between">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Button
                      key={rating}
                      type="button"
                      variant={sleepQuality === rating ? "default" : "outline"}
                      className={sleepQuality === rating ? "bg-purple-500 hover:bg-purple-600" : ""}
                      onClick={() => setSleepQuality(rating)}
                    >
                      {rating}
                    </Button>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground px-2">
                  <span>Poor</span>
                  <span>Excellent</span>
                </div>
              </div>

              <div className="flex justify-center space-x-4 pt-2">
                <Button variant="default" onClick={logSleep} className="bg-purple-500 hover:bg-purple-600">
                  <Clock className="h-4 w-4 mr-2" />
                  Log Sleep
                </Button>
                <Button variant="outline" size="sm" onClick={resetSleep}>
                  Reset
                </Button>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <div>
                <p className="text-sm font-medium">Optimal Bedtime</p>
                <p className="text-xl font-bold">10:30 PM</p>
              </div>
              <div>
                <p className="text-sm font-medium">Optimal Wake Time</p>
                <p className="text-xl font-bold">6:30 AM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600&query=sleep%20cycle%20chart')] bg-cover bg-center opacity-5"></div>
          <CardHeader className="relative z-10">
            <CardTitle>Sleep Log</CardTitle>
            <CardDescription>Your sleep history</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="space-y-4">
              {sleepLog.length > 0 ? (
                sleepLog.map((log, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div>
                      <p className="font-medium">{log.date}</p>
                      <p className="text-sm text-muted-foreground">
                        {log.bedtime} - {log.wakeTime}
                      </p>
                    </div>
                    <div className="text-right">
                      <p>{log.duration.toFixed(1)} hours</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Moon
                            key={i}
                            className={`h-3 w-3 ${i < log.quality ? "text-purple-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted-foreground">No sleep data recorded</p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start relative z-10">
            <Separator className="my-2" />
            <div className="space-y-2 w-full">
              <h4 className="font-medium">Sleep Tips:</h4>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Maintain a consistent sleep schedule</li>
                <li>Avoid screens 1 hour before bedtime</li>
                <li>Keep your bedroom cool and dark</li>
                <li>Limit caffeine after 2 PM</li>
                <li>Practice relaxation techniques before bed</li>
              </ul>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
