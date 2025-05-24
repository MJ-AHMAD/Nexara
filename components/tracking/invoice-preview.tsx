"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Eye, Download, Printer, Mail, Copy } from "lucide-react"

interface Transaction {
  id: string
  type: string
  name: string
  amount: number
  date: string
  status: string
  category: string
  contact: string
  email?: string
  notes?: string
}

interface InvoicePreviewProps {
  transaction: Transaction
  templateId: string
}

export function InvoicePreview({ transaction, templateId }: InvoicePreviewProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = () => {
    setIsLoading(true)

    // Simulate download process
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Invoice downloaded",
        description: `Invoice #${transaction.id} has been downloaded as PDF`,
      })
    }, 1500)
  }

  const handlePrint = () => {
    toast({
      title: "Print dialog opened",
      description: "The print dialog has been opened in a new window",
    })
  }

  const handleEmail = () => {
    toast({
      title: "Email dialog opened",
      description: "You can now send this invoice via email",
    })
  }

  const handleCopyLink = () => {
    // Simulate copying a link
    toast({
      title: "Link copied",
      description: "Invoice link has been copied to clipboard",
    })
  }

  // Render different templates based on templateId
  const renderTemplate = () => {
    switch (templateId) {
      case "modern":
        return <ModernTemplate transaction={transaction} />
      case "creative":
        return <CreativeTemplate transaction={transaction} />
      case "corporate":
        return <CorporateTemplate transaction={transaction} />
      case "nonprofit":
        return <NonprofitTemplate transaction={transaction} />
      case "classic":
      default:
        return <ClassicTemplate transaction={transaction} />
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Eye className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Invoice Preview</DialogTitle>
          <DialogDescription>
            Preview invoice #{transaction.id} using the {templateId} template
          </DialogDescription>
        </DialogHeader>

        <div className="my-4 border rounded-md p-4 bg-white">{renderTemplate()}</div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleCopyLink}>
              <Copy className="h-4 w-4 mr-2" />
              Copy Link
            </Button>
            <Button variant="outline" size="sm" onClick={handleEmail}>
              <Mail className="h-4 w-4 mr-2" />
              Email
            </Button>
            <Button variant="outline" size="sm" onClick={handlePrint}>
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
          </div>
          <Button size="sm" onClick={handleDownload} disabled={isLoading}>
            <Download className="h-4 w-4 mr-2" />
            {isLoading ? "Downloading..." : "Download PDF"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// Template Components
function ClassicTemplate({ transaction }: { transaction: Transaction }) {
  return (
    <div className="font-serif">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold">INVOICE</h1>
          <p className="text-sm text-gray-600">#{transaction.id}</p>
        </div>
        <div className="text-right">
          <p className="font-bold">Your Organization Name</p>
          <p className="text-sm">123 Business Street</p>
          <p className="text-sm">City, State ZIP</p>
          <p className="text-sm">contact@example.com</p>
        </div>
      </div>

      <div className="flex justify-between mb-8">
        <div>
          <h2 className="font-bold mb-2">Bill To:</h2>
          <p>{transaction.contact}</p>
          <p>{transaction.email || "No email provided"}</p>
        </div>
        <div className="text-right">
          <h2 className="font-bold mb-2">Invoice Details:</h2>
          <p>
            <span className="font-semibold">Date:</span> {transaction.date}
          </p>
          <p>
            <span className="font-semibold">Status:</span> {transaction.status}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {transaction.category}
          </p>
        </div>
      </div>

      <table className="w-full mb-8 border-collapse">
        <thead>
          <tr className="border-b-2 border-gray-300">
            <th className="text-left py-2">Description</th>
            <th className="text-left py-2">Type</th>
            <th className="text-right py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-3">{transaction.name}</td>
            <td className="py-3">{transaction.type}</td>
            <td className="py-3 text-right">${transaction.amount.toFixed(2)}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 font-bold text-right" colSpan={2}>
              Total:
            </td>
            <td className="py-3 text-right font-bold">${transaction.amount.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <div className="border-t-2 border-gray-300 pt-4">
        <h2 className="font-bold mb-2">Notes:</h2>
        <p className="text-sm">{transaction.notes || "No additional notes"}</p>
        <p className="mt-4 text-sm">Thank you for your business!</p>
      </div>
    </div>
  )
}

function ModernTemplate({ transaction }: { transaction: Transaction }) {
  return (
    <div className="font-sans bg-white">
      <div className="bg-blue-600 text-white p-6 rounded-t-md">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-light">INVOICE</h1>
          <div>
            <p className="text-sm opacity-80">Your Organization</p>
            <p className="text-2xl font-bold">#{transaction.id}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-sm uppercase text-gray-500 mb-2">Bill To</h2>
            <p className="font-medium text-lg">{transaction.contact}</p>
            <p className="text-gray-600">{transaction.email || "No email provided"}</p>
          </div>
          <div>
            <h2 className="text-sm uppercase text-gray-500 mb-2">Details</h2>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-gray-600">Date:</p>
              <p>{transaction.date}</p>
              <p className="text-gray-600">Status:</p>
              <p>{transaction.status}</p>
              <p className="text-gray-600">Category:</p>
              <p>{transaction.category}</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="bg-gray-100 p-3 rounded-t-md grid grid-cols-3">
            <h3 className="font-medium">Description</h3>
            <h3 className="font-medium">Type</h3>
            <h3 className="font-medium text-right">Amount</h3>
          </div>
          <div className="p-3 border-b grid grid-cols-3">
            <p>{transaction.name}</p>
            <p>{transaction.type}</p>
            <p className="text-right">${transaction.amount.toFixed(2)}</p>
          </div>
          <div className="p-3 flex justify-end">
            <div className="w-1/3">
              <div className="flex justify-between font-medium">
                <p>Total:</p>
                <p>${transaction.amount.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <h2 className="font-medium mb-2">Notes:</h2>
          <p className="text-gray-600">{transaction.notes || "No additional notes"}</p>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Thank you for your business!</p>
          <p>contact@example.com | (123) 456-7890</p>
        </div>
      </div>
    </div>
  )
}

function CreativeTemplate({ transaction }: { transaction: Transaction }) {
  return (
    <div className="font-sans bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-md">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            INVOICE
          </h1>
          <p className="text-gray-600">#{transaction.id}</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm">
          <p className="font-bold text-purple-600">Your Organization</p>
          <p className="text-sm">creative@example.com</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-4 rounded-md shadow-sm">
          <h2 className="font-bold text-purple-600 mb-2">Bill To:</h2>
          <p className="text-lg">{transaction.contact}</p>
          <p className="text-gray-600">{transaction.email || "No email provided"}</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm">
          <h2 className="font-bold text-purple-600 mb-2">Invoice Details:</h2>
          <div className="grid grid-cols-2 gap-1">
            <p className="text-gray-600">Date:</p>
            <p>{transaction.date}</p>
            <p className="text-gray-600">Status:</p>
            <p>{transaction.status}</p>
            <p className="text-gray-600">Category:</p>
            <p>{transaction.category}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-md overflow-hidden shadow-sm mb-8">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 grid grid-cols-3">
          <h3>Description</h3>
          <h3>Type</h3>
          <h3 className="text-right">Amount</h3>
        </div>
        <div className="p-4 border-b grid grid-cols-3">
          <p>{transaction.name}</p>
          <p>{transaction.type}</p>
          <p className="text-right font-medium">${transaction.amount.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-gray-50">
          <div className="flex justify-end">
            <div className="w-1/3">
              <div className="flex justify-between font-bold">
                <p>Total:</p>
                <p>${transaction.amount.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-md shadow-sm mb-8">
        <h2 className="font-bold text-purple-600 mb-2">Notes:</h2>
        <p>{transaction.notes || "No additional notes"}</p>
      </div>

      <div className="text-center">
        <p className="text-gray-600">Thank you for your business!</p>
        <div className="mt-2 inline-block bg-gradient-to-r from-purple-600 to-blue-600 p-0.5 rounded-full">
          <div className="bg-white px-4 py-1 rounded-full">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 font-bold">
              Your Creative Organization
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function CorporateTemplate({ transaction }: { transaction: Transaction }) {
  return (
    <div className="font-sans">
      <div className="bg-gray-800 text-white p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">CORPORATE INVOICE</h1>
            <p className="text-sm opacity-80">Professional Financial Document</p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-80">Invoice Number</p>
            <p className="text-xl">{transaction.id}</p>
          </div>
        </div>
      </div>

      <div className="p-6 border-l border-r border-b">
        <div className="flex justify-between mb-8">
          <div>
            <h2 className="text-gray-800 font-bold text-sm uppercase mb-2">From</h2>
            <p className="font-bold">Your Corporation, Inc.</p>
            <p>123 Corporate Plaza</p>
            <p>Business City, BZ 10001</p>
            <p>accounting@corporation.com</p>
          </div>
          <div className="text-right">
            <h2 className="text-gray-800 font-bold text-sm uppercase mb-2">To</h2>
            <p className="font-bold">{transaction.contact}</p>
            <p>{transaction.email || "No email provided"}</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-100 p-3">
              <h3 className="text-gray-800 font-bold text-sm uppercase mb-1">Invoice Date</h3>
              <p>{transaction.date}</p>
            </div>
            <div className="bg-gray-100 p-3">
              <h3 className="text-gray-800 font-bold text-sm uppercase mb-1">Status</h3>
              <p>{transaction.status}</p>
            </div>
          </div>
        </div>

        <table className="w-full mb-8">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="text-left p-3">Description</th>
              <th className="text-left p-3">Type</th>
              <th className="text-right p-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">{transaction.name}</td>
              <td className="p-3">{transaction.type}</td>
              <td className="p-3 text-right">${transaction.amount.toFixed(2)}</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="p-3 text-right font-bold" colSpan={2}>
                Total:
              </td>
              <td className="p-3 text-right font-bold">${transaction.amount.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        <div className="border-t pt-4">
          <h2 className="text-gray-800 font-bold text-sm uppercase mb-2">Notes</h2>
          <p>{transaction.notes || "No additional notes"}</p>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">Thank you for your business</p>
            <p className="text-sm text-gray-600">Payment terms: Net 30 days</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function NonprofitTemplate({ transaction }: { transaction: Transaction }) {
  return (
    <div className="font-sans">
      <div className="bg-green-600 text-white p-6 rounded-t-md">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">DONATION RECEIPT</h1>
            <p className="text-sm opacity-80">Thank You For Your Support</p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-80">Receipt Number</p>
            <p className="text-xl">{transaction.id}</p>
          </div>
        </div>
      </div>

      <div className="p-6 border-l border-r border-b rounded-b-md">
        <div className="mb-6 text-center bg-green-50 p-4 rounded-md">
          <h2 className="text-xl font-bold text-green-800">Thank You For Your Generous Support!</h2>
          <p className="text-green-700">Your contribution helps us make a difference.</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <h2 className="font-bold text-green-800 mb-2">Donor Information:</h2>
            <p className="font-medium">{transaction.contact}</p>
            <p>{transaction.email || "No email provided"}</p>
          </div>
          <div>
            <h2 className="font-bold text-green-800 mb-2">Donation Details:</h2>
            <div className="grid grid-cols-2 gap-1">
              <p className="text-gray-600">Date:</p>
              <p>{transaction.date}</p>
              <p className="text-gray-600">Category:</p>
              <p>{transaction.category}</p>
              <p className="text-gray-600">Status:</p>
              <p>{transaction.status}</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-md mb-8">
          <h2 className="font-bold text-green-800 mb-2">Donation Summary:</h2>
          <div className="flex justify-between items-center border-b border-green-200 py-3">
            <div>
              <p className="font-medium">{transaction.name}</p>
              <p className="text-sm text-gray-600">{transaction.type}</p>
            </div>
            <p className="text-xl font-bold">${transaction.amount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center pt-3">
            <p className="font-bold">Total Donation:</p>
            <p className="text-xl font-bold">${transaction.amount.toFixed(2)}</p>
          </div>
        </div>

        <div className="border-t border-green-200 pt-4">
          <h2 className="font-bold text-green-800 mb-2">Notes:</h2>
          <p>{transaction.notes || "No additional notes"}</p>

          <div className="mt-8 text-center">
            <p className="text-green-800 font-medium">Your Nonprofit Organization Name</p>
            <p className="text-sm text-gray-600">123 Charity Lane, Giving City, GC 10001</p>
            <p className="text-sm text-gray-600">Tax ID: 12-3456789</p>
            <div className="mt-4 p-3 bg-green-50 rounded-md">
              <p className="text-sm">
                This letter serves as your official receipt. Your donation may be tax-deductible to the extent allowed
                by law. No goods or services were provided in exchange for this contribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
