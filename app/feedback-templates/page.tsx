"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { PasswordProtection } from "@/components/password-protection"
import MarkdownViewer from "@/components/markdown-viewer"

export default function FeedbackTemplatesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  // Check if user is authenticated
  useEffect(() => {
    if (typeof window !== "undefined") {
      const authenticated = localStorage.getItem("personal-notes-authenticated")
      if (authenticated === "true") {
        setIsAuthenticated(true)
      }
    }
  }, [])

  const handleAuthenticated = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("personal-notes-authenticated", "true")
      setIsAuthenticated(true)
    }
  }

  if (!isAuthenticated) {
    return (
      <PasswordProtection
        correctPassword={process.env.NEXT_PUBLIC_NOTES_PASSWORD || "password123"}
        onAuthenticated={handleAuthenticated}
      />
    )
  }

  return <MarkdownViewer filePath="/data/feedback-templates.md" />
}
