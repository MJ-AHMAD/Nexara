import type { Metadata } from "next"
import { InitiativeRelationshipDiagram } from "@/components/initiative-relationship-diagram"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InitiativesList } from "@/components/initiatives-list"

export const metadata: Metadata = {
  title: "Initiative Relationship | Nexara",
  description: "How Yunus Inspire, Trusted Ally & Infinity Nexus work together within the Nexara ecosystem",
}

export default function InitiativeRelationshipPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Initiative Relationship</h1>
          <p className="text-gray-500">
            Understanding how <InitiativesList showIndicators={false} className="inline" /> work together
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Synergy Between Initiatives</CardTitle>
            <CardDescription>How our three core initiatives complement and strengthen each other</CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              The three initiatives of Nexara—Yunus Inspire, Trusted Ally, and Infinity Nexus—are designed to work in
              harmony, each addressing different aspects of community development and empowerment while supporting a
              unified vision.
            </p>

            <h3>Complementary Focus Areas</h3>
            <ul>
              <li>
                <strong className="text-blue-600">Yunus Inspire</strong> focuses on educational initiatives and
                knowledge sharing
              </li>
              <li>
                <strong className="text-emerald-600">Trusted Ally</strong> emphasizes sustainable community development
                in Cox's Bazar
              </li>
              <li>
                <strong className="text-purple-600">Infinity Nexus</strong> drives technological innovation and
                future-focused solutions
              </li>
            </ul>

            <h3>Shared Resources and Knowledge</h3>
            <p>Each initiative contributes unique expertise and resources to the others:</p>
            <ul>
              <li>Educational frameworks from Yunus Inspire inform community programs in Trusted Ally</li>
              <li>Technology solutions from Infinity Nexus enhance educational delivery in Yunus Inspire</li>
              <li>Community insights from Trusted Ally guide relevant innovation in Infinity Nexus</li>
            </ul>
          </CardContent>
        </Card>

        <InitiativeRelationshipDiagram />

        <Card>
          <CardHeader>
            <CardTitle>Implementation Strategy</CardTitle>
            <CardDescription>How to effectively communicate the relationship between initiatives</CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>When communicating about multiple initiatives:</p>

            <ol>
              <li>Always maintain the established order: Yunus Inspire, Trusted Ally & Infinity Nexus</li>
              <li>Use visual indicators consistently to reinforce recognition</li>
              <li>
                Highlight the complementary nature of the initiatives rather than treating them as separate entities
              </li>
              <li>When discussing specific projects, clearly indicate which initiative(s) the project falls under</li>
              <li>
                Use the relationship diagram to explain how initiatives interact when introducing the overall vision
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
