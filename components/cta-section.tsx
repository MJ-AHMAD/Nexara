"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"

// Export both as named export and default export to be safe
export function CtaSection() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/mountain-climber-sunrise.png')] bg-cover bg-center mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Open-Source Community</h2>
          <p className="text-base md:text-xl text-blue-100 mb-8">
            Collective Compass is built by the community, for the community. Your contributions, big or small, make a
            difference in shaping this project for everyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://github.com/collective-compass/collective-compass" target="_blank">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 w-full sm:w-auto">
                <Github className="mr-2 h-4 w-4" />
                Contribute on GitHub
              </Button>
            </Link>
            <Link href="https://github.com/collective-compass/collective-compass/blob/main/CONTRIBUTING.md">
              <Button className="bg-blue-700 hover:bg-blue-600 w-full sm:w-auto">How to Contribute</Button>
            </Link>
            <Link href="https://discord.gg/collectivecompass">
              <Button className="bg-purple-700 hover:bg-purple-600 w-full sm:w-auto">Join the Discussion</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Also export as default
export default CtaSection
