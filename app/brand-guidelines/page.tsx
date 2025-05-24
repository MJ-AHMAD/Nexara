import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import BrandGuidelinesClient from "./brand-guidelines-client"

export const metadata: Metadata = {
  title: "Brand Guidelines | Nexara",
  description: "Official brand guidelines for Nexara and its initiatives: Yunus Inspire, Trusted Ally & Infinity Nexus",
}

export default function BrandGuidelinesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-slate-950 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">Nexara Brand Guidelines</h1>
              <p className="text-xl text-gray-500 dark:text-gray-400">
                Official guidelines for consistent representation of Nexara and its initiatives
              </p>
            </div>

            <BrandGuidelinesClient />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
