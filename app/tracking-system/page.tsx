"use client"

import { Textarea } from "@/components/ui/textarea"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import { Download, FileText, Mail, Plus, Printer, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PasswordProtection } from "@/components/password-protection"
import { invoiceTemplates } from "@/components/tracking/invoice-template-selector"
import type { InvoiceTemplate } from "@/components/tracking/invoice-templates"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  BarChart,
  PieChart,
  ArrowUpDown,
  ChevronLeft,
  FileDown,
  FileIcon as FilePdf,
  X,
  Check,
  MoreHorizontal,
  Palette,
  Calendar,
  DollarSign,
  Package,
  Users,
  Clock,
  Filter,
} from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { InvoiceTemplates } from "@/components/tracking/invoice-templates"

// Types
type TransactionType = "donation" | "product" | "service" | "offer"
type TransactionStatus = "pending" | "completed" | "cancelled"
type ExportFormat = "csv" | "excel" | "json" | "pdf"
// type InvoiceTemplate = "classic" | "modern" | "minimal" | "professional" | "branded"

interface Transaction {
  id: string
  type: TransactionType
  name: string
  description: string
  amount: number
  date: string
  status: TransactionStatus
  contactName: string
  contactEmail: string
  contactPhone: string
  notes: string
  invoiceNumber?: string
  template?: InvoiceTemplate
}

// Mock data for demonstration
const generateMockData = () => {
  const types = ["donation", "product", "service", "offer"]
  const statuses = ["paid", "pending", "cancelled"]
  const categories = ["education", "health", "environment", "community", "technology"]

  const mockData = []

  for (let i = 1; i <= 50; i++) {
    const type = types[Math.floor(Math.random() * types.length)]
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    const category = categories[Math.floor(Math.random() * categories.length)]
    const amount = Math.floor(Math.random() * 1000) + 10
    const date = new Date(new Date().getFullYear(), new Date().getMonth(), Math.floor(Math.random() * 28) + 1)
      .toISOString()
      .slice(0, 10)

    mockData.push({
      id: `TRX-${i}`,
      type,
      name: `Transaction ${i}`,
      description: `A ${type} for ${category}`,
      amount,
      date,
      status,
      contactName: `Contact ${i}`,
      contactEmail: `contact${i}@example.com`,
      contactPhone: `123-456-${i}`,
      notes: `Notes for transaction ${i}`,
      invoiceNumber: `INV-${i}`,
      template: invoiceTemplates[Math.floor(Math.random() * invoiceTemplates.length)].value as InvoiceTemplate,
    })
  }

  return mockData
}

// Helper functions
const generateUniqueId = (type: TransactionType) => {
  const prefix = type === "donation" ? "DON" : type === "product" ? "PRD" : type === "service" ? "SRV" : "OFR"
  const timestamp = Date.now().toString().slice(-6)
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0")
  return `${prefix}-${timestamp}-${random}`
}

const generateInvoiceNumber = (transaction: Transaction) => {
  const prefix =
    transaction.type === "donation"
      ? "INV-DON"
      : transaction.type === "product"
        ? "INV-PRD"
        : transaction.type === "service"
          ? "INV-SRV"
          : "INV-OFR"
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "")
  const random = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0")
  return `${prefix}-${date}-${random}`
}

// Sample data
const sampleTransactions: Transaction[] = [
  {
    id: "DON-123456-001",
    type: "donation",
    name: "Education Fund Donation",
    description: "Donation for the Cox's Bazar education initiative",
    amount: 500,
    date: "2023-05-15",
    status: "completed",
    contactName: "John Doe",
    contactEmail: "john@example.com",
    contactPhone: "+1234567890",
    notes: "Recurring annual donation",
    invoiceNumber: "INV-DON-20230515-0001",
    template: "classic",
  },
  {
    id: "PRD-654321-002",
    type: "product",
    name: "Leadership Book",
    description: "Book on leadership principles",
    amount: 24.99,
    date: "2023-06-20",
    status: "completed",
    contactName: "Jane Smith",
    contactEmail: "jane@example.com",
    contactPhone: "+9876543210",
    notes: "Express shipping requested",
    invoiceNumber: "INV-PRD-20230620-0002",
    template: "modern",
  },
  {
    id: "SRV-789012-003",
    type: "service",
    name: "Mentorship Program",
    description: "3-month mentorship for young entrepreneurs",
    amount: 299.99,
    date: "2023-07-10",
    status: "pending",
    contactName: "Robert Johnson",
    contactEmail: "robert@example.com",
    contactPhone: "+1122334455",
    notes: "Interested in technology focus",
    invoiceNumber: "INV-SRV-20230710-0003",
    template: "professional",
  },
  {
    id: "OFR-345678-004",
    type: "offer",
    name: "Community Workshop",
    description: "Free workshop for local community",
    amount: 0,
    date: "2023-08-05",
    status: "completed",
    contactName: "Community Center",
    contactEmail: "info@communitycenter.org",
    contactPhone: "+5544332211",
    notes: "Venue provided by the center",
    invoiceNumber: "INV-OFR-20230805-0004",
    template: "minimal",
  },
]

export default function TrackingSystemPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [transactions, setTransactions] = useState<Transaction[]>(sampleTransactions)
  const [newTransaction, setNewTransaction] = useState<Partial<Transaction>>({
    type: "donation",
    name: "",
    description: "",
    amount: 0,
    date: new Date().toISOString().slice(0, 10),
    status: "pending",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    notes: "",
    template: "classic",
  })
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState<string>("all")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [sortField, setSortField] = useState<string>("date")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null)
  const [exportFormat, setExportFormat] = useState<ExportFormat>("csv")
  const [exportFields, setExportFields] = useState({
    id: true,
    type: true,
    name: true,
    description: true,
    amount: true,
    date: true,
    status: true,
    contactName: true,
    contactEmail: true,
    contactPhone: true,
    notes: true,
    invoiceNumber: true,
  })
  const [emailRecipient, setEmailRecipient] = useState("")
  const [emailSubject, setEmailSubject] = useState("")
  const [emailMessage, setEmailMessage] = useState("")
  const [isEmailSending, setIsEmailSending] = useState(false)
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([])
  const [selectAll, setSelectAll] = useState(false)
  const [defaultTemplate, setDefaultTemplate] = useState<InvoiceTemplate>("classic")
  const [currentTemplate, setCurrentTemplate] = useState<InvoiceTemplate>("classic")
  const [isBatchProcessing, setIsBatchProcessing] = useState(false)

  const { toast } = useToast()

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={() => setIsAuthenticated(true)} />
  }

  const handleAddTransaction = () => {
    if (!newTransaction.name || !newTransaction.description || newTransaction.amount === undefined) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    const id = generateUniqueId(newTransaction.type as TransactionType)
    const transaction: Transaction = {
      id,
      type: newTransaction.type as TransactionType,
      name: newTransaction.name,
      description: newTransaction.description,
      amount: newTransaction.amount,
      date: newTransaction.date || new Date().toISOString().slice(0, 10),
      status: newTransaction.status as TransactionStatus,
      contactName: newTransaction.contactName || "",
      contactEmail: newTransaction.contactEmail || "",
      contactPhone: newTransaction.contactPhone || "",
      notes: newTransaction.notes || "",
      template: (newTransaction.template as InvoiceTemplate) || defaultTemplate,
    }

    // Generate invoice number if needed
    if (transaction.status === "completed") {
      transaction.invoiceNumber = generateInvoiceNumber(transaction)
    }

    setTransactions([transaction, ...transactions])

    // Reset form
    setNewTransaction({
      type: "donation",
      name: "",
      description: "",
      amount: 0,
      date: new Date().toISOString().slice(0, 10),
      status: "pending",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      notes: "",
      template: defaultTemplate,
    })

    toast({
      title: "Transaction Added",
      description: `${transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)} has been added successfully with ID: ${id}`,
    })
  }

  const handleGenerateInvoice = (transaction: Transaction) => {
    if (!transaction.invoiceNumber) {
      const updatedTransactions = transactions.map((t) => {
        if (t.id === transaction.id) {
          return { ...t, invoiceNumber: generateInvoiceNumber(t), status: "completed" }
        }
        return t
      })
      setTransactions(updatedTransactions)

      toast({
        title: "Invoice Generated",
        description: `Invoice has been generated for ${transaction.name}`,
      })
    } else {
      setSelectedTransaction(transaction)
      setCurrentTemplate(transaction.template || defaultTemplate)
    }
  }

  const handleViewInvoice = (transaction: Transaction) => {
    setSelectedTransaction(transaction)
    setCurrentTemplate(transaction.template || defaultTemplate)
  }

  const handleExportData = () => {
    // Get filtered transactions
    const dataToExport = filteredTransactions.map((transaction) => {
      const exportedTransaction: any = {}

      // Only include selected fields
      if (exportFields.id) exportedTransaction.id = transaction.id
      if (exportFields.type) exportedTransaction.type = transaction.type
      if (exportFields.name) exportedTransaction.name = transaction.name
      if (exportFields.description) exportedTransaction.description = transaction.description
      if (exportFields.amount) exportedTransaction.amount = transaction.amount
      if (exportFields.date) exportedTransaction.date = transaction.date
      if (exportFields.status) exportedTransaction.status = transaction.status
      if (exportFields.contactName) exportedTransaction.contactName = transaction.contactName
      if (exportFields.contactEmail) exportedTransaction.contactEmail = transaction.contactEmail
      if (exportFields.contactPhone) exportedTransaction.contactPhone = transaction.contactPhone
      if (exportFields.notes) exportedTransaction.notes = transaction.notes
      if (exportFields.invoiceNumber) exportedTransaction.invoiceNumber = transaction.invoiceNumber || ""

      return exportedTransaction
    })

    // Export based on selected format
    if (exportFormat === "csv") {
      exportAsCSV(dataToExport)
    } else if (exportFormat === "excel") {
      exportAsExcel(dataToExport)
    } else if (exportFormat === "json") {
      exportAsJSON(dataToExport)
    } else if (exportFormat === "pdf") {
      exportAsPDF(dataToExport)
    }
  }

  const exportAsCSV = (data: any[]) => {
    if (data.length === 0) {
      toast({
        title: "No Data to Export",
        description: "There are no transactions matching your current filters.",
        variant: "destructive",
      })
      return
    }

    // Get headers from the first object
    const headers = Object.keys(data[0])

    // Create CSV content
    let csvContent = headers.join(",") + "\n"

    // Add data rows
    data.forEach((item) => {
      const row = headers
        .map((header) => {
          // Handle special characters and ensure proper CSV formatting
          const cell = item[header]?.toString() || ""
          return `"${cell.replace(/"/g, '""')}"`
        })
        .join(",")
      csvContent += row + "\n"
    })

    // Create and download the file
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `transactions_export_${new Date().toISOString().slice(0, 10)}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast({
      title: "Export Successful",
      description: `${data.length} transactions exported as CSV`,
    })
  }

  const exportAsExcel = (data: any[]) => {
    // In a real implementation, you would use a library like xlsx
    // For this demo, we'll simulate Excel export with CSV
    exportAsCSV(data)

    toast({
      title: "Export Successful",
      description: `${data.length} transactions exported as Excel (CSV format)`,
    })
  }

  const exportAsJSON = (data: any[]) => {
    if (data.length === 0) {
      toast({
        title: "No Data to Export",
        description: "There are no transactions matching your current filters.",
        variant: "destructive",
      })
      return
    }

    // Create JSON content
    const jsonContent = JSON.stringify(data, null, 2)

    // Create and download the file
    const blob = new Blob([jsonContent], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `transactions_export_${new Date().toISOString().slice(0, 10)}.json`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast({
      title: "Export Successful",
      description: `${data.length} transactions exported as JSON`,
    })
  }

  const exportAsPDF = (data: any[]) => {
    // In a real implementation, you would use a library like jspdf
    // For this demo, we'll simulate PDF export
    toast({
      title: "PDF Export",
      description: `${data.length} transactions would be exported as PDF. In a production environment, this would generate a PDF file.`,
    })
  }

  const handleSendEmail = () => {
    if (!selectedTransaction) return

    if (!emailRecipient) {
      toast({
        title: "Missing Email",
        description: "Please enter a recipient email address",
        variant: "destructive",
      })
      return
    }

    setIsEmailSending(true)

    // Simulate sending email
    setTimeout(() => {
      setIsEmailSending(false)

      toast({
        title: "Email Sent",
        description: `Invoice ${selectedTransaction.invoiceNumber} has been sent to ${emailRecipient}`,
      })

      // Reset email form
      setEmailRecipient("")
      setEmailSubject("")
      setEmailMessage("")
    }, 2000)
  }

  const handleSelectInvoice = (invoiceNumber: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedInvoices([...selectedInvoices, invoiceNumber])
    } else {
      setSelectedInvoices(selectedInvoices.filter((id) => id !== invoiceNumber))
    }
  }

  const handleSelectAllInvoices = (isChecked: boolean) => {
    setSelectAll(isChecked)
    if (isChecked) {
      const allInvoiceNumbers = transactions.filter((t) => t.invoiceNumber).map((t) => t.invoiceNumber as string)
      setSelectedInvoices(allInvoiceNumbers)
    } else {
      setSelectedInvoices([])
    }
  }

  const handleBatchExport = (format: ExportFormat) => {
    if (selectedInvoices.length === 0) {
      toast({
        title: "No Invoices Selected",
        description: "Please select at least one invoice to export",
        variant: "destructive",
      })
      return
    }

    setIsBatchProcessing(true)

    // Get selected transactions
    const selectedTransactions = transactions.filter(
      (t) => t.invoiceNumber && selectedInvoices.includes(t.invoiceNumber),
    )

    // Simulate batch processing
    setTimeout(() => {
      setIsBatchProcessing(false)

      toast({
        title: "Batch Export Complete",
        description: `${selectedInvoices.length} invoices have been exported as ${format.toUpperCase()}`,
      })
    }, 2000)
  }

  const handleBatchEmail = () => {
    if (selectedInvoices.length === 0) {
      toast({
        title: "No Invoices Selected",
        description: "Please select at least one invoice to email",
        variant: "destructive",
      })
      return
    }

    setIsBatchProcessing(true)

    // Simulate batch email sending
    setTimeout(() => {
      setIsBatchProcessing(false)

      toast({
        title: "Batch Email Complete",
        description: `${selectedInvoices.length} invoices have been queued for email delivery`,
      })
    }, 2000)
  }

  const handleUpdateTemplate = (transaction: Transaction, template: InvoiceTemplate) => {
    // Update the transaction with the new template
    const updatedTransactions = transactions.map((t) => {
      if (t.id === transaction.id) {
        return { ...t, template }
      }
      return t
    })

    setTransactions(updatedTransactions)

    if (selectedTransaction && selectedTransaction.id === transaction.id) {
      setSelectedTransaction({ ...selectedTransaction, template })
      setCurrentTemplate(template)
    }

    toast({
      title: "Template Updated",
      description: `Invoice template has been updated to ${template.charAt(0).toUpperCase() + template.slice(1)}`,
    })
  }

  const handleSetDefaultTemplate = (template: InvoiceTemplate) => {
    setDefaultTemplate(template)

    toast({
      title: "Default Template Set",
      description: `Default invoice template has been set to ${template.charAt(0).toUpperCase() + template.slice(1)}`,
    })
  }

  // Filter and sort transactions
  const filteredTransactions = transactions
    .filter((transaction) => {
      const matchesSearch =
        transaction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (transaction.invoiceNumber && transaction.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesType = filterType === "all" || transaction.type === filterType
      const matchesStatus = filterStatus === "all" || transaction.status === filterStatus

      return matchesSearch && matchesType && matchesStatus
    })
    .sort((a, b) => {
      if (sortField === "date") {
        return sortDirection === "asc"
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime()
      } else if (sortField === "amount") {
        return sortDirection === "asc" ? a.amount - b.amount : b.amount - a.amount
      } else if (sortField === "name") {
        return sortDirection === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      }
      return 0
    })

  // Calculate statistics
  const totalDonations = transactions
    .filter((t) => t.type === "donation" && t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0)

  const totalSales = transactions
    .filter((t) => (t.type === "product" || t.type === "service") && t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0)

  const pendingTransactions = transactions.filter((t) => t.status === "pending").length

  const transactionsByType = {
    donation: transactions.filter((t) => t.type === "donation").length,
    product: transactions.filter((t) => t.type === "product").length,
    service: transactions.filter((t) => t.type === "service").length,
    offer: transactions.filter((t) => t.type === "offer").length,
  }

  return (
    <div className="container mx-auto py-6 px-4 max-w-7xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Tracking & Management System</h1>
          <p className="text-muted-foreground">
            Track donations, products, services, and offers with unique IDs and invoicing
          </p>
        </div>
        <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Donations</p>
                <h3 className="text-2xl font-bold">${totalDonations.toFixed(2)}</h3>
              </div>
              <div className="p-2 bg-primary/10 rounded-full">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Sales</p>
                <h3 className="text-2xl font-bold">${totalSales.toFixed(2)}</h3>
              </div>
              <div className="p-2 bg-primary/10 rounded-full">
                <Package className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Transactions</p>
                <h3 className="text-2xl font-bold">{pendingTransactions}</h3>
              </div>
              <div className="p-2 bg-primary/10 rounded-full">
                <Clock className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Transactions</p>
                <h3 className="text-2xl font-bold">{transactions.length}</h3>
              </div>
              <div className="p-2 bg-primary/10 rounded-full">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="transactions">
            <FileText className="h-4 w-4 mr-2" />
            Transactions
          </TabsTrigger>
          <TabsTrigger value="add">
            <Plus className="h-4 w-4 mr-2" />
            Add New
          </TabsTrigger>
          <TabsTrigger value="invoices">
            <FilePdf className="h-4 w-4 mr-2" />
            Invoices
          </TabsTrigger>
          <TabsTrigger value="reports">
            <BarChart className="h-4 w-4 mr-2" />
            Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>All Transactions</CardTitle>
              <CardDescription>View and manage all transactions with detailed information</CardDescription>

              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search by name, ID, or invoice number..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="flex gap-2">
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="w-[130px]">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="donation">Donations</SelectItem>
                      <SelectItem value="product">Products</SelectItem>
                      <SelectItem value="service">Services</SelectItem>
                      <SelectItem value="offer">Offers</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-[130px]">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={sortField} onValueChange={setSortField}>
                    <SelectTrigger className="w-[130px]">
                      <ArrowUpDown className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date">Date</SelectItem>
                      <SelectItem value="amount">Amount</SelectItem>
                      <SelectItem value="name">Name</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setSortDirection(sortDirection === "asc" ? "desc" : "asc")}
                  >
                    {sortDirection === "asc" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-up"
                      >
                        <path d="m5 12 7-7 7 7" />
                        <path d="M12 19V5" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-down"
                      >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                      </svg>
                    )}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="h-10 px-4 text-left font-medium">ID</th>
                        <th className="h-10 px-4 text-left font-medium">Type</th>
                        <th className="h-10 px-4 text-left font-medium">Name</th>
                        <th className="h-10 px-4 text-left font-medium">Amount</th>
                        <th className="h-10 px-4 text-left font-medium">Date</th>
                        <th className="h-10 px-4 text-left font-medium">Status</th>
                        <th className="h-10 px-4 text-left font-medium">Invoice</th>
                        <th className="h-10 px-4 text-left font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTransactions.length === 0 ? (
                        <tr className="border-b">
                          <td colSpan={8} className="p-4 text-center text-muted-foreground">
                            No transactions found
                          </td>
                        </tr>
                      ) : (
                        filteredTransactions.map((transaction) => (
                          <tr key={transaction.id} className="border-b">
                            <td className="p-4 align-middle font-mono text-xs">{transaction.id}</td>
                            <td className="p-4 align-middle capitalize">{transaction.type}</td>
                            <td className="p-4 align-middle">{transaction.name}</td>
                            <td className="p-4 align-middle">${transaction.amount.toFixed(2)}</td>
                            <td className="p-4 align-middle">{transaction.date}</td>
                            <td className="p-4 align-middle">
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                  transaction.status === "completed"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                    : transaction.status === "pending"
                                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                                }`}
                              >
                                {transaction.status}
                              </span>
                            </td>
                            <td className="p-4 align-middle font-mono text-xs">{transaction.invoiceNumber || "-"}</td>
                            <td className="p-4 align-middle">
                              <Button variant="outline" size="sm" onClick={() => handleGenerateInvoice(transaction)}>
                                <FileText className="h-4 w-4 mr-2" />
                                {transaction.invoiceNumber ? "View" : "Generate"}
                              </Button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Showing {filteredTransactions.length} of {transactions.length} transactions
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <FileDown className="h-4 w-4 mr-2" />
                    Export Data
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Export Transactions</DialogTitle>
                    <DialogDescription>
                      Export your transaction data in various formats for reporting and analysis.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="export-format">Export Format</Label>
                      <Select value={exportFormat} onValueChange={(value) => setExportFormat(value as ExportFormat)}>
                        <SelectTrigger id="export-format">
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="csv">CSV</SelectItem>
                          <SelectItem value="excel">Excel</SelectItem>
                          <SelectItem value="json">JSON</SelectItem>
                          <SelectItem value="pdf">PDF</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="mb-2 block">Fields to Export</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="export-id"
                            checked={exportFields.id}
                            onCheckedChange={(checked) => setExportFields({ ...exportFields, id: checked === true })}
                          />
                          <label htmlFor="export-id" className="text-sm">
                            ID
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="export-type"
                            checked={exportFields.type}
                            onCheckedChange={(checked) => setExportFields({ ...exportFields, type: checked === true })}
                          />
                          <label htmlFor="export-type" className="text-sm">
                            Type
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="export-name"
                            checked={exportFields.name}
                            onCheckedChange={(checked) => setExportFields({ ...exportFields, name: checked === true })}
                          />
                          <label htmlFor="export-name" className="text-sm">
                            Name
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="export-description"
                            checked={exportFields.description}
                            onCheckedChange={(checked) =>
                              setExportFields({ ...exportFields, description: checked === true })
                            }
                          />
                          <label htmlFor="export-description" className="text-sm">
                            Description
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="export-amount"
                            checked={exportFields.amount}
                            onCheckedChange={(checked) =>
                              setExportFields({ ...exportFields, amount: checked === true })
                            }
                          />
                          <label htmlFor="export-amount" className="text-sm">
                            Amount
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="export-date"
                            checked={exportFields.date}
                            onCheckedChange={(checked) => setExportFields({ ...exportFields, date: checked === true })}
                          />
                          <label htmlFor="export-date" className="text-sm">
                            Date
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="export-status"
                            checked={exportFields.status}
                            onCheckedChange={(checked) =>
                              setExportFields({ ...exportFields, status: checked === true })
                            }
                          />
                          <label htmlFor="export-status" className="text-sm">
                            Status
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="export-contactName"
                            checked={exportFields.contactName}
                            onCheckedChange={(checked) =>
                              setExportFields({ ...exportFields, contactName: checked === true })
                            }
                          />
                          <label htmlFor="export-contactName" className="text-sm">
                            Contact Name
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="export-contactEmail"
                            checked={exportFields.contactEmail}
                            onCheckedChange={(checked) =>
                              setExportFields({ ...exportFields, contactEmail: checked === true })
                            }
                          />
                          <label htmlFor="export-contactEmail" className="text-sm">
                            Contact Email
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="export-contactPhone"
                            checked={exportFields.contactPhone}
                            onCheckedChange={(checked) =>
                              setExportFields({ ...exportFields, contactPhone: checked === true })
                            }
                          />
                          <label htmlFor="export-contactPhone" className="text-sm">
                            Contact Phone
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="export-notes"
                            checked={exportFields.notes}
                            onCheckedChange={(checked) => setExportFields({ ...exportFields, notes: checked === true })}
                          />
                          <label htmlFor="export-notes" className="text-sm">
                            Notes
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="export-invoiceNumber"
                            checked={exportFields.invoiceNumber}
                            onCheckedChange={(checked) =>
                              setExportFields({ ...exportFields, invoiceNumber: checked === true })
                            }
                          />
                          <label htmlFor="export-invoiceNumber" className="text-sm">
                            Invoice Number
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button type="button" onClick={handleExportData}>
                      <FileDown className="h-4 w-4 mr-2" />
                      Export {filteredTransactions.length} Transactions
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="add">
          <Card>
            <CardHeader>
              <CardTitle>Add New Transaction</CardTitle>
              <CardDescription>Create a new donation, product, service, or offer entry</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="type">Transaction Type</Label>
                    <Select
                      value={newTransaction.type}
                      onValueChange={(value) =>
                        setNewTransaction({ ...newTransaction, type: value as TransactionType })
                      }
                    >
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="donation">Donation</SelectItem>
                        <SelectItem value="product">Product</SelectItem>
                        <SelectItem value="service">Service</SelectItem>
                        <SelectItem value="offer">Offer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter name"
                      value={newTransaction.name}
                      onChange={(e) => setNewTransaction({ ...newTransaction, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="0.00"
                      value={newTransaction.amount?.toString() || ""}
                      onChange={(e) =>
                        setNewTransaction({ ...newTransaction, amount: Number.parseFloat(e.target.value) || 0 })
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={newTransaction.date}
                      onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter description"
                    value={newTransaction.description}
                    onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="contactName">Contact Name</Label>
                    <Input
                      id="contactName"
                      placeholder="Enter contact name"
                      value={newTransaction.contactName || ""}
                      onChange={(e) => setNewTransaction({ ...newTransaction, contactName: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactEmail">Contact Email</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      placeholder="Enter contact email"
                      value={newTransaction.contactEmail || ""}
                      onChange={(e) => setNewTransaction({ ...newTransaction, contactEmail: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactPhone">Contact Phone</Label>
                    <Input
                      id="contactPhone"
                      placeholder="Enter contact phone"
                      value={newTransaction.contactPhone || ""}
                      onChange={(e) => setNewTransaction({ ...newTransaction, contactPhone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select
                      value={newTransaction.status as string}
                      onValueChange={(value) =>
                        setNewTransaction({ ...newTransaction, status: value as TransactionStatus })
                      }
                    >
                      <SelectTrigger id="status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="template">Invoice Template</Label>
                    <Select
                      value={(newTransaction.template as string) || defaultTemplate}
                      onValueChange={(value) =>
                        setNewTransaction({ ...newTransaction, template: value as InvoiceTemplate })
                      }
                    >
                      <SelectTrigger id="template">
                        <SelectValue placeholder="Select template" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="classic">Classic</SelectItem>
                        <SelectItem value="modern">Modern</SelectItem>
                        <SelectItem value="minimal">Minimal</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="branded">Branded</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Enter additional notes"
                    value={newTransaction.notes || ""}
                    onChange={(e) => setNewTransaction({ ...newTransaction, notes: e.target.value })}
                  />
                </div>

                <Button onClick={handleAddTransaction}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Transaction
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices">
          <Card>
            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>Invoice Management</CardTitle>
                <CardDescription>Generate and manage invoices for all transactions</CardDescription>
              </div>

              <div className="flex flex-col md:flex-row gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Palette className="h-4 w-4 mr-2" />
                      Default Template
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Set Default Invoice Template</DialogTitle>
                      <DialogDescription>Choose a default template for all new invoices</DialogDescription>
                    </DialogHeader>

                    <div className="py-4">
                      <RadioGroup
                        value={defaultTemplate}
                        onValueChange={(value) => handleSetDefaultTemplate(value as InvoiceTemplate)}
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <RadioGroupItem value="classic" id="classic" />
                          <Label htmlFor="classic">Classic</Label>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <RadioGroupItem value="modern" id="modern" />
                          <Label htmlFor="modern">Modern</Label>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <RadioGroupItem value="minimal" id="minimal" />
                          <Label htmlFor="minimal">Minimal</Label>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <RadioGroupItem value="professional" id="professional" />
                          <Label htmlFor="professional">Professional</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="branded" id="branded" />
                          <Label htmlFor="branded">Branded</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <DialogFooter>
                      <DialogClose asChild>
                        <Button>Done</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                {selectedInvoices.length > 0 && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="default" size="sm" disabled={isBatchProcessing}>
                        {isBatchProcessing ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>Batch Actions ({selectedInvoices.length})</>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Batch Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleBatchExport("pdf")}>
                        <FilePdf className="h-4 w-4 mr-2" />
                        Export as PDF
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleBatchExport("csv")}>
                        <FileDown className="h-4 w-4 mr-2" />
                        Export as CSV
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleBatchEmail}>
                        <Mail className="h-4 w-4 mr-2" />
                        Email Invoices
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => setSelectedInvoices([])}>
                        <X className="h-4 w-4 mr-2" />
                        Clear Selection
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {/* Add this where appropriate in the UI */}
              <InvoiceTemplates
                selectedTemplate="classic"
                onSelectTemplate={(template) => {
                  console.log("Selected template:", template)
                  // Update the selected template in your state
                }}
              />
              <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="h-10 w-[40px] px-2">
                          <Checkbox
                            checked={selectAll}
                            onCheckedChange={handleSelectAllInvoices}
                            aria-label="Select all invoices"
                          />
                        </th>
                        <th className="h-10 px-4 text-left font-medium">Invoice Number</th>
                        <th className="h-10 px-4 text-left font-medium">Transaction ID</th>
                        <th className="h-10 px-4 text-left font-medium">Type</th>
                        <th className="h-10 px-4 text-left font-medium">Name</th>
                        <th className="h-10 px-4 text-left font-medium">Amount</th>
                        <th className="h-10 px-4 text-left font-medium">Date</th>
                        <th className="h-10 px-4 text-left font-medium">Template</th>
                        <th className="h-10 px-4 text-left font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.filter((t) => t.invoiceNumber).length === 0 ? (
                        <tr className="border-b">
                          <td colSpan={9} className="p-4 text-center text-muted-foreground">
                            No invoices generated yet
                          </td>
                        </tr>
                      ) : (
                        transactions
                          .filter((t) => t.invoiceNumber)
                          .map((transaction) => (
                            <tr key={transaction.invoiceNumber} className="border-b">
                              <td className="p-2 align-middle text-center">
                                <Checkbox
                                  checked={selectedInvoices.includes(transaction.invoiceNumber as string)}
                                  onCheckedChange={(checked) =>
                                    handleSelectInvoice(transaction.invoiceNumber as string, checked === true)
                                  }
                                  aria-label={`Select invoice ${transaction.invoiceNumber}`}
                                />
                              </td>
                              <td className="p-4 align-middle font-mono text-xs">{transaction.invoiceNumber}</td>
                              <td className="p-4 align-middle font-mono text-xs">{transaction.id}</td>
                              <td className="p-4 align-middle capitalize">{transaction.type}</td>
                              <td className="p-4 align-middle">{transaction.name}</td>
                              <td className="p-4 align-middle">${transaction.amount.toFixed(2)}</td>
                              <td className="p-4 align-middle">{transaction.date}</td>
                              <td className="p-4 align-middle capitalize">{transaction.template || defaultTemplate}</td>
                              <td className="p-4 align-middle">
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm" onClick={() => handleViewInvoice(transaction)}>
                                    <FilePdf className="h-4 w-4 mr-2" />
                                    View
                                  </Button>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">More options</span>
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuLabel>Invoice Actions</DropdownMenuLabel>
                                      <DropdownMenuSeparator />
                                      <DropdownMenuItem
                                        onClick={() => {
                                          setSelectedTransaction(transaction)
                                          setEmailRecipient(transaction.contactEmail)
                                          setEmailSubject(
                                            `Invoice ${transaction.invoiceNumber} for ${transaction.name}`,
                                          )
                                          setEmailMessage(
                                            `Dear ${transaction.contactName},\n\nPlease find attached the invoice ${transaction.invoiceNumber} for ${transaction.name}.\n\nAmount: $${transaction.amount.toFixed(2)}\nDate: ${transaction.date}\n\nThank you for your business.\n\nBest regards,\nMJ Ahmad`,
                                          )
                                        }}
                                      >
                                        <Mail className="h-4 w-4 mr-2" />
                                        Email Invoice
                                      </DropdownMenuItem>
                                      <DropdownMenuItem onClick={() => exportAsPDF([transaction])}>
                                        <Download className="h-4 w-4 mr-2" />
                                        Download PDF
                                      </DropdownMenuItem>
                                      <DropdownMenuItem onClick={() => window.print()}>
                                        <Printer className="h-4 w-4 mr-2" />
                                        Print
                                      </DropdownMenuItem>
                                      <DropdownMenuSeparator />
                                      <DropdownMenuLabel>Change Template</DropdownMenuLabel>
                                      <DropdownMenuItem onClick={() => handleUpdateTemplate(transaction, "classic")}>
                                        <div
                                          className={`h-3 w-3 rounded-full mr-2 ${transaction.template === "classic" ? "bg-primary" : "bg-muted"}`}
                                        />
                                        Classic
                                      </DropdownMenuItem>
                                      <DropdownMenuItem onClick={() => handleUpdateTemplate(transaction, "modern")}>
                                        <div
                                          className={`h-3 w-3 rounded-full mr-2 ${transaction.template === "modern" ? "bg-primary" : "bg-muted"}`}
                                        />
                                        Modern
                                      </DropdownMenuItem>
                                      <DropdownMenuItem onClick={() => handleUpdateTemplate(transaction, "minimal")}>
                                        <div
                                          className={`h-3 w-3 rounded-full mr-2 ${transaction.template === "minimal" ? "bg-primary" : "bg-muted"}`}
                                        />
                                        Minimal
                                      </DropdownMenuItem>
                                      <DropdownMenuItem
                                        onClick={() => handleUpdateTemplate(transaction, "professional")}
                                      >
                                        <div
                                          className={`h-3 w-3 rounded-full mr-2 ${transaction.template === "professional" ? "bg-primary" : "bg-muted"}`}
                                        />
                                        Professional
                                      </DropdownMenuItem>
                                      <DropdownMenuItem onClick={() => handleUpdateTemplate(transaction, "branded")}>
                                        <div
                                          className={`h-3 w-3 rounded-full mr-2 ${transaction.template === "branded" ? "bg-primary" : "bg-muted"}`}
                                        />
                                        Branded
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                              </td>
                            </tr>
                          ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                {selectedInvoices.length > 0
                  ? `${selectedInvoices.length} invoices selected`
                  : `${transactions.filter((t) => t.invoiceNumber).length} invoices total`}
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Transaction Summary</CardTitle>
                <CardDescription>Overview of all transactions by type and status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span>Donations: {transactionsByType.donation}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span>Products: {transactionsByType.product}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <span>Services: {transactionsByType.service}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                        <span>Offers: {transactionsByType.offer}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => exportAsPDF([])}>
                  <Download className="h-4 w-4 mr-2" />
                  Export Chart as PDF
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Overview</CardTitle>
                <CardDescription>Transaction trends over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Detailed monthly reports can be generated and exported for analysis
                    </p>
                    <Button className="mt-4" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Generate Monthly Report
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => exportAsPDF([])}>
                  <Download className="h-4 w-4 mr-2" />
                  Export Chart as PDF
                </Button>
              </CardFooter>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Financial Summary</CardTitle>
                <CardDescription>Overview of financial transactions and revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="h-10 px-4 text-left font-medium">Category</th>
                          <th className="h-10 px-4 text-left font-medium">Total Amount</th>
                          <th className="h-10 px-4 text-left font-medium">Transactions</th>
                          <th className="h-10 px-4 text-left font-medium">Average</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-4 align-middle font-medium">Donations</td>
                          <td className="p-4 align-middle">${totalDonations.toFixed(2)}</td>
                          <td className="p-4 align-middle">{transactionsByType.donation}</td>
                          <td className="p-4 align-middle">
                            $
                            {transactionsByType.donation > 0
                              ? (totalDonations / transactionsByType.donation).toFixed(2)
                              : "0.00"}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-4 align-middle font-medium">Products</td>
                          <td className="p-4 align-middle">
                            $
                            {transactions
                              .filter((t) => t.type === "product" && t.status === "completed")
                              .reduce((sum, t) => sum + t.amount, 0)
                              .toFixed(2)}
                          </td>
                          <td className="p-4 align-middle">{transactionsByType.product}</td>
                          <td className="p-4 align-middle">
                            $
                            {transactionsByType.product > 0
                              ? (
                                  transactions
                                    .filter((t) => t.type === "product" && t.status === "completed")
                                    .reduce((sum, t) => sum + t.amount, 0) / transactionsByType.product
                                ).toFixed(2)
                              : "0.00"}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-4 align-middle font-medium">Services</td>
                          <td className="p-4 align-middle">
                            $
                            {transactions
                              .filter((t) => t.type === "service" && t.status === "completed")
                              .reduce((sum, t) => sum + t.amount, 0)
                              .toFixed(2)}
                          </td>
                          <td className="p-4 align-middle">{transactionsByType.service}</td>
                          <td className="p-4 align-middle">
                            $
                            {transactionsByType.service > 0
                              ? (
                                  transactions
                                    .filter((t) => t.type === "service" && t.status === "completed")
                                    .reduce((sum, t) => sum + t.amount, 0) / transactionsByType.service
                                ).toFixed(2)
                              : "0.00"}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 align-middle font-medium">Offers</td>
                          <td className="p-4 align-middle">
                            $
                            {transactions
                              .filter((t) => t.type === "offer" && t.status === "completed")
                              .reduce((sum, t) => sum + t.amount, 0)
                              .toFixed(2)}
                          </td>
                          <td className="p-4 align-middle">{transactionsByType.offer}</td>
                          <td className="p-4 align-middle">
                            $
                            {transactionsByType.offer > 0
                              ? (
                                  transactions
                                    .filter((t) => t.type === "offer" && t.status === "completed")
                                    .reduce((sum, t) => sum + t.amount, 0) / transactionsByType.offer
                                ).toFixed(2)
                              : "0.00"}
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="border-t">
                          <td className="p-4 align-middle font-medium">Total</td>
                          <td className="p-4 align-middle font-medium">${(totalDonations + totalSales).toFixed(2)}</td>
                          <td className="p-4 align-middle font-medium">{transactions.length}</td>
                          <td className="p-4 align-middle font-medium">
                            $
                            {transactions.length > 0
                              ? ((totalDonations + totalSales) / transactions.length).toFixed(2)
                              : "0.00"}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex gap-2 w-full justify-end">
                  <Button
                    variant="outline"
                    onClick={() =>
                      exportAsCSV([
                        {
                          Category: "Donations",
                          "Total Amount": totalDonations.toFixed(2),
                          Transactions: transactionsByType.donation,
                          Average:
                            transactionsByType.donation > 0
                              ? (totalDonations / transactionsByType.donation).toFixed(2)
                              : "0.00",
                        },
                        // Add other categories...
                      ])
                    }
                  >
                    <FileDown className="h-4 w-4 mr-2" />
                    Export as CSV
                  </Button>
                  <Button variant="outline" onClick={() => exportAsPDF([])}>
                    <FilePdf className="h-4 w-4 mr-2" />
                    Export as PDF
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Invoice PDF View Dialog */}
      {selectedTransaction && (
        <Dialog open={!!selectedTransaction} onOpenChange={(open) => !open && setSelectedTransaction(null)}>
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle>Invoice {selectedTransaction.invoiceNumber}</DialogTitle>
              <DialogDescription>View, download or email this invoice</DialogDescription>
            </DialogHeader>

            <div className="bg-white p-8 rounded-lg border">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-2xl font-bold">INVOICE</h2>
                  <p className="text-sm text-gray-500 mt-1">#{selectedTransaction.invoiceNumber}</p>
                </div>
                <div className="text-right">
                  <h3 className="font-bold">MJ Ahmad</h3>
                  <p className="text-sm">Cox's Bazar, Bangladesh</p>
                  <p className="text-sm">mjahmad2024@outlook.com</p>
                  <p className="text-sm">+880 1336 221217</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Bill To:</h4>
                  <p className="font-medium">{selectedTransaction.contactName}</p>
                  <p className="text-sm">{selectedTransaction.contactEmail}</p>
                  <p className="text-sm">{selectedTransaction.contactPhone}</p>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="font-semibold text-gray-700">Invoice Number:</div>
                    <div>{selectedTransaction.invoiceNumber}</div>

                    <div className="font-semibold text-gray-700">Transaction ID:</div>
                    <div>{selectedTransaction.id}</div>

                    <div className="font-semibold text-gray-700">Date:</div>
                    <div>{selectedTransaction.date}</div>

                    <div className="font-semibold text-gray-700">Status:</div>
                    <div className="capitalize">{selectedTransaction.status}</div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left py-2 px-4">Description</th>
                      <th className="text-right py-2 px-4">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-4">
                        <div className="font-medium">{selectedTransaction.name}</div>
                        <div className="text-gray-600 mt-1">{selectedTransaction.description}</div>
                      </td>
                      <td className="py-4 px-4 text-right">${selectedTransaction.amount.toFixed(2)}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="py-4 px-4 text-right font-semibold">Total:</td>
                      <td className="py-4 px-4 text-right font-bold">${selectedTransaction.amount.toFixed(2)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {selectedTransaction.notes && (
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-700 mb-2">Notes:</h4>
                  <p className="text-sm bg-gray-50 p-3 rounded">{selectedTransaction.notes}</p>
                </div>
              )}

              <div className="text-center text-sm text-gray-500 mt-8">
                <p>Thank you for your support!</p>
              </div>
            </div>

            <DialogFooter className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" onClick={() => exportAsPDF([])}>
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" onClick={() => window.print()}>
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Mail className="h-4 w-4 mr-2" />
                    Email Invoice
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Email Invoice</DialogTitle>
                    <DialogDescription>Send this invoice via email to the recipient.</DialogDescription>
                  </DialogHeader>

                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email-recipient">Recipient Email</Label>
                      <Input
                        id="email-recipient"
                        type="email"
                        placeholder="recipient@example.com"
                        value={emailRecipient}
                        onChange={(e) => setEmailRecipient(e.target.value)}
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="email-subject">Subject</Label>
                      <Input
                        id="email-subject"
                        placeholder="Invoice for your recent transaction"
                        value={emailSubject}
                        onChange={(e) => setEmailSubject(e.target.value)}
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="email-message">Message</Label>
                      <Textarea
                        id="email-message"
                        placeholder="Enter your message here..."
                        rows={4}
                        value={emailMessage}
                        onChange={(e) => setEmailMessage(e.target.value)}
                      />
                    </div>
                  </div>

                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        <X className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button type="button" onClick={handleSendEmail} disabled={isEmailSending}>
                      {isEmailSending ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Send Email
                        </>
                      )}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
