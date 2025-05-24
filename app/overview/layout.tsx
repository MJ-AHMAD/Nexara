import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nexara Project Overviews",
  description: "Comprehensive dashboards for all Nexara projects and initiatives",
}

export default function OverviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="container mx-auto py-6 max-w-7xl">{children}</div>
}
