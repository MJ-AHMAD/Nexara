import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Contributing | Nexara",
  description: "Guidelines for contributing to Nexara projects",
}

export default function ContributingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contributing to Nexara</h1>
        <p className="text-xl text-muted-foreground mb-8">Thank you for considering contributing to our projects</p>

        <Separator className="my-8" />

        <Card>
          <CardContent className="pt-6">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p>
                First off, thank you for considering contributing to Nexara! It's people like you that make this project
                such a great tool for everyone.
              </p>

              <h2>Code of Conduct</h2>
              <p>
                This project and everyone participating in it is governed by the{" "}
                <a href="/code-of-conduct" className="text-primary hover:underline">
                  Nexara Code of Conduct
                </a>
                . By participating, you are expected to uphold this code. Please report unacceptable behavior to{" "}
                <a href="mailto:conduct@nexara.org" className="text-primary hover:underline">
                  conduct@nexara.org
                </a>
                .
              </p>

              <h2>How Can I Contribute?</h2>

              <h3>Reporting Bugs</h3>
              <p>
                This section guides you through submitting a bug report. Following these guidelines helps maintainers
                and the community understand your report, reproduce the behavior, and find related reports.
              </p>
              <p>
                <strong>Before Submitting A Bug Report:</strong>
              </p>
              <ul>
                <li>Check the documentation for a list of common questions and problems.</li>
                <li>Perform a cursory search to see if the problem has already been reported.</li>
                <li>Check if the issue is reproducible with the latest version.</li>
              </ul>

              <h3>Suggesting Enhancements</h3>
              <p>
                This section guides you through submitting an enhancement suggestion, including completely new features
                and minor improvements to existing functionality.
              </p>
              <p>
                <strong>Before Submitting An Enhancement Suggestion:</strong>
              </p>
              <ul>
                <li>Check if the enhancement has already been suggested or implemented.</li>
                <li>Check if the enhancement is compatible with the project's goals.</li>
                <li>Consider whether your idea would be better as a separate project.</li>
              </ul>

              <h3>Your First Code Contribution</h3>
              <p>
                Unsure where to begin contributing? You can start by looking through these `beginner` and `help-wanted`
                issues:
              </p>
              <ul>
                <li>Beginner issues - issues which should only require a few lines of code, and a test or two.</li>
                <li>Help wanted issues - issues which should be a bit more involved than `beginner` issues.</li>
              </ul>

              <h3>Pull Requests</h3>
              <ul>
                <li>Fill in the required template</li>
                <li>Do not include issue numbers in the PR title</li>
                <li>Include screenshots and animated GIFs in your pull request whenever possible</li>
                <li>Follow the style guides</li>
                <li>Include thoughtfully-worded, well-structured tests</li>
                <li>Document new code</li>
                <li>End all files with a newline</li>
              </ul>

              <h2>Styleguides</h2>

              <h3>Git Commit Messages</h3>
              <ul>
                <li>Use the present tense ("Add feature" not "Added feature")</li>
                <li>Use the imperative mood ("Move cursor to..." not "Moves cursor to...")</li>
                <li>Limit the first line to 72 characters or less</li>
                <li>Reference issues and pull requests liberally after the first line</li>
              </ul>

              <h3>JavaScript Styleguide</h3>
              <p>All JavaScript code is linted with ESLint and formatted with Prettier.</p>

              <h3>CSS Styleguide</h3>
              <p>
                We use Tailwind CSS for styling. Please follow the component-based styling approach and ensure
                responsive design for all components.
              </p>

              <h2>Additional Notes</h2>
              <p>
                Thank you for taking the time to read through our contributing guidelines. We appreciate your interest
                in making Nexara better!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
