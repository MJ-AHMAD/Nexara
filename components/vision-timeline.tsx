"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Code, Users, Globe, Rocket, BookOpen, Heart, Star, Zap, Target, Compass } from "lucide-react"

interface TimelineEvent {
  id: number
  year: string
  title: string
  description: string
  icon: JSX.Element
  category: "vision" | "development" | "community" | "milestone"
  color: string
}

export function VisionTimeline() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null)
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([])
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  useEffect(() => {
    // Define the timeline events
    const events: TimelineEvent[] = [
      {
        id: 1,
        year: "2015",
        title: "The Initial Spark",
        description:
          "The seed of the idea was planted during my time working with local communities in Bangladesh. I recognized the need for better tools to connect people and resources.",
        icon: <Lightbulb className="h-6 w-6" />,
        category: "vision",
        color: "bg-amber-100 dark:bg-amber-950 border-amber-300 dark:border-amber-800",
      },
      {
        id: 2,
        year: "2016",
        title: "Concept Development",
        description:
          "I began developing the conceptual framework for what would later become INFINITY NEXUS & TRUSTED ALLY, focusing on how technology could empower communities.",
        icon: <BookOpen className="h-6 w-6" />,
        category: "vision",
        color: "bg-blue-100 dark:bg-blue-950 border-blue-300 dark:border-blue-800",
      },
      {
        id: 3,
        year: "2017",
        title: "First Prototype",
        description:
          "Created the first working prototype of the platform, testing core functionalities with a small group of early adopters and gathering valuable feedback.",
        icon: <Code className="h-6 w-6" />,
        category: "development",
        color: "bg-emerald-100 dark:bg-emerald-950 border-emerald-300 dark:border-emerald-800",
      },
      {
        id: 4,
        year: "2018",
        title: "Community Pilot",
        description:
          "Launched a pilot program with local communities in Bangladesh, implementing the platform to address specific challenges and testing its effectiveness.",
        icon: <Users className="h-6 w-6" />,
        category: "community",
        color: "bg-purple-100 dark:bg-purple-950 border-purple-300 dark:border-purple-800",
      },
      {
        id: 5,
        year: "2019",
        title: "Vision Expansion",
        description:
          "Expanded the vision to include global reach, recognizing the potential for the platform to address similar challenges in communities worldwide.",
        icon: <Globe className="h-6 w-6" />,
        category: "vision",
        color: "bg-amber-100 dark:bg-amber-950 border-amber-300 dark:border-amber-800",
      },
      {
        id: 6,
        year: "2020",
        title: "Digital Transformation",
        description:
          "Pivoted to a fully digital approach in response to global challenges, accelerating development and expanding the platform's capabilities.",
        icon: <Zap className="h-6 w-6" />,
        category: "development",
        color: "bg-emerald-100 dark:bg-emerald-950 border-emerald-300 dark:border-emerald-800",
      },
      {
        id: 7,
        year: "2021",
        title: "Open Source Initiative",
        description:
          "Made the decision to transform the project into an open-source initiative, dedicating my vision to the world and inviting global collaboration.",
        icon: <Heart className="h-6 w-6" />,
        category: "milestone",
        color: "bg-rose-100 dark:bg-rose-950 border-rose-300 dark:border-rose-800",
      },
      {
        id: 8,
        year: "2022",
        title: "Global Community Growth",
        description:
          "Witnessed significant growth in the global community of contributors and users, with implementations in diverse contexts around the world.",
        icon: <Users className="h-6 w-6" />,
        category: "community",
        color: "bg-purple-100 dark:bg-purple-950 border-purple-300 dark:border-purple-800",
      },
      {
        id: 9,
        year: "2023",
        title: "Platform Integration",
        description:
          "Integrated various tools and functionalities into a cohesive ecosystem, enhancing the platform's ability to address complex challenges.",
        icon: <Compass className="h-6 w-6" />,
        category: "development",
        color: "bg-emerald-100 dark:bg-emerald-950 border-emerald-300 dark:border-emerald-800",
      },
      {
        id: 10,
        year: "2024",
        title: "Vision Realization",
        description:
          "Reached a significant milestone in realizing the original vision, with the platform now serving communities across multiple continents.",
        icon: <Target className="h-6 w-6" />,
        category: "milestone",
        color: "bg-rose-100 dark:bg-rose-950 border-rose-300 dark:border-rose-800",
      },
      {
        id: 11,
        year: "2025",
        title: "Future Horizons",
        description:
          "Looking ahead to expanding the platform's capabilities, deepening community engagement, and exploring new frontiers in technology and social impact.",
        icon: <Rocket className="h-6 w-6" />,
        category: "vision",
        color: "bg-amber-100 dark:bg-amber-950 border-amber-300 dark:border-amber-800",
      },
    ]

    // Filter events based on selected filter
    if (selectedFilter) {
      setTimelineEvents(events.filter((event) => event.category === selectedFilter))
    } else {
      setTimelineEvents(events)
    }
  }, [selectedFilter])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "vision":
        return "bg-amber-500"
      case "development":
        return "bg-emerald-500"
      case "community":
        return "bg-purple-500"
      case "milestone":
        return "bg-rose-500"
      default:
        return "bg-blue-500"
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "vision":
        return "Vision"
      case "development":
        return "Development"
      case "community":
        return "Community"
      case "milestone":
        return "Milestone"
      default:
        return category
    }
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">The Evolution of INFINITY NEXUS & TRUSTED ALLY</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Explore the journey from initial concept to global open-source project, highlighting key milestones and
            developments along the way.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Badge
              variant="outline"
              className={`cursor-pointer px-4 py-2 text-sm ${
                selectedFilter === null ? "bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700" : ""
              }`}
              onClick={() => setSelectedFilter(null)}
            >
              All
            </Badge>
            <Badge
              variant="outline"
              className={`cursor-pointer px-4 py-2 text-sm ${
                selectedFilter === "vision"
                  ? "bg-amber-100 dark:bg-amber-950 border-amber-300 dark:border-amber-800"
                  : ""
              }`}
              onClick={() => setSelectedFilter("vision")}
            >
              <Lightbulb className="h-3 w-3 mr-1" />
              Vision
            </Badge>
            <Badge
              variant="outline"
              className={`cursor-pointer px-4 py-2 text-sm ${
                selectedFilter === "development"
                  ? "bg-emerald-100 dark:bg-emerald-950 border-emerald-300 dark:border-emerald-800"
                  : ""
              }`}
              onClick={() => setSelectedFilter("development")}
            >
              <Code className="h-3 w-3 mr-1" />
              Development
            </Badge>
            <Badge
              variant="outline"
              className={`cursor-pointer px-4 py-2 text-sm ${
                selectedFilter === "community"
                  ? "bg-purple-100 dark:bg-purple-950 border-purple-300 dark:border-purple-800"
                  : ""
              }`}
              onClick={() => setSelectedFilter("community")}
            >
              <Users className="h-3 w-3 mr-1" />
              Community
            </Badge>
            <Badge
              variant="outline"
              className={`cursor-pointer px-4 py-2 text-sm ${
                selectedFilter === "milestone"
                  ? "bg-rose-100 dark:bg-rose-950 border-rose-300 dark:border-rose-800"
                  : ""
              }`}
              onClick={() => setSelectedFilter("milestone")}
            >
              <Star className="h-3 w-3 mr-1" />
              Milestone
            </Badge>
          </div>
        </div>

        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 dark:bg-slate-800 rounded-full"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 z-10">
                <div className={`w-full h-full rounded-full ${getCategoryColor(event.category)}`}></div>
              </div>

              {/* Content card - alternating left and right */}
              <Card
                className={`w-full md:w-5/12 shadow-md hover:shadow-lg transition-shadow duration-300 ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Badge variant="outline" className={`mr-3 ${event.color}`}>
                      {event.year}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {event.icon}
                      <span>{getCategoryLabel(event.category)}</span>
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{event.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">The Journey Continues</h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            This timeline represents key moments in the evolution of INFINITY NEXUS & TRUSTED ALLY, but the journey is
            ongoing. As the visionary behind this project, I'm excited to see how it continues to grow and evolve with
            the contributions of the global community.
          </p>
        </div>
      </div>
    </section>
  )
}
