"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Award, Briefcase, Lightbulb, Heart, Globe, GraduationCap } from "lucide-react"

export function PersonalJourney() {
  const [activeTab, setActiveTab] = useState("story")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section className="py-12 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            The path that led to the creation of INFINITY NEXUS & TRUSTED ALLY
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            className="lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="sticky top-24">
              <div className="relative w-full aspect-square max-w-md mx-auto mb-6 rounded-2xl overflow-hidden shadow-xl">
                <Image src="/mjahmad.png" alt="MJ AHMAD" fill className="object-cover" priority />
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">MJ AHMAD</h3>
                <p className="text-primary font-medium">Visionary & Founder</p>
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                    Technologist
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800"
                  >
                    Educator
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800"
                  >
                    Visionary
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800"
                  >
                    Community Builder
                  </Badge>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="w-full grid grid-cols-4 rounded-none">
                    <TabsTrigger value="story">My Story</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="career">Career</TabsTrigger>
                    <TabsTrigger value="vision">Vision</TabsTrigger>
                  </TabsList>

                  <TabsContent value="story" className="p-6 space-y-4">
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      animate={activeTab === "story" ? "visible" : "hidden"}
                      className="space-y-6"
                    >
                      <motion.div variants={fadeIn} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">The Beginning</h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            My journey began in Bangladesh, where I developed a deep passion for technology and its
                            potential to transform lives. From an early age, I was fascinated by how digital tools could
                            connect people and create opportunities regardless of geographical boundaries.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeIn} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Heart className="h-6 w-6 text-rose-500" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">Finding Purpose</h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            Through my experiences working with diverse communities, I discovered my purpose: to create
                            tools and systems that empower individuals to reach their full potential. I believe that
                            technology, when designed with empathy and accessibility in mind, can be a powerful
                            equalizer.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeIn} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Globe className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">Global Perspective</h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            My journey has taken me across different cultures and communities, giving me a global
                            perspective on the challenges and opportunities we face collectively. This diverse
                            experience has shaped my approach to creating solutions that are culturally sensitive and
                            globally relevant.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeIn} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Lightbulb className="h-6 w-6 text-amber-500" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">The Spark</h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            The idea for INFINITY NEXUS & TRUSTED ALLY came during a period of reflection on how I could
                            combine my technical skills with my passion for community development. I envisioned a
                            platform that would not only provide practical tools but also foster a sense of community
                            and shared purpose.
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="education" className="p-6 space-y-4">
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      animate={activeTab === "education" ? "visible" : "hidden"}
                      className="space-y-6"
                    >
                      <motion.div variants={fadeIn} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">Formal Education</h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            I hold a degree in Computer Science with a focus on human-computer interaction. My academic
                            journey provided me with a strong foundation in both technical skills and understanding user
                            needs.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeIn} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <BookOpen className="h-6 w-6 text-emerald-500" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">Continuous Learning</h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            Beyond formal education, I am committed to lifelong learning. I regularly participate in
                            workshops, online courses, and conferences to stay at the forefront of technological
                            innovations and best practices in community building.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeIn} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Award className="h-6 w-6 text-amber-500" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">Certifications & Achievements</h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            I have earned certifications in project management, user experience design, and community
                            leadership. These credentials reflect my commitment to excellence and continuous improvement
                            in my areas of expertise.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeIn} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Globe className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">Global Perspective</h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            My educational journey has been enriched by exposure to diverse educational systems and
                            philosophies. This global perspective has been invaluable in creating solutions that
                            resonate with people from different cultural backgrounds.
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="career" className="p-6 space-y-4">
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      animate={activeTab === "career" ? "visible" : "hidden"}
                      className="space-y-6"
                    >
                      <motion.div variants={fadeIn} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">Professional Experience</h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            My career spans over a decade in technology and community development. I've worked with
                            startups, educational institutions, and non-profit organizations, gaining diverse experience
                            in creating impactful digital solutions.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeIn} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Lightbulb className="h-6 w-6 text-amber-500" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">Innovation Leadership</h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            Throughout my career, I've led initiatives focused on technological innovation for social
                            impact. I've guided teams in developing solutions that address real-world challenges while
                            maintaining technical excellence.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeIn} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <GraduationCap className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">Mentorship & Education</h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            Sharing knowledge has been a consistent thread throughout my career. I've mentored emerging
                            technologists and taught courses on programming, design thinking, and community building,
                            helping to nurture the next generation of innovators.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeIn} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Heart className="h-6 w-6 text-rose-500" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">Community Engagement</h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            Beyond my formal roles, I've been actively involved in community initiatives, organizing
                            hackathons, workshops, and events that bring people together to solve problems
                            collaboratively. These experiences have reinforced my belief in the power of
                            community-driven innovation.
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="vision" className="p-6 space-y-4">
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      animate={activeTab === "vision" ? "visible" : "hidden"}
                      className="space-y-6"
                    >
                      <motion.div variants={fadeIn} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Lightbulb className="h-6 w-6 text-amber-500" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">The Genesis of INFINITY NEXUS & TRUSTED ALLY</h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            The vision for this project emerged from my desire to create a comprehensive platform that
                            addresses the multifaceted needs of individuals and communities in our digital age. I
                            envisioned tools that would not only enhance productivity but also promote well-being and
                            meaningful connection.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeIn} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Globe className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">Global Impact</h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            My vision extends beyond creating useful tools—I aim to foster a global community of
                            individuals committed to personal growth and collective progress. By making these resources
                            freely available as an open-source project, I hope to remove barriers to access and empower
                            people worldwide.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeIn} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Heart className="h-6 w-6 text-rose-500" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">Core Values</h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            This project is built on the values of accessibility, transparency, community collaboration,
                            and excellence. I believe that technology should serve humanity, not the other way around,
                            and that the best solutions emerge when diverse perspectives come together in a spirit of
                            shared purpose.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeIn} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">Future Aspirations</h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            Looking ahead, I envision INFINITY NEXUS & TRUSTED ALLY evolving into a comprehensive
                            ecosystem that supports individuals throughout their personal and professional journeys.
                            While I've laid the foundation, I'm excited to see how the community will help shape and
                            expand this vision in ways I might not have imagined.
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Join Me on This Journey</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-6">
            I've dedicated this vision to the world as an open-source project. I invite you to join me in building tools
            and communities that empower people to reach their full potential.
          </p>
        </div>
      </div>
    </section>
  )
}
