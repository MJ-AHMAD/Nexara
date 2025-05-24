"use client"

import { WellnessDashboard } from "@/components/wellness/wellness-dashboard"
import { useEffect } from "react"

export default function WellnessDashboardPage() {
  // Add sound effects for interactions
  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return

    // Create audio elements for different interactions
    const successSound = new Audio("/sounds/success.mp3")
    const clickSound = new Audio("/sounds/click.mp3")

    // Lower the volume
    successSound.volume = 0.3
    clickSound.volume = 0.2

    // Add event listeners for button clicks
    const handleButtonClick = () => {
      clickSound.currentTime = 0
      clickSound.play().catch((e) => console.log("Audio play failed:", e))
    }

    const handleSuccess = () => {
      successSound.currentTime = 0
      successSound.play().catch((e) => console.log("Audio play failed:", e))
    }

    // Add event listeners
    document.addEventListener("click", (e) => {
      if ((e.target as HTMLElement).tagName === "BUTTON") {
        handleButtonClick()
      }
    })

    // Custom event for goal completion
    document.addEventListener("goalComplete", handleSuccess)

    // Cleanup
    return () => {
      document.removeEventListener("click", handleButtonClick)
      document.removeEventListener("goalComplete", handleSuccess)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/abstract-wellness-pattern.png')] bg-repeat opacity-5 pointer-events-none"></div>

      {/* Main content */}
      <div className="relative z-10">
        <WellnessDashboard />
      </div>
    </div>
  )
}
