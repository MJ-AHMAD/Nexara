"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/footer"
import {
  Users,
  BookOpen,
  Briefcase,
  Heart,
  GraduationCap,
  Leaf,
  Globe,
  Building,
  BarChart3,
  CheckCircle2,
  MapPin,
  Share2,
  HandHeart,
  Handshake,
  type LucideIcon,
  ChevronRight,
  Smartphone,
  Clock,
  Github,
} from "lucide-react"

interface StatCardProps {
  icon: LucideIcon
  value: string
  label: string
  color: string
}

const StatCard = ({ icon: Icon, value, label, color }: StatCardProps) => (
  <Card className="border-none shadow-md">
    <CardContent className="p-6 flex flex-col items-center text-center">
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-3xl font-bold mb-1">{value}</h3>
      <p className="text-muted-foreground text-sm">{label}</p>
    </CardContent>
  </Card>
)

interface ProgramCardProps {
  title: string
  description: string
  icon: LucideIcon
  color: string
}

const ProgramCard = ({ title, description, icon: Icon, color }: ProgramCardProps) => (
  <Card className="border-none shadow-md h-full">
    <CardHeader className={`${color} text-white rounded-t-lg`}>
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5" />
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="p-6">
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
)

interface TestimonialProps {
  quote: string
  name: string
  role: string
  avatar: string
}

const Testimonial = ({ quote, name, role, avatar }: TestimonialProps) => (
  <Card className="h-full border-none shadow-md bg-muted/30">
    <CardContent className="p-6 flex flex-col h-full">
      <div className="flex-1">
        <p className="italic text-muted-foreground mb-4">"{quote}"</p>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <Image
          src={avatar || "/placeholder.svg"}
          alt={name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default function TrustedAllyPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/coxs-bazar-sunset.png" alt="Trusted Ally Logo" width={40} height={40} className="rounded-md" />
            <span className="font-bold text-xl">Trusted Ally</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-6">
              <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#programs" className="text-sm font-medium hover:text-primary transition-colors">
                Programs
              </Link>
              <Link href="#impact" className="text-sm font-medium hover:text-primary transition-colors">
                Impact
              </Link>
              <Link href="#get-involved" className="text-sm font-medium hover:text-primary transition-colors">
                Get Involved
              </Link>
            </div>
            <ThemeToggle />
            <Button asChild size="sm">
              <Link href="#donate">Support Us</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/coxs-bazar-sunset.png')" }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-20 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-primary text-white mb-4">Community Development Platform</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Creating bridges between resources and communities
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Trusted Ally is dedicated to empowering communities through education and sustainable development, with a
              focus on building long-term solutions and partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#get-involved">Get Involved</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-20" />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-3" variant="outline">
              ABOUT US
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
            <p className="text-muted-foreground">
              Trusted Ally was established to create sustainable bridges between resources and communities in need. We
              focus on education, infrastructure, and long-term development solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                To create meaningful connections between resources and communities, focusing on education and long-term
                development that empowers people to build better futures for themselves.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground mb-6">
                A world where all communities have equal access to resources, education, and opportunities for
                sustainable growth and self-determination.
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Community-Driven</Badge>
                <Badge variant="secondary">Sustainable</Badge>
                <Badge variant="secondary">Transparent</Badge>
                <Badge variant="secondary">Educational</Badge>
              </div>
            </div>
            <Image
              src="/education-support-hero.png"
              alt="Community Education Initiative"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-none shadow-md">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
                  <BuildingCommunity className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-lg mb-2">Community Focus</h3>
                <p className="text-muted-foreground">
                  We work directly with communities to identify their unique needs and aspirations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                  <Leaf className="h-6 w-6 text-green-600 dark:text-green-300" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-lg mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  Our solutions are designed to be environmentally and economically sustainable.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-lg mb-2">Education First</h3>
                <p className="text-muted-foreground">
                  We believe education is the foundation for long-term community development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto">
                  <Handshake className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-lg mb-2">Strong Partnerships</h3>
                <p className="text-muted-foreground">
                  We collaborate with local and international partners to maximize impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-3" variant="outline">
              OUR PROGRAMS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Create Impact</h2>
            <p className="text-muted-foreground">
              Our comprehensive programs are designed to address the core needs of communities while building lasting
              capacity for self-sufficiency.
            </p>
          </div>

          <Tabs defaultValue="education" className="mb-12">
            <TabsList className="flex justify-center mb-8 w-full max-w-2xl mx-auto">
              <TabsTrigger value="education" className="flex-1">
                <BookOpen className="h-4 w-4 mr-2" />
                Education
              </TabsTrigger>
              <TabsTrigger value="infrastructure" className="flex-1">
                <Building className="h-4 w-4 mr-2" />
                Infrastructure
              </TabsTrigger>
              <TabsTrigger value="economic" className="flex-1">
                <Briefcase className="h-4 w-4 mr-2" />
                Economic
              </TabsTrigger>
              <TabsTrigger value="health" className="flex-1">
                <Heart className="h-4 w-4 mr-2" />
                Health
              </TabsTrigger>
            </TabsList>

            <TabsContent value="education">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Educational Initiatives</h3>
                  <p className="text-muted-foreground mb-6">
                    Our educational programs focus on improving access to quality education for all community members,
                    from early childhood through adult literacy and vocational training.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>School infrastructure improvement and learning resources</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Teacher training and professional development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Digital literacy programs and computer labs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Scholarship programs for underprivileged students</span>
                    </li>
                  </ul>
                  <Button className="mt-6" asChild>
                    <Link href="#">
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <Image
                  src="/programming-course.png"
                  alt="Educational Initiative"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
            </TabsContent>

            <TabsContent value="infrastructure">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Image
                  src="/digital-network-data-visualization.png"
                  alt="Infrastructure Development"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-lg object-cover w-full order-2 md:order-1"
                />
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Infrastructure Development</h3>
                  <p className="text-muted-foreground mb-6">
                    We help communities build and maintain the physical infrastructure needed for development, focusing
                    on projects that create lasting impact.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Clean water access and sanitation systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Renewable energy solutions for remote communities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Road and bridge construction for improved access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Community centers and public spaces development</span>
                    </li>
                  </ul>
                  <Button className="mt-6" asChild>
                    <Link href="#">
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="economic">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Economic Empowerment</h3>
                  <p className="text-muted-foreground mb-6">
                    Our economic programs focus on creating sustainable livelihoods and financial independence for
                    community members through skills training and entrepreneurship support.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Microfinance and small business loans</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Vocational training and skills development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Women's economic empowerment initiatives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Market access and supply chain support</span>
                    </li>
                  </ul>
                  <Button className="mt-6" asChild>
                    <Link href="#">
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <Image
                  src="/web-development-concept.png"
                  alt="Economic Empowerment"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
            </TabsContent>

            <TabsContent value="health">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Image
                  src="/wellness-motivation-abstract.png"
                  alt="Community Health Initiative"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-lg object-cover w-full order-2 md:order-1"
                />
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Health & Wellness</h3>
                  <p className="text-muted-foreground mb-6">
                    Our health programs address both immediate needs and long-term health infrastructure, focusing on
                    prevention and sustainable healthcare solutions.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Mobile health clinics for remote communities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Maternal and child health education</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Clean water and sanitation for disease prevention</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Mental health awareness and support services</span>
                    </li>
                  </ul>
                  <Button className="mt-6" asChild>
                    <Link href="#">
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProgramCard
              title="Rural Education Initiative"
              description="Bringing quality education to remote villages through teacher training, learning materials, and improved infrastructure."
              icon={GraduationCap}
              color="bg-blue-600"
            />
            <ProgramCard
              title="Women's Empowerment Program"
              description="Supporting women through literacy, vocational training, and microfinance to become financially independent."
              icon={Users}
              color="bg-purple-600"
            />
            <ProgramCard
              title="Clean Water Project"
              description="Installing clean water systems and providing sanitation education to prevent waterborne diseases."
              icon={Leaf}
              color="bg-green-600"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-3" variant="outline">
              OUR IMPACT
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Creating Lasting Change</h2>
            <p className="text-muted-foreground">
              Our work has created meaningful impact across communities, changing lives and building sustainable
              futures.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard icon={Users} value="50,000+" label="People Impacted" color="bg-blue-600" />
            <StatCard icon={MapPin} value="25+" label="Communities Served" color="bg-green-600" />
            <StatCard icon={GraduationCap} value="15,000+" label="Students Educated" color="bg-purple-600" />
            <StatCard icon={Building} value="120+" label="Projects Completed" color="bg-amber-600" />
          </div>

          <div className="mb-12">
            <Card className="border-none shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="bg-primary text-primary-foreground p-8">
                    <h3 className="text-2xl font-bold mb-4">Our Progress</h3>
                    <p className="mb-6">
                      We continuously measure our impact and strive to improve our effectiveness in creating sustainable
                      change.
                    </p>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Educational Access</span>
                          <span>85%</span>
                        </div>
                        <Progress value={85} className="h-2 bg-white/20" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Clean Water Projects</span>
                          <span>78%</span>
                        </div>
                        <Progress value={78} className="h-2 bg-white/20" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Economic Development</span>
                          <span>62%</span>
                        </div>
                        <Progress value={62} className="h-2 bg-white/20" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Healthcare Initiatives</span>
                          <span>70%</span>
                        </div>
                        <Progress value={70} className="h-2 bg-white/20" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Sustainable Development Goals</h3>
                    <p className="text-muted-foreground mb-6">
                      Our work aligns with the UN Sustainable Development Goals to create a better and more sustainable
                      future for all.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-blue-600 text-white">SDG 4</Badge>
                        <span>Quality Education</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-red-600 text-white">SDG 3</Badge>
                        <span>Good Health</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-600 text-white">SDG 6</Badge>
                        <span>Clean Water</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-amber-600 text-white">SDG 8</Badge>
                        <span>Economic Growth</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-purple-600 text-white">SDG 5</Badge>
                        <span>Gender Equality</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-teal-600 text-white">SDG 11</Badge>
                        <span>Sustainable Communities</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Testimonials</h3>
            <p className="text-muted-foreground">
              Hear from the communities and partners we've worked with about the impact of our programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Testimonial
              quote="The education initiative brought by Trusted Ally has transformed our village. Our children now have access to quality education and resources they never had before."
              name="Rahima Begum"
              role="Village Leader, Cox's Bazar"
              avatar="/woman-portrait.png"
            />
            <Testimonial
              quote="Working with Trusted Ally has been a rewarding experience. Their dedication to sustainable development and community empowerment is truly inspiring."
              name="Kamrul Hasan"
              role="Partner Organization Director"
              avatar="/thoughtful-man-portrait.png"
            />
            <Testimonial
              quote="The teacher training program has completely changed how I approach education. I now have the skills to provide better learning experiences for my students."
              name="Dr. Fatima Ahmed"
              role="School Principal"
              avatar="/woman-professor-portrait.png"
            />
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-3" variant="outline">
              GET INVOLVED
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-muted-foreground">
              There are many ways you can contribute to our work and help create lasting change in communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-md">
              <CardHeader className="bg-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <HandHeart className="h-5 w-5" />
                  Volunteer
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  Share your skills and time to make a direct impact. We need volunteers for both field work and remote
                  support.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Teaching and educational support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Professional skills (medical, technical, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Administrative and organizational help</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="#">Become a Volunteer</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader className="bg-purple-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Donate
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  Your financial support helps us implement programs and create sustainable change in communities.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>One-time or recurring donations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Sponsor specific projects or initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>100% of donations go directly to programs</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter id="donate">
                <Button className="w-full" variant="default" asChild>
                  <Link href="#">Make a Donation</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader className="bg-green-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Handshake className="h-5 w-5" />
                  Partner
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  Organizations can partner with us to amplify impact through funding, in-kind support, or collaborative
                  projects.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Corporate social responsibility initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>NGO and foundation partnerships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Research and development collaborations</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="#">Become a Partner</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="bg-primary text-primary-foreground rounded-lg overflow-hidden shadow-lg">
            <div className="p-8">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="mb-6">Stay updated on our projects, impact stories, and opportunities to get involved.</p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2 rounded-md text-foreground w-full"
                  />
                  <Button variant="secondary">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-3" variant="outline">
              OPEN SOURCE
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Source Resources</h2>
            <p className="text-muted-foreground">
              As part of our commitment to transparency and knowledge sharing, we provide open source resources for
              community development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-none shadow-md h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  Open Source Projects
                </CardTitle>
                <CardDescription>
                  Access our publicly available development tools, educational materials, and project frameworks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Community Development Toolkit</h4>
                      <p className="text-sm text-muted-foreground">
                        Framework and resources for community-based development projects.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Educational Resources</h4>
                      <p className="text-sm text-muted-foreground">
                        Curriculum, learning materials, and teaching guides for various subjects.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <BarChart3 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Impact Measurement Tools</h4>
                      <p className="text-sm text-muted-foreground">
                        Methods and templates for tracking and evaluating development impact.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="https://github.com">
                    <Github className="mr-2 h-4 w-4" />
                    Visit GitHub Repository
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-none shadow-md h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Knowledge Base
                </CardTitle>
                <CardDescription>
                  Explore our collection of research, case studies, and best practices in community development.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Case Studies & Reports</h4>
                      <p className="text-sm text-muted-foreground">
                        Detailed analyses of our projects with lessons learned and best practices.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Video className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Training Videos</h4>
                      <p className="text-sm text-muted-foreground">
                        Educational videos on various aspects of community development and project management.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <LightbulbIconNew className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Research Papers</h4>
                      <p className="text-sm text-muted-foreground">
                        Academic and practical research on sustainable development approaches.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Access Knowledge Base
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Contribute to Our Open Source Community</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We welcome contributions from developers, educators, researchers, and anyone passionate about community
              development.
            </p>
            <Button asChild>
              <Link href="#">
                <Share2 className="mr-2 h-4 w-4" />
                Join Our Community
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Badge className="mb-3" variant="outline">
                  CONTACT US
                </Badge>
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground mb-6">
                  Have questions or want to learn more about our work? We'd love to hear from you.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Main Office</h4>
                      <p className="text-muted-foreground">Cox's Bazar, Bangladesh</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">contact@trustedally.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smartphone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-muted-foreground">+880 1336-221217</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Working Hours</h4>
                      <p className="text-muted-foreground">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button size="icon" variant="outline" asChild>
                    <Link href="#">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                  </Button>
                  <Button size="icon" variant="outline" asChild>
                    <Link href="#">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </Button>
                  <Button size="icon" variant="outline" asChild>
                    <Link href="#">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </Button>
                  <Button size="icon" variant="outline" asChild>
                    <Link href="#">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div>
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Your email"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <input
                          id="subject"
                          type="text"
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="What is this regarding?"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="w-full px-3 py-2 border rounded-md min-h-[120px]"
                          placeholder="Your message"
                        />
                      </div>
                      <Button className="w-full" type="submit">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

// Component for Icons
function BuildingCommunity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9" />
      <path d="M21 5H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <path d="M12 19v-4" />
      <path d="M8 19v-9" />
      <path d="M16 19v-9" />
    </svg>
  )
}

function Code(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function FileText(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  )
}

function Video(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  )
}

function LightbulbIconNew(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}

function Mail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function Facebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function Twitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function Linkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
