import type { Metadata } from "next"
import IssueReportingForm from "@/components/support/issue-reporting-form"
import IssueFAQ from "@/components/support/issue-faq"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Bug, CheckCircle, GitPullRequest, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Report Issues | Nexara",
  description: "Report issues, bugs, or feature requests for Nexara initiatives and projects.",
}

export default function IssuesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Report Issues</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us improve by reporting issues, bugs, or feature requests for any of our initiatives or projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-blue-700">
                <Bug className="mr-2 h-5 w-5" />
                Bug Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Report technical issues, bugs, or unexpected behavior in any of our platforms or applications.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-purple-700">
                <GitPullRequest className="mr-2 h-5 w-5" />
                Feature Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Suggest new features or improvements to enhance our initiatives and projects.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-amber-50 border-amber-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-amber-700">
                <HelpCircle className="mr-2 h-5 w-5" />
                General Inquiries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Ask questions or seek clarification about any aspect of our initiatives or projects.
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="report-form" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="report-form">Report an Issue</TabsTrigger>
            <TabsTrigger value="faq">Frequently Asked Questions</TabsTrigger>
          </TabsList>
          <TabsContent value="report-form" className="mt-6">
            <IssueReportingForm />
          </TabsContent>
          <TabsContent value="faq" className="mt-6">
            <IssueFAQ />
          </TabsContent>
        </Tabs>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" />
            Before Submitting an Issue
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>
                Check if the issue has already been reported in our{" "}
                <a
                  href="https://github.com/MJ-AHMAD/nexara/issues"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Issues
                </a>
                .
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>
                Review our{" "}
                <a href="/faq" className="text-blue-600 hover:underline">
                  FAQ
                </a>{" "}
                to see if your question has already been answered.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>
                Include as much detail as possible, including steps to reproduce, expected behavior, and actual
                behavior.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>
                For security-related issues, please refer to our{" "}
                <a href="/security" className="text-blue-600 hover:underline">
                  Security Policy
                </a>
                .
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
