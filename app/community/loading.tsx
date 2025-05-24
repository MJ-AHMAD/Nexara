import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Skeleton } from "@/components/ui/skeleton"

export default function CommunityLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-80 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto mb-8" />

          {/* Stats Skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border">
                <Skeleton className="h-8 w-8 mx-auto mb-2" />
                <Skeleton className="h-6 w-12 mx-auto mb-1" />
                <Skeleton className="h-4 w-16 mx-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Contribution Ways Skeleton */}
        <div className="mb-12">
          <Skeleton className="h-8 w-48 mx-auto mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border">
                <Skeleton className="h-12 w-12 mb-4" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-8 w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Contributors Skeleton */}
        <div className="mb-12">
          <Skeleton className="h-8 w-48 mx-auto mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border text-center">
                <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
                <Skeleton className="h-6 w-24 mx-auto mb-2" />
                <Skeleton className="h-4 w-20 mx-auto mb-4" />
                <Skeleton className="h-5 w-16 mx-auto mb-2" />
                <div className="space-y-1">
                  {[...Array(3)].map((_, j) => (
                    <Skeleton key={j} className="h-4 w-20 mx-auto" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events Skeleton */}
        <div className="mb-12">
          <Skeleton className="h-8 w-48 mx-auto mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex justify-between mb-2">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-4 w-4" />
                </div>
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-4 w-32 mb-4" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-8 w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Guidelines Skeleton */}
        <div className="mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <Skeleton className="h-6 w-48 mx-auto mb-2" />
            <Skeleton className="h-4 w-64 mx-auto mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Skeleton className="h-5 w-16 mb-2" />
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full mb-1" />
                ))}
              </div>
              <div>
                <Skeleton className="h-5 w-20 mb-2" />
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full mb-1" />
                ))}
              </div>
            </div>
            <Skeleton className="h-8 w-32 mx-auto mt-6" />
          </div>
        </div>

        {/* CTA Skeleton */}
        <div className="bg-white rounded-lg p-8 text-center shadow-sm border">
          <Skeleton className="h-8 w-64 mx-auto mb-4" />
          <Skeleton className="h-4 w-96 mx-auto mb-6" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-8" />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
