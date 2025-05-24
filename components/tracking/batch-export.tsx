"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Download, FileSpreadsheet, FileText, FileCog, Mail, Printer, CheckSquare, Square, Loader2 } from "lucide-react"

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

interface BatchExportProps {
  transactions: Transaction[]
  selectedIds: string[]
  onSelectAll: () => void
  onClearSelection: () => void
  isAllSelected: boolean
}

export function BatchExport({
  transactions,
  selectedIds,
  onSelectAll,
  onClearSelection,
  isAllSelected,
}: BatchExportProps) {
  const [open, setOpen] = useState(false)
  const [exportFormat, setExportFormat] = useState("pdf")
  const [isExporting, setIsExporting] = useState(false)
  const [includeFields, setIncludeFields] = useState({
    id: true,
    type: true,
    name: true,
    amount: true,
    date: true,
    status: true,
    category: true,
    contact: true,
    email: true,
    notes: true,
  })

  const selectedTransactions = transactions.filter((t) => selectedIds.includes(t.id))

  const handleExport = async () => {
    setIsExporting(true)

    // Simulate export process
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Show success message
    toast({
      title: "Export successful",
      description: `${selectedIds.length} invoices exported as ${exportFormat.toUpperCase()}`,
    })

    setIsExporting(false)
    setOpen(false)
  }

  const toggleField = (field: keyof typeof includeFields) => {
    setIncludeFields((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8" onClick={isAllSelected ? onClearSelection : onSelectAll}>
            {isAllSelected ? <CheckSquare className="h-4 w-4 mr-1" /> : <Square className="h-4 w-4 mr-1" />}
            {isAllSelected ? "Deselect All" : "Select All"}
          </Button>
          <span className="text-sm text-muted-foreground">
            {selectedIds.length} {selectedIds.length === 1 ? "item" : "items"} selected
          </span>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-8"
            onClick={() => setOpen(true)}
            disabled={selectedIds.length === 0}
          >
            <Download className="h-4 w-4 mr-1" />
            Batch Export
          </Button>
          <Button variant="outline" size="sm" className="h-8" disabled={selectedIds.length === 0}>
            <Mail className="h-4 w-4 mr-1" />
            Email Selected
          </Button>
          <Button variant="outline" size="sm" className="h-8" disabled={selectedIds.length === 0}>
            <Printer className="h-4 w-4 mr-1" />
            Print Selected
          </Button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Batch Export</DialogTitle>
            <DialogDescription>
              Export {selectedIds.length} {selectedIds.length === 1 ? "invoice" : "invoices"} in your preferred format.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="export-format">Export Format</Label>
              <Select value={exportFormat} onValueChange={setExportFormat}>
                <SelectTrigger id="export-format">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>PDF Documents</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="csv">
                    <div className="flex items-center">
                      <FileSpreadsheet className="h-4 w-4 mr-2" />
                      <span>CSV Spreadsheet</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="xlsx">
                    <div className="flex items-center">
                      <FileSpreadsheet className="h-4 w-4 mr-2" />
                      <span>Excel Spreadsheet</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="json">
                    <div className="flex items-center">
                      <FileCog className="h-4 w-4 mr-2" />
                      <span>JSON Data</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label>Include Fields</Label>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(includeFields).map(([field, included]) => (
                  <div key={field} className="flex items-center space-x-2">
                    <Checkbox
                      id={`field-${field}`}
                      checked={included}
                      onCheckedChange={() => toggleField(field as keyof typeof includeFields)}
                    />
                    <Label htmlFor={`field-${field}`} className="capitalize">
                      {field}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleExport} disabled={isExporting}>
              {isExporting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Exporting...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Export {selectedIds.length} {selectedIds.length === 1 ? "Invoice" : "Invoices"}
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
