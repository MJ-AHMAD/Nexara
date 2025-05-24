import type { Metadata } from "next"
import FAQSearch from "@/components/faq/faq-search"
import FAQCategories from "@/components/faq/faq-categories"
import FAQContent from "@/components/faq/faq-content"
import FAQContactCTA from "@/components/faq/faq-contact-cta"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Nexara",
  description: "Find answers to common questions about our initiatives, products, services, and more.",
}

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our initiatives, products, services, and more.
          </p>
        </div>

        <FAQSearch />

        <Tabs defaultValue="all" className="mt-12">
          <TabsList className="w-full flex flex-wrap justify-start mb-8 bg-transparent border-b border-gray-200">
            <TabsTrigger
              value="all"
              className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none bg-transparent"
            >
              All Questions
            </TabsTrigger>
            <TabsTrigger
              value="general"
              className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none bg-transparent"
            >
              General
            </TabsTrigger>
            <TabsTrigger
              value="initiatives"
              className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none bg-transparent"
            >
              Initiatives
            </TabsTrigger>
            <TabsTrigger
              value="products"
              className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none bg-transparent"
            >
              Products & Services
            </TabsTrigger>
            <TabsTrigger
              value="account"
              className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none bg-transparent"
            >
              Account & Membership
            </TabsTrigger>
            <TabsTrigger
              value="technical"
              className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none bg-transparent"
            >
              Technical Support
            </TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="hidden md:block">
              <FAQCategories />
            </div>

            <div className="md:col-span-3">
              <TabsContent value="all">
                <FAQContent category="all" />
              </TabsContent>
              <TabsContent value="general">
                <FAQContent category="general" />
              </TabsContent>
              <TabsContent value="initiatives">
                <FAQContent category="initiatives" />
              </TabsContent>
              <TabsContent value="products">
                <FAQContent category="products" />
              </TabsContent>
              <TabsContent value="account">
                <FAQContent category="account" />
              </TabsContent>
              <TabsContent value="technical">
                <FAQContent category="technical" />
              </TabsContent>
            </div>
          </div>
        </Tabs>

        <FAQContactCTA />
      </div>
    </div>
  )
}
