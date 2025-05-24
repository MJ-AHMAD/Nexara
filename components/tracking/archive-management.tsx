"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Download,
  Eye,
  File,
  FileArchive,
  FileSpreadsheet,
  FileText,
  FolderOpen,
  Printer,
  Search,
  SlidersHorizontal,
  Trash2,
} from "lucide-react"
import { DataTable } from "@/components/ui/data-table"
import type { ColumnDef } from "@tanstack/react-table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DateRangePicker } from "@/components/ui/date-range-picker"

interface ArchiveItem {
  id: string
  title: string
  type: string
  category: string
  reportDate: string
  archivedDate: string
  archivedBy: string
  fileType: string
  fileSize: number
  tags: string[]
  status: string
  department: string
  viewCount: number
  downloadCount: number
}

// Mock archive data
const mockArchiveData: ArchiveItem[] = Array.from({ length: 50 }).map((_, i) => {
  const types = ["daily", "weekly", "monthly", "quarterly", "annual"]
  const categories = ["sales", "finance", "inventory", "marketing", "operations"]
  const fileTypes = ["pdf", "xlsx", "docx", "csv", "json"]
  const statuses = ["active", "archived", "confidential"]
  const departments = ["sales", "marketing", "finance", "operations", "executive"]
  const tags = ["important", "financial", "audit", "tax", "budget", "forecast", "report", "analysis"]

  const randomDate = (start: Date, end: Date) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  }

  const reportDate = randomDate(new Date(2024, 0, 1), new Date()).toISOString()
  const archivedDate = randomDate(new Date(reportDate), new Date()).toISOString()

  const randomTags = Array.from({ length: Math.floor(Math.random() * 3) + 1 }).map(() => {
    return tags[Math.floor(Math.random() * tags.length)]
  })

  return {
    id: `arch-${(i + 1).toString().padStart(3, "0")}`,
    title: `${types[Math.floor(Math.random() * types.length)].charAt(0).toUpperCase() + types[Math.floor(Math.random() * types.length)].slice(1)} ${categories[Math.floor(Math.random() * categories.length)].charAt(0).toUpperCase() + categories[Math.floor(Math.random() * categories.length)].slice(1)} Report ${i + 1}`,
    type: types[Math.floor(Math.random() * types.length)],
    category: categories[Math.floor(Math.random() * categories.length)],
    reportDate,
    archivedDate,
    archivedBy: ["John Doe", "Jane Smith", "Michael Johnson"][Math.floor(Math.random() * 3)],
    fileType: fileTypes[Math.floor(Math.random() * fileTypes.length)],
    fileSize: Math.floor(Math.random() * 5000000) + 500000, // Random between 500KB and 5MB
    tags: [...new Set(randomTags)], // Remove duplicates
    status: statuses[Math.floor(Math.random() * statuses.length)],
    department: departments[Math.floor(Math.random() * departments.length)],
    viewCount: Math.floor(Math.random() * 50),
    downloadCount: Math.floor(Math.random() * 30),
  }
})

export function ArchiveManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterCategory, setFilterCategory] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterFileType, setFilterFileType] = useState("all")
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(new Date().setMonth(new Date().getMonth() - 3)),
    to: new Date(),
  })
  const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null)
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  // Filter archive data
  const filteredData = mockArchiveData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesType = filterType === "all" || item.type === filterType
    const matchesCategory = filterCategory === "all" || item.category === filterCategory
    const matchesStatus = filterStatus === "all" || item.status === filterStatus
    const matchesFileType = filterFileType === "all" || item.fileType === filterFileType

    const itemDate = new Date(item.reportDate)
    const matchesDate = itemDate >= dateRange.from && itemDate <= dateRange.to

    return matchesSearch && matchesType && matchesCategory && matchesStatus && matchesFileType && matchesDate
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
  }

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case "pdf":
        return <FileText className="h-8 w-8 text-red-500" />
      case "xlsx":
        return <FileSpreadsheet className="h-8 w-8 text-green-500" />
      case "docx":
        return <File className="h-8 w-8 text-blue-500" />
      case "csv":
        return <FileSpreadsheet className="h-8 w-8 text-emerald-500" />
      case "json":
        return <FileText className="h-8 w-8 text-amber-500" />
      default:
        return <File className="h-8 w-8 text-gray-500" />
    }
  }

  const handleViewItem = (item: ArchiveItem) => {
    setSelectedItem(item)
  }

  const handleSelectItem = (id: string, selected: boolean) => {
    if (selected) {
      setSelectedItems([...selectedItems, id])
    } else {
      setSelectedItems(selectedItems.filter((i) => i !== id))
    }
  }

  const handleBulkDownload = () => {
    console.log("Downloading selected items:", selectedItems)
    // Implementation would handle the bulk download process
  }

  // Table columns definition
  const columns: ColumnDef<ArchiveItem>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => {
        const item = row.original
        return (
          <div className="flex items-start gap-3">
            {getFileIcon(item.fileType)}
            <div>
              <div className="font-medium">{item.title}</div>
              <div className="text-xs text-muted-foreground">ID: {item.id}</div>
            </div>
          </div>
        )
      },
    },
    {
      accessorKey: "reportDate",
      header: "Report Date",
      cell: ({ row }) => formatDate(row.original.reportDate),
    },
    {
      accessorKey: "type",
      header: "Type",
      cell: ({ row }) => <span className="capitalize">{row.original.type}</span>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status
        const statusColors: Record<string, string> = {
          active: "bg-green-100 text-green-800",
          archived: "bg-blue-100 text-blue-800",
          confidential: "bg-red-100 text-red-800",
        }

        return <Badge className={statusColors[status] || "bg-gray-100 text-gray-800"}>{status}</Badge>
      },
    },
    {
      accessorKey: "fileType",
      header: "Format",
      cell: ({ row }) => row.original.fileType.toUpperCase(),
    },
    {
      accessorKey: "fileSize",
      header: "Size",
      cell: ({ row }) => formatFileSize(row.original.fileSize),
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const item = row.original
        return (
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" onClick={() => handleViewItem(item)}>
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Download className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem className="cursor-pointer">
                  <Printer className="h-4 w-4 mr-2" /> Print
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Eye className="h-4 w-4 mr-2" /> View Details
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-destructive">
                  <Trash2 className="h-4 w-4 mr-2" /> Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )
      },
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Archive Management</h2>
          <p className="text-muted-foreground">Search, browse, and retrieve archived reports and documents</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline">
            <FolderOpen className="h-4 w-4 mr-2" />
            New Folder
          </Button>
          <Button>
            <FileArchive className="h-4 w-4 mr-2" />
            Archive Reports
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by title, ID, or tag..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <DateRangePicker
                from={dateRange.from}
                to={dateRange.to}
                onSelect={(range) => {
                  if (range?.from && range?.to) {
                    setDateRange({ from: range.from, to: range.to })
                  }
                }}
              />

              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="annual">Annual</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="inventory">Inventory</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterFileType} onValueChange={setFilterFileType}>
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="File Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Formats</SelectItem>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="xlsx">Excel</SelectItem>
                  <SelectItem value="docx">Word</SelectItem>
                  <SelectItem value="csv">CSV</SelectItem>
                  <SelectItem value="json">JSON</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="table">
            <TabsList className="mb-4">
              <TabsTrigger value="table">
                <FileText className="h-4 w-4 mr-2" />
                Table View
              </TabsTrigger>
              <TabsTrigger value="grid">
                <FolderOpen className="h-4 w-4 mr-2" />
                Grid View
              </TabsTrigger>
            </TabsList>

            <TabsContent value="table">
              <div className="rounded-md border">
                <DataTable
                  columns={columns}
                  data={filteredData}
                  onRowSelectionChange={(rows) => {
                    setSelectedItems(Array.from(rows))
                  }}
                />
              </div>

              {selectedItems.length > 0 && (
                <div className="flex items-center justify-between mt-4 p-2 bg-muted rounded-md">
                  <p className="text-sm text-muted-foreground">{selectedItems.length} items selected</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => setSelectedItems([])}>
                      Clear Selection
                    </Button>
                    <Button size="sm" onClick={handleBulkDownload}>
                      <Download className="h-4 w-4 mr-2" />
                      Download Selected
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="grid">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredData.length === 0 ? (
                  <div className="col-span-full text-center p-8 text-muted-foreground">
                    No archive items match your search criteria
                  </div>
                ) : (
                  filteredData.map((item) => (
                    <div
                      key={item.id}
                      className="group border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer"
                      onClick={() => handleViewItem(item)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        {getFileIcon(item.fileType)}
                        <Badge className="capitalize">{item.fileType}</Badge>
                      </div>
                      <h3 className="font-medium mb-1 line-clamp-2">{item.title}</h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        {formatDate(item.reportDate)} • {formatFileSize(item.fileSize)}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-3 pt-2 border-t flex items-center justify-between text-xs text-muted-foreground">
                        <span>{item.department}</span>
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" /> {item.viewCount}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="flex justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {filteredData.length} of {mockArchiveData.length} archive items
          </div>
        </CardFooter>
      </Card>

      {selectedItem && (
        <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>{selectedItem.title}</DialogTitle>
              <DialogDescription>Archive ID: {selectedItem.id}</DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="flex items-start gap-4">
                {getFileIcon(selectedItem.fileType)}
                <div className="flex-1">
                  <h3 className="font-medium">{selectedItem.title}</h3>
                  <div className="text-sm text-muted-foreground mb-2">
                    {formatFileSize(selectedItem.fileSize)} • {selectedItem.fileType.toUpperCase()}
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {selectedItem.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Report Date</Label>
                  <div className="text-sm flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    {formatDate(selectedItem.reportDate)}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Archived Date</Label>
                  <div className="text-sm flex items-center">
                    <FileArchive className="h-4 w-4 mr-2 text-muted-foreground" />
                    {formatDate(selectedItem.archivedDate)}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Department</Label>
                  <div className="text-sm capitalize">{selectedItem.department}</div>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Category</Label>
                  <div className="text-sm capitalize">{selectedItem.category}</div>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Report Type</Label>
                  <div className="text-sm capitalize">{selectedItem.type}</div>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Status</Label>
                  <Badge
                    className={
                      selectedItem.status === "active"
                        ? "bg-green-100 text-green-800"
                        : selectedItem.status === "archived"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-red-100 text-red-800"
                    }
                  >
                    {selectedItem.status}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">Statistics</Label>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-2 text-muted-foreground" />
                    {selectedItem.viewCount} views
                  </div>
                  <div className="flex items-center">
                    <Download className="h-4 w-4 mr-2 text-muted-foreground" />
                    {selectedItem.downloadCount} downloads
                  </div>
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline">
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
