import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Globe, Key, Zap, Shield, BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "API Documentation - Nexara Platform",
  description:
    "Comprehensive API documentation for Nexara platform including endpoints for Yunus Inspire, Trusted Ally, and Infinity Nexus initiatives.",
}

export default function APIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Code className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nexara API Documentation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive documentation for integrating with Nexara APIs. Build powerful applications using our robust
            and well-documented endpoints for Yunus Inspire, Trusted Ally, and Infinity Nexus initiatives.
          </p>
        </div>

        {/* Quick Start */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              Quick Start
            </CardTitle>
            <CardDescription>Get started with our API in minutes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Base URL</h3>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm">https://api.nexara.com/v1</code>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Authentication</h3>
                <Badge variant="outline" className="text-green-600 border-green-200">
                  API Key Required
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Sections */}
        <Tabs defaultValue="endpoints" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
            <TabsTrigger value="authentication">Authentication</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="sdks">SDKs</TabsTrigger>
          </TabsList>

          <TabsContent value="endpoints" className="space-y-6">
            <div className="grid gap-6">
              {/* Projects API */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-blue-500" />
                    Projects API
                  </CardTitle>
                  <CardDescription>Manage and retrieve project data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <div>
                        <Badge className="bg-green-100 text-green-800 mr-2">GET</Badge>
                        <code>/projects</code>
                      </div>
                      <span className="text-sm text-gray-600">Get all projects</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <div>
                        <Badge className="bg-green-100 text-green-800 mr-2">GET</Badge>
                        <code>/projects/{"{id}"}</code>
                      </div>
                      <span className="text-sm text-gray-600">Get project by ID</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <div>
                        <Badge className="bg-blue-100 text-blue-800 mr-2">POST</Badge>
                        <code>/projects</code>
                      </div>
                      <span className="text-sm text-gray-600">Create new project</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Initiatives API */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-emerald-500" />
                    Initiatives API
                  </CardTitle>
                  <CardDescription>Access initiative data and metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <div>
                        <Badge className="bg-green-100 text-green-800 mr-2">GET</Badge>
                        <code>/initiatives</code>
                      </div>
                      <span className="text-sm text-gray-600">Get all initiatives</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <div>
                        <Badge className="bg-green-100 text-green-800 mr-2">GET</Badge>
                        <code>/initiatives/yunus-inspire</code>
                      </div>
                      <span className="text-sm text-gray-600">Get Yunus Inspire data</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <div>
                        <Badge className="bg-green-100 text-green-800 mr-2">GET</Badge>
                        <code>/initiatives/trusted-ally</code>
                      </div>
                      <span className="text-sm text-gray-600">Get Trusted Ally data</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="authentication" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5 text-amber-500" />
                  API Key Authentication
                </CardTitle>
                <CardDescription>Secure your API requests with authentication</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Getting Your API Key</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Contact us to get your API key for accessing our endpoints.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Request API Key <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Usage</h3>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
                      {`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     https://api.nexara.com/v1/projects`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>JavaScript Example</CardTitle>
                  <CardDescription>Fetch project data using JavaScript</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
                      {`const response = await fetch('https://api.nexara.com/v1/projects', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const projects = await response.json();
console.log(projects);`}
                    </pre>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Python Example</CardTitle>
                  <CardDescription>Access API using Python requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
                      {`import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://api.nexara.com/v1/projects',
    headers=headers
)

projects = response.json()
print(projects)`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sdks" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>JavaScript SDK</CardTitle>
                  <CardDescription>Official JavaScript/TypeScript SDK</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-gray-100 p-3 rounded">
                      <code className="text-sm">npm install @nexara/platform-sdk</code>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      Coming Soon
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Python SDK</CardTitle>
                  <CardDescription>Official Python SDK</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-gray-100 p-3 rounded">
                      <code className="text-sm">pip install nexara-platform</code>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      Coming Soon
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Rate Limits */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-red-500" />
              Rate Limits & Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">1000</div>
                <div className="text-sm text-gray-600">Requests per hour</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support available</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-6">Our team is here to help you integrate successfully</p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              Contact Support
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
