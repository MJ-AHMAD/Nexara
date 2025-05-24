"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Globe, Rocket, ArrowUp } from "lucide-react"

export function ISSTracker() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [issData, setIssData] = useState({
    latitude: -80.6789,
    longitude: -47.421,
    velocity: 27976.08,
    altitude: 409.37,
    lastUpdated: new Date(),
  })

  // Update the current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Simulate ISS data updates every 30 seconds
  useEffect(() => {
    const updateISSData = () => {
      // In a real application, this would fetch data from an API
      // Here we're just simulating small changes to the values
      setIssData({
        latitude: issData.latitude + (Math.random() * 0.2 - 0.1),
        longitude: issData.longitude + (Math.random() * 0.2 - 0.1),
        velocity: issData.velocity + (Math.random() * 10 - 5),
        altitude: issData.altitude + (Math.random() * 0.5 - 0.25),
        lastUpdated: new Date(),
      })
    }

    const dataTimer = setInterval(updateISSData, 30000)
    return () => clearInterval(dataTimer)
  }, [issData])

  // Format time as HH:MM:SS AM/PM
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
  }

  // Format date as MM/DD/YYYY
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">ISS Real-time Update</h2>
        <p className="text-lg text-muted-foreground">
          {formatTime(currentTime)} | {formatDate(currentTime)}
        </p>
      </div>

      <p className="text-center max-w-[800px] mx-auto text-muted-foreground">
        Experience the cutting-edge of space technology with our real-time data feed from the International Space
        Station.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              ISS Location
            </CardTitle>
            <CardDescription>Current position</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Latitude</div>
                <div className="text-2xl font-bold">{issData.latitude.toFixed(4)}°</div>
              </div>
              <Separator />
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Longitude</div>
                <div className="text-2xl font-bold">{issData.longitude.toFixed(4)}°</div>
              </div>
              <div className="text-xs text-muted-foreground">Last updated: {formatTime(issData.lastUpdated)}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-primary" />
              ISS Velocity
            </CardTitle>
            <CardDescription>Current speed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold">{issData.velocity.toFixed(2)} km/h</div>
                <div className="text-sm text-muted-foreground mt-1">Orbiting Earth every ~90 minutes</div>
              </div>
              <div className="text-xs text-muted-foreground">Last updated: {formatTime(issData.lastUpdated)}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <ArrowUp className="h-5 w-5 text-primary" />
              ISS Altitude
            </CardTitle>
            <CardDescription>Current height</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold">{issData.altitude.toFixed(2)} km</div>
                <div className="text-sm text-muted-foreground mt-1">Above Earth's surface</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle>Live Earth View from ISS</CardTitle>
          <CardDescription>
            Experience a real-time view of our beautiful planet from the International Space Station as it orbits Earth,
            featuring stunning spacewalk footage.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="aspect-video bg-muted relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/earth-from-iss.png"
                alt="Live Earth view from the International Space Station"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                LIVE
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
