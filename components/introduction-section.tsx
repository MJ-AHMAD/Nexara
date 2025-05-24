"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Heart, GraduationCap, MessageSquare, Users } from "lucide-react"

export function IntroductionSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <section className="py-10 md:py-16 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <Card className="border-0 shadow-lg bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <CardContent className="p-4 md:p-8">
            <motion.div
              className="space-y-3 md:space-y-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div variants={item} className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <Code className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-base md:text-lg font-medium">👋 Welcome to INFINITY NEXUS</p>
              </motion.div>

              <motion.div variants={item} className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300">
                  👀 An open-source hub for technological innovation and personal growth
                </p>
              </motion.div>

              <motion.div variants={item} className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-rose-100 dark:bg-rose-900/30">
                  <Heart className="w-4 h-4 md:w-5 md:h-5 text-rose-600 dark:text-rose-400" />
                </div>
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300">
                  💞️ Envisioned by MJ AHMAD and dedicated to the world for collective benefit
                </p>
              </motion.div>

              <motion.div variants={item} className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-100 dark:bg-amber-900/30">
                  <Users className="w-4 h-4 md:w-5 md:h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300">
                  💞️ Open to everyone - your contributions are welcome to enhance this vision
                </p>
              </motion.div>

              <motion.div variants={item} className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                  <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300">
                  📫 Committed to lifelong learning and personal development for all
                </p>
              </motion.div>

              <motion.div variants={item} className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30">
                  <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300">
                  😄 Join our growing community of technology enthusiasts and collaborators
                </p>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
