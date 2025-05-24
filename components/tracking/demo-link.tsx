"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function DemoLink() {
  return (
    <div className="flex justify-end mb-4">
      <Button variant="outline" asChild>
        <Link href="/tracking-system-demo">
          <ExternalLink className="h-4 w-4 mr-2" />
          View Enhanced Features Demo
        </Link>
      </Button>
    </div>
  )
}
