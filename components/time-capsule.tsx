"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Save, Trash2, Lock, Unlock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function TimeCapsule() {
  const [message, setMessage] = useState("")
  const [savedMessages, setSavedMessages] = useState<Array<{ text: string; timestamp: string; locked: boolean }>>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  // Load saved messages from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("timeCapsuleMessages")
        if (saved) {
          setSavedMessages(JSON.parse(saved))
        }
      } catch (error) {
        console.error("Error loading saved messages:", error)
      }
      setIsLoading(false)
    }
  }, [])

  // Save messages to localStorage when they change
  useEffect(() => {
    if (!isLoading && typeof window !== "undefined") {
      localStorage.setItem("timeCapsuleMessages", JSON.stringify(savedMessages))
    }
  }, [savedMessages, isLoading])

  const handleSaveMessage = () => {
    if (!message.trim()) {
      toast({
        title: "Empty message",
        description: "Please enter a message to save.",
        variant: "destructive",
      })
      return
    }

    const now = new Date()
    const timestamp = now.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })

    setSavedMessages([...savedMessages, { text: message, timestamp, locked: false }])
    setMessage("")

    toast({
      title: "Message saved",
      description: "Your message has been saved to your time capsule.",
    })
  }

  const handleDeleteMessage = (index: number) => {
    if (savedMessages[index].locked) {
      toast({
        title: "Message locked",
        description: "Unlock the message before deleting it.",
        variant: "destructive",
      })
      return
    }

    const newMessages = [...savedMessages]
    newMessages.splice(index, 1)
    setSavedMessages(newMessages)

    toast({
      title: "Message deleted",
      description: "Your message has been removed from the time capsule.",
    })
  }

  const toggleLock = (index: number) => {
    const newMessages = [...savedMessages]
    newMessages[index].locked = !newMessages[index].locked
    setSavedMessages(newMessages)

    toast({
      title: newMessages[index].locked ? "Message locked" : "Message unlocked",
      description: newMessages[index].locked
        ? "This message is now protected from deletion."
        : "This message can now be deleted.",
    })
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">Time Capsule</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Textarea
              placeholder="Write a message to your future self..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[100px]"
            />
            <Button onClick={handleSaveMessage} className="mt-2 w-full">
              <Save className="h-4 w-4 mr-2" />
              Save Message
            </Button>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium">Saved Messages</h3>
            {savedMessages.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No messages saved yet. Write something to your future self!
              </p>
            ) : (
              savedMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-md border ${msg.locked ? "bg-amber-50 dark:bg-amber-950/20" : "bg-muted/30"}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">{msg.timestamp}</span>
                    </Badge>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => toggleLock(index)}
                        title={msg.locked ? "Unlock message" : "Lock message"}
                      >
                        {msg.locked ? <Lock className="h-3 w-3" /> : <Unlock className="h-3 w-3" />}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-destructive"
                        onClick={() => handleDeleteMessage(index)}
                        disabled={msg.locked}
                        title="Delete message"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
