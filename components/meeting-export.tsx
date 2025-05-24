"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, FileText, FileSpreadsheet, Check } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"

// Define the meeting type
interface MeetingTopic {
  id: string
  title: string
  notes: string
  completed: boolean
}

interface MeetingQA {
  id: string
  question: string
  answer: string
}

interface MeetingMaterial {
  id: string
  title: string
  type: string
  url: string
}

interface MeetingRequest {
  id: string
  request: string
  status: "pending" | "approved" | "rejected"
}

interface Meeting {
  id: string
  title: string
  date: string
  time: string
  location: string
  participants: string[]
  description: string
  topics: MeetingTopic[]
  qa: MeetingQA[]
  materials: MeetingMaterial[]
  requests: MeetingRequest[]
}

interface MeetingExportProps {
  meeting: Meeting | null
}

export function MeetingExport({ meeting }: MeetingExportProps) {
  const [exporting, setExporting] = useState(false)

  if (!meeting) return null

  const exportAsPDF = async () => {
    setExporting(true)
    try {
      // Dynamically import jsPDF to avoid SSR issues
      const { default: jsPDF } = await import("jspdf")
      const doc = new jsPDF()

      // Add title
      doc.setFontSize(20)
      doc.text(meeting.title, 20, 20)

      // Add meeting details
      doc.setFontSize(12)
      doc.text(`Date: ${meeting.date}`, 20, 30)
      doc.text(`Time: ${meeting.time}`, 20, 37)
      doc.text(`Location: ${meeting.location}`, 20, 44)

      // Add participants
      doc.text("Participants:", 20, 54)
      meeting.participants.forEach((participant, index) => {
        doc.text(`- ${participant}`, 25, 61 + index * 7)
      })

      let yPosition = 61 + meeting.participants.length * 7 + 10

      // Add description
      doc.text("Description:", 20, yPosition)
      const descriptionLines = doc.splitTextToSize(meeting.description, 170)
      doc.text(descriptionLines, 25, yPosition + 7)

      yPosition += 7 + descriptionLines.length * 7 + 10

      // Add topics
      doc.text("Discussion Topics:", 20, yPosition)
      yPosition += 7
      meeting.topics.forEach((topic, index) => {
        const status = topic.completed ? "[✓]" : "[ ]"
        doc.text(`${status} ${topic.title}`, 25, yPosition + index * 7)
      })

      yPosition += meeting.topics.length * 7 + 10

      // Add Q&A
      if (meeting.qa.length > 0) {
        doc.text("Q&A:", 20, yPosition)
        yPosition += 7
        meeting.qa.forEach((qa, index) => {
          doc.text(`Q: ${qa.question}`, 25, yPosition + index * 14)
          doc.text(`A: ${qa.answer}`, 25, yPosition + 7 + index * 14)
        })

        yPosition += meeting.qa.length * 14 + 10
      }

      // Add materials
      if (meeting.materials.length > 0) {
        doc.text("Materials:", 20, yPosition)
        yPosition += 7
        meeting.materials.forEach((material, index) => {
          doc.text(`- ${material.title} (${material.type})`, 25, yPosition + index * 7)
        })

        yPosition += meeting.materials.length * 7 + 10
      }

      // Add requests
      if (meeting.requests.length > 0) {
        doc.text("Requests:", 20, yPosition)
        yPosition += 7
        meeting.requests.forEach((request, index) => {
          doc.text(`- ${request.request} [${request.status}]`, 25, yPosition + index * 7)
        })
      }

      // Save the PDF
      doc.save(`${meeting.title.replace(/\s+/g, "_")}_preparation.pdf`)

      toast({
        title: "Export successful",
        description: "Meeting preparation exported as PDF",
      })
    } catch (error) {
      console.error("Error exporting to PDF:", error)
      toast({
        title: "Export failed",
        description: "There was an error exporting to PDF",
        variant: "destructive",
      })
    } finally {
      setExporting(false)
    }
  }

  const exportAsCSV = () => {
    setExporting(true)
    try {
      // Create CSV content
      let csvContent = "data:text/csv;charset=utf-8,"

      // Add meeting details
      csvContent += `Title,${meeting.title}\r\n`
      csvContent += `Date,${meeting.date}\r\n`
      csvContent += `Time,${meeting.time}\r\n`
      csvContent += `Location,${meeting.location}\r\n`
      csvContent += `Description,${meeting.description.replace(/,/g, ";").replace(/\n/g, " ")}\r\n\r\n`

      // Add participants
      csvContent += "Participants\r\n"
      meeting.participants.forEach((participant) => {
        csvContent += `${participant}\r\n`
      })
      csvContent += "\r\n"

      // Add topics
      csvContent += "Discussion Topics,Status\r\n"
      meeting.topics.forEach((topic) => {
        csvContent += `${topic.title.replace(/,/g, ";")},${topic.completed ? "Completed" : "Pending"}\r\n`
      })
      csvContent += "\r\n"

      // Add Q&A
      if (meeting.qa.length > 0) {
        csvContent += "Question,Answer\r\n"
        meeting.qa.forEach((qa) => {
          csvContent += `${qa.question.replace(/,/g, ";")},${qa.answer.replace(/,/g, ";")}\r\n`
        })
        csvContent += "\r\n"
      }

      // Add materials
      if (meeting.materials.length > 0) {
        csvContent += "Material,Type,URL\r\n"
        meeting.materials.forEach((material) => {
          csvContent += `${material.title.replace(/,/g, ";")},${material.type},${material.url}\r\n`
        })
        csvContent += "\r\n"
      }

      // Add requests
      if (meeting.requests.length > 0) {
        csvContent += "Request,Status\r\n"
        meeting.requests.forEach((request) => {
          csvContent += `${request.request.replace(/,/g, ";")},${request.status}\r\n`
        })
      }

      // Create download link
      const encodedUri = encodeURI(csvContent)
      const link = document.createElement("a")
      link.setAttribute("href", encodedUri)
      link.setAttribute("download", `${meeting.title.replace(/\s+/g, "_")}_preparation.csv`)
      document.body.appendChild(link)

      // Trigger download
      link.click()
      document.body.removeChild(link)

      toast({
        title: "Export successful",
        description: "Meeting preparation exported as CSV",
      })
    } catch (error) {
      console.error("Error exporting to CSV:", error)
      toast({
        title: "Export failed",
        description: "There was an error exporting to CSV",
        variant: "destructive",
      })
    } finally {
      setExporting(false)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={exportAsPDF} disabled={exporting} className="cursor-pointer">
          <FileText className="h-4 w-4 mr-2" />
          Export as PDF
          {exporting && <Check className="h-4 w-4 ml-2" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportAsCSV} disabled={exporting} className="cursor-pointer">
          <FileSpreadsheet className="h-4 w-4 mr-2" />
          Export as CSV
          {exporting && <Check className="h-4 w-4 ml-2" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
