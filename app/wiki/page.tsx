import type { Metadata } from "next"
import WikiClient from "./wiki-client"

export const metadata: Metadata = {
  title: "Wiki - Nexara Documentation Hub",
  description:
    "Comprehensive documentation for the Nexara platform and its three core initiatives: Yunus Inspire, Trusted Ally, and Infinity Nexus.",
  keywords: [
    "nexara",
    "wiki",
    "documentation",
    "yunus inspire",
    "trusted ally",
    "infinity nexus",
    "guides",
    "tutorials",
  ],
  openGraph: {
    title: "Nexara Wiki - Complete Documentation",
    description: "Access comprehensive guides, tutorials, and documentation for all Nexara initiatives and features.",
    type: "website",
  },
}

export default function WikiPage() {
  return <WikiClient />
}
