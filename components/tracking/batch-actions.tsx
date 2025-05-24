"use client"

import { useState } from "react"
import { Check, FileText, Mail, MoreHorizontal, Printer, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"

interface BatchActionsProps {
  items: any[]
  onExport: (items: any[], format: string) => void
  onEmailSelected: (items: any[]) => void
  onPrintSelected: (items: any[]) => void
}

export function BatchActions({ items, onExport, onEmailSelected, onPrintSelected }: BatchActionsProps) {
  const [selectedItems, setSelectedItems] = useState<any[]>([])
  const [selectAll, setSelectAll] = useState(false)

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([])
    } else {
      setSelectedItems([...items])
    }
    setSelectAll(!selectAll)
  }

  const handleSelectItem = (item: any) => {
    if (selectedItems.some((i) => i.id === item.id)) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id))
      setSelectAll(false)
    } else {
      setSelectedItems([...selectedItems, item])
      if (selectedItems.length + 1 === items.length) {
        setSelectAll(true)
      }
    }
  }

  const isSelected = (item: any) => {
    return selectedItems.some((i) => i.id === item.id)
  }

  const handleBatchExport = (format: string) => {
    if (selectedItems.length === 0) {
      toast({
        title: "No items selected",
        description: "Please select at least one item to export",
        variant: "destructive",
      })
      return
    }

    onExport(selectedItems, format)
    toast({
      title: `Exporting ${selectedItems.length} items as ${format.toUpperCase()}`,
      description: "Your export is being prepared...",
    })
  }

  const handleBatchEmail = () => {
    if (selectedItems.length === 0) {
      toast({
        title: "No items selected",
        description: "Please select at least one item to email",
        variant: "destructive",
      })
      return
    }

    onEmailSelected(selectedItems)
  }

  const handleBatchPrint = () => {
    if (selectedItems.length === 0) {
      toast({
        title: "No items selected",
        description: "Please select at least one item to print",
        variant: "destructive",
      })
      return
    }

    onPrintSelected(selectedItems)
  }

  const clearSelection = () => {
    setSelectedItems([])
    setSelectAll(false)
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 bg-muted/30 p-2 rounded-md">
        <div className="flex items-center space-x-2">
          <Checkbox id="select-all" checked={selectAll} onCheckedChange={handleSelectAll} />
          <label htmlFor="select-all" className="text-sm font-medium">
            Select All
          </label>
        </div>

        {selectedItems.length > 0 && (
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="flex items-center gap-1">
              <Check className="h-3 w-3" />
              {selectedItems.length} selected
            </Badge>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Batch Actions <MoreHorizontal className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Export Options</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => handleBatchExport("pdf")}>
                  <FileText className="mr-2 h-4 w-4" />
                  Export as PDF
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleBatchExport("csv")}>
                  <FileText className="mr-2 h-4 w-4" />
                  Export as CSV
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleBatchExport("excel")}>
                  <FileText className="mr-2 h-4 w-4" />
                  Export as Excel
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleBatchEmail}>
                  <Mail className="mr-2 h-4 w-4" />
                  Email Selected
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleBatchPrint}>
                  <Printer className="mr-2 h-4 w-4" />
                  Print Selected
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={clearSelection}>
                  <X className="mr-2 h-4 w-4" />
                  Clear Selection
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" onClick={clearSelection}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-1">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex items-center space-x-2 p-2 rounded-md ${isSelected(item) ? "bg-muted/50" : "hover:bg-muted/20"}`}
          >
            <Checkbox
              id={`item-${item.id}`}
              checked={isSelected(item)}
              onCheckedChange={() => handleSelectItem(item)}
            />
            <label
              htmlFor={`item-${item.id}`}
              className="flex-1 text-sm cursor-pointer flex items-center justify-between"
            >
              <span>
                {item.id} - {item.name || item.description}
              </span>
              <span className="text-muted-foreground">{new Date(item.date).toLocaleDateString()}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
