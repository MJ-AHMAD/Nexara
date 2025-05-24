"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Package, Coffee, MapPin, Heart } from "lucide-react"

export default function ProductHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Support Free Education Through Merchandise",
      description:
        "Browse our collection of inspirational t-shirts, mugs, and more. Every purchase helps us provide free education to students across Bangladesh.",
      cta: "Shop Merchandise",
      icon: <Package className="h-5 w-5 mr-2" />,
      image: "/hero-merchandise-collection.png",
      color: "from-blue-900 to-blue-700",
    },
    {
      title: "Discover Cox's Bazar Weekend Experiences",
      description:
        "Explore our curated weekend tour packages in beautiful Cox's Bazar. Adventure, relaxation, and cultural experiences await you.",
      cta: "View Tour Packages",
      icon: <MapPin className="h-5 w-5 mr-2" />,
      image: "/coxs-bazar-sunset.png",
      color: "from-amber-900 to-amber-700",
    },
    {
      title: "Support Our Mission",
      description:
        "Help us make education free for everyone. Your support through Ko-fi, GitHub Sponsors, or our medical fund makes a real difference.",
      cta: "Support Now",
      icon: <Heart className="h-5 w-5 mr-2" />,
      image: "/education-support-hero.png",
      color: "from-green-900 to-green-700",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} mix-blend-multiply z-10`} />
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{slide.title}</h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">{slide.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  {slide.icon}
                  {slide.cta}
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                  <Coffee className="h-5 w-5 mr-2" />
                  Buy Me a Coffee
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
