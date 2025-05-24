"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Droplet, Activity, Moon, Sun, Check, ArrowLeft, Heart, Sparkles } from "lucide-react"
import { WaterTracker } from "./water-tracker"
import { ExerciseTracker } from "./exercise-tracker"
import { SleepTracker } from "./sleep-tracker"
import { HabitTracker } from "./habit-tracker"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function WellnessDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [overallProgress, setOverallProgress] = useState(0)
  const [date, setDate] = useState("")
  const [waterAmount, setWaterAmount] = useState(0)
  const [waterProgress, setWaterProgress] = useState(0)
  const [exerciseMinutes, setExerciseMinutes] = useState(0)
  const [exerciseProgress, setExerciseProgress] = useState(0)
  const [sleepHours, setSleepHours] = useState(0)
  const [sleepProgress, setSleepProgress] = useState(0)
  const [completedHabits, setCompletedHabits] = useState(0)
  const [totalHabits, setTotalHabits] = useState(5)
  const [habitProgress, setHabitProgress] = useState(0)
  const [showMotivation, setShowMotivation] = useState(false)
  const [motivationalQuote, setMotivationalQuote] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  const motivationalQuotes = [
    "The only bad workout is the one that didn't happen.",
    "Small daily improvements lead to stunning results.",
    "Your health is an investment, not an expense.",
    "Take care of your body. It's the only place you have to live.",
    "Wellness is the complete integration of body, mind, and spirit.",
    "The greatest wealth is health.",
    "Healthy habits today create a better tomorrow.",
    "Your body hears everything your mind says.",
    "Wellness is not a destination, but a path to optimal wellbeing.",
    "Self-care is not selfish. You cannot serve from an empty vessel.",
  ]

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== "undefined") {
      // Load data from localStorage
      const storedWaterAmount = localStorage.getItem("waterAmount")
      const storedWaterProgress = localStorage.getItem("waterProgress")
      const storedExerciseMinutes = localStorage.getItem("exerciseMinutes")
      const storedExerciseProgress = localStorage.getItem("exerciseProgress")
      const storedSleepHours = localStorage.getItem("sleepHours")
      const storedSleepProgress = localStorage.getItem("sleepProgress")
      const storedCompletedHabits = localStorage.getItem("completedHabits")
      const storedTotalHabits = localStorage.getItem("totalHabits")
      const storedHabitProgress = localStorage.getItem("habitProgress")

      // Set state from localStorage if available
      if (storedWaterAmount) setWaterAmount(Number.parseInt(storedWaterAmount))
      if (storedWaterProgress) setWaterProgress(Number.parseInt(storedWaterProgress))
      if (storedExerciseMinutes) setExerciseMinutes(Number.parseInt(storedExerciseMinutes))
      if (storedExerciseProgress) setExerciseProgress(Number.parseInt(storedExerciseProgress))
      if (storedSleepHours) setSleepHours(Number.parseFloat(storedSleepHours))
      if (storedSleepProgress) setSleepProgress(Number.parseInt(storedSleepProgress))
      if (storedCompletedHabits) setCompletedHabits(Number.parseInt(storedCompletedHabits))
      if (storedTotalHabits) setTotalHabits(Number.parseInt(storedTotalHabits))
      if (storedHabitProgress) setHabitProgress(Number.parseInt(storedHabitProgress))

      // Calculate overall progress
      const overall = Math.round(
        ((storedWaterProgress ? Number.parseInt(storedWaterProgress) : 0) +
          (storedExerciseProgress ? Number.parseInt(storedExerciseProgress) : 0) +
          (storedSleepProgress ? Number.parseInt(storedSleepProgress) : 0) +
          (storedHabitProgress ? Number.parseInt(storedHabitProgress) : 0)) /
          4,
      )

      setOverallProgress(overall)

      // Set random motivational quote
      setMotivationalQuote(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)])

      // Show motivation if progress is good
      if (overall > 75) {
        setShowMotivation(true)
        setTimeout(() => setShowMotivation(false), 5000)
      }
    }

    // Set current date
    const today = new Date()
    setDate(today.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }))

    // Set loaded state after a small delay to trigger animations
    setTimeout(() => {
      setIsLoaded(true)
    }, 100)
  }, [])

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Enhanced Header with Background and Animations */}
      <div className="relative rounded-xl overflow-hidden mb-8 shadow-lg">
        <div className="absolute inset-0 bg-gradient-animated"></div>
        <div className="absolute inset-0 bg-[url('/wellness-header-bg.png')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>

        {/* Animated decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl animate-float animate-delay-300"></div>

        {/* Small animated particles */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-emerald-500/20 rounded-full blur-sm animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-blue-500/20 rounded-full blur-sm animate-pulse-subtle animate-delay-200"></div>
        <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-purple-500/20 rounded-full blur-sm animate-pulse-subtle animate-delay-400"></div>

        <div className="relative z-10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className={`flex items-center gap-2 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
                <Link
                  href="/"
                  className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transition-transform"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Home
                </Link>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <div
                  className={`bg-gradient-to-br from-teal-500 to-emerald-600 p-2 rounded-lg shadow-lg ${isLoaded ? "animate-slide-in-right animate-pulse-subtle" : "opacity-0"}`}
                >
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h1
                  className={`text-3xl font-bold tracking-tight ${isLoaded ? "animate-slide-in-right animate-delay-100" : "opacity-0"}`}
                >
                  Daily Wellness Dashboard
                </h1>
              </div>
              <p
                className={`text-muted-foreground mt-1 flex items-center ${isLoaded ? "animate-slide-in-right animate-delay-200" : "opacity-0"}`}
              >
                <span>{date}</span>
                {overallProgress > 75 && (
                  <span className="ml-2 inline-flex items-center text-amber-500">
                    <Sparkles className="h-4 w-4 mr-1 animate-sparkle" /> Great progress today!
                  </span>
                )}
              </p>
            </div>
            <div className={`flex items-center gap-2 ${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}>
              <Badge
                variant={overallProgress > 75 ? "success" : "outline"}
                className={`px-4 py-2 text-sm transition-all duration-300 ${
                  overallProgress > 75
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white animate-pulse-subtle"
                    : ""
                }`}
              >
                Overall Progress: {overallProgress}%
              </Badge>
              <Button
                variant="outline"
                size="sm"
                className="shadow-sm hover:shadow-md transition-shadow duration-300 hover:scale-105 transition-transform"
              >
                Export Data
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Motivational message */}
      {showMotivation && (
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-lg animate-fade-in-out relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/wellness-motivation-abstract.png')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10">
            <p className="font-medium text-lg">{motivationalQuote}</p>
            <p className="text-sm opacity-90">Keep up the great work! Your wellness journey is on track.</p>
          </div>
        </div>
      )}

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList
          className={`grid grid-cols-5 md:w-[600px] ${isLoaded ? "animate-slide-in-up animate-delay-300" : "opacity-0"}`}
        >
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="water">Water</TabsTrigger>
          <TabsTrigger value="exercise">Exercise</TabsTrigger>
          <TabsTrigger value="sleep">Sleep</TabsTrigger>
          <TabsTrigger value="habits">Habits</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-md ${isLoaded ? "animate-fade-in animate-delay-400" : "opacity-0"}`}
            >
              <div className="absolute inset-0 bg-blue-500/5"></div>
              <CardHeader className="pb-2 relative z-10">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Droplet className="h-4 w-4 mr-2 text-blue-500" />
                  Water Intake
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-2xl font-bold">{waterAmount}/8 glasses</div>
                <Progress value={waterProgress} className="h-2 mt-2" />
              </CardContent>
              <CardFooter className="pt-0 relative z-10">
                <p className="text-xs text-muted-foreground">Target: 2 liters (8 glasses)</p>
              </CardFooter>
            </Card>

            <Card
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-md ${isLoaded ? "animate-fade-in animate-delay-500" : "opacity-0"}`}
            >
              <div className="absolute inset-0 bg-green-500/5"></div>
              <CardHeader className="pb-2 relative z-10">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Activity className="h-4 w-4 mr-2 text-green-500" />
                  Exercise
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-2xl font-bold">{exerciseMinutes}/30 min</div>
                <Progress value={exerciseProgress} className="h-2 mt-2" />
              </CardContent>
              <CardFooter className="pt-0 relative z-10">
                <p className="text-xs text-muted-foreground">Target: 30 minutes daily</p>
              </CardFooter>
            </Card>

            <Card
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-md ${isLoaded ? "animate-fade-in animate-delay-500" : "opacity-0"}`}
            >
              <div className="absolute inset-0 bg-purple-500/5"></div>
              <CardHeader className="pb-2 relative z-10">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Moon className="h-4 w-4 mr-2 text-purple-500" />
                  Sleep
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-2xl font-bold">{sleepHours}/8 hours</div>
                <Progress value={sleepProgress} className="h-2 mt-2" />
              </CardContent>
              <CardFooter className="pt-0 relative z-10">
                <p className="text-xs text-muted-foreground">Target: 8 hours (10:30 PM - 6:30 AM)</p>
              </CardFooter>
            </Card>

            <Card
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-md ${isLoaded ? "animate-fade-in animate-delay-500" : "opacity-0"}`}
            >
              <div className="absolute inset-0 bg-amber-500/5"></div>
              <CardHeader className="pb-2 relative z-10">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Check className="h-4 w-4 mr-2 text-amber-500" />
                  Habits
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-2xl font-bold">
                  {completedHabits}/{totalHabits}
                </div>
                <Progress value={habitProgress} className="h-2 mt-2" />
              </CardContent>
              <CardFooter className="pt-0 relative z-10">
                <p className="text-xs text-muted-foreground">Daily habits completed</p>
              </CardFooter>
            </Card>
          </div>

          <Card
            className={`relative overflow-hidden transition-all duration-300 hover:shadow-md ${isLoaded ? "animate-fade-in animate-delay-500" : "opacity-0"}`}
          >
            <div className="absolute inset-0 bg-[url('/wellness-daily-routine.png')] bg-cover bg-center opacity-5"></div>
            <CardHeader className="relative z-10">
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>Your optimal daily routine</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Sun className="h-5 w-5 mr-2 text-amber-500" />
                    <div>
                      <p className="font-medium">Morning Routine</p>
                      <p className="text-sm text-muted-foreground">6:30 AM - 8:00 AM</p>
                    </div>
                  </div>
                  <Badge variant={Math.random() > 0.5 ? "success" : "outline"}>
                    {Math.random() > 0.5 ? "Completed" : "Pending"}
                  </Badge>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-green-500" />
                    <div>
                      <p className="font-medium">Exercise</p>
                      <p className="text-sm text-muted-foreground">7:00 AM - 7:30 AM</p>
                    </div>
                  </div>
                  <Badge variant={exerciseProgress > 50 ? "success" : "outline"}>
                    {exerciseProgress > 50 ? "Completed" : "Pending"}
                  </Badge>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Droplet className="h-5 w-5 mr-2 text-blue-500" />
                    <div>
                      <p className="font-medium">Drink Water</p>
                      <p className="text-sm text-muted-foreground">Throughout the day (8 glasses)</p>
                    </div>
                  </div>
                  <Badge variant={waterProgress > 50 ? "success" : "outline"}>
                    {waterProgress > 50 ? "On Track" : "Behind"}
                  </Badge>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Moon className="h-5 w-5 mr-2 text-purple-500" />
                    <div>
                      <p className="font-medium">Bedtime Routine</p>
                      <p className="text-sm text-muted-foreground">10:00 PM - 10:30 PM</p>
                    </div>
                  </div>
                  <Badge variant="outline">Upcoming</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="water">
          <WaterTracker />
        </TabsContent>

        <TabsContent value="exercise">
          <ExerciseTracker />
        </TabsContent>

        <TabsContent value="sleep">
          <SleepTracker />
        </TabsContent>

        <TabsContent value="habits">
          <HabitTracker />
        </TabsContent>
      </Tabs>
    </div>
  )
}
