import { cn } from "@/lib/utils"
import { InitiativeIndicator } from "@/components/initiative-indicator"

type InitiativeType = "yunus" | "trusted" | "infinity"

interface InitiativeBadgeProps {
  initiative: InitiativeType
  className?: string
}

export function InitiativeBadge({ initiative, className }: InitiativeBadgeProps) {
  const labels = {
    yunus: "Yunus Inspire",
    trusted: "Trusted Ally",
    infinity: "Infinity Nexus",
  }

  const colorClasses = {
    yunus: "bg-blue-50 text-blue-700 border-blue-200",
    trusted: "bg-emerald-50 text-emerald-700 border-emerald-200",
    infinity: "bg-purple-50 text-purple-700 border-purple-200",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        colorClasses[initiative],
        className,
      )}
    >
      <InitiativeIndicator initiative={initiative} size="sm" className="mr-1.5" />
      {labels[initiative]}
    </span>
  )
}
