"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
  HelpCircleIcon,
  SearchIcon,
  DollarSignIcon,
  TrendingUpIcon,
  ShieldIcon,
  ClockIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react"

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  {
    question: "What is the minimum investment amount for each plan?",
    answer:
      "The Rapid Acceleration Fund (RAF) has a minimum investment of $10,000, while the Cox's Bazar Economic Development Initiative (CBEDI) has a minimum investment of $5,000. These minimums are set to ensure meaningful participation while keeping our programs accessible.",
    category: "general",
  },
  {
    question: "How are the projected returns calculated?",
    answer:
      "Our projected returns are based on comprehensive market analysis, historical performance data, business model projections, and conservative growth estimates. The RAF targets 2.8x ROI over 36 months, while CBEDI targets 2.2x ROI over 30 months. These projections include detailed financial modeling and risk assessments.",
    category: "returns",
  },
  {
    question: "What are the main risks associated with these investments?",
    answer:
      "Key risks include market volatility, execution risks, regulatory changes, economic factors, and technology adoption rates. We mitigate these through diversified strategies, experienced management, strong partnerships, and continuous monitoring. Detailed risk assessments are provided to all investors.",
    category: "risks",
  },
  {
    question: "How often will I receive updates on my investment?",
    answer:
      "Investors receive quarterly progress reports, monthly financial updates, and have 24/7 access to our investor portal. Growth Partners and Strategic Investors receive additional monthly strategy calls and priority communication.",
    category: "general",
  },
  {
    question: "Can I invest in both RAF and CBEDI simultaneously?",
    answer:
      "Yes, investors can participate in both funding plans. Many of our investors choose to diversify across both initiatives to balance growth potential with regional impact. We can help you determine the optimal allocation based on your investment goals.",
    category: "general",
  },
  {
    question: "What is the expected timeline for returns?",
    answer:
      "RAF is structured as a 36-month investment with potential for earlier partial returns starting in month 18. CBEDI is a 30-month program with quarterly distributions beginning in month 12. Both plans include detailed milestone-based payout schedules.",
    category: "timeline",
  },
  {
    question: "How is my investment protected?",
    answer:
      "Investments are protected through legal frameworks, insurance policies, escrow accounts, and transparent governance structures. We maintain detailed documentation, regular audits, and compliance with international investment standards.",
    category: "risks",
  },
  {
    question: "What happens if I need to exit my investment early?",
    answer:
      "While our investments are designed for the full term, we understand circumstances change. Early exit options may be available after 12 months with potential penalties. We also facilitate secondary market transactions between qualified investors.",
    category: "timeline",
  },
  {
    question: "How do you measure social impact alongside financial returns?",
    answer:
      "We use comprehensive impact metrics including jobs created, lives improved, educational outcomes, environmental benefits, and community development indicators. Regular impact reports are provided alongside financial updates.",
    category: "returns",
  },
  {
    question: "What due diligence materials are available?",
    answer:
      "We provide comprehensive due diligence packages including financial projections, market analysis, team backgrounds, legal documentation, risk assessments, and third-party audits. These are available upon request after initial qualification.",
    category: "general",
  },
]

export default function InvestmentFAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const categories = [
    { id: "all", label: "All Questions", icon: HelpCircleIcon },
    { id: "general", label: "General", icon: DollarSignIcon },
    { id: "returns", label: "Returns & Performance", icon: TrendingUpIcon },
    { id: "risks", label: "Risks & Security", icon: ShieldIcon },
    { id: "timeline", label: "Timeline & Process", icon: ClockIcon },
  ]

  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
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
              <HelpCircleIcon className="h-4 w-4 mr-2" />
              Investment FAQ
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Investment{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                Questions & Answers
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about our investment opportunities, processes, and what to expect as a
              Nexara investor.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-20 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <Card className="bg-white shadow-xl border-0 mb-8">
              <CardContent className="p-6">
                <div className="relative">
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    placeholder="Search for questions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-14 text-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Category Tabs */}
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
                {categories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                      <IconComponent className="h-4 w-4" />
                      <span className="hidden sm:inline">{category.label}</span>
                    </TabsTrigger>
                  )
                })}
              </TabsList>
            </Tabs>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.length === 0 ? (
                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-8 text-center">
                    <HelpCircleIcon className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-600 mb-2">No questions found</h3>
                    <p className="text-slate-500">Try adjusting your search terms or category filter.</p>
                  </CardContent>
                </Card>
              ) : (
                filteredFAQs.map((faq, index) => (
                  <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="w-full p-6 text-left hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                          {expandedItems.includes(index) ? (
                            <ChevronUpIcon className="h-5 w-5 text-slate-500 flex-shrink-0" />
                          ) : (
                            <ChevronDownIcon className="h-5 w-5 text-slate-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      {expandedItems.includes(index) && (
                        <div className="px-6 pb-6">
                          <div className="border-t border-slate-200 pt-4">
                            <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Quick Actions */}
            <div className="mt-16">
              <Card className="bg-gradient-to-r from-blue-50 to-emerald-50 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                  <p className="text-lg text-slate-600 mb-6">
                    Our investment team is here to help you understand our opportunities and find the right fit for your
                    portfolio.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                        <HelpCircleIcon className="mr-2 h-5 w-5" />
                        Contact Investment Team
                      </Button>
                    </Link>
                    <Link href="/funding-plans">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                      >
                        <ArrowRightIcon className="mr-2 h-5 w-5" />
                        View Funding Plans
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Resources</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore additional resources to help you make informed investment decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSignIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Investment Calculator</h3>
                <p className="text-slate-600 mb-6">
                  Calculate potential returns and explore different investment scenarios with our interactive tool.
                </p>
                <Link href="/roi-calculator">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Use Calculator
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUpIcon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Detailed Plans</h3>
                <p className="text-slate-600 mb-6">
                  Review comprehensive funding plans with detailed breakdowns, timelines, and projections.
                </p>
                <Link href="/funding-plans">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    View Plans
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Investor Portal</h3>
                <p className="text-slate-600 mb-6">
                  Access real-time performance data, AI insights, and comprehensive investment analytics.
                </p>
                <Link href="/investor-portal">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Access Portal
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
