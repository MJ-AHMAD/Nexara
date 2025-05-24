"use client"

import { useState, useEffect } from "react"
import { Footer } from "@/components/footer"
import { OpenSourceBanner } from "@/components/open-source-banner"
import { StatsSection } from "@/components/stats-section"
import { ResourcesSection } from "@/components/resources-section"
import { DhakaTime } from "@/components/dhaka-time"
import { CosmicVisualization } from "@/components/cosmic-visualization"
import { CommunityProgress } from "@/components/community-progress"
import { CommunityContributors } from "@/components/community-contributors"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRightIcon,
  CodeIcon,
  UsersIcon,
  BookIcon,
  GlobeIcon,
  HeartIcon,
  LightbulbIcon,
  RocketIcon,
  StarIcon,
  GitBranchIcon,
  GitPullRequestIcon,
  CheckCircleIcon,
  TrendingUpIcon,
  ZapIcon,
  RefreshCwIcon,
  ArrowRight,
} from "lucide-react"
import { FeaturedInitiatives } from "@/components/featured-initiatives"
import { BarChart2Icon } from "lucide-react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      {/* Open Source Banner as Header */}
      <OpenSourceBanner />

      <main className="min-h-screen">
        {/* Hero Section for Nexara */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background with gradient and pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 z-0">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "url('/digital-network-data-visualization.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                mixBlendMode: "overlay",
              }}
            ></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,64,175,0.3),transparent_60%)]"></div>
          </div>

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                  <StarIcon className="h-4 w-4 mr-2" />
                  <span>Unifying Vision & Innovation</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Connecting Innovation with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                    Social Impact
                  </span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 max-w-xl">
                  Nexara brings together three transformative initiatives to create a unified platform for positive
                  change and technological advancement.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/projects">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 border-0"
                    >
                      Explore Projects
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="https://github.com/MJ-AHMAD/mjahmad.git" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
                    >
                      View on GitHub
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:block"
              >
                <div className="relative h-[400px] w-full">
                  <div className="absolute top-0 right-0 w-[90%] h-[90%] bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-lg backdrop-blur-sm border border-white/10"></div>
                  <div className="absolute bottom-0 left-0 w-[90%] h-[90%] bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-lg backdrop-blur-sm border border-white/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CosmicVisualization />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  className="w-1.5 h-1.5 bg-white rounded-full mt-2"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-white dark:bg-slate-950">
          <div className className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Nexara exists to bridge the gap between technological innovation and social impact, creating sustainable
                solutions for tomorrow's challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700">
                <CardContent className="pt-6">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                    <LightbulbIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Inspire Innovation</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    We foster creative thinking and innovative approaches to solving complex social and technological
                    challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700">
                <CardContent className="pt-6">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                    <HeartIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Build Trust</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    We create reliable support networks and transparent systems that communities can depend on for
                    sustainable development.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700">
                <CardContent className="pt-6">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-4">
                    <GlobeIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Connect Globally</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    We bridge geographical and cultural divides to create a global network of change-makers and
                    innovators.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Initiatives with Tabs */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Core Initiatives</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Explore our three transformative projects working together to create lasting positive change.
              </p>
            </div>

            <Tabs defaultValue="yunus" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-3 w-full max-w-2xl">
                  <TabsTrigger value="yunus">Yunus Inspire</TabsTrigger>
                  <TabsTrigger value="trusted">Trusted Ally</TabsTrigger>
                  <TabsTrigger value="infinity">Infinity Nexus</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="yunus">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
                      <RocketIcon className="h-4 w-4 mr-2" />
                      <span>Social Entrepreneurship</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Yunus Inspire</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      Inspired by Nobel Laureate Muhammad Yunus, this initiative empowers social entrepreneurs with
                      resources, mentorship, and networks to create sustainable businesses that address critical social
                      challenges.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Microfinance and social business principles</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Entrepreneurship training and mentorship</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span>Sustainable development solutions</span>
                      </li>
                    </ul>
                    <Link href="/yunus-inspire">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Learn more about Yunus Inspire
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-[400px]">
                    <Image
                      src="/yunus-ideals-concept.png"
                      alt="Social Business and Microfinance - Dr. Muhammad Yunus's Legacy"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white">
                        <p className="font-medium mb-2 text-lg">
                          "Social business is a cause-driven business that is financially sustainable."
                        </p>
                        <p className="text-sm text-blue-200">— Dr. Muhammad Yunus, Nobel Peace Prize Laureate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="trusted">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-4">
                      <HeartIcon className="h-4 w-4 mr-2" />
                      <span>Community Development</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Trusted Ally</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      Building trust and support networks for vulnerable communities, with a focus on Cox's Bazar,
                      creating sustainable development pathways and fostering resilience through education and
                      empowerment.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" />
                        <span>Educational support and resources</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" />
                        <span>Community-led development initiatives</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" />
                        <span>Resilience building and capacity development</span>
                      </li>
                    </ul>
                    <Link href="/trusted-ally">
                      <Button className="bg-emerald-600 hover:bg-emerald-700">
                        Learn more about Trusted Ally
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-[400px]">
                    <Image
                      src="/trusted-ally-concept.png"
                      alt="Community Development and Education - Trusted Ally Initiative"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white">
                        <p className="font-medium mb-2 text-lg">
                          "Trust is the foundation upon which sustainable community development is built."
                        </p>
                        <p className="text-sm text-emerald-200">— Trusted Ally Initiative</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="infinity">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
                      <ZapIcon className="h-4 w-4 mr-2" />
                      <span>Technological Innovation</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Infinity Nexus</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      Exploring the intersection of technology and human potential to create innovative solutions for
                      tomorrow's challenges, with a focus on data-driven approaches to climate action and sustainable
                      development.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                        <span>Data visualization and analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                        <span>Climate action technology</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                        <span>Open source innovation platforms</span>
                      </li>
                    </ul>
                    <Link href="/infinity-nexus">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        Learn more about Infinity Nexus
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-[400px]">
                    <Image
                      src="/infinity-nexus-concept.png"
                      alt="Technological Innovation and Data-Driven Solutions - Infinity Nexus Initiative"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-white">
                        <p className="font-medium mb-2">
                          "Technology is most powerful when it empowers everyone and serves humanity."
                        </p>
                        <p className="text-sm">— Infinity Nexus Vision</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose Nexara</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Our unified approach creates unique advantages for communities, developers, and change-makers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <RefreshCwIcon className="h-6 w-6" />,
                  title: "Integrated Approach",
                  description:
                    "We combine social entrepreneurship, community development, and technological innovation into a cohesive ecosystem.",
                  color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
                },
                {
                  icon: <GitBranchIcon className="h-6 w-6" />,
                  title: "Open Source",
                  description:
                    "All our tools and resources are open source, allowing for collaborative development and widespread adoption.",
                  color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
                },
                {
                  icon: <TrendingUpIcon className="h-6 w-6" />,
                  title: "Scalable Solutions",
                  description: "Our initiatives are designed to scale from local communities to global implementation.",
                  color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
                },
                {
                  icon: <UsersIcon className="h-6 w-6" />,
                  title: "Community-Centered",
                  description:
                    "We put communities at the center of our work, ensuring solutions address real needs and create lasting impact.",
                  color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
                },
                {
                  icon: <GitPullRequestIcon className="h-6 w-6" />,
                  title: "Collaborative Development",
                  description:
                    "We foster collaboration between developers, social entrepreneurs, and community leaders.",
                  color: "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400",
                },
                {
                  icon: <BookIcon className="h-6 w-6" />,
                  title: "Knowledge Sharing",
                  description:
                    "We document and share our learnings, methodologies, and best practices to benefit the wider community.",
                  color: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card className="h-full border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className={`rounded-full w-12 h-12 flex items-center justify-center ${feature.color} mb-4`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dhaka Time */}
        <div className="bg-slate-50 dark:bg-slate-900 py-6 border-y border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4">
            <DhakaTime />
          </div>
        </div>

        {/* Project Highlights Section - Replacing redundant "Learning Through Projects" */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-transparent dark:to-transparent z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 opacity-0 dark:opacity-100 transition-opacity duration-300 z-0"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-slate-900 dark:text-white"
              >
                Project Highlights
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-base md:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto"
              >
                Recent achievements and key milestones from Yunus Inspire, Trusted Ally & Infinity Nexus
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Yunus Inspire Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="will-change-transform"
              >
                <Card className="overflow-hidden h-full border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <Image
                      src="/mountain-climber-sunrise.png"
                      alt="Entrepreneurship Workshop"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">Latest Achievement</span>
                      <h3 className="text-lg md:text-xl font-bold text-white mt-1">Entrepreneurship Workshop</h3>
                    </div>
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 mb-4">
                      Successfully conducted a 3-day workshop for 50 aspiring social entrepreneurs, providing mentorship
                      and resources for sustainable business development.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500 dark:text-slate-400">2 weeks ago</span>
                      <Button
                        asChild
                        variant="outline"
                        className="border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
                      >
                        <Link href="/yunus-inspire">
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Trusted Ally Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="will-change-transform"
              >
                <Card className="overflow-hidden h-full border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <Image
                      src="/education-support-hero.png"
                      alt="Education Support Program"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-2 py-1 bg-emerald-600 text-white text-xs rounded-full">Ongoing Project</span>
                      <h3 className="text-lg md:text-xl font-bold text-white mt-1">Education Support Program</h3>
                    </div>
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 mb-4">
                      Launched a new education support program in Cox's Bazar, providing learning materials and
                      resources to 200+ students in underserved communities.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500 dark:text-slate-400">1 month ago</span>
                      <Button
                        asChild
                        variant="outline"
                        className="border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
                      >
                        <Link href="/trusted-ally">
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Infinity Nexus Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="will-change-transform"
              >
                <Card className="overflow-hidden h-full border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <Image
                      src="/digital-network-data-visualization.png"
                      alt="Climate Data Platform"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">New Release</span>
                      <h3 className="text-lg md:text-xl font-bold text-white mt-1">Climate Data Platform</h3>
                    </div>
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 mb-4">
                      Released version 2.0 of our open-source climate data visualization platform, now featuring
                      predictive analytics and community contribution tools.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500 dark:text-slate-400">3 days ago</span>
                      <Button
                        asChild
                        variant="outline"
                        className="border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
                      >
                        <Link href="/infinity-nexus">
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Real-world examples of how our initiatives are transforming lives and communities.
              </p>
            </div>
            <FeaturedInitiatives />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Collective Impact</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Together, we're making a measurable difference in communities across Bangladesh and beyond.
              </p>
            </div>
            <StatsSection />
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Learning Resources</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Access tools and resources to support your journey of continuous learning and personal development.
              </p>
            </div>
            <ResourcesSection />
          </div>
        </section>

        {/* Community Progress */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Project Progress</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Track our journey in building and expanding the Nexara ecosystem.
              </p>
            </div>
            <CommunityProgress />
          </div>
        </section>

        {/* Community Contributors */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Contributors</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Meet the amazing people behind Yunus Inspire, Trusted Ally & Infinity Nexus who are driving innovation
                and positive change.
              </p>
            </div>
            <CommunityContributors />
          </div>
        </section>

        {/* Investment Opportunity Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 to-blue-900 text-white relative overflow-hidden">
          {/* Background elements */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('/abstract-geometric-mj.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              mixBlendMode: "overlay",
            }}
          ></div>

          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Investment Opportunities</h2>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
                Join us in building the future of social impact technology. Explore our funding plans and become part of
                the Nexara success story.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6">
                    <TrendingUpIcon className="h-10 w-10 text-emerald-300 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Rapid Growth Fund</h3>
                    <p className="text-emerald-100 mb-4">
                      $2.5M funding target with projected 2.8x ROI within 36 months.
                    </p>
                    <Link href="/funding-plans" className="text-emerald-300 hover:text-white inline-flex items-center">
                      View Details <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6">
                    <GlobeIcon className="h-10 w-10 text-blue-300 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Cox's Bazar Initiative</h3>
                    <p className="text-emerald-100 mb-4">
                      $1.8M regional investment with 35% projected business growth.
                    </p>
                    <Link href="/funding-plans" className="text-blue-300 hover:text-white inline-flex items-center">
                      Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6">
                    <BarChart2Icon className="h-10 w-10 text-purple-300 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Investor Portal</h3>
                    <p className="text-emerald-100 mb-4">
                      AI-powered tracking with real-time ROI monitoring and analytics.
                    </p>
                    <Link href="/investor-portal" className="text-purple-300 hover:text-white inline-flex items-center">
                      Access Portal <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/investment-overview">
                  <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50">
                    <TrendingUpIcon className="mr-2 h-5 w-5" />
                    Explore Investment Options
                  </Button>
                </Link>
                <Link href="/roi-calculator">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-emerald-800 border-emerald-600 text-white hover:bg-emerald-700"
                  >
                    <BarChart2Icon className="mr-2 h-5 w-5" />
                    Calculate ROI
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
          {/* Background elements */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('/abstract-geometric-mj.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              mixBlendMode: "overlay",
            }}
          ></div>

          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Nexara Community</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Whether you're a developer, social entrepreneur, community leader, or simply passionate about creating
                positive change, there's a place for you in our community.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6">
                    <CodeIcon className="h-10 w-10 text-blue-300 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Contribute Code</h3>
                    <p className="text-blue-100 mb-4">
                      Help build the tools and platforms that power our initiatives and create impact.
                    </p>
                    <Link
                      href="https://github.com/MJ-AHMAD/mjahmad.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-white inline-flex items-center"
                    >
                      View on GitHub <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6">
                    <UsersIcon className="h-10 w-10 text-emerald-300 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Join a Project</h3>
                    <p className="text-blue-100 mb-4">
                      Participate in one of our three core initiatives and help drive their mission forward.
                    </p>
                    <Link href="/projects" className="text-emerald-300 hover:text-white inline-flex items-center">
                      Explore Projects <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6">
                    <BookIcon className="h-10 w-10 text-purple-300 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Share Knowledge</h3>
                    <p className="text-blue-100 mb-4">
                      Contribute to our documentation, tutorials, and educational resources.
                    </p>
                    <Link href="/docs" className="text-purple-300 hover:text-white inline-flex items-center">
                      View Documentation <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div>

              <Link href="/community">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  Join Our Community
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Project Resources */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Project Resources</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Access the tools and documentation you need to understand and contribute to Nexara.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <CodeIcon className="h-10 w-10 text-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Developer Resources</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      Access documentation, APIs, and tools to contribute to the Nexara ecosystem.
                    </p>
                    <Link
                      href="/docs"
                      className="text-blue-500 hover:text-blue-700 font-medium inline-flex items-center"
                    >
                      View documentation <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <BookIcon className="h-10 w-10 text-emerald-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Governance</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      Learn about our project governance, code of conduct, and decision-making processes.
                    </p>
                    <Link
                      href="/governance"
                      className="text-emerald-500 hover:text-emerald-700 font-medium inline-flex items-center"
                    >
                      Read governance <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <UsersIcon className="h-10 w-10 text-purple-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Community</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      Join our community of contributors, developers, and change-makers.
                    </p>
                    <Link
                      href="/community"
                      className="text-purple-500 hover:text-purple-700 font-medium inline-flex items-center"
                    >
                      Join community <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
