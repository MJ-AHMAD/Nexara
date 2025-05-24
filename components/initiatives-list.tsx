import { InitiativeIndicator } from "@/components/initiative-indicator"

interface InitiativesListProps {
  showIndicators?: boolean
  className?: string
}

export function InitiativesList({ showIndicators = true, className }: InitiativesListProps) {
  return (
    <div className={className}>
      <p className="text-gray-800 flex items-center flex-wrap">
        {showIndicators && <InitiativeIndicator initiative="yunus" className="mr-2" />}
        <span className="font-medium text-blue-700">Yunus Inspire</span>
        <span className="mx-2 text-gray-400">,</span>

        {showIndicators && <InitiativeIndicator initiative="trusted" className="mr-2" />}
        <span className="font-medium text-emerald-700">Trusted Ally</span>
        <span className="mx-2 text-gray-400">&</span>

        {showIndicators && <InitiativeIndicator initiative="infinity" className="mr-2" />}
        <span className="font-medium text-purple-700">Infinity Nexus</span>
      </p>
    </div>
  )
}
