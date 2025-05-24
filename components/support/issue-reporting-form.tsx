"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { InitiativeIndicator } from "@/components/initiative-indicator"
import { Loader2, Send, Upload } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

const issueFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  initiative: z.string().min(1, { message: "Please select an initiative." }),
  issueType: z.string().min(1, { message: "Please select an issue type." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  description: z.string().min(20, { message: "Description must be at least 20 characters." }),
  attachments: z.any().optional(),
})

type IssueFormValues = z.infer<typeof issueFormSchema>

export default function IssueReportingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<IssueFormValues>({
    resolver: zodResolver(issueFormSchema),
    defaultValues: {
      name: "",
      email: "",
      initiative: "",
      issueType: "",
      subject: "",
      description: "",
    },
  })

  async function onSubmit(data: IssueFormValues) {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log(data)
    setIsSubmitting(false)

    toast({
      title: "Issue reported successfully",
      description: "Thank you for your feedback. We'll review your issue and get back to you soon.",
      variant: "default",
    })

    form.reset()
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="initiative"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Initiative</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select initiative" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="yunus">
                          <div className="flex items-center">
                            <InitiativeIndicator initiative="yunus" className="mr-2" />
                            <span>Yunus Inspire</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="trusted">
                          <div className="flex items-center">
                            <InitiativeIndicator initiative="trusted" className="mr-2" />
                            <span>Trusted Ally</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="infinity">
                          <div className="flex items-center">
                            <InitiativeIndicator initiative="infinity" className="mr-2" />
                            <span>Infinity Nexus</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="nexara">
                          <div className="flex items-center">
                            <span className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 mr-2"></span>
                            <span>Nexara (General)</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="issueType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Issue Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select issue type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="bug">Bug Report</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="question">Question</SelectItem>
                        <SelectItem value="feedback">General Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Brief summary of the issue" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please provide detailed information about the issue, including steps to reproduce if applicable"
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Include as much detail as possible to help us understand and address the issue.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="attachments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attachments (Optional)</FormLabel>
                  <FormControl>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="file-upload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-3 text-gray-500" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">SVG, PNG, JPG or PDF (MAX. 10MB)</p>
                        </div>
                        <input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          multiple
                          onChange={(e) => {
                            const files = e.target.files
                            field.onChange(files)
                          }}
                        />
                      </label>
                    </div>
                  </FormControl>
                  <FormDescription>
                    Upload screenshots, logs, or other files that might help us understand the issue.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Issue Report
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
