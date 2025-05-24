"use client"

import type React from "react"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Heart, Target, Calendar, FileText, BarChart3, ArrowRight } from "lucide-react"

interface Resource {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  link: string
}

export function ResourcesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const resources: Resource[] = [
    {
      id: "mental-strength",
      title: "Mental Strength",
      description: "Find courage and motivation during life's most challenging moments.",
      icon: <Sparkles className="h-5 w-5" />,
      color: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
      link: "/mental-strength",
    },
    {
      id: "wellness-dashboard",
      title: "Wellness Dashboard",
      description: "Track your daily wellness activities and build healthy habits.",
      icon: <Heart className="h-5 w-5" />,
      color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
      link: "/wellness-dashboard",
    },
    {
      id: "project-focus",
      title: "Project Focus",
      description: "Stay focused on your most important targets with real-time tracking.",
      icon: <Target className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
      link: "/project-focus",
    },
    {
      id: "meeting-preparation",
      title: "Meeting Preparation",
      description: "Organize and prepare for meetings with individuals and organizations.",
      icon: <Calendar className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
      link: "/meeting-preparation",
    },
    {
      id: "personal-notes",
      title: "Personal Notes",
      description: "Access your password-protected personal notes and templates.",
      icon: <FileText className="h-5 w-5" />,
      color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
      link: "/personal-notes",
    },
    {
      id: "tracking-system",
      title: "Tracking System",
      description: "Comprehensive system for tracking donations, products, and services.",
      icon: <BarChart3 className="h-5 w-5" />,
      color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
      link: "/tracking-system",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <section className="py-12 md:py-20 bg-white dark:bg-slate-950" id="resources">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Learning Resources</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools I'm exploring on my journey of continuous learning and personal development
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {resources.map((resource) => (
            <motion.div key={resource.id} variants={item} className="will-change-transform">
              <Card className="h-full hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 md:p-6">
                  <div
                    className={`inline-flex items-center justify-center p-2 rounded-lg ${resource.color} mb-3 md:mb-4`}
                  >
                    {resource.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-medium mb-2">{resource.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">{resource.description}</p>
                  <Button asChild variant="ghost" className="p-0 h-auto group">
                    <Link href={resource.link} className="flex items-center text-sm font-medium">
                      Explore
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
