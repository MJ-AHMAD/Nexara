"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/footer"
import { DhakaTime } from "@/components/dhaka-time"
import {
  BookOpen,
  Code,
  Heart,
  Users,
  Lightbulb,
  GraduationCap,
  Globe,
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function YunusInspirePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b sticky top-0 z-10 bg-background">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src="/mjahmad.png"
                alt="MJ-AHMAD Logo"
                width={40}
                height={40}
                className="object-contain rounded-full"
              />
            </Link>
            <div>
              <h1 className="text-xl font-bold">Yunus Inspire</h1>
              <p className="text-xs text-muted-foreground">An Educational Initiative by MJ-AHMAD</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">
                Educational Initiative
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Yunus Inspire</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Empowering Bangladeshi youth through education, technology, and ethical practices
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Mission & Vision */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-muted-foreground">
              Inspired by Nobel Laureate Muhammad Yunus, we aim to create sustainable educational opportunities that
              empower the next generation of Bangladeshi leaders and innovators.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5 text-blue-600" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    To create accessible, high-quality educational resources and programs that bridge the gap between
                    traditional education and the skills needed for the future, with a focus on technology,
                    entrepreneurship, and ethical leadership.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 h-5 w-5 text-blue-600" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    A Bangladesh where every young person has the opportunity to develop their full potential,
                    regardless of their background, and contribute to building a more equitable, innovative, and
                    sustainable society.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        {/* Core Focus Areas */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-12"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-4">Core Focus Areas</h2>
              <p className="text-lg text-muted-foreground">
                Our initiative focuses on three interconnected pillars to create comprehensive development
                opportunities.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <Card className="h-full border-t-4 border-t-blue-600">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Digital literacy programs for underserved communities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Scholarship opportunities for promising students</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Teacher training and curriculum development</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="h-full border-t-4 border-t-indigo-600">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="mr-2 h-5 w-5 text-indigo-600" />
                      Technology
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Coding bootcamps and software development training</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Tech innovation hubs in rural and urban areas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Open source technology solutions for local challenges</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="h-full border-t-4 border-t-purple-600">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="mr-2 h-5 w-5 text-purple-600" />
                      Ethics & Leadership
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Ethical leadership development programs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Community service and social responsibility initiatives</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Mentorship networks connecting youth with role models</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Programs & Initiatives */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Our Programs & Initiatives</h2>
            <p className="text-lg text-muted-foreground">
              Explore our diverse range of programs designed to create meaningful impact across Bangladesh.
            </p>
          </motion.div>

          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
            </TabsList>

            <TabsContent value="education">
              <motion.div
                className="grid md:grid-cols-2 gap-8"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Digital Literacy Camps</CardTitle>
                      <CardDescription>Mobile education centers reaching remote areas</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Our mobile digital literacy camps travel to remote villages across Bangladesh, providing
                        hands-on computer training, internet skills, and basic digital literacy.
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Users className="mr-2 h-4 w-4" />
                        <span>5,000+ students reached annually</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>Operating in 12 districts</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Teacher Empowerment Program</CardTitle>
                      <CardDescription>Equipping educators with modern teaching methods</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        This program trains teachers in innovative pedagogical approaches, technology integration, and
                        student-centered learning methodologies to transform classroom experiences.
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Users className="mr-2 h-4 w-4" />
                        <span>1,200+ teachers trained</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Year-round workshops</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="technology">
              <motion.div
                className="grid md:grid-cols-2 gap-8"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Code Bangladesh</CardTitle>
                      <CardDescription>Free coding bootcamps for youth</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Intensive 12-week coding bootcamps teaching web development, mobile app development, and
                        software engineering fundamentals to young Bangladeshis.
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <GraduationCap className="mr-2 h-4 w-4" />
                        <span>800+ graduates employed in tech</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>Centers in Dhaka, Chittagong, and Sylhet</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Rural Tech Hubs</CardTitle>
                      <CardDescription>Technology centers in underserved communities</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Community technology centers providing internet access, computer resources, and technology
                        training to rural communities across Bangladesh.
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>15 hubs established nationwide</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-2 h-4 w-4" />
                        <span>30,000+ community members served</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="leadership">
              <motion.div
                className="grid md:grid-cols-2 gap-8"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Youth Leadership Academy</CardTitle>
                      <CardDescription>Developing ethical leaders for tomorrow</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        A comprehensive leadership development program for young Bangladeshis, focusing on ethical
                        decision-making, community service, and social entrepreneurship.
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Users className="mr-2 h-4 w-4" />
                        <span>500+ graduates leading community initiatives</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>6-month intensive program</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Mentor Connect</CardTitle>
                      <CardDescription>Connecting youth with industry leaders</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        A mentorship platform connecting young Bangladeshis with experienced professionals and leaders
                        across various industries for guidance and career development.
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Users className="mr-2 h-4 w-4" />
                        <span>2,000+ active mentorship relationships</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Globe className="mr-2 h-4 w-4" />
                        <span>Mentors from 15+ countries</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Impact & Testimonials */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-12"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-lg text-muted-foreground">
                Since our founding, Yunus Inspire has created meaningful change across Bangladesh.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
                <div className="text-sm text-muted-foreground">Students Reached</div>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">25</div>
                <div className="text-sm text-muted-foreground">Districts Served</div>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">120+</div>
                <div className="text-sm text-muted-foreground">Partner Organizations</div>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Program Completion Rate</div>
              </motion.div>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Testimonials</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 border rounded-lg bg-background">
                      <p className="italic mb-4">
                        "Yunus Inspire's coding bootcamp completely changed my life. I went from having no technical
                        skills to becoming a full-stack developer at a leading tech company in Dhaka. The mentorship and
                        support I received were invaluable."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                          RA
                        </div>
                        <div>
                          <div className="font-medium">Rahima Akter</div>
                          <div className="text-sm text-muted-foreground">Code Bangladesh Graduate, 2022</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg bg-background">
                      <p className="italic mb-4">
                        "As a teacher from a rural school, the Teacher Empowerment Program gave me the tools and
                        confidence to transform my classroom. My students are more engaged than ever, and I've seen
                        remarkable improvements in their learning outcomes."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-3">
                          MH
                        </div>
                        <div>
                          <div className="font-medium">Mohammad Hossain</div>
                          <div className="text-sm text-muted-foreground">Teacher, Rangpur District</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
            <p className="text-lg text-muted-foreground">
              Join us in our mission to empower Bangladeshi youth through education, technology, and ethical leadership.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-blue-600" />
                    Volunteer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Share your skills and expertise by volunteering as a teacher, mentor, or program facilitator.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Teaching and training opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Mentorship programs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Event organization and support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Become a Volunteer</Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="mr-2 h-5 w-5 text-red-600" />
                    Donate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Support our programs financially to help us reach more communities and expand our impact.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>One-time or recurring donations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Sponsor a student or program</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Corporate giving opportunities</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Make a Donation</Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 h-5 w-5 text-green-600" />
                    Partner
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Collaborate with us as an organization to create greater impact through shared resources and
                    expertise.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>NGO and nonprofit partnerships</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Corporate social responsibility initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Academic and research collaborations</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Become a Partner</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        {/* Open Source Section */}
        <section className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-12"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <Badge className="mb-4">Open Source</Badge>
              <h2 className="text-3xl font-bold mb-4">Join Our Open Source Community</h2>
              <p className="text-lg text-muted-foreground">
                Yunus Inspire believes in the power of open collaboration. Our educational resources, curriculum
                materials, and technology solutions are open source and freely available.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Educational Resources</CardTitle>
                    <CardDescription>Free and open curriculum materials</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Access our complete library of educational resources, including lesson plans, teaching materials,
                      and assessment tools for various subjects and grade levels.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Lesson Plans</Badge>
                      <Badge variant="outline">Teaching Materials</Badge>
                      <Badge variant="outline">Assessment Tools</Badge>
                      <Badge variant="outline">Interactive Activities</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full flex items-center">
                      Access Resources
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Technology Solutions</CardTitle>
                    <CardDescription>Open source software for education</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Contribute to our open source technology projects designed to address educational challenges in
                      Bangladesh and similar contexts around the world.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Learning Management Systems</Badge>
                      <Badge variant="outline">Educational Apps</Badge>
                      <Badge variant="outline">Data Collection Tools</Badge>
                      <Badge variant="outline">Accessibility Solutions</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full flex items-center">
                      View GitHub Repository
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-muted-foreground">
              Have questions or want to learn more about Yunus Inspire? We'd love to hear from you.
            </p>
          </motion.div>

          <motion.div
            className="max-w-xl mx-auto"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="font-medium">+880 1336-221217</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium">info@yunusinspire.org</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Address</div>
                      <div className="font-medium">123 Innovation Street, Dhaka, Bangladesh</div>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>

      <div className="bg-muted py-6">
        <div className="container mx-auto px-4">
          <DhakaTime />
        </div>
      </div>

      <Footer />
    </div>
  )
}
