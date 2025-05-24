import { Skeleton } from "@/components/ui/skeleton"

export default function BrandGuidelinesLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-2">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-6 w-1/2" />
        </div>

        <Skeleton className="h-[200px] w-full rounded-lg" />

        <div className="space-y-4">
          <Skeleton className="h-8 w-1/4" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Skeleton className="h-[300px] rounded-lg" />
            <Skeleton className="h-[300px] rounded-lg" />
            <Skeleton className="h-[300px] rounded-lg" />
          </div>
        </div>

        <div className="space-y-4">
          <Skeleton className="h-8 w-1/4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Skeleton className="h-[250px] rounded-lg" />
            <Skeleton className="h-[250px] rounded-lg" />
          </div>
        </div>

        <Skeleton className="h-[150px] w-full rounded-lg" />
      </div>
    </div>
  )
}
