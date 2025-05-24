"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import {
  Heart,
  Video,
  Music,
  Quote,
  BookOpen,
  Lightbulb,
  ArrowRight,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Share2,
  Bookmark,
  MessageCircle,
} from "lucide-react"

export default function MentalStrengthPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentAudio, setCurrentAudio] = useState<string | null>(null)

  const togglePlay = (audioId: string) => {
    if (currentAudio === audioId && isPlaying) {
      setIsPlaying(false)
      setCurrentAudio(null)
    } else {
      setIsPlaying(true)
      setCurrentAudio(audioId)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/serene-mountain-sunrise.png"
            alt="Inspirational Landscape"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">Journey to Strength</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Finding Strength in Your Darkest Moments
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            When life feels overwhelming, remember that your struggles are developing your strengths. This is not the
            end of your journey, but a powerful turning point.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90">
              Begin Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-950"></div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6">
          <Heart className="h-12 w-12 text-rose-500 mx-auto mb-2" />
          <Separator className="w-24 mx-auto bg-rose-200 dark:bg-rose-800" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">A Safe Haven for Your Mind and Heart</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
          We all face moments when our mental strength wavers, when disappointment clouds our vision, or when life's
          accidents leave us feeling broken. This space is created for those moments—a sanctuary where you can find the
          courage to continue, the strength to persevere, and the motivation to transform your struggles into growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-rose-100 dark:border-rose-900 hover:shadow-md transition-all">
            <CardHeader className="text-center pb-2">
              <Video className="h-8 w-8 text-rose-500 mx-auto mb-2" />
              <CardTitle>Visual Inspiration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300">
                Powerful videos that inspire resilience and courage through visual storytelling.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-rose-100 dark:border-rose-900 hover:shadow-md transition-all">
            <CardHeader className="text-center pb-2">
              <Music className="h-8 w-8 text-rose-500 mx-auto mb-2" />
              <CardTitle>Audio Healing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300">
                Soothing sounds, guided meditations, and motivational talks to calm your mind.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-rose-100 dark:border-rose-900 hover:shadow-md transition-all">
            <CardHeader className="text-center pb-2">
              <Quote className="h-8 w-8 text-rose-500 mx-auto mb-2" />
              <CardTitle>Words of Wisdom</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300">
                Quotes, stories, and wisdom that provide perspective and ignite your inner strength.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="videos" className="text-base py-3">
              <Video className="h-4 w-4 mr-2" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="audio" className="text-base py-3">
              <Music className="h-4 w-4 mr-2" />
              Audio
            </TabsTrigger>
            <TabsTrigger value="wisdom" className="text-base py-3">
              <Quote className="h-4 w-4 mr-2" />
              Wisdom
            </TabsTrigger>
          </TabsList>

          {/* Videos Tab */}
          <TabsContent value="videos" className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Visual Journeys to Strength</h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                These videos offer powerful visual narratives that inspire resilience, courage, and hope. Embed codes
                will be added later, but you can explore the descriptions below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Video Placeholder 1 */}
              <Card className="overflow-hidden">
                <div className="relative h-64 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                  <Image src="/mountain-climber-sunrise.png" alt="Overcoming Challenges" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Button
                      size="icon"
                      className="h-16 w-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                    >
                      <Play className="h-8 w-8 text-white" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Overcoming Impossible Challenges</CardTitle>
                  <CardDescription>
                    Stories of people who transformed their greatest obstacles into stepping stones
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    This video showcases remarkable stories of individuals who faced seemingly insurmountable challenges
                    and not only overcame them but used them as catalysts for extraordinary growth.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Badge variant="outline">Inspiration</Badge>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              {/* Video Placeholder 2 */}
              <Card className="overflow-hidden">
                <div className="relative h-64 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                  <Image src="/phoenix-rebirth.png" alt="Rising From Failure" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Button
                      size="icon"
                      className="h-16 w-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                    >
                      <Play className="h-8 w-8 text-white" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Rising From the Ashes of Failure</CardTitle>
                  <CardDescription>How setbacks become the foundation for your greatest comeback</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    This powerful video explores how our most painful failures often contain the seeds of our most
                    meaningful successes, featuring stories of famous failures that preceded legendary achievements.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Badge variant="outline">Motivation</Badge>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              {/* Video Placeholder 3 */}
              <Card className="overflow-hidden">
                <div className="relative h-64 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600&query=person meditating on cliff edge at sunset, peaceful"
                    alt="Finding Inner Peace"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Button
                      size="icon"
                      className="h-16 w-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                    >
                      <Play className="h-8 w-8 text-white" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Finding Peace in Chaos</CardTitle>
                  <CardDescription>Techniques to maintain mental clarity during life's storms</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Learn practical techniques for finding calm within life's chaos. This video guides you through
                    mindfulness practices that help you maintain clarity and purpose even in your most challenging
                    moments.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Badge variant="outline">Mindfulness</Badge>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              {/* Video Placeholder 4 */}
              <Card className="overflow-hidden">
                <div className="relative h-64 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600&query=diverse group of people supporting each other, community"
                    alt="Community Support"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Button
                      size="icon"
                      className="h-16 w-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                    >
                      <Play className="h-8 w-8 text-white" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>The Power of Community</CardTitle>
                  <CardDescription>How connection heals and strengthens us through difficult times</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    This heartwarming video explores how human connection and community support can be transformative
                    during our darkest moments, featuring real stories of how relationships helped people overcome
                    trauma.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Badge variant="outline">Connection</Badge>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" className="mt-4">
                Load More Videos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>

          {/* Audio Tab */}
          <TabsContent value="audio" className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Healing Sounds for Your Soul</h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Immerse yourself in audio experiences designed to calm your mind, inspire your heart, and strengthen
                your resolve. From guided meditations to motivational talks.
              </p>
            </div>

            <div className="space-y-6">
              {/* Audio Player 1 */}
              <Card className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-48 h-48 bg-gradient-to-br from-rose-400 to-purple-600 flex items-center justify-center">
                    <Music className="h-12 w-12 text-white" />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold mb-1">Finding Your Inner Strength</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Guided Meditation • 15 minutes</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
                      A calming guided meditation that helps you connect with your inner reservoir of strength and
                      resilience, perfect for moments when you feel overwhelmed or discouraged.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-10 w-10 rounded-full"
                          onClick={() => togglePlay("audio1")}
                        >
                          {currentAudio === "audio1" && isPlaying ? (
                            <Pause className="h-5 w-5" />
                          ) : (
                            <Play className="h-5 w-5" />
                          )}
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                          <SkipBack className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                          <SkipForward className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <Volume2 className="h-4 w-4 text-slate-500" />
                        <div className="w-24 h-1 bg-slate-200 dark:bg-slate-700 rounded-full">
                          <div className="w-3/4 h-full bg-rose-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Audio Player 2 */}
              <Card className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-48 h-48 bg-gradient-to-br from-blue-400 to-emerald-600 flex items-center justify-center">
                    <Music className="h-12 w-12 text-white" />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold mb-1">Turning Pain Into Power</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Motivational Talk • 22 minutes</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
                      An inspiring talk that explores how our most painful experiences can become the source of our
                      greatest strengths, with practical advice for transforming suffering into growth.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-10 w-10 rounded-full"
                          onClick={() => togglePlay("audio2")}
                        >
                          {currentAudio === "audio2" && isPlaying ? (
                            <Pause className="h-5 w-5" />
                          ) : (
                            <Play className="h-5 w-5" />
                          )}
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                          <SkipBack className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                          <SkipForward className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <Volume2 className="h-4 w-4 text-slate-500" />
                        <div className="w-24 h-1 bg-slate-200 dark:bg-slate-700 rounded-full">
                          <div className="w-1/2 h-full bg-blue-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Audio Player 3 */}
              <Card className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-48 h-48 bg-gradient-to-br from-amber-400 to-red-600 flex items-center justify-center">
                    <Music className="h-12 w-12 text-white" />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold mb-1">Calming Anxiety Soundscape</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Ambient Sound • 30 minutes</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
                      A carefully composed soundscape designed to reduce anxiety and create a sense of peace and safety,
                      combining gentle nature sounds with soothing musical elements.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-10 w-10 rounded-full"
                          onClick={() => togglePlay("audio3")}
                        >
                          {currentAudio === "audio3" && isPlaying ? (
                            <Pause className="h-5 w-5" />
                          ) : (
                            <Play className="h-5 w-5" />
                          )}
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                          <SkipBack className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                          <SkipForward className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <Volume2 className="h-4 w-4 text-slate-500" />
                        <div className="w-24 h-1 bg-slate-200 dark:bg-slate-700 rounded-full">
                          <div className="w-1/3 h-full bg-amber-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" className="mt-4">
                Explore More Audio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>

          {/* Wisdom Tab */}
          <TabsContent value="wisdom" className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Words That Heal and Inspire</h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Discover powerful quotes, stories, and wisdom that provide perspective, comfort, and motivation during
                difficult times. Let these words be your companions on the journey to resilience.
              </p>
            </div>

            {/* Quotes Section */}
            <div className="mb-12">
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <Quote className="h-5 w-5 mr-2 text-rose-500" />
                Quotes to Strengthen Your Spirit
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-rose-100 dark:border-rose-900">
                  <CardContent className="pt-6">
                    <blockquote className="text-lg italic border-l-4 border-rose-500 pl-4 py-2">
                      "The wound is the place where the Light enters you."
                    </blockquote>
                    <p className="text-right text-sm text-slate-500 mt-2">— Rumi</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-rose-100 dark:border-rose-900">
                  <CardContent className="pt-6">
                    <blockquote className="text-lg italic border-l-4 border-rose-500 pl-4 py-2">
                      "Rock bottom became the solid foundation on which I rebuilt my life."
                    </blockquote>
                    <p className="text-right text-sm text-slate-500 mt-2">— J.K. Rowling</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-rose-100 dark:border-rose-900">
                  <CardContent className="pt-6">
                    <blockquote className="text-lg italic border-l-4 border-rose-500 pl-4 py-2">
                      "What lies behind us and what lies before us are tiny matters compared to what lies within us."
                    </blockquote>
                    <p className="text-right text-sm text-slate-500 mt-2">— Ralph Waldo Emerson</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-rose-100 dark:border-rose-900">
                  <CardContent className="pt-6">
                    <blockquote className="text-lg italic border-l-4 border-rose-500 pl-4 py-2">
                      "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to
                      encounter the defeats, so you can know who you are, what you can rise from, how you can still come
                      out of it."
                    </blockquote>
                    <p className="text-right text-sm text-slate-500 mt-2">— Maya Angelou</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Stories Section */}
            <div className="mb-12">
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-rose-500" />
                Stories of Transformation
              </h4>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>The Phoenix's Journey</CardTitle>
                    <CardDescription>A story of rebirth after devastating loss</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      After losing everything in a natural disaster, Sarah found herself at a crossroads. With her home
                      destroyed and her business in ruins, depression threatened to consume her. But through small daily
                      acts of courage and the support of unexpected allies, she began to rebuild not just her external
                      life, but her inner strength.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Five years later, Sarah's new business employs people who have faced similar losses, creating a
                      community of resilience that transforms trauma into purpose. Her story reminds us that our
                      greatest pain can become the birthplace of our most meaningful contribution.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Badge variant="outline">Resilience</Badge>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Reflect
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>The Broken Instrument</CardTitle>
                    <CardDescription>Finding beauty in imperfection</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      A master violinist was devastated when his prized instrument was damaged beyond repair. For
                      months, he couldn't bring himself to play music, feeling that his identity and purpose had been
                      shattered along with his violin.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      One day, he discovered the Japanese art of Kintsugi—repairing broken pottery with gold to
                      highlight rather than hide the damage. Inspired, he commissioned a luthier to repair his violin in
                      a similar way, embracing its scars rather than concealing them. The repaired violin produced a
                      sound that was different but hauntingly beautiful, with resonances impossible in an undamaged
                      instrument. His concerts now begin with the story of his broken violin, touching hearts in ways
                      his perfect performances never could.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Badge variant="outline">Transformation</Badge>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Reflect
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Wisdom Practices */}
            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-rose-500" />
                Practical Wisdom Exercises
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>The Gratitude Shift</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">
                      When overwhelmed by negative emotions, take 5 minutes to write down three things you're grateful
                      for, no matter how small. This simple practice activates brain regions associated with positive
                      emotions and can create an immediate shift in perspective.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Try This Practice
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Future Self Letter</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">
                      Write a letter from your future self who has overcome your current challenges. What wisdom would
                      they share? What perspective would they offer? This exercise helps you tap into your own inner
                      wisdom and creates hope by visualizing a positive future.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Try This Practice
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Strength Inventory</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">
                      List five challenges you've overcome in the past and the personal strengths each one revealed or
                      developed in you. Then identify which of these strengths might help you with your current
                      situation. This reminds you of your proven resilience.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Try This Practice
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Community Support Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-50 to-slate-50 dark:from-rose-950 dark:to-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">You Are Not Alone</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Join our supportive community of individuals who understand the journey through difficult times. Share your
            story, find encouragement, and connect with others who are walking similar paths.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-rose-100 dark:bg-rose-900 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                  <MessageCircle className="h-8 w-8 text-rose-600 dark:text-rose-300" />
                </div>
                <CardTitle>Share Your Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  Your journey matters. Share your experiences in a safe, supportive environment and inspire others with
                  your resilience.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button>Connect Now</Button>
              </CardFooter>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-rose-100 dark:bg-rose-900 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                  <Heart className="h-8 w-8 text-rose-600 dark:text-rose-300" />
                </div>
                <CardTitle>Find Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  Connect with trained volunteers who can provide emotional support and practical guidance during
                  difficult times.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button>Reach Out</Button>
              </CardFooter>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-rose-100 dark:bg-rose-900 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                  <Lightbulb className="h-8 w-8 text-rose-600 dark:text-rose-300" />
                </div>
                <CardTitle>Learn Together</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  Join virtual workshops and discussion groups focused on building resilience, managing emotions, and
                  finding meaning in difficulty.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button>Join Workshop</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Journey to Strength Today</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Every moment of darkness contains the seeds of light. Every challenge holds the potential for growth. You
            have the strength within you—let us help you discover it.
          </p>
          <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
            Start Your Healing Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
