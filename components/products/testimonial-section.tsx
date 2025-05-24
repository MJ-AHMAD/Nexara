"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Rahima Khan",
      role: "Student, Dhaka University",
      quote:
        "The free educational resources provided by MJ Ahmad completely transformed my learning journey. The structured content and practical approach gave me the confidence to pursue my dreams. I'm so grateful education is kept free for everyone!",
      rating: 5,
      image: "/woman-portrait.png",
      product: "Free Educational Resources",
    },
    {
      name: "Abdul Karim",
      role: "Community Leader, Cox's Bazar",
      quote:
        "The Weekend Beach Retreat was a perfect getaway! The attention to detail, knowledgeable guides, and beautiful accommodations made it an unforgettable experience. I appreciate that proceeds support free education initiatives.",
      rating: 5,
      image: "/thoughtful-man-portrait.png",
      product: "Weekend Beach Retreat",
    },
    {
      name: "Dr. Fatima Rahman",
      role: "Professor, BUET",
      quote:
        "The Premium Supporter Membership provides exceptional value while supporting a noble cause. I'm proud to be part of a community that believes in making education accessible to everyone. The exclusive events and resources are excellent, but knowing my contribution helps students across Bangladesh is the real reward.",
      rating: 5,
      image: "/woman-professor-portrait.png",
      product: "Premium Supporter Membership",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="mt-20 py-16 bg-muted/30 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read testimonials from students, community members, and supporters who have experienced our products and
            services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white shadow-lg">
                    <CardContent className="pt-6 pb-6">
                      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                        <div className="md:w-1/4 flex flex-col items-center text-center">
                          <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
                            <img
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-bold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          <div className="flex mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="md:w-3/4">
                          <div className="relative">
                            <Quote className="h-8 w-8 text-primary/20 absolute -top-4 -left-4" />
                            <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                          </div>
                          <p className="text-sm font-medium text-primary">Experience: {testimonial.product}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white shadow-md rounded-full"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white shadow-md rounded-full"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary scale-125" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
