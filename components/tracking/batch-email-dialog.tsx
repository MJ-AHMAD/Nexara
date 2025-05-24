"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Progress } from "@/components/ui/progress"

interface BatchEmailDialogProps {
  isOpen: boolean
  onClose: () => void
  selectedItems: any[]
  onSendEmails: (recipients: string[], subject: string, message: string) => void
}

export function BatchEmailDialog({ isOpen, onClose, selectedItems, onSendEmails }: BatchEmailDialogProps) {
  const [recipients, setRecipients] = useState("")
  const [subject, setSubject] = useState(`Your Invoice${selectedItems.length > 1 ? "s" : ""}`)
  const [message, setMessage] = useState(
    `Dear Customer,\n\nPlease find attached your invoice${selectedItems.length > 1 ? "s" : ""} as requested.\n\nThank you for your business.\n\nBest regards,\nYour Company`,
  )
  const [isSending, setIsSending] = useState(false)
  const [progress, setProgress] = useState(0)

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSend = async () => {
    const emailList = recipients
      .split(",")
      .map((email) => email.trim())
      .filter((email) => email)

    // Validate emails
    const invalidEmails = emailList.filter((email) => !validateEmail(email))
    if (invalidEmails.length > 0) {
      toast({
        title: "Invalid email addresses",
        description: `The following emails are invalid: ${invalidEmails.join(", ")}`,
        variant: "destructive",
      })
      return
    }

    if (emailList.length === 0) {
      toast({
        title: "No recipients",
        description: "Please enter at least one email address",
        variant: "destructive",
      })
      return
    }

    setIsSending(true)

    // Simulate sending progress
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 10
      setProgress(currentProgress)

      if (currentProgress >= 100) {
        clearInterval(interval)

        // Simulate sending completion
        setTimeout(() => {
          onSendEmails(emailList, subject, message)
          setIsSending(false)
          onClose()

          toast({
            title: "Emails sent successfully",
            description: `${selectedItems.length} invoice${selectedItems.length > 1 ? "s" : ""} sent to ${emailList.length} recipient${emailList.length > 1 ? "s" : ""}`,
          })

          // Reset form
          setRecipients("")
          setSubject(`Your Invoice${selectedItems.length > 1 ? "s" : ""}`)
          setMessage(
            `Dear Customer,\n\nPlease find attached your invoice${selectedItems.length > 1 ? "s" : ""} as requested.\n\nThank you for your business.\n\nBest regards,\nYour Company`,
          )
        }, 500)
      }
    }, 200)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            Email {selectedItems.length} Invoice{selectedItems.length > 1 ? "s" : ""}
          </DialogTitle>
          <DialogDescription>
            Send the selected invoice{selectedItems.length > 1 ? "s" : ""} to one or more recipients.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="recipients">Recipients</Label>
            <Input
              id="recipients"
              placeholder="email@example.com, another@example.com"
              value={recipients}
              onChange={(e) => setRecipients(e.target.value)}
              disabled={isSending}
            />
            <p className="text-xs text-muted-foreground">Separate multiple email addresses with commas</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} disabled={isSending} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSending}
            />
          </div>

          <div className="bg-muted/50 p-3 rounded-md">
            <p className="text-sm">
              Sending <strong>{selectedItems.length}</strong> invoice{selectedItems.length > 1 ? "s" : ""} as PDF
              attachment{selectedItems.length > 1 ? "s" : ""}.
            </p>
          </div>

          {/* Progress */}
          {isSending && (
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-center text-muted-foreground">Sending... {progress}%</p>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isSending}>
            Cancel
          </Button>
          <Button onClick={handleSend} disabled={isSending || !recipients.trim()}>
            {isSending ? "Sending..." : "Send"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
