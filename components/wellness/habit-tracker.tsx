"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Check, Plus, Trash2, Sparkles } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Habit = {
  id: string
  name: string
  completed: boolean
  streak: number
  category: string
}

export function HabitTracker() {
  const [habits, setHabits] = useState<Habit[]>([
    { id: "1", name: "Drink 8 glasses of water", completed: false, streak: 0, category: "health" },
    { id: "2", name: "Exercise for 30 minutes", completed: false, streak: 0, category: "fitness" },
    { id: "3", name: "Read for 20 minutes", completed: false, streak: 0, category: "personal" },
    { id: "4", name: "Meditate for 10 minutes", completed: false, streak: 0, category: "mindfulness" },
    { id: "5", name: "Plan tomorrow's tasks", completed: false, streak: 0, category: "productivity" },
  ])

  const [newHabitName, setNewHabitName] = useState("")
  const [newHabitCategory, setNewHabitCategory] = useState("health")
  const [completedHabits, setCompletedHabits] = useState(0)
  const [progress, setProgress] = useState(0)
  const [recentlyCompleted, setRecentlyCompleted] = useState<string | null>(null)

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== "undefined") {
      // Load saved data from localStorage
      const savedHabits = localStorage.getItem("habits")
      const savedCompleted = localStorage.getItem("completedHabits")
      const savedProgress = localStorage.getItem("habitProgress")

      if (savedHabits) {
        try {
          setHabits(JSON.parse(savedHabits))
        } catch (e) {
          console.error("Error parsing habits:", e)
        }
      }
      if (savedCompleted) setCompletedHabits(Number.parseInt(savedCompleted))
      if (savedProgress) setProgress(Number.parseInt(savedProgress))
    }
  }, [])

  useEffect(() => {
    // Calculate completed habits
    const completed = habits.filter((habit) => habit.completed).length
    setCompletedHabits(completed)
    setProgress(Math.round((completed / habits.length) * 100))

    // Only run on client-side
    if (typeof window !== "undefined") {
      // Save to localStorage
      localStorage.setItem("habits", JSON.stringify(habits))
      localStorage.setItem("completedHabits", completed.toString())
      localStorage.setItem("habitProgress", progress.toString())
      localStorage.setItem("totalHabits", habits.length.toString())
    }
  }, [habits, progress])

  const toggleHabit = (id: string) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === id) {
          const newCompleted = !habit.completed

          // If completing a habit, show animation and possibly trigger goal complete
          if (newCompleted) {
            setRecentlyCompleted(id)
            setTimeout(() => setRecentlyCompleted(null), 2000)

            // Check if this completes all habits
            const currentCompleted = habits.filter((h) => h.completed).length
            if (currentCompleted === habits.length - 1) {
              // This is the last habit to complete
              const event = new Event("goalComplete")
              document.dispatchEvent(event)
            }
          }

          return {
            ...habit,
            completed: newCompleted,
            streak: newCompleted ? habit.streak + 1 : habit.streak,
          }
        }
        return habit
      }),
    )
  }

  const addHabit = () => {
    if (newHabitName.trim()) {
      const newHabit: Habit = {
        id: Date.now().toString(),
        name: newHabitName.trim(),
        completed: false,
        streak: 0,
        category: newHabitCategory,
      }

      setHabits([...habits, newHabit])
      setNewHabitName("")
    }
  }

  const deleteHabit = (id: string) => {
    setHabits(habits.filter((habit) => habit.id !== id))
  }

  const resetHabits = () => {
    setHabits(
      habits.map((habit) => ({
        ...habit,
        completed: false,
      })),
    )
  }

  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "health":
        return "text-blue-500"
      case "fitness":
        return "text-green-500"
      case "personal":
        return "text-purple-500"
      case "mindfulness":
        return "text-amber-500"
      case "productivity":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  // Get category emoji
  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case "health":
        return "💧"
      case "fitness":
        return "🏃"
      case "personal":
        return "📚"
      case "mindfulness":
        return "🧘"
      case "productivity":
        return "✅"
      default:
        return "🔄"
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600&query=habit%20tracker%20productivity')] bg-cover bg-center opacity-5"></div>
          <CardHeader className="relative z-10">
            <CardTitle>Habit Tracker</CardTitle>
            <CardDescription>Track your daily habits and build consistency</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 relative z-10">
            <div className="flex justify-center">
              <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Confetti animation when all habits completed */}
                {progress === 100 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="h-16 w-16 text-amber-500 animate-pulse" />
                  </div>
                )}

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
                    className="text-amber-500 stroke-current"
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
                  <Check className="h-8 w-8 text-amber-500" />
                  <span className="text-2xl font-bold">
                    {completedHabits}/{habits.length}
                  </span>
                  <span className="text-sm text-muted-foreground">habits</span>
                </div>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-amber-500 hover:bg-amber-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Habit
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Habit</DialogTitle>
                  <DialogDescription>Create a new habit to track daily.</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="habit-name">Habit Name</Label>
                    <Input
                      id="habit-name"
                      placeholder="e.g., Drink water, Exercise, Read..."
                      value={newHabitName}
                      onChange={(e) => setNewHabitName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="habit-category">Category</Label>
                    <select
                      id="habit-category"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={newHabitCategory}
                      onChange={(e) => setNewHabitCategory(e.target.value)}
                    >
                      <option value="health">Health</option>
                      <option value="fitness">Fitness</option>
                      <option value="personal">Personal</option>
                      <option value="mindfulness">Mindfulness</option>
                      <option value="productivity">Productivity</option>
                    </select>
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={addHabit} className="bg-amber-500 hover:bg-amber-600">
                    Add Habit
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <div className="space-y-2">
              {habits.map((habit) => (
                <div
                  key={habit.id}
                  className={`flex items-center justify-between p-3 border rounded-lg transition-all duration-300 ${
                    recentlyCompleted === habit.id ? "bg-amber-100 dark:bg-amber-900/20" : ""
                  }`}
                >
                  <div className="flex items-center">
                    <Button
                      variant={habit.completed ? "default" : "outline"}
                      size="icon"
                      className={`mr-2 h-8 w-8 ${habit.completed ? "bg-amber-500 hover:bg-amber-600" : ""}`}
                      onClick={() => toggleHabit(habit.id)}
                    >
                      {habit.completed ? <Check className="h-4 w-4" /> : null}
                    </Button>
                    <div>
                      <p className={`font-medium ${habit.completed ? "line-through text-muted-foreground" : ""}`}>
                        <span className="mr-2">{getCategoryEmoji(habit.category)}</span>
                        {habit.name}
                      </p>
                      <div className="flex items-center">
                        <span className={`text-xs ${getCategoryColor(habit.category)}`}>
                          {habit.category.charAt(0).toUpperCase() + habit.category.slice(1)}
                        </span>
                        {habit.streak > 0 && (
                          <Badge variant="outline" className="ml-2 text-xs">
                            {habit.streak} day streak 🔥
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => deleteHabit(habit.id)}>
                    <Trash2 className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={resetHabits} className="w-full">
              Reset All Habits
            </Button>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600&query=habit%20building%20consistency')] bg-cover bg-center opacity-5"></div>
          <CardHeader className="relative z-10">
            <CardTitle>Habit Statistics</CardTitle>
            <CardDescription>Your habit performance and streaks</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground">Completion Rate</p>
                  <p className="text-2xl font-bold">{progress}%</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground">Longest Streak</p>
                  <p className="text-2xl font-bold">
                    {habits.length > 0 ? Math.max(...habits.map((h) => h.streak)) : 0} days
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium mb-2">Habits by Category</h4>
                <div className="space-y-2">
                  {["health", "fitness", "personal", "mindfulness", "productivity"].map((category) => {
                    const categoryHabits = habits.filter((h) => h.category === category)
                    const completed = categoryHabits.filter((h) => h.completed).length
                    const total = categoryHabits.length

                    if (total === 0) return null

                    return (
                      <div key={category} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div
                            className={`w-3 h-3 rounded-full mr-2 ${getCategoryColor(category).replace("text-", "bg-")}`}
                          ></div>
                          <span className="capitalize">
                            {getCategoryEmoji(category)} {category}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span>
                            {completed}/{total}
                          </span>
                          <Progress value={total > 0 ? (completed / total) * 100 : 0} className="h-2 w-20 ml-2" />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start relative z-10">
            <Separator className="my-2" />
            <div className="space-y-2 w-full">
              <h4 className="font-medium">Habit Building Tips:</h4>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Start with small, achievable habits</li>
                <li>Connect new habits to existing routines</li>
                <li>Track your progress consistently</li>
                <li>Focus on consistency, not perfection</li>
                <li>Celebrate your streaks and milestones</li>
              </ul>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
