"use client"

import { useState } from "react"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Progress } from "@/components/ui/progress"

interface BatchExportDialogProps {
  isOpen: boolean
  onClose: () => void
  selectedItems: any[]
  onExport: (format: string, fields: string[]) => void
}

export function BatchExportDialog({ isOpen, onClose, selectedItems, onExport }: BatchExportDialogProps) {
  const [exportFormat, setExportFormat] = useState("pdf")
  const [selectedFields, setSelectedFields] = useState<string[]>([
    "id",
    "date",
    "type",
    "name",
    "description",
    "amount",
    "status",
    "category",
  ])
  const [isExporting, setIsExporting] = useState(false)
  const [progress, setProgress] = useState(0)

  const availableFields = [
    { id: "id", label: "ID" },
    { id: "date", label: "Date" },
    { id: "type", label: "Type" },
    { id: "name", label: "Name" },
    { id: "description", label: "Description" },
    { id: "amount", label: "Amount" },
    { id: "status", label: "Status" },
    { id: "category", label: "Category" },
    { id: "contact", label: "Contact Information" },
    { id: "items", label: "Line Items" },
    { id: "notes", label: "Notes" },
  ]

  const toggleField = (field: string) => {
    if (selectedFields.includes(field)) {
      setSelectedFields(selectedFields.filter((f) => f !== field))
    } else {
      setSelectedFields([...selectedFields, field])
    }
  }

  const selectAllFields = () => {
    setSelectedFields(availableFields.map((field) => field.id))
  }

  const deselectAllFields = () => {
    setSelectedFields([])
  }

  const handleExport = async () => {
    if (selectedFields.length === 0) {
      toast({
        title: "No fields selected",
        description: "Please select at least one field to include in the export",
        variant: "destructive",
      })
      return
    }

    setIsExporting(true)

    // Simulate export progress
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 10
      setProgress(currentProgress)

      if (currentProgress >= 100) {
        clearInterval(interval)

        // Simulate export completion
        setTimeout(() => {
          onExport(exportFormat, selectedFields)
          setIsExporting(false)
          onClose()

          toast({
            title: "Export complete",
            description: `Successfully exported ${selectedItems.length} items as ${exportFormat.toUpperCase()}`,
          })
        }, 500)
      }
    }, 200)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Export {selectedItems.length} Items</DialogTitle>
          <DialogDescription>Choose export format and select which fields to include in the export.</DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-6">
          {/* Export Format */}
          <div>
            <h3 className="text-sm font-medium mb-3">Export Format</h3>
            <RadioGroup
              value={exportFormat}
              onValueChange={setExportFormat}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2"
            >
              <div className="flex items-center space-x-2 border rounded-md p-2">
                <RadioGroupItem value="pdf" id="format-pdf" />
                <Label htmlFor="format-pdf" className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  PDF
                </Label>
              </div>
              <div className="flex items-center space-x-2 border rounded-md p-2">
                <RadioGroupItem value="csv" id="format-csv" />
                <Label htmlFor="format-csv" className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  CSV
                </Label>
              </div>
              <div className="flex items-center space-x-2 border rounded-md p-2">
                <RadioGroupItem value="excel" id="format-excel" />
                <Label htmlFor="format-excel" className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Excel
                </Label>
              </div>
              <div className="flex items-center space-x-2 border rounded-md p-2">
                <RadioGroupItem value="json" id="format-json" />
                <Label htmlFor="format-json" className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  JSON
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Field Selection */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium">Fields to Include</h3>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={selectAllFields}>
                  Select All
                </Button>
                <Button variant="outline" size="sm" onClick={deselectAllFields}>
                  Deselect All
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {availableFields.map((field) => (
                <div key={field.id} className="flex items-center space-x-2 border rounded-md p-2">
                  <Checkbox
                    id={`field-${field.id}`}
                    checked={selectedFields.includes(field.id)}
                    onCheckedChange={() => toggleField(field.id)}
                  />
                  <Label htmlFor={`field-${field.id}`}>{field.label}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Export Summary */}
          <div className="bg-muted/50 p-3 rounded-md">
            <p className="text-sm">
              Exporting <strong>{selectedItems.length}</strong> items as <strong>{exportFormat.toUpperCase()}</strong>{" "}
              with <strong>{selectedFields.length}</strong> fields.
            </p>
          </div>

          {/* Progress */}
          {isExporting && (
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-center text-muted-foreground">Exporting... {progress}%</p>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isExporting}>
            Cancel
          </Button>
          <Button onClick={handleExport} disabled={isExporting || selectedFields.length === 0}>
            {isExporting ? "Exporting..." : "Export"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
