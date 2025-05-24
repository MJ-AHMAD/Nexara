"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { Loader2, Search } from "lucide-react"

const trackerFormSchema = z.object({
  trackingId: z.string().regex(/^FB-\d{6}$/, {
    message: "Please enter a valid tracking ID (Format: FB-XXXXXX)",
  }),
})

type TrackerFormValues = z.infer<typeof trackerFormSchema>

// Mock data for demonstration
const mockFeedbackData = {
  "FB-123456": {
    type: "complaint",
    subject: "Website Navigation Issue",
    status: "in-progress",
    submitted: "2023-05-15T10:30:00",
    lastUpdated: "2023-05-16T14:22:00",
    responseTime: "24 hours",
    assignedTo: "Support Team",
    response: "We are investigating the navigation issues you reported and will implement a fix in our next update.",
  },
  "FB-234567": {
    type: "suggestion",
    subject: "New Feature Proposal",
    status: "under-review",
    submitted: "2023-05-10T09:15:00",
    lastUpdated: "2023-05-12T11:45:00",
    responseTime: "48 hours",
    assignedTo: "Product Team",
    response: "Your suggestion is being evaluated by our product team for potential implementation in future releases.",
  },
  "FB-345678": {
    type: "complaint",
    subject: "Payment Processing Error",
    status: "resolved",
    submitted: "2023-05-08T16:20:00",
    lastUpdated: "2023-05-09T10:30:00",
    responseTime: "18 hours",
    assignedTo: "Finance Team",
    response:
      "The payment processing error has been resolved. We've implemented additional error handling to prevent this issue in the future.",
  },
}

type FeedbackStatus = "pending" | "in-progress" | "under-review" | "resolved" | "closed" | "not-found"

const statusColors: Record<FeedbackStatus, string> = {
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  "in-progress": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  "under-review": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  resolved: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  closed: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400",
  "not-found": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
}

export function FeedbackTracker() {
  const [isSearching, setIsSearching] = useState(false)
  const [feedbackResult, setFeedbackResult] = useState<any>(null)
  const [resultStatus, setResultStatus] = useState<FeedbackStatus | null>(null)

  const form = useForm<TrackerFormValues>({
    resolver: zodResolver(trackerFormSchema),
    defaultValues: {
      trackingId: "",
    },
  })

  async function onSubmit(data: TrackerFormValues) {
    setIsSearching(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const result = mockFeedbackData[data.trackingId as keyof typeof mockFeedbackData]

      if (result) {
        setFeedbackResult(result)
        setResultStatus(result.status as FeedbackStatus)
      } else {
        setFeedbackResult(null)
        setResultStatus("not-found")
        toast({
          title: "Feedback not found",
          description: "The tracking ID you entered doesn't exist in our system.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error searching for feedback",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Track Your Feedback</CardTitle>
        <CardDescription>Enter your tracking ID to check the status of your submitted feedback.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="trackingId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tracking ID</FormLabel>
                  <div className="flex space-x-2">
                    <FormControl>
                      <Input placeholder="FB-123456" {...field} />
                    </FormControl>
                    <Button type="submit" disabled={isSearching}>
                      {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>

        {resultStatus && (
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Feedback Status</h3>
              <Badge className={statusColors[resultStatus]}>
                {resultStatus === "not-found"
                  ? "Not Found"
                  : resultStatus
                      .split("-")
                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(" ")}
              </Badge>
            </div>

            {feedbackResult && (
              <div className="border rounded-md p-4 space-y-3">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <div className="text-sm font-medium">Type:</div>
                  <div className="text-sm capitalize">{feedbackResult.type}</div>

                  <div className="text-sm font-medium">Subject:</div>
                  <div className="text-sm">{feedbackResult.subject}</div>

                  <div className="text-sm font-medium">Submitted:</div>
                  <div className="text-sm">{new Date(feedbackResult.submitted).toLocaleString()}</div>

                  <div className="text-sm font-medium">Last Updated:</div>
                  <div className="text-sm">{new Date(feedbackResult.lastUpdated).toLocaleString()}</div>

                  <div className="text-sm font-medium">Response Time:</div>
                  <div className="text-sm">{feedbackResult.responseTime}</div>

                  <div className="text-sm font-medium">Assigned To:</div>
                  <div className="text-sm">{feedbackResult.assignedTo}</div>
                </div>

                <div className="pt-2 border-t">
                  <div className="text-sm font-medium mb-1">Response:</div>
                  <div className="text-sm bg-muted p-3 rounded">{feedbackResult.response}</div>
                </div>
              </div>
            )}

            {resultStatus === "not-found" && (
              <div className="border border-red-200 rounded-md p-4 bg-red-50 dark:bg-red-900/10 dark:border-red-800">
                <p className="text-sm text-red-700 dark:text-red-400">
                  We couldn't find any feedback with the provided tracking ID. Please check the ID and try again. If you
                  recently submitted your feedback, it might take a few minutes to appear in our system.
                </p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
