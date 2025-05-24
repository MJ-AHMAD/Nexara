"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { PasswordProtection } from "@/components/password-protection"
import { MarkdownViewer } from "@/components/markdown-viewer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ChattingTemplatesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    if (typeof window !== "undefined") {
      const authenticated = localStorage.getItem("notesAuthenticated") === "true"
      setIsAuthenticated(authenticated)
      setIsLoading(false)
    }
  }, [])

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  if (!isAuthenticated) {
    return (
      <PasswordProtection
        correctPassword={process.env.NEXT_PUBLIC_NOTES_PASSWORD || "password123"}
        onAuthenticated={() => setIsAuthenticated(true)}
      />
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold">Social Media Chatting Templates</h1>
        </div>
        <Link href="/personal-notes">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Notes
          </Button>
        </Link>
      </div>

      <div className="bg-card rounded-lg shadow-lg p-6 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: "url('/abstract-notes-pattern.png')" }}
        ></div>
        <div className="relative z-10">
          <MarkdownViewer filePath="/data/chatting-templates.md" />
        </div>
      </div>
    </div>
  )
}
