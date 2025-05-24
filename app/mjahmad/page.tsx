"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Github,
  Mail,
  MessageCircle,
  Calendar,
  Award,
  BookOpen,
  Code,
  Users,
  Heart,
  Zap,
  Briefcase,
  GraduationCap,
  Target,
  Eye,
  Sparkles,
  Lightbulb,
  Send,
  Smile,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LifeDashboard } from "@/components/life-dashboard"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

export default function MJAhmadOverview() {
  const [activeTab, setActiveTab] = useState("personal-growth")

  const skills = [
    { name: "Web Development", progress: 92 },
    { name: "Leadership", progress: 88 },
    { name: "Community Building", progress: 95 },
    { name: "Project Management", progress: 85 },
    { name: "Public Speaking", progress: 80 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
                {/* Direct image instead of using fill */}
                <Image
                  src="/mj-ahmad-stylized.png"
                  alt="MJ Ahmad"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="text-center md:text-left space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">MJ AHMAD</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Visionary, Technologist, and Community Builder based in Dhaka, Bangladesh
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge variant="outline" className="px-3 py-1">
                    Founder
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    Developer
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    Mentor
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    Open Source
                  </Badge>
                </div>
              </div>
            </div>

            {/* Introduction Card */}
            <Card className="shadow-lg overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-none">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                      <span className="text-2xl">👋</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Hi, I'm @MJ-AHMAD</h3>
                      <p className="text-muted-foreground">
                        Welcome to my personal space where I share my journey, vision, and projects.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                      <Eye className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Enthusiast of Technological Innovation</h3>
                      <p className="text-muted-foreground">
                        I'm constantly exploring new technologies and their potential to transform our world.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-pink-100 dark:bg-pink-900 p-3 rounded-full">
                      <Sparkles className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Passionate Explorer</h3>
                      <p className="text-muted-foreground">
                        I am deeply passionate about exploring cutting-edge solutions and disseminating knowledge.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-full">
                      <Lightbulb className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Trend Seeker</h3>
                      <p className="text-muted-foreground">
                        Delving into the newest tech trends to stay ahead of the curve.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                      <Send className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Growth Mindset</h3>
                      <p className="text-muted-foreground">
                        Committed to personal and professional growth through ongoing education.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-100 dark:bg-cyan-900 p-3 rounded-full">
                      <Smile className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Community Builder</h3>
                      <p className="text-muted-foreground">
                        Eager to connect and collaborate with fellow technology enthusiasts.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="personal-growth" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-3xl mx-auto">
                <TabsTrigger value="personal-growth">My Journey</TabsTrigger>
                <TabsTrigger value="about">About Me</TabsTrigger>
                <TabsTrigger value="vision">My Vision</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

              {/* Personal Growth Tab */}
              <TabsContent value="personal-growth" className="mt-6 space-y-8">
                <Card className="border-none shadow-lg overflow-hidden">
                  <CardHeader className="pb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <CardTitle className="text-2xl font-bold text-center">My Personal Growth Metrics</CardTitle>
                    <CardDescription className="text-center max-w-2xl mx-auto text-blue-100">
                      Tracking my journey through innovation, learning, and technological advancement
                    </CardDescription>
                  </CardHeader>
                  <LifeDashboard />
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <Card className="shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-blue-500" />
                        Learning & Development
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500">•</span>
                          <span>
                            I continuously educate myself in emerging technologies and leadership methodologies
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500">•</span>
                          <span>
                            I regularly participate in tech conferences and workshops to stay at the cutting edge
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500">•</span>
                          <span>I dedicate time to mentorship and knowledge sharing with my community</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-amber-500" />
                        Innovation Projects
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="mr-2 text-amber-500">•</span>
                          <span>
                            INFINITY NEXUS - My comprehensive productivity suite for personal and professional growth
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-amber-500">•</span>
                          <span>TRUSTED ALLY - My community support platform focused on empowerment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-amber-500">•</span>
                          <span>
                            I actively contribute to various open-source projects to give back to the community
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-green-500" />
                      My Growth Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                        <div className="mb-1 text-sm text-muted-foreground">2023 - Present</div>
                        <h3 className="font-semibold">Expanding Global Impact</h3>
                        <p className="text-sm">
                          I'm currently focused on scaling my initiatives to reach a global audience, with particular
                          emphasis on empowering communities through technology and education.
                        </p>
                      </div>

                      <div className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                        <div className="mb-1 text-sm text-muted-foreground">2020 - 2023</div>
                        <h3 className="font-semibold">INFINITY NEXUS & TRUSTED ALLY Development</h3>
                        <p className="text-sm">
                          I conceptualized and developed the core frameworks for INFINITY NEXUS and TRUSTED ALLY,
                          establishing the foundation for these open-source initiatives.
                        </p>
                      </div>

                      <div className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                        <div className="mb-1 text-sm text-muted-foreground">2015 - 2020</div>
                        <h3 className="font-semibold">Technology Leadership & Community Building</h3>
                        <p className="text-sm">
                          I led various technology initiatives and began building communities focused on innovation and
                          social impact in Bangladesh and beyond.
                        </p>
                      </div>

                      <div className="relative pl-8">
                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                        <div className="mb-1 text-sm text-muted-foreground">Before 2015</div>
                        <h3 className="font-semibold">Education & Early Career</h3>
                        <p className="text-sm">
                          I focused on my education and early career development, laying the groundwork for my future
                          endeavors in technology and community empowerment.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* About Me Tab */}
              <TabsContent value="about" className="mt-6 space-y-8">
                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle>My Personal Journey</CardTitle>
                    <CardDescription>The path that led me to create INFINITY NEXUS & TRUSTED ALLY</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <h3 className="text-xl font-semibold">My Beginnings in Bangladesh</h3>
                    <p>
                      Born and raised in Bangladesh, I developed a deep appreciation for the power of community and the
                      potential of technology to transform lives from an early age. Growing up in a vibrant culture with
                      rich traditions, I was always fascinated by how people came together to solve problems and support
                      one another.
                    </p>

                    <h3 className="text-xl font-semibold">Finding My Purpose</h3>
                    <p>
                      My journey began with a simple question: "How can I create something that empowers others?" This
                      question has guided my path through education, career choices, and personal development. I've
                      always believed that true fulfillment comes from creating value for others and contributing to
                      something larger than oneself.
                    </p>

                    <h3 className="text-xl font-semibold">My Global Perspective</h3>
                    <p>
                      Through travel, education, and collaboration with people from diverse backgrounds, I've developed
                      a global perspective that informs my work. I believe that the best solutions emerge when we
                      combine different viewpoints, experiences, and expertise.
                    </p>

                    <h3 className="text-xl font-semibold">The Spark</h3>
                    <p>
                      The idea for INFINITY NEXUS & TRUSTED ALLY came during a period of reflection on how technology
                      could be better leveraged to connect people and resources. I envisioned a platform that would
                      transcend boundaries and empower individuals and communities worldwide. What began as a personal
                      project has evolved into an open-source initiative I've dedicated to the world.
                    </p>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-blue-500" />
                        My Educational Background
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>
                        I pursued my education with a focus on technology, business, and community development. My
                        academic journey has equipped me with the technical skills, business acumen, and social
                        understanding necessary to create meaningful solutions for complex challenges.
                      </p>

                      <p>
                        I'm a firm believer in lifelong learning. Beyond formal education, I continuously expand my
                        knowledge through online courses, workshops, reading, and hands-on projects. I'm particularly
                        interested in emerging technologies, sustainable development, and innovative approaches to
                        community building.
                      </p>

                      <p>
                        Throughout my career, I've pursued specialized training in areas such as software development,
                        project management, community organizing, and leadership. These certifications have enhanced my
                        ability to lead complex initiatives and create effective solutions.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-green-500" />
                        My Professional Experience
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>
                        My career has spanned various roles in technology, community development, and leadership. Each
                        position has contributed to my understanding of how technology can be leveraged to create
                        positive social impact and how communities can be empowered through innovative solutions.
                      </p>

                      <p>
                        Throughout my career, I've led initiatives focused on developing innovative solutions to complex
                        challenges. I believe in collaborative innovation that brings together diverse perspectives and
                        expertise to create comprehensive and effective approaches.
                      </p>

                      <p>
                        Sharing knowledge and mentoring others has been a significant aspect of my professional life.
                        I'm passionate about helping others develop their skills and realize their potential,
                        particularly in technology and community leadership.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Vision Tab */}
              <TabsContent value="vision" className="mt-6 space-y-8">
                <Card className="shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image src="/hero-vision-background.png" alt="Vision background" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 flex items-center justify-center">
                      <h2 className="text-3xl font-bold text-white">My Vision</h2>
                    </div>
                  </div>
                  <CardContent className="space-y-4 pt-6">
                    <h3 className="text-xl font-semibold">Genesis of Yunus Inspire, Trusted Ally & Infinity Nexus</h3>
                    <p>
                      I created Yunus Inspire, Trusted Ally & Infinity Nexus from my vision to build platforms that
                      empower individuals and communities worldwide. As the founder and first member, I've dedicated
                      these visions as open-source projects for everyone's benefit, while maintaining their core
                      principles and direction.
                    </p>

                    <h3 className="text-xl font-semibold">My Goal for Global Impact</h3>
                    <p>
                      My vision extends beyond creating a useful tool—I aim to foster a global movement that transforms
                      how people connect, collaborate, and create value together. I believe that by providing the right
                      tools and fostering the right mindset, we can unlock unprecedented potential in communities
                      worldwide.
                    </p>

                    <h3 className="text-xl font-semibold">Core Values I Uphold</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                      <div className="flex items-start gap-2">
                        <div className="mt-1 text-blue-500">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Accessibility</h4>
                          <p className="text-sm">
                            I believe tools should be available to everyone, regardless of financial means
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="mt-1 text-green-500">
                          <Code className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Transparency</h4>
                          <p className="text-sm">
                            I'm committed to open development, clear governance, and honest communication
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="mt-1 text-amber-500">
                          <Heart className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Community-driven</h4>
                          <p className="text-sm">
                            I guide decisions by community needs while honoring my original vision
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="mt-1 text-purple-500">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Quality</h4>
                          <p className="text-sm">
                            I'm committed to excellence in design, functionality, and user experience
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mt-4">My Future Vision</h3>
                    <p>
                      Looking ahead, I envision Yunus Inspire, Trusted Ally & Infinity Nexus evolving into a
                      comprehensive ecosystem that supports various aspects of community development, personal growth,
                      and global collaboration. While the projects are open for everyone to contribute to and benefit
                      from, I remain committed to guiding their evolution in alignment with my original vision.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Projects Tab */}
              <TabsContent value="projects" className="mt-6 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-md overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/digital-network-data-visualization.png"
                        alt="INFINITY NEXUS"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/70 flex items-center justify-center">
                        <h2 className="text-2xl font-bold text-white">INFINITY NEXUS</h2>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <p className="mb-4">
                        My comprehensive productivity suite designed to enhance personal and professional growth. This
                        platform integrates various tools for project management, learning, and collaboration.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge>Open Source</Badge>
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">Next.js</Badge>
                        <Badge variant="outline">TypeScript</Badge>
                      </div>
                      <Link href="/infinity-nexus">
                        <Button className="w-full">Explore INFINITY NEXUS</Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="shadow-md overflow-hidden">
                    <div className="relative h-48">
                      <Image src="/coxs-bazar-sunset.png" alt="TRUSTED ALLY" fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-amber-600/70 flex items-center justify-center">
                        <h2 className="text-2xl font-bold text-white">TRUSTED ALLY</h2>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <p className="mb-4">
                        My community support platform focused on empowerment and connection. TRUSTED ALLY helps
                        communities organize resources, share knowledge, and collaborate on initiatives.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge>Open Source</Badge>
                        <Badge variant="outline">Community</Badge>
                        <Badge variant="outline">Support</Badge>
                        <Badge variant="outline">Empowerment</Badge>
                      </div>
                      <Link href="/trusted-ally">
                        <Button className="w-full">Explore TRUSTED ALLY</Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="shadow-md overflow-hidden">
                    <div className="relative h-48">
                      <Image src="/yunus-inspire.png" alt="Yunus Inspire" fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-600/70 flex items-center justify-center">
                        <h2 className="text-2xl font-bold text-white">Yunus Inspire</h2>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <p className="mb-4">
                        A platform inspired by the vision of Professor Muhammad Yunus, focusing on social business and
                        sustainable development. Yunus Inspire aims to connect social entrepreneurs, investors, and
                        mentors to create positive change.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge>Open Source</Badge>
                        <Badge variant="outline">Social Business</Badge>
                        <Badge variant="outline">Sustainability</Badge>
                        <Badge variant="outline">Empowerment</Badge>
                      </div>
                      <Link href="/yunus-inspire">
                        <Button className="w-full">Explore Yunus Inspire</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>

                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle>Other Initiatives</CardTitle>
                    <CardDescription>Additional projects I've developed or contributed to</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-md">
                          <Code className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Wellness Dashboard</h3>
                          <p className="text-sm">
                            A personal wellness tracking system I developed to help individuals monitor and improve
                            their physical and mental wellbeing through data visualization and habit tracking.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-green-100 dark:bg-green-900 p-2 rounded-md">
                          <Users className="h-5 w-5 text-green-600 dark:text-green-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Feedback System</h3>
                          <p className="text-sm">
                            A comprehensive feedback collection and analysis tool I created to help organizations
                            gather, process, and act on user feedback more effectively.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-md">
                          <Target className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Project Focus</h3>
                          <p className="text-sm">
                            A productivity tool I designed to help individuals and teams maintain focus, track progress,
                            and achieve their goals through structured workflows and distraction management.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Skills Tab */}
              <TabsContent value="skills" className="mt-6 space-y-8">
                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle>My Technical & Leadership Skills</CardTitle>
                    <CardDescription>Areas where I've developed expertise throughout my journey</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">{skill.name}</span>
                            <span>{skill.progress}%</span>
                          </div>
                          <Progress value={skill.progress} className="h-2" />
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Technical Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">JavaScript</Badge>
                          <Badge variant="secondary">TypeScript</Badge>
                          <Badge variant="secondary">React</Badge>
                          <Badge variant="secondary">Next.js</Badge>
                          <Badge variant="secondary">Node.js</Badge>
                          <Badge variant="secondary">Python</Badge>
                          <Badge variant="secondary">UI/UX Design</Badge>
                          <Badge variant="secondary">Database Design</Badge>
                          <Badge variant="secondary">API Development</Badge>
                          <Badge variant="secondary">Cloud Services</Badge>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Soft Skills & Leadership</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Strategic Planning</Badge>
                          <Badge variant="secondary">Team Leadership</Badge>
                          <Badge variant="secondary">Public Speaking</Badge>
                          <Badge variant="secondary">Mentorship</Badge>
                          <Badge variant="secondary">Community Building</Badge>
                          <Badge variant="secondary">Project Management</Badge>
                          <Badge variant="secondary">Problem Solving</Badge>
                          <Badge variant="secondary">Cross-cultural Communication</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle>My Approach to Continuous Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      I believe that continuous learning is essential in today's rapidly evolving technological
                      landscape. Here's how I approach my ongoing education and skill development:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-blue-500" />
                          Structured Learning
                        </h3>
                        <p className="text-sm">
                          I regularly take courses, attend workshops, and participate in training programs to expand my
                          knowledge in specific areas.
                        </p>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <Code className="h-4 w-4 text-green-500" />
                          Hands-on Projects
                        </h3>
                        <p className="text-sm">
                          I learn by doing, taking on challenging projects that push me to develop new skills and apply
                          existing knowledge in novel ways.
                        </p>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <Users className="h-4 w-4 text-purple-500" />
                          Community Engagement
                        </h3>
                        <p className="text-sm">
                          I actively participate in tech communities, contributing to discussions and collaborating with
                          others to solve problems.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg p-8 mt-12 shadow-md">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="mb-6">
                  I'm always open to connecting with like-minded individuals, potential collaborators, and anyone
                  interested in my vision for Yunus Inspire, Trusted Ally & Infinity Nexus.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                    <Mail className="h-4 w-4" />
                    <span>contact@mjahmad.com</span>
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>Discord</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="mt-8">
              <Separator className="my-8" />
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Support My Open Source Work</h2>
                <p className="mb-6 max-w-2xl mx-auto">
                  If you find value in my projects and would like to support my continued work on open-source
                  initiatives, consider sponsoring me on GitHub or buying me a coffee.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                  <Link href="https://github.com/sponsors/MJ-AHMAD" target="_blank" rel="noopener noreferrer">
                    <Button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700">
                      <Github className="h-5 w-5" />
                      <span>Sponsor on GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://ko-fi.com/mjahmad" target="_blank" rel="noopener noreferrer">
                    <Button className="flex items-center gap-2 bg-[#13C3FF] hover:bg-[#00b1ea]">
                      <Image src="/ko-fi.png" alt="Ko-fi" width={20} height={20} />
                      <span>Support on Ko-fi</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
