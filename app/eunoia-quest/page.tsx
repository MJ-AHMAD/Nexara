"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/components/footer"
import {
  Book,
  BookOpen,
  Printer,
  Globe,
  Lightbulb,
  Users,
  Github,
  Coffee,
  Database,
  Layers,
  BookMarked,
  School,
  Heart,
  Copy,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function EunoiaQuestPage() {
  // Data from the JSON file
  const eunoiaData = {
    project: {
      name: "Eunoia Quest - Quranic Research & Distribution",
      description:
        "A global initiative originating from Bangladesh to advance Quranic research, printing, and distribution while ensuring accessibility for all.",
      branding: {
        name: "Eunoia Quest",
        slogan: "Exploring the Depths of Knowledge & Inner Peace",
        logo: "assets/logo.png",
        theme: {
          primary_colors: ["#1A3D5F", "#F5C97F", "#D8B185"],
          secondary_colors: ["#000000", "#FFFFFF"],
          font_style: "Serif, Arabic Calligraphy",
        },
      },
      core_objectives: [
        "Facilitate Quranic research with open-access manuscripts.",
        "Print high-quality Quran copies for distribution globally.",
        "Ensure inclusivity by bridging Islamic education and technology.",
        "Develop AI-powered analytical tools for Quranic interpretation.",
        "Provide accessible learning platforms for students worldwide.",
      ],
      research: {
        focus_areas: [
          "Cosmology & Quranic Insights",
          "Embryology & Quranic Verses",
          "Oceanography & Natural Barriers",
          "Advanced Tafsir & Linguistic Analysis",
          "Blockchain-based Quranic Authentication",
        ],
        contributors: ["Islamic Scholars", "Scientists", "AI Experts"],
        publication_formats: ["PDF", "ePub", "Interactive Digital Modules"],
        funding_requirements: {
          total_budget: "500000 USD",
          current_balance: "75000 USD",
          funding_sources: ["Crowdfunding", "Institutional Grants", "Private Sponsors"],
          donation_links: {
            github_sponsors: "https://github.com/sponsors/MJ-AHMAD/",
            ko_fi: "https://ko-fi.com/mjahmad",
          },
        },
      },
      printing_distribution: {
        printed_copies_since_2020: "470000",
        distribution_regions: ["Bangladesh", "Pakistan", "Malaysia", "Nigeria", "Europe"],
        current_demand: "250000 copies",
        challenges: ["Financial Constraints", "Logistics Barriers"],
        funding_goal: "Secure printing & distribution for 500000 new copies",
        logistics_partners: ["Local Islamic Institutions", "International Nonprofits"],
        quality_standards: {
          paper_quality: "High GSM, non-reflective",
          ink_quality: "Fade-resistant, authentic Arabic typography",
          translation_accuracy: "Verified by Islamic scholars",
        },
      },
      digital_library: {
        accessibility: {
          multi_language_support: ["Arabic", "English", "Bengali", "Urdu"],
          "open-source resources": true,
          "interactive search": true,
        },
        features: [
          "High-resolution classical manuscripts",
          "AI-powered linguistic and tafsir analysis",
          "Voice-recognition for Quranic recitations",
        ],
      },
      education_technology: {
        student_beneficiaries: "250000+",
        tech_integration: [
          "AI-powered Tajweed Assistance",
          "Blockchain-based Quran Authenticity",
          "VR-based Quranic exploration",
        ],
        special_programs: {
          "Bangladesh-focused_initiatives": [
            "Digitizing Islamic education curricula",
            "Scholarship programs for Islamic studies",
            "Enhancing accessibility for rural students",
          ],
        },
      },
      community_involvement: {
        global_research_network: true,
        "open-source_collaborations": true,
        volunteer_contributions: ["Scholarly writing", "Translation efforts", "Printing & distribution support"],
      },
      repository_setup: {
        github_repo: "https://github.com/MJ-AHMAD/AL-QURAN-JOURNEY.git",
        structure: [
          "/README.md",
          "/CONTRIBUTING.md",
          "/CODE_OF_CONDUCT.md",
          "/docs/",
          "/src/",
          "/assets/",
          "/LICENSE",
          "/funding.json",
        ],
      },
      future_expansion: {
        next_milestones: [
          "Expand Quranic printing operations internationally",
          "Develop AI-driven Quranic research engine",
          "Enhance interactive learning experiences for students",
          "Secure additional funding for operational growth",
        ],
      },
    },
  }

  const data = eunoiaData.project
  const fundingPercentage =
    (Number.parseInt(data.research.funding_requirements.current_balance) /
      Number.parseInt(data.research.funding_requirements.total_budget)) *
    100

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f4e8] to-white dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative bg-[#1A3D5F] text-white">
        <div className="absolute inset-0 bg-[url('/placeholder-hrutm.png')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{data.branding.name}</h1>
            <p className="text-xl md:text-2xl font-serif italic mb-8">{data.branding.slogan}</p>
            <p className="text-lg mb-8">{data.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#F5C97F] text-[#1A3D5F] hover:bg-[#D8B185]">
                <Heart className="mr-2 h-4 w-4" /> Support Our Mission
              </Button>
              <Button variant="outline" className="border-[#F5C97F] text-[#F5C97F] hover:bg-[#1A3D5F]/50">
                <BookOpen className="mr-2 h-4 w-4" /> Explore Resources
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Core Objectives */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#1A3D5F] dark:text-[#F5C97F]">
            Core Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.core_objectives.map((objective, index) => (
              <Card key={index} className="border-[#1A3D5F]/20 dark:border-[#F5C97F]/20">
                <CardContent className="pt-6">
                  <div className="bg-[#1A3D5F]/10 dark:bg-[#F5C97F]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {index === 0 && <Book className="h-6 w-6 text-[#1A3D5F] dark:text-[#F5C97F]" />}
                    {index === 1 && <Printer className="h-6 w-6 text-[#1A3D5F] dark:text-[#F5C97F]" />}
                    {index === 2 && <Globe className="h-6 w-6 text-[#1A3D5F] dark:text-[#F5C97F]" />}
                    {index === 3 && <Database className="h-6 w-6 text-[#1A3D5F] dark:text-[#F5C97F]" />}
                    {index === 4 && <School className="h-6 w-6 text-[#1A3D5F] dark:text-[#F5C97F]" />}
                  </div>
                  <p className="text-lg">{objective}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs for Different Areas */}
      <section className="py-16 bg-[#f8f4e8] dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="research" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger
                value="research"
                className="data-[state=active]:bg-[#1A3D5F] data-[state=active]:text-white dark:data-[state=active]:bg-[#F5C97F] dark:data-[state=active]:text-[#1A3D5F]"
              >
                <BookMarked className="mr-2 h-4 w-4" />
                Research
              </TabsTrigger>
              <TabsTrigger
                value="printing"
                className="data-[state=active]:bg-[#1A3D5F] data-[state=active]:text-white dark:data-[state=active]:bg-[#F5C97F] dark:data-[state=active]:text-[#1A3D5F]"
              >
                <Printer className="mr-2 h-4 w-4" />
                Printing & Distribution
              </TabsTrigger>
              <TabsTrigger
                value="digital"
                className="data-[state=active]:bg-[#1A3D5F] data-[state=active]:text-white dark:data-[state=active]:bg-[#F5C97F] dark:data-[state=active]:text-[#1A3D5F]"
              >
                <Layers className="mr-2 h-4 w-4" />
                Digital Library
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="data-[state=active]:bg-[#1A3D5F] data-[state=active]:text-white dark:data-[state=active]:bg-[#F5C97F] dark:data-[state=active]:text-[#1A3D5F]"
              >
                <School className="mr-2 h-4 w-4" />
                Education & Technology
              </TabsTrigger>
            </TabsList>

            {/* Research Tab */}
            <TabsContent value="research" className="border rounded-lg p-6 bg-white dark:bg-slate-900">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-[#1A3D5F] dark:text-[#F5C97F]">
                    Research Focus Areas
                  </h3>
                  <ul className="space-y-3">
                    {data.research.focus_areas.map((area, index) => (
                      <li key={index} className="flex items-start">
                        <Lightbulb className="h-5 w-5 mr-2 text-[#F5C97F] dark:text-[#F5C97F] flex-shrink-0 mt-0.5" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-serif font-bold mt-8 mb-4 text-[#1A3D5F] dark:text-[#F5C97F]">
                    Contributors
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {data.research.contributors.map((contributor, index) => (
                      <span key={index} className="px-3 py-1 bg-[#1A3D5F]/10 dark:bg-[#F5C97F]/10 rounded-full text-sm">
                        {contributor}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-serif font-bold mt-8 mb-4 text-[#1A3D5F] dark:text-[#F5C97F]">
                    Publication Formats
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {data.research.publication_formats.map((format, index) => (
                      <span key={index} className="px-3 py-1 bg-[#1A3D5F]/10 dark:bg-[#F5C97F]/10 rounded-full text-sm">
                        {format}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1A3D5F] dark:text-[#F5C97F]">Funding Requirements</CardTitle>
                      <CardDescription>Help us reach our funding goals</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span>Current Progress</span>
                            <span className="font-medium">{fundingPercentage.toFixed(1)}%</span>
                          </div>
                          <Progress
                            value={fundingPercentage}
                            className="h-2 bg-[#1A3D5F]/20 dark:bg-[#F5C97F]/20"
                            indicatorClassName="bg-[#F5C97F] dark:bg-[#F5C97F]"
                          />
                          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                            <span>{data.research.funding_requirements.current_balance} USD</span>
                            <span>{data.research.funding_requirements.total_budget} USD</span>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Funding Sources</h4>
                          <ul className="space-y-1">
                            {data.research.funding_requirements.funding_sources.map((source, index) => (
                              <li key={index} className="text-sm">
                                {source}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col space-y-2">
                          <a
                            href={data.research.funding_requirements.donation_links.github_sponsors}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md bg-[#1A3D5F] px-4 py-2 text-sm font-medium text-white hover:bg-[#1A3D5F]/90 dark:bg-[#F5C97F] dark:text-[#1A3D5F] dark:hover:bg-[#D8B185]"
                          >
                            <Github className="mr-2 h-4 w-4" /> Support on GitHub
                          </a>
                          <a
                            href={data.research.funding_requirements.donation_links.ko_fi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md bg-[#F5C97F] px-4 py-2 text-sm font-medium text-[#1A3D5F] hover:bg-[#D8B185] dark:bg-[#1A3D5F] dark:text-white dark:hover:bg-[#1A3D5F]/90"
                          >
                            <Coffee className="mr-2 h-4 w-4" /> Support on Ko-fi
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Printing & Distribution Tab */}
            <TabsContent value="printing" className="border rounded-lg p-6 bg-white dark:bg-slate-900">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-serif font-bold mb-4 text-[#1A3D5F] dark:text-[#F5C97F]">
                      Printing & Distribution
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-[#1A3D5F]/5 dark:bg-[#F5C97F]/5 border-none">
                        <CardContent className="pt-6">
                          <p className="text-sm text-muted-foreground">Printed Copies Since 2020</p>
                          <p className="text-3xl font-bold text-[#1A3D5F] dark:text-[#F5C97F]">
                            {data.printing_distribution.printed_copies_since_2020}
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="bg-[#1A3D5F]/5 dark:bg-[#F5C97F]/5 border-none">
                        <CardContent className="pt-6">
                          <p className="text-sm text-muted-foreground">Current Demand</p>
                          <p className="text-3xl font-bold text-[#1A3D5F] dark:text-[#F5C97F]">
                            {data.printing_distribution.current_demand}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-serif font-bold mb-4 text-[#1A3D5F] dark:text-[#F5C97F]">
                      Distribution Regions
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {data.printing_distribution.distribution_regions.map((region, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#1A3D5F]/10 dark:bg-[#F5C97F]/10 rounded-full text-sm"
                        >
                          {region}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold mb-4 text-[#1A3D5F] dark:text-[#F5C97F]">Challenges</h3>
                    <ul className="space-y-2">
                      {data.printing_distribution.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-flex items-center justify-center rounded-full bg-[#1A3D5F]/10 dark:bg-[#F5C97F]/10 h-6 w-6 text-xs mr-2 flex-shrink-0">
                            {index + 1}
                          </span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1A3D5F] dark:text-[#F5C97F]">Funding Goal</CardTitle>
                      <CardDescription>{data.printing_distribution.funding_goal}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium mb-2">Logistics Partners</h4>
                          <ul className="space-y-1">
                            {data.printing_distribution.logistics_partners.map((partner, index) => (
                              <li key={index} className="text-sm">
                                {partner}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Quality Standards</h4>
                          <div className="space-y-3">
                            <div>
                              <p className="text-sm font-medium">Paper Quality</p>
                              <p className="text-sm text-muted-foreground">
                                {data.printing_distribution.quality_standards.paper_quality}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Ink Quality</p>
                              <p className="text-sm text-muted-foreground">
                                {data.printing_distribution.quality_standards.ink_quality}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Translation Accuracy</p>
                              <p className="text-sm text-muted-foreground">
                                {data.printing_distribution.quality_standards.translation_accuracy}
                              </p>
                            </div>
                          </div>
                        </div>

                        <Button className="w-full bg-[#1A3D5F] hover:bg-[#1A3D5F]/90 dark:bg-[#F5C97F] dark:text-[#1A3D5F] dark:hover:bg-[#D8B185]">
                          Support Printing & Distribution
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Digital Library Tab */}
            <TabsContent value="digital" className="border rounded-lg p-6 bg-white dark:bg-slate-900">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-6 text-[#1A3D5F] dark:text-[#F5C97F]">
                    Digital Library
                  </h3>

                  <div className="mb-8">
                    <h4 className="text-xl font-medium mb-4">Accessibility</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium mb-2">Multi-Language Support</p>
                        <div className="flex flex-wrap gap-2">
                          {data.digital_library.accessibility.multi_language_support.map((language, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-[#1A3D5F]/10 dark:bg-[#F5C97F]/10 rounded-full text-sm"
                            >
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div
                          className={`h-4 w-4 rounded-full ${data.digital_library.accessibility["open-source resources"] ? "bg-green-500" : "bg-red-500"}`}
                        ></div>
                        <span>Open-Source Resources</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div
                          className={`h-4 w-4 rounded-full ${data.digital_library.accessibility["interactive search"] ? "bg-green-500" : "bg-red-500"}`}
                        ></div>
                        <span>Interactive Search</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1A3D5F] dark:text-[#F5C97F]">Features</CardTitle>
                      <CardDescription>Advanced digital library capabilities</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {data.digital_library.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="bg-[#1A3D5F]/10 dark:bg-[#F5C97F]/10 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              {index === 0 && <BookOpen className="h-4 w-4 text-[#1A3D5F] dark:text-[#F5C97F]" />}
                              {index === 1 && <Database className="h-4 w-4 text-[#1A3D5F] dark:text-[#F5C97F]" />}
                              {index === 2 && <Layers className="h-4 w-4 text-[#1A3D5F] dark:text-[#F5C97F]" />}
                            </div>
                            <div>
                              <p>{feature}</p>
                            </div>
                          </li>
                        ))}
                      </ul>

                      <Button className="w-full mt-6 bg-[#1A3D5F] hover:bg-[#1A3D5F]/90 dark:bg-[#F5C97F] dark:text-[#1A3D5F] dark:hover:bg-[#D8B185]">
                        Explore Digital Library
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Education & Technology Tab */}
            <TabsContent value="education" className="border rounded-lg p-6 bg-white dark:bg-slate-900">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-[#1A3D5F] dark:text-[#F5C97F]">
                    Education & Technology
                  </h3>

                  <div className="mb-6">
                    <Card className="bg-[#1A3D5F]/5 dark:bg-[#F5C97F]/5 border-none">
                      <CardContent className="pt-6">
                        <p className="text-sm text-muted-foreground">Student Beneficiaries</p>
                        <p className="text-3xl font-bold text-[#1A3D5F] dark:text-[#F5C97F]">
                          {data.education_technology.student_beneficiaries}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-medium mb-4">Tech Integration</h4>
                    <ul className="space-y-3">
                      {data.education_technology.tech_integration.map((tech, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-[#1A3D5F]/10 dark:bg-[#F5C97F]/10 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            {index === 0 && <Lightbulb className="h-4 w-4 text-[#1A3D5F] dark:text-[#F5C97F]" />}
                            {index === 1 && <Database className="h-4 w-4 text-[#1A3D5F] dark:text-[#F5C97F]" />}
                            {index === 2 && <Globe className="h-4 w-4 text-[#1A3D5F] dark:text-[#F5C97F]" />}
                          </div>
                          <div>
                            <p>{tech}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1A3D5F] dark:text-[#F5C97F]">
                        Bangladesh-Focused Initiatives
                      </CardTitle>
                      <CardDescription>Special programs for local communities</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {data.education_technology.special_programs["Bangladesh-focused_initiatives"].map(
                          (initiative, index) => (
                            <li key={index} className="flex items-start">
                              <span className="inline-flex items-center justify-center rounded-full bg-[#1A3D5F]/10 dark:bg-[#F5C97F]/10 h-6 w-6 text-xs mr-2 flex-shrink-0">
                                {index + 1}
                              </span>
                              <span>{initiative}</span>
                            </li>
                          ),
                        )}
                      </ul>

                      <Button className="w-full mt-6 bg-[#1A3D5F] hover:bg-[#1A3D5F]/90 dark:bg-[#F5C97F] dark:text-[#1A3D5F] dark:hover:bg-[#D8B185]">
                        Support Educational Initiatives
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#1A3D5F] dark:text-[#F5C97F]">
            Community Involvement
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#1A3D5F]/10 dark:bg-[#F5C97F]/10 mb-4">
                  <Globe className="h-6 w-6 text-[#1A3D5F] dark:text-[#F5C97F]" />
                </div>
                <CardTitle className="text-[#1A3D5F] dark:text-[#F5C97F]">Global Research Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Join our international network of researchers, scholars, and enthusiasts collaborating on Quranic
                  studies.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 w-full border-[#1A3D5F] text-[#1A3D5F] hover:bg-[#1A3D5F] hover:text-white dark:border-[#F5C97F] dark:text-[#F5C97F] dark:hover:bg-[#F5C97F] dark:hover:text-[#1A3D5F]"
                >
                  Join Network
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#1A3D5F]/10 dark:bg-[#F5C97F]/10 mb-4">
                  <Github className="h-6 w-6 text-[#1A3D5F] dark:text-[#F5C97F]" />
                </div>
                <CardTitle className="text-[#1A3D5F] dark:text-[#F5C97F]">Open-Source Collaborations</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Contribute to our open-source projects and help improve our digital tools and resources.</p>
                <Button
                  variant="outline"
                  className="mt-4 w-full border-[#1A3D5F] text-[#1A3D5F] hover:bg-[#1A3D5F] hover:text-white dark:border-[#F5C97F] dark:text-[#F5C97F] dark:hover:bg-[#F5C97F] dark:hover:text-[#1A3D5F]"
                >
                  View GitHub
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#1A3D5F]/10 dark:bg-[#F5C97F]/10 mb-4">
                  <Users className="h-6 w-6 text-[#1A3D5F] dark:text-[#F5C97F]" />
                </div>
                <CardTitle className="text-[#1A3D5F] dark:text-[#F5C97F]">Volunteer Contributions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {data.community_involvement.volunteer_contributions.map((contribution, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1A3D5F] dark:bg-[#F5C97F] mr-2"></span>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="mt-4 w-full border-[#1A3D5F] text-[#1A3D5F] hover:bg-[#1A3D5F] hover:text-white dark:border-[#F5C97F] dark:text-[#F5C97F] dark:hover:bg-[#F5C97F] dark:hover:text-[#1A3D5F]"
                >
                  Volunteer With Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Expansion */}
      <section className="py-16 bg-[#1A3D5F] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#F5C97F]">Future Expansion</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6 text-[#F5C97F]">Next Milestones</h3>
              <ul className="space-y-4">
                {data.future_expansion.next_milestones.map((milestone, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-[#F5C97F]/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-[#F5C97F]">
                      {index + 1}
                    </div>
                    <div>
                      <p>{milestone}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F5C97F]/10 rounded-lg p-6">
              <h3 className="text-2xl font-serif font-bold mb-6 text-[#F5C97F]">Get Involved</h3>
              <p className="mb-6">
                Join us in our mission to advance Quranic research and distribution. There are many ways to contribute
                to this important work.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button className="bg-[#F5C97F] text-[#1A3D5F] hover:bg-[#D8B185]">
                  <Heart className="mr-2 h-4 w-4" /> Donate
                </Button>
                <Button variant="outline" className="border-[#F5C97F] text-[#F5C97F] hover:bg-[#F5C97F]/20">
                  <Users className="mr-2 h-4 w-4" /> Volunteer
                </Button>
                <Button variant="outline" className="border-[#F5C97F] text-[#F5C97F] hover:bg-[#F5C97F]/20">
                  <Github className="mr-2 h-4 w-4" /> Contribute
                </Button>
                <Button variant="outline" className="border-[#F5C97F] text-[#F5C97F] hover:bg-[#F5C97F]/20">
                  <Globe className="mr-2 h-4 w-4" /> Spread the Word
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repository */}
      <section className="py-16 bg-[#f8f4e8] dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6 text-[#1A3D5F] dark:text-[#F5C97F]">
              Open Source Repository
            </h2>
            <p className="mb-8">
              Our project is fully open source. You can access our code, contribute, and help us improve.
            </p>

            <div className="inline-flex items-center justify-center p-1 rounded-md bg-[#1A3D5F]/10 dark:bg-[#F5C97F]/10 mb-8">
              <code className="text-sm font-mono px-4 py-2">{data.repository_setup.github_repo}</code>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => {
                  navigator.clipboard.writeText(data.repository_setup.github_repo)
                }}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy</span>
              </Button>
            </div>

            <a
              href={data.repository_setup.github_repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#1A3D5F] px-4 py-2 text-sm font-medium text-white hover:bg-[#1A3D5F]/90 dark:bg-[#F5C97F] dark:text-[#1A3D5F] dark:hover:bg-[#D8B185]"
            >
              <Github className="mr-2 h-4 w-4" /> View on GitHub
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
