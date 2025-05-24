import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
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

        {/* Categories Skeleton */}
        <div className="mb-8">
          <Skeleton className="h-8 w-48 mb-4" />
          <div className="flex flex-wrap gap-4">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-32" />
            ))}
          </div>
        </div>

        {/* Projects Grid Skeleton */}
        <div className="mb-12">
          <Skeleton className="h-8 w-48 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-6">
                  <div className="flex justify-between mb-2">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(3)].map((_, j) => (
                      <Skeleton key={j} className="h-5 w-16" />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Skeleton className="h-8 flex-1" />
                    <Skeleton className="h-8 w-8" />
                  </div>
                </div>
              </div>
            ))}
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
        </div>
      </main>

      <Footer />
    </div>
  )
}
