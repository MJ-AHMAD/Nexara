import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function WikiLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Skeleton className="h-16 w-16 rounded-full mx-auto mb-6 bg-white/20" />
            <Skeleton className="h-12 w-96 mx-auto mb-6 bg-white/20" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-4 bg-white/20" />
            <Skeleton className="h-6 w-3/4 mx-auto mb-8 bg-white/20" />
            <Skeleton className="h-12 w-full max-w-2xl mx-auto bg-white/20 rounded-xl" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Articles Skeleton */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Skeleton className="h-6 w-6" />
            <Skeleton className="h-8 w-48" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <Skeleton className="h-6 w-20 mb-3" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-2/3" />
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-4 w-20" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories Skeleton */}
        <div className="flex items-center justify-between mb-8">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-5 w-32" />
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2 mb-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-4 bg-gray-100 rounded-lg">
              <Skeleton className="h-5 w-5" />
              <Skeleton className="h-3 w-12" />
              <Skeleton className="h-4 w-6" />
            </div>
          ))}
        </div>

        {/* Articles Skeleton */}
        <div className="grid gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Card key={i} className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-4 w-12" />
                    </div>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-2/3 mb-4" />
                    <div className="flex items-center gap-4 mb-4">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-5 w-20" />
                      <Skeleton className="h-5 w-14" />
                    </div>
                  </div>
                  <Skeleton className="h-10 w-28 ml-6" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
