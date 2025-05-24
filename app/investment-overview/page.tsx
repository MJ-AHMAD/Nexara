"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import {
  TrendingUpIcon,
  DollarSignIcon,
  UsersIcon,
  BarChart3Icon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  CalendarIcon,
  MapPinIcon,
  TrendingDownIcon,
} from "lucide-react"

export default function InvestmentOverviewPage() {
  const [selectedPlan, setSelectedPlan] = useState("raf")

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
              <TrendingUpIcon className="h-4 w-4 mr-2" />
              Investment Opportunities
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Invest in the Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                Social Impact
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join us in building sustainable solutions that create both financial returns and positive social change
              across Bangladesh and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/funding-plans">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <DollarSignIcon className="mr-2 h-5 w-5" />
                  View Funding Plans
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900"
                >
                  <BarChart3Icon className="mr-2 h-5 w-5" />
                  Calculate Returns
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Overview Stats */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSignIcon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">$4.3M</h3>
                <p className="text-slate-600">Total Funding Target</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUpIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">2.8x</h3>
                <p className="text-slate-600">Projected ROI</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">50K+</h3>
                <p className="text-slate-600">Lives Impacted</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalendarIcon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">36</h3>
                <p className="text-slate-600">Months Timeline</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Investment Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Investment Opportunities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from our carefully designed funding plans that combine financial growth with meaningful social
              impact.
            </p>
          </div>

          <Tabs value={selectedPlan} onValueChange={setSelectedPlan} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="raf">Rapid Growth Fund</TabsTrigger>
              <TabsTrigger value="cbedi">Cox's Bazar Initiative</TabsTrigger>
            </TabsList>

            <TabsContent value="raf">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                    <StarIcon className="h-4 w-4 mr-2" />
                    Flagship Investment
                  </Badge>
                  <h3 className="text-3xl font-bold mb-6">Rapid Acceleration Fund (RAF)</h3>
                  <p className="text-lg text-slate-600 mb-8">
                    Our primary growth vehicle designed to scale all three Nexara initiatives rapidly across Bangladesh
                    and internationally, with a focus on sustainable technology solutions.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Funding Target</span>
                      <span className="text-2xl font-bold text-emerald-600">$2.5M</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Projected ROI</span>
                      <span className="text-2xl font-bold text-blue-600">2.8x</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Timeline</span>
                      <span className="text-lg font-semibold">36 months</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Minimum Investment</span>
                      <span className="text-lg font-semibold">$10,000</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold mb-4">Key Focus Areas:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                        <span>Technology platform development and scaling</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                        <span>International market expansion</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                        <span>Strategic partnerships and collaborations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                        <span>Research and development initiatives</span>
                      </li>
                    </ul>
                  </div>

                  <Link href="/funding-plans">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      View Detailed Plan
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <div className="relative">
                  <Card className="bg-gradient-to-br from-blue-50 to-emerald-50 border-0 shadow-xl">
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <h4 className="text-2xl font-bold mb-2">Growth Projection</h4>
                        <p className="text-slate-600">36-month timeline</p>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Year 1</span>
                            <span className="text-sm text-slate-600">Foundation & Setup</span>
                          </div>
                          <Progress value={25} className="h-3" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Year 2</span>
                            <span className="text-sm text-slate-600">Rapid Scaling</span>
                          </div>
                          <Progress value={65} className="h-3" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Year 3</span>
                            <span className="text-sm text-slate-600">Market Leadership</span>
                          </div>
                          <Progress value={100} className="h-3" />
                        </div>
                      </div>

                      <div className="mt-8 p-4 bg-white rounded-lg">
                        <div className="text-center">
                          <p className="text-sm text-slate-600 mb-2">Expected Return</p>
                          <p className="text-3xl font-bold text-emerald-600">$7.0M</p>
                          <p className="text-sm text-slate-500">Total portfolio value</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cbedi">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                    <MapPinIcon className="h-4 w-4 mr-2" />
                    Regional Focus
                  </Badge>
                  <h3 className="text-3xl font-bold mb-6">Cox's Bazar Economic Development Initiative (CBEDI)</h3>
                  <p className="text-lg text-slate-600 mb-8">
                    A targeted investment focused on sustainable economic development in Cox's Bazar region, combining
                    tourism, education, and technology for community empowerment.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Funding Target</span>
                      <span className="text-2xl font-bold text-emerald-600">$1.8M</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Projected ROI</span>
                      <span className="text-2xl font-bold text-blue-600">2.2x</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Timeline</span>
                      <span className="text-lg font-semibold">30 months</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Minimum Investment</span>
                      <span className="text-lg font-semibold">$5,000</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold mb-4">Key Focus Areas:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                        <span>Sustainable tourism development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                        <span>Educational infrastructure and programs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                        <span>Local entrepreneurship support</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                        <span>Community resilience building</span>
                      </li>
                    </ul>
                  </div>

                  <Link href="/funding-plans">
                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                      View Detailed Plan
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <div className="relative">
                  <Card className="bg-gradient-to-br from-emerald-50 to-blue-50 border-0 shadow-xl">
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <h4 className="text-2xl font-bold mb-2">Impact Metrics</h4>
                        <p className="text-slate-600">Community development goals</p>
                      </div>

                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Jobs Created</span>
                          <span className="text-xl font-bold text-emerald-600">2,500+</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Students Supported</span>
                          <span className="text-xl font-bold text-blue-600">5,000+</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Businesses Launched</span>
                          <span className="text-xl font-bold text-purple-600">150+</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Tourism Growth</span>
                          <span className="text-xl font-bold text-amber-600">35%</span>
                        </div>
                      </div>

                      <div className="mt-8 p-4 bg-white rounded-lg">
                        <div className="text-center">
                          <p className="text-sm text-slate-600 mb-2">Expected Return</p>
                          <p className="text-3xl font-bold text-emerald-600">$3.96M</p>
                          <p className="text-sm text-slate-500">Total portfolio value</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Investment Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our streamlined process makes it easy to become part of the Nexara success story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
              <p className="text-slate-600">Schedule a call to discuss your investment goals and our opportunities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Due Diligence</h3>
              <p className="text-slate-600">
                Review detailed financial projections, market analysis, and risk assessments.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Investment Agreement</h3>
              <p className="text-slate-600">Finalize terms and complete the legal documentation process.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Monitoring</h3>
              <p className="text-slate-600">
                Access our investor portal for real-time updates and performance tracking.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule Consultation
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Risk Disclosure */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="flex items-center text-amber-800">
                  <TrendingDownIcon className="h-5 w-5 mr-2" />
                  Investment Risk Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700">
                <p className="mb-4">
                  All investments carry inherent risks, and past performance does not guarantee future results. The
                  projected returns mentioned are estimates based on current market analysis and business projections.
                </p>
                <p className="mb-4">
                  Factors that may affect returns include market conditions, regulatory changes, economic factors, and
                  execution risks. We recommend consulting with a financial advisor before making investment decisions.
                </p>
                <p>
                  For detailed risk analysis and mitigation strategies, please review our comprehensive investment
                  documentation or contact our investment team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
