import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function PresentationOutline() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        MJ-AHMAD: Transforming Bangladesh Through Education and Innovation
      </h1>

      <Tabs defaultValue="structure" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="structure">Presentation Structure</TabsTrigger>
          <TabsTrigger value="design">Design Guidelines</TabsTrigger>
          <TabsTrigger value="tips">Presentation Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="structure" className="space-y-6">
          <Card>
            <CardHeader>
              <Badge className="w-fit mb-2">Section 1</Badge>
              <CardTitle>Introduction and Personal Journey</CardTitle>
              <CardDescription>Slides 1-5</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Slide 1: Title Slide</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Title: "Transforming Bangladesh Through Education and Innovation"</li>
                  <li>Subtitle: "A Vision by Md Jafor Ahmad (MJ Ahmad)"</li>
                  <li>Professional photo of MJ Ahmad</li>
                  <li>Date of presentation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Slide 2: Personal Introduction</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Brief professional bio: "Visionary Leader, Social Worker, and Dedicated Citizen"</li>
                  <li>Photo of MJ Ahmad in a professional setting</li>
                  <li>Key credentials and background</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Slide 3: Personal Journey</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Timeline of key milestones in MJ Ahmad's journey</li>
                  <li>Formative experiences that shaped his vision</li>
                  <li>Brief narrative of what inspired his commitment to education and community development</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Slide 4: Core Values</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>
                    Visual representation of core values: Transparency, Ethics, Accountability, Inclusivity, Innovation,
                    Sustainability
                  </li>
                  <li>Brief explanation of how these values guide all initiatives</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Slide 5: Vision for Bangladesh</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Compelling vision statement</li>
                  <li>Visual representation of the transformation envisioned</li>
                  <li>Key impact areas: Education, Technology, Environment, Community Development, Leadership</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Badge className="w-fit mb-2">Section 2</Badge>
              <CardTitle>Flagship Initiatives</CardTitle>
              <CardDescription>Slides 6-13</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Slide 6: Overview of Initiatives</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Visual map showing the ecosystem of initiatives</li>
                  <li>How the initiatives complement each other</li>
                  <li>Collective impact statement</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Slides 7-8: Yunus Inspire</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Inspiration behind the initiative</li>
                  <li>Mission and vision</li>
                  <li>Key features and implementation plan</li>
                  <li>Expected impact with visual metrics</li>
                  <li>Current status and next steps</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Slides 9-10: Trusted Ally</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Core concept and purpose</li>
                  <li>Key features and implementation approach</li>
                  <li>Success stories and testimonials</li>
                  <li>Current status and expansion plans</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Slide 11: Transforming Cox's Bazar</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Vision for regional transformation</li>
                  <li>Focus areas and implementation approach</li>
                  <li>Timeline and key milestones</li>
                  <li>Expected outcomes by 2028</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Slides 12-13: Infinity Nexus</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Innovative concept and global vision</li>
                  <li>Short, mid, and long-term goals</li>
                  <li>National and international impact</li>
                  <li>Visual representation of the data hub concept</li>
                  <li>Strategic partnerships needed</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Badge className="w-fit mb-2">Section 3</Badge>
              <CardTitle>Educational Resources and Impact</CardTitle>
              <CardDescription>Slides 14-17</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Slide 14: Open Source Learning Resources</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Overview of the educational resources created</li>
                  <li>Philosophy behind open source education</li>
                  <li>Visual showcase of learning paths</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Slide 15: Learning Paths Showcase</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Visual representation of key learning paths</li>
                  <li>Structure and progression from beginner to advanced</li>
                  <li>Real examples of student projects</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Slide 16: Community Projects</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Overview of community initiatives</li>
                  <li>Hackathons and events</li>
                  <li>Student groups and networks</li>
                  <li>Photos from community events</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Slide 17: Educational Impact</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Key metrics: students reached, communities impacted, resources created</li>
                  <li>Success stories with photos</li>
                  <li>Testimonials from students and community members</li>
                  <li>Long-term educational impact vision</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Badge className="w-fit mb-2">Section 4</Badge>
              <CardTitle>Current Challenges and Support Needs</CardTitle>
              <CardDescription>Slides 18-22</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Slide 18: Current Situation</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Transparent overview of current challenges</li>
                  <li>Health challenges faced by MJ Ahmad</li>
                  <li>Impact on initiative progress</li>
                  <li>Transition to support needs</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Slide 19: Support Opportunities</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Overview of different ways to support</li>
                  <li>Financial support for medical treatment</li>
                  <li>Project funding opportunities</li>
                  <li>Partnership and collaboration options</li>
                  <li>Volunteer opportunities</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Slide 20: Funding Needs</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Transparent breakdown of funding needs</li>
                  <li>Medical treatment costs</li>
                  <li>Project implementation budgets</li>
                  <li>Resource development costs</li>
                  <li>Clear explanation of how funds will be used</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Slide 21: Partnership Opportunities</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Types of partnerships sought</li>
                  <li>Benefits for partners</li>
                  <li>Collaboration models</li>
                  <li>Examples of successful partnerships</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Slide 22: Transparency Commitment</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Commitment to transparent fund management</li>
                  <li>Reporting and accountability mechanisms</li>
                  <li>How progress and impact will be communicated</li>
                  <li>Governance structure for initiatives</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Badge className="w-fit mb-2">Section 5</Badge>
              <CardTitle>Vision for the Future and Call to Action</CardTitle>
              <CardDescription>Slides 23-25</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Slide 23: 5-Year Vision</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Visual roadmap of the 5-year vision</li>
                  <li>Key milestones and expected outcomes</li>
                  <li>Transformative impact on Bangladesh</li>
                  <li>How support will enable this vision</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Slide 24: The Opportunity</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>The unique opportunity for supporters to be part of this transformation</li>
                  <li>Long-term impact of support</li>
                  <li>Legacy potential for supporters</li>
                  <li>Emotional connection to the vision</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Slide 25: Call to Action</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Clear, specific calls to action</li>
                  <li>Next steps for different types of support</li>
                  <li>Contact information and follow-up process</li>
                  <li>Thank you message</li>
                  <li>Powerful closing quote or statement</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="design" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Design Guidelines</CardTitle>
              <CardDescription>Recommendations for creating a visually compelling presentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Color Scheme</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Primary colors: Deep blue and green (representing trust, growth, and sustainability)</li>
                  <li>Secondary colors: Accent with orange or gold (representing innovation and opportunity)</li>
                  <li>Use white space effectively for a clean, professional look</li>
                  <li>Ensure sufficient contrast for readability</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Typography</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Use a clean, professional sans-serif font for headings (e.g., Montserrat, Roboto)</li>
                  <li>Use a highly readable font for body text (e.g., Open Sans, Lato)</li>
                  <li>
                    Maintain consistent font sizes: 28-32pt for titles, 20-24pt for subtitles, 18-20pt for body text
                  </li>
                  <li>Use bold for emphasis rather than italics or underlining</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Visual Elements</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Use high-quality, authentic photos of MJ Ahmad, projects, and beneficiaries</li>
                  <li>Include infographics for data and statistics</li>
                  <li>Use icons consistently to represent key concepts</li>
                  <li>Include maps to show geographical impact</li>
                  <li>Use before/after visuals to show transformation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Slide Layout</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Maintain consistent layout with clear visual hierarchy</li>
                  <li>Limit text to 5-7 bullet points per slide</li>
                  <li>Use the 40-60 rule: 40% text, 60% visuals</li>
                  <li>Include slide numbers for easy reference</li>
                  <li>Use section dividers to clearly separate content sections</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Branding Elements</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Create a simple logo or visual identifier for the presentation</li>
                  <li>Include consistent footer with contact information</li>
                  <li>Use consistent visual style across all initiative descriptions</li>
                  <li>Consider a subtle watermark or background element for cohesion</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Presentation Tips</CardTitle>
              <CardDescription>Recommendations for delivering an effective presentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Preparation</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Customize the presentation for each specific audience</li>
                  <li>Research potential supporters beforehand to address their specific interests</li>
                  <li>Prepare talking points for each slide, but don't read directly from slides</li>
                  <li>Practice the presentation multiple times to ensure smooth delivery</li>
                  <li>Prepare answers for potential questions</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Delivery</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Begin with a powerful personal story that connects to your vision</li>
                  <li>Speak with authentic passion about your initiatives</li>
                  <li>Use a conversational tone rather than a formal lecture style</li>
                  <li>Make eye contact with audience members</li>
                  <li>Pace yourself - aim for 1-2 minutes per slide</li>
                  <li>Be transparent about challenges while maintaining optimism about solutions</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Engagement</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Consider including a brief video testimonial if possible</li>
                  <li>Have physical samples of educational materials if relevant</li>
                  <li>Invite questions throughout rather than only at the end</li>
                  <li>Share brief, powerful stories of individual impact</li>
                  <li>Connect your work to the interests and values of your audience</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Follow-up</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Prepare handouts with key information and contact details</li>
                  <li>Have a clear process for next steps after the presentation</li>
                  <li>Send a thank-you email with additional information within 24 hours</li>
                  <li>Offer to connect interested supporters with beneficiaries or partners</li>
                  <li>Create a simple one-page summary document for easy sharing</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Technical Considerations</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Save the presentation in multiple formats (PPTX, PDF)</li>
                  <li>Have a backup copy on a USB drive and in cloud storage</li>
                  <li>Test all equipment before the presentation</li>
                  <li>Consider having a printed version as backup</li>
                  <li>If presenting virtually, ensure stable internet connection and proper lighting</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
