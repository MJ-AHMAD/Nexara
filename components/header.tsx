import Link from "next/link"
import { Button } from "@/components/ui/button"
import { InitiativeIndicator } from "@/components/initiative-indicator"
import { MobileNav } from "@/components/mobile-nav"

export function Header() {
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
    {
      title: "Open Source",
      href: "/open-source",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Documentation",
      href: "/documentation",
    },
    {
      title: "Community",
      href: "/community",
    },
    {
      title: "Investors",
      href: "#",
      dropdown: [
        { title: "Investment Overview", href: "/investment-overview" },
        { title: "Funding Plans", href: "/funding-plans" },
        { title: "Investor Portal", href: "/investor-portal" },
        { title: "ROI Calculator", href: "/roi-calculator" },
        { title: "Investment FAQ", href: "/investment-faq" },
      ],
    },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
            Nexara
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <div key={item.title} className="relative group">
              <Link href={item.href} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                {item.title}
              </Link>

              {item.dropdown && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.title}
                        href={dropdownItem.href}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        {dropdownItem.indicator && (
                          <InitiativeIndicator
                            initiative={dropdownItem.indicator as "yunus" | "trusted" | "infinity"}
                            className="mr-2"
                          />
                        )}
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Button variant="outline" size="sm" asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
          <div className="hidden md:block">
            <Button size="sm" asChild>
              <Link href="/investor-portal">Investor Login</Link>
            </Button>
          </div>

          {/* Mobile navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
