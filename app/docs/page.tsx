import type { Metadata } from "next"
import DocsClient from "./docs-client"

export const metadata: Metadata = {
  title: "Documentation - Nexara Platform",
  description:
    "Comprehensive documentation for the Nexara platform including guides for Yunus Inspire, Trusted Ally, and Infinity Nexus initiatives.",
  keywords: ["nexara", "documentation", "guides", "api", "yunus inspire", "trusted ally", "infinity nexus", "platform"],
  openGraph: {
    title: "Nexara Documentation - Complete Platform Guide",
    description:
      "Access comprehensive guides, API references, and tutorials for the Nexara platform and all its initiatives.",
    type: "website",
  },
}

export default function DocsPage() {
  return <DocsClient />
}
