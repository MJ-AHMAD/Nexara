"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* New Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-vision-background.png"
          alt="Vision background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Overlay gradient for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/60 to-slate-900/80 z-[1]"></div>

      {/* Content with improved visibility */}
      <div className="container mx-auto px-4 z-10 text-center py-12 relative z-[2]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Only showing "with a Vision for Tomorrow's Leaders" */}
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <span className="text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
              with a Vision for Tomorrow's Leaders
            </span>
          </h2>
        </motion.div>
      </div>
    </div>
  )
}
