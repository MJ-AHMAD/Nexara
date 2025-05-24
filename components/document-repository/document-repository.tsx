"use client"

import { useState, useEffect } from "react"
import { Search, Filter, FolderOpen, FileText, Download, Share2, Eye, Star, Clock, Tag, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/components/ui/use-toast"

// Document types and interfaces
interface Document {
  id: string
  title: string
  description: string
  category: string
  initiative: "Nexara" | "Infinity Nexus" | "Yunus Inspire" | "Trusted Ally" | "MJ AHMAD"
  type: "pdf" | "docx" | "pptx" | "xlsx" | "md" | "txt" | "image" | "video"
  tags: string[]
  dateCreated: string
  dateModified: string
  author: string
  starred: boolean
  path: string
  size: string
  version: string
  permissions: "public" | "private" | "team"
}

interface Category {
  id: string
  name: string
  count: number
}

interface Initiative {
  id: string
  name: string
  color: string
  count: number
}

// Sample data
const initiatives: Initiative[] = [
  { id: "nexara", name: "Nexara", color: "bg-blue-500", count: 24 },
  { id: "infinity-nexus", name: "Infinity Nexus", color: "bg-indigo-500", count: 18 },
  { id: "yunus-inspire", name: "Yunus Inspire", color: "bg-green-500", count: 15 },
  { id: "trusted-ally", name: "Trusted Ally", color: "bg-purple-500", count: 12 },
  { id: "mj-ahmad", name: "MJ AHMAD", color: "bg-amber-500", count: 21 },
]

const categories: Category[] = [
  { id: "strategy", name: "Strategy & Planning", count: 18 },
  { id: "governance", name: "Governance", count: 12 },
  { id: "technical", name: "Technical Documentation", count: 24 },
  { id: "design", name: "Design Assets", count: 15 },
  { id: "research", name: "Research & Analysis", count: 9 },
  { id: "marketing", name: "Marketing & Communications", count: 14 },
  { id: "legal", name: "Legal & Compliance", count: 8 },
  { id: "community", name: "Community & Contributors", count: 11 },
  { id: "reports", name: "Reports & Metrics", count: 13 },
]

// Sample documents data
const sampleDocuments: Document[] = [
  {
    id: "doc-001",
    title: "Nexara Platform Architecture Overview",
    description:
      "Comprehensive overview of the Nexara platform architecture, including system components and integration patterns.",
    category: "technical",
    initiative: "Nexara",
    type: "pdf",
    tags: ["architecture", "platform", "technical", "integration"],
    dateCreated: "2023-09-15",
    dateModified: "2023-11-02",
    author: "Platform Architecture Team",
    starred: true,
    path: "/docs/nexara/platform-architecture-overview.pdf",
    size: "4.2 MB",
    version: "2.1",
    permissions: "team",
  },
  {
    id: "doc-002",
    title: "Infinity Nexus Research Methodology",
    description: "Detailed explanation of research methodologies used in Infinity Nexus data collection and analysis.",
    category: "research",
    initiative: "Infinity Nexus",
    type: "docx",
    tags: ["research", "methodology", "data", "analysis"],
    dateCreated: "2023-08-22",
    dateModified: "2023-10-18",
    author: "Research Team",
    starred: false,
    path: "/docs/infinity-nexus/research-methodology.docx",
    size: "1.8 MB",
    version: "1.3",
    permissions: "team",
  },
  {
    id: "doc-003",
    title: "Yunus Inspire Social Business Model",
    description: "Framework and implementation guide for the social business model based on Dr. Yunus's principles.",
    category: "strategy",
    initiative: "Yunus Inspire",
    type: "pdf",
    tags: ["social business", "model", "framework", "implementation"],
    dateCreated: "2023-07-10",
    dateModified: "2023-09-25",
    author: "Strategy Team",
    starred: true,
    path: "/docs/yunus-inspire/social-business-model.pdf",
    size: "3.5 MB",
    version: "2.0",
    permissions: "public",
  },
  {
    id: "doc-004",
    title: "Trusted Ally Community Engagement Plan",
    description: "Strategic plan for community engagement and support initiatives in Cox's Bazar and beyond.",
    category: "strategy",
    initiative: "Trusted Ally",
    type: "pptx",
    tags: ["community", "engagement", "strategy", "support"],
    dateCreated: "2023-06-18",
    dateModified: "2023-08-30",
    author: "Community Team",
    starred: false,
    path: "/docs/trusted-ally/community-engagement-plan.pptx",
    size: "5.7 MB",
    version: "1.2",
    permissions: "team",
  },
  {
    id: "doc-005",
    title: "MJ AHMAD Leadership Framework",
    description: "Leadership principles, methodologies, and practices for global impact and community development.",
    category: "strategy",
    initiative: "MJ AHMAD",
    type: "pdf",
    tags: ["leadership", "framework", "principles", "development"],
    dateCreated: "2023-05-12",
    dateModified: "2023-07-28",
    author: "MJ Ahmad",
    starred: true,
    path: "/docs/mj-ahmad/leadership-framework.pdf",
    size: "2.9 MB",
    version: "3.1",
    permissions: "public",
  },
  {
    id: "doc-006",
    title: "Nexara Integration API Documentation",
    description:
      "Technical documentation for the Nexara platform APIs, including endpoints, authentication, and examples.",
    category: "technical",
    initiative: "Nexara",
    type: "md",
    tags: ["api", "documentation", "integration", "technical"],
    dateCreated: "2023-09-05",
    dateModified: "2023-11-10",
    author: "Development Team",
    starred: false,
    path: "/docs/nexara/api-documentation.md",
    size: "1.2 MB",
    version: "2.4",
    permissions: "team",
  },
  {
    id: "doc-007",
    title: "Infinity Nexus Data Analysis Results Q3 2023",
    description: "Quarterly analysis of data collected through Infinity Nexus research initiatives with key findings.",
    category: "reports",
    initiative: "Infinity Nexus",
    type: "xlsx",
    tags: ["data", "analysis", "results", "quarterly"],
    dateCreated: "2023-10-05",
    dateModified: "2023-10-05",
    author: "Data Analysis Team",
    starred: false,
    path: "/docs/infinity-nexus/q3-2023-analysis.xlsx",
    size: "3.8 MB",
    version: "1.0",
    permissions: "team",
  },
  {
    id: "doc-008",
    title: "Yunus Inspire Impact Assessment Framework",
    description: "Methodology and metrics for assessing the impact of social business initiatives.",
    category: "research",
    initiative: "Yunus Inspire",
    type: "pdf",
    tags: ["impact", "assessment", "metrics", "social business"],
    dateCreated: "2023-08-15",
    dateModified: "2023-10-22",
    author: "Impact Assessment Team",
    starred: true,
    path: "/docs/yunus-inspire/impact-assessment-framework.pdf",
    size: "2.6 MB",
    version: "1.5",
    permissions: "team",
  },
  {
    id: "doc-009",
    title: "Trusted Ally Community Support Handbook",
    description: "Comprehensive guide for community support volunteers and team members.",
    category: "community",
    initiative: "Trusted Ally",
    type: "pdf",
    tags: ["handbook", "community", "support", "volunteers"],
    dateCreated: "2023-07-20",
    dateModified: "2023-09-18",
    author: "Community Support Team",
    starred: false,
    path: "/docs/trusted-ally/support-handbook.pdf",
    size: "4.1 MB",
    version: "2.2",
    permissions: "team",
  },
  {
    id: "doc-010",
    title: "MJ AHMAD Mentorship Program Guide",
    description: "Structure, curriculum, and best practices for the global mentorship program.",
    category: "community",
    initiative: "MJ AHMAD",
    type: "docx",
    tags: ["mentorship", "program", "guide", "curriculum"],
    dateCreated: "2023-06-25",
    dateModified: "2023-08-12",
    author: "Mentorship Program Team",
    starred: true,
    path: "/docs/mj-ahmad/mentorship-program-guide.docx",
    size: "2.3 MB",
    version: "1.8",
    permissions: "team",
  },
  {
    id: "doc-011",
    title: "Nexara Design System Documentation",
    description:
      "Comprehensive guide to the Nexara design system, including components, patterns, and usage guidelines.",
    category: "design",
    initiative: "Nexara",
    type: "pdf",
    tags: ["design", "system", "components", "guidelines"],
    dateCreated: "2023-08-30",
    dateModified: "2023-10-15",
    author: "Design Team",
    starred: false,
    path: "/docs/nexara/design-system.pdf",
    size: "8.5 MB",
    version: "2.0",
    permissions: "team",
  },
  {
    id: "doc-012",
    title: "Infinity Nexus Research Ethics Guidelines",
    description: "Ethical standards and guidelines for conducting research under the Infinity Nexus initiative.",
    category: "governance",
    initiative: "Infinity Nexus",
    type: "pdf",
    tags: ["ethics", "research", "guidelines", "standards"],
    dateCreated: "2023-07-05",
    dateModified: "2023-09-10",
    author: "Ethics Committee",
    starred: true,
    path: "/docs/infinity-nexus/research-ethics.pdf",
    size: "1.7 MB",
    version: "1.4",
    permissions: "public",
  },
  {
    id: "doc-013",
    title: "Yunus Inspire Partnership Framework",
    description: "Guidelines and criteria for establishing partnerships under the Yunus Inspire initiative.",
    category: "governance",
    initiative: "Yunus Inspire",
    type: "docx",
    tags: ["partnership", "framework", "guidelines", "criteria"],
    dateCreated: "2023-09-08",
    dateModified: "2023-10-25",
    author: "Partnerships Team",
    starred: false,
    path: "/docs/yunus-inspire/partnership-framework.docx",
    size: "2.1 MB",
    version: "1.2",
    permissions: "team",
  },
  {
    id: "doc-014",
    title: "Trusted Ally Field Operations Manual",
    description: "Detailed procedures and protocols for field operations in community support initiatives.",
    category: "technical",
    initiative: "Trusted Ally",
    type: "pdf",
    tags: ["operations", "field", "procedures", "manual"],
    dateCreated: "2023-08-12",
    dateModified: "2023-10-05",
    author: "Field Operations Team",
    starred: true,
    path: "/docs/trusted-ally/field-operations-manual.pdf",
    size: "5.3 MB",
    version: "2.3",
    permissions: "team",
  },
  {
    id: "doc-015",
    title: "MJ AHMAD Leadership Content Strategy",
    description: "Strategic plan for creating and distributing leadership content across platforms.",
    category: "marketing",
    initiative: "MJ AHMAD",
    type: "pptx",
    tags: ["content", "strategy", "leadership", "distribution"],
    dateCreated: "2023-07-15",
    dateModified: "2023-09-20",
    author: "Content Team",
    starred: false,
    path: "/docs/mj-ahmad/content-strategy.pptx",
    size: "4.8 MB",
    version: "1.6",
    permissions: "team",
  },
  {
    id: "doc-016",
    title: "Nexara Platform Security Whitepaper",
    description: "Comprehensive overview of security measures, protocols, and best practices for the Nexara platform.",
    category: "technical",
    initiative: "Nexara",
    type: "pdf",
    tags: ["security", "platform", "protocols", "whitepaper"],
    dateCreated: "2023-09-25",
    dateModified: "2023-11-08",
    author: "Security Team",
    starred: true,
    path: "/docs/nexara/security-whitepaper.pdf",
    size: "3.2 MB",
    version: "1.9",
    permissions: "team",
  },
  {
    id: "doc-017",
    title: "Infinity Nexus Visualization Guidelines",
    description: "Standards and best practices for data visualization in Infinity Nexus research outputs.",
    category: "design",
    initiative: "Infinity Nexus",
    type: "pdf",
    tags: ["visualization", "data", "guidelines", "standards"],
    dateCreated: "2023-08-18",
    dateModified: "2023-10-12",
    author: "Data Visualization Team",
    starred: false,
    path: "/docs/infinity-nexus/visualization-guidelines.pdf",
    size: "6.7 MB",
    version: "1.3",
    permissions: "team",
  },
  {
    id: "doc-018",
    title: "Yunus Inspire Social Business Case Studies",
    description: "Collection of case studies highlighting successful social business implementations.",
    category: "research",
    initiative: "Yunus Inspire",
    type: "pdf",
    tags: ["case studies", "social business", "success stories", "implementation"],
    dateCreated: "2023-06-30",
    dateModified: "2023-09-05",
    author: "Research Team",
    starred: true,
    path: "/docs/yunus-inspire/case-studies.pdf",
    size: "7.9 MB",
    version: "2.1",
    permissions: "public",
  },
  {
    id: "doc-019",
    title: "Trusted Ally Community Needs Assessment",
    description: "Comprehensive assessment of community needs and support requirements in target regions.",
    category: "research",
    initiative: "Trusted Ally",
    type: "xlsx",
    tags: ["assessment", "community", "needs", "support"],
    dateCreated: "2023-07-25",
    dateModified: "2023-09-15",
    author: "Assessment Team",
    starred: false,
    path: "/docs/trusted-ally/needs-assessment.xlsx",
    size: "3.6 MB",
    version: "1.5",
    permissions: "team",
  },
  {
    id: "doc-020",
    title: "MJ AHMAD Global Impact Report 2023",
    description: "Annual report on the global impact of leadership and community development initiatives.",
    category: "reports",
    initiative: "MJ AHMAD",
    type: "pdf",
    tags: ["impact", "report", "annual", "global"],
    dateCreated: "2023-10-10",
    dateModified: "2023-10-10",
    author: "Impact Assessment Team",
    starred: true,
    path: "/docs/mj-ahmad/impact-report-2023.pdf",
    size: "5.4 MB",
    version: "1.0",
    permissions: "public",
  },
]

// Helper functions
const getFileIcon = (type: Document["type"]) => {
  switch (type) {
    case "pdf":
      return <FileText className="h-5 w-5 text-red-500" />
    case "docx":
      return <FileText className="h-5 w-5 text-blue-500" />
    case "pptx":
      return <FileText className="h-5 w-5 text-orange-500" />
    case "xlsx":
      return <FileText className="h-5 w-5 text-green-500" />
    case "md":
      return <FileText className="h-5 w-5 text-purple-500" />
    case "txt":
      return <FileText className="h-5 w-5 text-gray-500" />
    case "image":
      return <FileText className="h-5 w-5 text-pink-500" />
    case "video":
      return <FileText className="h-5 w-5 text-blue-600" />
    default:
      return <FileText className="h-5 w-5" />
  }
}

const getInitiativeColor = (initiative: Document["initiative"]) => {
  switch (initiative) {
    case "Nexara":
      return "bg-blue-100 text-blue-800"
    case "Infinity Nexus":
      return "bg-indigo-100 text-indigo-800"
    case "Yunus Inspire":
      return "bg-green-100 text-green-800"
    case "Trusted Ally":
      return "bg-purple-100 text-purple-800"
    case "MJ AHMAD":
      return "bg-amber-100 text-amber-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function DocumentRepository() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedInitiatives, setSelectedInitiatives] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<"dateModified" | "title" | "dateCreated">("dateModified")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>(sampleDocuments)
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null)
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false)

  // Filter and sort documents
  useEffect(() => {
    let filtered = [...sampleDocuments]

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (doc) =>
          doc.title.toLowerCase().includes(query) ||
          doc.description.toLowerCase().includes(query) ||
          doc.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Apply initiative filter
    if (selectedInitiatives.length > 0) {
      filtered = filtered.filter((doc) => selectedInitiatives.includes(doc.initiative.toLowerCase().replace(" ", "-")))
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((doc) => selectedCategories.includes(doc.category))
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortBy === "title") {
        return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      } else {
        const dateA = new Date(a[sortBy]).getTime()
        const dateB = new Date(b[sortBy]).getTime()
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA
      }
    })

    setFilteredDocuments(filtered)
  }, [searchQuery, selectedInitiatives, selectedCategories, sortBy, sortOrder])

  // Toggle initiative selection
  const toggleInitiative = (initiativeId: string) => {
    setSelectedInitiatives((prev) =>
      prev.includes(initiativeId) ? prev.filter((id) => id !== initiativeId) : [...prev, initiativeId],
    )
  }

  // Toggle category selection
  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("")
    setSelectedInitiatives([])
    setSelectedCategories([])
    setSortBy("dateModified")
    setSortOrder("desc")
  }

  // Handle document actions
  const handleViewDocument = (doc: Document) => {
    setSelectedDocument(doc)
    // In a real app, this would open the document viewer
    console.log("Viewing document:", doc.title)
  }

  const handleDownloadDocument = (doc: Document) => {
    // In a real app, this would trigger a download
    toast({
      title: "Download started",
      description: `${doc.title} (${doc.size})`,
    })
  }

  const handleShareDocument = (doc: Document) => {
    setSelectedDocument(doc)
    setIsShareDialogOpen(true)
  }

  const handleStarDocument = (doc: Document) => {
    // In a real app, this would update the document's starred status
    toast({
      title: doc.starred ? "Removed from favorites" : "Added to favorites",
      description: doc.title,
    })
  }

  // Share document
  const shareDocument = (method: "email" | "link" | "platform") => {
    if (!selectedDocument) return

    // In a real app, this would implement the sharing functionality
    toast({
      title: "Document shared",
      description: `${selectedDocument.title} shared via ${method}`,
    })
    setIsShareDialogOpen(false)
  }

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Document Repository</h2>
        <p className="text-muted-foreground">Access and manage all documents across Nexara initiatives</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar with filters */}
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Filters</CardTitle>
              <CardDescription>Refine document results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Initiatives</h3>
                <div className="space-y-2">
                  {initiatives.map((initiative) => (
                    <div key={initiative.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`initiative-${initiative.id}`}
                        checked={selectedInitiatives.includes(initiative.id)}
                        onCheckedChange={() => toggleInitiative(initiative.id)}
                      />
                      <label
                        htmlFor={`initiative-${initiative.id}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                      >
                        <div className={`w-2 h-2 rounded-full ${initiative.color} mr-2`}></div>
                        {initiative.name}
                        <span className="ml-1 text-muted-foreground">({initiative.count})</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-sm font-medium">Categories</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={() => toggleCategory(category.id)}
                      />
                      <label
                        htmlFor={`category-${category.id}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                      >
                        {category.name}
                        <span className="ml-1 text-muted-foreground">({category.count})</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-sm font-medium">Sort By</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant={sortBy === "dateModified" ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSortBy("dateModified")
                      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                    }}
                    className="justify-start"
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    {sortBy === "dateModified" && sortOrder === "desc" ? "Newest" : "Oldest"}
                  </Button>
                  <Button
                    variant={sortBy === "title" ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSortBy("title")
                      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                    }}
                    className="justify-start"
                  >
                    <Tag className="mr-2 h-4 w-4" />
                    {sortBy === "title" && sortOrder === "desc" ? "Z-A" : "A-Z"}
                  </Button>
                </div>
              </div>

              <Button variant="outline" size="sm" onClick={clearFilters} className="w-full">
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main content area */}
        <div className="md:col-span-3 space-y-6">
          {/* Search and view controls */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search documents..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-9 w-9"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <line x1="8" x2="21" y1="6" y2="6" />
                  <line x1="8" x2="21" y1="12" y2="12" />
                  <line x1="8" x2="21" y1="18" y2="18" />
                  <line x1="3" x2="3.01" y1="6" y2="6" />
                  <line x1="3" x2="3.01" y1="12" y2="12" />
                  <line x1="3" x2="3.01" y1="18" y2="18" />
                </svg>
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Quick Filters</h4>
                      <p className="text-sm text-muted-foreground">Apply common filters to your documents</p>
                    </div>
                    <div className="grid gap-2">
                      <Button variant="outline" size="sm" onClick={() => setSelectedInitiatives(["nexara"])}>
                        Nexara Only
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSortBy("dateModified")
                          setSortOrder("desc")
                        }}
                      >
                        Recently Modified
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          // Filter to only show starred documents
                          setFilteredDocuments(sampleDocuments.filter((doc) => doc.starred))
                        }}
                      >
                        Favorites
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Document tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Documents</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="shared">Shared with Me</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              {filteredDocuments.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <FolderOpen className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No documents found</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                  <Button variant="outline" className="mt-4" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              ) : viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredDocuments.map((doc) => (
                    <Card key={doc.id} className="overflow-hidden">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center">
                            {getFileIcon(doc.type)}
                            <CardTitle className="text-base ml-2 truncate">{doc.title}</CardTitle>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleStarDocument(doc)}
                          >
                            <Star className={`h-4 w-4 ${doc.starred ? "fill-yellow-400 text-yellow-400" : ""}`} />
                          </Button>
                        </div>
                        <Badge className={`mt-2 ${getInitiativeColor(doc.initiative)}`} variant="secondary">
                          {doc.initiative}
                        </Badge>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <p className="text-sm text-muted-foreground line-clamp-2 h-10">{doc.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {doc.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {doc.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{doc.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between items-center">
                        <div className="text-xs text-muted-foreground">
                          Updated {new Date(doc.dateModified).toLocaleDateString()}
                        </div>
                        <div className="flex space-x-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleViewDocument(doc)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleDownloadDocument(doc)}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleShareDocument(doc)}
                          >
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="border rounded-md">
                  <div className="grid grid-cols-12 gap-4 p-4 font-medium text-sm border-b">
                    <div className="col-span-5">Document</div>
                    <div className="col-span-2">Initiative</div>
                    <div className="col-span-2">Modified</div>
                    <div className="col-span-1">Size</div>
                    <div className="col-span-2 text-right">Actions</div>
                  </div>
                  <ScrollArea className="h-[600px]">
                    {filteredDocuments.map((doc) => (
                      <div key={doc.id} className="grid grid-cols-12 gap-4 p-4 text-sm border-b hover:bg-muted/50">
                        <div className="col-span-5 flex items-center">
                          <div className="mr-3">{getFileIcon(doc.type)}</div>
                          <div>
                            <div className="font-medium flex items-center">
                              {doc.title}
                              {doc.starred && <Star className="h-3 w-3 ml-2 fill-yellow-400 text-yellow-400" />}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1 line-clamp-1">{doc.description}</div>
                          </div>
                        </div>
                        <div className="col-span-2">
                          <Badge className={getInitiativeColor(doc.initiative)} variant="secondary">
                            {doc.initiative}
                          </Badge>
                        </div>
                        <div className="col-span-2 text-muted-foreground">
                          {new Date(doc.dateModified).toLocaleDateString()}
                        </div>
                        <div className="col-span-1 text-muted-foreground">{doc.size}</div>
                        <div className="col-span-2 flex justify-end space-x-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleViewDocument(doc)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleDownloadDocument(doc)}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleShareDocument(doc)}
                          >
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </ScrollArea>
                </div>
              )}
            </TabsContent>
            <TabsContent value="recent">
              <div className="py-10 text-center">
                <h3 className="text-lg font-medium">Recent Documents</h3>
                <p className="text-sm text-muted-foreground mt-1">Documents you've recently viewed or modified</p>
              </div>
            </TabsContent>
            <TabsContent value="favorites">
              <div className="py-10 text-center">
                <h3 className="text-lg font-medium">Favorite Documents</h3>
                <p className="text-sm text-muted-foreground mt-1">Documents you've marked as favorites</p>
              </div>
            </TabsContent>
            <TabsContent value="shared">
              <div className="py-10 text-center">
                <h3 className="text-lg font-medium">Shared Documents</h3>
                <p className="text-sm text-muted-foreground mt-1">Documents shared with you by others</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Share Dialog */}
      <Dialog open={isShareDialogOpen} onOpenChange={setIsShareDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share Document</DialogTitle>
            <DialogDescription>{selectedDocument?.title}</DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2 py-4">
            <div className="grid flex-1 gap-2">
              <Input id="link" defaultValue={`https://nexara.org/docs/${selectedDocument?.id}`} readOnly />
            </div>
            <Button
              size="sm"
              className="px-3"
              onClick={() => {
                navigator.clipboard.writeText(`https://nexara.org/docs/${selectedDocument?.id}`)
                toast({
                  title: "Link copied",
                  description: "Document link copied to clipboard",
                })
              }}
            >
              <span className="sr-only">Copy</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            </Button>
          </div>
          <div className="grid gap-4 py-4">
            <h4 className="text-sm font-medium">Share via</h4>
            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" onClick={() => shareDocument("email")}>
                Email
              </Button>
              <Button variant="outline" onClick={() => shareDocument("link")}>
                Generate Link
              </Button>
              <Button variant="outline" onClick={() => shareDocument("platform")}>
                Platform
              </Button>
            </div>
            <Separator />
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Permissions</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="view" defaultChecked />
                  <label
                    htmlFor="view"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Can view
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="comment" />
                  <label
                    htmlFor="comment"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Can comment
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="edit" />
                  <label
                    htmlFor="edit"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Can edit
                  </label>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <Button type="button" variant="secondary" onClick={() => setIsShareDialogOpen(false)}>
              Close
            </Button>
            <Button type="button" onClick={() => shareDocument("link")}>
              Share
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
