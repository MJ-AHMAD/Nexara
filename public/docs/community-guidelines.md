# Community Guidelines

These guidelines outline how we work together to create a positive, productive environment for all community members.

## Our Community Values

The Nexara community is dedicated to providing a welcoming, inclusive, and harassment-free experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, age, race, ethnicity, nationality, religion, or technical experience.

We do not tolerate harassment of community members in any form. Participants violating these rules may be sanctioned or expelled from the community at the discretion of the core team.

### Core Principles

- **Be respectful and inclusive:** Treat all individuals with respect. Listen actively and consider diverse perspectives.
- **Be collaborative:** Work together to improve the project. Assume good intentions and be open to constructive feedback.
- **Be transparent:** Communicate openly about decisions, challenges, and processes.
- **Focus on the community:** Put the needs of the community and project above individual preferences.
- **Practice empathy:** Consider how your words and actions might affect others in the community.

## Communication Guidelines

### GitHub

- Use clear, descriptive titles for issues and pull requests
- Provide context and relevant details
- Stay on topic in issue discussions
- Be patient with reviewers and contributors
- Follow the pull request template and contribution guidelines

### Discord

- Use appropriate channels for different topics
- Avoid excessive pinging or direct messaging without permission
- Share knowledge generously and help newcomers
- Keep discussions constructive and relevant
- Respect others' time zones and response times

### Community Calls

- Arrive on time if you've committed to attend
- Follow the agenda and respect time allocations
- Give everyone a chance to speak
- Use the mute button when not speaking
- Record decisions and action items

## Contribution Process

We welcome contributions from everyone, regardless of experience level. Here's how to get started:

### For First-Time Contributors

1. Familiarize yourself with the project by reading the README and documentation
2. Look for issues labeled "good first issue" or "help wanted"
3. Comment on the issue you'd like to work on to express interest
4. Fork the repository and create a branch for your changes
5. Submit a pull request with your changes
6. Respond to feedback during the review process

### For Regular Contributors

- Help review pull requests from other contributors
- Participate in discussions about project direction
- Mentor newcomers and help them navigate the codebase
- Suggest improvements and new features
- Help maintain documentation and tests

For more details, read our [contribution guidelines](CONTRIBUTING.md).

## Conflict Resolution

In any community, conflicts and disagreements may arise. Here's how we address them:

### For Disagreements

1. Start with direct, respectful communication with the involved parties
2. Focus on the issue, not the person
3. Consider alternative perspectives and compromise
4. If needed, ask a neutral community member to mediate
5. For technical disagreements, rely on data and prototypes when possible

### For Code of Conduct Violations

If you experience or witness behavior that violates our Code of Conduct:

1. Document the incident with as much detail as possible
2. Report it to the core team at conduct@nexara.org
3. All reports will be reviewed and investigated promptly
4. The core team will respect confidentiality requests to protect victims of abuse

Consequences for violations may include warnings, temporary bans, or permanent expulsion from the community, depending on the severity and frequency of the violation.

---

These guidelines will evolve as our community grows. We welcome feedback and suggestions for improvement.
\`\`\`

Now, let's update the footer to ensure the links point to the correct pages:

```typescriptreact file="components/footer.tsx"
[v0-no-op-code-block-prefix]import Link from "next/link"
import { GitHubIcon, CoffeeIcon } from "@/components/custom-icons"
import { InitiativeIndicator } from "@/components/initiative-indicator"
import { BookOpen, Code, FileText, HelpCircle, Heart, Info, LifeBuoy, Map, PenTool, Rocket, Settings, Shield, Users, BookMarked, Compass, FileCode, GraduationCap, Lightbulb, Calendar, Mail, AlertCircle, Award } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {/* Initiatives Column */}
          <div className="space-y-5">
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <Rocket className="h-5 w-5 text-blue-600" />
              <span>Initiatives</span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/yunus-inspire"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group"
                >
                  <InitiativeIndicator initiative="yunus" className="mr-2 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:font-medium transition-all">Yunus Inspire</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/trusted-ally"
                  className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center group"
                >
                  <InitiativeIndicator
                    initiative="trusted"
                    className="mr-2 group-hover:scale-110 transition-transform"
                  />
                  <span className="group-hover:font-medium transition-all">Trusted Ally</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/infinity-nexus"
                  className="text-gray-600 hover:text-purple-600 transition-colors flex items-center group"
                >
                  <InitiativeIndicator
                    initiative="infinity"
                    className="mr-2 group-hover:scale-110 transition-transform"
                  />
                  <span className="group-hover:font-medium transition-all">Infinity Nexus</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/initiative-relationship"
                  className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-2 group"
                >
                  <Compass className="h-4 w-4 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Relationship Diagram</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Project Column */}
          <div className="space-y-5">
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <FileCode className="h-5 w-5 text-violet-600" />
              <span>Project</span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-violet-600 transition-colors flex items-center gap-2 group"
                >
                  <Info className="h-4 w-4 text-violet-500 group-hover:text-violet-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">About</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="text-gray-600 hover:text-violet-600 transition-colors flex items-center gap-2 group"
                >
                  <Map className="h-4 w-4 text-violet-500 group-hover:text-violet-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Roadmap</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/style-guide"
                  className="text-gray-600 hover:text-violet-600 transition-colors flex items-center gap-2 group"
                >
                  <PenTool className="h-4 w-4 text-violet-500 group-hover:text-violet-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Style Guide</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/changelog"
                  className="text-gray-600 hover:text-violet-600 transition-colors flex items-center gap-2 group"
                >
                  <FileText className="h-4 w-4 text-violet-500 group-hover:text-violet-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Changelog</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-violet-600 transition-colors flex items-center gap-2 group"
                >
                  <HelpCircle className="h-4 w-4 text-violet-500 group-hover:text-violet-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">FAQ</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-5">
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-amber-600" />
              <span>Resources</span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/docs"
                  className="text-gray-600 hover:text-amber-600 transition-colors flex items-center gap-2 group"
                >
                  <BookMarked className="h-4 w-4 text-amber-500 group-hover:text-amber-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Documentation</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/api"
                  className="text-gray-600 hover:text-amber-600 transition-colors flex items-center gap-2 group"
                >
                  <Code className="h-4 w-4 text-amber-500 group-hover:text-amber-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">API</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-gray-600 hover:text-amber-600 transition-colors flex items-center gap-2 group"
                >
                  <GraduationCap className="h-4 w-4 text-amber-500 group-hover:text-amber-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Tutorials</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/examples"
                  className="text-gray-600 hover:text-amber-600 transition-colors flex items-center gap-2 group"
                >
                  <Lightbulb className="h-4 w-4 text-amber-500 group-hover:text-amber-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Examples</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/wiki"
                  className="text-gray-600 hover:text-amber-600 transition-colors flex items-center gap-2 group"
                >
                  <FileText className="h-4 w-4 text-amber-500 group-hover:text-amber-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Wiki</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Column */}
          <div className="space-y-5">
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <Users className="h-5 w-5 text-green-600" />
              <span>Community</span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/code-of-conduct"
                  className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-2 group"
                >
                  <Shield className="h-4 w-4 text-green-500 group-hover:text-green-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Code of Conduct</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contributing"
                  className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-2 group"
                >
                  <Heart className="h-4 w-4 text-green-500 group-hover:text-green-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Contributing</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/governance"
                  className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-2 group"
                >
                  <Settings className="h-4 w-4 text-green-500 group-hover:text-green-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Governance</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/community-guidelines"
                  className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-2 group"
                >
                  <FileText className="h-4 w-4 text-green-500 group-hover:text-green-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Guidelines</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-2 group"
                >
                  <Calendar className="h-4 w-4 text-green-500 group-hover:text-green-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Events</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-5">
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <LifeBuoy className="h-5 w-5 text-rose-600" />
              <span>Support</span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://github.com/sponsors/MJ-AHMAD"
                  className="text-gray-600 hover:text-rose-600 transition-colors flex items-center gap-2 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="h-4 w-4 text-rose-500 group-hover:text-rose-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">GitHub Sponsors</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://ko-fi.com/mjahmad"
                  className="text-gray-600 hover:text-rose-600 transition-colors flex items-center gap-2 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CoffeeIcon className="h-4 w-4 text-rose-500 group-hover:text-rose-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Ko-fi</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/issues"
                  className="text-gray-600 hover:text-rose-600 transition-colors flex items-center gap-2 group"
                >
                  <AlertCircle className="h-4 w-4 text-rose-500 group-hover:text-rose-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Report Issues</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-rose-600 transition-colors flex items-center gap-2 group"
                >
                  <Mail className="h-4 w-4 text-rose-500 group-hover:text-rose-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Contact</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-gray-600 hover:text-rose-600 transition-colors flex items-center gap-2 group"
                >
                  <Shield className="h-4 w-4 text-rose-500 group-hover:text-rose-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Security</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <p className="ml-3 text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Nexara. All rights reserved. This project is open source and available
                under the
                <Link href="/license" className="text-blue-600 hover:underline mx-1 font-medium">
                  MIT License
                </Link>
                .
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">
                <Shield className="h-3.5 w-3.5" />
                <span>Privacy</span>
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">
                <FileText className="h-3.5 w-3.5" />
                <span>Terms</span>
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">
                <Map className="h-3.5 w-3.5" />
                <span>Sitemap</span>
              </Link>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 via-emerald-50 to-purple-50 border border-gray-200">
              <span className="text-sm text-gray-700">
                Empowering communities through <span className="font-medium text-blue-600">Yunus Inspire</span>,{" "}
                <span className="font-medium text-emerald-600">Trusted Ally</span> &{" "}
                <span className="font-medium text-purple-600">Infinity Nexus</span> — by{" "}
                <Link href="/mjahmad" className="text-gray-900 hover:underline font-bold">
                  MJ AHMAD
                </Link>
              </span>
              <Award className="ml-2 h-4 w-4 text-amber-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
