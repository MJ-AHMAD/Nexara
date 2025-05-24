"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { InitiativeBadge } from "./initiative-badge"

// Define the initiatives data
const initiatives = [
  {
    id: "yunus",
    title: "Yunus Inspire",
    description:
      "Learning from and sharing the principles of social entrepreneurship inspired by Nobel Laureate Muhammad Yunus.",
    image: "/serene-mountain-sunrise.png",
    link: "/yunus-inspire",
  },
  {
    id: "trusted",
    title: "Trusted Ally",
    description:
      "Exploring ways to connect resources with communities in Cox's Bazar to support education and development.",
    image: "/coxs-bazar-sunset.png",
    link: "/trusted-ally",
  },
  {
    id: "infinity",
    title: "Infinity Nexus",
    description:
      "A collaborative platform for sharing research, data, and insights on climate action and sustainable development.",
    image: "/digital-network-data-visualization.png",
    link: "/infinity-nexus",
  },
]

export function FeaturedInitiatives() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section id="main-content" className="py-12 md:py-20 relative overflow-hidden">
      {/* Light mode background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-transparent dark:to-transparent z-0"></div>

      {/* Dark mode background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 opacity-0 dark:opacity-100 transition-opacity duration-300 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-slate-900 dark:text-white"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto"
          >
            Discover how these initiatives are creating meaningful impact in communities worldwide
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(initiative.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="will-change-transform"
            >
              <Card className="overflow-hidden h-full border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <Image
                    src={initiative.image || "/placeholder.svg"}
                    alt={initiative.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500"
                    style={{
                      transform: hoveredCard === initiative.id ? "scale(1.05)" : "scale(1)",
                    }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-lg md:text-xl font-bold text-white flex items-center">
                    <InitiativeBadge initiative={initiative.id as "yunus" | "trusted" | "infinity"} showName={false} />
                    {initiative.title}
                  </h3>
                </div>
                <CardContent className="p-4 md:p-6">
                  <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 mb-4">
                    {initiative.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
                  >
                    <Link href={initiative.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
