import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Code of Conduct | Nexara",
  description: "Code of Conduct for the Nexara community and all associated projects",
}

export default function CodeOfConductPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Code of Conduct</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Our commitment to fostering an open and welcoming environment
        </p>

        <Separator className="my-8" />

        <Card>
          <CardContent className="pt-6">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <h2>Our Pledge</h2>
              <p>
                We as members, contributors, and leaders pledge to make participation in our community a harassment-free
                experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex
                characteristics, gender identity and expression, level of experience, education, socio-economic status,
                nationality, personal appearance, race, religion, or sexual identity and orientation.
              </p>
              <p>
                We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and
                healthy community.
              </p>

              <h2>Our Standards</h2>
              <p>Examples of behavior that contributes to a positive environment for our community include:</p>
              <ul>
                <li>Demonstrating empathy and kindness toward other people</li>
                <li>Being respectful of differing opinions, viewpoints, and experiences</li>
                <li>Giving and gracefully accepting constructive feedback</li>
                <li>
                  Accepting responsibility and apologizing to those affected by our mistakes, and learning from the
                  experience
                </li>
                <li>Focusing on what is best not just for us as individuals, but for the overall community</li>
              </ul>

              <p>Examples of unacceptable behavior include:</p>
              <ul>
                <li>The use of sexualized language or imagery, and sexual attention or advances of any kind</li>
                <li>Trolling, insulting or derogatory comments, and personal or political attacks</li>
                <li>Public or private harassment</li>
                <li>
                  Publishing others' private information, such as a physical or email address, without their explicit
                  permission
                </li>
                <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
              </ul>

              <h2>Enforcement Responsibilities</h2>
              <p>
                Project maintainers are responsible for clarifying and enforcing our standards of acceptable behavior
                and will take appropriate and fair corrective action in response to any behavior that they deem
                inappropriate, threatening, offensive, or harmful.
              </p>
              <p>
                Project maintainers have the right and responsibility to remove, edit, or reject comments, commits,
                code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will
                communicate reasons for moderation decisions when appropriate.
              </p>

              <h2>Scope</h2>
              <p>
                This Code of Conduct applies within all community spaces, and also applies when an individual is
                officially representing the community in public spaces. Examples of representing our community include
                using an official e-mail address, posting via an official social media account, or acting as an
                appointed representative at an online or offline event.
              </p>

              <h2>Enforcement</h2>
              <p>
                Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the project team
                at conduct@nexara.org. All complaints will be reviewed and investigated promptly and fairly.
              </p>
              <p>
                All project maintainers are obligated to respect the privacy and security of the reporter of any
                incident.
              </p>

              <h2>Attribution</h2>
              <p>
                This Code of Conduct is adapted from the{" "}
                <a href="https://www.contributor-covenant.org" className="text-primary hover:underline">
                  Contributor Covenant
                </a>
                , version 2.0, available at
                <a
                  href="https://www.contributor-covenant.org/version/2/0/code_of_conduct.html"
                  className="text-primary hover:underline ml-1"
                >
                  https://www.contributor-covenant.org/version/2/0/code_of_conduct.html
                </a>
                .
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
