"use client"

import type React from "react"

import { useState } from "react"
import {
  Folder,
  File,
  FileText,
  FileImage,
  FileSpreadsheet,
  FilePieChart,
  FileIcon as FilePresentation,
  FileCode,
  FileArchive,
  ChevronRight,
  ChevronDown,
  Download,
  Eye,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

interface FolderItemProps {
  name: string
  children?: React.ReactNode
  defaultOpen?: boolean
  badge?: string
}

const FolderItem = ({ name, children, defaultOpen = false, badge }: FolderItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div>
      <div
        className="flex items-center py-2 px-2 rounded-md hover:bg-muted cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="mr-1">
          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </div>
        <Folder className="h-4 w-4 text-blue-500 mr-2" />
        <span className="text-sm">{name}</span>
        {badge && (
          <Badge variant="outline" className="ml-2 text-xs">
            {badge}
          </Badge>
        )}
      </div>
      {isOpen && <div className="pl-6">{children}</div>}
    </div>
  )
}

interface FileItemProps {
  name: string
  type: "document" | "image" | "spreadsheet" | "presentation" | "chart" | "code" | "archive" | "other"
  size?: string
  date?: string
}

const FileItem = ({ name, type, size, date }: FileItemProps) => {
  const getIcon = () => {
    switch (type) {
      case "document":
        return <FileText className="h-4 w-4 text-blue-500 mr-2" />
      case "image":
        return <FileImage className="h-4 w-4 text-green-500 mr-2" />
      case "spreadsheet":
        return <FileSpreadsheet className="h-4 w-4 text-green-500 mr-2" />
      case "presentation":
        return <FilePresentation className="h-4 w-4 text-orange-500 mr-2" />
      case "chart":
        return <FilePieChart className="h-4 w-4 text-purple-500 mr-2" />
      case "code":
        return <FileCode className="h-4 w-4 text-gray-500 mr-2" />
      case "archive":
        return <FileArchive className="h-4 w-4 text-yellow-500 mr-2" />
      default:
        return <File className="h-4 w-4 text-gray-500 mr-2" />
    }
  }

  return (
    <div className="flex items-center justify-between py-2 px-2 rounded-md hover:bg-muted group">
      <div className="flex items-center">
        {getIcon()}
        <span className="text-sm">{name}</span>
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

export function CustomProjectFolderStructure() {
  return (
    <ScrollArea className="h-[400px] pr-4">
      <div className="space-y-1">
        <FolderItem name="Project Documentation" defaultOpen={true} badge="Core">
          <FileItem name="Project Charter.docx" type="document" />
          <FileItem name="Executive Summary.pdf" type="document" />
          <FileItem name="Project Timeline.xlsx" type="spreadsheet" />
          <FileItem name="Budget Overview.xlsx" type="spreadsheet" />
          <FileItem name="Team Structure.pdf" type="document" />
          <FileItem name="Risk Assessment.docx" type="document" />
        </FolderItem>

        <FolderItem name="Research & Analysis" badge="Research">
          <FileItem name="Market Analysis.pptx" type="presentation" />
          <FileItem name="Competitor Research.pdf" type="document" />
          <FileItem name="User Surveys.xlsx" type="spreadsheet" />
          <FileItem name="Data Analysis Results.pdf" type="document" />
          <FileItem name="Research Methodology.docx" type="document" />
          <FolderItem name="Raw Data">
            <FileItem name="Survey Responses.csv" type="spreadsheet" />
            <FileItem name="Interview Transcripts.zip" type="archive" />
            <FileItem name="Field Notes.docx" type="document" />
          </FolderItem>
        </FolderItem>

        <FolderItem name="Design & Development">
          <FileItem name="Design System.pdf" type="document" />
          <FileItem name="Wireframes.sketch" type="image" />
          <FileItem name="User Flows.pdf" type="document" />
          <FileItem name="Technical Specifications.docx" type="document" />
          <FolderItem name="Mockups">
            <FileItem name="Dashboard.png" type="image" />
            <FileItem name="Mobile Views.png" type="image" />
            <FileItem name="Landing Page.png" type="image" />
          </FolderItem>
          <FolderItem name="Code Samples">
            <FileItem name="API Documentation.md" type="code" />
            <FileItem name="Component Library.js" type="code" />
            <FileItem name="Database Schema.sql" type="code" />
          </FolderItem>
        </FolderItem>

        <FolderItem name="Marketing & Communications">
          <FileItem name="Communication Plan.docx" type="document" />
          <FileItem name="Brand Guidelines.pdf" type="document" />
          <FileItem name="Press Release Template.docx" type="document" />
          <FileItem name="Social Media Calendar.xlsx" type="spreadsheet" />
          <FolderItem name="Assets">
            <FileItem name="Logo Files.zip" type="archive" />
            <FileItem name="Product Photos.zip" type="archive" />
            <FileItem name="Promotional Videos.zip" type="archive" />
          </FolderItem>
        </FolderItem>

        <FolderItem name="Reports & Presentations">
          <FileItem name="Quarterly Report Q1.pdf" type="document" />
          <FileItem name="Quarterly Report Q2.pdf" type="document" />
          <FileItem name="Stakeholder Presentation.pptx" type="presentation" />
          <FileItem name="Impact Assessment.pdf" type="document" />
          <FileItem name="Financial Summary.xlsx" type="spreadsheet" />
          <FolderItem name="Charts & Graphs">
            <FileItem name="Growth Metrics.png" type="chart" />
            <FileItem name="User Demographics.png" type="chart" />
            <FileItem name="Engagement Analytics.png" type="chart" />
          </FolderItem>
        </FolderItem>

        <FolderItem name="Legal & Compliance">
          <FileItem name="Terms of Service.docx" type="document" />
          <FileItem name="Privacy Policy.docx" type="document" />
          <FileItem name="Data Processing Agreement.pdf" type="document" />
          <FileItem name="Compliance Checklist.xlsx" type="spreadsheet" />
          <FileItem name="Regulatory Requirements.pdf" type="document" />
        </FolderItem>
      </div>
    </ScrollArea>
  )
}
