"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  AlertCircle,
  ArrowDown,
  ArrowUp,
  BarChart,
  Brain,
  ChevronDown,
  ChevronUp,
  Download,
  FileText,
  LineChart,
  Lightbulb,
  RefreshCw,
  Search,
  TrendingUp,
  Zap,
} from "lucide-react"
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"

interface AIInsightsProps {
  data: any
}

export function AIInsights({ data }: AIInsightsProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisProgress, setAnalysisProgress] = useState(100)
  const [lastAnalyzed, setLastAnalyzed] = useState<string>("2025-05-19T13:45:00Z")

  // Mock AI insights data
  const insights = [
    {
      id: "insight-1",
      type: "trend",
      title: "Increasing Donation Trend",
      description:
        "Donations have increased by 23% over the last quarter, significantly outpacing the previous year's growth rate of 12%.",
      impact: "high",
      category: "financial",
      confidence: 92,
      recommendation:
        "Consider expanding donation channels and increasing marketing efforts to capitalize on this positive trend.",
      data: [
        { month: "Jan", value: 4000 },
        { month: "Feb", value: 4200 },
        { month: "Mar", value: 4500 },
        { month: "Apr", value: 4800 },
        { month: "May", value: 5200 },
        { month: "Jun", value: 5800 },
      ],
    },
    {
      id: "insight-2",
      type: "anomaly",
      title: "Unusual Product Return Rate",
      description:
        "Product returns for the 'Inspirational T-shirt' category have increased by 35% in the last month, deviating from the normal pattern.",
      impact: "medium",
      category: "operations",
      confidence: 87,
      recommendation: "Investigate product quality issues and customer feedback for the affected product category.",
      data: [
        { name: "Normal Rate", value: 8 },
        { name: "Current Rate", value: 12.8 },
      ],
    },
    {
      id: "insight-3",
      type: "prediction",
      title: "Q3 Revenue Forecast",
      description:
        "Based on current trends and seasonal patterns, Q3 revenue is predicted to reach $1.2M, a 15% increase over the same period last year.",
      impact: "high",
      category: "financial",
      confidence: 85,
      recommendation: "Prepare inventory and staffing levels to accommodate the projected growth in Q3.",
      data: [
        { quarter: "Q1", actual: 850000, predicted: 850000 },
        { quarter: "Q2", actual: 920000, predicted: 900000 },
        { quarter: "Q3", actual: null, predicted: 1200000 },
        { quarter: "Q4", actual: null, predicted: 1350000 },
      ],
    },
    {
      id: "insight-4",
      type: "correlation",
      title: "Service Engagement Correlation",
      description:
        "There is a strong correlation (r=0.78) between email campaign frequency and service engagement rates, particularly for educational services.",
      impact: "medium",
      category: "marketing",
      confidence: 83,
      recommendation:
        "Increase email campaign frequency for educational services while testing different content strategies.",
      data: [
        { campaigns: 2, engagement: 15 },
        { campaigns: 3, engagement: 25 },
        { campaigns: 4, engagement: 35 },
        { campaigns: 5, engagement: 48 },
        { campaigns: 6, engagement: 52 },
        { campaigns: 7, engagement: 58 },
      ],
    },
    {
      id: "insight-5",
      type: "opportunity",
      title: "Untapped Market Segment",
      description:
        "Analysis of customer demographics reveals an underserved segment: young professionals (25-34) interested in corporate social responsibility programs.",
      impact: "high",
      category: "strategic",
      confidence: 79,
      recommendation:
        "Develop targeted offerings for young professionals focused on corporate social responsibility and workplace giving programs.",
      data: [
        { age: "18-24", current: 15, potential: 18 },
        { age: "25-34", current: 22, potential: 42 },
        { age: "35-44", current: 38, potential: 45 },
        { age: "45-54", current: 32, potential: 35 },
        { age: "55+", current: 28, potential: 30 },
      ],
    },
  ]

  const performanceMetrics = [
    {
      name: "Donation Conversion Rate",
      value: 4.2,
      change: 0.8,
      trend: "up",
      benchmark: 3.1,
    },
    {
      name: "Average Order Value",
      value: 78.5,
      change: -2.3,
      trend: "down",
      benchmark: 82.0,
    },
    {
      name: "Customer Retention",
      value: 68.9,
      change: 5.2,
      trend: "up",
      benchmark: 65.0,
    },
    {
      name: "Cost per Acquisition",
      value: 22.4,
      change: -1.8,
      trend: "up",
      benchmark: 25.0,
    },
    {
      name: "Inventory Turnover",
      value: 12.3,
      change: 0.5,
      trend: "up",
      benchmark: 10.5,
    },
  ]

  const anomalyDetection = [
    {
      id: "anomaly-1",
      metric: "Website Traffic",
      value: 15420,
      expected: 12500,
      deviation: 23.4,
      date: "2025-05-15",
      status: "positive",
      description: "Significant increase in website traffic, possibly due to recent marketing campaign",
    },
    {
      id: "anomaly-2",
      metric: "Cart Abandonment",
      value: 42.8,
      expected: 28.5,
      deviation: 50.2,
      date: "2025-05-17",
      status: "negative",
      description: "Unusually high cart abandonment rate, may indicate checkout process issues",
    },
    {
      id: "anomaly-3",
      metric: "Email Open Rate",
      value: 12.3,
      expected: 22.7,
      deviation: -45.8,
      date: "2025-05-18",
      status: "negative",
      description: "Email open rates significantly below normal, check for deliverability issues",
    },
  ]

  const predictiveScenarios = [
    {
      id: "scenario-1",
      name: "Base Case",
      probability: 65,
      revenue: 1250000,
      growth: 12,
      description: "Continuation of current trends with moderate growth",
    },
    {
      id: "scenario-2",
      name: "Optimistic Case",
      probability: 20,
      revenue: 1450000,
      growth: 28,
      description: "Accelerated growth due to new product launches and expanded market reach",
    },
    {
      id: "scenario-3",
      name: "Conservative Case",
      probability: 15,
      revenue: 1050000,
      growth: 5,
      description: "Slower growth due to market saturation and increased competition",
    },
  ]

  const handleRefreshAnalysis = () => {
    setIsAnalyzing(true)
    setAnalysisProgress(0)

    // Simulate analysis progress
    const interval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsAnalyzing(false)
          setLastAnalyzed(new Date().toISOString())
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "trend":
        return <TrendingUp className="h-4 w-4" />
      case "anomaly":
        return <AlertCircle className="h-4 w-4" />
      case "prediction":
        return <LineChart className="h-4 w-4" />
      case "correlation":
        return <BarChart className="h-4 w-4" />
      case "opportunity":
        return <Lightbulb className="h-4 w-4" />
      default:
        return <Brain className="h-4 w-4" />
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString()
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              AI-Powered Insights
            </CardTitle>
            <CardDescription>Intelligent analysis and recommendations based on your data</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xs text-muted-foreground">Last analyzed: {formatDate(lastAnalyzed)}</div>
            <Button variant="outline" size="sm" onClick={handleRefreshAnalysis} disabled={isAnalyzing}>
              {isAnalyzing ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh Analysis
                </>
              )}
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Insights
            </Button>
          </div>
        </div>
        {isAnalyzing && (
          <div className="mt-2">
            <div className="flex justify-between text-xs mb-1">
              <span>Analyzing your data...</span>
              <span>{analysisProgress}%</span>
            </div>
            <Progress value={analysisProgress} />
          </div>
        )}
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="key-insights">
          <TabsList className="mb-4">
            <TabsTrigger value="key-insights">
              <Zap className="h-4 w-4 mr-2" />
              Key Insights
            </TabsTrigger>
            <TabsTrigger value="performance">
              <LineChart className="h-4 w-4 mr-2" />
              Performance Metrics
            </TabsTrigger>
            <TabsTrigger value="anomalies">
              <AlertCircle className="h-4 w-4 mr-2" />
              Anomaly Detection
            </TabsTrigger>
            <TabsTrigger value="predictions">
              <TrendingUp className="h-4 w-4 mr-2" />
              Predictive Analysis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="key-insights">
            <div className="space-y-4">
              {insights.map((insight) => (
                <Card key={insight.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-2">
                        <div
                          className={`p-2 rounded-full ${
                            insight.type === "anomaly"
                              ? "bg-red-100"
                              : insight.type === "opportunity"
                                ? "bg-green-100"
                                : "bg-blue-100"
                          }`}
                        >
                          {getTypeIcon(insight.type)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{insight.title}</h3>
                            <Badge className={getImpactColor(insight.impact)}>
                              {insight.impact.charAt(0).toUpperCase() + insight.impact.slice(1)} Impact
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Brain className="h-3 w-3" />
                        {insight.confidence}% Confidence
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-[200px] mt-4">
                      {insight.type === "trend" && (
                        <ChartContainer
                          config={{
                            value: {
                              label: "Value",
                              color: "hsl(var(--chart-1))",
                            },
                          }}
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsLineChart data={insight.data}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="month" />
                              <YAxis />
                              <ChartTooltip />
                              <Line type="monotone" dataKey="value" stroke="var(--color-value)" activeDot={{ r: 8 }} />
                            </RechartsLineChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      )}

                      {insight.type === "anomaly" && (
                        <ChartContainer
                          config={{
                            value: {
                              label: "Value",
                              color: "hsl(var(--chart-1))",
                            },
                          }}
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsBarChart data={insight.data}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <ChartTooltip />
                              <Bar dataKey="value" fill="var(--color-value)">
                                {insight.data.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={index === 0 ? "#8884d8" : "#ff8042"} />
                                ))}
                              </Bar>
                            </RechartsBarChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      )}

                      {insight.type === "prediction" && (
                        <ChartContainer
                          config={{
                            actual: {
                              label: "Actual",
                              color: "hsl(var(--chart-1))",
                            },
                            predicted: {
                              label: "Predicted",
                              color: "hsl(var(--chart-2))",
                            },
                          }}
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsLineChart data={insight.data}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="quarter" />
                              <YAxis />
                              <ChartTooltip />
                              <Line
                                type="monotone"
                                dataKey="actual"
                                stroke="var(--color-actual)"
                                strokeWidth={2}
                                dot={{ r: 6 }}
                              />
                              <Line
                                type="monotone"
                                dataKey="predicted"
                                stroke="var(--color-predicted)"
                                strokeDasharray="5 5"
                              />
                            </RechartsLineChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      )}

                      {insight.type === "correlation" && (
                        <ChartContainer
                          config={{
                            engagement: {
                              label: "Engagement",
                              color: "hsl(var(--chart-1))",
                            },
                          }}
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsLineChart data={insight.data}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="campaigns" label={{ value: "Email Campaigns", position: "bottom" }} />
                              <YAxis label={{ value: "Engagement Rate (%)", angle: -90, position: "left" }} />
                              <ChartTooltip />
                              <Line
                                type="monotone"
                                dataKey="engagement"
                                stroke="var(--color-engagement)"
                                activeDot={{ r: 8 }}
                              />
                            </RechartsLineChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      )}

                      {insight.type === "opportunity" && (
                        <ChartContainer
                          config={{
                            current: {
                              label: "Current",
                              color: "hsl(var(--chart-1))",
                            },
                            potential: {
                              label: "Potential",
                              color: "hsl(var(--chart-2))",
                            },
                          }}
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsBarChart data={insight.data}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="age" />
                              <YAxis />
                              <ChartTooltip />
                              <Legend />
                              <Bar dataKey="current" fill="var(--color-current)" />
                              <Bar dataKey="potential" fill="var(--color-potential)" />
                            </RechartsBarChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      )}
                    </div>

                    <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Lightbulb className="h-4 w-4 text-yellow-500" />
                        <h4 className="font-medium">AI Recommendation</h4>
                      </div>
                      <p className="text-sm">{insight.recommendation}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="performance">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {performanceMetrics.map((metric) => (
                  <Card key={metric.name}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{metric.name}</h3>
                        <Badge
                          variant="outline"
                          className={`flex items-center gap-1 ${
                            (metric.trend === "up" && metric.name !== "Cost per Acquisition") ||
                            (metric.trend === "down" && metric.name === "Cost per Acquisition")
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {metric.trend === "up" ? (
                            <ChevronUp className="h-3 w-3" />
                          ) : (
                            <ChevronDown className="h-3 w-3" />
                          )}
                          {Math.abs(metric.change).toFixed(1)}%
                        </Badge>
                      </div>
                      <div className="mt-2">
                        <div className="text-3xl font-bold">
                          {metric.name.includes("Rate") || metric.name.includes("Retention")
                            ? `${metric.value}%`
                            : metric.name === "Average Order Value" || metric.name === "Cost per Acquisition"
                              ? `$${metric.value}`
                              : metric.value}
                        </div>
                        <div className="flex items-center mt-1 text-sm text-muted-foreground">
                          <span>Industry benchmark:</span>
                          <span className="ml-1 font-medium">
                            {metric.name.includes("Rate") || metric.name.includes("Retention")
                              ? `${metric.benchmark}%`
                              : metric.name === "Average Order Value" || metric.name === "Cost per Acquisition"
                                ? `$${metric.benchmark}`
                                : metric.benchmark}
                          </span>
                          <div
                            className={`ml-2 px-1.5 py-0.5 rounded text-xs ${
                              (metric.value > metric.benchmark && metric.name !== "Cost per Acquisition") ||
                              (metric.value < metric.benchmark && metric.name === "Cost per Acquisition")
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {(metric.value > metric.benchmark && metric.name !== "Cost per Acquisition") ||
                            (metric.value < metric.benchmark && metric.name === "Cost per Acquisition")
                              ? "Above"
                              : "Below"}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Trends</CardTitle>
                  <CardDescription>Key metrics performance over the last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ChartContainer
                      config={{
                        donations: {
                          label: "Donations",
                          color: "hsl(var(--chart-1))",
                        },
                        products: {
                          label: "Products",
                          color: "hsl(var(--chart-2))",
                        },
                        services: {
                          label: "Services",
                          color: "hsl(var(--chart-3))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsLineChart
                          data={[
                            {
                              month: "Dec",
                              donations: 4000,
                              products: 2400,
                              services: 1800,
                            },
                            {
                              month: "Jan",
                              donations: 4200,
                              products: 2100,
                              services: 2200,
                            },
                            {
                              month: "Feb",
                              donations: 4500,
                              products: 2600,
                              services: 2400,
                            },
                            {
                              month: "Mar",
                              donations: 4800,
                              products: 2900,
                              services: 2600,
                            },
                            {
                              month: "Apr",
                              donations: 5200,
                              products: 3100,
                              services: 2800,
                            },
                            {
                              month: "May",
                              donations: 5800,
                              products: 3400,
                              services: 3200,
                            },
                          ]}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="donations"
                            stroke="var(--color-donations)"
                            activeDot={{ r: 8 }}
                          />
                          <Line type="monotone" dataKey="products" stroke="var(--color-products)" />
                          <Line type="monotone" dataKey="services" stroke="var(--color-services)" />
                        </RechartsLineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="anomalies">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {anomalyDetection.map((anomaly) => (
                  <Card key={anomaly.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base font-medium">{anomaly.metric}</CardTitle>
                        <Badge
                          className={
                            anomaly.status === "positive" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }
                        >
                          {anomaly.deviation > 0 ? "+" : ""}
                          {anomaly.deviation.toFixed(1)}%
                        </Badge>
                      </div>
                      <CardDescription>{anomaly.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Actual</div>
                          <div className="text-2xl font-bold">
                            {anomaly.metric.includes("Rate") ? `${anomaly.value}%` : anomaly.value.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-2xl px-4">vs</div>
                        <div>
                          <div className="text-sm text-muted-foreground">Expected</div>
                          <div className="text-2xl font-bold">
                            {anomaly.metric.includes("Rate")
                              ? `${anomaly.expected}%`
                              : anomaly.expected.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg text-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <AlertCircle className="h-4 w-4" />
                          <span className="font-medium">AI Analysis</span>
                        </div>
                        <p>{anomaly.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Anomaly Detection Dashboard</CardTitle>
                  <CardDescription>AI-powered monitoring of key metrics to detect unusual patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ChartContainer
                      config={{
                        actual: {
                          label: "Actual",
                          color: "hsl(var(--chart-1))",
                        },
                        expected: {
                          label: "Expected Range",
                          color: "hsl(var(--chart-2))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsLineChart
                          data={[
                            {
                              date: "05/10",
                              actual: 12500,
                              upper: 13000,
                              lower: 11500,
                            },
                            {
                              date: "05/11",
                              actual: 12800,
                              upper: 13200,
                              lower: 11700,
                            },
                            {
                              date: "05/12",
                              actual: 13100,
                              upper: 13400,
                              lower: 11900,
                            },
                            {
                              date: "05/13",
                              actual: 13400,
                              upper: 13600,
                              lower: 12100,
                            },
                            {
                              date: "05/14",
                              actual: 13800,
                              upper: 13800,
                              lower: 12300,
                            },
                            {
                              date: "05/15",
                              actual: 15420,
                              upper: 14000,
                              lower: 12500,
                              anomaly: true,
                            },
                            {
                              date: "05/16",
                              actual: 14200,
                              upper: 14200,
                              lower: 12700,
                            },
                            {
                              date: "05/17",
                              actual: 14500,
                              upper: 14400,
                              lower: 12900,
                            },
                            {
                              date: "05/18",
                              actual: 14800,
                              upper: 14600,
                              lower: 13100,
                            },
                            {
                              date: "05/19",
                              actual: 15100,
                              upper: 14800,
                              lower: 13300,
                              anomaly: true,
                            },
                          ]}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <ChartTooltip />
                          <Line
                            type="monotone"
                            dataKey="upper"
                            stroke="var(--color-expected)"
                            strokeDasharray="5 5"
                            dot={false}
                          />
                          <Line
                            type="monotone"
                            dataKey="lower"
                            stroke="var(--color-expected)"
                            strokeDasharray="5 5"
                            dot={false}
                          />
                          <Line
                            type="monotone"
                            dataKey="actual"
                            stroke="var(--color-actual)"
                            strokeWidth={2}
                            dot={(props) => {
                              const { cx, cy, payload } = props
                              return payload.anomaly ? (
                                <circle cx={cx} cy={cy} r={6} fill="red" stroke="var(--color-actual)" strokeWidth={2} />
                              ) : (
                                <circle
                                  cx={cx}
                                  cy={cy}
                                  r={4}
                                  fill="var(--color-actual)"
                                  stroke="var(--color-actual)"
                                  strokeWidth={1}
                                />
                              )
                            }}
                          />
                        </RechartsLineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="predictions">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {predictiveScenarios.map((scenario) => (
                  <Card key={scenario.id}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{scenario.name}</h3>
                        <Badge variant="outline">{scenario.probability}% Probability</Badge>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-muted-foreground">Projected Revenue</div>
                          <div className="text-2xl font-bold">${(scenario.revenue / 1000).toFixed(0)}K</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Growth Rate</div>
                          <div className="flex items-center">
                            <span className="text-xl font-bold">{scenario.growth}%</span>
                            <span
                              className={`ml-2 flex items-center ${
                                scenario.growth > 10 ? "text-green-600" : "text-yellow-600"
                              }`}
                            >
                              {scenario.growth > 10 ? (
                                <ArrowUp className="h-4 w-4 mr-1" />
                              ) : (
                                <ArrowDown className="h-4 w-4 mr-1" />
                              )}
                              {scenario.growth > 10 ? "Strong" : "Moderate"}
                            </span>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground mt-2">{scenario.description}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue Forecast (Next 12 Months)</CardTitle>
                  <CardDescription>
                    AI-generated revenue projections based on historical data and market trends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ChartContainer
                      config={{
                        base: {
                          label: "Base Case",
                          color: "hsl(var(--chart-1))",
                        },
                        optimistic: {
                          label: "Optimistic Case",
                          color: "hsl(var(--chart-2))",
                        },
                        conservative: {
                          label: "Conservative Case",
                          color: "hsl(var(--chart-3))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsLineChart
                          data={[
                            {
                              month: "Jun",
                              base: 105,
                              optimistic: 110,
                              conservative: 100,
                            },
                            {
                              month: "Jul",
                              base: 110,
                              optimistic: 118,
                              conservative: 102,
                            },
                            {
                              month: "Aug",
                              base: 115,
                              optimistic: 125,
                              conservative: 105,
                            },
                            {
                              month: "Sep",
                              base: 120,
                              optimistic: 132,
                              conservative: 108,
                            },
                            {
                              month: "Oct",
                              base: 125,
                              optimistic: 140,
                              conservative: 110,
                            },
                            {
                              month: "Nov",
                              base: 130,
                              optimistic: 148,
                              conservative: 112,
                            },
                            {
                              month: "Dec",
                              base: 140,
                              optimistic: 160,
                              conservative: 118,
                            },
                            {
                              month: "Jan",
                              base: 135,
                              optimistic: 155,
                              conservative: 115,
                            },
                            {
                              month: "Feb",
                              base: 140,
                              optimistic: 162,
                              conservative: 118,
                            },
                            {
                              month: "Mar",
                              base: 145,
                              optimistic: 170,
                              conservative: 120,
                            },
                            {
                              month: "Apr",
                              base: 150,
                              optimistic: 178,
                              conservative: 122,
                            },
                            {
                              month: "May",
                              base: 155,
                              optimistic: 185,
                              conservative: 125,
                            },
                          ]}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis label={{ value: "Revenue (K $)", angle: -90, position: "left" }} />
                          <ChartTooltip />
                          <Legend />
                          <Line type="monotone" dataKey="base" stroke="var(--color-base)" strokeWidth={2} />
                          <Line
                            type="monotone"
                            dataKey="optimistic"
                            stroke="var(--color-optimistic)"
                            strokeDasharray="5 5"
                          />
                          <Line
                            type="monotone"
                            dataKey="conservative"
                            stroke="var(--color-conservative)"
                            strokeDasharray="3 3"
                          />
                        </RechartsLineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">AI Forecast Summary</h3>
                    </div>
                    <p className="text-sm mb-3">
                      Based on current trends and market conditions, our AI predicts continued growth with a 65%
                      probability of achieving the base case scenario. Key factors influencing this forecast include:
                    </p>
                    <ul className="text-sm space-y-1 list-disc pl-5">
                      <li>Seasonal patterns suggest stronger performance in Q4 2025</li>
                      <li>Recent marketing campaigns are expected to drive 12-15% increase in new customers</li>
                      <li>Product line expansion could accelerate growth beyond base projections</li>
                      <li>Market competition remains a risk factor for the conservative scenario</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex justify-between items-center w-full text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span>Analyzing data from 1,245 records</span>
          </div>
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            <span>AI model: Advanced Analytics v2.3</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
