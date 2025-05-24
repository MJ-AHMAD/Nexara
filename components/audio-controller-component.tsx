"use client"

import { useEffect } from "react"
import { audioController } from "@/lib/audio-controller"

export function AudioControllerComponent() {
  useEffect(() => {
    // Force stop all audio when the component mounts
    audioController.forceStopAllAudio()

    // Add event listener for page unload
    const handleBeforeUnload = () => {
      audioController.forceStopAllAudio()
    }

    // Add event listener for visibility change (tab switching)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        audioController.forceStopAllAudio()
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    // Add keyboard shortcut for emergency stop (Escape key)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        audioController.forceStopAllAudio()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      // Clean up event listeners
      window.removeEventListener("beforeunload", handleBeforeUnload)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      window.removeEventListener("keydown", handleKeyDown)

      // Force stop all audio when the component unmounts
      audioController.forceStopAllAudio()
    }
  }, [])

  // This component doesn't render anything
  return null
}
