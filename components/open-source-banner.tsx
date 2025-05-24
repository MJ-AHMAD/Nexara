"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GitHubIcon, CodeIcon, BookIcon, UsersIcon } from "@/components/custom-icons"
import { useTheme } from "next-themes"

export function OpenSourceBanner() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="bg-slate-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-xl font-bold hover:text-slate-200 transition-colors">
              Nexara
            </Link>
            <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">Open Source</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 justify-center md:justify-end">
            <Link href="https://github.com/MJ-AHMAD/mjahmad.git" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 text-white border-white hover:bg-white hover:text-slate-900"
              >
                <GitHubIcon className="mr-2 h-4 w-4" />
                <span>Repository</span>
              </Button>
            </Link>

            <Link href="/projects">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:text-slate-900">
                <CodeIcon className="mr-2 h-4 w-4" />
                <span>Projects</span>
              </Button>
            </Link>

            <Link href="/docs">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:text-slate-900">
                <BookIcon className="mr-2 h-4 w-4" />
                <span>Documentation</span>
              </Button>
            </Link>

            <Link href="/community">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:text-slate-900">
                <UsersIcon className="mr-2 h-4 w-4" />
                <span>Community</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
