import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function PresentationResources() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Supporting Resources</h1>

      <Tabs defaultValue="materials" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="materials">Supplementary Materials</TabsTrigger>
          <TabsTrigger value="software">Recommended Software</TabsTrigger>
          <TabsTrigger value="templates">Templates & Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="materials" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Supplementary Materials</CardTitle>
              <CardDescription>Additional documents to support your presentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">One-Page Executive Summary</h3>
                <p className="text-muted-foreground mb-2">Create a concise one-page document that summarizes:</p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Your vision and mission</li>
                  <li>Key initiatives and their current status</li>
                  <li>Support needs and opportunities</li>
                  <li>Expected impact</li>
                  <li>Contact information</li>
                </ul>
                <p className="text-sm text-blue-600 mt-2">
                  This can be handed out at the beginning or end of your presentation.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Detailed Initiative Profiles</h3>
                <p className="text-muted-foreground mb-2">Create 1-2 page profiles for each major initiative:</p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Comprehensive description and background</li>
                  <li>Detailed implementation plan</li>
                  <li>Budget breakdown</li>
                  <li>Timeline with milestones</li>
                  <li>Success metrics and evaluation plan</li>
                </ul>
                <p className="text-sm text-blue-600 mt-2">
                  These can be provided as follow-up materials for interested supporters.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Support Options Guide</h3>
                <p className="text-muted-foreground mb-2">Create a detailed guide outlining ways to support:</p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Donation options with specific impact descriptions</li>
                  <li>Partnership models with benefits and requirements</li>
                  <li>Volunteer opportunities with time commitments</li>
                  <li>In-kind support options</li>
                  <li>Process for each type of support</li>
                </ul>
                <p className="text-sm text-blue-600 mt-2">
                  This helps supporters understand exactly how they can help and what impact their support will have.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Testimonial Collection</h3>
                <p className="text-muted-foreground mb-2">Compile testimonials from:</p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Students who have benefited from your resources</li>
                  <li>Community members impacted by your initiatives</li>
                  <li>Partners who have collaborated with you</li>
                  <li>Educators who have used your materials</li>
                </ul>
                <p className="text-sm text-blue-600 mt-2">
                  Include photos when possible to create a personal connection.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Medical Situation Summary</h3>
                <p className="text-muted-foreground mb-2">
                  Create a brief, dignified summary of your health situation:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>General nature of health challenges</li>
                  <li>Treatment needs and timeline</li>
                  <li>Impact on work and initiatives</li>
                  <li>How support will help both recovery and continued work</li>
                </ul>
                <p className="text-sm text-blue-600 mt-2">
                  This should be handled sensitively and only shared when appropriate.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="software" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Software</CardTitle>
              <CardDescription>Tools to create and deliver your presentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Presentation Software</h3>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  <div className="border rounded-lg p-3">
                    <p className="font-medium">Microsoft PowerPoint</p>
                    <p className="text-xs text-muted-foreground">Industry standard with powerful features</p>
                    <Badge className="mt-2 bg-blue-100 text-blue-800 hover:bg-blue-200">Paid</Badge>
                  </div>

                  <div className="border rounded-lg p-3">
                    <p className="font-medium">Google Slides</p>
                    <p className="text-xs text-muted-foreground">Cloud-based, easy collaboration</p>
                    <Badge className="mt-2 bg-green-100 text-green-800 hover:bg-green-200">Free</Badge>
                  </div>

                  <div className="border rounded-lg p-3">
                    <p className="font-medium">Canva</p>
                    <p className="text-xs text-muted-foreground">Design-focused with templates</p>
                    <Badge className="mt-2 bg-purple-100 text-purple-800 hover:bg-purple-200">Freemium</Badge>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg">Design Resources</h3>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  <div className="border rounded-lg p-3">
                    <p className="font-medium">Unsplash</p>
                    <p className="text-xs text-muted-foreground">High-quality free stock photos</p>
                    <Badge className="mt-2 bg-green-100 text-green-800 hover:bg-green-200">Free</Badge>
                  </div>

                  <div className="border rounded-lg p-3">
                    <p className="font-medium">Flaticon</p>
                    <p className="text-xs text-muted-foreground">Icons and vector graphics</p>
                    <Badge className="mt-2 bg-purple-100 text-purple-800 hover:bg-purple-200">Freemium</Badge>
                  </div>

                  <div className="border rounded-lg p-3">
                    <p className="font-medium">Pexels</p>
                    <p className="text-xs text-muted-foreground">Free stock photos and videos</p>
                    <Badge className="mt-2 bg-green-100 text-green-800 hover:bg-green-200">Free</Badge>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg">Data Visualization</h3>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  <div className="border rounded-lg p-3">
                    <p className="font-medium">Infogram</p>
                    <p className="text-xs text-muted-foreground">Interactive charts and infographics</p>
                    <Badge className="mt-2 bg-purple-100 text-purple-800 hover:bg-purple-200">Freemium</Badge>
                  </div>

                  <div className="border rounded-lg p-3">
                    <p className="font-medium">Tableau Public</p>
                    <p className="text-xs text-muted-foreground">Powerful data visualization</p>
                    <Badge className="mt-2 bg-green-100 text-green-800 hover:bg-green-200">Free</Badge>
                  </div>

                  <div className="border rounded-lg p-3">
                    <p className="font-medium">Visme</p>
                    <p className="text-xs text-muted-foreground">Visual content creation platform</p>
                    <Badge className="mt-2 bg-purple-100 text-purple-800 hover:bg-purple-200">Freemium</Badge>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg">PDF Creation and Management</h3>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  <div className="border rounded-lg p-3">
                    <p className="font-medium">Adobe Acrobat</p>
                    <p className="text-xs text-muted-foreground">Professional PDF creation and editing</p>
                    <Badge className="mt-2 bg-blue-100 text-blue-800 hover:bg-blue-200">Paid</Badge>
                  </div>

                  <div className="border rounded-lg p-3">
                    <p className="font-medium">Smallpdf</p>
                    <p className="text-xs text-muted-foreground">Online PDF tools</p>
                    <Badge className="mt-2 bg-purple-100 text-purple-800 hover:bg-purple-200">Freemium</Badge>
                  </div>

                  <div className="border rounded-lg p-3">
                    <p className="font-medium">PDF Escape</p>
                    <p className="text-xs text-muted-foreground">Free online PDF editor</p>
                    <Badge className="mt-2 bg-green-100 text-green-800 hover:bg-green-200">Free</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Templates & Resources</CardTitle>
              <CardDescription>Ready-to-use templates and helpful resources</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Presentation Templates</h3>
                <p className="text-muted-foreground mb-2">Free and premium templates to use as starting points:</p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>
                    <a
                      href="https://slidesgo.com/theme/non-profit-organization-pitch-deck"
                      className="text-blue-600 hover:underline"
                    >
                      Non-Profit Organization Pitch Deck (SlidesGo)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.canva.com/presentations/templates/nonprofit/"
                      className="text-blue-600 hover:underline"
                    >
                      Canva Non-Profit Templates
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.slideteam.net/powerpoint-presentation-slides/non-profit-organization-ppt-templates.html"
                      className="text-blue-600 hover:underline"
                    >
                      SlideTeam Non-Profit Templates
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.microsoft.com/en-us/microsoft-365/templates/non-profit"
                      className="text-blue-600 hover:underline"
                    >
                      Microsoft Office Non-Profit Templates
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Color Scheme Resources</h3>
                <p className="text-muted-foreground mb-2">Tools to create professional color schemes:</p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>
                    <a href="https://coolors.co/" className="text-blue-600 hover:underline">
                      Coolors - Color Scheme Generator
                    </a>
                  </li>
                  <li>
                    <a href="https://color.adobe.com/create/color-wheel" className="text-blue-600 hover:underline">
                      Adobe Color Wheel
                    </a>
                  </li>
                  <li>
                    <a href="https://colorhunt.co/" className="text-blue-600 hover:underline">
                      Color Hunt - Color Palettes
                    </a>
                  </li>
                </ul>
                <p className="text-sm text-blue-600 mt-2">
                  Recommended colors for your presentation: Deep blues (#1A365D, #2A4365), Greens (#276749, #38A169),
                  Accent orange (#DD6B20)
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Font Recommendations</h3>
                <p className="text-muted-foreground mb-2">Professional fonts that work well for presentations:</p>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="border rounded-lg p-3">
                    <p className="font-medium">Headings</p>
                    <ul className="list-disc pl-6 text-xs">
                      <li>Montserrat</li>
                      <li>Roboto</li>
                      <li>Open Sans</li>
                      <li>Raleway</li>
                      <li>Poppins</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-3">
                    <p className="font-medium">Body Text</p>
                    <ul className="list-disc pl-6 text-xs">
                      <li>Lato</li>
                      <li>Source Sans Pro</li>
                      <li>Roboto</li>
                      <li>Open Sans</li>
                      <li>Nunito</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-blue-600 mt-2">All these fonts are available on Google Fonts for free.</p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Icon Resources</h3>
                <p className="text-muted-foreground mb-2">Free icon libraries to enhance your presentation:</p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>
                    <a href="https://www.flaticon.com/" className="text-blue-600 hover:underline">
                      Flaticon
                    </a>
                  </li>
                  <li>
                    <a href="https://icons8.com/" className="text-blue-600 hover:underline">
                      Icons8
                    </a>
                  </li>
                  <li>
                    <a href="https://thenounproject.com/" className="text-blue-600 hover:underline">
                      The Noun Project
                    </a>
                  </li>
                  <li>
                    <a href="https://fontawesome.com/" className="text-blue-600 hover:underline">
                      Font Awesome
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Pitch Deck Guides</h3>
                <p className="text-muted-foreground mb-2">
                  Helpful resources for creating effective pitch presentations:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>
                    <a
                      href="https://www.ycombinator.com/library/4T-how-to-design-a-better-pitch-deck"
                      className="text-blue-600 hover:underline"
                    >
                      Y Combinator: How to Design a Better Pitch Deck
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.techstars.com/the-line/advice/how-to-create-a-solid-pitch-deck-for-investors"
                      className="text-blue-600 hover:underline"
                    >
                      Techstars: How to Create a Solid Pitch Deck
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.forbes.com/sites/allbusiness/2019/11/05/investor-pitch-deck-guide/"
                      className="text-blue-600 hover:underline"
                    >
                      Forbes: Guide to Creating a Pitch Deck
                    </a>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
