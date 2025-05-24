"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  BarChartIcon,
  Calendar,
  Download,
  FileDown,
  LineChartIcon,
  Filter,
  Printer,
  Share2,
  BarChart2,
  PieChartIcon,
} from "lucide-react"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"

// Type definitions
interface Transaction {
  id: string
  type: string
  name: string
  amount: number
  date: string
  status: string
  category: string
  contactName: string
  contactEmail?: string
  contactPhone?: string
}

interface AdvancedReportsProps {
  transactions: Transaction[]
}

export function AdvancedReports({ transactions }: AdvancedReportsProps) {
  const [reportPeriod, setReportPeriod] = useState<"daily" | "weekly" | "monthly" | "quarterly" | "yearly">("monthly")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedType, setSelectedType] = useState<string>("all")
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(new Date().setDate(new Date().getDate() - 30)),
    to: new Date(),
  })

  // Process transactions for time-based reports
  const processTimeData = () => {
    const sortedTransactions = [...transactions].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    const filteredTransactions = sortedTransactions.filter((t) => {
      const transactionDate = new Date(t.date)
      const passesDateFilter = transactionDate >= dateRange.from && transactionDate <= dateRange.to
      const passesCategoryFilter = selectedCategory === "all" || t.category === selectedCategory
      const passesTypeFilter = selectedType === "all" || t.type === selectedType
      return passesDateFilter && passesCategoryFilter && passesTypeFilter
    })

    // Create data for daily, weekly, monthly, quarterly, or yearly
    if (reportPeriod === "daily") {
      // Daily data
      const dailyData: Record<string, { date: string; value: number; count: number }> = {}

      filteredTransactions.forEach((t) => {
        const date = t.date
        if (!dailyData[date]) {
          dailyData[date] = { date, value: 0, count: 0 }
        }
        dailyData[date].value += t.amount
        dailyData[date].count += 1
      })

      return Object.values(dailyData)
    } else if (reportPeriod === "weekly") {
      // Weekly data
      const weeklyData: Record<string, { week: string; value: number; count: number }> = {}

      filteredTransactions.forEach((t) => {
        const date = new Date(t.date)
        const year = date.getFullYear()
        // Get ISO week number
        const week = getWeekNumber(date)
        const weekKey = `${year}-W${week}`

        if (!weeklyData[weekKey]) {
          weeklyData[weekKey] = { week: weekKey, value: 0, count: 0 }
        }
        weeklyData[weekKey].value += t.amount
        weeklyData[weekKey].count += 1
      })

      return Object.values(weeklyData)
    } else if (reportPeriod === "monthly") {
      // Monthly data
      const monthlyData: Record<string, { month: string; value: number; count: number }> = {}

      filteredTransactions.forEach((t) => {
        const date = new Date(t.date)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const monthKey = `${year}-${month.toString().padStart(2, "0")}`

        if (!monthlyData[monthKey]) {
          monthlyData[monthKey] = { month: monthKey, value: 0, count: 0 }
        }
        monthlyData[monthKey].value += t.amount
        monthlyData[monthKey].count += 1
      })

      return Object.values(monthlyData)
    } else if (reportPeriod === "quarterly") {
      // Quarterly data
      const quarterlyData: Record<string, { quarter: string; value: number; count: number }> = {}

      filteredTransactions.forEach((t) => {
        const date = new Date(t.date)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const quarter = Math.ceil(month / 3)
        const quarterKey = `${year}-Q${quarter}`

        if (!quarterlyData[quarterKey]) {
          quarterlyData[quarterKey] = { quarter: quarterKey, value: 0, count: 0 }
        }
        quarterlyData[quarterKey].value += t.amount
        quarterlyData[quarterKey].count += 1
      })

      return Object.values(quarterlyData)
    } else {
      // Yearly data
      const yearlyData: Record<string, { year: string; value: number; count: number }> = {}

      filteredTransactions.forEach((t) => {
        const date = new Date(t.date)
        const year = date.getFullYear().toString()

        if (!yearlyData[year]) {
          yearlyData[year] = { year, value: 0, count: 0 }
        }
        yearlyData[year].value += t.amount
        yearlyData[year].count += 1
      })

      return Object.values(yearlyData)
    }
  }

  const getWeekNumber = (date: Date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1)
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)
  }

  // Process transactions for category-based reports
  const processCategoryData = () => {
    const categoryData: Record<string, { name: string; value: number; count: number }> = {}

    const filteredTransactions = transactions.filter((t) => {
      const transactionDate = new Date(t.date)
      const passesDateFilter = transactionDate >= dateRange.from && transactionDate <= dateRange.to
      const passesTypeFilter = selectedType === "all" || t.type === selectedType
      return passesDateFilter && passesTypeFilter
    })

    filteredTransactions.forEach((t) => {
      const category = t.category || "Uncategorized"
      if (!categoryData[category]) {
        categoryData[category] = { name: category, value: 0, count: 0 }
      }
      categoryData[category].value += t.amount
      categoryData[category].count += 1
    })

    return Object.values(categoryData)
  }

  // Process transactions for type-based reports
  const processTypeData = () => {
    const typeData: Record<string, { name: string; value: number; count: number }> = {}

    const filteredTransactions = transactions.filter((t) => {
      const transactionDate = new Date(t.date)
      const passesDateFilter = transactionDate >= dateRange.from && transactionDate <= dateRange.to
      const passesCategoryFilter = selectedCategory === "all" || t.category === selectedCategory
      return passesDateFilter && passesCategoryFilter
    })

    filteredTransactions.forEach((t) => {
      const type = t.type || "Uncategorized"
      if (!typeData[type]) {
        typeData[type] = { name: type, value: 0, count: 0 }
      }
      typeData[type].value += t.amount
      typeData[type].count += 1
    })

    return Object.values(typeData)
  }

  // Process transactions for status-based reports
  const processStatusData = () => {
    const statusData: Record<string, { name: string; value: number; count: number }> = {}

    const filteredTransactions = transactions.filter((t) => {
      const transactionDate = new Date(t.date)
      const passesDateFilter = transactionDate >= dateRange.from && transactionDate <= dateRange.to
      const passesCategoryFilter = selectedCategory === "all" || t.category === selectedCategory
      const passesTypeFilter = selectedType === "all" || t.type === selectedType
      return passesDateFilter && passesCategoryFilter && passesTypeFilter
    })

    filteredTransactions.forEach((t) => {
      const status = t.status || "Unknown"
      if (!statusData[status]) {
        statusData[status] = { name: status, value: 0, count: 0 }
      }
      statusData[status].value += t.amount
      statusData[status].count += 1
    })

    return Object.values(statusData)
  }

  // Prepare data for rendering
  const timeData = processTimeData()
  const categoryData = processCategoryData()
  const typeData = processTypeData()
  const statusData = processStatusData()

  // Calculate summary statistics
  const totalAmount = transactions
    .filter((t) => {
      const transactionDate = new Date(t.date)
      const passesDateFilter = transactionDate >= dateRange.from && transactionDate <= dateRange.to
      const passesCategoryFilter = selectedCategory === "all" || t.category === selectedCategory
      const passesTypeFilter = selectedType === "all" || t.type === selectedType
      return passesDateFilter && passesCategoryFilter && passesTypeFilter
    })
    .reduce((sum, t) => sum + t.amount, 0)

  const transactionCount = transactions.filter((t) => {
    const transactionDate = new Date(t.date)
    const passesDateFilter = transactionDate >= dateRange.from && transactionDate <= dateRange.to
    const passesCategoryFilter = selectedCategory === "all" || t.category === selectedCategory
    const passesTypeFilter = selectedType === "all" || t.type === selectedType
    return passesDateFilter && passesCategoryFilter && passesTypeFilter
  }).length

  const averageAmount = transactionCount > 0 ? totalAmount / transactionCount : 0

  // Chart colors
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD", "#5DADE2", "#48C9B0", "#F4D03F"]

  // Handle report export
  const handleExportReport = () => {
    console.log("Exporting report...")
    // Implementation would depend on the desired export format and mechanism
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Advanced Reports</CardTitle>
              <CardDescription>Analyze transaction data with customizable views and filters</CardDescription>
            </div>
            <Button onClick={handleExportReport}>
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Date Range</label>
              <DateRangePicker
                from={dateRange.from}
                to={dateRange.to}
                onSelect={(range) => {
                  if (range?.from && range?.to) {
                    setDateRange({ from: range.from, to: range.to })
                  }
                }}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Time Period</label>
              <Select value={reportPeriod} onValueChange={(value: any) => setReportPeriod(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="environment">Environment</SelectItem>
                    <SelectItem value="community">Community</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Type</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="donation">Donations</SelectItem>
                    <SelectItem value="product">Products</SelectItem>
                    <SelectItem value="service">Services</SelectItem>
                    <SelectItem value="offer">Offers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-muted-foreground">Total Amount</p>
                  <h3 className="text-2xl font-bold">${totalAmount.toFixed(2)}</h3>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-muted-foreground">Transaction Count</p>
                  <h3 className="text-2xl font-bold">{transactionCount}</h3>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-muted-foreground">Average Amount</p>
                  <h3 className="text-2xl font-bold">${averageAmount.toFixed(2)}</h3>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="time">
            <TabsList className="mb-6">
              <TabsTrigger value="time">
                <LineChartIcon className="h-4 w-4 mr-2" />
                Time-based Analysis
              </TabsTrigger>
              <TabsTrigger value="category">
                <PieChartIcon className="h-4 w-4 mr-2" />
                Category Analysis
              </TabsTrigger>
              <TabsTrigger value="type">
                <BarChartIcon className="h-4 w-4 mr-2" />
                Type Analysis
              </TabsTrigger>
              <TabsTrigger value="status">
                <BarChart2 className="h-4 w-4 mr-2" />
                Status Analysis
              </TabsTrigger>
            </TabsList>

            <TabsContent value="time" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>{reportPeriod.charAt(0).toUpperCase() + reportPeriod.slice(1)} Revenue Trend</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="h-[400px]">
                    <ChartContainer
                      config={{
                        amount: {
                          label: "Amount ($)",
                          color: "hsl(var(--chart-1))",
                        },
                        transactions: {
                          label: "Transaction Count",
                          color: "hsl(var(--chart-2))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={timeData} margin={{ top: 5, right: 30, left: 20, bottom: 30 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis
                            dataKey={
                              reportPeriod === "daily"
                                ? "date"
                                : reportPeriod === "weekly"
                                  ? "week"
                                  : reportPeriod === "monthly"
                                    ? "month"
                                    : reportPeriod === "quarterly"
                                      ? "quarter"
                                      : "year"
                            }
                            angle={-45}
                            textAnchor="end"
                            height={60}
                          />
                          <YAxis yAxisId="left" orientation="left" />
                          <YAxis yAxisId="right" orientation="right" />
                          <ChartTooltip />
                          <Legend />
                          <Line
                            yAxisId="left"
                            type="monotone"
                            dataKey="value"
                            name="Revenue"
                            stroke="var(--color-amount)"
                            activeDot={{ r: 8 }}
                          />
                          <Line
                            yAxisId="right"
                            type="monotone"
                            dataKey="count"
                            name="Transactions"
                            stroke="var(--color-transactions)"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="outline">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {reportPeriod.charAt(0).toUpperCase() + reportPeriod.slice(1)} View
                    </Badge>
                    <Badge variant="outline">
                      <Filter className="h-3.5 w-3.5 mr-1" />
                      {selectedCategory === "all" ? "All Categories" : selectedCategory}
                    </Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Printer className="h-3.5 w-3.5 mr-1" />
                      Print
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileDown className="h-3.5 w-3.5 mr-1" />
                      Export
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-3.5 w-3.5 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="category" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue by Category</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="h-[400px]">
                    <ChartContainer
                      config={{
                        amount: {
                          label: "Amount ($)",
                          color: "hsl(var(--chart-1))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                          <Pie
                            data={categoryData}
                            cx="50%"
                            cy="50%"
                            labelLine={true}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {categoryData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <ChartTooltip formatter={(value: number) => [`$${value.toFixed(2)}`, "Amount"]} />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="outline">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {`${dateRange.from.toLocaleDateString()} - ${dateRange.to.toLocaleDateString()}`}
                    </Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Printer className="h-3.5 w-3.5 mr-1" />
                      Print
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileDown className="h-3.5 w-3.5 mr-1" />
                      Export
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-3.5 w-3.5 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="type" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue by Transaction Type</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="h-[400px]">
                    <ChartContainer
                      config={{
                        amount: {
                          label: "Amount ($)",
                          color: "hsl(var(--chart-1))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={typeData} margin={{ top: 5, right: 30, left: 20, bottom: 30 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" angle={0} />
                          <YAxis />
                          <ChartTooltip formatter={(value: number) => [`$${value.toFixed(2)}`, "Amount"]} />
                          <Legend />
                          <Bar dataKey="value" name="Amount" fill="var(--color-amount)">
                            {typeData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="outline">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {`${dateRange.from.toLocaleDateString()} - ${dateRange.to.toLocaleDateString()}`}
                    </Badge>
                    <Badge variant="outline">
                      <Filter className="h-3.5 w-3.5 mr-1" />
                      {selectedCategory === "all" ? "All Categories" : selectedCategory}
                    </Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Printer className="h-3.5 w-3.5 mr-1" />
                      Print
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileDown className="h-3.5 w-3.5 mr-1" />
                      Export
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-3.5 w-3.5 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="status" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue by Status</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="h-[400px]">
                    <ChartContainer
                      config={{
                        amount: {
                          label: "Amount ($)",
                          color: "hsl(var(--chart-1))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={statusData}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          layout="vertical"
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" />
                          <YAxis dataKey="name" type="category" />
                          <ChartTooltip formatter={(value: number) => [`$${value.toFixed(2)}`, "Amount"]} />
                          <Legend />
                          <Bar dataKey="value" name="Amount" fill="var(--color-amount)">
                            {statusData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="outline">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {`${dateRange.from.toLocaleDateString()} - ${dateRange.to.toLocaleDateString()}`}
                    </Badge>
                    <Badge variant="outline">
                      <Filter className="h-3.5 w-3.5 mr-1" />
                      {selectedCategory === "all" ? "All Categories" : selectedCategory}
                    </Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Printer className="h-3.5 w-3.5 mr-1" />
                      Print
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileDown className="h-3.5 w-3.5 mr-1" />
                      Export
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-3.5 w-3.5 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
