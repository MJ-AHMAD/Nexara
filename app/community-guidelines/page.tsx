import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Community Guidelines | Nexara",
  description: "Guidelines for participating in the Nexara community",
}

export default function CommunityGuidelinesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Community Guidelines</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How we work together to create a positive, productive environment
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Our Community Values</CardTitle>
              <CardDescription>The principles that guide our interactions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Nexara community is dedicated to providing a welcoming, inclusive, and harassment-free experience
                for everyone, regardless of gender, gender identity and expression, sexual orientation, disability,
                physical appearance, body size, age, race, ethnicity, nationality, religion, or technical experience.
              </p>

              <p>
                We do not tolerate harassment of community members in any form. Participants violating these rules may
                be sanctioned or expelled from the community at the discretion of the core team.
              </p>

              <h3 className="text-xl font-semibold mt-4">Core Principles</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Be respectful and inclusive:</strong> Treat all individuals with respect. Listen actively and
                  consider diverse perspectives.
                </li>
                <li>
                  <strong>Be collaborative:</strong> Work together to improve the project. Assume good intentions and be
                  open to constructive feedback.
                </li>
                <li>
                  <strong>Be transparent:</strong> Communicate openly about decisions, challenges, and processes.
                </li>
                <li>
                  <strong>Focus on the community:</strong> Put the needs of the community and project above individual
                  preferences.
                </li>
                <li>
                  <strong>Practice empathy:</strong> Consider how your words and actions might affect others in the
                  community.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Communication Guidelines</CardTitle>
              <CardDescription>How we interact across our platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-xl font-semibold">GitHub</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use clear, descriptive titles for issues and pull requests</li>
                <li>Provide context and relevant details</li>
                <li>Stay on topic in issue discussions</li>
                <li>Be patient with reviewers and contributors</li>
                <li>Follow the pull request template and contribution guidelines</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4">Discord</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use appropriate channels for different topics</li>
                <li>Avoid excessive pinging or direct messaging without permission</li>
                <li>Share knowledge generously and help newcomers</li>
                <li>Keep discussions constructive and relevant</li>
                <li>Respect others' time zones and response times</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4">Community Calls</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Arrive on time if you've committed to attend</li>
                <li>Follow the agenda and respect time allocations</li>
                <li>Give everyone a chance to speak</li>
                <li>Use the mute button when not speaking</li>
                <li>Record decisions and action items</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contribution Process</CardTitle>
              <CardDescription>How to effectively contribute to Nexara</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We welcome contributions from everyone, regardless of experience level. Here's how to get started:</p>

              <h3 className="text-xl font-semibold">For First-Time Contributors</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Familiarize yourself with the project by reading the README and documentation</li>
                <li>Look for issues labeled "good first issue" or "help wanted"</li>
                <li>Comment on the issue you'd like to work on to express interest</li>
                <li>Fork the repository and create a branch for your changes</li>
                <li>Submit a pull request with your changes</li>
                <li>Respond to feedback during the review process</li>
              </ol>

              <h3 className="text-xl font-semibold mt-4">For Regular Contributors</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Help review pull requests from other contributors</li>
                <li>Participate in discussions about project direction</li>
                <li>Mentor newcomers and help them navigate the codebase</li>
                <li>Suggest improvements and new features</li>
                <li>Help maintain documentation and tests</li>
              </ul>

              <div className="mt-6">
                <Link href="/contributing" className="text-primary hover:underline inline-flex items-center">
                  Read our detailed contribution guidelines
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Conflict Resolution</CardTitle>
              <CardDescription>How we handle disagreements and violations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>In any community, conflicts and disagreements may arise. Here's how we address them:</p>

              <h3 className="text-xl font-semibold">For Disagreements</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Start with direct, respectful communication with the involved parties</li>
                <li>Focus on the issue, not the person</li>
                <li>Consider alternative perspectives and compromise</li>
                <li>If needed, ask a neutral community member to mediate</li>
                <li>For technical disagreements, rely on data and prototypes when possible</li>
              </ol>

              <h3 className="text-xl font-semibold mt-4">For Code of Conduct Violations</h3>
              <p>If you experience or witness behavior that violates our Code of Conduct:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Document the incident with as much detail as possible</li>
                <li>Report it to the core team at conduct@nexara.org</li>
                <li>All reports will be reviewed and investigated promptly</li>
                <li>The core team will respect confidentiality requests to protect victims of abuse</li>
              </ol>

              <p className="mt-4">
                Consequences for violations may include warnings, temporary bans, or permanent expulsion from the
                community, depending on the severity and frequency of the violation.
              </p>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-lg">
              These guidelines will evolve as our community grows. We welcome feedback and suggestions for improvement.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
