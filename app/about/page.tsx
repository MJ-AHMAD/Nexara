import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Target, Heart, Globe, Lightbulb, Shield, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { InitiativeIndicator } from "@/components/initiative-indicator"

export const metadata: Metadata = {
  title: "About Nexara - Empowering Communities Through Innovation",
  description:
    "Learn about Nexara's mission to empower communities through education, technology, and sustainable development. Discover our initiatives: Yunus Inspire, Trusted Ally & Infinity Nexus.",
  keywords: "Nexara, community empowerment, education, technology, sustainable development, social impact",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-emerald-600/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6">
              <span className="text-sm font-medium text-gray-700">About Nexara</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Empowering Communities Through Innovation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Nexara is a comprehensive platform dedicated to transforming communities through education, technology,
              and sustainable development initiatives. We bridge the gap between innovation and social impact through
              our three core initiatives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group">
                <Link href="/overview" className="flex items-center">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl mx-auto mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="initiatives">Initiatives</TabsTrigger>
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">What is Nexara?</h2>
                  <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                    <p>
                      Nexara represents a comprehensive ecosystem of initiatives designed to address the most pressing
                      challenges facing communities worldwide. Through our three core initiatives, we create sustainable
                      solutions that empower individuals and transform societies.
                    </p>
                    <p>
                      Our approach combines cutting-edge technology with grassroots community engagement, ensuring that
                      innovation serves humanity's greatest needs. We believe in the power of education, the potential
                      of technology, and the importance of sustainable development.
                    </p>
                    <p>
                      From educational empowerment through Yunus Inspire, to crisis response via Trusted Ally, and
                      technological innovation through Infinity Nexus, we work across multiple domains to create lasting
                      positive change in communities globally.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/digital-network-data-visualization.png"
                      alt="Community empowerment through technology and innovation"
                      width={500}
                      height={500}
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Impact Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Core Initiatives</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-emerald-50 dark:bg-emerald-900/20">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Communities Served</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-purple-50 dark:bg-purple-900/20">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Lives Impacted</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-amber-50 dark:bg-amber-900/20">
                  <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Support Available</div>
                </div>
              </div>

              {/* Core Values */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-center">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4">
                        <Globe className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">Global Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Creating solutions that transcend borders and benefit communities worldwide.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mb-4">
                        <Heart className="h-6 w-6 text-emerald-600" />
                      </div>
                      <CardTitle className="text-lg">Compassion</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Approaching every challenge with empathy and understanding for human needs.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mb-4">
                        <Lightbulb className="h-6 w-6 text-purple-600" />
                      </div>
                      <CardTitle className="text-lg">Innovation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Leveraging cutting-edge technology to solve complex social challenges.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6 text-amber-600" />
                      </div>
                      <CardTitle className="text-lg">Transparency</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Maintaining open communication and accountability in all our endeavors.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Initiative Overview */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-center">Our Three Pillars</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="text-center hover:shadow-lg transition-shadow border-blue-200 dark:border-blue-800">
                    <CardHeader>
                      <div className="mx-auto mb-4">
                        <InitiativeIndicator initiative="yunus" className="scale-150" />
                      </div>
                      <CardTitle className="text-lg text-blue-700 dark:text-blue-300">Yunus Inspire</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Educational empowerment and social innovation inspired by Nobel Laureate Professor Muhammad
                        Yunus.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow border-emerald-200 dark:border-emerald-800">
                    <CardHeader>
                      <div className="mx-auto mb-4">
                        <InitiativeIndicator initiative="trusted" className="scale-150" />
                      </div>
                      <CardTitle className="text-lg text-emerald-700 dark:text-emerald-300">Trusted Ally</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Comprehensive community support and crisis response system for vulnerable populations.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow border-purple-200 dark:border-purple-800">
                    <CardHeader>
                      <div className="mx-auto mb-4">
                        <InitiativeIndicator initiative="infinity" className="scale-150" />
                      </div>
                      <CardTitle className="text-lg text-purple-700 dark:text-purple-300">Infinity Nexus</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Technology innovation and digital transformation solutions for sustainable development.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Initiatives Tab */}
            <TabsContent value="initiatives" className="space-y-12">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold">Our Three Core Initiatives</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Each initiative addresses specific aspects of community development, working together to create
                  comprehensive solutions for sustainable growth and empowerment.
                </p>
              </div>

              <div className="space-y-8">
                {/* Yunus Inspire */}
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                    <div className="flex items-center gap-3">
                      <InitiativeIndicator initiative="yunus" className="scale-125" />
                      <div>
                        <CardTitle className="text-2xl text-blue-700 dark:text-blue-300">Yunus Inspire</CardTitle>
                        <CardDescription className="text-blue-600 dark:text-blue-400">
                          Educational Empowerment & Social Innovation
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Inspired by Nobel Laureate Professor Muhammad Yunus, this initiative focuses on educational
                      empowerment and social innovation. We develop programs that provide quality education, skill
                      development, and entrepreneurship opportunities to underserved communities.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Education</Badge>
                      <Badge variant="secondary">Microfinance</Badge>
                      <Badge variant="secondary">Social Business</Badge>
                      <Badge variant="secondary">Youth Development</Badge>
                    </div>
                    <Button variant="outline" asChild>
                      <Link href="/yunus-inspire">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Trusted Ally */}
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20">
                    <div className="flex items-center gap-3">
                      <InitiativeIndicator initiative="trusted" className="scale-125" />
                      <div>
                        <CardTitle className="text-2xl text-emerald-700 dark:text-emerald-300">Trusted Ally</CardTitle>
                        <CardDescription className="text-emerald-600 dark:text-emerald-400">
                          Community Support & Crisis Response
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      A comprehensive support system designed to assist communities during times of crisis and ongoing
                      challenges. We provide emergency response, mental health support, and long-term recovery
                      assistance, particularly in vulnerable coastal areas like Cox's Bazar.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Crisis Response</Badge>
                      <Badge variant="secondary">Mental Health</Badge>
                      <Badge variant="secondary">Community Support</Badge>
                      <Badge variant="secondary">Disaster Relief</Badge>
                    </div>
                    <Button variant="outline" asChild>
                      <Link href="/trusted-ally">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Infinity Nexus */}
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
                    <div className="flex items-center gap-3">
                      <InitiativeIndicator initiative="infinity" className="scale-125" />
                      <div>
                        <CardTitle className="text-2xl text-purple-700 dark:text-purple-300">Infinity Nexus</CardTitle>
                        <CardDescription className="text-purple-600 dark:text-purple-400">
                          Technology Innovation & Digital Transformation
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Our technology-focused initiative that develops innovative digital solutions for community
                      challenges. We create platforms, tools, and systems that enhance connectivity, improve access to
                      services, and enable sustainable development through technology.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Technology</Badge>
                      <Badge variant="secondary">Digital Innovation</Badge>
                      <Badge variant="secondary">Platform Development</Badge>
                      <Badge variant="secondary">AI & Automation</Badge>
                    </div>
                    <Button variant="outline" asChild>
                      <Link href="/infinity-nexus">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Mission Tab */}
            <TabsContent value="mission" className="space-y-12">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold">Our Mission & Vision</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  We are committed to creating a world where every community has access to the tools, knowledge, and
                  support needed to thrive in the 21st century.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                        <Target className="h-5 w-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">Our Mission</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      To empower communities worldwide through innovative education, sustainable technology solutions,
                      and comprehensive support systems that address both immediate needs and long-term development
                      goals.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Provide accessible, quality education to underserved communities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Develop technology solutions that address real-world challenges</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Build resilient support systems for crisis response and recovery</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                        <Rocket className="h-5 w-5 text-purple-600" />
                      </div>
                      <CardTitle className="text-xl">Our Vision</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      A world where every community, regardless of geographic location or economic status, has the
                      opportunity to achieve sustainable prosperity through education, innovation, and mutual support.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Global network of empowered, self-sustaining communities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Technology as a bridge to opportunity and equality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Sustainable development that preserves our planet for future generations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Impact Areas */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-center">Areas of Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold">Education & Skills</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Providing quality education, vocational training, and digital literacy programs to build human
                      capital.
                    </p>
                  </div>
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold">Health & Wellbeing</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Supporting mental health, healthcare access, and community wellness through comprehensive
                      programs.
                    </p>
                  </div>
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold">Sustainable Development</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Creating environmentally conscious solutions that promote long-term community prosperity.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Team Tab */}
            <TabsContent value="team" className="space-y-12">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold">Meet Our Team</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Our diverse team of passionate individuals works tirelessly to bring our vision to life, combining
                  expertise in technology, education, social work, and community development.
                </p>
              </div>

              {/* Founder Section */}
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-1">
                      <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 via-purple-500 to-emerald-500">
                        <Image
                          src="/mj-ahmad-stylized.png"
                          alt="MJ Ahmad"
                          width={192}
                          height={192}
                          className="object-cover w-full h-full"
                          priority
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-2 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold">MJ Ahmad</h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                          Founder & Visionary Leader
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">Visionary</Badge>
                          <Badge variant="outline">Social Entrepreneur</Badge>
                          <Badge variant="outline">Technology Advocate</Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        Md Jafor Ahmad is a visionary leader, social worker, and dedicated citizen of Bangladesh who
                        founded Nexara with the mission of empowering communities through education, technology, and
                        sustainable development. With a focus on transforming educational access and building
                        technological capacity, MJ Ahmad works tirelessly to create positive change, particularly in
                        vulnerable coastal areas like Cox's Bazar.
                      </p>
                      <div className="flex gap-4">
                        <Button variant="outline" asChild>
                          <Link href="/mjahmad">Read Full Story</Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href="/contact">Connect</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Core Team */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-center">Core Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-emerald-200">
                        <Image
                          src="/woman-developer.png"
                          alt="Sarah Chen"
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-lg">Sarah Chen</h4>
                      <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Technical Lead</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        Full-stack developer specializing in React and Node.js, leading our technology initiatives.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-blue-200">
                        <Image
                          src="/man-developer.png"
                          alt="Miguel Rodriguez"
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-lg">Miguel Rodriguez</h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Community Coordinator</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        Community development specialist focused on building sustainable partnerships.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-purple-200">
                        <Image
                          src="/woman-engineer-at-work.png"
                          alt="Dr. Aisha Patel"
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-lg">Dr. Aisha Patel</h4>
                      <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">Education Director</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        Educational psychologist designing innovative learning programs for diverse communities.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Join Our Team CTA */}
              <Card className="bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-emerald-900/20 border-0">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                    We're always looking for passionate individuals who share our vision of empowering communities
                    through innovation. Whether you're a developer, educator, social worker, or community advocate,
                    there's a place for you in our team.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild>
                      <Link href="/careers">View Open Positions</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/volunteer">Volunteer With Us</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
