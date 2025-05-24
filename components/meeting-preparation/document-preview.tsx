"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  Download,
  X,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Copy,
  Printer,
  FileText,
  FileImage,
  FileIcon as FilePresentationIcon,
  FileSpreadsheetIcon,
  FileArchiveIcon,
  ExternalLink,
} from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface File {
  id: string
  name: string
  type: "pdf" | "docx" | "md" | "pptx" | "xlsx" | "image" | "zip"
  content?: string
  url?: string
}

interface DocumentPreviewProps {
  file: File | null
  isOpen: boolean
  onClose: () => void
}

export function DocumentPreview({ file, isOpen, onClose }: DocumentPreviewProps) {
  const [zoom, setZoom] = useState(100)
  const [activeTab, setActiveTab] = useState<"preview" | "properties">("preview")
  const { toast } = useToast()

  // Reset zoom when file changes
  useEffect(() => {
    setZoom(100)
    setActiveTab("preview")
  }, [file])

  if (!file) return null

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 25, 200))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 25, 50))
  }

  const handleResetZoom = () => {
    setZoom(100)
  }

  const handleCopyContent = () => {
    if (file.content) {
      navigator.clipboard.writeText(file.content)
      toast({
        title: "Content copied",
        description: "Document content has been copied to clipboard",
      })
    }
  }

  const handlePrint = () => {
    toast({
      title: "Print requested",
      description: "Printing functionality would be implemented here",
    })
  }

  const handleDownload = () => {
    if (file.content) {
      const blob = new Blob([file.content], { type: "text/plain" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = file.name
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      toast({
        title: "File downloaded",
        description: `${file.name} has been downloaded.`,
      })
    } else {
      toast({
        title: "Download simulated",
        description: `In a real app, ${file.name} would download now.`,
      })
    }
  }

  const getFileIcon = () => {
    switch (file.type) {
      case "pdf":
        return <FileText className="h-6 w-6 text-red-500" />
      case "docx":
        return <FileText className="h-6 w-6 text-blue-500" />
      case "md":
        return <FileText className="h-6 w-6 text-green-500" />
      case "pptx":
        return <FilePresentationIcon className="h-6 w-6 text-orange-500" />
      case "xlsx":
        return <FileSpreadsheetIcon className="h-6 w-6 text-green-600" />
      case "image":
        return <FileImage className="h-6 w-6 text-purple-500" />
      case "zip":
        return <FileArchiveIcon className="h-6 w-6 text-yellow-500" />
      default:
        return <FileText className="h-6 w-6 text-gray-500" />
    }
  }

  const renderPreview = () => {
    if (file.content && file.type === "md") {
      return (
        <div className="prose dark:prose-invert max-w-none p-6" style={{ zoom: `${zoom}%` }}>
          <pre className="whitespace-pre-wrap text-sm p-4 bg-gray-50 dark:bg-gray-900 rounded-md">{file.content}</pre>
        </div>
      )
    }

    if (file.type === "image" && file.url) {
      return (
        <div className="flex justify-center p-6">
          <img
            src={file.url || "/placeholder.svg"}
            alt={file.name}
            className="max-w-full h-auto rounded-md"
            style={{ zoom: `${zoom}%` }}
          />
        </div>
      )
    }

    if (file.type === "pdf" && file.url) {
      return (
        <div className="w-full h-[70vh]">
          <iframe
            src={`${file.url}#toolbar=0&navpanes=0`}
            className="w-full h-full border-0 rounded-md"
            title={file.name}
          />
        </div>
      )
    }

    // For other file types, show a placeholder with download option
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <div className="text-6xl mb-4">{getFileIcon()}</div>
        <h3 className="text-xl font-semibold mb-2">{file.name}</h3>
        <p className="text-muted-foreground mb-6">Preview not available for this file type.</p>
        <div className="flex gap-2">
          <Button onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          {file.url && (
            <Button variant="outline">
              <ExternalLink className="h-4 w-4 mr-2" />
              Open in New Tab
            </Button>
          )}
        </div>
      </div>
    )
  }

  const renderProperties = () => {
    return (
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1">File Name</h3>
          <p>{file.name}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1">File Type</h3>
          <p>{file.type.toUpperCase()}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Size</h3>
          <p>{file.content ? `${Math.round(file.content.length / 1024)} KB` : "Unknown"}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Created</h3>
          <p>May 15, 2025</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Last Modified</h3>
          <p>May 18, 2025</p>
        </div>
        {file.content && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Content Preview</h3>
            <p className="text-sm text-muted-foreground truncate">{file.content.substring(0, 150)}...</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-full h-[85vh] flex flex-col p-0">
        <DialogHeader className="px-6 py-2 flex flex-row items-center justify-between border-b">
          <div className="flex items-center">
            {getFileIcon()}
            <DialogTitle className="ml-2">{file.name}</DialogTitle>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={handleZoomOut} disabled={zoom <= 50}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm w-12 text-center">{zoom}%</span>
            <Button variant="ghost" size="icon" onClick={handleZoomIn} disabled={zoom >= 200}>
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleResetZoom}>
              <RotateCw className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="h-6 mx-1" />
            {file.content && (
              <Button variant="ghost" size="icon" onClick={handleCopyContent}>
                <Copy className="h-4 w-4" />
              </Button>
            )}
            <Button variant="ghost" size="icon" onClick={handlePrint}>
              <Printer className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleDownload}>
              <Download className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="h-6 mx-1" />
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as "preview" | "properties")}
          className="flex-1 flex flex-col"
        >
          <div className="border-b px-6 py-2">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="properties">Properties</TabsTrigger>
            </TabsList>
          </div>

          <ScrollArea className="flex-1">
            <TabsContent value="preview" className="mt-0 h-full">
              {renderPreview()}
            </TabsContent>
            <TabsContent value="properties" className="mt-0">
              {renderProperties()}
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
