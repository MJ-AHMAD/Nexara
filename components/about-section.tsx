"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { MJAhmadProfileImage } from "@/components/mj-ahmad-profile-image"

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <MJAhmadProfileImage width={500} height={500} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

            <div className="space-y-4 text-lg">
              <p>
                I, Md Jafor Ahmad, stand as a symbol of dedication and transparency, maintaining the highest ethical
                standards throughout my life. As a visionary leader, social worker, and dedicated citizen of Bangladesh,
                I am committed to empowering communities through education, technology, and sustainable development
                initiatives.
              </p>

              <p>
                With a focus on transforming educational access, building technological capacity, and promoting
                sustainable practices, I work tirelessly to create positive change, particularly in vulnerable coastal
                areas like Cox's Bazar.
              </p>

              <div className="pt-4">
                <Button asChild className="group">
                  <Link href="/about">
                    Learn more about my journey
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
