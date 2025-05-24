import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Lightbulb, Globe, Cpu } from "lucide-react"
import { Footer } from "@/components/footer"

export default function FutureTechnologyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-900 to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center space-y-6">
              <div className="inline-block p-3 bg-white/10 rounded-full mb-2">
                <Rocket className="h-12 w-12 text-blue-300" />
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Future Technology</h1>
              <p className="text-xl text-blue-200">Today in Bangladesh</p>
              <p className="max-w-[800px] text-blue-100">
                Experience the latest technological innovations and real-time data from the ISS as we take you into the
                future.
              </p>
            </div>
          </div>
        </section>

        {/* ISS Tracker Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center space-y-4 mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">ISS Real-time Update</h2>
              <p className="text-lg text-muted-foreground">3:25:48 AM | 5/12/2025</p>
              <p className="max-w-[800px] text-muted-foreground">
                Experience the cutting-edge of space technology with our real-time data feed from the International
                Space Station.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    ISS Location
                  </CardTitle>
                  <CardDescription>Current position</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">Latitude</div>
                      <div className="text-2xl font-bold">-80.6789°</div>
                    </div>
                    <div className="h-px bg-border" />
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">Longitude</div>
                      <div className="text-2xl font-bold">-47.4210°</div>
                    </div>
                    <div className="text-xs text-muted-foreground">Last updated: 3:21:03 AM</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-primary" />
                    ISS Velocity
                  </CardTitle>
                  <CardDescription>Current speed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold">27976.08 km/h</div>
                      <div className="text-sm text-muted-foreground mt-1">Orbiting Earth every ~90 minutes</div>
                    </div>
                    <div className="text-xs text-muted-foreground">Last updated: 3:21:03 AM</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
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
                      className="text-primary"
                    >
                      <path d="m12 19-7-7 7-7" />
                      <path d="M19 12H5" />
                    </svg>
                    ISS Altitude
                  </CardTitle>
                  <CardDescription>Current height</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold">409.37 km</div>
                      <div className="text-sm text-muted-foreground mt-1">Above Earth's surface</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <Card className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle>Live Earth View from ISS</CardTitle>
                  <CardDescription>
                    Experience a real-time view of our beautiful planet from the International Space Station as it
                    orbits Earth, featuring stunning spacewalk footage.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="/earth-from-iss.png"
                        alt="Live Earth view from the International Space Station"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-red-600 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                        LIVE
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Initiatives Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center space-y-4 mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Technology Initiatives in Bangladesh</h2>
              <p className="text-muted-foreground max-w-[800px] mx-auto">
                Discover cutting-edge technology projects and initiatives currently underway in Bangladesh.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Digital Bangladesh Vision 2041</CardTitle>
                  <CardDescription>
                    A comprehensive national initiative to transform Bangladesh into a digitally advanced nation by
                    2041.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm inline-block">
                      In progress
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Areas</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <Cpu className="h-4 w-4 text-primary" />
                          Smart city development
                        </li>
                        <li className="flex items-center gap-2">
                          <Cpu className="h-4 w-4 text-primary" />
                          Digital infrastructure expansion
                        </li>
                        <li className="flex items-center gap-2">
                          <Cpu className="h-4 w-4 text-primary" />
                          E-governance implementation
                        </li>
                        <li className="flex items-center gap-2">
                          <Cpu className="h-4 w-4 text-primary" />
                          Digital literacy programs
                        </li>
                        <li className="flex items-center gap-2">
                          <Cpu className="h-4 w-4 text-primary" />
                          Technology innovation hubs
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Bangladesh Satellite-2 Project</CardTitle>
                  <CardDescription>
                    Following the successful deployment of Bangabandhu Satellite-1, this project aims to expand
                    Bangladesh's space capabilities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-sm inline-block">
                      Planning phase
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Areas</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <Rocket className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          Enhanced telecommunications coverage
                        </li>
                        <li className="flex items-center gap-2">
                          <Rocket className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          Earth observation capabilities
                        </li>
                        <li className="flex items-center gap-2">
                          <Rocket className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          Weather monitoring systems
                        </li>
                        <li className="flex items-center gap-2">
                          <Rocket className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          Disaster management support
                        </li>
                        <li className="flex items-center gap-2">
                          <Rocket className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          Research and development opportunities
                        </li>
                      </ul>
                    </div>
                    <div className="text-sm text-muted-foreground">Expected launch: 2027</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Research Center of Bangladesh</CardTitle>
                  <CardDescription>
                    A national center for artificial intelligence research and development to position Bangladesh as an
                    AI innovation hub.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 px-3 py-1 rounded-full text-sm inline-block">
                      Operational
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Areas</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <Lightbulb className="h-4 w-4 text-green-600 dark:text-green-400" />
                          Natural language processing for Bengali
                        </li>
                        <li className="flex items-center gap-2">
                          <Lightbulb className="h-4 w-4 text-green-600 dark:text-green-400" />
                          Computer vision applications
                        </li>
                        <li className="flex items-center gap-2">
                          <Lightbulb className="h-4 w-4 text-green-600 dark:text-green-400" />
                          AI for agriculture optimization
                        </li>
                        <li className="flex items-center gap-2">
                          <Lightbulb className="h-4 w-4 text-green-600 dark:text-green-400" />
                          Healthcare AI solutions
                        </li>
                        <li className="flex items-center gap-2">
                          <Lightbulb className="h-4 w-4 text-green-600 dark:text-green-400" />
                          Smart manufacturing systems
                        </li>
                      </ul>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Location: Dhaka University of Engineering & Technology
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Forecast Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center space-y-4 mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Technology Forecast for Bangladesh</h2>
              <p className="text-muted-foreground max-w-[800px] mx-auto">
                Predictions and trends for technological development in Bangladesh over the next decade.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 px-3 py-1 rounded-full text-sm inline-block mb-2">
                    2025-2030
                  </div>
                  <CardTitle>Artificial Intelligence</CardTitle>
                  <CardDescription>Transformative Impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Bangladesh will become a regional hub for AI development, with specialized focus on Bengali language
                    processing and agricultural applications.
                  </p>
                  <div>
                    <h4 className="font-medium mb-2">Key Drivers</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        Government investment in AI research centers
                      </li>
                      <li className="flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        Growing pool of AI specialists
                      </li>
                      <li className="flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        Industry-academia partnerships
                      </li>
                      <li className="flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        International collaboration opportunities
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 px-3 py-1 rounded-full text-sm inline-block mb-2">
                    2025-2035
                  </div>
                  <CardTitle>Renewable Energy</CardTitle>
                  <CardDescription>High Impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Solar and wind energy infrastructure will expand to cover 40% of Bangladesh's energy needs, with
                    innovative floating solar farms addressing land scarcity issues.
                  </p>
                  <div>
                    <h4 className="font-medium mb-2">Key Drivers</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-green-600 dark:text-green-400" />
                        Climate change mitigation policies
                      </li>
                      <li className="flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-green-600 dark:text-green-400" />
                        Decreasing costs of renewable technologies
                      </li>
                      <li className="flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-green-600 dark:text-green-400" />
                        International climate funding
                      </li>
                      <li className="flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-green-600 dark:text-green-400" />
                        Energy security concerns
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
