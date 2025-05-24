"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Star, TrendingUp, Shield, Clock, DollarSign } from "lucide-react"

export function InvestmentRecommendations() {
  const recommendations = [
    {
      id: 1,
      title: "Cox's Bazar Eco-Tourism Initiative",
      description: "Sustainable tourism development with strong environmental focus",
      riskLevel: "Medium",
      expectedROI: "22-28%",
      timeframe: "18-24 months",
      minInvestment: "$25,000",
      rating: 4.8,
      category: "Tourism",
      highlights: ["Government backing and support", "Growing eco-tourism market", "Strong local partnerships"],
      riskFactors: ["Weather dependency", "Regulatory changes"],
    },
    {
      id: 2,
      title: "Digital Education Platform",
      description: "AI-powered learning platform for skill development",
      riskLevel: "Low",
      expectedROI: "18-24%",
      timeframe: "12-18 months",
      minInvestment: "$15,000",
      rating: 4.9,
      category: "Technology",
      highlights: ["Scalable technology platform", "High demand for digital skills", "Recurring revenue model"],
      riskFactors: ["Technology competition", "User acquisition costs"],
    },
    {
      id: 3,
      title: "Microfinance Network Expansion",
      description: "Expanding financial inclusion through microfinance",
      riskLevel: "Medium-Low",
      expectedROI: "16-22%",
      timeframe: "24-36 months",
      minInvestment: "$50,000",
      rating: 4.6,
      category: "Finance",
      highlights: ["Proven business model", "Strong social impact", "Experienced management team"],
      riskFactors: ["Credit risk", "Economic fluctuations"],
    },
  ]

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "text-green-600 bg-green-50"
      case "Medium-Low":
        return "text-blue-600 bg-blue-50"
      case "Medium":
        return "text-yellow-600 bg-yellow-50"
      case "High":
        return "text-red-600 bg-red-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Investment Recommendations</h2>
        <p className="text-muted-foreground">
          Personalized investment opportunities based on your profile and market analysis
        </p>
      </div>

      <div className="grid gap-6">
        {recommendations.map((rec) => (
          <Card key={rec.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl">{rec.title}</CardTitle>
                    <Badge variant="outline">{rec.category}</Badge>
                  </div>
                  <CardDescription className="text-base">{rec.description}</CardDescription>
                  <div className="flex items-center gap-1">
                    {getRatingStars(rec.rating)}
                    <span className="text-sm text-muted-foreground ml-1">{rec.rating}/5.0</span>
                  </div>
                </div>
                <Badge className={getRiskColor(rec.riskLevel)}>{rec.riskLevel} Risk</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-green-600 mx-auto mb-1" />
                  <div className="text-sm font-medium text-green-700">Expected ROI</div>
                  <div className="text-lg font-bold text-green-800">{rec.expectedROI}</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <Clock className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                  <div className="text-sm font-medium text-blue-700">Timeframe</div>
                  <div className="text-lg font-bold text-blue-800">{rec.timeframe}</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <DollarSign className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                  <div className="text-sm font-medium text-purple-700">Min Investment</div>
                  <div className="text-lg font-bold text-purple-800">{rec.minInvestment}</div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <Shield className="h-5 w-5 text-orange-600 mx-auto mb-1" />
                  <div className="text-sm font-medium text-orange-700">Risk Level</div>
                  <div className="text-lg font-bold text-orange-800">{rec.riskLevel}</div>
                </div>
              </div>

              {/* Highlights and Risks */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-green-700 mb-2">Key Highlights</h4>
                  <ul className="space-y-1">
                    {rec.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-700 mb-2">Risk Factors</h4>
                  <ul className="space-y-1">
                    {rec.riskFactors.map((risk, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                        {risk}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <Button className="flex-1">Invest Now</Button>
                <Button variant="outline" className="flex-1">
                  Learn More
                </Button>
                <Button variant="ghost" size="sm">
                  Save for Later
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Portfolio Recommendation */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">Portfolio Recommendation</CardTitle>
          <CardDescription className="text-blue-700">Based on your risk profile and investment goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-700">60%</div>
                <div className="text-sm text-blue-600">Low-Medium Risk</div>
                <Progress value={60} className="mt-2 h-2" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-700">30%</div>
                <div className="text-sm text-purple-600">Medium Risk</div>
                <Progress value={30} className="mt-2 h-2" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">10%</div>
                <div className="text-sm text-green-600">High Growth</div>
                <Progress value={10} className="mt-2 h-2" />
              </div>
            </div>
            <p className="text-sm text-blue-700 text-center">
              This allocation balances growth potential with risk management for optimal returns
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
