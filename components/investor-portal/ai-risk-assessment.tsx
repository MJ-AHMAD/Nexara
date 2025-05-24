"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Shield, TrendingDown, Activity, Users } from "lucide-react"

export function AIRiskAssessment() {
  const riskCategories = [
    {
      category: "Market Risk",
      level: "Medium",
      score: 65,
      description: "Exposure to market volatility and economic fluctuations",
      factors: ["Currency exchange rate volatility", "Local economic conditions", "Global market trends"],
      mitigation: ["Diversified portfolio allocation", "Hedging strategies", "Regular market monitoring"],
      icon: TrendingDown,
      color: "text-yellow-600",
    },
    {
      category: "Operational Risk",
      level: "Low",
      score: 35,
      description: "Risk from internal processes and operational failures",
      factors: ["Management team experience", "Operational efficiency", "Technology infrastructure"],
      mitigation: ["Strong governance framework", "Regular audits and reviews", "Backup systems and processes"],
      icon: Activity,
      color: "text-green-600",
    },
    {
      category: "Regulatory Risk",
      level: "Medium-Low",
      score: 45,
      description: "Risk from regulatory changes and compliance requirements",
      factors: ["Government policy changes", "Regulatory compliance", "Legal framework stability"],
      mitigation: ["Legal compliance monitoring", "Government relations", "Regulatory buffer planning"],
      icon: Shield,
      color: "text-blue-600",
    },
    {
      category: "Social Risk",
      level: "Low",
      score: 25,
      description: "Risk from social and community factors",
      factors: ["Community acceptance", "Social impact alignment", "Stakeholder engagement"],
      mitigation: ["Community engagement programs", "Social impact measurement", "Stakeholder communication"],
      icon: Users,
      color: "text-purple-600",
    },
  ]

  const overallRisk = {
    score: 42,
    level: "Medium-Low",
    trend: "Stable",
    lastUpdated: "2024-01-15",
  }

  const getRiskColor = (level: string) => {
    switch (level) {
      case "Low":
        return "bg-green-100 text-green-800"
      case "Medium-Low":
        return "bg-blue-100 text-blue-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Medium-High":
        return "bg-orange-100 text-orange-800"
      case "High":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getProgressColor = (score: number) => {
    if (score <= 30) return "bg-green-500"
    if (score <= 50) return "bg-blue-500"
    if (score <= 70) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">AI Risk Assessment</h2>
        <p className="text-muted-foreground">Comprehensive risk analysis powered by machine learning algorithms</p>
      </div>

      {/* Overall Risk Summary */}
      <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-600" />
            Overall Risk Assessment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">{overallRisk.score}</div>
              <div className="text-sm text-blue-600">Risk Score</div>
              <div className="mt-2">
                <Progress value={overallRisk.score} className="h-3" />
              </div>
            </div>
            <div className="text-center">
              <Badge className={getRiskColor(overallRisk.level)} variant="secondary">
                {overallRisk.level}
              </Badge>
              <div className="text-sm text-muted-foreground mt-1">Risk Level</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-green-700">{overallRisk.trend}</div>
              <div className="text-sm text-muted-foreground">Trend</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium">{overallRisk.lastUpdated}</div>
              <div className="text-sm text-muted-foreground">Last Updated</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="categories" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="categories">Risk Categories</TabsTrigger>
          <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
        </TabsList>

        <TabsContent value="categories" className="space-y-4">
          <div className="grid gap-4">
            {riskCategories.map((risk, index) => {
              const Icon = risk.icon
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <Icon className={`h-6 w-6 ${risk.color}`} />
                        <div>
                          <CardTitle className="text-lg">{risk.category}</CardTitle>
                          <CardDescription>{risk.description}</CardDescription>
                        </div>
                      </div>
                      <Badge className={getRiskColor(risk.level)} variant="secondary">
                        {risk.level}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Risk Score</span>
                        <span className="font-medium">{risk.score}/100</span>
                      </div>
                      <Progress value={risk.score} className="h-2" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-red-700 mb-2">Risk Factors</h4>
                        <ul className="space-y-1">
                          {risk.factors.map((factor, idx) => (
                            <li key={idx} className="text-sm flex items-start gap-2">
                              <AlertTriangle className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" />
                              {factor}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-700 mb-2">Mitigation Strategies</h4>
                        <ul className="space-y-1">
                          {risk.mitigation.map((strategy, idx) => (
                            <li key={idx} className="text-sm flex items-start gap-2">
                              <Shield className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                              {strategy}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="scenarios" className="space-y-4">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-700">Best Case Scenario</CardTitle>
                <CardDescription>Optimal market conditions and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Expected ROI</span>
                    <span className="font-bold text-green-700">28-35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Risk Score</span>
                    <span className="font-bold text-green-700">25-30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Probability</span>
                    <span className="font-bold text-green-700">25%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Most Likely Scenario</CardTitle>
                <CardDescription>Expected market conditions and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Expected ROI</span>
                    <span className="font-bold text-blue-700">18-24%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Risk Score</span>
                    <span className="font-bold text-blue-700">40-50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Probability</span>
                    <span className="font-bold text-blue-700">60%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Worst Case Scenario</CardTitle>
                <CardDescription>Challenging market conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Expected ROI</span>
                    <span className="font-bold text-red-700">8-12%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Risk Score</span>
                    <span className="font-bold text-red-700">70-80</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Probability</span>
                    <span className="font-bold text-red-700">15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Risk Monitoring Dashboard</CardTitle>
              <CardDescription>Real-time risk monitoring and alert system</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium">Active Monitoring</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Market Volatility</span>
                      <Badge variant="outline" className="text-green-600">
                        Normal
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Currency Risk</span>
                      <Badge variant="outline" className="text-yellow-600">
                        Elevated
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Regulatory Changes</span>
                      <Badge variant="outline" className="text-green-600">
                        Stable
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Alert Settings</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Risk Score Threshold</span>
                      <span className="text-sm font-medium">75</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Email Alerts</span>
                      <Badge variant="outline" className="text-green-600">
                        Enabled
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">SMS Alerts</span>
                      <Badge variant="outline" className="text-blue-600">
                        Enabled
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
