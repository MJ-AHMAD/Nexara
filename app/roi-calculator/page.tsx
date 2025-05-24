"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import {
  TrendingUpIcon,
  CalculatorIcon,
  BarChart3Icon,
  ArrowRightIcon,
  TrendingDownIcon,
  InfoIcon,
  DownloadIcon,
} from "lucide-react"

export default function ROICalculatorPage() {
  const [selectedPlan, setSelectedPlan] = useState("raf")
  const [investmentAmount, setInvestmentAmount] = useState([50000])
  const [timeHorizon, setTimeHorizon] = useState([36])

  // RAF calculations
  const rafROI = 2.8
  const rafMinInvestment = 10000
  const rafMaxInvestment = 1000000
  const rafTimelineMonths = 36

  // CBEDI calculations
  const cbediROI = 2.2
  const cbediMinInvestment = 5000
  const cbediMaxInvestment = 500000
  const cbediTimelineMonths = 30

  const currentROI = selectedPlan === "raf" ? rafROI : cbediROI
  const currentMinInvestment = selectedPlan === "raf" ? rafMinInvestment : cbediMinInvestment
  const currentMaxInvestment = selectedPlan === "raf" ? rafMaxInvestment : cbediMaxInvestment
  const currentTimeline = selectedPlan === "raf" ? rafTimelineMonths : cbediTimelineMonths

  const calculateReturns = () => {
    const investment = investmentAmount[0]
    const months = timeHorizon[0]
    const annualizedROI = Math.pow(currentROI, 1 / (currentTimeline / 12))
    const timeAdjustedROI = Math.pow(annualizedROI, months / 12)
    const totalReturn = investment * timeAdjustedROI
    const profit = totalReturn - investment
    const annualizedReturn = (((timeAdjustedROI - 1) * 12) / months) * 100

    return {
      investment,
      totalReturn,
      profit,
      annualizedReturn,
      months,
    }
  }

  const results = calculateReturns()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatPercentage = (percentage: number) => {
    return `${percentage.toFixed(1)}%`
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-emerald-900 to-slate-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/digital-network-data-visualization.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700">
              <CalculatorIcon className="h-4 w-4 mr-2" />
              Investment Calculator
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Calculate Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                Investment Returns
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Use our interactive calculator to estimate potential returns from our Rapid Acceleration Fund and Cox's
              Bazar Economic Development Initiative.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs value={selectedPlan} onValueChange={setSelectedPlan}>
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 w-full max-w-md">
                  <TabsTrigger value="raf">RAF Calculator</TabsTrigger>
                  <TabsTrigger value="cbedi">CBEDI Calculator</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="raf">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Input Controls */}
                  <Card className="bg-white shadow-xl border-0">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-emerald-50">
                      <CardTitle className="flex items-center text-slate-900">
                        <CalculatorIcon className="h-6 w-6 mr-2 text-blue-600" />
                        Rapid Acceleration Fund (RAF)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 space-y-8">
                      <div>
                        <Label className="text-base font-semibold mb-4 block">
                          Investment Amount: {formatCurrency(investmentAmount[0])}
                        </Label>
                        <Slider
                          value={investmentAmount}
                          onValueChange={setInvestmentAmount}
                          max={rafMaxInvestment}
                          min={rafMinInvestment}
                          step={5000}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-slate-500 mt-2">
                          <span>{formatCurrency(rafMinInvestment)}</span>
                          <span>{formatCurrency(rafMaxInvestment)}</span>
                        </div>
                      </div>

                      <div>
                        <Label className="text-base font-semibold mb-4 block">
                          Investment Period: {timeHorizon[0]} months
                        </Label>
                        <Slider
                          value={timeHorizon}
                          onValueChange={setTimeHorizon}
                          max={48}
                          min={12}
                          step={6}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-slate-500 mt-2">
                          <span>12 months</span>
                          <span>48 months</span>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <InfoIcon className="h-5 w-5 mr-2 text-blue-600" />
                          RAF Key Details
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Target ROI: 2.8x over 36 months</li>
                          <li>• Focus: Technology scaling & international expansion</li>
                          <li>• Minimum investment: {formatCurrency(rafMinInvestment)}</li>
                          <li>• Expected timeline: 36 months</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Results Display */}
                  <Card className="bg-gradient-to-br from-blue-50 to-emerald-50 shadow-xl border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center text-slate-900">
                        <TrendingUpIcon className="h-6 w-6 mr-2 text-emerald-600" />
                        Investment Projection
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="text-center">
                          <p className="text-sm text-slate-600 mb-2">Initial Investment</p>
                          <p className="text-3xl font-bold text-slate-900">{formatCurrency(results.investment)}</p>
                        </div>

                        <div className="text-center">
                          <p className="text-sm text-slate-600 mb-2">Projected Total Return</p>
                          <p className="text-4xl font-bold text-emerald-600">{formatCurrency(results.totalReturn)}</p>
                        </div>

                        <div className="text-center">
                          <p className="text-sm text-slate-600 mb-2">Estimated Profit</p>
                          <p className="text-3xl font-bold text-blue-600">{formatCurrency(results.profit)}</p>
                        </div>

                        <div className="text-center">
                          <p className="text-sm text-slate-600 mb-2">Annualized Return</p>
                          <p className="text-2xl font-bold text-purple-600">
                            {formatPercentage(results.annualizedReturn)}
                          </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold mb-3">Investment Breakdown</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Investment Period:</span>
                              <span className="font-medium">{results.months} months</span>
                            </div>
                            <div className="flex justify-between">
                              <span>ROI Multiple:</span>
                              <span className="font-medium">
                                {(results.totalReturn / results.investment).toFixed(2)}x
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Monthly Growth:</span>
                              <span className="font-medium">{formatPercentage(results.annualizedReturn / 12)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="cbedi">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Input Controls */}
                  <Card className="bg-white shadow-xl border-0">
                    <CardHeader className="bg-gradient-to-r from-emerald-50 to-blue-50">
                      <CardTitle className="flex items-center text-slate-900">
                        <CalculatorIcon className="h-6 w-6 mr-2 text-emerald-600" />
                        Cox's Bazar Economic Development Initiative (CBEDI)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 space-y-8">
                      <div>
                        <Label className="text-base font-semibold mb-4 block">
                          Investment Amount: {formatCurrency(investmentAmount[0])}
                        </Label>
                        <Slider
                          value={investmentAmount}
                          onValueChange={setInvestmentAmount}
                          max={cbediMaxInvestment}
                          min={cbediMinInvestment}
                          step={2500}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-slate-500 mt-2">
                          <span>{formatCurrency(cbediMinInvestment)}</span>
                          <span>{formatCurrency(cbediMaxInvestment)}</span>
                        </div>
                      </div>

                      <div>
                        <Label className="text-base font-semibold mb-4 block">
                          Investment Period: {timeHorizon[0]} months
                        </Label>
                        <Slider
                          value={timeHorizon}
                          onValueChange={setTimeHorizon}
                          max={42}
                          min={12}
                          step={6}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-slate-500 mt-2">
                          <span>12 months</span>
                          <span>42 months</span>
                        </div>
                      </div>

                      <div className="bg-emerald-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <InfoIcon className="h-5 w-5 mr-2 text-emerald-600" />
                          CBEDI Key Details
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Target ROI: 2.2x over 30 months</li>
                          <li>• Focus: Regional development & community impact</li>
                          <li>• Minimum investment: {formatCurrency(cbediMinInvestment)}</li>
                          <li>• Expected timeline: 30 months</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Results Display */}
                  <Card className="bg-gradient-to-br from-emerald-50 to-blue-50 shadow-xl border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center text-slate-900">
                        <TrendingUpIcon className="h-6 w-6 mr-2 text-emerald-600" />
                        Investment Projection
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="text-center">
                          <p className="text-sm text-slate-600 mb-2">Initial Investment</p>
                          <p className="text-3xl font-bold text-slate-900">{formatCurrency(results.investment)}</p>
                        </div>

                        <div className="text-center">
                          <p className="text-sm text-slate-600 mb-2">Projected Total Return</p>
                          <p className="text-4xl font-bold text-emerald-600">{formatCurrency(results.totalReturn)}</p>
                        </div>

                        <div className="text-center">
                          <p className="text-sm text-slate-600 mb-2">Estimated Profit</p>
                          <p className="text-3xl font-bold text-blue-600">{formatCurrency(results.profit)}</p>
                        </div>

                        <div className="text-center">
                          <p className="text-sm text-slate-600 mb-2">Annualized Return</p>
                          <p className="text-2xl font-bold text-purple-600">
                            {formatPercentage(results.annualizedReturn)}
                          </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold mb-3">Social Impact Metrics</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Jobs Created:</span>
                              <span className="font-medium">{Math.round(results.investment / 720)} jobs</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Students Supported:</span>
                              <span className="font-medium">{Math.round(results.investment / 360)} students</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Businesses Launched:</span>
                              <span className="font-medium">{Math.round(results.investment / 12000)} businesses</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            {/* Comparison Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">Investment Plan Comparison</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-blue-200">
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="text-blue-800">Rapid Acceleration Fund (RAF)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Target ROI:</span>
                        <span className="font-bold text-blue-600">2.8x</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Timeline:</span>
                        <span className="font-medium">36 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Min Investment:</span>
                        <span className="font-medium">{formatCurrency(rafMinInvestment)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Focus:</span>
                        <span className="font-medium">Global Scaling</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Risk Level:</span>
                        <span className="font-medium text-amber-600">Medium-High</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-emerald-200">
                  <CardHeader className="bg-emerald-50">
                    <CardTitle className="text-emerald-800">Cox's Bazar Initiative (CBEDI)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Target ROI:</span>
                        <span className="font-bold text-emerald-600">2.2x</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Timeline:</span>
                        <span className="font-medium">30 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Min Investment:</span>
                        <span className="font-medium">{formatCurrency(cbediMinInvestment)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Focus:</span>
                        <span className="font-medium">Regional Impact</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Risk Level:</span>
                        <span className="font-medium text-green-600">Medium</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Ready to Invest?</h3>
                <p className="text-lg text-slate-600 mb-6">
                  Take the next step and explore detailed funding plans or schedule a consultation with our investment
                  team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/funding-plans">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <BarChart3Icon className="mr-2 h-5 w-5" />
                      View Detailed Plans
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                    >
                      <ArrowRightIcon className="mr-2 h-5 w-5" />
                      Schedule Consultation
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                    <DownloadIcon className="mr-2 h-5 w-5" />
                    Export Results
                  </Button>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-12">
              <Card className="border-amber-200 bg-amber-50">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <TrendingDownIcon className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                    <div className="text-amber-700">
                      <h4 className="font-semibold mb-2">Investment Disclaimer</h4>
                      <p className="text-sm">
                        The calculations provided are estimates based on projected performance and market analysis.
                        Actual returns may vary due to market conditions, execution risks, and other factors. Past
                        performance does not guarantee future results. Please consult with a financial advisor before
                        making investment decisions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
