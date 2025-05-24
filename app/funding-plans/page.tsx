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
  RocketIcon,
  HeartIcon,
} from "lucide-react"

export default function FundingPlansPage() {
  const [selectedPlan, setSelectedPlan] = useState("raf")

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-900 via-blue-900 to-slate-900 text-white overflow-hidden">
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
              <DollarSignIcon className="h-4 w-4 mr-2" />
              Detailed Funding Plans
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Strategic Investment{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                Opportunities
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Comprehensive funding plans designed to maximize both financial returns and social impact through our
              proven initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Plan Selection Tabs */}
      <section className="py-20 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <Tabs value={selectedPlan} onValueChange={setSelectedPlan} className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 w-full max-w-md">
                <TabsTrigger value="raf" className="flex items-center gap-2">
                  <RocketIcon className="h-4 w-4" />
                  RAF Plan
                </TabsTrigger>
                <TabsTrigger value="cbedi" className="flex items-center gap-2">
                  <HeartIcon className="h-4 w-4" />
                  CBEDI Plan
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="raf">
              <div className="space-y-16">
                {/* RAF Overview */}
                <div className="text-center">
                  <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                    <StarIcon className="h-4 w-4 mr-2" />
                    Flagship Investment Opportunity
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Rapid Acceleration Fund (RAF)</h2>
                  <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                    Our primary growth vehicle designed to scale all three Nexara initiatives rapidly across Bangladesh
                    and internationally, with a focus on sustainable technology solutions.
                  </p>
                </div>

                {/* RAF Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Card className="bg-gradient-to-br from-blue-50 to-emerald-50 border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <DollarSignIcon className="h-10 w-10 text-emerald-600 mx-auto mb-4" />
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">$2.5M</h3>
                      <p className="text-slate-600">Funding Target</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-emerald-50 to-blue-50 border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <TrendingUpIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">2.8x</h3>
                      <p className="text-slate-600">Projected ROI</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-purple-50 to-emerald-50 border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <CalendarIcon className="h-10 w-10 text-purple-600 mx-auto mb-4" />
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">36</h3>
                      <p className="text-slate-600">Months Timeline</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-amber-50 to-blue-50 border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <UsersIcon className="h-10 w-10 text-amber-600 mx-auto mb-4" />
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">100K+</h3>
                      <p className="text-slate-600">Lives Impacted</p>
                    </CardContent>
                  </Card>
                </div>

                {/* RAF Detailed Breakdown */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Fund Allocation</h3>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Technology Development</span>
                          <span className="font-bold text-blue-600">40% ($1.0M)</span>
                        </div>
                        <Progress value={40} className="h-3" />
                        <p className="text-sm text-slate-600 mt-1">Platform scaling, AI integration, mobile apps</p>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Market Expansion</span>
                          <span className="font-bold text-emerald-600">25% ($625K)</span>
                        </div>
                        <Progress value={25} className="h-3" />
                        <p className="text-sm text-slate-600 mt-1">International markets, partnerships, localization</p>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Operations & Team</span>
                          <span className="font-bold text-purple-600">20% ($500K)</span>
                        </div>
                        <Progress value={20} className="h-3" />
                        <p className="text-sm text-slate-600 mt-1">Hiring, infrastructure, operational scaling</p>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Marketing & Growth</span>
                          <span className="font-bold text-amber-600">15% ($375K)</span>
                        </div>
                        <Progress value={15} className="h-3" />
                        <p className="text-sm text-slate-600 mt-1">Brand building, user acquisition, content</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-6">Investment Tiers</h3>
                    <div className="space-y-4">
                      <Card className="border-blue-200 bg-blue-50">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold">Seed Investor</h4>
                            <Badge className="bg-blue-600">$10K - $50K</Badge>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                              <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2" />
                              Quarterly progress reports
                            </li>
                            <li className="flex items-center">
                              <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2" />
                              Investor portal access
                            </li>
                            <li className="flex items-center">
                              <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2" />
                              Annual investor meetup
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-emerald-200 bg-emerald-50">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold">Growth Partner</h4>
                            <Badge className="bg-emerald-600">$50K - $250K</Badge>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                              <CheckCircleIcon className="h-4 w-4 text-emerald-600 mr-2" />
                              All Seed benefits
                            </li>
                            <li className="flex items-center">
                              <CheckCircleIcon className="h-4 w-4 text-emerald-600 mr-2" />
                              Monthly strategy calls
                            </li>
                            <li className="flex items-center">
                              <CheckCircleIcon className="h-4 w-4 text-emerald-600 mr-2" />
                              Advisory board invitation
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-purple-200 bg-purple-50">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold">Strategic Investor</h4>
                            <Badge className="bg-purple-600">$250K+</Badge>
                          </div>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                              <CheckCircleIcon className="h-4 w-4 text-purple-600 mr-2" />
                              All Growth Partner benefits
                            </li>
                            <li className="flex items-center">
                              <CheckCircleIcon className="h-4 w-4 text-purple-600 mr-2" />
                              Board observer rights
                            </li>
                            <li className="flex items-center">
                              <CheckCircleIcon className="h-4 w-4 text-purple-600 mr-2" />
                              Co-investment opportunities
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* RAF Timeline */}
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-center">36-Month Development Timeline</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="border-blue-200">
                      <CardHeader className="bg-blue-50">
                        <CardTitle className="text-blue-800">Year 1: Foundation</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                            <span>Core platform development</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                            <span>Team expansion (15 members)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                            <span>Bangladesh market penetration</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                            <span>Initial partnerships</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-emerald-200">
                      <CardHeader className="bg-emerald-50">
                        <CardTitle className="text-emerald-800">Year 2: Scaling</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
                            <span>International expansion</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
                            <span>AI integration & automation</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
                            <span>Revenue diversification</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
                            <span>Strategic acquisitions</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200">
                      <CardHeader className="bg-purple-50">
                        <CardTitle className="text-purple-800">Year 3: Leadership</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                            <span>Market leadership position</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                            <span>IPO preparation</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                            <span>Global impact measurement</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                            <span>Exit strategy execution</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cbedi">
              <div className="space-y-16">
                {/* CBEDI Overview */}
                <div className="text-center">
                  <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                    <MapPinIcon className="h-4 w-4 mr-2" />
                    Regional Impact Investment
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Cox's Bazar Economic Development Initiative (CBEDI)
                  </h2>
                  <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                    A targeted investment focused on sustainable economic development in Cox's Bazar region, combining
                    tourism, education, and technology for community empowerment.
                  </p>
                </div>

                {/* CBEDI Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Card className="bg-gradient-to-br from-emerald-50 to-blue-50 border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <DollarSignIcon className="h-10 w-10 text-emerald-600 mx-auto mb-4" />
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">$1.8M</h3>
                      <p className="text-slate-600">Funding Target</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-emerald-50 border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <TrendingUpIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">2.2x</h3>
                      <p className="text-slate-600">Projected ROI</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-purple-50 to-emerald-50 border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <CalendarIcon className="h-10 w-10 text-purple-600 mx-auto mb-4" />
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">30</h3>
                      <p className="text-slate-600">Months Timeline</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-amber-50 to-emerald-50 border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <UsersIcon className="h-10 w-10 text-amber-600 mx-auto mb-4" />
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">25K+</h3>
                      <p className="text-slate-600">Direct Beneficiaries</p>
                    </CardContent>
                  </Card>
                </div>

                {/* CBEDI Detailed Breakdown */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Fund Allocation</h3>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Tourism Infrastructure</span>
                          <span className="font-bold text-emerald-600">35% ($630K)</span>
                        </div>
                        <Progress value={35} className="h-3" />
                        <p className="text-sm text-slate-600 mt-1">
                          Eco-resorts, visitor centers, sustainable facilities
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Education Programs</span>
                          <span className="font-bold text-blue-600">30% ($540K)</span>
                        </div>
                        <Progress value={30} className="h-3" />
                        <p className="text-sm text-slate-600 mt-1">Schools, vocational training, digital literacy</p>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Local Business Support</span>
                          <span className="font-bold text-purple-600">20% ($360K)</span>
                        </div>
                        <Progress value={20} className="h-3" />
                        <p className="text-sm text-slate-600 mt-1">
                          Microfinance, entrepreneurship training, cooperatives
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Technology & Innovation</span>
                          <span className="font-bold text-amber-600">15% ($270K)</span>
                        </div>
                        <Progress value={15} className="h-3" />
                        <p className="text-sm text-slate-600 mt-1">Digital platforms, mobile apps, connectivity</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-6">Impact Goals</h3>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg">
                        <span className="font-medium">Jobs Created</span>
                        <span className="text-2xl font-bold text-emerald-600">2,500+</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                        <span className="font-medium">Students Educated</span>
                        <span className="text-2xl font-bold text-blue-600">5,000+</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                        <span className="font-medium">Businesses Launched</span>
                        <span className="text-2xl font-bold text-purple-600">150+</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                        <span className="font-medium">Tourism Growth</span>
                        <span className="text-2xl font-bold text-amber-600">35%</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-rose-50 rounded-lg">
                        <span className="font-medium">Income Increase</span>
                        <span className="text-2xl font-bold text-rose-600">40%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CBEDI Timeline */}
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-center">30-Month Implementation Timeline</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="border-emerald-200">
                      <CardHeader className="bg-emerald-50">
                        <CardTitle className="text-emerald-800">Phase 1: Setup (Months 1-10)</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
                            <span>Community engagement & planning</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
                            <span>Infrastructure development</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
                            <span>Educational program launch</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
                            <span>Local partnerships</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-200">
                      <CardHeader className="bg-blue-50">
                        <CardTitle className="text-blue-800">Phase 2: Growth (Months 11-20)</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                            <span>Tourism facility operations</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                            <span>Business incubation programs</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                            <span>Technology platform deployment</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                            <span>Marketing & promotion</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200">
                      <CardHeader className="bg-purple-50">
                        <CardTitle className="text-purple-800">Phase 3: Sustainability (Months 21-30)</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                            <span>Self-sustaining operations</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                            <span>Community ownership transition</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                            <span>Impact measurement & reporting</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                            <span>Expansion planning</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
              <p className="text-lg text-slate-600 mb-6">
                Join us in creating sustainable change while building a profitable investment portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/roi-calculator">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <BarChart3Icon className="mr-2 h-5 w-5" />
                    Calculate Your Returns
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
