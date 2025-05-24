"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown, FileText, FolderOpen, Folder, Search, Download, Eye, Share2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

interface FolderStructure {
  id: string
  name: string
  type: "folder" | "file"
  fileType?: "pdf" | "docx" | "pptx" | "xlsx" | "md" | "txt" | "image" | "video"
  initiative?: "Nexara" | "Infinity Nexus" | "Yunus Inspire" | "Trusted Ally" | "MJ AHMAD"
  size?: string
  dateModified?: string
  children?: FolderStructure[]
}

const folderStructure: FolderStructure[] = [
  {
    id: "nexara",
    name: "Nexara",
    type: "folder",
    children: [
      {
        id: "nexara-platform",
        name: "Platform",
        type: "folder",
        children: [
          {
            id: "nexara-architecture",
            name: "Architecture",
            type: "folder",
            children: [
              {
                id: "platform-architecture-overview",
                name: "Platform Architecture Overview.pdf",
                type: "file",
                fileType: "pdf",
                initiative: "Nexara",
                size: "4.2 MB",
                dateModified: "2023-11-02",
              },
              {
                id: "integration-patterns",
                name: "Integration Patterns.pdf",
                type: "file",
                fileType: "pdf",
                initiative: "Nexara",
                size: "2.8 MB",
                dateModified: "2023-10-15",
              },
              {
                id: "system-components",
                name: "System Components.pptx",
                type: "file",
                fileType: "pptx",
                initiative: "Nexara",
                size: "5.6 MB",
                dateModified: "2023-09-28",
              },
            ],
          },
          {
            id: "nexara-api",
            name: "API Documentation",
            type: "folder",
            children: [
              {
                id: "api-documentation",
                name: "API Documentation.md",
                type: "file",
                fileType: "md",
                initiative: "Nexara",
                size: "1.2 MB",
                dateModified: "2023-11-10",
              },
              {
                id: "api-examples",
                name: "API Examples.md",
                type: "file",
                fileType: "md",
                initiative: "Nexara",
                size: "0.8 MB",
                dateModified: "2023-10-25",
              },
            ],
          },
          {
            id: "nexara-security",
            name: "Security",
            type: "folder",
            children: [
              {
                id: "security-whitepaper",
                name: "Security Whitepaper.pdf",
                type: "file",
                fileType: "pdf",
                initiative: "Nexara",
                size: "3.2 MB",
                dateModified: "2023-11-08",
              },
              {
                id: "security-protocols",
                name: "Security Protocols.docx",
                type: "file",
                fileType: "docx",
                initiative: "Nexara",
                size: "1.5 MB",
                dateModified: "2023-10-20",
              },
            ],
          },
        ],
      },
      {
        id: "nexara-design",
        name: "Design",
        type: "folder",
        children: [
          {
            id: "design-system",
            name: "Design System Documentation.pdf",
            type: "file",
            fileType: "pdf",
            initiative: "Nexara",
            size: "8.5 MB",
            dateModified: "2023-10-15",
          },
          {
            id: "component-library",
            name: "Component Library.pdf",
            type: "file",
            fileType: "pdf",
            initiative: "Nexara",
            size: "6.2 MB",
            dateModified: "2023-09-30",
          },
        ],
      },
      {
        id: "nexara-governance",
        name: "Governance",
        type: "folder",
        children: [
          {
            id: "project-charter",
            name: "Project Charter.pdf",
            type: "file",
            fileType: "pdf",
            initiative: "Nexara",
            size: "2.1 MB",
            dateModified: "2023-08-15",
          },
          {
            id: "governance-model",
            name: "Governance Model.docx",
            type: "file",
            fileType: "docx",
            initiative: "Nexara",
            size: "1.8 MB",
            dateModified: "2023-07-22",
          },
        ],
      },
    ],
  },
  {
    id: "infinity-nexus",
    name: "Infinity Nexus",
    type: "folder",
    children: [
      {
        id: "infinity-research",
        name: "Research",
        type: "folder",
        children: [
          {
            id: "research-methodology",
            name: "Research Methodology.docx",
            type: "file",
            fileType: "docx",
            initiative: "Infinity Nexus",
            size: "1.8 MB",
            dateModified: "2023-10-18",
          },
          {
            id: "data-analysis-q3",
            name: "Data Analysis Results Q3 2023.xlsx",
            type: "file",
            fileType: "xlsx",
            initiative: "Infinity Nexus",
            size: "3.8 MB",
            dateModified: "2023-10-05",
          },
        ],
      },
      {
        id: "infinity-ethics",
        name: "Ethics",
        type: "folder",
        children: [
          {
            id: "research-ethics",
            name: "Research Ethics Guidelines.pdf",
            type: "file",
            fileType: "pdf",
            initiative: "Infinity Nexus",
            size: "1.7 MB",
            dateModified: "2023-09-10",
          },
        ],
      },
      {
        id: "infinity-visualization",
        name: "Visualization",
        type: "folder",
        children: [
          {
            id: "visualization-guidelines",
            name: "Visualization Guidelines.pdf",
            type: "file",
            fileType: "pdf",
            initiative: "Infinity Nexus",
            size: "6.7 MB",
            dateModified: "2023-10-12",
          },
        ],
      },
    ],
  },
  {
    id: "yunus-inspire",
    name: "Yunus Inspire",
    type: "folder",
    children: [
      {
        id: "social-business",
        name: "Social Business",
        type: "folder",
        children: [
          {
            id: "social-business-model",
            name: "Social Business Model.pdf",
            type: "file",
            fileType: "pdf",
            initiative: "Yunus Inspire",
            size: "3.5 MB",
            dateModified: "2023-09-25",
          },
          {
            id: "case-studies",
            name: "Social Business Case Studies.pdf",
            type: "file",
            fileType: "pdf",
            initiative: "Yunus Inspire",
            size: "7.9 MB",
            dateModified: "2023-09-05",
          },
        ],
      },
      {
        id: "impact-assessment",
        name: "Impact Assessment",
        type: "folder",
        children: [
          {
            id: "impact-framework",
            name: "Impact Assessment Framework.pdf",
            type: "file",
            fileType: "pdf",
            initiative: "Yunus Inspire",
            size: "2.6 MB",
            dateModified: "2023-10-22",
          },
        ],
      },
      {
        id: "partnerships",
        name: "Partnerships",
        type: "folder",
        children: [
          {
            id: "partnership-framework",
            name: "Partnership Framework.docx",
            type: "file",
            fileType: "docx",
            initiative: "Yunus Inspire",
            size: "2.1 MB",
            dateModified: "2023-10-25",
          },
        ],
      },
    ],
  },
  {
    id: "trusted-ally",
    name: "Trusted Ally",
    type: "folder",
    children: [
      {
        id: "community-engagement",
        name: "Community Engagement",
        type: "folder",
        children: [
          {
            id: "engagement-plan",
            name: "Community Engagement Plan.pptx",
            type: "file",
            fileType: "pptx",
            initiative: "Trusted Ally",
            size: "5.7 MB",
            dateModified: "2023-08-30",
          },
          {
            id: "support-handbook",
            name: "Community Support Handbook.pdf",
            type: "file",
            fileType: "pdf",
            initiative: "Trusted Ally",
            size: "4.1 MB",
            dateModified: "2023-09-18",
          },
        ],
      },
      {
        id: "field-operations",
        name: "Field Operations",
        type: "folder",
        children: [
          {
            id: "operations-manual",
            name: "Field Operations Manual.pdf",
            type: "file",
            fileType: "pdf",
            initiative: "Trusted Ally",
            size: "5.3 MB",
            dateModified: "2023-10-05",
          },
        ],
      },
      {
        id: "needs-assessment",
        name: "Needs Assessment",
        type: "folder",
        children: [
          {
            id: "assessment-data",
            name: "Community Needs Assessment.xlsx",
            type: "file",
            fileType: "xlsx",
            initiative: "Trusted Ally",
            size: "3.6 MB",
            dateModified: "2023-09-15",
          },
        ],
      },
    ],
  },
  {
    id: "mj-ahmad",
    name: "MJ AHMAD",
    type: "folder",
    children: [
      {
        id: "leadership",
        name: "Leadership",
        type: "folder",
        children: [
          {
            id: "leadership-framework",
            name: "Leadership Framework.pdf",
            type: "file",
            fileType: "pdf",
            initiative: "MJ AHMAD",
            size: "2.9 MB",
            dateModified: "2023-07-28",
          },
          {
            id: "mentorship-program",
            name: "Mentorship Program Guide.docx",
            type: "file",
            fileType: "docx",
            initiative: "MJ AHMAD",
            size: "2.3 MB",
            dateModified: "2023-08-12",
          },
        ],
      },
      {
        id: "content-strategy",
        name: "Content Strategy",
        type: "folder",
        children: [
          {
            id: "content-plan",
            name: "Leadership Content Strategy.pptx",
            type: "file",
            fileType: "pptx",
            initiative: "MJ AHMAD",
            size: "4.8 MB",
            dateModified: "2023-09-20",
          },
        ],
      },
      {
        id: "impact",
        name: "Impact",
        type: "folder",
        children: [
          {
            id: "impact-report",
            name: "Global Impact Report 2023.pdf",
            type: "file",
            fileType: "pdf",
            initiative: "MJ AHMAD",
            size: "5.4 MB",
            dateModified: "2023-10-10",
          },
        ],
      },
    ],
  },
]

// Helper functions
const getFileIcon = (fileType?: FolderStructure["fileType"]) => {
  switch (fileType) {
    case "pdf":
      return <FileText className="h-4 w-4 text-red-500" />
    case "docx":
      return <FileText className="h-4 w-4 text-blue-500" />
    case "pptx":
      return <FileText className="h-4 w-4 text-orange-500" />
    case "xlsx":
      return <FileText className="h-4 w-4 text-green-500" />
    case "md":
      return <FileText className="h-4 w-4 text-purple-500" />
    case "txt":
      return <FileText className="h-4 w-4 text-gray-500" />
    case "image":
      return <FileText className="h-4 w-4 text-pink-500" />
    case "video":
      return <FileText className="h-4 w-4 text-blue-600" />
    default:
      return <FileText className="h-4 w-4" />
  }
}

const getInitiativeColor = (initiative?: FolderStructure["initiative"]) => {
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

interface FolderItemProps {
  item: FolderStructure
  level: number
  defaultOpen?: boolean
  onFileClick: (file: FolderStructure) => void
}

const FolderItem = ({ item, level, defaultOpen = false, onFileClick }: FolderItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || level === 0)

  if (item.type === "file") {
    return (
      <div
        className="flex items-center justify-between py-1 px-2 rounded-md hover:bg-muted cursor-pointer group"
        onClick={() => onFileClick(item)}
      >
        <div className="flex items-center" style={{ paddingLeft: `${level * 12}px` }}>
          {getFileIcon(item.fileType)}
          <span className="text-sm ml-2">{item.name}</span>
        </div>
        <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Eye className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Download className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Share2 className="h-3 w-3" />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div
        className="flex items-center py-1 px-2 rounded-md hover:bg-muted cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        style={{ paddingLeft: `${level * 12}px` }}
      >
        <div className="mr-1">
          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </div>
        {isOpen ? (
          <FolderOpen className="h-4 w-4 text-blue-500 mr-2" />
        ) : (
          <Folder className="h-4 w-4 text-blue-500 mr-2" />
        )}
        <span className="text-sm font-medium">{item.name}</span>
      </div>
      {isOpen && item.children && (
        <div>
          {item.children.map((child) => (
            <FolderItem key={child.id} item={child} level={level + 1} onFileClick={onFileClick} />
          ))}
        </div>
      )}
    </div>
  )
}

export function DocumentExplorer() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFile, setSelectedFile] = useState<FolderStructure | null>(null)

  const handleFileClick = (file: FolderStructure) => {
    setSelectedFile(file)
    toast({
      title: "File selected",
      description: `${file.name} (${file.size})`,
    })
  }

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Document Explorer</h2>
        <p className="text-muted-foreground">Browse the folder structure of all Nexara initiative documents</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Folder tree */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Folders</CardTitle>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search folders..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-1">
                  {folderStructure.map((item) => (
                    <FolderItem
                      key={item.id}
                      item={item}
                      level={0}
                      defaultOpen={item.id === "nexara"}
                      onFileClick={handleFileClick}
                    />
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* File preview */}
        <div className="md:col-span-2">
          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle>File Preview</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedFile ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {getFileIcon(selectedFile.fileType)}
                      <h3 className="text-lg font-medium ml-2">{selectedFile.name}</h3>
                    </div>
                    {selectedFile.initiative && (
                      <Badge className={getInitiativeColor(selectedFile.initiative)} variant="secondary">
                        {selectedFile.initiative}
                      </Badge>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Size</p>
                      <p>{selectedFile.size}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Last Modified</p>
                      <p>{selectedFile.dateModified}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button>
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>

                  <div className="border rounded-md p-4 h-[400px] flex items-center justify-center bg-muted/50">
                    <div className="text-center">
                      <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                      <h4 className="text-lg font-medium">File Preview</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Preview not available. Click the View button to open this file.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-[500px] flex items-center justify-center">
                  <div className="text-center">
                    <FolderOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium">No file selected</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Select a file from the folder tree to preview it here.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
