"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MeetingDashboard } from "@/components/meeting-preparation/meeting-dashboard"
import { PronunciationPractice } from "@/components/meeting-preparation/pronunciation-practice"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function InfinityNexusMeetingPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("dashboard")

  // Sample documents for pronunciation practice
  const practiceDocuments = [
    {
      id: "presentation-script",
      name: "Presentation Script",
      content: `Good afternoon and thank you for meeting with us today. I'm MJ AHMAD, representing Trusted Ally, and I'm excited to share with you our groundbreaking project, Infinity Nexus.

Infinity Nexus is an open-source initiative creating a global standard data hub for scientific research and innovation. Our mission is to accelerate scientific discovery by breaking down data silos and enabling seamless collaboration across borders and disciplines.

Today, scientific research is hampered by fragmented data standards, limited access to resources, and insufficient collaboration infrastructure. This is particularly acute in emerging regions like Cox's Bazar, where we're based, despite the tremendous talent and potential there.

Infinity Nexus addresses these challenges by providing:
1. A standardized framework for scientific data sharing
2. Robust infrastructure for data storage and analysis
3. Collaborative tools for researchers worldwide
4. Educational resources to build capacity in underserved communities

We've already made significant progress, with over 120 researchers from 25 institutions across 18 countries actively using our platform. We've facilitated 15 published research papers and standardized more than 250 datasets.

To scale our impact, we're seeking strategic partners who share our vision. Your sponsorship would enable us to:
1. Expand our technical infrastructure
2. Develop advanced data analysis tools
3. Extend our educational programs
4. Increase our global outreach

Thank you for your time today. I'm happy to answer any questions you might have about Infinity Nexus and how we can create a meaningful partnership.`,
    },
    {
      id: "qa-responses",
      name: "Q&A Responses",
      content: `Q: How does Infinity Nexus differentiate itself from existing data sharing platforms?

A: Infinity Nexus is unique in three key ways:
1. We focus specifically on standardization across scientific disciplines, not just within them
2. We're built from the ground up with emerging markets in mind, ensuring accessibility for researchers with limited resources
3. We combine data infrastructure with educational components, building capacity alongside providing tools

Q: What is your sustainability plan beyond initial sponsorship?

A: We've developed a multi-faceted sustainability strategy:
1. Tiered membership model for institutions (while keeping core access free for individual researchers)
2. Data analytics services for organizations requiring specialized support
3. Grant funding for specific research initiatives
4. Consulting services leveraging our expertise in data standardization
5. Educational program fees from institutions that can afford them (while maintaining scholarships for those who cannot)

Q: How will our sponsorship funds be allocated?

A: Your sponsorship will be allocated approximately as follows:
- 40% to technical infrastructure development and maintenance
- 25% to research staff and data scientists
- 20% to educational programs and community building
- 10% to global outreach and partnership development
- 5% to administrative costs

We maintain complete transparency in our financial reporting and would provide detailed quarterly updates on fund utilization.`,
    },
    {
      id: "sponsorship-tiers",
      name: "Sponsorship Tiers",
      content: `Platinum Tier: $100,000+
Recognition: Named as "Founding Partner" on all Infinity Nexus platforms and publications
Branding: Prominent logo placement on website, annual reports, and all major events
Access: Exclusive access to all research data and innovations before public release
Engagement: Quarterly strategic meetings with Infinity Nexus leadership team
Events: VIP access to all Infinity Nexus events and conferences
Impact: Direct input on strategic direction and research priorities

Gold Tier: $50,000 - $99,999
Recognition: Named as "Gold Partner" on Infinity Nexus platforms and publications
Branding: Logo placement on website, annual reports, and major events
Access: Priority access to research data and innovations
Engagement: Bi-annual meetings with Infinity Nexus leadership team
Events: Priority registration for all Infinity Nexus events and conferences
Impact: Opportunity to suggest research focus areas

Silver Tier: $25,000 - $49,999
Recognition: Named as "Silver Partner" on Infinity Nexus platforms
Branding: Logo placement on website and annual reports
Access: Early access to selected research data and innovations
Engagement: Annual meeting with Infinity Nexus project leads
Events: Complimentary passes to major Infinity Nexus events
Impact: Recognition in project outcomes related to sponsored areas`,
    },
  ]

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" onClick={() => router.push("/meeting-preparation")} className="mr-2">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Meetings
          </Button>
          <h1 className="text-2xl font-bold">Infinity Nexus Sponsorship Meeting</h1>
        </div>
        <div className="text-sm text-muted-foreground">May 23, 2025 • 2:00 PM</div>
      </div>

      <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:w-[600px]">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <MeetingDashboard
            meetingDate="May 23, 2025"
            meetingTime="2:00 PM - 3:30 PM"
            meetingLocation="Financial Institution Headquarters"
            contactPerson="Sarah Johnson, VP of Corporate Partnerships"
            projectName="Infinity Nexus"
            organizationName="Trusted Ally"
          />
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Meeting Documents</CardTitle>
            </CardHeader>
            <CardContent>
              {/* The existing ProjectFolderStructure component would be here */}
              <div className="text-center py-12 text-muted-foreground">
                Document browser is available in the full application.
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="practice">
          <PronunciationPractice documents={practiceDocuments} />
        </TabsContent>

        <TabsContent value="notes">
          <Card>
            <CardHeader>
              <CardTitle>Meeting Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                Note-taking functionality is available in the full application.
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Meeting Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                Settings configuration is available in the full application.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
