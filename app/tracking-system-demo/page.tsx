"use client"

import { TrackingSystemEnhancements } from "@/components/tracking/tracking-system-enhancements"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TrackingSystemDemoPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Enhanced Tracking System</h1>
        <p className="text-muted-foreground">Manage transactions with batch operations and custom invoice templates</p>
      </div>

      <Tabs defaultValue="transactions">
        <TabsList className="mb-4">
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="templates">Invoice Templates</TabsTrigger>
          <TabsTrigger value="batch">Batch Operations</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>Transaction Management</CardTitle>
              <CardDescription>View, export, and manage all your transactions with enhanced tools</CardDescription>
            </CardHeader>
            <CardContent>
              <TrackingSystemEnhancements />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Invoice Templates</CardTitle>
                <CardDescription>Choose from multiple professional invoice designs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    The custom invoice templates system allows you to select from various professionally designed
                    templates or create your own custom designs.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Classic template - Traditional professional design</li>
                    <li>Modern template - Clean, contemporary aesthetic</li>
                    <li>Creative template - Unique design with artistic elements</li>
                    <li>Corporate template - Formal business style</li>
                    <li>Nonprofit template - Donation receipt focused</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Template Designer</CardTitle>
                <CardDescription>Create your own invoice templates with HTML and CSS</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    For advanced users, the system allows creating completely custom invoice templates using HTML and
                    CSS. Your templates can include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Custom branding elements and logos</li>
                    <li>Specialized layouts for different transaction types</li>
                    <li>Dynamic content based on transaction properties</li>
                    <li>Conditional formatting and styling</li>
                    <li>Responsive designs for different viewing contexts</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="batch">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Batch Export</CardTitle>
                <CardDescription>Export multiple invoices at once in various formats</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    The batch export functionality allows you to select multiple invoices and export them all at once in
                    your preferred format.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>PDF - Professional documents for sharing</li>
                    <li>CSV - Spreadsheet format for data analysis</li>
                    <li>Excel - Native spreadsheet format with formatting</li>
                    <li>JSON - Structured data for technical applications</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    You can also customize which fields to include in your exports, making it easy to create reports
                    tailored to specific needs.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Batch Email</CardTitle>
                <CardDescription>Send multiple invoices to recipients in one operation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    With batch email functionality, you can send multiple invoices to their respective recipients in a
                    single operation.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Personalized emails for each recipient</li>
                    <li>Customizable email templates</li>
                    <li>Attach invoices as PDF documents</li>
                    <li>Include payment links and instructions</li>
                    <li>Schedule emails for future delivery</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    This feature saves significant time when sending monthly invoices or donation receipts to multiple
                    contacts.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
