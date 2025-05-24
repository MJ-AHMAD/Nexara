"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Mic,
  MicOff,
  Volume2,
  Settings,
  Save,
  Clipboard,
  ClipboardCheck,
  Languages,
  ImportIcon as Translate,
  MessageSquare,
  BookOpen,
  BookmarkPlus,
  Trash2,
} from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { translateToBengali, getInstantTranslation, getSuggestions } from "@/lib/translation-service"
import { audioController } from "@/lib/audio-controller"

interface TranscriptItem {
  id: string
  timestamp: Date
  english: string
  bengali: string
  isSaved?: boolean
}

interface SavedPhrase {
  english: string
  bengali: string
}

export function RealTimeTranslator() {
  const { toast } = useToast()
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState<TranscriptItem[]>([])
  const [savedPhrases, setSavedPhrases] = useState<SavedPhrase[]>([])
  const [showSettings, setShowSettings] = useState(false)
  const [autoScroll, setAutoScroll] = useState(true)
  const [showInstantTranslation, setShowInstantTranslation] = useState(true)
  const [instantTranslation, setInstantTranslation] = useState<{ english: string; bengali: string } | null>(null)
  const [quickResponses, setQuickResponses] = useState<SavedPhrase[]>([
    { english: "Could you please repeat that?", bengali: "আপনি কি অনুগ্রহ করে আবার বলতে পারবেন?" },
    { english: "I understand, thank you.", bengali: "আমি বুঝতে পেরেছি, ধন্যবাদ।" },
    { english: "Let me think about it.", bengali: "আমাকে এটা নিয়ে ভাবতে দিন।" },
    { english: "That's a good point.", bengali: "এটা একটি ভালো যুক্তি।" },
    { english: "I agree with you.", bengali: "আমি আপনার সাথে একমত।" },
  ])
  const [customResponse, setCustomResponse] = useState("")
  const [customResponseTranslation, setCustomResponseTranslation] = useState("")
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [suggestions, setSuggestions] = useState<Array<{ english: string; bengali: string }>>([])
  const [isTranslating, setIsTranslating] = useState(false)

  const recognitionRef = useRef<any>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if the browser supports SpeechRecognition
      const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition()
        recognition.continuous = true
        recognition.interimResults = true
        recognition.lang = "en-US"

        recognition.onresult = async (event: any) => {
          const lastResult = event.results[event.results.length - 1]
          const transcript = lastResult[0].transcript.trim()

          // Update instant translation for the current speech
          if (lastResult.isFinal) {
            // Add to transcript
            const translatedText = await translateToBengali(transcript)

            setTranscript((prev) => [
              ...prev,
              {
                id: Date.now().toString(),
                timestamp: new Date(),
                english: transcript,
                bengali: translatedText,
              },
            ])

            setInstantTranslation(null)
          } else {
            // Show instant translation while speaking
            const instantTrans = getInstantTranslation(transcript)
            if (instantTrans && showInstantTranslation) {
              setInstantTranslation({
                english: transcript,
                bengali: instantTrans,
              })
            } else {
              setIsTranslating(true)
              try {
                const translatedText = await translateToBengali(transcript)
                setInstantTranslation({
                  english: transcript,
                  bengali: translatedText,
                })
              } catch (error) {
                console.error("Translation error:", error)
              } finally {
                setIsTranslating(false)
              }
            }
          }
        }

        recognition.onerror = (event: any) => {
          console.error("Speech recognition error", event.error)
          if (event.error === "not-allowed") {
            toast({
              title: "Microphone access denied",
              description: "Please allow microphone access to use the translator.",
              variant: "destructive",
            })
            setIsListening(false)
          }
        }

        recognition.onend = () => {
          // Restart recognition if still listening
          if (isListening) {
            recognition.start()
          }
        }

        recognitionRef.current = recognition
      } else {
        toast({
          title: "Speech recognition not supported",
          description: "Your browser doesn't support speech recognition. Please try Chrome, Edge, or Safari.",
          variant: "destructive",
        })
      }
    }

    // Load saved phrases from localStorage
    const savedItems = localStorage.getItem("saved-phrases")
    if (savedItems) {
      try {
        setSavedPhrases(JSON.parse(savedItems))
      } catch (e) {
        console.error("Failed to load saved phrases", e)
      }
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop()
        } catch (e) {
          console.error("Error stopping speech recognition:", e)
        }
      }
    }
  }, [])

  // Auto-scroll effect
  useEffect(() => {
    if (autoScroll && scrollAreaRef.current && transcript.length > 0) {
      const scrollArea = scrollAreaRef.current
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  }, [transcript, autoScroll])

  // Toggle listening
  const toggleListening = () => {
    if (!recognitionRef.current) {
      toast({
        title: "Speech recognition not available",
        description: "Your browser doesn't support speech recognition.",
        variant: "destructive",
      })
      return
    }

    if (isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
      setInstantTranslation(null)
    } else {
      try {
        recognitionRef.current.start()
        setIsListening(true)

        toast({
          title: "Listening started",
          description: "The translator is now listening for English speech.",
        })
      } catch (error) {
        console.error("Error starting speech recognition:", error)
        toast({
          title: "Error starting speech recognition",
          description: "There was an error starting the speech recognition. Please try again.",
          variant: "destructive",
        })
      }
    }
  }

  // Save a phrase
  const savePhrase = (item: TranscriptItem) => {
    const newSavedPhrases = [...savedPhrases, { english: item.english, bengali: item.bengali }]

    setSavedPhrases(newSavedPhrases)
    localStorage.setItem("saved-phrases", JSON.stringify(newSavedPhrases))

    // Mark as saved in transcript
    setTranscript((prev) => prev.map((t) => (t.id === item.id ? { ...t, isSaved: true } : t)))

    toast({
      title: "Phrase saved",
      description: "The phrase has been saved to your collection.",
    })
  }

  // Delete a saved phrase
  const deleteSavedPhrase = (index: number) => {
    const newSavedPhrases = [...savedPhrases]
    newSavedPhrases.splice(index, 1)

    setSavedPhrases(newSavedPhrases)
    localStorage.setItem("saved-phrases", JSON.stringify(newSavedPhrases))

    toast({
      title: "Phrase deleted",
      description: "The phrase has been removed from your collection.",
    })
  }

  // Copy text to clipboard
  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)

    setTimeout(() => {
      setCopiedIndex(null)
    }, 2000)

    toast({
      title: "Copied to clipboard",
      description: "The text has been copied to your clipboard.",
    })
  }

  // Clear transcript
  const clearTranscript = () => {
    setTranscript([])
    toast({
      title: "Transcript cleared",
      description: "The transcript has been cleared.",
    })
  }

  // Handle custom response input
  const handleCustomResponseChange = async (value: string) => {
    setCustomResponse(value)

    if (value.trim()) {
      // Get suggestions
      const newSuggestions = getSuggestions(value)
      setSuggestions(newSuggestions)

      // Translate
      try {
        const translation = await translateToBengali(value)
        setCustomResponseTranslation(translation)
      } catch (error) {
        console.error("Translation error:", error)
      }
    } else {
      setSuggestions([])
      setCustomResponseTranslation("")
    }
  }

  // Save custom response
  const saveCustomResponse = () => {
    if (!customResponse.trim()) return

    const newQuickResponses = [...quickResponses, { english: customResponse, bengali: customResponseTranslation }]

    setQuickResponses(newQuickResponses)
    setCustomResponse("")
    setCustomResponseTranslation("")
    setSuggestions([])

    toast({
      title: "Response saved",
      description: "Your custom response has been saved.",
    })
  }

  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  // Speak text
  const speakText = (text: string, language: "en" | "bn") => {
    // Stop any ongoing speech
    if (audioController && typeof audioController.forceStopAllAudio === "function") {
      audioController.forceStopAllAudio()
    }

    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)

      // Set language
      utterance.lang = language === "en" ? "en-US" : "bn-BD"

      // Find an appropriate voice
      const voices = window.speechSynthesis.getVoices()
      const voice = voices.find((v) => v.lang.includes(language === "en" ? "en" : "bn"))
      if (voice) {
        utterance.voice = voice
      }

      window.speechSynthesis.speak(utterance)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl flex items-center">
              <Translate className="h-5 w-5 mr-2" />
              Real-Time Meeting Translator
            </CardTitle>
            <CardDescription>Translate English speech to Bengali in real-time</CardDescription>
          </div>
          <div className="flex space-x-2">
            <Button variant={isListening ? "destructive" : "default"} onClick={toggleListening}>
              {isListening ? (
                <>
                  <MicOff className="h-4 w-4 mr-2" />
                  Stop Listening
                </>
              ) : (
                <>
                  <Mic className="h-4 w-4 mr-2" />
                  Start Listening
                </>
              )}
            </Button>

            <Button variant="outline" size="icon" onClick={() => setShowSettings(!showSettings)}>
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {isListening && instantTranslation && (
          <div className="mt-2 p-3 bg-primary/10 rounded-md border border-primary/20 animate-pulse">
            <div className="text-sm font-medium">Current Speech:</div>
            <p className="text-sm">{instantTranslation.english}</p>
            <p className="text-sm font-medium mt-1 text-primary">{instantTranslation.bengali}</p>
          </div>
        )}

        {isListening && isTranslating && !instantTranslation && (
          <div className="mt-2 p-3 bg-primary/10 rounded-md border border-primary/20 animate-pulse">
            <div className="text-sm font-medium">Translating...</div>
          </div>
        )}

        {showSettings && (
          <div className="mt-2 p-3 bg-muted rounded-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Label htmlFor="auto-scroll" className="text-sm">
                  Auto-scroll transcript
                </Label>
                <Switch id="auto-scroll" checked={autoScroll} onCheckedChange={setAutoScroll} />
              </div>

              <div className="flex items-center space-x-2">
                <Label htmlFor="instant-translation" className="text-sm">
                  Show instant translation
                </Label>
                <Switch
                  id="instant-translation"
                  checked={showInstantTranslation}
                  onCheckedChange={setShowInstantTranslation}
                />
              </div>

              <Button variant="outline" size="sm" onClick={clearTranscript}>
                Clear Transcript
              </Button>
            </div>
          </div>
        )}
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="transcript" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="transcript" className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" />
              Transcript
            </TabsTrigger>
            <TabsTrigger value="responses" className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" />
              Quick Responses
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              Saved Phrases
            </TabsTrigger>
          </TabsList>

          <TabsContent value="transcript" className="space-y-4">
            <ScrollArea className="h-[400px] pr-4" ref={scrollAreaRef}>
              {transcript.length > 0 ? (
                <div className="space-y-3">
                  {transcript.map((item) => (
                    <div key={item.id} className="p-3 border rounded-md">
                      <div className="flex justify-between items-start mb-1">
                        <Badge variant="outline">{formatTime(item.timestamp)}</Badge>
                        <div className="flex space-x-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => speakText(item.english, "en")}
                            title="Play English"
                          >
                            <Volume2 className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => copyToClipboard(item.english, Number.parseInt(item.id))}
                            title="Copy English"
                          >
                            {copiedIndex === Number.parseInt(item.id) ? (
                              <ClipboardCheck className="h-3 w-3" />
                            ) : (
                              <Clipboard className="h-3 w-3" />
                            )}
                          </Button>
                          {!item.isSaved && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => savePhrase(item)}
                              title="Save Phrase"
                            >
                              <BookmarkPlus className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                      <p className="text-sm">{item.english}</p>
                      <Separator className="my-2" />
                      <div className="flex justify-between items-start">
                        <p className="text-sm font-medium text-primary">{item.bengali}</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 mt-[-4px]"
                          onClick={() => copyToClipboard(item.bengali, -Number.parseInt(item.id))}
                          title="Copy Bengali"
                        >
                          {copiedIndex === -Number.parseInt(item.id) ? (
                            <ClipboardCheck className="h-3 w-3" />
                          ) : (
                            <Clipboard className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <Languages className="h-12 w-12 mx-auto mb-2 opacity-20" />
                    <p>No transcript yet. Start listening to begin translation.</p>
                  </div>
                </div>
              )}
            </ScrollArea>
          </TabsContent>

          <TabsContent value="responses" className="space-y-4">
            <div className="space-y-2 mb-4">
              <Label htmlFor="custom-response">Create Custom Response</Label>
              <div className="flex space-x-2">
                <div className="flex-1">
                  <Input
                    id="custom-response"
                    placeholder="Type your response in English..."
                    value={customResponse}
                    onChange={(e) => handleCustomResponseChange(e.target.value)}
                  />

                  {suggestions.length > 0 && (
                    <div className="mt-1 p-2 border rounded-md bg-background">
                      {suggestions.map((suggestion, index) => (
                        <div
                          key={index}
                          className="p-1 text-sm hover:bg-muted rounded cursor-pointer"
                          onClick={() => {
                            setCustomResponse(suggestion.english)
                            setCustomResponseTranslation(suggestion.bengali)
                            setSuggestions([])
                          }}
                        >
                          {suggestion.english}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <Button onClick={saveCustomResponse} disabled={!customResponse.trim()}>
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>

              {customResponseTranslation && (
                <div className="p-2 border rounded-md mt-2">
                  <p className="text-sm font-medium">Bengali Translation:</p>
                  <p className="text-sm">{customResponseTranslation}</p>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Quick Responses</h3>
              <div className="grid grid-cols-1 gap-2">
                {quickResponses.map((response, index) => (
                  <div key={index} className="p-3 border rounded-md">
                    <div className="flex justify-between items-start">
                      <p className="text-sm">{response.english}</p>
                      <div className="flex space-x-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => speakText(response.english, "en")}
                          title="Play English"
                        >
                          <Volume2 className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => copyToClipboard(response.english, index)}
                          title="Copy English"
                        >
                          {copiedIndex === index ? (
                            <ClipboardCheck className="h-3 w-3" />
                          ) : (
                            <Clipboard className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-medium text-primary">{response.bengali}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => copyToClipboard(response.bengali, -index - 1000)}
                        title="Copy Bengali"
                      >
                        {copiedIndex === -index - 1000 ? (
                          <ClipboardCheck className="h-3 w-3" />
                        ) : (
                          <Clipboard className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="saved" className="space-y-4">
            <ScrollArea className="h-[400px] pr-4">
              {savedPhrases.length > 0 ? (
                <div className="space-y-2">
                  {savedPhrases.map((phrase, index) => (
                    <div key={index} className="p-3 border rounded-md">
                      <div className="flex justify-between items-start">
                        <p className="text-sm">{phrase.english}</p>
                        <div className="flex space-x-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => speakText(phrase.english, "en")}
                            title="Play English"
                          >
                            <Volume2 className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => copyToClipboard(phrase.english, index + 2000)}
                            title="Copy English"
                          >
                            {copiedIndex === index + 2000 ? (
                              <ClipboardCheck className="h-3 w-3" />
                            ) : (
                              <Clipboard className="h-3 w-3" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-destructive"
                            onClick={() => deleteSavedPhrase(index)}
                            title="Delete Phrase"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between items-start">
                        <p className="text-sm font-medium text-primary">{phrase.bengali}</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => copyToClipboard(phrase.bengali, -index - 2000)}
                          title="Copy Bengali"
                        >
                          {copiedIndex === -index - 2000 ? (
                            <ClipboardCheck className="h-3 w-3" />
                          ) : (
                            <Clipboard className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <BookOpen className="h-12 w-12 mx-auto mb-2 opacity-20" />
                    <p>No saved phrases yet. Save phrases from the transcript to build your collection.</p>
                  </div>
                </div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
