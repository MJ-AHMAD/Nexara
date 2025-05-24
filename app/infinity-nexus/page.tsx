"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Cloud, Heart, Mail, Database, Cpu, Globe, BarChart3, BrainCircuit, Rocket } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SpaceVideoBackground } from "@/components/space-video-background"

export default function InfinityNexus() {
  const hubs = [
    {
      name: "Data Collection Hub",
      icon: Database,
      description: "Advanced systems for collecting and processing diverse data sources",
    },
    {
      name: "AI Research Center",
      icon: BrainCircuit,
      description: "Cutting-edge AI research and development for sustainable solutions",
    },
    {
      name: "Climate Analytics",
      icon: Cloud,
      description: "Climate data analysis and forecasting for environmental protection",
    },
    {
      name: "Space Research",
      icon: Rocket,
      description: "Collaboration with space agencies for interstellar research projects",
    },
    {
      name: "Global Partnerships",
      icon: Globe,
      description: "International collaborations with leading research institutions",
    },
    {
      name: "Quantum Computing",
      icon: Cpu,
      description: "Next-generation computing solutions for complex scientific problems",
    },
  ]

  const goals = [
    {
      timeframe: "Short-term",
      items: [
        "Establish physical infrastructure in Cox's Bazar with high-tech data labs",
        "Develop AI-powered data collection and analytics pipelines",
        "Launch global partnerships with NASA, MIT, OpenAI, UN Climate Programs",
        "Implement Zero Trust Security Model & Blockchain-based Data Protection",
        "Deploy climate change forecasting models using AI & satellite imaging",
      ],
    },
    {
      timeframe: "Mid-term",
      items: [
        "Expand to international collaboration hubs in different continents",
        "Introduce AI-powered educational platforms for global research communities",
        "Deploy IoT sensor networks for environmental data tracking",
        "Integrate Quantum Computing for large-scale scientific problem-solving",
        "Secure UN & World Bank funding to scale global environmental initiatives",
      ],
    },
    {
      timeframe: "Long-term",
      items: [
        "Establish Infinity Nexus as a recognized scientific and technology institution",
        "Provide space research data to assist global interstellar projects",
        "Expand into autonomous AI-driven decision-making systems for global sustainability",
        "Transform Cox's Bazar into a World-Class Research Hub & Knowledge City",
        "Collaborate on human-centered AI models for ethical tech evolution",
      ],
    },
  ]

  const impacts = {
    national: [
      "Establish Bangladesh's first high-tech, AI-driven data research center",
      "Position Bangladesh as a leader in global scientific innovation",
      "Enhance climate change mitigation strategies with real-time environmental analysis",
      "Boost local technological expertise, creating thousands of research jobs",
    ],
    international: [
      "Develop a universal open-source data model for global research use",
      "Partner with space agencies, top universities, and AI think tanks",
      "Provide critical data for international scientific advancements in AI & sustainability",
      "Influence future global policymaking with AI-driven climate & social analytics",
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section with Space Video Background */}
      <div
        className="relative overflow-hidden rounded-xl bg-black text-white p-8 md:p-12 mb-12"
        style={{ height: "600px" }}
      >
        <SpaceVideoBackground />

        <div className="relative z-10 max-w-3xl mt-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-white border-white/40 backdrop-blur-sm bg-black/30">
            Research & Data Hub
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-lg">Infinity Nexus</h1>
          <p className="text-xl mb-4 text-blue-100 backdrop-blur-sm bg-black/30 p-2 inline-block">
            A global-standard data hub originating in Cox's Bazar
          </p>
          <p className="text-lg mb-8 text-blue-100/90 backdrop-blur-sm bg-black/30 p-2">
            Designed to collect, process, analyze, and secure data for scientific research, climate action,
            socio-economic progress, and AI-driven knowledge innovation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-white text-blue-700 hover:bg-blue-50 backdrop-blur-sm">
              <Link href="#vision">Explore Vision</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white/40 hover:bg-white/10 backdrop-blur-sm">
              <Link href="#goals">View Goals</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <section id="vision" className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
            Our Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Built on advanced AI, blockchain security, quantum computing, and next-gen cloud infrastructure, this
            project will reshape global data accessibility and serve as a master command center for pioneering research
            in space, sustainability, and future technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub) => (
            <Card key={hub.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <hub.icon className="h-5 w-5 text-blue-600" />
                  {hub.name}
                </CardTitle>
                <CardDescription>{hub.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
            Strategic Goals
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive roadmap for transforming data research and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {goals.map((timeframe) => (
            <Card key={timeframe.timeframe} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-center">{timeframe.timeframe} Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {timeframe.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
            Expected Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transforming research capabilities and driving innovation at national and global scales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                National Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {impacts.national.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-600" />
                International Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {impacts.international.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Current Status */}
      <section id="status" className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
            Current Status
          </h2>
        </div>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-center">Conceptual Phase</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg mb-6">
              Currently in conceptual phase, seeking initial seed funding and strategic partnerships
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="gap-2">
                <Link href="#">
                  <Heart className="h-4 w-4" />
                  Support This Project
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <Link href="mailto:mjahmad2024@outlook.com">
                  <Mail className="h-4 w-4" />
                  Contact for Partnerships
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
