import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <Skeleton className="h-12 w-64 mx-auto" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>

          <Skeleton className="h-12 w-full max-w-3xl mx-auto" />

          <div className="mt-6 space-y-8">
            <div className="border rounded-lg p-6">
              <div className="space-y-4">
                <Skeleton className="h-8 w-64 mx-auto" />
                <Skeleton className="h-6 w-96 mx-auto" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <Skeleton className="h-32 w-full" />
                  <Skeleton className="h-32 w-full" />
                  <Skeleton className="h-32 w-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <Skeleton className="h-32 w-full" />
                  <Skeleton className="h-32 w-full" />
                  <Skeleton className="h-32 w-full" />
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <Skeleton className="h-8 w-48 mb-4" />
              <Skeleton className="h-4 w-full mb-6" />
              <div className="flex flex-wrap gap-4">
                <Skeleton className="h-10 w-40" />
                <Skeleton className="h-10 w-40" />
                <Skeleton className="h-10 w-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
