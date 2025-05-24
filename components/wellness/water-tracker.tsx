"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, MinusCircle, Droplet, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"

export function WaterTracker() {
  const [waterAmount, setWaterAmount] = useState(0)
  const [progress, setProgress] = useState(0)
  const [lastDrink, setLastDrink] = useState("")
  const [waterLog, setWaterLog] = useState<{ time: string; amount: number }[]>([])
  const [showWaterAnimation, setShowWaterAnimation] = useState(false)

  const waterGoal = 8 // 8 glasses (2 liters)

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== "undefined") {
      // Load saved data from localStorage
      const savedAmount = localStorage.getItem("waterAmount")
      const savedProgress = localStorage.getItem("waterProgress")
      const savedLog = localStorage.getItem("waterLog")

      if (savedAmount) setWaterAmount(Number.parseInt(savedAmount))
      if (savedProgress) setProgress(Number.parseInt(savedProgress))
      if (savedLog) {
        try {
          const parsedLog = JSON.parse(savedLog)
          setWaterLog(parsedLog)

          // Set last drink time
          if (parsedLog.length > 0) {
            setLastDrink(parsedLog[parsedLog.length - 1].time)
          }
        } catch (e) {
          console.error("Error parsing water log:", e)
          setWaterLog([])
        }
      }
    }
  }, [])

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== "undefined") {
      // Save to localStorage whenever values change
      localStorage.setItem("waterAmount", waterAmount.toString())
      localStorage.setItem("waterProgress", progress.toString())
      localStorage.setItem("waterLog", JSON.stringify(waterLog))
    }
  }, [waterAmount, progress, waterLog])

  const addWater = () => {
    if (waterAmount < waterGoal) {
      const newAmount = waterAmount + 1
      setWaterAmount(newAmount)
      setProgress(Math.round((newAmount / waterGoal) * 100))

      const now = new Date()
      const timeString = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
      setLastDrink(timeString)

      setWaterLog([...waterLog, { time: timeString, amount: 1 }])

      // Show water animation
      setShowWaterAnimation(true)
      setTimeout(() => setShowWaterAnimation(false), 1500)

      // Dispatch goal complete event if target reached
      if (newAmount === waterGoal) {
        const event = new Event("goalComplete")
        document.dispatchEvent(event)
      }
    }
  }

  const removeWater = () => {
    if (waterAmount > 0) {
      const newAmount = waterAmount - 1
      setWaterAmount(newAmount)
      setProgress(Math.round((newAmount / waterGoal) * 100))

      // Remove the last log entry
      if (waterLog.length > 0) {
        const newLog = [...waterLog]
        newLog.pop()
        setWaterLog(newLog)

        if (newLog.length > 0) {
          setLastDrink(newLog[newLog.length - 1].time)
        } else {
          setLastDrink("")
        }
      }
    }
  }

  const resetWater = () => {
    setWaterAmount(0)
    setProgress(0)
    setWaterLog([])
    setLastDrink("")
  }

  // Calculate time until next drink
  const getNextDrinkTime = () => {
    if (waterAmount >= waterGoal) return "Goal reached!"

    const wakeHours = 16 // Assuming 16 waking hours
    const remainingGlasses = waterGoal - waterAmount
    const hoursPerGlass = wakeHours / waterGoal

    return `Drink next glass in ${Math.round(hoursPerGlass * 60)} minutes`
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder-xtdhm.png')] bg-cover bg-center opacity-5"></div>
          <CardHeader className="relative z-10">
            <CardTitle>Water Intake Tracker</CardTitle>
            <CardDescription>Track your daily water consumption</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 relative z-10">
            <div className="flex justify-center">
              <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Water fill animation */}
                <div
                  className="absolute bottom-0 left-0 right-0 bg-blue-500/30 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    height: `${progress}%`,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                  }}
                ></div>

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
                    className="text-blue-500 stroke-current"
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
                  <Droplet className={`h-8 w-8 text-blue-500 ${showWaterAnimation ? "animate-bounce" : ""}`} />
                  <span className="text-2xl font-bold">
                    {waterAmount}/{waterGoal}
                  </span>
                  <span className="text-sm text-muted-foreground">glasses</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon" onClick={removeWater} disabled={waterAmount <= 0}>
                <MinusCircle className="h-4 w-4" />
              </Button>
              <Button
                variant="default"
                onClick={addWater}
                disabled={waterAmount >= waterGoal}
                className="bg-blue-500 hover:bg-blue-600"
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Glass
              </Button>
              <Button variant="outline" size="sm" onClick={resetWater}>
                Reset
              </Button>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Hydration Status</AlertTitle>
              <AlertDescription>
                {progress < 25
                  ? "You're dehydrated! Drink more water."
                  : progress < 50
                    ? "You need more water. Keep drinking!"
                    : progress < 75
                      ? "Good progress! Keep it up."
                      : progress < 100
                        ? "Almost there! Just a few more glasses."
                        : "Excellent! You've reached your water goal."}
              </AlertDescription>
            </Alert>

            <div className="text-sm text-muted-foreground">
              <p>{getNextDrinkTime()}</p>
              {lastDrink && <p>Last drink: {lastDrink}</p>}
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600&query=water%20glass%20hydration')] bg-cover bg-center opacity-5"></div>
          <CardHeader className="relative z-10">
            <CardTitle>Water Log</CardTitle>
            <CardDescription>Your water intake throughout the day</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="space-y-4">
              {waterLog.length > 0 ? (
                waterLog.map((log, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Droplet className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{log.time}</span>
                    </div>
                    <span>{log.amount} glass</span>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted-foreground">No water intake recorded today</p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start relative z-10">
            <Separator className="my-2" />
            <div className="space-y-2 w-full">
              <h4 className="font-medium">Benefits of Proper Hydration:</h4>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Improves physical performance</li>
                <li>Boosts energy levels and brain function</li>
                <li>Helps prevent headaches</li>
                <li>Aids digestion and prevents constipation</li>
                <li>Helps maintain healthy skin</li>
              </ul>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
