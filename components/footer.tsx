import Link from "next/link"
import { GitHubIcon, CoffeeIcon } from "@/components/custom-icons"
import { InitiativeIndicator } from "@/components/initiative-indicator"
import {
  BookOpen,
  Code,
  FileText,
  HelpCircle,
  Heart,
  Info,
  LifeBuoy,
  Map,
  PenTool,
  Rocket,
  Settings,
  Shield,
  Users,
  BookMarked,
  Compass,
  FileCode,
  GraduationCap,
  Lightbulb,
  Calendar,
  Mail,
  AlertCircle,
  Award,
  TrendingUp,
  DollarSign,
} from "lucide-react"

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
                  href="/brand-guidelines"
                  className="text-gray-600 hover:text-violet-600 transition-colors flex items-center gap-2 group"
                >
                  <Shield className="h-4 w-4 text-violet-500 group-hover:text-violet-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Brand Guidelines</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/brand-assets"
                  className="text-gray-600 hover:text-violet-600 transition-colors flex items-center gap-2 group"
                >
                  <Award className="h-4 w-4 text-violet-500 group-hover:text-violet-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Brand Assets</span>
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
              <li>
                <Link
                  href="/investment-overview"
                  className="text-gray-600 hover:text-rose-600 transition-colors flex items-center gap-2 group"
                >
                  <TrendingUp className="h-4 w-4 text-rose-500 group-hover:text-rose-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Investment Overview</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/funding-plans"
                  className="text-gray-600 hover:text-rose-600 transition-colors flex items-center gap-2 group"
                >
                  <DollarSign className="h-4 w-4 text-rose-500 group-hover:text-rose-600 transition-colors" />
                  <span className="group-hover:font-medium transition-all">Funding Plans</span>
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
