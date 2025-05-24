"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Volume2, Square } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { audioController } from "@/lib/audio-controller"

export function AudioTest() {
  const { toast } = useToast()
  const [isPlaying, setIsPlaying] = useState(false)
  const [isStoppingAudio, setIsStoppingAudio] = useState(false)
  const audioContextRef = useRef<AudioContext | null>(null)
  const oscillatorRef = useRef<OscillatorNode | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAllAudio()
    }
  }, [])

  // Function to stop all audio
  const stopAllAudio = () => {
    setIsStoppingAudio(true)

    // Use our global audio controller to force stop all audio
    audioController.forceStopAllAudio()

    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop()
        oscillatorRef.current.disconnect()
        oscillatorRef.current = null
      } catch (e) {
        // Ignore errors if oscillator is already stopped
      }
    }

    if (gainNodeRef.current) {
      try {
        gainNodeRef.current.disconnect()
        gainNodeRef.current = null
      } catch (e) {
        // Ignore errors
      }
    }

    setIsPlaying(false)

    // After a short delay, reset the stopping state
    setTimeout(() => {
      setIsStoppingAudio(false)
    }, 300)
  }

  const playTestSound = () => {
    // First stop any existing audio
    stopAllAudio()

    // Wait a moment to ensure previous audio is stopped
    setTimeout(() => {
      try {
        // Create AudioContext if it doesn't exist
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
        }

        const context = audioContextRef.current

        // Create an oscillator
        const oscillator = context.createOscillator()
        const gainNode = context.createGain()

        oscillatorRef.current = oscillator
        gainNodeRef.current = gainNode

        // Configure the oscillator
        oscillator.type = "sine"
        oscillator.frequency.setValueAtTime(440, context.currentTime) // A4 note

        // Configure the gain (volume)
        gainNode.gain.setValueAtTime(0.1, context.currentTime) // Low volume
        gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 1)

        // Connect the nodes
        oscillator.connect(gainNode)
        gainNode.connect(context.destination)

        // Play the sound
        oscillator.start()
        oscillator.stop(context.currentTime + 1) // Stop after 1 second

        setIsPlaying(true)

        // Reset playing state after sound ends
        setTimeout(() => {
          setIsPlaying(false)
          stopAllAudio() // Ensure cleanup
          toast({
            title: "Audio test completed",
            description: "If you heard a beep sound, your audio system is working correctly.",
          })
        }, 1100) // Slightly longer than the sound duration
      } catch (error) {
        console.error("Error playing test sound:", error)
        toast({
          title: "Audio test failed",
          description: "There was an error playing the test sound. Please check your browser permissions.",
          variant: "destructive",
        })
        setIsPlaying(false)
        setIsStoppingAudio(false)
      }
    }, 300)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Audio System Test</CardTitle>
        <CardDescription>Test your browser's audio system</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm text-center text-muted-foreground">
            Click the button below to play a test sound. If you hear the sound, your audio system is working correctly.
          </p>
          <div className="flex space-x-2 w-full max-w-xs">
            <Button onClick={playTestSound} disabled={isPlaying || isStoppingAudio} className="flex-1">
              <Volume2 className="mr-2 h-4 w-4" />
              Play Test Sound
            </Button>

            {isPlaying && (
              <Button variant="destructive" onClick={stopAllAudio} className="w-24" disabled={isStoppingAudio}>
                {isStoppingAudio ? (
                  <Square className="mr-2 h-4 w-4 animate-pulse" />
                ) : (
                  <Square className="mr-2 h-4 w-4" />
                )}
                {isStoppingAudio ? "..." : "Stop"}
              </Button>
            )}
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            Note: Make sure your device volume is turned up and not muted.
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
