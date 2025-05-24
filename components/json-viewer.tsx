"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronDown, ChevronRight, Search, Copy, Check } from "lucide-react"

interface JsonViewerProps {
  data: any
}

export function JsonViewer({ data }: JsonViewerProps) {
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(new Set([]))
  const [searchTerm, setSearchTerm] = useState("")
  const [copiedPath, setCopiedPath] = useState<string | null>(null)

  const togglePath = (path: string) => {
    const newExpandedPaths = new Set(expandedPaths)
    if (newExpandedPaths.has(path)) {
      newExpandedPaths.delete(path)
    } else {
      newExpandedPaths.add(path)
    }
    setExpandedPaths(newExpandedPaths)
  }

  const copyValue = (path: string, value: any) => {
    const textToCopy = typeof value === "object" ? JSON.stringify(value, null, 2) : String(value)

    navigator.clipboard.writeText(textToCopy)
    setCopiedPath(path)

    setTimeout(() => {
      setCopiedPath(null)
    }, 2000)
  }

  // Function to check if a path or its children match the search term
  const pathMatchesSearch = (path: string, value: any): boolean => {
    if (path.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true
    }

    if (typeof value === "object" && value !== null) {
      return Object.keys(value).some((key) => {
        const childPath = `${path}.${key}`
        return pathMatchesSearch(childPath, value[key])
      })
    }

    return false
  }

  // Recursively render the JSON tree with search highlighting
  const renderValue = (value: any, path: string, depth = 0) => {
    if (value === null) return null

    // For objects and arrays
    if (typeof value === "object") {
      const isArray = Array.isArray(value)
      const isExpanded = expandedPaths.has(path)
      const matchesSearch = searchTerm && pathMatchesSearch(path, value)

      // Auto-expand paths that match search
      if (matchesSearch && searchTerm && !isExpanded) {
        setExpandedPaths((prev) => new Set([...prev, path]))
      }

      const keys = isArray ? [...Array(value.length).keys()] : Object.keys(value)
      const pathName = path === "root" ? "root" : path.split(".").pop()

      return (
        <div className={`ml-${depth * 4} ${matchesSearch ? "bg-yellow-100" : ""}`}>
          <div className="flex items-center">
            <div className="flex items-center cursor-pointer" onClick={() => togglePath(path)}>
              {isExpanded ? <ChevronDown className="h-4 w-4 mr-1" /> : <ChevronRight className="h-4 w-4 mr-1" />}
              <span className="text-gray-700 font-medium mr-1">{pathName}:</span>
              <span className="text-purple-600">
                {isArray ? "[" : "{"}
                {keys.length}
                {isArray ? "]" : "}"}
              </span>
            </div>
            <button
              className="ml-2 p-1 rounded-sm hover:bg-gray-200 focus:outline-none"
              onClick={(e) => {
                e.stopPropagation()
                copyValue(path, value)
              }}
            >
              {copiedPath === path ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            </button>
          </div>

          {isExpanded && (
            <div className="ml-4 border-l-2 pl-2 border-gray-200">
              {keys.map((key) => (
                <div key={`${path}.${key}`} className="my-1">
                  <span className={isArray ? "text-gray-500 mr-2" : "text-blue-600 mr-2"}>
                    {isArray ? key : `"${key}"`}
                    {!isArray && ":"}
                  </span>
                  {renderValue(value[key], `${path}.${key}`, depth + 1)}
                </div>
              ))}
            </div>
          )}
        </div>
      )
    }

    // For primitive values
    return (
      <div className="flex items-center">
        <span className="text-green-600">{typeof value === "string" ? `"${value}"` : String(value)}</span>
        <button
          className="ml-2 p-1 rounded-sm hover:bg-gray-200 focus:outline-none"
          onClick={(e) => {
            e.stopPropagation()
            copyValue(path, value)
          }}
        >
          {copiedPath === path ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="অনুসন্ধান করুন..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="font-mono text-sm overflow-auto max-h-[500px] p-4 bg-white rounded border">
        {renderValue(data, "root")}
      </div>
    </div>
  )
}
