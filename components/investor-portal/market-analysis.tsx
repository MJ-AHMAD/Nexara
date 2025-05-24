"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, BarChart3, Globe } from "lucide-react"

export function MarketAnalysis() {
  const marketData = {
    bangladesh: {
      gdpGrowth: 6.8,
      inflationRate: 5.2,
      tourismGrowth: 15.3,
      digitalAdoption: 78,
    },
    global: {
      emergingMarkets: 4.2,
      sustainableInvesting: 23.1,
      impactInvesting: 18.7,
      techAdoption: 85,
    },
  }

  const sectors = [
    {
      name: "Tourism & Hospitality",
      growth: 15.3,
      potential: "High",
      trend: "up",
      description: "Cox's Bazar and eco-tourism expansion",
    },
    {
      name: "Digital Services",
      growth: 22.7,
      potential: "Very High",
      trend: "up",
      description: "Fintech and e-commerce growth",
    },
    {
      name: "Education Technology",
      growth: 18.9,
      potential: "High",
      trend: "up",
      description: "Online learning and skill development",
    },
    {
      name: "Sustainable Energy",
      growth: 12.4,
      potential: "Medium",
      trend: "up",
      description: "Solar and renewable energy projects",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Market Analysis</h2>
        <p className="text-muted-foreground">
          Comprehensive market insights and sector analysis for informed investment decisions
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sectors">Sectors</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="forecasts">Forecasts</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Bangladesh Market
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">GDP Growth</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{marketData.bangladesh.gdpGrowth}%</span>
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                  <Progress value={marketData.bangladesh.gdpGrowth * 10} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Tourism Growth</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{marketData.bangladesh.tourismGrowth}%</span>
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                  <Progress value={marketData.bangladesh.tourismGrowth * 5} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Digital Adoption</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{marketData.bangladesh.digitalAdoption}%</span>
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                  <Progress value={marketData.bangladesh.digitalAdoption} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Global Context
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Emerging Markets</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{marketData.global.emergingMarkets}%</span>
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                  <Progress value={marketData.global.emergingMarkets * 20} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Impact Investing</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{marketData.global.impactInvesting}%</span>
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                  <Progress value={marketData.global.impactInvesting * 4} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Tech Adoption</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{marketData.global.techAdoption}%</span>
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                  <Progress value={marketData.global.techAdoption} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sectors" className="space-y-4">
          <div className="grid gap-4">
            {sectors.map((sector, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{sector.name}</CardTitle>
                      <CardDescription>{sector.description}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={sector.potential === "Very High" ? "default" : "secondary"}>
                        {sector.potential}
                      </Badge>
                      {sector.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-600" />
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Growth Rate</span>
                      <span className="font-medium">{sector.growth}%</span>
                    </div>
                    <Progress value={sector.growth * 3} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Key Market Trends</CardTitle>
              <CardDescription>Emerging trends shaping the investment landscape</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Digital Transformation Acceleration</h4>
                    <p className="text-sm text-muted-foreground">
                      Rapid adoption of digital services across all sectors, creating new investment opportunities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Sustainable Tourism Growth</h4>
                    <p className="text-sm text-muted-foreground">
                      Eco-friendly tourism initiatives gaining momentum, especially in coastal regions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Impact Investment Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      Increasing investor preference for projects with measurable social impact
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forecasts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Market Forecasts</CardTitle>
              <CardDescription>Projected market performance for the next 12-24 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-700">18-24%</div>
                    <div className="text-sm text-green-600">Expected ROI Range</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">12-18</div>
                    <div className="text-sm text-blue-600">Months to Break-even</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-700">85%</div>
                    <div className="text-sm text-purple-600">Success Probability</div>
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
