"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Check, Download, FileText, Palette, Type, MessageSquare, Grid, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function BrandGuidelinesClient() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>About These Guidelines</CardTitle>
          <CardDescription>
            This document establishes the official standards for representing Nexara and its three core initiatives:
            Yunus Inspire, Trusted Ally & Infinity Nexus.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Consistent branding is essential to building recognition and trust. These guidelines ensure that Nexara and
            its initiatives are represented consistently across all platforms and materials.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download PDF Guidelines
            </Button>
            <Button variant="outline" className="gap-2">
              <FileText className="h-4 w-4" />
              Download Brand Assets
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="logo" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
          <TabsTrigger value="logo" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden md:inline">Logo</span>
          </TabsTrigger>
          <TabsTrigger value="colors" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span className="hidden md:inline">Colors</span>
          </TabsTrigger>
          <TabsTrigger value="typography" className="flex items-center gap-2">
            <Type className="h-4 w-4" />
            <span className="hidden md:inline">Typography</span>
          </TabsTrigger>
          <TabsTrigger value="voice" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span className="hidden md:inline">Voice & Tone</span>
          </TabsTrigger>
          <TabsTrigger value="initiatives" className="flex items-center gap-2">
            <Grid className="h-4 w-4" />
            <span className="hidden md:inline">Initiatives</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="logo" className="space-y-6 mt-6">
          <h2 className="text-2xl font-bold">Logo Guidelines</h2>
          <p className="text-gray-600 dark:text-gray-400">
            The Nexara logo is the primary visual identifier of our brand. It should be used consistently and
            respectfully across all platforms and materials.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Primary Logo</CardTitle>
                <CardDescription>Use this version whenever possible</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900 rounded-md">
                <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold text-4xl">N</span>
                </div>
                <p className="mt-4 text-xl font-bold">Nexara</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monochrome Logo</CardTitle>
                <CardDescription>For use on colored backgrounds or in print</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900 rounded-md">
                <div className="h-24 w-24 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center">
                  <span className="text-white dark:text-gray-900 font-bold text-4xl">N</span>
                </div>
                <p className="mt-4 text-xl font-bold">Nexara</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-bold mt-8">Logo Clear Space</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Always maintain a minimum clear space around the logo equal to the height of the "N" in the logo.
          </p>

          <h3 className="text-xl font-bold mt-8">Incorrect Logo Usage</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 border border-red-200 rounded-md bg-red-50 dark:bg-red-900/20 dark:border-red-800">
              <p className="text-red-600 dark:text-red-400 font-medium">Don't stretch or distort</p>
            </div>
            <div className="p-4 border border-red-200 rounded-md bg-red-50 dark:bg-red-900/20 dark:border-red-800">
              <p className="text-red-600 dark:text-red-400 font-medium">Don't change colors</p>
            </div>
            <div className="p-4 border border-red-200 rounded-md bg-red-50 dark:bg-red-900/20 dark:border-red-800">
              <p className="text-red-600 dark:text-red-400 font-medium">Don't add effects</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="colors" className="space-y-6 mt-6">
          <h2 className="text-2xl font-bold">Color Palette</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Our color palette is designed to reflect the diversity and vibrancy of our initiatives while maintaining a
            cohesive brand identity.
          </p>

          <h3 className="text-xl font-bold mt-8">Primary Colors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <ColorSwatch name="Nexara Blue" hex="#3B82F6" className="bg-blue-500" />
            <ColorSwatch name="Nexara Emerald" hex="#10B981" className="bg-emerald-500" />
            <ColorSwatch name="Nexara Purple" hex="#8B5CF6" className="bg-purple-500" />
          </div>

          <h3 className="text-xl font-bold mt-8">Initiative Colors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <ColorSwatch name="Yunus Inspire Blue" hex="#3B82F6" className="bg-blue-500" />
            <ColorSwatch name="Trusted Ally Emerald" hex="#10B981" className="bg-emerald-500" />
            <ColorSwatch name="Infinity Nexus Purple" hex="#8B5CF6" className="bg-purple-500" />
          </div>

          <h3 className="text-xl font-bold mt-8">Neutral Colors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <ColorSwatch name="Gray 900" hex="#111827" className="bg-gray-900" />
            <ColorSwatch name="Gray 700" hex="#374151" className="bg-gray-700" />
            <ColorSwatch name="Gray 500" hex="#6B7280" className="bg-gray-500" />
            <ColorSwatch name="Gray 100" hex="#F3F4F6" className="bg-gray-100" />
          </div>
        </TabsContent>

        <TabsContent value="typography" className="space-y-6 mt-6">
          <h2 className="text-2xl font-bold">Typography</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Typography plays a crucial role in our brand identity. Consistent use of fonts helps maintain a cohesive
            look and feel across all platforms.
          </p>

          <h3 className="text-xl font-bold mt-8">Primary Font: Inter</h3>
          <div className="mt-4 space-y-4">
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-md">
              <p className="text-4xl font-bold">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj</p>
              <p className="text-gray-500 mt-2">Inter Bold - Used for headings and titles</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-md">
              <p className="text-2xl font-medium">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj</p>
              <p className="text-gray-500 mt-2">Inter Medium - Used for subheadings</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-md">
              <p className="text-xl">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj</p>
              <p className="text-gray-500 mt-2">Inter Regular - Used for body text</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mt-8">Font Hierarchy</h3>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
              <h1 className="text-4xl font-bold">Heading 1</h1>
              <p className="text-gray-500 mt-1">Inter Bold, 36px/2.25rem</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
              <h2 className="text-3xl font-bold">Heading 2</h2>
              <p className="text-gray-500 mt-1">Inter Bold, 30px/1.875rem</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
              <h3 className="text-2xl font-bold">Heading 3</h3>
              <p className="text-gray-500 mt-1">Inter Bold, 24px/1.5rem</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
              <h4 className="text-xl font-bold">Heading 4</h4>
              <p className="text-gray-500 mt-1">Inter Bold, 20px/1.25rem</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
              <p className="text-base">Body Text</p>
              <p className="text-gray-500 mt-1">Inter Regular, 16px/1rem</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
              <p className="text-sm">Small Text</p>
              <p className="text-gray-500 mt-1">Inter Regular, 14px/0.875rem</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="voice" className="space-y-6 mt-6">
          <h2 className="text-2xl font-bold">Voice & Tone</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Our voice and tone reflect our values and mission. They guide how we communicate with our audience across
            all channels.
          </p>

          <h3 className="text-xl font-bold mt-8">Brand Voice</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Empowering</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We inspire action and enable positive change. Our communication should empower people to make a
                  difference.
                </p>
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                  <p className="text-green-700 dark:text-green-400 font-medium">
                    ✓ "Together, we can create lasting change."
                  </p>
                </div>
                <div className="mt-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-md">
                  <p className="text-red-700 dark:text-red-400 font-medium">✗ "We'll solve these problems for you."</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Inclusive</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We value diversity and inclusion. Our language should be accessible and welcoming to people from all
                  backgrounds.
                </p>
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                  <p className="text-green-700 dark:text-green-400 font-medium">
                    ✓ "Everyone has a role to play in our community."
                  </p>
                </div>
                <div className="mt-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-md">
                  <p className="text-red-700 dark:text-red-400 font-medium">
                    ✗ "Only experts can understand this approach."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Authentic</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We are genuine and transparent. Our communication should be honest, clear, and reflect our true
                  values.
                </p>
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                  <p className="text-green-700 dark:text-green-400 font-medium">
                    ✓ "We're learning and growing alongside our community."
                  </p>
                </div>
                <div className="mt-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-md">
                  <p className="text-red-700 dark:text-red-400 font-medium">
                    ✗ "We have all the answers to complex global challenges."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Forward-thinking</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We are innovative and future-oriented. Our communication should reflect our commitment to progress and
                  innovation.
                </p>
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                  <p className="text-green-700 dark:text-green-400 font-medium">
                    ✓ "Exploring new approaches to create sustainable solutions."
                  </p>
                </div>
                <div className="mt-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-md">
                  <p className="text-red-700 dark:text-red-400 font-medium">
                    ✗ "Sticking with traditional methods that worked in the past."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-bold mt-8">Tone Considerations</h3>
          <div className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Adjust for Context</CardTitle>
              </CardHeader>
              <CardContent>
                <p>While our voice remains consistent, our tone should adapt to different situations and audiences:</p>
                <ul className="mt-4 space-y-2 list-disc pl-5">
                  <li>
                    <span className="font-medium">Educational content:</span> Clear, informative, and supportive
                  </li>
                  <li>
                    <span className="font-medium">Crisis communication:</span> Calm, direct, and compassionate
                  </li>
                  <li>
                    <span className="font-medium">Celebrations:</span> Enthusiastic, warm, and appreciative
                  </li>
                  <li>
                    <span className="font-medium">Technical documentation:</span> Precise, straightforward, and helpful
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="initiatives" className="space-y-6 mt-6">
          <h2 className="text-2xl font-bold">Initiative Branding</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Each of our three initiatives has its own distinct identity while remaining part of the Nexara family.
          </p>

          <h3 className="text-xl font-bold mt-8">Naming Conventions</h3>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Full References</CardTitle>
              <CardDescription>When referring to all three initiatives together</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
                <p className="font-medium">Yunus Inspire, Trusted Ally & Infinity Nexus</p>
              </div>
              <ul className="mt-4 space-y-2 list-disc pl-5">
                <li>Always maintain this exact order</li>
                <li>Use an ampersand (&) rather than "and"</li>
                <li>Ensure proper capitalization of all words</li>
                <li>Do not use abbreviations in formal contexts</li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Card>
              <CardHeader className="bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-800">
                <CardTitle className="text-blue-700 dark:text-blue-400">Yunus Inspire</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p>Social impact and microfinance initiatives inspired by Dr. Muhammad Yunus's principles.</p>
                <div className="mt-4">
                  <p className="font-medium">Color: Blue (#3B82F6)</p>
                  <div className="h-6 w-full bg-blue-500 rounded mt-1"></div>
                </div>
                <div className="mt-4">
                  <p className="font-medium">Correct Usage:</p>
                  <ul className="mt-2 space-y-1 list-disc pl-5">
                    <li>Yunus Inspire (both words capitalized)</li>
                    <li>Yunus Inspire's programs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-emerald-50 dark:bg-emerald-900/20 border-b border-emerald-100 dark:border-emerald-800">
                <CardTitle className="text-emerald-700 dark:text-emerald-400">Trusted Ally</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p>Community building and support systems focused on creating resilient social networks.</p>
                <div className="mt-4">
                  <p className="font-medium">Color: Emerald (#10B981)</p>
                  <div className="h-6 w-full bg-emerald-500 rounded mt-1"></div>
                </div>
                <div className="mt-4">
                  <p className="font-medium">Correct Usage:</p>
                  <ul className="mt-2 space-y-1 list-disc pl-5">
                    <li>Trusted Ally (both words capitalized)</li>
                    <li>Trusted Ally's community</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-purple-50 dark:bg-purple-900/20 border-b border-purple-100 dark:border-purple-800">
                <CardTitle className="text-purple-700 dark:text-purple-400">Infinity Nexus</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p>Technology and innovation projects that connect and amplify the impact of our initiatives.</p>
                <div className="mt-4">
                  <p className="font-medium">Color: Purple (#8B5CF6)</p>
                  <div className="h-6 w-full bg-purple-500 rounded mt-1"></div>
                </div>
                <div className="mt-4">
                  <p className="font-medium">Correct Usage:</p>
                  <ul className="mt-2 space-y-1 list-disc pl-5">
                    <li>Infinity Nexus (both words capitalized)</li>
                    <li>Infinity Nexus' technology</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-bold mt-8">Visual Indicators</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Use the appropriate colored dot indicator before initiative names in navigation, lists, and UI elements.
          </p>
          <div className="mt-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-md">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                <span>Yunus Inspire</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-emerald-500 mr-2"></div>
                <span>Trusted Ally</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
                <span>Infinity Nexus</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Implementation Guidelines</CardTitle>
          <CardDescription>How to apply these brand guidelines across different platforms</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium">Website</h3>
              <ul className="mt-2 space-y-2 list-disc pl-5">
                <li>Use visual indicators in navigation menus</li>
                <li>Include the full reference in the footer</li>
                <li>Maintain consistent color coding</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Documentation</h3>
              <ul className="mt-2 space-y-2 list-disc pl-5">
                <li>Use the full reference on first mention</li>
                <li>Include visual indicators in section headings</li>
                <li>Use established color coding</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Code</h3>
              <ul className="mt-2 space-y-2 list-disc pl-5">
                <li>Use consistent naming conventions</li>
                <li>Follow established color codes for UI elements</li>
                <li>Maintain brand voice in comments and docs</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-12">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 via-emerald-50 to-purple-50 border border-gray-200">
          <span className="text-sm text-gray-700">
            For questions about brand usage, contact{" "}
            <a href="mailto:brand@nexara.com" className="text-blue-600 hover:underline font-medium">
              brand@nexara.com
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

function ColorSwatch({ name, hex, className }: { name: string; hex: string; className: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="overflow-hidden rounded-md border border-gray-200 dark:border-gray-800">
      <div className={`h-24 ${className}`}></div>
      <div className="p-4 bg-white dark:bg-gray-950">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{hex}</p>
          </div>
          <button
            onClick={copyToClipboard}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={`Copy ${hex} to clipboard`}
          >
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  )
}
