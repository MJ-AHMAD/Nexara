"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Heart, Coffee, Moon, Sun, Smile, BookOpen } from "lucide-react"

export default function MentalHealthTips() {
  const [expandedTip, setExpandedTip] = useState<number | null>(null)

  const toggleTip = (index: number) => {
    if (expandedTip === index) {
      setExpandedTip(null)
    } else {
      setExpandedTip(index)
    }
  }

  const dailyTips = [
    {
      icon: <Sun className="h-8 w-8 text-amber-500" />,
      title: "Morning Mindfulness",
      shortDesc: "Start your day with 5 minutes of mindful breathing.",
      fullDesc:
        "Begin each morning with 5 minutes of mindful breathing before checking your phone. Sit comfortably, focus on your breath, and set positive intentions for the day. This simple practice can reduce anxiety and improve focus throughout the day.",
    },
    {
      icon: <Coffee className="h-8 w-8 text-amber-700" />,
      title: "Mindful Breaks",
      shortDesc: "Take short mindful breaks during your workday.",
      fullDesc:
        "Incorporate 2-3 minute mindful breaks every few hours during your workday. Step away from screens, focus on your breathing, and observe your surroundings with full attention. These micro-breaks can prevent burnout and restore mental energy.",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Self-Compassion Practice",
      shortDesc: "Treat yourself with the kindness you offer others.",
      fullDesc:
        "Practice self-compassion by speaking to yourself as you would to a good friend. When facing challenges or making mistakes, acknowledge your feelings without judgment and remind yourself that imperfection is part of being human. This practice reduces self-criticism and builds emotional resilience.",
    },
    {
      icon: <Moon className="h-8 w-8 text-indigo-400" />,
      title: "Evening Reflection",
      shortDesc: "Reflect on three positive moments before sleep.",
      fullDesc:
        "Before sleeping, take a few minutes to reflect on three positive moments from your day, no matter how small. This practice trains your brain to notice and appreciate positive experiences, improving your overall outlook and helping you fall asleep with a peaceful mindset.",
    },
  ]

  const weeklyPractices = [
    {
      title: "Digital Detox Day",
      description:
        "Designate one day per week (or even half a day) as a 'digital detox' where you minimize screen time and reconnect with nature, hobbies, or loved ones without digital distractions.",
    },
    {
      title: "Gratitude Journaling",
      description:
        "Set aside 15 minutes once a week to write down things you're grateful for. This practice has been shown to significantly increase happiness and reduce depression.",
    },
    {
      title: "Nature Connection",
      description:
        "Spend at least 2 hours in nature weekly. Research shows this amount significantly boosts health and wellbeing. Visit Cox's Bazar beach, local parks, or any green space.",
    },
    {
      title: "Creative Expression",
      description:
        "Dedicate time weekly to creative activities without judgment or expectation. This could be drawing, writing, cooking, music, or any form of creative expression that brings you joy.",
    },
  ]

  const resources = [
    {
      title: "Free Meditation Resources",
      items: ["Insight Timer app", "Smiling Mind app", "UCLA Mindful app", "YouTube guided meditations"],
    },
    {
      title: "Mental Health Support",
      items: [
        "National Mental Health Helpline: 16000",
        "Kaan Pete Roi (emotional support): 01779554391",
        "Bangladesh Association of Psychiatrists",
      ],
    },
    {
      title: "Recommended Reading",
      items: [
        "The Mindful Way Through Depression",
        "Atomic Habits by James Clear",
        "Man's Search for Meaning by Viktor Frankl",
      ],
    },
  ]

  return (
    <section className="mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Mental Health & Wellbeing</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Simple practices and resources to support your mental wellbeing. Education extends beyond academics to caring
          for our minds and hearts.
        </p>
      </div>

      <Tabs defaultValue="daily" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="daily" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            <span>Daily Practices</span>
          </TabsTrigger>
          <TabsTrigger value="weekly" className="flex items-center gap-2">
            <Smile className="h-4 w-4" />
            <span>Weekly Wellbeing</span>
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>Resources</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="daily">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailyTips.map((tip, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">{tip.icon}</div>
                  <CardTitle className="text-center">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    {expandedTip === index ? tip.fullDesc : tip.shortDesc}
                  </p>
                </CardContent>
                <CardFooter className="pt-0 flex justify-center">
                  <Button variant="ghost" size="sm" onClick={() => toggleTip(index)}>
                    {expandedTip === index ? "Show Less" : "Read More"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="weekly">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weeklyPractices.map((practice, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle>{practice.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{practice.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle>{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-2">Need Someone to Talk To?</h3>
        <p className="mb-4 max-w-2xl mx-auto">
          Sometimes the best support comes from a compassionate listener. If you're going through a difficult time,
          don't hesitate to reach out.
        </p>
        <Button>Contact for Support</Button>
      </div>
    </section>
  )
}
