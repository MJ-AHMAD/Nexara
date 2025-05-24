"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, GraduationCap, Building, MapPin } from "lucide-react"

interface Stat {
  id: string
  value: string
  label: string
  icon: React.ReactNode
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats: Stat[] = [
    {
      id: "people-impacted",
      value: "10,000+",
      label: "People Impacted",
      icon: <Users className="h-6 w-6" />,
    },
    {
      id: "educational-programs",
      value: "25+",
      label: "Educational Programs",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      id: "partner-organizations",
      value: "15+",
      label: "Partner Organizations",
      icon: <Building className="h-6 w-6" />,
    },
    {
      id: "communities-served",
      value: "12+",
      label: "Communities Served",
      icon: <MapPin className="h-6 w-6" />,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Collaborative Progress</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Grateful to be part of these collective efforts to support communities across Bangladesh
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {stats.map((stat) => (
            <motion.div key={stat.id} className="text-center" variants={item}>
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
