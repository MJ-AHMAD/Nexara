import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InitiativeIndicator } from "@/components/initiative-indicator"
import { InitiativeBadge } from "@/components/initiative-badge"
import { InitiativesList } from "@/components/initiatives-list"

export function InitiativeStyleGuide() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Initiative Naming Conventions</CardTitle>
          <CardDescription>Consistent naming standards for all three initiatives across the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="full">Full References</TabsTrigger>
              <TabsTrigger value="individual">Individual References</TabsTrigger>
              <TabsTrigger value="possessive">Possessive Forms</TabsTrigger>
            </TabsList>

            <TabsContent value="full" className="space-y-4">
              <div className="border rounded-lg p-4 space-y-3">
                <h3 className="font-medium text-gray-900">Correct Usage</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700 p-2 bg-green-50 border border-green-100 rounded">
                    Yunus Inspire, Trusted Ally & Infinity Nexus
                  </p>
                  <p className="text-sm text-gray-700 p-2 bg-green-50 border border-green-100 rounded">
                    Our three initiatives: Yunus Inspire, Trusted Ally & Infinity Nexus
                  </p>
                </div>

                <h3 className="font-medium text-gray-900">Incorrect Usage</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700 p-2 bg-red-50 border border-red-100 rounded">
                    <s>Yunus Inspire, Trusted Ally and Infinity Nexus</s> (use ampersand, not "and")
                  </p>
                  <p className="text-sm text-gray-700 p-2 bg-red-50 border border-red-100 rounded">
                    <s>Trusted Ally, Yunus Inspire & Infinity Nexus</s> (incorrect order)
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="individual" className="space-y-4">
              <div className="border rounded-lg p-4 space-y-3">
                <h3 className="font-medium text-gray-900">Correct Usage</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700 p-2 bg-green-50 border border-green-100 rounded">Yunus Inspire</p>
                  <p className="text-sm text-gray-700 p-2 bg-green-50 border border-green-100 rounded">Trusted Ally</p>
                  <p className="text-sm text-gray-700 p-2 bg-green-50 border border-green-100 rounded">
                    Infinity Nexus
                  </p>
                </div>

                <h3 className="font-medium text-gray-900">Incorrect Usage</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700 p-2 bg-red-50 border border-red-100 rounded">
                    <s>Yunus inspire</s> (lowercase "inspire")
                  </p>
                  <p className="text-sm text-gray-700 p-2 bg-red-50 border border-red-100 rounded">
                    <s>trusted ally</s> (lowercase)
                  </p>
                  <p className="text-sm text-gray-700 p-2 bg-red-50 border border-red-100 rounded">
                    <s>Infinity-Nexus</s> (with hyphen)
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="possessive" className="space-y-4">
              <div className="border rounded-lg p-4 space-y-3">
                <h3 className="font-medium text-gray-900">Correct Usage</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700 p-2 bg-green-50 border border-green-100 rounded">
                    Yunus Inspire's mission
                  </p>
                  <p className="text-sm text-gray-700 p-2 bg-green-50 border border-green-100 rounded">
                    Trusted Ally's approach
                  </p>
                  <p className="text-sm text-gray-700 p-2 bg-green-50 border border-green-100 rounded">
                    Infinity Nexus' technology (or Infinity Nexus's technology)
                  </p>
                </div>

                <h3 className="font-medium text-gray-900">Incorrect Usage</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700 p-2 bg-red-50 border border-red-100 rounded">
                    <s>Yunus Inspires' mission</s> (incorrect name)
                  </p>
                  <p className="text-sm text-gray-700 p-2 bg-red-50 border border-red-100 rounded">
                    <s>Trusted Allies' approach</s> (incorrect plural)
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Visual Identity</CardTitle>
          <CardDescription>Color coding and visual indicators for each initiative</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 flex flex-col items-center space-y-3">
                <InitiativeIndicator initiative="yunus" size="lg" />
                <h3 className="font-medium text-gray-900">Yunus Inspire</h3>
                <div className="text-sm text-gray-500">Blue (#3B82F6)</div>
                <div className="flex space-x-2">
                  <InitiativeBadge initiative="yunus" />
                </div>
              </div>

              <div className="border rounded-lg p-4 flex flex-col items-center space-y-3">
                <InitiativeIndicator initiative="trusted" size="lg" />
                <h3 className="font-medium text-gray-900">Trusted Ally</h3>
                <div className="text-sm text-gray-500">Emerald (#10B981)</div>
                <div className="flex space-x-2">
                  <InitiativeBadge initiative="trusted" />
                </div>
              </div>

              <div className="border rounded-lg p-4 flex flex-col items-center space-y-3">
                <InitiativeIndicator initiative="infinity" size="lg" />
                <h3 className="font-medium text-gray-900">Infinity Nexus</h3>
                <div className="text-sm text-gray-500">Purple (#8B5CF6)</div>
                <div className="flex space-x-2">
                  <InitiativeBadge initiative="infinity" />
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Combined Presentation</h3>
              <InitiativesList />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage Guidelines</CardTitle>
          <CardDescription>How to properly implement initiative naming across the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Headings and Titles</h3>
              <p className="text-sm text-gray-700">
                When using initiative names in headings or titles, maintain proper capitalization and use visual
                indicators where appropriate.
              </p>
              <div className="mt-3 p-3 bg-gray-50 rounded-md">
                <h4 className="text-lg font-medium flex items-center">
                  <InitiativeIndicator initiative="yunus" className="mr-2" />
                  Yunus Inspire: Educational Initiatives
                </h4>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Body Text</h3>
              <p className="text-sm text-gray-700">
                In body text, use the full name on first mention, then you may use shortened references in subsequent
                mentions within the same section.
              </p>
              <div className="mt-3 p-3 bg-gray-50 rounded-md text-sm text-gray-700">
                <p>
                  <InitiativeIndicator initiative="trusted" className="inline-block mr-1" />{" "}
                  <strong>Trusted Ally</strong> works with local communities to develop sustainable solutions. Through
                  these partnerships, <strong>Trusted Ally</strong> has established several successful programs.
                </p>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Navigation and UI Elements</h3>
              <p className="text-sm text-gray-700">
                Always include visual indicators when listing initiatives in navigation menus, sidebars, or other UI
                elements.
              </p>
              <div className="mt-3 p-3 bg-gray-50 rounded-md">
                <div className="flex flex-col space-y-2">
                  <Link href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                    <InitiativeIndicator initiative="yunus" className="mr-2" />
                    <span>Yunus Inspire</span>
                  </Link>
                  <Link href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                    <InitiativeIndicator initiative="trusted" className="mr-2" />
                    <span>Trusted Ally</span>
                  </Link>
                  <Link href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                    <InitiativeIndicator initiative="infinity" className="mr-2" />
                    <span>Infinity Nexus</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
