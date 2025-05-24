import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InitiativeStyleGuide } from "@/components/style-guide/initiative-style-guide"
import { InitiativeRelationshipDiagram } from "@/components/initiative-relationship-diagram"

export const metadata: Metadata = {
  title: "Initiative Style Guide | Nexara",
  description: "Official style guide for Yunus Inspire, Trusted Ally & Infinity Nexus initiatives",
}

export default function StyleGuidePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-slate-950 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Initiative Style Guide</h1>
              <p className="text-gray-500">
                Official guidelines for consistent naming and visual representation of Yunus Inspire, Trusted Ally &
                Infinity Nexus
              </p>
            </div>

            <InitiativeStyleGuide />

            <div className="pt-8">
              <InitiativeRelationshipDiagram />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
