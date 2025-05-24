"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, Target, Brain } from "lucide-react"

export function PredictiveAnalytics() {
  const predictions = [
    {
      metric: "Portfolio Value",
      current: "$125,000",
      predicted: "$156,000",
      timeframe: "12 months",
      confidence: 87,
      trend: "up",
      change: "+24.8%",
    },
    {
      metric: "Monthly Returns",
      current: "$2,100",
      predicted: "$2,850",
      timeframe: "6 months",
      confidence: 92,
      trend: "up",
      change: "+35.7%",
    },
    {
      metric: "Risk Score",
      current: "42",
      predicted: "38",
      timeframe: "3 months",
      confidence: 78,
      trend: "down",
      change: "-9.5%",
    },
  ]

  const marketForecasts = [
    {
      sector: "Tourism & Hospitality",
      currentGrowth: 15.3,
      predictedGrowth: 18.7,
      confidence: 85,
      factors: ["Seasonal trends", "Infrastructure development", "Government initiatives"],
    },
    {
      sector: "Digital Services",
      currentGrowth: 22.7,
      predictedGrowth: 26.4,
      confidence: 91,
      factors: ["Technology adoption", "Digital transformation", "Remote work trends"],
    },
    {
      sector: "Microfinance",
      currentGrowth: 12.4,
      predictedGrowth: 14.8,
      confidence: 79,
      factors: ["Financial inclusion", "Economic stability", "Regulatory support"],
    },
  ]

  const aiInsights = [
    {
      type: "opportunity",
      title: "Optimal Investment Window",
      description: "AI models predict a 15% increase in investment opportunities in Q2 2024",
      confidence: 89,
      action: "Consider increasing allocation by 20%",
      icon: Target,
      color: "text-green-600",
    },
    {
      type: "trend",
      title: "Emerging Market Shift",
      description: "Digital payment adoption accelerating faster than predicted",
      confidence: 94,
      action: "Increase fintech exposure",
      icon: TrendingUp,
      color: "text-blue-600",
    },
    {
      type: "risk",
      title: "Currency Volatility Alert",
      description: "BDT showing increased volatility patterns in next 3 months",
      confidence: 76,
      action: "Consider hedging strategies",
      icon: TrendingDown,
      color: "text-yellow-600",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Predictive Analytics</h2>
        <p className="text-muted-foreground">
          AI-powered forecasting and predictive insights for your investment portfolio
        </p>
      </div>

      <Tabs defaultValue="portfolio" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="market">Market</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
          <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio" className="space-y-4">
          <div className="grid gap-4">
            {predictions.map((prediction, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{prediction.metric}</CardTitle>
                      <CardDescription>Predicted change over {prediction.timeframe}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      {prediction.trend === "up" ? (
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-red-600" />
                      )}
                      <Badge variant={prediction.trend === "up" ? "default" : "secondary"}>{prediction.change}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Current</div>
                      <div className="text-2xl font-bold">{prediction.current}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Predicted</div>
                      <div className="text-2xl font-bold text-green-700">{prediction.predicted}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Confidence Level</span>
                      <span className="font-medium">{prediction.confidence}%</span>
                    </div>
                    <Progress value={prediction.confidence} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="market" className="space-y-4">
          <div className="grid gap-4">
            {marketForecasts.map((forecast, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{forecast.sector}</CardTitle>
                  <CardDescription>Growth rate predictions and market analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-sm text-blue-600">Current Growth</div>
                      <div className="text-2xl font-bold text-blue-700">{forecast.currentGrowth}%</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-sm text-green-600">Predicted Growth</div>
                      <div className="text-2xl font-bold text-green-700">{forecast.predictedGrowth}%</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Prediction Confidence</span>
                      <span className="font-medium">{forecast.confidence}%</span>
                    </div>
                    <Progress value={forecast.confidence} className="h-2" />
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Key Factors</h4>
                    <div className="flex flex-wrap gap-2">
                      {forecast.factors.map((factor, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {factor}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-4">
          <div className="grid gap-4">
            {aiInsights.map((insight, index) => {
              const Icon = insight.icon
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <Icon className={`h-6 w-6 ${insight.color} mt-1`} />
                      <div className="flex-1">
                        <CardTitle className="text-lg">{insight.title}</CardTitle>
                        <CardDescription className="mt-1">{insight.description}</CardDescription>
                      </div>
                      <Badge variant="outline">{insight.confidence}% confidence</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm font-medium text-gray-700">Recommended Action</div>
                      <div className="text-sm text-gray-600 mt-1">{insight.action}</div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-900">
                <Brain className="h-6 w-6" />
                AI Model Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-700">94.2%</div>
                  <div className="text-sm text-purple-600">Prediction Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">1,247</div>
                  <div className="text-sm text-blue-600">Data Points Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">Real-time</div>
                  <div className="text-sm text-green-600">Model Updates</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scenarios" className="space-y-4">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-700">Optimistic Scenario (30% probability)</CardTitle>
                <CardDescription>Strong market performance and favorable conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-700">+42%</div>
                    <div className="text-sm text-green-600">Portfolio Growth</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-700">18 months</div>
                    <div className="text-sm text-green-600">Target Achievement</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-700">Low</div>
                    <div className="text-sm text-green-600">Risk Level</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Base Case Scenario (50% probability)</CardTitle>
                <CardDescription>Expected market performance under normal conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-700">+24%</div>
                    <div className="text-sm text-blue-600">Portfolio Growth</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-700">24 months</div>
                    <div className="text-sm text-blue-600">Target Achievement</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-700">Medium</div>
                    <div className="text-sm text-blue-600">Risk Level</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Conservative Scenario (20% probability)</CardTitle>
                <CardDescription>Challenging market conditions and slower growth</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="text-lg font-bold text-red-700">+12%</div>
                    <div className="text-sm text-red-600">Portfolio Growth</div>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="text-lg font-bold text-red-700">36 months</div>
                    <div className="text-sm text-red-600">Target Achievement</div>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="text-lg font-bold text-red-700">Higher</div>
                    <div className="text-sm text-red-600">Risk Level</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
