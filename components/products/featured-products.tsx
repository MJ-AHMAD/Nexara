"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Star, ArrowRight } from "lucide-react"

export default function FeaturedProducts() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const featuredProducts = [
    {
      id: "merch-001",
      title: "Inspirational T-Shirt (Men)",
      type: "Apparel",
      price: "$24.99",
      image: "/mens-tshirt.png",
      badge: "Popular",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: "merch-002",
      title: "Inspirational T-Shirt (Women)",
      type: "Apparel",
      price: "$24.99",
      image: "/womens-tshirt.png",
      badge: "Trending",
      rating: 4.7,
      reviews: 98,
    },
    {
      id: "tour-001",
      title: "Weekend Beach Retreat",
      type: "Cox's Bazar Tour",
      price: "$149.99",
      image: "/beach-retreat.png",
      badge: "Best Seller",
      rating: 4.9,
      reviews: 87,
    },
    {
      id: "membership-001",
      title: "Premium Supporter",
      type: "Annual Membership",
      price: "$99.99",
      image: "/premium-membership.png",
      badge: "Best Value",
      rating: 5.0,
      reviews: 56,
    },
  ]

  return (
    <section>
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <p className="text-muted-foreground mt-2">Our most popular offerings, handpicked for you</p>
        </div>
        <Button variant="ghost" className="gap-2">
          View All <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product, index) => (
          <Card
            key={product.id}
            className="overflow-hidden group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className={`w-full h-48 object-cover transition-transform duration-500 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />
              <Badge className="absolute top-3 right-3 bg-primary text-white">{product.badge}</Badge>
            </div>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">{product.type}</p>
                </div>
                <span className="font-bold text-primary">{product.price}</span>
              </div>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm font-medium">{product.rating}</span>
                </div>
                <span className="text-xs text-muted-foreground ml-2">({product.reviews} reviews)</span>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button className="w-full">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
