"use client"

import { useState } from "react"
import { BatchExport } from "./batch-export"
import { InvoiceTemplates } from "./invoice-templates"
import { InvoicePreview } from "./invoice-preview"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Download, Settings, Mail, Printer } from "lucide-react"

// Sample data for demonstration
const sampleTransactions = [
  {
    id: "INV-2023-001",
    type: "Donation",
    name: "Monthly Support",
    amount: 250.0,
    date: "2023-05-15",
    status: "Completed",
    category: "Regular Donor",
    contact: "John Smith",
    email: "john@example.com",
    notes: "Recurring monthly donation",
  },
  {
    id: "INV-2023-002",
    type: "Product",
    name: "Leadership Book",
    amount: 35.99,
    date: "2023-05-18",
    status: "Shipped",
    category: "Books",
    contact: "Sarah Johnson",
    email: "sarah@example.com",
  },
  {
    id: "INV-2023-003",
    type: "Service",
    name: "Consulting Session",
    amount: 150.0,
    date: "2023-05-20",
    status: "Scheduled",
    category: "Consulting",
    contact: "Michael Brown",
    email: "michael@example.com",
    notes: "2-hour virtual session",
  },
  {
    id: "INV-2023-004",
    type: "Donation",
    name: "Project Funding",
    amount: 1000.0,
    date: "2023-05-22",
    status: "Completed",
    category: "Project Support",
    contact: "Corporate Partner Inc.",
    email: "partner@corp.com",
    notes: "Designated for education initiative",
  },
  {
    id: "INV-2023-005",
    type: "Product",
    name: "Merchandise Bundle",
    amount: 85.5,
    date: "2023-05-25",
    status: "Processing",
    category: "Merchandise",
    contact: "Emily Wilson",
    email: "emily@example.com",
  },
]

export function TrackingSystemEnhancements() {
  const [selectedTemplate, setSelectedTemplate] = useState("classic")
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const isAllSelected = selectedIds.length === sampleTransactions.length

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds([])
    } else {
      setSelectedIds(sampleTransactions.map((t) => t.id))
    }
  }

  const handleSelectItem = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((itemId) => itemId !== id))
    } else {
      setSelectedIds([...selectedIds, id])
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Transaction Management</h2>
        <div className="flex gap-2">
          <InvoiceTemplates onSelectTemplate={setSelectedTemplate} selectedTemplate={selectedTemplate} />
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <BatchExport
        transactions={sampleTransactions}
        selectedIds={selectedIds}
        onSelectAll={handleSelectAll}
        onClearSelection={() => setSelectedIds([])}
        isAllSelected={isAllSelected}
      />

      <div className="rounded-md border">
        <div className="bg-muted/50 p-3 flex items-center">
          <div className="w-8">
            <Checkbox checked={isAllSelected} onCheckedChange={handleSelectAll} aria-label="Select all" />
          </div>
          <div className="flex-1 grid grid-cols-6 gap-2 font-medium">
            <div>ID</div>
            <div>Type</div>
            <div>Name</div>
            <div>Amount</div>
            <div>Date</div>
            <div>Actions</div>
          </div>
        </div>

        {sampleTransactions.map((transaction) => (
          <div key={transaction.id} className="p-3 flex items-center border-t">
            <div className="w-8">
              <Checkbox
                checked={selectedIds.includes(transaction.id)}
                onCheckedChange={() => handleSelectItem(transaction.id)}
                aria-label={`Select invoice ${transaction.id}`}
              />
            </div>
            <div className="flex-1 grid grid-cols-6 gap-2">
              <div>{transaction.id}</div>
              <div>{transaction.type}</div>
              <div>{transaction.name}</div>
              <div>${transaction.amount.toFixed(2)}</div>
              <div>{transaction.date}</div>
              <div className="flex gap-1">
                <InvoicePreview transaction={transaction} templateId={selectedTemplate} />
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Printer className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-muted/30 rounded-md p-4">
        <h3 className="font-medium mb-2">Quick Guide: Batch Operations</h3>
        <ul className="text-sm space-y-1 text-muted-foreground">
          <li>• Select multiple invoices using the checkboxes</li>
          <li>• Use the batch actions menu to perform operations on all selected items</li>
          <li>• Change invoice template designs using the "Invoice Templates" button</li>
          <li>• Preview any invoice by clicking the eye icon</li>
        </ul>
      </div>
    </div>
  )
}
