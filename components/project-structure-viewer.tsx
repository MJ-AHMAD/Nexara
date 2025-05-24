"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronRight, Folder, FileText } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"

interface ProjectStructureViewerProps {
  structure: Record<string, any>
  projectName: string
}

export function ProjectStructureViewer({ structure, projectName }: ProjectStructureViewerProps) {
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(new Set([]))
  const [searchTerm, setSearchTerm] = useState("")

  const togglePath = (path: string) => {
    const newExpandedPaths = new Set(expandedPaths)
    if (newExpandedPaths.has(path)) {
      newExpandedPaths.delete(path)
    } else {
      newExpandedPaths.add(path)
    }
    setExpandedPaths(newExpandedPaths)
  }

  const renderStructure = (obj: any, path = "", depth = 0) => {
    if (typeof obj !== "object" || obj === null) {
      const matchesSearch =
        searchTerm &&
        (path.toLowerCase().includes(searchTerm.toLowerCase()) ||
          String(obj).toLowerCase().includes(searchTerm.toLowerCase()))

      return (
        <div className={`ml-${depth * 4} flex items-center py-1 ${matchesSearch ? "bg-yellow-100" : ""}`} key={path}>
          <FileText className="h-4 w-4 mr-2 text-blue-500" />
          <span className="text-sm">{path.split(".").pop()}</span>
          <span className="text-xs text-gray-500 ml-2">- {obj}</span>
        </div>
      )
    }

    const isExpanded = expandedPaths.has(path)
    const matchesSearch = searchTerm && path.toLowerCase().includes(searchTerm.toLowerCase())
    const keys = Object.keys(obj)
    const folderName = path ? path.split("/").pop() : projectName

    return (
      <div key={path} className={matchesSearch ? "bg-yellow-100" : ""}>
        <div
          className={`flex items-center cursor-pointer py-1 hover:bg-gray-100 ${depth > 0 ? `ml-${depth * 4}` : ""}`}
          onClick={() => togglePath(path)}
        >
          {isExpanded ? <ChevronDown className="h-4 w-4 mr-1" /> : <ChevronRight className="h-4 w-4 mr-1" />}
          <Folder className="h-4 w-4 mr-2 text-yellow-500" />
          <span className="text-sm font-medium">{folderName}</span>
          <span className="text-xs text-gray-500 ml-2">({keys.length} items)</span>
        </div>

        {isExpanded && (
          <div className="ml-4 border-l-2 pl-2 border-gray-200">
            {keys.map((key) => {
              const newPath = path ? `${path}/${key}` : key
              return renderStructure(obj[key], newPath, depth + 1)
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{projectName} Structure</CardTitle>
        <CardDescription>Explore the project file structure</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Label htmlFor="search-structure" className="sr-only">
            Search
          </Label>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="search-structure"
              placeholder="Search in structure..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="max-h-[500px] overflow-auto border rounded p-4">{renderStructure(structure)}</div>
      </CardContent>
    </Card>
  )
}
