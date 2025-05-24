import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, ShoppingBag, Coffee, Users, Package, Briefcase, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import ProductHero from "@/components/products/product-hero"
import FeaturedProducts from "@/components/products/featured-products"
import TestimonialSection from "@/components/products/testimonial-section"
import SupportBanner from "@/components/products/support-banner"
import TourismSection from "@/components/products/tourism-section"
import MentalHealthTips from "@/components/products/mental-health-tips"

export const metadata: Metadata = {
  title: "Products & Services | MJ-AHMAD",
  description: "Support our mission of free education through merchandise, memberships, and services.",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <ProductHero />

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-8">
          <Link href="/" className="text-muted-foreground hover:text-primary text-sm">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Products & Services</span>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-bold text-blue-800 mb-2">Our Education Philosophy</h2>
          <p className="text-blue-700">
            We believe education is a fundamental right for every individual. All our educational resources are
            completely free. Your support through merchandise purchases, memberships, and services helps us continue our
            mission of providing free education to everyone.
          </p>
        </div>

        <FeaturedProducts />

        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every purchase helps us provide free education to students across Bangladesh. Browse our merchandise,
              memberships, and services.
            </p>
          </div>

          <Tabs defaultValue="merchandise" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="merchandise" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                <span>Merchandise</span>
              </TabsTrigger>
              <TabsTrigger value="memberships" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Memberships</span>
              </TabsTrigger>
              <TabsTrigger value="business" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>Business Services</span>
              </TabsTrigger>
              <TabsTrigger value="tourism" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Cox's Bazar Tours</span>
              </TabsTrigger>
              <TabsTrigger value="support" className="flex items-center gap-2">
                <Coffee className="h-4 w-4" />
                <span>Support Us</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="merchandise" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProductCard
                  title="Inspirational T-Shirt (Men)"
                  description="High-quality cotton t-shirt with inspirational message for men."
                  price="$24.99"
                  image="/mens-tshirt.png"
                  badge="Popular"
                  details={[
                    "Sizes: S, M, L, XL, XXL",
                    "Colors: Black, White, Navy Blue",
                    "100% Organic Cotton",
                    "Machine wash cold, tumble dry low",
                    "Inspirational quote on education",
                  ]}
                  type="Apparel"
                />

                <ProductCard
                  title="Inspirational T-Shirt (Women)"
                  description="Stylish fitted t-shirt with empowering message for women."
                  price="$24.99"
                  image="/womens-tshirt.png"
                  badge="Trending"
                  details={[
                    "Sizes: XS, S, M, L, XL",
                    "Colors: Black, White, Pink, Teal",
                    "100% Organic Cotton",
                    "Machine wash cold, tumble dry low",
                    "Empowering quote on education",
                  ]}
                  type="Apparel"
                />

                <ProductCard
                  title="Inspirational Mug"
                  description="Ceramic mug with motivational quote for your morning coffee."
                  price="$19.99"
                  image="/inspirational-mug.png"
                  details={["11oz capacity", "Ceramic material", "Dishwasher safe", "Microwave safe"]}
                  type="Merchandise"
                />

                <ProductCard
                  title="Notebook Set"
                  description="Set of 3 eco-friendly notebooks with inspirational covers."
                  price="$15.99"
                  image="/notebook-set.png"
                  details={["80 pages each", "A5 size", "Recycled paper", "3 notebooks with different designs"]}
                  type="Merchandise"
                />

                <ProductCard
                  title="Educational Poster Set"
                  description="Set of 5 beautifully designed posters with inspirational quotes about education."
                  price="$29.99"
                  image="/poster-set.png"
                  details={[
                    'Size: 18" x 24" each',
                    "High-quality print",
                    "Perfect for classrooms",
                    "Inspirational educational quotes",
                    "Includes mounting tabs",
                  ]}
                  type="Merchandise"
                />

                <ProductCard
                  title="Tote Bag"
                  description="Eco-friendly canvas tote bag with educational message."
                  price="$18.99"
                  image="/tote-bag.png"
                  details={[
                    "100% organic cotton canvas",
                    'Size: 15" x 16" x 4"',
                    "Reinforced handles",
                    "Machine washable",
                    "Educational quote print",
                  ]}
                  type="Merchandise"
                />
              </div>
            </TabsContent>

            <TabsContent value="memberships" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProductCard
                  title="Premium Supporter Membership"
                  description="Annual subscription to support our mission while receiving exclusive benefits and recognition."
                  price="$99.99"
                  image="/premium-membership.png"
                  badge="Best Value"
                  details={[
                    "Name on our supporters wall",
                    "Monthly virtual meetups",
                    "Private community forum",
                    "Early access to events",
                    "Exclusive merchandise discounts",
                    "Quarterly impact reports",
                  ]}
                  duration="1 year"
                  type="Membership"
                />

                <ProductCard
                  title="Student Supporter Membership"
                  description="Special membership plan for students who want to support our mission."
                  price="$49.99"
                  image="/student-membership.png"
                  details={[
                    "Name on our supporters wall",
                    "Student community forum",
                    "Monthly group sessions",
                    "Merchandise discounts",
                    "Certificate of support",
                  ]}
                  duration="1 year"
                  type="Membership"
                  note="Requires valid student ID"
                />

                <ProductCard
                  title="Corporate Sponsor Membership"
                  description="For businesses that want to support free education and gain recognition."
                  price="$499.99"
                  image="/corporate-membership.png"
                  badge="Corporate"
                  details={[
                    "Company logo on our website",
                    "Recognition in our annual report",
                    "Quarterly impact reports",
                    "CSR certificate",
                    "Team volunteering opportunities",
                    "Co-branded educational content",
                  ]}
                  duration="1 year"
                  type="Membership"
                />

                <ProductCard
                  title="Family Supporter Membership"
                  description="Support our mission as a family and receive special benefits."
                  price="$149.99"
                  image="/family-membership.png"
                  details={[
                    "Family name on our supporters wall",
                    "Family access to community forum",
                    "Quarterly family activities",
                    "Merchandise discounts",
                    "Family impact certificate",
                  ]}
                  duration="1 year"
                  type="Membership"
                />
              </div>
            </TabsContent>

            <TabsContent value="business" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProductCard
                  title="Corporate Workshop: Ethical Leadership"
                  description="Interactive workshop for developing ethical leadership skills in corporate environments."
                  price="$999.99"
                  image="/corporate-workshop.png"
                  badge="Popular"
                  details={[
                    "Full day workshop",
                    "Up to 30 participants",
                    "Ethical decision-making frameworks",
                    "Case studies and interactive exercises",
                    "Follow-up resources",
                    "Certificate of completion",
                  ]}
                  type="Corporate Service"
                />

                <ProductCard
                  title="CSR Program Development"
                  description="Customized consulting for companies to develop effective CSR programs focused on education."
                  price="$1,499.99"
                  image="/csr-development.png"
                  details={[
                    "4 weeks consultation",
                    "Needs assessment",
                    "Program design document",
                    "Implementation strategy",
                    "Impact measurement framework",
                    "2 follow-up consultations",
                  ]}
                  type="Consulting"
                />

                <ProductCard
                  title="Executive Mentorship Program"
                  description="One-on-one mentorship for executives focused on ethical leadership and social impact."
                  price="$799.99"
                  image="/executive-mentorship.png"
                  details={[
                    "3 months duration",
                    "6 one-hour sessions",
                    "Virtual meetings",
                    "Personal development plan",
                    "Leadership assessment",
                    "Ongoing support",
                  ]}
                  type="Mentorship"
                />

                <ProductCard
                  title="Corporate Speaking Engagement"
                  description="Inspirational talks on ethical leadership, social entrepreneurship, and corporate responsibility."
                  price="Contact for pricing"
                  image="/corporate-speaking.png"
                  details={[
                    "30-90 minutes duration",
                    "Customized to your audience",
                    "Q&A session included",
                    "Optional workshop component",
                    "Follow-up resources",
                  ]}
                  type="Speaking"
                  note="Limited availability - book in advance"
                />
              </div>
            </TabsContent>

            <TabsContent value="tourism" className="space-y-8">
              <TourismSection />
            </TabsContent>

            <TabsContent value="support" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-md">
                  <div className="bg-amber-50 p-8 flex justify-center">
                    <Coffee className="h-24 w-24 text-amber-500" />
                  </div>
                  <CardHeader>
                    <CardTitle>Buy Me a Coffee</CardTitle>
                    <CardDescription>Support my work with a one-time donation</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">
                      Your support helps me continue creating free educational resources for students across Bangladesh.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        $5
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        $10
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        $25
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        $50
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        Custom
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t bg-muted/50 pt-4">
                    <Button className="w-full">
                      <Coffee className="h-4 w-4 mr-2" />
                      Buy Me a Coffee
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-md">
                  <div className="bg-gray-50 p-8 flex justify-center">
                    <svg className="h-24 w-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
                        fill="#181717"
                      />
                    </svg>
                  </div>
                  <CardHeader>
                    <CardTitle>GitHub Sponsor</CardTitle>
                    <CardDescription>Become a monthly sponsor on GitHub</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">
                      Support my open-source educational projects with a monthly contribution through GitHub Sponsors.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        $5/month
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        $10/month
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        $25/month
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        Custom
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t bg-muted/50 pt-4">
                    <Button className="w-full">
                      <Heart className="h-4 w-4 mr-2" />
                      Become a Sponsor
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-md">
                  <div className="bg-blue-50 p-8 flex justify-center">
                    <Heart className="h-24 w-24 text-blue-500" />
                  </div>
                  <CardHeader>
                    <CardTitle>Medical Support Fund</CardTitle>
                    <CardDescription>Help with medical treatment expenses</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">
                      MJ Ahmad is currently facing health challenges. Your contribution to the medical fund will help
                      with treatment expenses.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        $50
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        $100
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        $250
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        $500
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        Custom
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t bg-muted/50 pt-4">
                    <Button className="w-full">
                      <Heart className="h-4 w-4 mr-2" />
                      Contribute to Medical Fund
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <MentalHealthTips />

        <TestimonialSection />

        <SupportBanner />

        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FaqCard
              question="How does my purchase support free education?"
              answer="100% of profits from merchandise, memberships, and services go directly to funding our free educational initiatives. This includes developing new learning resources, maintaining our digital platforms, and supporting students in need."
            />

            <FaqCard
              question="What payment methods do you accept?"
              answer="We accept all major credit cards, PayPal, and bank transfers. For certain regions, we also support mobile payment options. All transactions are secure and encrypted."
            />

            <FaqCard
              question="Do you offer refunds if I'm not satisfied?"
              answer="Yes, we offer a 30-day satisfaction guarantee for physical products. If you're not completely satisfied, contact our support team within 30 days of purchase for a full refund or exchange."
            />

            <FaqCard
              question="How do I book a Cox's Bazar tour package?"
              answer="To book a tour package, select your preferred package on our website and click 'Book Now'. You'll be guided through the booking process, including selecting dates, number of participants, and payment. You'll receive a confirmation email with all details."
            />

            <FaqCard
              question="Are there discounts for educational institutions?"
              answer="Yes, we offer special pricing for educational institutions and non-profit organizations. Please contact us directly to discuss your specific needs and we'll provide a customized quote."
            />

            <FaqCard
              question="How can I access your free educational resources?"
              answer="All our educational resources are available completely free on our website under the 'Resources' section. No registration or payment is required. We believe education is a fundamental right and should be accessible to everyone."
            />
          </div>
        </section>
      </div>
    </main>
  )
}

interface ProductCardProps {
  title: string
  description: string
  price: string
  image: string
  badge?: string
  details: string[]
  duration?: string
  level?: string
  type?: string
  note?: string
}

function ProductCard({
  title,
  description,
  price,
  image,
  badge,
  details,
  duration,
  level,
  type,
  note,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-md">
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
        {badge && <Badge className="absolute top-3 right-3 bg-primary text-white">{badge}</Badge>}
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{title}</CardTitle>
            {type && <CardDescription className="mt-1">{type}</CardDescription>}
          </div>
          <div className="text-right">
            <span className="font-bold text-lg text-primary">{price}</span>
            {duration && <p className="text-xs text-muted-foreground">{duration}</p>}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{description}</p>

        {level && (
          <Badge variant="outline" className="mb-3">
            {level} Level
          </Badge>
        )}

        <div className="mt-4">
          <h4 className="font-medium text-sm mb-2">What's Included:</h4>
          <ul className="space-y-1">
            {details.map((detail, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start">
                <ChevronRight className="h-4 w-4 mr-1 text-primary shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {note && <p className="mt-4 text-sm text-muted-foreground italic">Note: {note}</p>}
      </CardContent>
      <CardFooter className="border-t bg-muted/50 pt-4">
        <div className="w-full flex flex-col sm:flex-row gap-3">
          <Button className="w-full sm:w-auto flex-1" variant="outline">
            Learn More
          </Button>
          <Button className="w-full sm:w-auto flex-1">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

interface FaqCardProps {
  question: string
  answer: string
}

function FaqCard({ question, answer }: FaqCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{answer}</p>
      </CardContent>
    </Card>
  )
}
