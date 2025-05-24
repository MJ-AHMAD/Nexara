import { cn } from "@/lib/utils"

type InitiativeType = "yunus" | "trusted" | "infinity" | "all"

interface InitiativeIndicatorProps {
  initiative: InitiativeType
  className?: string
  size?: "sm" | "md" | "lg"
}

export function InitiativeIndicator({ initiative, className, size = "md" }: InitiativeIndicatorProps) {
  const sizeClasses = {
    sm: "h-2 w-2",
    md: "h-3 w-3",
    lg: "h-4 w-4",
  }

  const baseClasses = cn("rounded-full inline-block", sizeClasses[size], className)

  if (initiative === "yunus") {
    return <span className={cn(baseClasses, "bg-blue-500")} title="Yunus Inspire" />
  }

  if (initiative === "trusted") {
    return <span className={cn(baseClasses, "bg-emerald-500")} title="Trusted Ally" />
  }

  if (initiative === "infinity") {
    return <span className={cn(baseClasses, "bg-purple-500")} title="Infinity Nexus" />
  }

  if (initiative === "all") {
    return (
      <div className="flex space-x-1">
        <span className={cn(baseClasses, "bg-blue-500")} title="Yunus Inspire" />
        <span className={cn(baseClasses, "bg-emerald-500")} title="Trusted Ally" />
        <span className={cn(baseClasses, "bg-purple-500")} title="Infinity Nexus" />
      </div>
    )
  }

  return null
}
