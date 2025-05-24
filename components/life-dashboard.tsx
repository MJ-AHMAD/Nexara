"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Calendar, TrendingUp, TrendingDown, Target, ClipboardList, Timer } from "lucide-react"
import { formatDhakaDate, formatDhakaTime } from "@/lib/date-utils"

export function LifeDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [lifePercentage, setLifePercentage] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState("")

  // Use global average life expectancy of 73 years
  const lifeExpectancy = 73

  // Calculate life percentage and time remaining
  useEffect(() => {
    const calculateLifeMetrics = () => {
      const now = new Date()
      setCurrentTime(now)

      // Assuming birth date of November 10, 1989
      const birthDate = new Date("1989-11-10")
      const ageInMilliseconds = now.getTime() - birthDate.getTime()
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)

      // Calculate percentage of life lived based on life expectancy
      const percentageLived = (ageInYears / lifeExpectancy) * 100
      setLifePercentage(Math.min(percentageLived, 100))

      // Calculate time remaining
      const remainingYears = Math.max(0, lifeExpectancy - ageInYears)
      const years = Math.floor(remainingYears)
      const months = Math.floor((remainingYears - years) * 12)
      const days = Math.floor(((remainingYears - years) * 12 - months) * 30.44)

      setTimeRemaining(`${years} years, ${months} months, ${days} days`)
    }

    calculateLifeMetrics()

    // Update every minute
    const interval = setInterval(calculateLifeMetrics, 60000)
    return () => clearInterval(interval)
  }, [])

  // Birth date: November 10, 1989
  const birthDate = new Date("1989-11-10")
  const [lifeStats, setLifeStats] = useState({
    totalDays: 0,
    totalYears: 0,
    productiveDays: 0,
    wastedDays: 0,
    accomplishments: 0,
    losses: 0,
    remainingProductiveYears: 0,
  })
  const [lifeCountdown, setLifeCountdown] = useState("")

  // Update current date every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Calculate life statistics
  useEffect(() => {
    const calculateStats = () => {
      // Calculate total days lived
      const totalMilliseconds = currentTime.getTime() - birthDate.getTime()
      const totalDays = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24))
      const totalYears = (totalMilliseconds / (1000 * 60 * 60 * 24 * 365.25)).toFixed(2)

      // Estimate productive vs wasted days (example calculation)
      // Assuming 60% productive days (this would be customized by the user)
      const productiveDays = Math.floor(totalDays * 0.6)
      const wastedDays = totalDays - productiveDays

      // Assuming average productive life is 75 years
      const remainingProductiveYears = Math.max(0, (75 - Number.parseFloat(totalYears)).toFixed(2))

      // Example accomplishments and losses (would be customized)
      const accomplishments = Math.floor(productiveDays / 100) // 1 accomplishment per 100 productive days
      const losses = Math.floor(wastedDays / 200) // 1 loss per 200 wasted days

      // Calculate life expectancy countdown (global average of 73 years)
      const lifeExpectancy = 73 * 365.25 * 24 * 60 * 60 * 1000 // 73 years in milliseconds
      const lifeElapsed = currentTime.getTime() - birthDate.getTime()
      const lifeRemaining = Math.max(0, lifeExpectancy - lifeElapsed)

      // Convert to years, days, hours, minutes, seconds
      const years = Math.floor(lifeRemaining / (1000 * 60 * 60 * 24 * 365.25))
      const days = Math.floor((lifeRemaining % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24))
      const hours = Math.floor((lifeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((lifeRemaining % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((lifeRemaining % (1000 * 60)) / 1000)

      setLifeCountdown(`${years}y ${days}d ${hours}h ${minutes}m ${seconds}s`)

      setLifeStats({
        totalDays,
        totalYears: Number.parseFloat(totalYears),
        productiveDays,
        wastedDays,
        accomplishments,
        losses,
        remainingProductiveYears: Number.parseFloat(remainingProductiveYears),
      })
    }

    calculateStats()

    // Update countdown every second
    const countdownTimer = setInterval(calculateStats, 1000)
    return () => clearInterval(countdownTimer)
  }, [currentTime])

  // Format time as HH:MM:SS for Dhaka time
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Dhaka",
    })
  }

  // Format date as Month Day, Year for Dhaka
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "Asia/Dhaka",
    })
  }

  // Calculate percentage of life lived (assuming average lifespan of 73 years)
  const productivePercentage = (lifeStats.productiveDays / lifeStats.totalDays) * 100

  return (
    <div className="space-y-6">
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex justify-between items-center">
            <span>Life Dashboard</span>
            <span className="text-sm font-normal text-muted-foreground">
              Based on {lifeExpectancy} year average life expectancy
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Life Progress</span>
                <span className="text-sm font-medium">{lifePercentage.toFixed(2)}%</span>
              </div>
              <Progress value={lifePercentage} className="h-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted/50 p-3 rounded-md">
                <div className="text-sm font-medium mb-1">Estimated Time Remaining</div>
                <div className="text-xl font-bold text-amber-500 animate-pulse">{timeRemaining}</div>
              </div>

              <div className="bg-muted/50 p-3 rounded-md">
                <div className="text-sm font-medium mb-1">Current Time (Dhaka)</div>
                <div className="text-xl font-mono">{formatDhakaTime(currentTime)}</div>
                <div className="text-sm text-muted-foreground">{formatDhakaDate(currentTime)}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl flex items-center">
            <Clock className="mr-2 h-6 w-6" />
            Life Dashboard
          </CardTitle>
          <CardDescription>Time accountability from birth ({formatDate(birthDate)}) to present</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-4">
            <div className="text-4xl font-bold">{formatTime(currentTime)}</div>
            <div className="text-muted-foreground">{formatDate(currentTime)}</div>
            <div className="text-sm">Dhaka, Bangladesh</div>
          </div>

          <div className="text-center mb-6 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
            <div className="text-sm font-medium text-red-700 dark:text-red-400 mb-1">Life Expectancy Countdown</div>
            <div className="text-2xl font-mono font-bold text-red-800 dark:text-red-300 flex items-center justify-center">
              <Timer className="h-5 w-5 mr-2" />
              {lifeCountdown}
            </div>
            <div className="text-xs text-red-600 dark:text-red-400 mt-1">
              Based on global average life expectancy (73 years)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Life Journey</span>
                <span className="text-sm text-muted-foreground">{lifePercentage.toFixed(1)}% complete</span>
              </div>
              <Progress value={lifePercentage} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Birth</span>
                <span>Current: {lifeStats.totalYears} years</span>
                <span>73 years</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Productivity Ratio</span>
                <span className="text-sm text-muted-foreground">{productivePercentage.toFixed(1)}% productive</span>
              </div>
              <Progress value={productivePercentage} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0%</span>
                <span>Target: 80%</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-muted/50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Total</span>
                </div>
                <div className="mt-2">
                  <div className="text-2xl font-bold">{lifeStats.totalDays.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Days Lived</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="text-xs text-muted-foreground">Productive</span>
                </div>
                <div className="mt-2">
                  <div className="text-2xl font-bold">{lifeStats.productiveDays.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Days Used Well</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <TrendingDown className="h-5 w-5 text-red-500" />
                  <span className="text-xs text-muted-foreground">Wasted</span>
                </div>
                <div className="mt-2">
                  <div className="text-2xl font-bold">{lifeStats.wastedDays.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Days Lost</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <Target className="h-5 w-5 text-blue-500" />
                  <span className="text-xs text-muted-foreground">Remaining</span>
                </div>
                <div className="mt-2">
                  <div className="text-2xl font-bold">{lifeStats.remainingProductiveYears}</div>
                  <p className="text-xs text-muted-foreground">Productive Years</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="achievements">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="achievements">
            <TrendingUp className="h-4 w-4 mr-2" />
            Achievements
          </TabsTrigger>
          <TabsTrigger value="future">
            <Target className="h-4 w-4 mr-2" />
            Future Goals
          </TabsTrigger>
          <TabsTrigger value="daily">
            <ClipboardList className="h-4 w-4 mr-2" />
            Daily Record
          </TabsTrigger>
        </TabsList>

        <TabsContent value="achievements">
          <Card>
            <CardHeader>
              <CardTitle>Life Balance Sheet</CardTitle>
              <CardDescription>What you've earned and what you've lost</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold flex items-center text-green-600">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Accomplishments
                  </h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <div>
                        <span className="font-medium">Knowledge & Skills:</span> Acquired expertise in programming, web
                        development, and data analysis
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <div>
                        <span className="font-medium">Projects:</span> Developed multiple community initiatives and
                        educational platforms
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <div>
                        <span className="font-medium">Relationships:</span> Built meaningful connections with community
                        members and collaborators
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <div>
                        <span className="font-medium">Impact:</span> Positively influenced education and sustainability
                        in Bangladesh
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold flex items-center text-red-600">
                    <TrendingDown className="h-5 w-5 mr-2" />
                    Losses
                  </h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <div>
                        <span className="font-medium">Time:</span> Approximately {lifeStats.wastedDays.toLocaleString()}{" "}
                        days not used to full potential
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <div>
                        <span className="font-medium">Opportunities:</span> Missed chances for growth and impact due to
                        procrastination
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <div>
                        <span className="font-medium">Health:</span> Periods of neglecting physical and mental wellbeing
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <div>
                        <span className="font-medium">Focus:</span> Energy dispersed across too many initiatives
                        simultaneously
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="future">
          <Card>
            <CardHeader>
              <CardTitle>Future Targets</CardTitle>
              <CardDescription>What you should accomplish and how much effort is required</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Target Achievements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-2 bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs">
                        1
                      </div>
                      <div>
                        <span className="font-medium">Educational Impact:</span> Expand educational platforms to reach
                        50,000+ students across Bangladesh
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs">
                        2
                      </div>
                      <div>
                        <span className="font-medium">Technological Innovation:</span> Develop 3 new technology
                        solutions addressing critical local challenges
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs">
                        3
                      </div>
                      <div>
                        <span className="font-medium">Community Development:</span> Transform Cox's Bazar into a model
                        for sustainable development
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs">
                        4
                      </div>
                      <div>
                        <span className="font-medium">Personal Growth:</span> Master 2 new technical skills annually and
                        publish research findings
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Required Effort</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30">
                      <CardContent className="p-4">
                        <h4 className="font-medium text-sm mb-2">Daily Investment</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex justify-between">
                            <span>Focused work:</span>
                            <span className="font-medium">6-8 hours</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Learning:</span>
                            <span className="font-medium">1-2 hours</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Planning:</span>
                            <span className="font-medium">30 minutes</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Reflection:</span>
                            <span className="font-medium">30 minutes</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30">
                      <CardContent className="p-4">
                        <h4 className="font-medium text-sm mb-2">Weekly Targets</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex justify-between">
                            <span>Project milestones:</span>
                            <span className="font-medium">3-5</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Networking:</span>
                            <span className="font-medium">2-3 hours</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Content creation:</span>
                            <span className="font-medium">4-6 hours</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Community engagement:</span>
                            <span className="font-medium">3-4 hours</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Productivity Formula</h3>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm">
                      To maximize your remaining {lifeStats.remainingProductiveYears} productive years:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li className="flex items-start">
                        <div className="mr-2">•</div>
                        <div>Increase daily productive time by 20% through better time management</div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2">•</div>
                        <div>Focus 80% of effort on the 20% of activities that produce the most impact</div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2">•</div>
                        <div>Eliminate 3 major time-wasting activities from your routine</div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2">•</div>
                        <div>Implement a weekly review system to continuously optimize your approach</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="daily">
          <Card>
            <CardHeader>
              <CardTitle>Daily Accountability Record</CardTitle>
              <CardDescription>Track each day's productivity and be your own judge</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <Card className="flex-1 bg-muted/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Today's Plan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <input type="checkbox" id="task1" className="mr-2 h-4 w-4" />
                          <label htmlFor="task1" className="text-sm">
                            Complete project milestone
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" id="task2" className="mr-2 h-4 w-4" />
                          <label htmlFor="task2" className="text-sm">
                            Learn new technical skill (1 hour)
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" id="task3" className="mr-2 h-4 w-4" />
                          <label htmlFor="task3" className="text-sm">
                            Community outreach (2 hours)
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" id="task4" className="mr-2 h-4 w-4" />
                          <label htmlFor="task4" className="text-sm">
                            Content creation for educational platform
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" id="task5" className="mr-2 h-4 w-4" />
                          <label htmlFor="task5" className="text-sm">
                            Review weekly goals and adjust
                          </label>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="flex-1 bg-muted/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Time Allocation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Productive Work</span>
                            <span>6 hours</span>
                          </div>
                          <Progress value={75} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Learning</span>
                            <span>1 hour</span>
                          </div>
                          <Progress value={50} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Rest & Renewal</span>
                            <span>2 hours</span>
                          </div>
                          <Progress value={100} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Wasted Time</span>
                            <span>1.5 hours</span>
                          </div>
                          <Progress value={30} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Daily Reflection</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-green-50 dark:bg-green-900/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base text-green-700 dark:text-green-400">Accomplishments</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <textarea
                          className="w-full h-24 p-2 text-sm bg-white/50 dark:bg-black/10 border rounded-md"
                          placeholder="What did you accomplish today?"
                        ></textarea>
                      </CardContent>
                    </Card>

                    <Card className="bg-red-50 dark:bg-red-900/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base text-red-700 dark:text-red-400">Time Wasted</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <textarea
                          className="w-full h-24 p-2 text-sm bg-white/50 dark:bg-black/10 border rounded-md"
                          placeholder="How did you waste time today?"
                        ></textarea>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-50 dark:bg-blue-900/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base text-blue-700 dark:text-blue-400">Tomorrow's Plan</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <textarea
                          className="w-full h-24 p-2 text-sm bg-white/50 dark:bg-black/10 border rounded-md"
                          placeholder="What will you accomplish tomorrow?"
                        ></textarea>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium">
                    Save Daily Record
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
