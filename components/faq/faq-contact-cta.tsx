import { Button } from "@/components/ui/button"
import { HelpCircle, MessageSquare, FileText } from "lucide-react"
import Link from "next/link"

export default function FAQContactCTA() {
  return (
    <div className="mt-16 bg-gray-50 border border-gray-200 rounded-lg p-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Couldn't find what you're looking for?</h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Our team is here to help. If you couldn't find the answer to your question in our FAQ, please reach out to us
        through one of the channels below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
          <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <MessageSquare className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Contact Support</h3>
          <p className="text-gray-600 mb-4">Get in touch with our support team for personalized assistance.</p>
          <Button asChild className="w-full">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
          <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <HelpCircle className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Submit a Request</h3>
          <p className="text-gray-600 mb-4">Submit a support ticket and we'll get back to you as soon as possible.</p>
          <Button asChild variant="outline" className="w-full">
            <Link href="/issues">Submit Request</Link>
          </Button>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
          <div className="mx-auto w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
            <FileText className="h-6 w-6 text-amber-600" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Documentation</h3>
          <p className="text-gray-600 mb-4">Browse our detailed documentation for in-depth information.</p>
          <Button asChild variant="outline" className="w-full">
            <Link href="/docs">View Docs</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
