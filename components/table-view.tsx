"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"

interface TableViewProps {
  data: any
}

export function TableView({ data }: TableViewProps) {
  const [searchTerm, setSearchTerm] = useState("")

  // Convert JSON to flat array for table display
  const flattenObject = (obj: any, prefix = ""): Record<string, any>[] => {
    let result: Record<string, any>[] = []

    if (typeof obj !== "object" || obj === null) {
      return [{ key: prefix, value: String(obj), type: typeof obj }]
    }

    for (const key in obj) {
      const newKey = prefix ? `${prefix}.${key}` : key
      if (typeof obj[key] === "object" && obj[key] !== null) {
        result = [...result, ...flattenObject(obj[key], newKey)]
      } else {
        result.push({ key: newKey, value: String(obj[key]), type: typeof obj[key] })
      }
    }

    return result
  }

  const tableData = flattenObject(data)

  // Filter data based on search term
  const filteredData = tableData.filter(
    (item) =>
      item.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.value.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <Label htmlFor="table-search" className="sr-only">
            Search
          </Label>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="table-search"
              placeholder="অনুসন্ধান করুন..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%]">Key</TableHead>
              <TableHead className="w-[50%]">Value</TableHead>
              <TableHead className="w-[10%]">Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <TableRow
                  key={index}
                  className={
                    searchTerm &&
                    (item.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      item.value.toLowerCase().includes(searchTerm.toLowerCase()))
                      ? "bg-yellow-50"
                      : ""
                  }
                >
                  <TableCell className="font-medium">{item.key}</TableCell>
                  <TableCell>{item.value}</TableCell>
                  <TableCell>{item.type}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-4">
                  No data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
