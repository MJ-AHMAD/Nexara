import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SlideExamples() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Key Slide Examples</h1>

      <Tabs defaultValue="title" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="title">Title</TabsTrigger>
          <TabsTrigger value="vision">Vision</TabsTrigger>
          <TabsTrigger value="initiatives">Initiatives</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
          <TabsTrigger value="action">Call to Action</TabsTrigger>
        </TabsList>

        <TabsContent value="title">
          <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="pt-10 pb-16 px-8">
              <div className="text-center space-y-8">
                <h1 className="text-4xl font-bold text-blue-800">
                  Transforming Bangladesh Through Education and Innovation
                </h1>
                <h2 className="text-2xl text-green-700">A Vision by Md Jafor Ahmad (MJ Ahmad)</h2>

                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                  [Photo]
                </div>

                <div className="text-sm text-gray-500 mt-12">May 2025</div>

                <div className="absolute bottom-4 right-4 text-xs text-gray-400">
                  "Transparent, Ethical, and Accountable"
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-4 text-sm text-gray-600">
            <p>
              <strong>Title Slide Notes:</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>Use a professional photo that conveys approachability and vision</li>
              <li>The subtitle establishes your identity and ownership of the vision</li>
              <li>The gradient background creates visual interest while maintaining professionalism</li>
              <li>The tagline "Transparent, Ethical, and Accountable" subtly reinforces core values</li>
              <li>Keep this slide clean and impactful - it sets the tone for the entire presentation</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="vision">
          <Card className="border-2 border-green-200 bg-white">
            <CardContent className="pt-6 pb-8 px-8">
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-green-800 border-b-2 border-green-200 pb-2">
                  Vision for Bangladesh
                </h1>

                <div className="flex gap-6">
                  <div className="w-1/2">
                    <p className="text-lg font-medium text-blue-700 mb-4">
                      "To empower Bangladeshi communities through education, technology, and sustainable development
                      initiatives that create lasting positive change and opportunities for future generations."
                    </p>

                    <div className="mt-6 space-y-2">
                      <p className="font-medium">Long-term Goals:</p>
                      <ul className="list-disc pl-6 text-sm">
                        <li>Establish Bangladesh as a hub for technological innovation</li>
                        <li>Create sustainable educational models</li>
                        <li>Build a network of empowered communities</li>
                        <li>Foster ethical leadership and transparent governance</li>
                        <li>Develop technology solutions for local challenges</li>
                      </ul>
                    </div>
                  </div>

                  <div className="w-1/2 border-l-2 border-green-100 pl-6">
                    <p className="font-medium mb-3">Impact Areas:</p>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="font-medium text-blue-700">Education</p>
                        <p className="text-xs">Transforming access and quality through technology</p>
                      </div>

                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="font-medium text-green-700">Technology</p>
                        <p className="text-xs">Building capacity and digital literacy</p>
                      </div>

                      <div className="bg-amber-50 p-3 rounded-lg">
                        <p className="font-medium text-amber-700">Environment</p>
                        <p className="text-xs">Promoting sustainability and climate resilience</p>
                      </div>

                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="font-medium text-purple-700">Community</p>
                        <p className="text-xs">Empowering community-led development</p>
                      </div>
                    </div>

                    <div className="mt-4 bg-gray-100 p-3 rounded-lg text-center">
                      [Visual representation of transformation]
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-4 text-sm text-gray-600">
            <p>
              <strong>Vision Slide Notes:</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>The vision statement is highlighted to ensure it stands out</li>
              <li>Impact areas are visually organized with color coding for easy comprehension</li>
              <li>The layout balances text and visual elements</li>
              <li>Long-term goals are concisely presented as bullet points</li>
              <li>When presenting, elaborate on how these elements connect to create a cohesive vision</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="initiatives">
          <Card className="border-2 border-blue-200 bg-white">
            <CardContent className="pt-6 pb-8 px-8">
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2">
                  Yunus Inspire: Educational Initiative
                </h1>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-green-700">Inspiration:</p>
                      <p className="text-sm">Inspired by the legacy of Nobel Laureate Professor Muhammad Yunus</p>
                    </div>

                    <div>
                      <p className="font-medium text-green-700">Mission:</p>
                      <p className="text-sm">
                        To provide free, accessible, and innovative resources in technology and programming, ensuring
                        every learner can unlock their potential.
                      </p>
                    </div>

                    <div>
                      <p className="font-medium text-green-700">Key Features:</p>
                      <ul className="list-disc pl-6 text-sm">
                        <li>Interactive courses in HTML, CSS, Python, GitHub</li>
                        <li>Interactive Code Editors</li>
                        <li>Downloadable Study Guides</li>
                        <li>Community Forums and Mentorship</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-100 p-3 rounded-lg h-32 flex items-center justify-center text-gray-500">
                      [Visual of platform interface]
                    </div>

                    <div>
                      <p className="font-medium text-blue-700">Implementation Status:</p>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm">In development phase, seeking funding and partnerships</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                          <div className="bg-blue-600 h-2.5 rounded-full w-[35%]"></div>
                        </div>
                        <div className="flex justify-between text-xs mt-1">
                          <span>Planning</span>
                          <span>Development</span>
                          <span>Launch</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="font-medium text-blue-700">Expected Impact:</p>
                      <ul className="list-disc pl-6 text-sm">
                        <li>Educate thousands of students nationwide</li>
                        <li>Develop technical and leadership skills</li>
                        <li>Create a network of innovators</li>
                        <li>Bridge the digital divide in Bangladesh</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg mt-2">
                  <p className="font-medium text-blue-700 text-sm">Budget Estimate: $22,000</p>
                  <div className="grid grid-cols-5 gap-2 mt-2">
                    <div className="bg-blue-100 p-1 rounded text-xs text-center">
                      Development
                      <br />
                      $5,000
                    </div>
                    <div className="bg-green-100 p-1 rounded text-xs text-center">
                      Content
                      <br />
                      $2,000
                    </div>
                    <div className="bg-amber-100 p-1 rounded text-xs text-center">
                      Team
                      <br />
                      $10,000
                    </div>
                    <div className="bg-purple-100 p-1 rounded text-xs text-center">
                      Marketing
                      <br />
                      $3,000
                    </div>
                    <div className="bg-gray-100 p-1 rounded text-xs text-center">
                      Other
                      <br />
                      $2,000
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-4 text-sm text-gray-600">
            <p>
              <strong>Initiative Slide Notes:</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>Each initiative should have 1-2 dedicated slides with consistent structure</li>
              <li>Visual elements help illustrate the concept and current status</li>
              <li>Budget information is presented transparently but concisely</li>
              <li>Progress indicators show current status and next steps</li>
              <li>When presenting, emphasize how this initiative connects to the overall vision</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="support">
          <Card className="border-2 border-amber-200 bg-white">
            <CardContent className="pt-6 pb-8 px-8">
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-amber-800 border-b-2 border-amber-200 pb-2">
                  Support Opportunities
                </h1>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-medium text-amber-700 mb-2">Current Situation</p>
                      <p className="text-sm">
                        MJ Ahmad is facing health challenges that require medical treatment while continuing to develop
                        educational initiatives that benefit thousands of students across Bangladesh.
                      </p>
                    </div>

                    <div>
                      <p className="font-medium text-amber-700">Support Needs:</p>
                      <ul className="list-disc pl-6 text-sm">
                        <li>Medical treatment funding</li>
                        <li>Project implementation resources</li>
                        <li>Technical expertise and partnerships</li>
                        <li>Content development support</li>
                        <li>Community outreach assistance</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="font-medium text-blue-700 mb-1">Transparency Commitment</p>
                      <p className="text-xs">
                        All contributions are managed with complete transparency. Regular updates on fund utilization
                        and project progress are provided to all supporters.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="font-medium text-amber-700">Ways to Support:</p>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="font-medium text-green-700">Financial Support</p>
                        <ul className="list-disc pl-6 text-xs">
                          <li>One-time donations</li>
                          <li>Monthly recurring support</li>
                          <li>Specific project funding</li>
                          <li>Medical support fund</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="font-medium text-blue-700">Partnerships</p>
                        <ul className="list-disc pl-6 text-xs">
                          <li>Educational institutions</li>
                          <li>Corporate sponsorships</li>
                          <li>NGO collaborations</li>
                          <li>Technology providers</li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="font-medium text-purple-700">Volunteer Support</p>
                        <ul className="list-disc pl-6 text-xs">
                          <li>Technical mentors</li>
                          <li>Content creators</li>
                          <li>Community organizers</li>
                          <li>Translation assistance</li>
                        </ul>
                      </div>

                      <div className="bg-amber-50 p-3 rounded-lg">
                        <p className="font-medium text-amber-700">Resource Sharing</p>
                        <ul className="list-disc pl-6 text-xs">
                          <li>Educational materials</li>
                          <li>Technology access</li>
                          <li>Venue space</li>
                          <li>Professional services</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-gray-700 mb-1">Impact of Your Support</p>
                      <div className="flex justify-between text-xs text-center">
                        <div>
                          <div className="font-bold text-blue-700 text-lg">5,000+</div>
                          <div>Students Reached</div>
                        </div>
                        <div>
                          <div className="font-bold text-green-700 text-lg">12</div>
                          <div>Communities Impacted</div>
                        </div>
                        <div>
                          <div className="font-bold text-amber-700 text-lg">250+</div>
                          <div>Resources Created</div>
                        </div>
                        <div>
                          <div className="font-bold text-purple-700 text-lg">45</div>
                          <div>Volunteer Mentors</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-4 text-sm text-gray-600">
            <p>
              <strong>Support Slide Notes:</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>Present the current situation honestly but with dignity</li>
              <li>Organize support options clearly with visual distinction</li>
              <li>Include impact metrics to show the value of support</li>
              <li>Emphasize transparency and accountability</li>
              <li>When presenting, be direct about needs while maintaining a positive focus on impact</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="action">
          <Card className="border-2 border-green-200 bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="pt-10 pb-16 px-8">
              <div className="text-center space-y-8">
                <h1 className="text-3xl font-bold text-blue-800">Join Us in Transforming Bangladesh</h1>

                <p className="text-lg text-green-700 max-w-2xl mx-auto">
                  "Your support today will help create a future where every Bangladeshi student has access to quality
                  education, technology skills, and opportunities to thrive."
                </p>

                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div className="bg-blue-50 p-4 rounded-lg text-left">
                    <p className="font-bold text-blue-700 mb-2">Support Financially</p>
                    <p className="text-sm mb-3">Contribute to medical treatment and project implementation.</p>
                    <p className="text-sm font-medium">Next Steps:</p>
                    <ul className="list-disc pl-6 text-xs">
                      <li>One-time or recurring donations</li>
                      <li>Project-specific funding</li>
                      <li>Medical support fund</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg text-left">
                    <p className="font-bold text-green-700 mb-2">Partner With Us</p>
                    <p className="text-sm mb-3">Collaborate on educational initiatives and community development.</p>
                    <p className="text-sm font-medium">Next Steps:</p>
                    <ul className="list-disc pl-6 text-xs">
                      <li>Schedule a follow-up meeting</li>
                      <li>Explore partnership models</li>
                      <li>Identify shared objectives</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg text-left">
                    <p className="font-bold text-amber-700 mb-2">Volunteer Your Skills</p>
                    <p className="text-sm mb-3">Contribute your expertise to help our initiatives succeed.</p>
                    <p className="text-sm font-medium">Next Steps:</p>
                    <ul className="list-disc pl-6 text-xs">
                      <li>Complete volunteer interest form</li>
                      <li>Join our mentor network</li>
                      <li>Participate in upcoming events</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="font-medium text-blue-700 mb-2">Contact Information</p>
                  <p className="text-sm">Email: mjahmad2024@outlook.com | Phone: +8801336221217</p>
                  <p className="text-sm">LinkedIn: linkedin.com/in/jafor-ahmad | GitHub: github.com/MJ-AHMAD</p>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm italic text-gray-600">
                    "The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-4 text-sm text-gray-600">
            <p>
              <strong>Call to Action Slide Notes:</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>Make the call to action clear, specific, and actionable</li>
              <li>Provide multiple ways to engage based on different supporter capacities</li>
              <li>Include all necessary contact information</li>
              <li>End with an inspirational quote that reinforces the vision</li>
              <li>When presenting, express sincere gratitude and enthusiasm for potential collaboration</li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
