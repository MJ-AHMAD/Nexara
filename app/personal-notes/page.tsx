"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { PasswordProtection } from "@/components/password-protection"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, MessageSquare, Mail, Gift, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function PersonalNotesPage() {
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
    return <PasswordProtection onAuthenticated={() => setIsAuthenticated(true)} redirectPath="/personal-notes" />
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Personal Notes</h1>
        <p className="text-muted-foreground">Your private collection of notes and templates</p>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <Link href="/hashtag-reference">
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Social Media Hashtags
          </Button>
        </Link>
        <Link href="/feedback-templates">
          <Button variant="outline" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Feedback Templates
          </Button>
        </Link>
        <Link href="/email-templates">
          <Button variant="outline" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email Templates
          </Button>
        </Link>
        <Link href="/gratitude-templates">
          <Button variant="outline" className="flex items-center gap-2">
            <Gift className="h-4 w-4" />
            Gratitude Templates
          </Button>
        </Link>
        <Link href="/chatting-templates">
          <Button variant="outline" className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Chatting Templates
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Social Media Hashtags
            </CardTitle>
            <CardDescription>Reference guide for social media hashtags by platform and topic</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm">
              A comprehensive collection of hashtags organized by platform and category to enhance your social media
              presence.
            </p>
            <Link href="/hashtag-reference">
              <Button>View Hashtags</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Feedback Templates
            </CardTitle>
            <CardDescription>Templates for providing constructive feedback in various contexts</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm">
              Professionally crafted templates for delivering effective feedback to students, colleagues, and team
              members.
            </p>
            <Link href="/feedback-templates">
              <Button>View Templates</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Email Templates
            </CardTitle>
            <CardDescription>Professional email templates for various business situations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm">
              Ready-to-use email templates for networking, outreach, follow-ups, and professional communications.
            </p>
            <Link href="/email-templates">
              <Button>View Emails</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-primary" />
              Gratitude Templates
            </CardTitle>
            <CardDescription>Templates for expressing thanks for various types of support</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm">
              Thoughtful templates for expressing gratitude for donations, grants, investments, loans, mentorship, and
              other forms of support.
            </p>
            <Link href="/gratitude-templates">
              <Button>View Gratitude Templates</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              Chatting Templates
            </CardTitle>
            <CardDescription>
              Templates for effective communication on social media and messaging platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm">
              Professional templates for various types of conversations across WhatsApp, Instagram, LinkedIn, Twitter,
              Slack, Discord, and more.
            </p>
            <Link href="/chatting-templates">
              <Button>View Chatting Templates</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
