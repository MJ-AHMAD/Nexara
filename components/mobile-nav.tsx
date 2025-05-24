"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { InitiativeIndicator } from "@/components/initiative-indicator"
import { X, Menu, ChevronDown, ChevronUp } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title)
  }

  const navigationItems = [
    {
      title: "Initiatives",
      href: "#",
      dropdown: [
        { title: "Yunus Inspire", href: "/yunus-inspire", indicator: "yunus" },
        { title: "Trusted Ally", href: "/trusted-ally", indicator: "trusted" },
        { title: "Infinity Nexus", href: "/infinity-nexus", indicator: "infinity" },
      ],
    },
    { title: "Open Source", href: "/open-source" },
    { title: "Projects", href: "/projects" },
    { title: "Documentation", href: "/documentation" },
    { title: "Community", href: "/community" },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-gray-800 bg-opacity-50" onClick={() => setIsOpen(false)}>
          <div
            className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Nexara
              </span>
              <button
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-4">
                {navigationItems.map((item) => (
                  <li key={item.title}>
                    {item.dropdown ? (
                      <div>
                        <button
                          className="flex justify-between items-center w-full text-left py-2 text-gray-700 hover:text-gray-900 font-medium"
                          onClick={() => toggleSubmenu(item.title)}
                        >
                          {item.title}
                          {openSubmenu === item.title ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </button>

                        {openSubmenu === item.title && (
                          <ul className="mt-2 pl-4 space-y-2">
                            {item.dropdown.map((dropdownItem) => (
                              <li key={dropdownItem.title}>
                                <Link
                                  href={dropdownItem.href}
                                  className="flex items-center py-2 text-gray-600 hover:text-gray-900"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {dropdownItem.indicator && (
                                    <InitiativeIndicator
                                      initiative={dropdownItem.indicator as "yunus" | "trusted" | "infinity"}
                                      className="mr-2"
                                    />
                                  )}
                                  {dropdownItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-2 text-gray-700 hover:text-gray-900 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-3">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/get-started" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/contribute" onClick={() => setIsOpen(false)}>
                    Contribute
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
