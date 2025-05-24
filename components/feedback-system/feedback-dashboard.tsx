"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown, ChevronUp, Clock, Filter, MessageSquare, Search, ThumbsUp, User, X } from "lucide-react"

// Mock data for demonstration
const mockFeedbackItems = [
  {
    id: "FB-123456",
    type: "complaint",
    subject: "Website Navigation Issue",
    message:
      "I'm having trouble navigating through the product pages. The sidebar menu disappears when I click on certain categories.",
    status: "in-progress",
    priority: "high",
    submittedBy: "John Doe",
    email: "john.doe@example.com",
    submitted: "2023-05-15T10:30:00",
    lastUpdated: "2023-05-16T14:22:00",
    assignedTo: "Support Team",
  },
  {
    id: "FB-234567",
    type: "suggestion",
    subject: "New Feature Proposal",
    message:
      "I'd like to suggest adding a dark mode option to the dashboard. It would be easier on the eyes when working late.",
    status: "under-review",
    priority: "medium",
    submittedBy: "Jane Smith",
    email: "jane.smith@example.com",
    submitted: "2023-05-10T09:15:00",
    lastUpdated: "2023-05-12T11:45:00",
    assignedTo: "Product Team",
  },
  {
    id: "FB-345678",
    type: "complaint",
    subject: "Payment Processing Error",
    message: "I received an error when trying to make a payment. The transaction failed but my card was charged.",
    status: "resolved",
    priority: "critical",
    submittedBy: "Robert Johnson",
    email: "robert.j@example.com",
    submitted: "2023-05-08T16:20:00",
    lastUpdated: "2023-05-09T10:30:00",
    assignedTo: "Finance Team",
  },
  {
    id: "FB-456789",
    type: "question",
    subject: "Account Verification Process",
    message: "How long does the account verification process usually take? I submitted my documents two days ago.",
    status: "pending",
    priority: "low",
    submittedBy: "Maria Garcia",
    email: "maria.g@example.com",
    submitted: "2023-05-17T08:45:00",
    lastUpdated: "2023-05-17T08:45:00",
    assignedTo: "Unassigned",
  },
  {
    id: "FB-567890",
    type: "comment",
    subject: "Great Customer Service",
    message:
      "I just wanted to thank your support team for their help with my recent issue. They were very professional and resolved my problem quickly.",
    status: "closed",
    priority: "low",
    submittedBy: "David Kim",
    email: "david.k@example.com",
    submitted: "2023-05-05T13:10:00",
    lastUpdated: "2023-05-05T15:30:00",
    assignedTo: "Support Team",
  },
  {
    id: "FB-678901",
    type: "advice",
    subject: "Improving User Onboarding",
    message:
      "Based on my experience, I think your user onboarding process could be improved by adding interactive tutorials.",
    status: "under-review",
    priority: "medium",
    submittedBy: "Sarah Williams",
    email: "sarah.w@example.com",
    submitted: "2023-05-12T11:00:00",
    lastUpdated: "2023-05-14T09:15:00",
    assignedTo: "Product Team",
  },
]

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  "in-progress": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  "under-review": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  resolved: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  closed: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400",
}

const priorityColors: Record<string, string> = {
  low: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  high: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
  critical: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
}

const typeIcons: Record<string, React.ReactNode> = {
  complaint: <MessageSquare className="h-4 w-4" />,
  suggestion: <ThumbsUp className="h-4 w-4" />,
  question: <Search className="h-4 w-4" />,
  comment: <MessageSquare className="h-4 w-4" />,
  advice: <User className="h-4 w-4" />,
}

export function FeedbackDashboard() {
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({})
  const [searchQuery, setSearchQuery] = useState("")
  const [sortField, setSortField] = useState("submitted")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc")
  }

  const applyFilter = (field: string, value: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const removeFilter = (field: string) => {
    setActiveFilters((prev) => {
      const newFilters = { ...prev }
      delete newFilters[field]
      return newFilters
    })
  }

  const clearAllFilters = () => {
    setActiveFilters({})
    setSearchQuery("")
  }

  // Apply filters and search to feedback items
  const filteredFeedback = mockFeedbackItems
    .filter((item) => {
      // Check if item matches all active filters
      for (const [field, value] of Object.entries(activeFilters)) {
        if (item[field as keyof typeof item] !== value) {
          return false
        }
      }

      // Check if item matches search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          item.subject.toLowerCase().includes(query) ||
          item.message.toLowerCase().includes(query) ||
          item.submittedBy.toLowerCase().includes(query) ||
          item.id.toLowerCase().includes(query)
        )
      }

      return true
    })
    .sort((a, b) => {
      const fieldA = a[sortField as keyof typeof a]
      const fieldB = b[sortField as keyof typeof b]

      if (typeof fieldA === "string" && typeof fieldB === "string") {
        return sortDirection === "asc" ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA)
      }

      return 0
    })

  // Calculate statistics
  const stats = {
    total: mockFeedbackItems.length,
    pending: mockFeedbackItems.filter((item) => item.status === "pending").length,
    inProgress: mockFeedbackItems.filter((item) => item.status === "in-progress").length,
    resolved: mockFeedbackItems.filter((item) => item.status === "resolved" || item.status === "closed").length,
    complaints: mockFeedbackItems.filter((item) => item.type === "complaint").length,
    suggestions: mockFeedbackItems.filter((item) => item.type === "suggestion").length,
    other: mockFeedbackItems.filter((item) => !["complaint", "suggestion"].includes(item.type)).length,
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Management Dashboard</CardTitle>
        <CardDescription>Manage and respond to user feedback, complaints, and suggestions.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
            <TabsList>
              <TabsTrigger value="all">All ({stats.total})</TabsTrigger>
              <TabsTrigger value="pending">Pending ({stats.pending})</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress ({stats.inProgress})</TabsTrigger>
              <TabsTrigger value="resolved">Resolved ({stats.resolved})</TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              <Input
                placeholder="Search feedback..."
                className="max-w-xs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filters:</span>
            </div>

            <Select onValueChange={(value) => applyFilter("type", value)}>
              <SelectTrigger className="h-8 w-[130px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="complaint">Complaint</SelectItem>
                <SelectItem value="suggestion">Suggestion</SelectItem>
                <SelectItem value="question">Question</SelectItem>
                <SelectItem value="comment">Comment</SelectItem>
                <SelectItem value="advice">Advice</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={(value) => applyFilter("priority", value)}>
              <SelectTrigger className="h-8 w-[130px]">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={(value) => applyFilter("assignedTo", value)}>
              <SelectTrigger className="h-8 w-[150px]">
                <SelectValue placeholder="Assigned To" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Support Team">Support Team</SelectItem>
                <SelectItem value="Product Team">Product Team</SelectItem>
                <SelectItem value="Finance Team">Finance Team</SelectItem>
                <SelectItem value="Unassigned">Unassigned</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              size="sm"
              className="h-8"
              onClick={clearAllFilters}
              disabled={Object.keys(activeFilters).length === 0 && !searchQuery}
            >
              Clear All
            </Button>
          </div>

          {/* Active filter pills */}
          {Object.keys(activeFilters).length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {Object.entries(activeFilters).map(([field, value]) => (
                <Badge key={field} variant="outline" className="px-2 py-1 flex items-center gap-1">
                  <span className="text-xs capitalize">
                    {field}: {value}
                  </span>
                  <X className="h-3 w-3 cursor-pointer" onClick={() => removeFilter(field)} />
                </Badge>
              ))}
            </div>
          )}

          <div className="space-y-4">
            <div className="bg-muted/50 p-2 rounded-md grid grid-cols-12 gap-4 text-sm font-medium">
              <div
                className="col-span-3 flex items-center gap-1 cursor-pointer"
                onClick={() => {
                  setSortField("subject")
                  toggleSortDirection()
                }}
              >
                Subject
                {sortField === "subject" &&
                  (sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
              </div>
              <div className="col-span-2">Type</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-1">Priority</div>
              <div className="col-span-2">Submitted By</div>
              <div
                className="col-span-2 flex items-center gap-1 cursor-pointer"
                onClick={() => {
                  setSortField("submitted")
                  toggleSortDirection()
                }}
              >
                Date
                {sortField === "submitted" &&
                  (sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
              </div>
              <div className="col-span-1">Actions</div>
            </div>

            <TabsContent value="all" className="m-0">
              {filteredFeedback.length > 0 ? (
                <div className="space-y-2">
                  {filteredFeedback.map((item) => (
                    <div key={item.id} className="p-3 border rounded-md grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-3">
                        <div className="font-medium">{item.subject}</div>
                        <div className="text-xs text-muted-foreground">{item.id}</div>
                      </div>
                      <div className="col-span-2">
                        <Badge variant="outline" className="flex items-center gap-1 capitalize">
                          {typeIcons[item.type]}
                          {item.type}
                        </Badge>
                      </div>
                      <div className="col-span-1">
                        <Badge className={statusColors[item.status]}>
                          {item.status
                            .split("-")
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(" ")}
                        </Badge>
                      </div>
                      <div className="col-span-1">
                        <Badge className={priorityColors[item.priority]}>
                          {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)}
                        </Badge>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm">{item.submittedBy}</div>
                        <div className="text-xs text-muted-foreground">{item.email}</div>
                      </div>
                      <div className="col-span-2 flex items-center gap-1">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm">{new Date(item.submitted).toLocaleDateString()}</span>
                      </div>
                      <div className="col-span-1">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-muted-foreground">No feedback items match your filters.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="pending" className="m-0">
              {filteredFeedback.filter((item) => item.status === "pending").length > 0 ? (
                <div className="space-y-2">
                  {filteredFeedback
                    .filter((item) => item.status === "pending")
                    .map((item) => (
                      <div key={item.id} className="p-3 border rounded-md grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-3">
                          <div className="font-medium">{item.subject}</div>
                          <div className="text-xs text-muted-foreground">{item.id}</div>
                        </div>
                        <div className="col-span-2">
                          <Badge variant="outline" className="flex items-center gap-1 capitalize">
                            {typeIcons[item.type]}
                            {item.type}
                          </Badge>
                        </div>
                        <div className="col-span-1">
                          <Badge className={statusColors[item.status]}>
                            {item.status
                              .split("-")
                              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                              .join(" ")}
                          </Badge>
                        </div>
                        <div className="col-span-1">
                          <Badge className={priorityColors[item.priority]}>
                            {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)}
                          </Badge>
                        </div>
                        <div className="col-span-2">
                          <div className="text-sm">{item.submittedBy}</div>
                          <div className="text-xs text-muted-foreground">{item.email}</div>
                        </div>
                        <div className="col-span-2 flex items-center gap-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm">{new Date(item.submitted).toLocaleDateString()}</span>
                        </div>
                        <div className="col-span-1">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-muted-foreground">No pending feedback items match your filters.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="in-progress" className="m-0">
              {filteredFeedback.filter((item) => item.status === "in-progress").length > 0 ? (
                <div className="space-y-2">
                  {filteredFeedback
                    .filter((item) => item.status === "in-progress")
                    .map((item) => (
                      <div key={item.id} className="p-3 border rounded-md grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-3">
                          <div className="font-medium">{item.subject}</div>
                          <div className="text-xs text-muted-foreground">{item.id}</div>
                        </div>
                        <div className="col-span-2">
                          <Badge variant="outline" className="flex items-center gap-1 capitalize">
                            {typeIcons[item.type]}
                            {item.type}
                          </Badge>
                        </div>
                        <div className="col-span-1">
                          <Badge className={statusColors[item.status]}>
                            {item.status
                              .split("-")
                              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                              .join(" ")}
                          </Badge>
                        </div>
                        <div className="col-span-1">
                          <Badge className={priorityColors[item.priority]}>
                            {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)}
                          </Badge>
                        </div>
                        <div className="col-span-2">
                          <div className="text-sm">{item.submittedBy}</div>
                          <div className="text-xs text-muted-foreground">{item.email}</div>
                        </div>
                        <div className="col-span-2 flex items-center gap-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm">{new Date(item.submitted).toLocaleDateString()}</span>
                        </div>
                        <div className="col-span-1">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-muted-foreground">No in-progress feedback items match your filters.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="resolved" className="m-0">
              {filteredFeedback.filter((item) => ["resolved", "closed"].includes(item.status)).length > 0 ? (
                <div className="space-y-2">
                  {filteredFeedback
                    .filter((item) => ["resolved", "closed"].includes(item.status))
                    .map((item) => (
                      <div key={item.id} className="p-3 border rounded-md grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-3">
                          <div className="font-medium">{item.subject}</div>
                          <div className="text-xs text-muted-foreground">{item.id}</div>
                        </div>
                        <div className="col-span-2">
                          <Badge variant="outline" className="flex items-center gap-1 capitalize">
                            {typeIcons[item.type]}
                            {item.type}
                          </Badge>
                        </div>
                        <div className="col-span-1">
                          <Badge className={statusColors[item.status]}>
                            {item.status
                              .split("-")
                              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                              .join(" ")}
                          </Badge>
                        </div>
                        <div className="col-span-1">
                          <Badge className={priorityColors[item.priority]}>
                            {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)}
                          </Badge>
                        </div>
                        <div className="col-span-2">
                          <div className="text-sm">{item.submittedBy}</div>
                          <div className="text-xs text-muted-foreground">{item.email}</div>
                        </div>
                        <div className="col-span-2 flex items-center gap-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm">{new Date(item.submitted).toLocaleDateString()}</span>
                        </div>
                        <div className="col-span-1">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-muted-foreground">No resolved feedback items match your filters.</p>
                </div>
              )}
            </TabsContent>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}
