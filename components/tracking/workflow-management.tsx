"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Download,
  FileCheck,
  FileDown,
  FileText,
  Plus,
  Send,
  UserCheck,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  Loader2,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

interface WorkflowItem {
  id: string
  title: string
  type: string
  description: string
  status: "draft" | "submitted" | "in_review" | "approved" | "rejected"
  createdAt: string
  dueAt?: string
  submittedAt?: string
  reviewedAt?: string
  approvedAt?: string
  rejectedAt?: string
  creator: User
  reviewer?: User
  approver?: User
  comments: WorkflowComment[]
  attachments: WorkflowAttachment[]
  reportData?: any
}

interface WorkflowComment {
  id: string
  content: string
  createdAt: string
  user: User
}

interface WorkflowAttachment {
  id: string
  name: string
  type: string
  size: number
  url: string
  createdAt: string
}

interface User {
  id: string
  name: string
  email: string
  role: "staff" | "supervisor" | "manager" | "director"
  avatar?: string
}

// Mock current user
const currentUser: User = {
  id: "user-1",
  name: "John Doe",
  email: "john.doe@example.com",
  role: "staff",
  avatar: "/stylized-jd-initials.png",
}

// Mock workflow items
const mockWorkflowItems: WorkflowItem[] = [
  {
    id: "wf-001",
    title: "Monthly Sales Report - May 2025",
    type: "monthly_report",
    description: "Complete sales analysis for May 2025 including trends, product performance, and regional breakdown.",
    status: "approved",
    createdAt: "2025-06-01T09:00:00Z",
    dueAt: "2025-06-05T17:00:00Z",
    submittedAt: "2025-06-03T14:30:00Z",
    reviewedAt: "2025-06-04T10:15:00Z",
    approvedAt: "2025-06-04T16:45:00Z",
    creator: {
      id: "user-1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "staff",
      avatar: "/stylized-jd-initials.png",
    },
    reviewer: {
      id: "user-2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "supervisor",
      avatar: "/javascript-code.png",
    },
    approver: {
      id: "user-3",
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      role: "director",
      avatar: "/abstract-geometric-mj.png",
    },
    comments: [
      {
        id: "comment-1",
        content: "Great work on the regional breakdown analysis!",
        createdAt: "2025-06-04T11:30:00Z",
        user: {
          id: "user-2",
          name: "Jane Smith",
          email: "jane.smith@example.com",
          role: "supervisor",
          avatar: "/javascript-code.png",
        },
      },
      {
        id: "comment-2",
        content: "Approved. The year-over-year comparisons are particularly insightful.",
        createdAt: "2025-06-04T16:45:00Z",
        user: {
          id: "user-3",
          name: "Michael Johnson",
          email: "michael.johnson@example.com",
          role: "director",
          avatar: "/abstract-geometric-mj.png",
        },
      },
    ],
    attachments: [
      {
        id: "attach-1",
        name: "may_2025_sales_report.pdf",
        type: "application/pdf",
        size: 2456000,
        url: "#",
        createdAt: "2025-06-03T14:30:00Z",
      },
      {
        id: "attach-2",
        name: "sales_raw_data.xlsx",
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        size: 1230000,
        url: "#",
        createdAt: "2025-06-03T14:30:00Z",
      },
    ],
  },
  {
    id: "wf-002",
    title: "Weekly Product Performance - Week 22",
    type: "weekly_report",
    description: "Analysis of product performance for week 22, including top sellers and inventory status.",
    status: "in_review",
    createdAt: "2025-05-30T11:20:00Z",
    dueAt: "2025-06-02T17:00:00Z",
    submittedAt: "2025-06-01T16:45:00Z",
    creator: {
      id: "user-1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "staff",
      avatar: "/stylized-jd-initials.png",
    },
    reviewer: {
      id: "user-2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "supervisor",
      avatar: "/javascript-code.png",
    },
    comments: [
      {
        id: "comment-3",
        content: "Please add more details about inventory turnover rates for the top products.",
        createdAt: "2025-06-02T09:15:00Z",
        user: {
          id: "user-2",
          name: "Jane Smith",
          email: "jane.smith@example.com",
          role: "supervisor",
          avatar: "/javascript-code.png",
        },
      },
    ],
    attachments: [
      {
        id: "attach-3",
        name: "week22_product_performance.pdf",
        type: "application/pdf",
        size: 1820000,
        url: "#",
        createdAt: "2025-06-01T16:45:00Z",
      },
    ],
  },
  {
    id: "wf-003",
    title: "Daily Operations Summary - June 3, 2025",
    type: "daily_report",
    description:
      "Summary of daily operations including transaction volume, customer service metrics, and logistics performance.",
    status: "draft",
    createdAt: "2025-06-03T16:30:00Z",
    dueAt: "2025-06-04T10:00:00Z",
    creator: {
      id: "user-1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "staff",
      avatar: "/stylized-jd-initials.png",
    },
    comments: [],
    attachments: [],
  },
]

export function WorkflowManagement() {
  const [workflowItems, setWorkflowItems] = useState<WorkflowItem[]>(mockWorkflowItems)
  const [activeItemId, setActiveItemId] = useState<string | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [filterType, setFilterType] = useState<string>("all")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [newComment, setNewComment] = useState("")
  const [signatureConfirmation, setSignatureConfirmation] = useState("")

  const activeItem = workflowItems.find((item) => item.id === activeItemId)

  const filteredItems = workflowItems.filter((item) => {
    const matchesStatus = filterStatus === "all" || item.status === filterStatus
    const matchesType = filterType === "all" || item.type === filterType
    return matchesStatus && matchesType
  })

  const handleItemClick = (id: string) => {
    setActiveItemId(id)
  }

  const handleSubmitReport = (itemId: string) => {
    setIsSubmitting(true)

    // Simulate submission delay
    setTimeout(() => {
      setWorkflowItems((prev) =>
        prev.map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              status: "submitted",
              submittedAt: new Date().toISOString(),
            }
          }
          return item
        }),
      )
      setIsSubmitting(false)
    }, 1500)
  }

  const handleApproveReport = (itemId: string) => {
    if (signatureConfirmation !== currentUser.name) {
      return
    }

    setWorkflowItems((prev) =>
      prev.map((item) => {
        if (item.id === itemId) {
          const newStatus = item.status === "in_review" ? "approved" : item.status
          return {
            ...item,
            status: newStatus,
            approvedAt: new Date().toISOString(),
            approver: currentUser,
          }
        }
        return item
      }),
    )

    setSignatureConfirmation("")
  }

  const handleRejectReport = (itemId: string) => {
    if (signatureConfirmation !== currentUser.name) {
      return
    }

    setWorkflowItems((prev) =>
      prev.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            status: "rejected",
            rejectedAt: new Date().toISOString(),
          }
        }
        return item
      }),
    )

    setSignatureConfirmation("")
  }

  const handleReviewReport = (itemId: string) => {
    if (signatureConfirmation !== currentUser.name) {
      return
    }

    setWorkflowItems((prev) =>
      prev.map((item) => {
        if (item.id === itemId) {
          const newStatus = item.status === "submitted" ? "in_review" : item.status
          return {
            ...item,
            status: newStatus,
            reviewedAt: new Date().toISOString(),
            reviewer: currentUser,
          }
        }
        return item
      }),
    )

    setSignatureConfirmation("")
  }

  const handleAddComment = (itemId: string) => {
    if (!newComment.trim()) return

    const comment: WorkflowComment = {
      id: `comment-${Date.now()}`,
      content: newComment,
      createdAt: new Date().toISOString(),
      user: currentUser,
    }

    setWorkflowItems((prev) =>
      prev.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            comments: [...item.comments, comment],
          }
        }
        return item
      }),
    )

    setNewComment("")
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A"
    const date = new Date(dateString)
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "draft":
        return "bg-gray-200 text-gray-800"
      case "submitted":
        return "bg-blue-100 text-blue-800"
      case "in_review":
        return "bg-yellow-100 text-yellow-800"
      case "approved":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "draft":
        return <FileText className="h-4 w-4" />
      case "submitted":
        return <Send className="h-4 w-4" />
      case "in_review":
        return <Eye className="h-4 w-4" />
      case "approved":
        return <CheckCircle className="h-4 w-4" />
      case "rejected":
        return <XCircle className="h-4 w-4" />
      default:
        return <AlertCircle className="h-4 w-4" />
    }
  }

  const getReportTypeLabel = (type: string) => {
    switch (type) {
      case "daily_report":
        return "Daily Report"
      case "weekly_report":
        return "Weekly Report"
      case "monthly_report":
        return "Monthly Report"
      case "quarterly_report":
        return "Quarterly Report"
      case "annual_report":
        return "Annual Report"
      case "product_report":
        return "Product Report"
      case "service_report":
        return "Service Report"
      case "sales_report":
        return "Sales Report"
      default:
        return type
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
    }
  }

  const getWorkflowProgress = (item: WorkflowItem) => {
    switch (item.status) {
      case "draft":
        return 25
      case "submitted":
        return 50
      case "in_review":
        return 75
      case "approved":
        return 100
      case "rejected":
        return 100
      default:
        return 0
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Workflow Management</h2>
          <p className="text-muted-foreground">
            Create, submit, review, and approve reports through a structured workflow
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="draft">Drafts</SelectItem>
              <SelectItem value="submitted">Submitted</SelectItem>
              <SelectItem value="in_review">In Review</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="daily_report">Daily Reports</SelectItem>
              <SelectItem value="weekly_report">Weekly Reports</SelectItem>
              <SelectItem value="monthly_report">Monthly Reports</SelectItem>
              <SelectItem value="quarterly_report">Quarterly Reports</SelectItem>
              <SelectItem value="annual_report">Annual Reports</SelectItem>
            </SelectContent>
          </Select>

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Report
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create New Report</DialogTitle>
                <DialogDescription>Create a new report to be submitted through the workflow</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="report-title">Report Title</Label>
                  <Input id="report-title" placeholder="Enter report title" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="report-type">Report Type</Label>
                  <Select>
                    <SelectTrigger id="report-type">
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily_report">Daily Report</SelectItem>
                      <SelectItem value="weekly_report">Weekly Report</SelectItem>
                      <SelectItem value="monthly_report">Monthly Report</SelectItem>
                      <SelectItem value="quarterly_report">Quarterly Report</SelectItem>
                      <SelectItem value="annual_report">Annual Report</SelectItem>
                      <SelectItem value="product_report">Product Report</SelectItem>
                      <SelectItem value="service_report">Service Report</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="report-description">Description</Label>
                  <Textarea id="report-description" placeholder="Enter report description" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="report-due">Due Date</Label>
                  <Input id="report-due" type="datetime-local" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="report-attachments">Attachments</Label>
                  <Input id="report-attachments" type="file" multiple />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
                <Button type="button">Create Draft</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Report List</CardTitle>
              <CardDescription>{filteredItems.length} reports found</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-4">
                  {filteredItems.length === 0 ? (
                    <div className="text-center p-4 text-muted-foreground">No reports found matching your filters</div>
                  ) : (
                    filteredItems.map((item) => (
                      <div
                        key={item.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          activeItemId === item.id ? "border-primary bg-primary/5" : ""
                        }`}
                        onClick={() => handleItemClick(item.id)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium line-clamp-1">{item.title}</h3>
                          <Badge className={`${getStatusColor(item.status)} flex items-center gap-1`}>
                            {getStatusIcon(item.status)}
                            <span className="capitalize">{item.status.replace("_", " ")}</span>
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{item.description}</p>
                        <div className="flex justify-between items-center text-xs text-muted-foreground">
                          <span>{getReportTypeLabel(item.type)}</span>
                          <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                        </div>
                        <Progress className="mt-2 h-1" value={getWorkflowProgress(item)} />
                      </div>
                    ))
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          {activeItem ? (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className={`${getStatusColor(activeItem.status)} mb-2 flex items-center gap-1`}>
                      {getStatusIcon(activeItem.status)}
                      <span className="capitalize">{activeItem.status.replace("_", " ")}</span>
                    </Badge>
                    <CardTitle>{activeItem.title}</CardTitle>
                    <CardDescription>{getReportTypeLabel(activeItem.type)}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <FileDown className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                    {activeItem.status === "draft" && (
                      <Button size="sm" onClick={() => handleSubmitReport(activeItem.id)} disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Submit
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <Tabs defaultValue="details">
                  <TabsList>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="workflow">Workflow</TabsTrigger>
                    <TabsTrigger value="comments">
                      Comments
                      <Badge className="ml-2" variant="secondary">
                        {activeItem.comments.length}
                      </Badge>
                    </TabsTrigger>
                    <TabsTrigger value="attachments">
                      Attachments
                      <Badge className="ml-2" variant="secondary">
                        {activeItem.attachments.length}
                      </Badge>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="space-y-4">
                    <div className="border rounded-lg p-4 mt-4">
                      <h3 className="font-medium mb-2">Description</h3>
                      <p className="text-muted-foreground">{activeItem.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-3">Report Information</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Created At:</span>
                            <span className="text-sm">{formatDate(activeItem.createdAt)}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Due Date:</span>
                            <span className="text-sm">{formatDate(activeItem.dueAt)}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Submitted At:</span>
                            <span className="text-sm">{formatDate(activeItem.submittedAt)}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Current Status:</span>
                            <Badge className={getStatusColor(activeItem.status)}>
                              {activeItem.status.replace("_", " ")}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-3">Participants</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage
                                src={activeItem.creator.avatar || "/placeholder.svg"}
                                alt={activeItem.creator.name}
                              />
                              <AvatarFallback>
                                {activeItem.creator.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">{activeItem.creator.name}</p>
                              <p className="text-xs text-muted-foreground">Creator • {activeItem.creator.role}</p>
                            </div>
                          </div>

                          {activeItem.reviewer && (
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage
                                  src={activeItem.reviewer.avatar || "/placeholder.svg"}
                                  alt={activeItem.reviewer.name}
                                />
                                <AvatarFallback>
                                  {activeItem.reviewer.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">{activeItem.reviewer.name}</p>
                                <p className="text-xs text-muted-foreground">Reviewer • {activeItem.reviewer.role}</p>
                              </div>
                            </div>
                          )}

                          {activeItem.approver && (
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage
                                  src={activeItem.approver.avatar || "/placeholder.svg"}
                                  alt={activeItem.approver.name}
                                />
                                <AvatarFallback>
                                  {activeItem.approver.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">{activeItem.approver.name}</p>
                                <p className="text-xs text-muted-foreground">Approver • {activeItem.approver.role}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="workflow" className="space-y-6 mt-4">
                    <div className="relative">
                      <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-muted-foreground/20" />

                      <div className="relative pl-12 pb-8">
                        <div className="absolute left-[22px] top-1 w-4 h-4 rounded-full bg-green-500 border-4 border-background" />
                        <div>
                          <h3 className="font-medium">Report Created</h3>
                          <p className="text-sm text-muted-foreground">
                            {formatDate(activeItem.createdAt)} by {activeItem.creator.name}
                          </p>
                          <Badge variant="outline" className="mt-2 text-xs">
                            Draft
                          </Badge>
                        </div>
                      </div>

                      {activeItem.submittedAt && (
                        <div className="relative pl-12 pb-8">
                          <div className="absolute left-[22px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-background" />
                          <div>
                            <h3 className="font-medium">Report Submitted</h3>
                            <p className="text-sm text-muted-foreground">
                              {formatDate(activeItem.submittedAt)} by {activeItem.creator.name}
                            </p>
                            <Badge variant="outline" className="mt-2 text-xs">
                              Submitted
                            </Badge>
                          </div>
                        </div>
                      )}

                      {activeItem.reviewedAt && (
                        <div className="relative pl-12 pb-8">
                          <div className="absolute left-[22px] top-1 w-4 h-4 rounded-full bg-yellow-500 border-4 border-background" />
                          <div>
                            <h3 className="font-medium">Report Reviewed</h3>
                            <p className="text-sm text-muted-foreground">
                              {formatDate(activeItem.reviewedAt)} by {activeItem.reviewer?.name}
                            </p>
                            <Badge variant="outline" className="mt-2 text-xs">
                              In Review
                            </Badge>
                          </div>
                        </div>
                      )}

                      {activeItem.approvedAt && (
                        <div className="relative pl-12">
                          <div className="absolute left-[22px] top-1 w-4 h-4 rounded-full bg-green-500 border-4 border-background" />
                          <div>
                            <h3 className="font-medium">Report Approved</h3>
                            <p className="text-sm text-muted-foreground">
                              {formatDate(activeItem.approvedAt)} by {activeItem.approver?.name}
                            </p>
                            <Badge variant="outline" className="mt-2 text-xs">
                              Approved
                            </Badge>
                          </div>
                        </div>
                      )}

                      {activeItem.rejectedAt && (
                        <div className="relative pl-12">
                          <div className="absolute left-[22px] top-1 w-4 h-4 rounded-full bg-red-500 border-4 border-background" />
                          <div>
                            <h3 className="font-medium">Report Rejected</h3>
                            <p className="text-sm text-muted-foreground">
                              {formatDate(activeItem.rejectedAt)} by{" "}
                              {activeItem.reviewer?.name || activeItem.approver?.name}
                            </p>
                            <Badge variant="outline" className="mt-2 text-xs">
                              Rejected
                            </Badge>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Next Actions */}
                    {activeItem.status !== "approved" && activeItem.status !== "rejected" && (
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Next Actions</h3>

                        {activeItem.status === "draft" && (
                          <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">
                              This report is still in draft state and needs to be submitted.
                            </p>
                            <Button onClick={() => handleSubmitReport(activeItem.id)} disabled={isSubmitting}>
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                  Submitting...
                                </>
                              ) : (
                                <>
                                  <Send className="h-4 w-4 mr-2" />
                                  Submit Report
                                </>
                              )}
                            </Button>
                          </div>
                        )}

                        {activeItem.status === "submitted" && (
                          <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">
                              This report has been submitted and is waiting for review by a supervisor.
                            </p>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button>
                                  <UserCheck className="h-4 w-4 mr-2" />
                                  Mark as Reviewed
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Confirm Review</DialogTitle>
                                  <DialogDescription>
                                    Are you sure you want to mark this report as reviewed? This action will update the
                                    workflow status.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="py-4">
                                  <p className="text-sm text-muted-foreground mb-4">
                                    Type your name below to confirm this action. This will serve as your digital
                                    signature.
                                  </p>
                                  <Input
                                    value={signatureConfirmation}
                                    onChange={(e) => setSignatureConfirmation(e.target.value)}
                                    placeholder="Type your full name"
                                  />
                                </div>
                                <DialogFooter>
                                  <Button variant="outline" onClick={() => setSignatureConfirmation("")}>
                                    Cancel
                                  </Button>
                                  <Button
                                    onClick={() => handleReviewReport(activeItem.id)}
                                    disabled={signatureConfirmation !== currentUser.name}
                                  >
                                    Confirm Review
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        )}

                        {activeItem.status === "in_review" && (
                          <div className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                              This report has been reviewed and is waiting for final approval.
                            </p>
                            <div className="flex gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button>
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Approve Report
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Confirm Approval</DialogTitle>
                                    <DialogDescription>
                                      Are you sure you want to approve this report? This action will mark the workflow
                                      as complete.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="py-4">
                                    <p className="text-sm text-muted-foreground mb-4">
                                      Type your name below to confirm this action. This will serve as your digital
                                      signature.
                                    </p>
                                    <Input
                                      value={signatureConfirmation}
                                      onChange={(e) => setSignatureConfirmation(e.target.value)}
                                      placeholder="Type your full name"
                                    />
                                  </div>
                                  <DialogFooter>
                                    <Button variant="outline" onClick={() => setSignatureConfirmation("")}>
                                      Cancel
                                    </Button>
                                    <Button
                                      onClick={() => handleApproveReport(activeItem.id)}
                                      disabled={signatureConfirmation !== currentUser.name}
                                    >
                                      Confirm Approval
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>

                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline">
                                    <XCircle className="h-4 w-4 mr-2" />
                                    Reject Report
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Confirm Rejection</DialogTitle>
                                    <DialogDescription>
                                      Are you sure you want to reject this report? The report will need to be revised
                                      and resubmitted.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="py-4">
                                    <p className="text-sm text-muted-foreground mb-4">
                                      Type your name below to confirm this action. This will serve as your digital
                                      signature.
                                    </p>
                                    <Input
                                      value={signatureConfirmation}
                                      onChange={(e) => setSignatureConfirmation(e.target.value)}
                                      placeholder="Type your full name"
                                    />
                                  </div>
                                  <DialogFooter>
                                    <Button variant="outline" onClick={() => setSignatureConfirmation("")}>
                                      Cancel
                                    </Button>
                                    <Button
                                      variant="destructive"
                                      onClick={() => handleRejectReport(activeItem.id)}
                                      disabled={signatureConfirmation !== currentUser.name}
                                    >
                                      Confirm Rejection
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="comments" className="space-y-4 mt-4">
                    <ScrollArea className="h-[300px] pr-4">
                      {activeItem.comments.length === 0 ? (
                        <div className="text-center p-6 text-muted-foreground">No comments yet</div>
                      ) : (
                        <div className="space-y-4">
                          {activeItem.comments.map((comment) => (
                            <div key={comment.id} className="flex gap-4 p-4 border rounded-lg">
                              <Avatar>
                                <AvatarImage src={comment.user.avatar || "/placeholder.svg"} alt={comment.user.name} />
                                <AvatarFallback>
                                  {comment.user.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="font-medium">{comment.user.name}</span>
                                  <span className="text-xs text-muted-foreground">{formatDate(comment.createdAt)}</span>
                                </div>
                                <p className="text-sm">{comment.content}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </ScrollArea>

                    <div className="pt-4 border-t space-y-4">
                      <h3 className="font-medium">Add a Comment</h3>
                      <Textarea
                        placeholder="Type your comment here..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                      />
                      <Button onClick={() => handleAddComment(activeItem.id)} disabled={!newComment.trim()}>
                        Add Comment
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="attachments" className="space-y-4 mt-4">
                    {activeItem.attachments.length === 0 ? (
                      <div className="text-center p-6 text-muted-foreground">No attachments yet</div>
                    ) : (
                      <div className="space-y-2">
                        {activeItem.attachments.map((attachment) => (
                          <div key={attachment.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <FileText className="h-8 w-8 text-blue-500" />
                              <div>
                                <p className="font-medium">{attachment.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {formatFileSize(attachment.size)} • Added {formatDate(attachment.createdAt)}
                                </p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-4 border-t">
                      <h3 className="font-medium mb-2">Add Attachments</h3>
                      <div className="flex items-center gap-2">
                        <Input type="file" id="attachment" />
                        <Button>Upload</Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center min-h-[400px] text-center p-6">
                <FileCheck className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No Report Selected</h3>
                <p className="text-muted-foreground mb-4">
                  Select a report from the list to view its details and manage its workflow
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Create New Report
                    </Button>
                  </DialogTrigger>
                  <DialogContent>{/* Dialog content would be the same as above */}</DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
