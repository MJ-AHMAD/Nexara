import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import BrandAssetsClient from "./brand-assets-client"

export const metadata: Metadata = {
  title: "Brand Assets | Nexara",
  description:
    "Download official Nexara logos, templates, and brand elements. Complete brand package for partners and team members.",
  keywords: ["Nexara", "brand assets", "logos", "templates", "brand guidelines", "download"],
}

export default function BrandAssetsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-slate-950 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <BrandAssetsClient />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
