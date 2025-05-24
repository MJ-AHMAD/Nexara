import type { Metadata } from "next"
import ContactForm from "@/components/support/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Calendar, Globe, Mail, MapPin, MessageSquare, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Nexara",
  description: "Get in touch with the Nexara team for inquiries, partnerships, or support.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or want to get in touch? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-blue-700">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-2">For general inquiries:</CardDescription>
              <p className="font-medium">info@nexara.org</p>

              <CardDescription className="text-gray-600 mt-4 mb-2">For support:</CardDescription>
              <p className="font-medium">support@nexara.org</p>

              <CardDescription className="text-gray-600 mt-4 mb-2">For partnerships:</CardDescription>
              <p className="font-medium">partnerships@nexara.org</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-emerald-700">
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-2">Main Office:</CardDescription>
              <p className="font-medium">+880 2 XXXX XXXX</p>

              <CardDescription className="text-gray-600 mt-4 mb-2">Support Hotline:</CardDescription>
              <p className="font-medium">+880 1X XXXX XXXX</p>

              <CardDescription className="text-gray-600 mt-4 mb-2">Hours of Operation:</CardDescription>
              <p className="font-medium">Sunday - Thursday: 9:00 AM - 5:00 PM (GMT+6)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-purple-700">
                <MapPin className="mr-2 h-5 w-5" />
                Visit Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-2">Headquarters:</CardDescription>
              <p className="font-medium">
                Nexara Tower
                <br />
                123 Innovation Street
                <br />
                Dhaka 1212, Bangladesh
              </p>

              <div className="mt-4">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center text-sm"
                >
                  <Globe className="mr-1 h-4 w-4" />
                  View on Google Maps
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="contact-form" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="contact-form">Contact Form</TabsTrigger>
            <TabsTrigger value="office-hours">Office Hours & Information</TabsTrigger>
          </TabsList>
          <TabsContent value="contact-form" className="mt-6">
            <ContactForm />
          </TabsContent>
          <TabsContent value="office-hours" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Building className="mr-2 h-5 w-5 text-gray-700" />
                      Office Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Dhaka Headquarters</h4>
                        <p className="text-gray-600">
                          Nexara Tower
                          <br />
                          123 Innovation Street
                          <br />
                          Dhaka 1212, Bangladesh
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Cox's Bazar Office</h4>
                        <p className="text-gray-600">
                          Trusted Ally Center
                          <br />
                          456 Coastal Road
                          <br />
                          Cox's Bazar 4700, Bangladesh
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-gray-700" />
                      Office Hours
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Weekdays</h4>
                          <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Weekends</h4>
                          <p className="text-gray-600">Friday - Saturday: Closed</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mt-3">All times are in Bangladesh Standard Time (GMT+6)</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <MessageSquare className="mr-2 h-5 w-5 text-gray-700" />
                      Response Times
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-600 mb-3">
                        We strive to respond to all inquiries as quickly as possible:
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-green-100 text-green-800 text-xs flex items-center justify-center mr-2 mt-0.5">
                            1
                          </span>
                          <span>
                            <strong>General Inquiries:</strong> Within 1-2 business days
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-800 text-xs flex items-center justify-center mr-2 mt-0.5">
                            2
                          </span>
                          <span>
                            <strong>Support Requests:</strong> Within 24 hours on business days
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-purple-100 text-purple-800 text-xs flex items-center justify-center mr-2 mt-0.5">
                            3
                          </span>
                          <span>
                            <strong>Partnership Inquiries:</strong> Within 3-5 business days
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="bg-gradient-to-r from-blue-50 via-emerald-50 to-purple-50 border border-gray-200 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-3">Connect With Us</h2>
          <p className="text-gray-600 mb-4">
            Follow us on social media to stay updated with our latest initiatives and announcements.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://twitter.com/nexara"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <svg className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a
              href="https://facebook.com/nexara"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://instagram.com/nexara"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <svg className="h-6 w-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/nexara"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <svg className="h-6 w-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://github.com/nexara"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <svg className="h-6 w-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
