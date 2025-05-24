import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Governance | Nexara",
  description: "Governance model for Nexara projects",
}

export default function GovernancePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Project Governance</h1>
        <p className="text-xl text-muted-foreground mb-8">How decisions are made and how the project is managed</p>

        <Separator className="my-8" />

        <Card>
          <CardContent className="pt-6">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p>
                This document outlines the governance model for Nexara projects. It describes the roles,
                responsibilities, and processes for decision making within the project.
              </p>

              <h2>Roles and Responsibilities</h2>

              <h3>Project Maintainer</h3>
              <p>
                The Project Maintainer is responsible for the overall direction and vision of the project. Currently,
                this role is held by MJ-AHMAD.
              </p>
              <p>Responsibilities include:</p>
              <ul>
                <li>Setting the strategic direction of the project</li>
                <li>Making final decisions when consensus cannot be reached</li>
                <li>Managing the release process</li>
                <li>Appointing Core Contributors</li>
                <li>Ensuring the project adheres to its Code of Conduct</li>
              </ul>

              <h3>Core Contributors</h3>
              <p>
                Core Contributors are individuals who have made significant contributions to the project and have been
                granted commit access to the repository.
              </p>
              <p>Responsibilities include:</p>
              <ul>
                <li>Reviewing and merging pull requests</li>
                <li>Triaging issues</li>
                <li>Mentoring new contributors</li>
                <li>Participating in design discussions</li>
                <li>Contributing code, documentation, and other improvements</li>
              </ul>

              <h3>Contributors</h3>
              <p>
                Contributors are individuals who contribute to the project in various ways, such as submitting pull
                requests, reporting issues, or improving documentation.
              </p>

              <h2>Decision Making Process</h2>

              <h3>Feature Requests and Bug Fixes</h3>
              <ol>
                <li>
                  <strong>Proposal</strong>: Anyone can propose a new feature or bug fix by creating an issue in the
                  GitHub repository.
                </li>
                <li>
                  <strong>Discussion</strong>: The proposal is discussed by the community, Core Contributors, and the
                  Project Maintainer.
                </li>
                <li>
                  <strong>Implementation</strong>: If approved, the feature or fix can be implemented by any contributor
                  through a pull request.
                </li>
                <li>
                  <strong>Review</strong>: Pull requests are reviewed by Core Contributors and the Project Maintainer.
                </li>
                <li>
                  <strong>Merge</strong>: Once approved, the pull request is merged by a Core Contributor or the Project
                  Maintainer.
                </li>
              </ol>

              <h3>Major Decisions</h3>
              <p>
                Major decisions that affect the project's direction, architecture, or community require broader
                consensus:
              </p>
              <ol>
                <li>
                  <strong>Proposal</strong>: A detailed proposal is created as an issue or discussion.
                </li>
                <li>
                  <strong>Discussion Period</strong>: A minimum 2-week discussion period allows for community feedback.
                </li>
                <li>
                  <strong>Decision</strong>: The Project Maintainer makes the final decision, taking into account
                  community feedback.
                </li>
              </ol>

              <h2>Becoming a Contributor</h2>
              <p>Anyone can become a contributor by:</p>
              <ul>
                <li>Submitting pull requests</li>
                <li>Reporting and triaging issues</li>
                <li>Improving documentation</li>
                <li>Helping other users</li>
              </ul>

              <h2>Becoming a Core Contributor</h2>
              <p>
                Contributors who consistently make valuable contributions may be invited to become Core Contributors by
                the Project Maintainer. Criteria include:
              </p>
              <ul>
                <li>Quality and quantity of contributions</li>
                <li>Adherence to the project's Code of Conduct</li>
                <li>Participation in discussions and reviews</li>
                <li>Mentorship of other contributors</li>
              </ul>

              <h2>Communication Channels</h2>
              <ul>
                <li>
                  <strong>GitHub Issues and Pull Requests</strong>: For specific code-related discussions
                </li>
                <li>
                  <strong>GitHub Discussions</strong>: For general questions and discussions
                </li>
                <li>
                  <strong>Discord</strong>: For real-time communication and community building
                </li>
              </ul>

              <h2>Changes to Governance</h2>
              <p>
                Changes to this governance document require approval from the Project Maintainer after a public
                discussion period of at least 2 weeks.
              </p>

              <h2>Code of Conduct</h2>
              <p>
                All participants in the project are expected to follow the{" "}
                <a href="/code-of-conduct" className="text-primary hover:underline">
                  Code of Conduct
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
