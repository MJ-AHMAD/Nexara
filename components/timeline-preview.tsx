"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lightbulb, Code, Users, Heart, Clock } from "lucide-react"
import Link from "next/link"

export function TimelinePreview() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Project Timeline</h3>
        <p className="text-slate-600 dark:text-slate-400">
          Key milestones in the evolution of INFINITY NEXUS & TRUSTED ALLY
        </p>
      </div>

      <div className="relative mb-12">
        {/* Timeline center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 dark:bg-slate-800 rounded-full"></div>

        {/* Featured timeline events */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative flex items-center mb-8 justify-start"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 z-10 bg-amber-500"></div>
          <Card className="w-full md:w-5/12 shadow-md md:mr-auto">
            <CardContent className="p-4">
              <div className="flex items-center mb-2">
                <Badge
                  variant="outline"
                  className="mr-2 bg-amber-100 dark:bg-amber-950 border-amber-300 dark:border-amber-800"
                >
                  2015
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Lightbulb className="h-3 w-3" />
                  <span>Vision</span>
                </Badge>
              </div>
              <h4 className="text-lg font-semibold">The Initial Spark</h4>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative flex items-center mb-8 justify-end"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 z-10 bg-emerald-500"></div>
          <Card className="w-full md:w-5/12 shadow-md md:ml-auto">
            <CardContent className="p-4">
              <div className="flex items-center mb-2">
                <Badge
                  variant="outline"
                  className="mr-2 bg-emerald-100 dark:bg-emerald-950 border-emerald-300 dark:border-emerald-800"
                >
                  2019
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Code className="h-3 w-3" />
                  <span>Development</span>
                </Badge>
              </div>
              <h4 className="text-lg font-semibold">Platform Development</h4>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative flex items-center mb-8 justify-start"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 z-10 bg-purple-500"></div>
          <Card className="w-full md:w-5/12 shadow-md md:mr-auto">
            <CardContent className="p-4">
              <div className="flex items-center mb-2">
                <Badge
                  variant="outline"
                  className="mr-2 bg-purple-100 dark:bg-purple-950 border-purple-300 dark:border-purple-800"
                >
                  2021
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  <span>Community</span>
                </Badge>
              </div>
              <h4 className="text-lg font-semibold">Global Community Growth</h4>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative flex items-center justify-end"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 z-10 bg-rose-500"></div>
          <Card className="w-full md:w-5/12 shadow-md md:ml-auto">
            <CardContent className="p-4">
              <div className="flex items-center mb-2">
                <Badge
                  variant="outline"
                  className="mr-2 bg-rose-100 dark:bg-rose-950 border-rose-300 dark:border-rose-800"
                >
                  2024
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Heart className="h-3 w-3" />
                  <span>Milestone</span>
                </Badge>
              </div>
              <h4 className="text-lg font-semibold">Vision Realization</h4>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="text-center">
        <Link href="/vision-timeline">
          <Button className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>View Complete Timeline</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
