import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Award, BookOpen, Users, Globe, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Dr. Muhammad Yunus's Legacy | Nexara",
  description:
    "Explore the transformative legacy of Dr. Muhammad Yunus through social business and microfinance innovations that have changed millions of lives worldwide.",
}

export default function YunusLegacyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 z-0">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('/yunus-legacy-concept.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              mixBlendMode: "overlay",
            }}
          ></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_60%)]"></div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Award className="h-4 w-4 mr-2" />
                <span>Nobel Peace Prize Laureate</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                The Legacy of Dr. Muhammad Yunus
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-xl">
                Pioneering social business and microfinance to create a world without poverty, where economic dignity is
                accessible to all.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#social-business">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 border-0"
                  >
                    Explore His Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://www.muhammadyunus.org/" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-400 text-white hover:bg-white/10 hover:border-white"
                  >
                    Official Website
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/yunus-legacy-concept.png"
                alt="Dr. Muhammad Yunus's Legacy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold mb-6 text-blue-900">The Banker to the Poor</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Dr. Muhammad Yunus, born on June 28, 1940, in Bangladesh, has dedicated his life to fighting poverty
                  through social business and microfinance.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Nobel Peace Prize</h3>
                    <p className="text-sm text-slate-500">Awarded in 2006</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Grameen Bank Founder</h3>
                    <p className="text-sm text-slate-500">Established in 1983</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Global Impact</h3>
                    <p className="text-sm text-slate-500">Transformed millions of lives</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Early Life & Education</h3>
              <p className="text-lg text-slate-700 mb-6">
                Born in the village of Bathua in Haimchar, Chittagong, Dr. Yunus studied at Dhaka University and
                received a Fulbright scholarship to study economics at Vanderbilt University, where he earned his Ph.D.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-blue-800">The Birth of Microfinance</h3>
              <p className="text-lg text-slate-700 mb-6">
                In 1976, during Bangladesh's famine, Dr. Yunus discovered that very small loans could make a significant
                difference to a poor person's ability to survive. His first loan of $27 to a group of women making
                bamboo furniture freed them from exploitative lenders and allowed them to earn a living.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-blue-800">Founding Grameen Bank</h3>
              <p className="text-lg text-slate-700 mb-6">
                This led to the founding of Grameen Bank in 1983, pioneering the concepts of microcredit and
                microfinance. The bank operates with the belief that credit is a fundamental human right and provides
                loans to the poorest of the poor without requiring collateral.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-blue-800">Social Business Model</h3>
              <p className="text-lg text-slate-700 mb-6">
                Dr. Yunus developed the concept of social business – non-dividend companies dedicated to solving social
                problems. Unlike traditional businesses, the primary aim is not to maximize profit but to address human
                needs while being financially sustainable.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-blue-800">Global Recognition</h3>
              <p className="text-lg text-slate-700 mb-6">
                In 2006, Dr. Yunus and Grameen Bank were jointly awarded the Nobel Peace Prize "for their efforts to
                create economic and social development from below." This recognition highlighted how economic
                empowerment can be a path to peace.
              </p>

              <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-8 bg-blue-50 rounded-r-lg">
                <p className="text-xl italic text-blue-900">
                  "Poverty is not created by the poor. It is created by the institutions and policies that surround
                  them."
                </p>
                <footer className="text-right text-blue-700 font-medium mt-2">— Dr. Muhammad Yunus</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Social Business & Microfinance Section */}
      <section id="social-business" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Transformative Concepts</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Dr. Yunus's revolutionary approaches to fighting poverty have created new paradigms in economic
              development.
            </p>
          </div>

          <Tabs defaultValue="microfinance" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 w-full max-w-2xl">
                <TabsTrigger value="microfinance">Microfinance</TabsTrigger>
                <TabsTrigger value="social-business">Social Business</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="microfinance">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800">Microfinance Revolution</h3>
                  <p className="text-lg text-slate-600 mb-6">
                    Microfinance provides financial services to low-income individuals who traditionally lack access to
                    banking services, enabling them to develop microenterprises and escape poverty.
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <div className="rounded-full p-1 bg-blue-100 text-blue-600 mr-3 mt-1">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Small Loans, Big Impact</h4>
                        <p className="text-slate-600">
                          Loans as small as $27 can transform lives by enabling sustainable income generation
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full p-1 bg-blue-100 text-blue-600 mr-3 mt-1">
                        <Users className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Group-Based Lending</h4>
                        <p className="text-slate-600">
                          Peer support replaces traditional collateral, with groups of borrowers ensuring accountability
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full p-1 bg-blue-100 text-blue-600 mr-3 mt-1">
                        <Globe className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Global Adoption</h4>
                        <p className="text-slate-600">
                          The microfinance model has been replicated in over 100 countries worldwide
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-blue-800">
                      <strong>Impact:</strong> Grameen Bank has disbursed over $24 billion in loans to more than 9
                      million borrowers, with a repayment rate exceeding 98%.
                    </p>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden h-[400px] shadow-lg">
                  <Image
                    src="/microfinance-impact.png"
                    alt="Microfinance Impact"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="social-business">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800">Social Business Model</h3>
                  <p className="text-lg text-slate-600 mb-6">
                    Social business is a cause-driven business where investors recover their investment amount only,
                    without taking profits or dividends. The company's primary aim is to solve social problems while
                    being financially sustainable.
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <div className="rounded-full p-1 bg-blue-100 text-blue-600 mr-3 mt-1">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Sustainable Solutions</h4>
                        <p className="text-slate-600">
                          Businesses that solve social problems while covering their costs without relying on donations
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full p-1 bg-blue-100 text-blue-600 mr-3 mt-1">
                        <Users className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">People-Centered</h4>
                        <p className="text-slate-600">Focuses on human needs rather than profit maximization</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full p-1 bg-blue-100 text-blue-600 mr-3 mt-1">
                        <Globe className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Diverse Applications</h4>
                        <p className="text-slate-600">
                          From healthcare to renewable energy, social businesses address various challenges
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-blue-800">
                      <strong>Examples:</strong> Grameen Danone Foods (nutrition), Grameen Veolia Water (clean water),
                      and Grameen Shakti (renewable energy) are successful social businesses addressing critical needs.
                    </p>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden h-[400px] shadow-lg">
                  <Image
                    src="/social-business-model.png"
                    alt="Social Business Model"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Wisdom & Vision</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Dr. Yunus's profound insights continue to inspire change-makers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Poverty is not created by the poor, but by the institutions and policies that surround them.",
                context: "On systemic causes of poverty",
              },
              {
                quote: "Human beings are not born to suffer the misery of hunger and poverty.",
                context: "On human dignity",
              },
              {
                quote: "Making money is a happiness. Making other people happy is a super-happiness.",
                context: "On social business",
              },
              {
                quote:
                  "Once poverty is gone, we'll need to build museums to display its horrors to future generations.",
                context: "On his vision for the future",
              },
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic mb-4">"{item.quote}"</blockquote>
                  <footer className="text-right">
                    <p className="text-blue-200 text-sm">{item.context}</p>
                    <p className="font-medium">— Dr. Muhammad Yunus</p>
                  </footer>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Continue Dr. Yunus's Legacy</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Join us in building on Dr. Yunus's vision of a world without poverty through social business and innovative
            solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/yunus-inspire">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Explore Yunus Inspire Initiative
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
