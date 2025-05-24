"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, AlertTriangle, CheckCircle } from "lucide-react"

export function AIInsights() {
  const insights = [
    {
      type: "opportunity",
      title: "Market Expansion Opportunity",
      description: "Cox's Bazar tourism sector showing 23% growth potential",
      confidence: 87,
      impact: "High",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      type: "risk",
      title: "Currency Fluctuation Risk",
      description: "BDT volatility may affect returns by 3-5%",
      confidence: 72,
      impact: "Medium",
      icon: AlertTriangle,
      color: "text-yellow-600",
    },
    {
      type: "trend",
      title: "Technology Adoption Trend",
      description: "Digital payment adoption increasing 15% quarterly",
      confidence: 94,
      impact: "High",
      icon: TrendingUp,
      color: "text-blue-600",
    },
    {
      type: "recommendation",
      title: "Diversification Recommended",
      description: "Consider spreading investment across 3-4 initiatives",
      confidence: 89,
      impact: "Medium",
      icon: CheckCircle,
      color: "text-purple-600",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">AI-Powered Insights</h2>
        <p className="text-muted-foreground">
          Advanced analytics and machine learning insights for your investment portfolio
        </p>
      </div>

      <div className="grid gap-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className={`h-5 w-5 ${insight.color}`} />
                    <div>
                      <CardTitle className="text-lg">{insight.title}</CardTitle>
                      <CardDescription className="mt-1">{insight.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={insight.impact === "High" ? "default" : "secondary"}>{insight.impact} Impact</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Confidence Level</span>
                    <span className="font-medium">{insight.confidence}%</span>
                  </div>
                  <Progress value={insight.confidence} className="h-2" />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">AI Recommendation Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm">Portfolio optimization suggests 12% potential improvement</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <span className="text-sm">Market timing analysis indicates favorable entry point</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <span className="text-sm">Risk assessment recommends 15% reserve allocation</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
