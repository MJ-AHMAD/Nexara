import { Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AIInsights } from "@/components/investor-portal/ai-insights"
import { MarketAnalysis } from "@/components/investor-portal/market-analysis"
import { InvestmentRecommendations } from "@/components/investor-portal/investment-recommendations"
import { AIRiskAssessment } from "@/components/investor-portal/ai-risk-assessment"
import { PredictiveAnalytics } from "@/components/investor-portal/predictive-analytics"
import DashboardLoading from "./loading"

function DashboardContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Investor Dashboard</h1>
        <p className="text-muted-foreground">Comprehensive analytics and insights for your investment portfolio</p>
      </div>

      <Tabs defaultValue="ai-insights" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="roi">ROI Tracker</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">Portfolio Overview</h3>
            <p className="text-muted-foreground">Coming soon - Comprehensive portfolio overview</p>
          </div>
        </TabsContent>

        <TabsContent value="roi" className="mt-6">
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">ROI Tracker</h3>
            <p className="text-muted-foreground">Coming soon - Real-time ROI tracking</p>
          </div>
        </TabsContent>

        <TabsContent value="progress" className="mt-6">
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">Progress Monitoring</h3>
            <p className="text-muted-foreground">Coming soon - Project progress tracking</p>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="mt-6">
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">Investment Reports</h3>
            <p className="text-muted-foreground">Coming soon - Detailed investment reports</p>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
            <p className="text-muted-foreground">Coming soon - Advanced analytics dashboard</p>
          </div>
        </TabsContent>

        <TabsContent value="ai-insights" className="mt-6 space-y-6">
          <div className="grid gap-6">
            <AIInsights />
            <div className="grid md:grid-cols-2 gap-6">
              <MarketAnalysis />
              <InvestmentRecommendations />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <AIRiskAssessment />
              <PredictiveAnalytics />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <DashboardContent />
    </Suspense>
  )
}
