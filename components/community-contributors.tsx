"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Github, Award, Heart, Star } from "lucide-react"
import { MJAhmadProfileImage } from "@/components/mj-ahmad-profile-image"

// Mock data for community contributors
const featuredContributors = [
  {
    id: 1,
    name: "MJ AHMAD",
    username: "mjahmad",
    role: "Visionary & Founder",
    contributions: 327,
    specialties: ["Vision", "Leadership", "Innovation"],
  },
  {
    id: 2,
    name: "Samira Khan",
    username: "samirak",
    avatar: "/woman-developer.png",
    role: "Documentation Lead",
    contributions: 83,
    specialties: ["Documentation", "Tutorials", "UX Writing"],
  },
  {
    id: 3,
    name: "Miguel Rodriguez",
    username: "miguelr",
    avatar: "/man-developer.png",
    role: "Backend Developer",
    contributions: 112,
    specialties: ["API", "Performance", "Security"],
  },
  {
    id: 4,
    name: "Priya Patel",
    username: "priyap",
    avatar: "/woman-engineer-at-work.png",
    role: "Testing Expert",
    contributions: 76,
    specialties: ["Testing", "QA", "DevOps"],
  },
]

const topContributors = [
  {
    id: 5,
    name: "James Wilson",
    username: "jamesw",
    avatar: "/developer-working.png",
    contributions: 62,
  },
  {
    id: 6,
    name: "Lin Chen",
    username: "linc",
    avatar: "/programmer.png",
    contributions: 58,
  },
  {
    id: 7,
    name: "Aisha Mohammed",
    username: "aisham",
    avatar: "/developer-woman.png",
    contributions: 54,
  },
  {
    id: 8,
    name: "Rahul Sharma",
    username: "rahuls",
    avatar: "/coder.png",
    contributions: 49,
  },
  {
    id: 9,
    name: "Sofia Garcia",
    username: "sofiag",
    avatar: "/woman-coder.png",
    contributions: 47,
  },
  {
    id: 10,
    name: "Daniel Kim",
    username: "danielk",
    avatar: "/software-developer-workspace.png",
    contributions: 45,
  },
  {
    id: 11,
    name: "Emma Wilson",
    username: "emmaw",
    avatar: "/woman-engineer-at-work.png",
    contributions: 43,
  },
  {
    id: 12,
    name: "Omar Hassan",
    username: "omarh",
    avatar: "/programmer-man.png",
    contributions: 41,
  },
]

const newContributors = [
  {
    id: 13,
    name: "Lucy Zhang",
    username: "lucyz",
    avatar: "/woman-developer-new.png",
    joined: "2 days ago",
  },
  {
    id: 14,
    name: "Akira Tanaka",
    username: "akirat",
    avatar: "/placeholder.svg?height=80&width=80&query=asian developer",
    joined: "5 days ago",
  },
  {
    id: 15,
    name: "Chioma Okonkwo",
    username: "chiomao",
    avatar: "/placeholder.svg?height=80&width=80&query=african woman developer",
    joined: "1 week ago",
  },
  {
    id: 16,
    name: "Gabriel Silva",
    username: "gabriels",
    avatar: "/placeholder.svg?height=80&width=80&query=brazilian developer",
    joined: "2 weeks ago",
  },
]

export function CommunityContributors() {
  const [activeTab, setActiveTab] = useState("featured")

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Project Contributors</h2>
          <p className="text-muted-foreground mt-2">
            The amazing people behind Yunus Inspire, Trusted Ally & Infinity Nexus
          </p>
        </div>

        <Tabs defaultValue="featured" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="top">Top Contributors</TabsTrigger>
              <TabsTrigger value="new">New Members</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="featured" className="space-y-8 mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredContributors.map((contributor) => (
                <Card
                  key={contributor.id}
                  className={
                    contributor.name === "MJ AHMAD" ? "border-2 border-primary overflow-hidden" : "overflow-hidden"
                  }
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <Avatar
                        className={
                          contributor.name === "MJ AHMAD"
                            ? "h-12 w-12 border-2 border-amber-500 ring-2 ring-blue-500"
                            : "h-12 w-12 border-2 border-primary"
                        }
                      >
                        {contributor.name === "MJ AHMAD" ? (
                          <MJAhmadProfileImage width={48} height={48} className="object-cover w-full h-full" />
                        ) : (
                          <>
                            <AvatarImage src={contributor.avatar || "/placeholder.svg"} alt={contributor.name} />
                            <AvatarFallback>{contributor.name.slice(0, 2)}</AvatarFallback>
                          </>
                        )}
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{contributor.name}</CardTitle>
                        <CardDescription>@{contributor.username}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge
                        variant="outline"
                        className={
                          contributor.name === "MJ AHMAD"
                            ? "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800"
                            : "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                        }
                      >
                        {contributor.role}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800"
                      >
                        {contributor.contributions} contributions
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {contributor.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="w-full mt-4" asChild>
                      <a href={`https://github.com/${contributor.username}`} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Profile
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="top" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {topContributors.map((contributor) => (
                <Card key={contributor.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={contributor.avatar || "/placeholder.svg"} alt={contributor.name} />
                        <AvatarFallback>{contributor.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{contributor.name}</p>
                        <p className="text-xs text-muted-foreground">@{contributor.username}</p>
                      </div>
                      <div className="flex items-center text-amber-600 dark:text-amber-400 text-sm font-medium">
                        <Star className="h-4 w-4 mr-1" />
                        {contributor.contributions}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="gap-2">
                <Award className="h-4 w-4" />
                View All Contributors
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="new" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {newContributors.map((contributor) => (
                <Card key={contributor.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border-2 border-green-500">
                        <AvatarImage src={contributor.avatar || "/placeholder.svg"} alt={contributor.name} />
                        <AvatarFallback>{contributor.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{contributor.name}</p>
                        <p className="text-xs text-muted-foreground">@{contributor.username}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800 text-xs"
                      >
                        New
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Joined {contributor.joined}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="gap-2">
                <Heart className="h-4 w-4 text-rose-500" />
                Welcome New Contributors
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
