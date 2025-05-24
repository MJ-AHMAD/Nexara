import type { Metadata } from "next"
import MarkdownStructurePageClient from "./markdown-structure-page-client"

export const metadata: Metadata = {
  title: "Markdown Structure Guide | MJ-AHMAD",
  description: "Comprehensive guide to Markdown syntax and structure for documentation",
}

export default function MarkdownStructurePage() {
  return <MarkdownStructurePageClient />
}
