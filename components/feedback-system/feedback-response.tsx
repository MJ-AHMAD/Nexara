"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"
import { CheckCircle2, Clock, Info, Loader2, MessageSquare, RotateCcw, SendHorizonal, User } from "lucide-react"

// Response templates for different feedback types
const responseTemplates = {
  complaint: [
    {
      title: "Acknowledgment & Apology",
      content:
        "Thank you for bringing this issue to our attention. We sincerely apologize for the inconvenience you've experienced. We take all feedback seriously and are committed to resolving this matter promptly.",
    },
    {
      title: "Investigation Promise",
      content:
        "We're investigating the issue you've reported and will work diligently to resolve it. Our team will review all details thoroughly and implement necessary measures to prevent similar issues in the future.",
    },
    {
      title: "Resolution Update",
      content:
        "We've completed our investigation of your reported issue. We've identified the root cause and implemented a solution. Please let us know if you experience any further problems.",
    },
  ],
  suggestion: [
    {
      title: "Appreciation & Consideration",
      content:
        "Thank you for your valuable suggestion! We appreciate your thoughtful input and are excited to consider how it might enhance our services.  We appreciate your thoughtful input and are excited to consider how it might enhance our services. Our product team will review your suggestion carefully and evaluate how it aligns with our development roadmap.",
    },
    {
      title: "Implementation Plan",
      content:
        "Great news! We've reviewed your suggestion and are pleased to inform you that we plan to implement it in an upcoming update. Thank you for contributing to the improvement of our services.",
    },
    {
      title: "Alternative Solution",
      content:
        "Thank you for your suggestion. While we're unable to implement it exactly as proposed at this time, we've developed an alternative solution that addresses the core need you identified. We value your input and hope this alternative meets your requirements.",
    },
  ],
  question: [
    {
      title: "Direct Answer",
      content:
        "Thank you for your question. Here's the information you requested: [Insert specific answer]. We hope this clarifies your inquiry. Please don't hesitate to reach out if you need any further explanation.",
    },
    {
      title: "Additional Resources",
      content:
        "In response to your question, we've provided an answer and included links to additional resources that may be helpful: [Insert links/resources]. These should give you comprehensive information on the topic.",
    },
  ],
  advice: [
    {
      title: "Gratitude & Consideration",
      content:
        "Thank you for sharing your advice with us. We greatly appreciate your expertise and insights. Our team is reviewing your recommendations and considering how they might be implemented to improve our services.",
    },
    {
      title: "Implementation Update",
      content:
        "We wanted to update you on the advice you shared with us. We've incorporated several of your suggestions into our processes and have already begun to see positive results. Thank you for your valuable contribution.",
    },
  ],
  comment: [
    {
      title: "Acknowledgment",
      content:
        "Thank you for your comment. We appreciate you taking the time to share your thoughts with us. Your feedback is valuable and helps us understand how our users experience our services.",
    },
    {
      title: "Feedback Response",
      content:
        "We've received your comment and want to thank you for sharing your perspective. Your insights help us better understand our users' needs and expectations. We've taken note of your feedback for future improvements.",
    },
  ],
}

// Mock feedback item for demonstration
const mockFeedbackItem = {
  id: "FB-123456",
  type: "complaint",
  subject: "Website Navigation Issue",
  message:
    "I'm having trouble navigating through the product pages. The sidebar menu disappears when I click on certain categories. This makes it difficult to browse through your products efficiently. I've tried using different browsers but the issue persists. Could you please look into this and fix it? It's making shopping on your site quite frustrating.",
  status: "in-progress",
  priority: "high",
  submittedBy: "John Doe",
  email: "john.doe@example.com",
  submitted: "2023-05-15T10:30:00",
  lastUpdated: "2023-05-16T14:22:00",
  assignedTo: "Support Team",
  internalNotes: [
    {
      author: "Sarah (Support)",
      date: "2023-05-15T14:45:00",
      note: "Reproduced the issue on Chrome and Firefox. It appears to be related to a recent JavaScript update.",
    },
    {
      author: "Michael (Development)",
      date: "2023-05-16T09:22:00",
      note: "Identified the root cause. There's a conflict between our new filtering code and the sidebar component. Working on a fix now.",
    },
  ],
  responses: [
    {
      author: "Support Team",
      date: "2023-05-15T11:15:00",
      message:
        "Thank you for bringing this navigation issue to our attention, John. We apologize for the inconvenience you're experiencing. Our team has been able to reproduce the problem and we're currently working on a fix. We'll update you as soon as we have more information.",
    },
  ],
}

const responseFormSchema = z.object({
  trackingId: z.string(),
  responseType: z.string(),
  responseTemplate: z.string().optional(),
  message: z.string().min(10, {
    message: "Response message must be at least 10 characters.",
  }),
  internalNote: z.string().optional(),
  updateStatus: z.string(),
  notifyUser: z.boolean().default(true),
})

type ResponseFormValues = z.infer<typeof responseFormSchema>

export function FeedbackResponse() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [feedbackItem, setFeedbackItem] = useState(mockFeedbackItem)

  const form = useForm<ResponseFormValues>({
    resolver: zodResolver(responseFormSchema),
    defaultValues: {
      trackingId: feedbackItem.id,
      responseType: feedbackItem.type,
      message: "",
      internalNote: "",
      updateStatus: feedbackItem.status,
      notifyUser: true,
    },
  })

  const watch = form.watch()

  const handleTemplateSelect = (template: string) => {
    setSelectedTemplate(template)
    const selectedResponseType = watch.responseType as keyof typeof responseTemplates
    const templateContent = responseTemplates[selectedResponseType]?.find((t) => t.title === template)?.content || ""

    form.setValue("message", templateContent)
  }

  async function onSubmit(data: ResponseFormValues) {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Create response object
      const newResponse = {
        author: "Support Team",
        date: new Date().toISOString(),
        message: data.message,
      }

      // Create internal note if provided
      let newNote = null
      if (data.internalNote && data.internalNote.trim() !== "") {
        newNote = {
          author: "Admin User",
          date: new Date().toISOString(),
          note: data.internalNote,
        }
      }

      // Update the feedback item (in a real app, this would be an API call)
      setFeedbackItem((prev) => ({
        ...prev,
        status: data.updateStatus,
        lastUpdated: new Date().toISOString(),
        responses: [...prev.responses, newResponse],
        internalNotes: newNote ? [...prev.internalNotes, newNote] : prev.internalNotes,
      }))

      toast({
        title: "Response sent successfully",
        description: data.notifyUser
          ? "The user has been notified via email."
          : "Response added without user notification.",
      })

      // Reset the form fields
      form.reset({
        trackingId: feedbackItem.id,
        responseType: feedbackItem.type,
        message: "",
        internalNote: "",
        updateStatus: data.updateStatus, // Maintain the updated status
        notifyUser: true,
      })
      setSelectedTemplate("")
    } catch (error) {
      toast({
        title: "Error sending response",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Feedback Details</CardTitle>
            <CardDescription>Review the feedback information before responding</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-1">Status</h3>
              <Badge
                className={`${
                  feedbackItem.status === "in-progress"
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                    : feedbackItem.status === "resolved"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                }`}
              >
                {feedbackItem.status
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Badge>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-1">Tracking ID</h3>
              <p className="text-sm">{feedbackItem.id}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-1">Type</h3>
              <Badge variant="outline" className="capitalize">
                {feedbackItem.type}
              </Badge>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-1">Priority</h3>
              <Badge
                className={`${
                  feedbackItem.priority === "high"
                    ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
                    : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                }`}
              >
                {feedbackItem.priority.charAt(0).toUpperCase() + feedbackItem.priority.slice(1)}
              </Badge>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-1">Submitted By</h3>
              <p className="text-sm">{feedbackItem.submittedBy}</p>
              <p className="text-xs text-muted-foreground">{feedbackItem.email}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-1">Date Submitted</h3>
              <div className="flex items-center gap-1 text-sm">
                <Clock className="h-3 w-3 text-muted-foreground" />
                <span>{formatDate(feedbackItem.submitted)}</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-1">Last Updated</h3>
              <div className="flex items-center gap-1 text-sm">
                <Clock className="h-3 w-3 text-muted-foreground" />
                <span>{formatDate(feedbackItem.lastUpdated)}</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-1">Assigned To</h3>
              <p className="text-sm">{feedbackItem.assignedTo}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-2">
        <Tabs defaultValue="message">
          <TabsList className="mb-4">
            <TabsTrigger value="message">
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </TabsTrigger>
            <TabsTrigger value="responses">
              <SendHorizonal className="h-4 w-4 mr-2" />
              Responses
            </TabsTrigger>
            <TabsTrigger value="notes">
              <Info className="h-4 w-4 mr-2" />
              Internal Notes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="message" className="m-0">
            <Card>
              <CardHeader>
                <CardTitle>{feedbackItem.subject}</CardTitle>
                <CardDescription>
                  Submitted by {feedbackItem.submittedBy} on {formatDate(feedbackItem.submitted)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-md whitespace-pre-wrap">{feedbackItem.message}</div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="responses" className="m-0 space-y-4">
            {feedbackItem.responses.map((response, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-base flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {response.author}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{formatDate(response.date)}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm whitespace-pre-wrap">{response.message}</p>
                </CardContent>
              </Card>
            ))}

            {feedbackItem.responses.length === 0 && (
              <div className="text-center p-8 border rounded-md bg-muted/50">
                <p className="text-muted-foreground">No responses yet.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="notes" className="m-0 space-y-4">
            {feedbackItem.internalNotes.map((note, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-base flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {note.author}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{formatDate(note.date)}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm whitespace-pre-wrap">{note.note}</p>
                </CardContent>
              </Card>
            ))}

            {feedbackItem.internalNotes.length === 0 && (
              <div className="text-center p-8 border rounded-md bg-muted/50">
                <p className="text-muted-foreground">No internal notes yet.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Respond to Feedback</CardTitle>
            <CardDescription>Send a response to the user and update the feedback status</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="trackingId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tracking ID</FormLabel>
                        <FormControl>
                          <Input {...field} disabled />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="responseType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Response Type</FormLabel>
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value)
                            setSelectedTemplate("")
                            form.setValue("message", "")
                          }}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select response type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="complaint">Complaint</SelectItem>
                            <SelectItem value="suggestion">Suggestion</SelectItem>
                            <SelectItem value="question">Question</SelectItem>
                            <SelectItem value="advice">Advice</SelectItem>
                            <SelectItem value="comment">Comment</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <FormLabel>Response Templates</FormLabel>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                    {responseTemplates[watch.responseType as keyof typeof responseTemplates]?.map((template, index) => (
                      <Button
                        key={index}
                        type="button"
                        variant={selectedTemplate === template.title ? "default" : "outline"}
                        className="h-auto py-2 px-3 justify-start"
                        onClick={() => handleTemplateSelect(template.title)}
                      >
                        <span className="text-sm">{template.title}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Response Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter your response to the user" className="min-h-[150px]" {...field} />
                      </FormControl>
                      <FormDescription>
                        This message will be sent to the user. Be clear, professional, and helpful.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Separator />

                <FormField
                  control={form.control}
                  name="internalNote"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Internal Note (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Add an internal note visible only to staff"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This note will not be visible to the user and is for internal reference only.
                      </FormDescription>
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="updateStatus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Update Status</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select new status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="in-progress">In Progress</SelectItem>
                            <SelectItem value="under-review">Under Review</SelectItem>
                            <SelectItem value="resolved">Resolved</SelectItem>
                            <SelectItem value="closed">Closed</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="notifyUser"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <input type="checkbox" checked={field.value} onChange={field.onChange} className="h-4 w-4" />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Notify User</FormLabel>
                          <FormDescription>Send an email notification to the user.</FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-end space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      form.reset()
                      setSelectedTemplate("")
                    }}
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <SendHorizonal className="mr-2 h-4 w-4" />
                        Send Response
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col text-xs text-muted-foreground border-t pt-4">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-green-500" />
              <span>All responses are logged and tracked for quality assurance purposes.</span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
