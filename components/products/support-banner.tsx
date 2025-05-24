import { Button } from "@/components/ui/button"
import { Heart, ExternalLink } from "lucide-react"

export default function SupportBanner() {
  return (
    <section className="mt-20">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Support Our Free Education Mission</h2>
              <p className="text-white/90 mb-6 max-w-2xl">
                MJ Ahmad is currently facing health challenges while continuing to develop free educational resources
                that benefit thousands of students. Your support helps both with medical treatment and ensuring
                education remains free for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-primary hover:bg-white/90">
                  <Heart className="h-5 w-5 mr-2 text-red-500" />
                  Make a Donation
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/20">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Learn More About Our Mission
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
                <h3 className="text-xl font-bold text-white mb-3">Your Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <p className="text-2xl font-bold text-white">5,000+</p>
                    <p className="text-sm text-white/80">Students Reached</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <p className="text-2xl font-bold text-white">12</p>
                    <p className="text-sm text-white/80">Communities Impacted</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <p className="text-2xl font-bold text-white">250+</p>
                    <p className="text-sm text-white/80">Free Resources</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <p className="text-2xl font-bold text-white">45</p>
                    <p className="text-sm text-white/80">Volunteer Mentors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
