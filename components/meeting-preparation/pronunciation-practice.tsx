"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Mic,
  FileText,
  Settings,
  RefreshCw,
  Save,
  Trash2,
  Square,
  AlertTriangle,
} from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { audioController } from "@/lib/audio-controller"

interface PronunciationPracticeProps {
  documents?: Array<{
    id: string
    name: string
    content: string
  }>
}

export function PronunciationPractice({ documents = [] }: PronunciationPracticeProps) {
  const { toast } = useToast()
  const [text, setText] = useState("")
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [currentMode, setCurrentMode] = useState<"word" | "sentence">("sentence")
  const [rate, setRate] = useState(0.8)
  const [pitch, setPitch] = useState(1)
  const [volume, setVolume] = useState(1)
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null)
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [segments, setSegments] = useState<string[]>([])
  const [highlightedText, setHighlightedText] = useState("")
  const [autoAdvance, setAutoAdvance] = useState(true)
  const [repeatCount, setRepeatCount] = useState(1)
  const [currentRepeat, setCurrentRepeat] = useState(0)
  const [showSettings, setShowSettings] = useState(false)
  const [recordedAudio, setRecordedAudio] = useState<string | null>(null)
  const [isRecording, setIsRecording] = useState(false)
  const [savedPractices, setSavedPractices] = useState<Array<{ name: string; text: string }>>([])
  const [speechSynthesisAvailable, setSpeechSynthesisAvailable] = useState(true)
  const [isTesting, setIsTesting] = useState(false)
  const [isStoppingAudio, setIsStoppingAudio] = useState(false)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<BlobPart[]>([])
  const speechSynthesisRef = useRef<SpeechSynthesis | null>(null)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const audioElementRef = useRef<HTMLAudioElement | null>(null)

  // Clear any pending timeouts
  const clearTimeouts = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  // Initialize speech synthesis
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      speechSynthesisRef.current = window.speechSynthesis

      // Force cancel any ongoing speech
      try {
        speechSynthesisRef.current.cancel()
      } catch (e) {
        console.error("Error cancelling speech:", e)
      }

      const loadVoices = () => {
        try {
          const voices = speechSynthesisRef.current?.getVoices() || []
          const englishVoices = voices.filter((voice) => voice.lang.includes("en"))
          setAvailableVoices(englishVoices)

          // Set a default voice (preferably a female English voice)
          const defaultVoice =
            englishVoices.find((v) => v.name.includes("Female") && v.lang.includes("en-US")) ||
            englishVoices.find((v) => v.lang.includes("en-US")) ||
            (englishVoices.length > 0 ? englishVoices[0] : null)

          if (defaultVoice) setVoice(defaultVoice)
        } catch (e) {
          console.error("Error loading voices:", e)
        }
      }

      // Chrome loads voices asynchronously
      if (speechSynthesisRef.current?.onvoiceschanged !== undefined) {
        speechSynthesisRef.current.onvoiceschanged = loadVoices
      }

      loadVoices()

      // Load saved practices from localStorage
      const savedItems = localStorage.getItem("pronunciation-practices")
      if (savedItems) {
        try {
          setSavedPractices(JSON.parse(savedItems))
        } catch (e) {
          console.error("Failed to load saved practices", e)
        }
      }
    } else {
      console.error("Speech synthesis not supported")
      setSpeechSynthesisAvailable(false)
      toast({
        title: "Speech synthesis not supported",
        description: "Your browser doesn't support speech synthesis. Please try using Chrome, Edge, or Safari.",
        variant: "destructive",
      })
    }

    // Create a hidden audio element for recorded audio
    const audioElement = new Audio()
    audioElementRef.current = audioElement

    return () => {
      // Cleanup function
      stopAllAudio()

      // Clean up audio element
      if (audioElementRef.current) {
        audioElementRef.current.pause()
        audioElementRef.current.src = ""
      }
    }
  }, [])

  // Update segments when text or mode changes
  useEffect(() => {
    if (currentMode === "word") {
      setSegments(text.trim().split(/\s+/))
    } else {
      // Split by sentence - look for .!? followed by space or end of string
      setSegments(text.trim().split(/(?<=[.!?])\s+|(?<=[.!?])$/))
    }
    setCurrentIndex(0)
    setCurrentRepeat(0)
    updateHighlightedText(0)
  }, [text, currentMode])

  // Load document content when selected
  useEffect(() => {
    if (selectedDocument) {
      const doc = documents.find((d) => d.id === selectedDocument)
      if (doc) {
        setText(doc.content)
      }
    }
  }, [selectedDocument, documents])

  // Stop all audio when component unmounts
  useEffect(() => {
    return () => {
      stopAllAudio()
    }
  }, [])

  // Function to stop all audio playback
  const stopAllAudio = () => {
    setIsStoppingAudio(true)

    // Use our global audio controller to force stop all audio
    audioController.forceStopAllAudio()

    // Cancel speech synthesis
    if (speechSynthesisRef.current) {
      try {
        speechSynthesisRef.current.cancel()

        // Some browsers need multiple cancel calls
        setTimeout(() => {
          if (speechSynthesisRef.current) {
            speechSynthesisRef.current.cancel()
          }
        }, 50)
      } catch (e) {
        console.error("Error cancelling speech:", e)
      }
    }

    // Clear any pending timeouts
    clearTimeouts()

    // Reset state
    setIsPlaying(false)
    setIsPaused(false)
    setIsTesting(false)

    // Stop recording if active
    if (isRecording && mediaRecorderRef.current) {
      try {
        mediaRecorderRef.current.stop()
        setIsRecording(false)
      } catch (e) {
        console.error("Error stopping recording:", e)
      }
    }

    // Reset audio element if it exists
    if (audioElementRef.current) {
      try {
        audioElementRef.current.pause()
        audioElementRef.current.currentTime = 0
      } catch (e) {
        console.error("Error resetting audio element:", e)
      }
    }

    // After a short delay, reset the stopping state
    setTimeout(() => {
      setIsStoppingAudio(false)
    }, 300)
  }

  // Update highlighted text based on current index
  const updateHighlightedText = (index: number) => {
    if (segments.length === 0) return

    let highlighted = ""
    for (let i = 0; i < segments.length; i++) {
      if (i === index) {
        highlighted += `<span class="bg-primary/20 text-primary font-bold">${segments[i]}</span>`
      } else {
        highlighted += segments[i]
      }

      if (currentMode === "word" && i < segments.length - 1) {
        highlighted += " "
      } else if (currentMode === "sentence" && i < segments.length - 1) {
        highlighted += " "
      }
    }

    setHighlightedText(highlighted)
  }

  // Speech synthesis functions
  const speakSegment = (index: number) => {
    if (!speechSynthesisAvailable || !speechSynthesisRef.current) {
      toast({
        title: "Speech synthesis not available",
        description: "Your browser doesn't support speech synthesis.",
        variant: "destructive",
      })
      return
    }

    if (!voice || index >= segments.length || segments.length === 0) return

    // Cancel any ongoing speech
    stopPlayback()

    const segment = segments[index]
    if (!segment.trim()) {
      handleSpeechEnd()
      return
    }

    try {
      const utterance = new SpeechSynthesisUtterance(segment)
      utterance.voice = voice
      utterance.rate = rate
      utterance.pitch = pitch
      utterance.volume = volume

      utterance.onend = handleSpeechEnd
      utterance.onerror = (event) => {
        console.error("SpeechSynthesis error:", event)
        toast({
          title: "Speech synthesis error",
          description: "There was an error playing the audio. Please try again.",
          variant: "destructive",
        })
        handleSpeechEnd()
      }

      utteranceRef.current = utterance

      // Set the global state to indicate speech is active
      audioController.setSpeechSynthesisActive(true)

      speechSynthesisRef.current.speak(utterance)
      updateHighlightedText(index)
    } catch (error) {
      console.error("Error in speech synthesis:", error)
      toast({
        title: "Speech synthesis error",
        description: "There was an error initializing the speech system. Please refresh the page and try again.",
        variant: "destructive",
      })

      // Reset the global state
      audioController.setSpeechSynthesisActive(false)
    }
  }

  const handleSpeechEnd = () => {
    // Clear any existing timeouts
    clearTimeouts()

    if (currentRepeat < repeatCount - 1) {
      // Repeat the same segment
      setCurrentRepeat((prev) => prev + 1)
      timeoutRef.current = setTimeout(() => speakSegment(currentIndex), 500)
    } else {
      // Move to next segment if autoAdvance is enabled
      setCurrentRepeat(0)
      if (autoAdvance && currentIndex < segments.length - 1) {
        const nextIndex = currentIndex + 1
        setCurrentIndex(nextIndex)
        timeoutRef.current = setTimeout(() => speakSegment(nextIndex), 500)
      } else if (autoAdvance && currentIndex === segments.length - 1) {
        // Reached the end
        setIsPlaying(false)

        // Reset the global state
        audioController.setSpeechSynthesisActive(false)

        toast({
          title: "Practice completed",
          description: "You've reached the end of the text.",
        })
      }
    }
  }

  // Playback controls
  const togglePlayPause = () => {
    if (segments.length === 0) return

    if (isPlaying) {
      if (speechSynthesisRef.current?.speaking) {
        if (isPaused) {
          try {
            speechSynthesisRef.current.resume()
            setIsPaused(false)
          } catch (e) {
            console.error("Error resuming speech:", e)
            // If resume fails, try to restart
            stopPlayback()
            setIsPlaying(true)
            setIsPaused(false)
            speakSegment(currentIndex)
          }
        } else {
          try {
            speechSynthesisRef.current.pause()
            setIsPaused(true)
          } catch (e) {
            console.error("Error pausing speech:", e)
            stopPlayback()
          }
        }
      } else {
        // If not speaking but isPlaying is true, restart
        speakSegment(currentIndex)
      }
    } else {
      setIsPlaying(true)
      setIsPaused(false)
      speakSegment(currentIndex)
    }
  }

  const stopPlayback = () => {
    if (speechSynthesisRef.current) {
      try {
        speechSynthesisRef.current.cancel()

        // Reset the global state
        audioController.setSpeechSynthesisActive(false)
      } catch (e) {
        console.error("Error cancelling speech:", e)
      }
    }

    clearTimeouts()
  }

  const nextSegment = () => {
    stopPlayback()
    if (currentIndex < segments.length - 1) {
      const nextIndex = currentIndex + 1
      setCurrentIndex(nextIndex)
      updateHighlightedText(nextIndex)
      setCurrentRepeat(0)

      if (isPlaying) {
        timeoutRef.current = setTimeout(() => speakSegment(nextIndex), 100)
      }
    }
  }

  const previousSegment = () => {
    stopPlayback()
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1
      setCurrentIndex(prevIndex)
      updateHighlightedText(prevIndex)
      setCurrentRepeat(0)

      if (isPlaying) {
        timeoutRef.current = setTimeout(() => speakSegment(prevIndex), 100)
      }
    }
  }

  // Recording functions
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" })
        const audioUrl = URL.createObjectURL(audioBlob)
        setRecordedAudio(audioUrl)

        // Stop all tracks on the stream
        stream.getTracks().forEach((track) => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)

      toast({
        title: "Recording started",
        description: "Speak now to record your pronunciation.",
      })
    } catch (error) {
      console.error("Error accessing microphone:", error)
      toast({
        title: "Microphone access denied",
        description: "Please allow microphone access to record your pronunciation.",
        variant: "destructive",
      })
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)

      toast({
        title: "Recording stopped",
        description: "Your pronunciation has been recorded.",
      })
    }
  }

  // Save and load functions
  const savePractice = () => {
    if (!text.trim()) {
      toast({
        title: "Cannot save empty practice",
        description: "Please enter some text before saving.",
        variant: "destructive",
      })
      return
    }

    const practiceName = prompt("Enter a name for this practice session:")
    if (!practiceName) return

    const newPractice = { name: practiceName, text }
    const updatedPractices = [...savedPractices, newPractice]

    setSavedPractices(updatedPractices)
    localStorage.setItem("pronunciation-practices", JSON.stringify(updatedPractices))

    toast({
      title: "Practice saved",
      description: `"${practiceName}" has been saved successfully.`,
    })
  }

  const loadPractice = (index: number) => {
    if (index >= 0 && index < savedPractices.length) {
      setText(savedPractices[index].text)
      stopPlayback()
      setCurrentIndex(0)
      setCurrentRepeat(0)

      toast({
        title: "Practice loaded",
        description: `"${savedPractices[index].name}" has been loaded.`,
      })
    }
  }

  const deletePractice = (index: number) => {
    const updatedPractices = [...savedPractices]
    updatedPractices.splice(index, 1)

    setSavedPractices(updatedPractices)
    localStorage.setItem("pronunciation-practices", JSON.stringify(updatedPractices))

    toast({
      title: "Practice deleted",
      description: "The practice session has been deleted.",
    })
  }

  const testSound = () => {
    if (!speechSynthesisAvailable || !speechSynthesisRef.current) {
      toast({
        title: "Speech synthesis not available",
        description: "Your browser doesn't support speech synthesis.",
        variant: "destructive",
      })
      return
    }

    // Cancel any ongoing speech and clear timeouts
    stopAllAudio()
    setIsTesting(true)

    try {
      const testUtterance = new SpeechSynthesisUtterance("This is a test. Your sound system is working correctly.")
      if (voice) {
        testUtterance.voice = voice
      }
      testUtterance.rate = rate
      testUtterance.pitch = pitch
      testUtterance.volume = volume

      testUtterance.onend = () => {
        setIsTesting(false)

        // Reset the global state
        audioController.setSpeechSynthesisActive(false)

        toast({
          title: "Sound test completed",
          description: "If you heard the test message, your sound system is working correctly.",
        })
      }

      testUtterance.onerror = (event) => {
        console.error("SpeechSynthesis error:", event)
        setIsTesting(false)

        // Reset the global state
        audioController.setSpeechSynthesisActive(false)

        toast({
          title: "Sound test failed",
          description: "There was an error playing the test sound.",
          variant: "destructive",
        })
      }

      // Set the global state to indicate speech is active
      audioController.setSpeechSynthesisActive(true)

      speechSynthesisRef.current.speak(testUtterance)
    } catch (e) {
      console.error("Error in test sound:", e)
      setIsTesting(false)

      // Reset the global state
      audioController.setSpeechSynthesisActive(false)

      toast({
        title: "Sound test failed",
        description: "There was an error initializing the speech system.",
        variant: "destructive",
      })
    }
  }

  // Add a sample document if none are provided
  const effectiveDocuments =
    documents.length > 0
      ? documents
      : [
          {
            id: "sample-1",
            name: "Sample Presentation Introduction",
            content:
              "Good morning everyone. I'm delighted to present our Infinity Nexus sponsorship proposal. Today, I'll walk you through our vision, the market opportunity, and the benefits of partnering with us. Our goal is to create a sustainable impact while providing excellent returns on your investment.",
          },
        ]

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">Pronunciation Practice</CardTitle>
            <CardDescription>Improve your English pronunciation for the meeting</CardDescription>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={testSound} disabled={isTesting || isStoppingAudio}>
              {isTesting ? (
                <>
                  <Volume2 className="h-4 w-4 mr-2 animate-pulse" />
                  Testing...
                </>
              ) : (
                <>
                  <Volume2 className="h-4 w-4 mr-2" />
                  Test Sound
                </>
              )}
            </Button>

            <Button
              variant="destructive"
              size="sm"
              onClick={stopAllAudio}
              disabled={(!isPlaying && !isTesting) || isStoppingAudio}
              className="min-w-[100px]"
            >
              {isStoppingAudio ? (
                <>
                  <Square className="h-4 w-4 mr-2 animate-pulse" />
                  Stopping...
                </>
              ) : (
                <>
                  <Square className="h-4 w-4 mr-2" />
                  Stop All
                </>
              )}
            </Button>

            <Button variant="outline" size="sm" onClick={() => setShowSettings(!showSettings)}>
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {!speechSynthesisAvailable && (
          <div className="mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md flex items-center text-yellow-800 dark:text-yellow-400">
            <AlertTriangle className="h-4 w-4 mr-2 flex-shrink-0" />
            <p className="text-sm">
              Speech synthesis is not available in your browser. Please try Chrome, Edge, or Safari for the best
              experience.
            </p>
          </div>
        )}
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="practice" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="practice">Practice</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="saved">Saved Practices</TabsTrigger>
          </TabsList>

          <TabsContent value="practice" className="space-y-4">
            {/* Text input area */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Badge
                    variant={currentMode === "sentence" ? "default" : "outline"}
                    onClick={() => setCurrentMode("sentence")}
                    className="cursor-pointer"
                  >
                    Sentence Mode
                  </Badge>
                  <Badge
                    variant={currentMode === "word" ? "default" : "outline"}
                    onClick={() => setCurrentMode("word")}
                    className="cursor-pointer"
                  >
                    Word Mode
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={savePractice}>
                    <Save className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                </div>
              </div>

              {text ? (
                <ScrollArea className="h-[200px] border rounded-md p-4">
                  <div
                    className="prose max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: highlightedText }}
                  />
                </ScrollArea>
              ) : (
                <Textarea
                  placeholder="Enter or paste text for pronunciation practice..."
                  className="h-[200px]"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              )}
            </div>

            {/* Playback controls */}
            <div className="bg-muted/50 p-4 rounded-md">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={previousSegment}
                    disabled={currentIndex === 0 || segments.length === 0 || isStoppingAudio}
                  >
                    <SkipBack className="h-4 w-4" />
                  </Button>

                  <Button
                    variant={isPlaying ? (isPaused ? "default" : "secondary") : "default"}
                    onClick={togglePlayPause}
                    disabled={segments.length === 0 || isStoppingAudio}
                    className="w-24"
                  >
                    {isPlaying ? (
                      isPaused ? (
                        <Play className="h-4 w-4 mr-2" />
                      ) : (
                        <Pause className="h-4 w-4 mr-2" />
                      )
                    ) : (
                      <Play className="h-4 w-4 mr-2" />
                    )}
                    {isPlaying ? (isPaused ? "Resume" : "Pause") : "Play"}
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextSegment}
                    disabled={currentIndex === segments.length - 1 || segments.length === 0 || isStoppingAudio}
                  >
                    <SkipForward className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant={isRecording ? "destructive" : "outline"}
                    size="sm"
                    onClick={isRecording ? stopRecording : startRecording}
                    disabled={isStoppingAudio}
                  >
                    <Mic className="h-4 w-4 mr-1" />
                    {isRecording ? "Stop Recording" : "Record Yourself"}
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label>Repeat</Label>
                    <div className="flex items-center space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => setRepeatCount(Math.max(1, repeatCount - 1))}
                        disabled={isStoppingAudio}
                      >
                        -
                      </Button>
                      <span className="w-6 text-center">{repeatCount}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => setRepeatCount(Math.min(5, repeatCount + 1))}
                        disabled={isStoppingAudio}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Label htmlFor="auto-advance" className="flex-grow">
                      Auto-advance
                    </Label>
                    <Switch
                      id="auto-advance"
                      checked={autoAdvance}
                      onCheckedChange={setAutoAdvance}
                      disabled={isStoppingAudio}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Volume2 className="h-4 w-4" />
                    <Slider
                      value={[volume * 100]}
                      min={0}
                      max={100}
                      step={1}
                      onValueChange={(value) => setVolume(value[0] / 100)}
                      disabled={isStoppingAudio}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <RefreshCw className="h-4 w-4" />
                    <Slider
                      value={[rate * 100]}
                      min={50}
                      max={200}
                      step={5}
                      onValueChange={(value) => setRate(value[0] / 100)}
                      disabled={isStoppingAudio}
                    />
                    <span className="text-xs w-8">{rate.toFixed(1)}x</span>
                  </div>
                </div>
              </div>

              {recordedAudio && (
                <div className="mt-4 p-2 border rounded-md">
                  <div className="text-sm font-medium mb-1">Your Recording:</div>
                  <audio src={recordedAudio} controls className="w-full h-10" ref={audioElementRef} />
                </div>
              )}
            </div>

            {/* Settings panel */}
            {showSettings && (
              <div className="border rounded-md p-4 space-y-4">
                <h3 className="font-medium">Voice Settings</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="voice-select">Voice</Label>
                    <Select
                      value={voice?.name}
                      onValueChange={(value) => {
                        const selectedVoice = availableVoices.find((v) => v.name === value)
                        if (selectedVoice) setVoice(selectedVoice)
                      }}
                      disabled={isStoppingAudio}
                    >
                      <SelectTrigger id="voice-select">
                        <SelectValue placeholder="Select a voice" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableVoices.map((v) => (
                          <SelectItem key={v.name} value={v.name}>
                            {v.name} ({v.lang})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pitch-slider">Pitch</Label>
                    <div className="flex items-center space-x-2">
                      <Slider
                        id="pitch-slider"
                        value={[pitch * 50]}
                        min={25}
                        max={75}
                        step={5}
                        onValueChange={(value) => setPitch(value[0] / 50)}
                        disabled={isStoppingAudio}
                      />
                      <span className="text-xs w-8">{pitch.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="documents" className="space-y-4">
            <div className="text-sm text-muted-foreground mb-2">Select a document to practice pronunciation:</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {effectiveDocuments.length > 0 ? (
                effectiveDocuments.map((doc) => (
                  <Card
                    key={doc.id}
                    className={`cursor-pointer hover:border-primary transition-colors ${selectedDocument === doc.id ? "border-primary" : ""}`}
                    onClick={() => setSelectedDocument(doc.id)}
                  >
                    <CardContent className="p-4 flex items-start space-x-3">
                      <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">{doc.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                          {doc.content.substring(0, 100)}...
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-2 text-center py-8 text-muted-foreground">
                  No documents available. Add documents to practice pronunciation.
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="saved" className="space-y-4">
            <div className="text-sm text-muted-foreground mb-2">Your saved practice sessions:</div>

            {savedPractices.length > 0 ? (
              <div className="space-y-2">
                {savedPractices.map((practice, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex-grow">
                      <h3 className="font-medium">{practice.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{practice.text.substring(0, 60)}...</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => loadPractice(index)}
                        disabled={isStoppingAudio}
                      >
                        Load
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deletePractice(index)}
                        disabled={isStoppingAudio}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No saved practices. Save your practice sessions to access them later.
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
