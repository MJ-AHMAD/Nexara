"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

interface MarkdownViewerProps {
  filePath: string
}

export function MarkdownViewer({ filePath }: MarkdownViewerProps) {
  const [content, setContent] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [copyStates, setCopyStates] = useState<Record<string, boolean>>({})
  const { toast } = useToast()

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(filePath)
        if (!response.ok) {
          throw new Error(`Failed to fetch markdown: ${response.status}`)
        }
        const text = await response.text()
        setContent(text)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred")
        console.error("Error fetching markdown:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMarkdown()
  }, [filePath])

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopyStates({ ...copyStates, [id]: true })
        toast({
          title: "Copied to clipboard",
          description: "The content has been copied to your clipboard.",
        })
        setTimeout(() => {
          setCopyStates({ ...copyStates, [id]: false })
        }, 2000)
      },
      (err) => {
        console.error("Could not copy text: ", err)
        toast({
          title: "Failed to copy",
          description: "There was an error copying to clipboard.",
          variant: "destructive",
        })
      },
    )
  }

  const renderMarkdown = () => {
    if (!content) return null

    // Split the content by lines
    const lines = content.split("\n")
    const result = []
    let currentSection = null
    let currentCodeBlock = null
    let codeBlockId = 0

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      // Handle headings
      if (line.startsWith("# ")) {
        result.push(
          <h1 key={`h1-${i}`} className="text-3xl font-bold mt-8 mb-4">
            {line.substring(2)}
          </h1>,
        )
        currentSection = null
      } else if (line.startsWith("## ")) {
        result.push(
          <h2 key={`h2-${i}`} className="text-2xl font-semibold mt-6 mb-3">
            {line.substring(3)}
          </h2>,
        )
        currentSection = null
      } else if (line.startsWith("### ")) {
        result.push(
          <h3 key={`h3-${i}`} className="text-xl font-medium mt-4 mb-2">
            {line.substring(4)}
          </h3>,
        )
        currentSection = line.substring(4)
      } else if (line.startsWith("```")) {
        // Start or end of code block
        if (currentCodeBlock === null) {
          // Start of code block
          currentCodeBlock = []
        } else {
          // End of code block
          const blockId = `code-block-${codeBlockId++}`
          const codeContent = currentCodeBlock.join("\n")
          result.push(
            <div key={blockId} className="relative my-4">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code className="text-sm">{codeContent}</code>
              </pre>
              <Button
                variant="outline"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard(codeContent, blockId)}
              >
                {copyStates[blockId] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>,
          )
          currentCodeBlock = null
        }
      } else if (currentCodeBlock !== null) {
        // Inside code block
        currentCodeBlock.push(line)
      } else if (line.trim() === "") {
        // Empty line
        result.push(<div key={`empty-${i}`} className="my-2"></div>)
      } else {
        // Regular paragraph
        result.push(
          <p key={`p-${i}`} className="my-2">
            {line}
          </p>,
        )
      }
    }

    return result
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <Card className="mx-auto max-w-4xl my-8">
        <CardContent className="p-6">
          <div className="text-center text-destructive">
            <h2 className="text-xl font-semibold mb-2">Error Loading Content</h2>
            <p>{error}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="container px-4 py-6 max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <Link href="/personal-notes">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Content Reference</h1>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="prose prose-sm max-w-none dark:prose-invert">{renderMarkdown()}</div>
        </CardContent>
      </Card>
    </div>
  )
}

// Also add a default export for backward compatibility
export default MarkdownViewer
