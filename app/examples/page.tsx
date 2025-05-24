import ExamplesClientPage from "./ExamplesClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Examples - Nexara Platform",
  description:
    "Explore practical examples, code samples, and real-world implementations of Nexara platform features including Yunus Inspire, Trusted Ally, and Infinity Nexus.",
}

export default function ExamplesPage() {
  return <ExamplesClientPage />
}
