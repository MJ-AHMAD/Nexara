"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Clock, MapPin, Utensils, Umbrella, Camera, Compass } from "lucide-react"

export default function TourismSection() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

  const tourPackages = [
    {
      id: "weekend-retreat",
      title: "Weekend Beach Retreat",
      description: "A relaxing weekend getaway at Cox's Bazar's pristine beaches with guided activities.",
      price: "$149.99",
      image: "/beach-retreat.png",
      badge: "Most Popular",
      duration: "2 days, 1 night",
      groupSize: "1-4 people",
      includes: [
        "Beachfront accommodation",
        "Breakfast and dinner",
        "Guided beach walk",
        "Sunset photography session",
        "Beach bonfire experience",
      ],
      highlights: ["Marine Drive sunset views", "Inani Beach exploration", "Local seafood dining"],
    },
    {
      id: "adventure-weekend",
      title: "Adventure Weekend",
      description: "An action-packed weekend exploring Cox's Bazar's natural wonders and adventure activities.",
      price: "$199.99",
      image: "/adventure-weekend.png",
      badge: "Thrilling",
      duration: "2 days, 1 night",
      groupSize: "2-6 people",
      includes: [
        "Comfortable accommodation",
        "All meals included",
        "Parasailing experience",
        "Hiking to Himchari",
        "Jeep safari to Teknaf",
      ],
      highlights: ["Adrenaline water sports", "Himchari National Park", "Beach camping"],
    },
    {
      id: "cultural-experience",
      title: "Cultural Experience Weekend",
      description: "Immerse yourself in the rich culture and heritage of Cox's Bazar and surrounding areas.",
      price: "$179.99",
      image: "/cultural-weekend.png",
      badge: "Enriching",
      duration: "2 days, 1 night",
      groupSize: "2-8 people",
      includes: [
        "Traditional guesthouse stay",
        "All authentic local meals",
        "Visit to Rakhaine village",
        "Traditional craft workshops",
        "Local market tour with guide",
      ],
      highlights: ["Buddhist temples", "Local craft learning", "Traditional cuisine"],
    },
    {
      id: "family-fun",
      title: "Family Fun Weekend",
      description: "A perfect weekend getaway for families with activities for all ages at Cox's Bazar.",
      price: "$249.99",
      image: "/family-weekend.png",
      badge: "Family-Friendly",
      duration: "2 days, 1 night",
      groupSize: "Family of 4-6",
      includes: [
        "Family suite accommodation",
        "All meals and snacks",
        "Beach games and activities",
        "Marine aquarium visit",
        "Souvenir making workshop",
      ],
      highlights: ["Child-friendly activities", "Family beach games", "Educational marine experiences"],
    },
  ]

  const specialOffers = [
    {
      title: "Midweek Special",
      description: "20% off on all packages for Tuesday-Thursday bookings",
      code: "MIDWEEK20",
      validUntil: "Ongoing",
    },
    {
      title: "Group Discount",
      description: "15% off for groups of 6 or more people",
      code: "GROUP15",
      validUntil: "Ongoing",
    },
    {
      title: "Early Bird",
      description: "10% off when booking 30+ days in advance",
      code: "EARLYBIRD10",
      validUntil: "Ongoing",
    },
    {
      title: "Summer Special",
      description: "Free beach activity package with any weekend booking",
      code: "SUMMER2023",
      validUntil: "September 30, 2023",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Cox's Bazar Weekend Experiences</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore the beauty of Cox's Bazar with our curated weekend packages. Perfect for a quick getaway from the
          hustle and bustle of daily life.
        </p>
      </div>

      <Tabs defaultValue="packages" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="packages">Weekend Packages</TabsTrigger>
          <TabsTrigger value="offers">Special Offers</TabsTrigger>
        </TabsList>

        <TabsContent value="packages" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tourPackages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden flex flex-col h-full hover:shadow-md transition-all">
                <div className="relative">
                  <img
                    src={pkg.image || "/placeholder.svg?height=200&width=400&query=" + pkg.title.toLowerCase()}
                    alt={pkg.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary text-white">{pkg.badge}</Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{pkg.title}</CardTitle>
                    <span className="font-bold text-lg text-primary">{pkg.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{pkg.description}</p>

                  <div className="flex flex-wrap gap-3 mb-4">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {pkg.duration}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {pkg.groupSize}
                    </Badge>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium text-sm mb-2">Package Includes:</h4>
                    <ul className="space-y-1">
                      {pkg.includes.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium text-sm mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 pt-4">
                  <div className="w-full flex flex-col sm:flex-row gap-3">
                    <Button
                      className="w-full sm:w-auto flex-1"
                      variant="outline"
                      onClick={() => setSelectedPackage(pkg.id)}
                    >
                      View Details
                    </Button>
                    <Button className="w-full sm:w-auto flex-1">Book Now</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Why Visit Cox's Bazar?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Umbrella className="h-5 w-5 text-amber-500 mr-2" />
                  <h4 className="font-medium">World's Longest Beach</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Experience the breathtaking 120km unbroken sandy beach, the longest natural sea beach in the world.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 text-amber-500 mr-2" />
                  <h4 className="font-medium">Stunning Sunsets</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Witness spectacular sunsets over the Bay of Bengal that create unforgettable memories.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Utensils className="h-5 w-5 text-amber-500 mr-2" />
                  <h4 className="font-medium">Seafood Delights</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Savor the freshest seafood prepared with authentic local flavors and traditional recipes.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Compass className="h-5 w-5 text-amber-500 mr-2" />
                  <h4 className="font-medium">Natural Wonders</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Explore nearby attractions like Himchari National Park, Inani Beach, and Buddhist temples.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="offers" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialOffers.map((offer, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-xl">{offer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{offer.description}</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Promo Code:</span>
                      <Badge>{offer.code}</Badge>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Valid Until:</span>
                      <span className="text-muted-foreground">{offer.validUntil}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 pt-4">
                  <Button className="w-full">Apply to Booking</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card className="bg-amber-50 border-amber-100">
            <CardHeader>
              <CardTitle className="text-amber-800">How to Redeem Offers</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-2 text-amber-700">
                <li>Select your preferred weekend package</li>
                <li>Click "Book Now" to start the booking process</li>
                <li>Enter the promo code in the designated field during checkout</li>
                <li>The discount will be automatically applied to your total</li>
                <li>Complete your booking and receive confirmation</li>
              </ol>
              <p className="mt-4 text-sm text-amber-600">
                Note: Offers cannot be combined. Only one promo code can be applied per booking.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-muted p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Custom Tour Packages</h3>
        <p className="mb-4">
          Looking for something specific? We can create custom tour packages tailored to your preferences, group size,
          and interests.
        </p>
        <Button>Contact for Custom Package</Button>
      </div>
    </div>
  )
}
