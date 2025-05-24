"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, Copy, Check, FileJson, Code } from "lucide-react"
import { updatedJsonStructure } from "@/lib/json-structure"

export default function JsonStructurePage() {
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(new Set(["root", "root.MJ-AHMAD"]))
  const [isCopied, setIsCopied] = useState(false)

  const togglePath = (path: string) => {
    const newExpandedPaths = new Set(expandedPaths)
    if (newExpandedPaths.has(path)) {
      newExpandedPaths.delete(path)
    } else {
      newExpandedPaths.add(path)
    }
    setExpandedPaths(newExpandedPaths)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(updatedJsonStructure, null, 2))
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  const renderValue = (value: any, path: string, depth = 0) => {
    if (value === null) return <span className="text-gray-500">null</span>

    if (typeof value === "object") {
      const isArray = Array.isArray(value)
      const isExpanded = expandedPaths.has(path)
      const keys = isArray ? [...Array(value.length).keys()] : Object.keys(value)
      const pathName = path.split(".").pop()

      return (
        <div className={`ml-${depth * 4}`}>
          <div
            className="flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded"
            onClick={() => togglePath(path)}
          >
            {isExpanded ? <ChevronDown className="h-4 w-4 mr-1" /> : <ChevronRight className="h-4 w-4 mr-1" />}
            <span className="text-gray-700 dark:text-gray-300 font-medium mr-1">{pathName}:</span>
            <span className={isArray ? "text-purple-600 dark:text-purple-400" : "text-blue-600 dark:text-blue-400"}>
              {isArray ? "[" : "{"}
              {keys.length}
              {isArray ? "]" : "}"}
            </span>
          </div>

          {isExpanded && (
            <div className="ml-4 border-l-2 pl-2 border-gray-200 dark:border-gray-700">
              {keys.map((key) => (
                <div key={`${path}.${key}`} className="my-1">
                  <span className={isArray ? "text-gray-500 mr-2" : "text-blue-600 dark:text-blue-400 mr-2"}>
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
    if (typeof value === "string") {
      return <span className="text-green-600 dark:text-green-400">"{value}"</span>
    } else if (typeof value === "number") {
      return <span className="text-orange-600 dark:text-orange-400">{value}</span>
    } else if (typeof value === "boolean") {
      return <span className="text-purple-600 dark:text-purple-400">{String(value)}</span>
    }

    return <span>{String(value)}</span>
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">JSON Structure</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore the complete data structure of the MJ-AHMAD platform
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 lg:gap-12">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Structure Overview</CardTitle>
              <CardDescription>The main sections of the JSON structure</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <div className="text-sm font-medium">Personal Information</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <div className="text-sm font-medium">Professional Profile</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <div className="text-sm font-medium">Initiatives</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <div className="text-sm font-medium">Educational Resources</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <div className="text-sm font-medium">Products & Services</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <div className="text-sm font-medium">Support Opportunities</div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-muted-foreground">
                  The JSON structure is organized into two main sections under MJ-AHMAD:
                </p>
                <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                  <li>
                    <strong>Personal</strong> - Contains personal information, values, and contact details
                  </li>
                  <li>
                    <strong>Professional</strong> - Contains professional profile, initiatives, resources, products, and
                    support opportunities
                  </li>
                </ul>
              </div>

              <Button className="w-full mt-6" onClick={handleCopy}>
                {isCopied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                {isCopied ? "Copied!" : "Copy Full JSON"}
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>JSON Structure Explorer</CardTitle>
                <CardDescription>Interactive view of the complete data structure</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <FileJson className="h-5 w-5 text-primary" />
                <Code className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="tree">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="tree">Tree View</TabsTrigger>
                  <TabsTrigger value="raw">Raw JSON</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="tree"
                  className="p-4 border rounded-md bg-muted/30 min-h-[500px] max-h-[700px] overflow-auto"
                >
                  {renderValue(updatedJsonStructure, "root")}
                </TabsContent>
                <TabsContent
                  value="raw"
                  className="p-4 border rounded-md bg-muted/30 min-h-[500px] max-h-[700px] overflow-auto"
                >
                  <pre className="text-xs">{JSON.stringify(updatedJsonStructure, null, 2)}</pre>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Structure Details</CardTitle>
            <CardDescription>Explanation of key sections in the JSON structure</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">Personal Section</h3>
                <p className="text-muted-foreground mt-1">
                  Contains all personal information, values, and contact details for MJ-AHMAD.
                </p>
                <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                  <li>
                    <strong>personal_information</strong> - Basic personal details, official documents, and contact
                    information
                  </li>
                  <li>
                    <strong>philosophy_and_values</strong> - Core values and personal message
                  </li>
                  <li>
                    <strong>my_core_values</strong> - Detailed list of core values with descriptions and icons
                  </li>
                  <li>
                    <strong>contact</strong> - Comprehensive contact information and preferences
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium">Professional Section</h3>
                <p className="text-muted-foreground mt-1">
                  Contains all professional information, initiatives, resources, products, and support opportunities.
                </p>
                <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                  <li>
                    <strong>professional_profile</strong> - Professional background, skills, and achievements
                  </li>
                  <li>
                    <strong>vision</strong> - Mission statement, long-term goals, and impact areas
                  </li>
                  <li>
                    <strong>flagship_initiatives</strong> - Key projects like Yunus Inspire, Trusted Ally, etc.
                  </li>
                  <li>
                    <strong>educational_resources</strong> - Free learning paths and community projects
                  </li>
                  <li>
                    <strong>products_and_services</strong> - Merchandise, memberships, tourism experiences, and
                    corporate services
                  </li>
                  <li>
                    <strong>support_opportunities</strong> - Ways to support MJ-AHMAD's vision and initiatives
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
