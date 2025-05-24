import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, CheckCircle, Lock, Mail, Shield, ShieldAlert, ShieldCheck, ShieldOff, User } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Security | Nexara",
  description: "Learn about our security practices and how to report security vulnerabilities.",
}

export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Security</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We take security seriously. Learn about our security practices and how to report vulnerabilities.
          </p>
        </div>

        <Tabs defaultValue="policy" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="policy">Security Policy</TabsTrigger>
            <TabsTrigger value="reporting">Vulnerability Reporting</TabsTrigger>
            <TabsTrigger value="practices">Security Practices</TabsTrigger>
          </TabsList>

          <TabsContent value="policy" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-blue-600" />
                  Security Policy
                </CardTitle>
                <CardDescription>
                  Our commitment to maintaining a secure environment for all users and data.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Overview</h3>
                  <p className="text-gray-600">
                    At Nexara, we prioritize the security of our systems, data, and users. This security policy outlines
                    our approach to identifying, addressing, and preventing security vulnerabilities across all our
                    initiatives and platforms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Scope</h3>
                  <p className="text-gray-600 mb-3">
                    This security policy applies to all Nexara initiatives, including but not limited to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Yunus Inspire platform and services</li>
                    <li>Trusted Ally applications and infrastructure</li>
                    <li>Infinity Nexus digital assets and systems</li>
                    <li>All Nexara websites, applications, and APIs</li>
                    <li>Internal tools and systems used by our team</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Responsible Disclosure</h3>
                  <p className="text-gray-600">
                    We encourage responsible disclosure of security vulnerabilities. If you discover a potential
                    security issue, please report it to us following our vulnerability reporting guidelines. We commit
                    to acknowledging reports promptly, investigating thoroughly, and addressing valid concerns in a
                    timely manner.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Our Commitments</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Acknowledge receipt of vulnerability reports within 48 hours</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Provide regular updates on the status of reported vulnerabilities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Prioritize fixing critical security issues</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Not take legal action against those who report vulnerabilities responsibly</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Recognize and acknowledge those who help improve our security (with permission)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 font-medium">
                    For more detailed information about our security policies and practices, please contact our security
                    team at security@nexara.org.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reporting" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShieldAlert className="mr-2 h-5 w-5 text-red-600" />
                  Vulnerability Reporting
                </CardTitle>
                <CardDescription>
                  How to report security vulnerabilities and what to expect after reporting.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Reporting a Vulnerability</h3>
                  <p className="text-gray-600 mb-3">
                    If you believe you've found a security vulnerability in any of our systems, please report it to us
                    by emailing <span className="font-medium">security@nexara.org</span> with the following information:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Description of the vulnerability</li>
                    <li>Steps to reproduce the issue</li>
                    <li>Potential impact of the vulnerability</li>
                    <li>Any suggestions for mitigating the issue</li>
                    <li>Your contact information for follow-up questions</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-amber-800 font-medium mb-1">Important:</p>
                      <p className="text-amber-700">
                        Please do NOT disclose the vulnerability publicly until we've had a chance to address it. We
                        appreciate your cooperation in keeping our users and systems safe.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">What to Expect After Reporting</h3>
                  <ol className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-800 text-xs flex items-center justify-center mr-2 mt-0.5">
                        1
                      </span>
                      <div>
                        <p className="font-medium">Acknowledgment</p>
                        <p>We'll acknowledge receipt of your report within 48 hours.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-800 text-xs flex items-center justify-center mr-2 mt-0.5">
                        2
                      </span>
                      <div>
                        <p className="font-medium">Verification</p>
                        <p>Our security team will verify the vulnerability and determine its impact.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-800 text-xs flex items-center justify-center mr-2 mt-0.5">
                        3
                      </span>
                      <div>
                        <p className="font-medium">Updates</p>
                        <p>We'll keep you informed about our progress in addressing the issue.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-800 text-xs flex items-center justify-center mr-2 mt-0.5">
                        4
                      </span>
                      <div>
                        <p className="font-medium">Resolution</p>
                        <p>Once the issue is resolved, we'll notify you and discuss potential public disclosure.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-800 text-xs flex items-center justify-center mr-2 mt-0.5">
                        5
                      </span>
                      <div>
                        <p className="font-medium">Recognition</p>
                        <p>With your permission, we'll acknowledge your contribution in our security hall of fame.</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Responsible Disclosure Guidelines</h3>
                  <p className="text-gray-600 mb-3">We ask that you:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Report vulnerabilities privately to security@nexara.org</span>
                    </li>
                    <li className="flex items-start">
                      <ShieldOff className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Do NOT exploit the vulnerability beyond what's necessary to demonstrate the issue</span>
                    </li>
                    <li className="flex items-start">
                      <ShieldOff className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Do NOT access, modify, or delete data beyond what's needed to demonstrate the vulnerability
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ShieldOff className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Do NOT publicly disclose the issue until we've had a chance to address it</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="practices" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShieldCheck className="mr-2 h-5 w-5 text-green-600" />
                  Security Practices
                </CardTitle>
                <CardDescription>How we protect our systems, data, and users.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Data Protection</h3>
                  <p className="text-gray-600 mb-3">
                    We implement multiple layers of protection to safeguard your data:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <Lock className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Encryption of sensitive data both in transit and at rest</span>
                    </li>
                    <li className="flex items-start">
                      <Lock className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Regular security audits and penetration testing</span>
                    </li>
                    <li className="flex items-start">
                      <Lock className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Strict access controls and authentication mechanisms</span>
                    </li>
                    <li className="flex items-start">
                      <Lock className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Regular data backups with secure storage</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Application Security</h3>
                  <p className="text-gray-600 mb-3">Our development practices include:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Secure coding practices and regular code reviews</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Automated security testing in our CI/CD pipeline</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Regular dependency updates to address known vulnerabilities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Input validation and output encoding to prevent injection attacks</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Infrastructure Security</h3>
                  <p className="text-gray-600 mb-3">Our infrastructure is protected by:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Firewalls and intrusion detection systems</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Regular security patches and updates</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Network segmentation and least privilege access</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>24/7 monitoring and alerting for suspicious activities</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">User Account Security</h3>
                  <p className="text-gray-600 mb-3">We protect user accounts with:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <User className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Strong password requirements and secure password storage</span>
                    </li>
                    <li className="flex items-start">
                      <User className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Multi-factor authentication options</span>
                    </li>
                    <li className="flex items-start">
                      <User className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Account activity monitoring and suspicious login detection</span>
                    </li>
                    <li className="flex items-start">
                      <User className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Session timeout and secure session management</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800">
                      For specific questions about our security practices or to report security concerns, please contact
                      our security team at <span className="font-medium">security@nexara.org</span>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Shield className="mr-2 h-5 w-5 text-blue-600" />
            Security Hall of Fame
          </h2>
          <p className="text-gray-600 mb-6">
            We'd like to thank the following security researchers for their valuable contributions to improving our
            security:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium">Jane Doe</p>
              <p className="text-sm text-gray-500">April 2023</p>
              <p className="text-sm text-gray-600 mt-2">
                Identified and reported an XSS vulnerability in our feedback form.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium">John Smith</p>
              <p className="text-sm text-gray-500">February 2023</p>
              <p className="text-sm text-gray-600 mt-2">Discovered an authentication bypass in our API endpoints.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-medium">Alex Johnson</p>
              <p className="text-sm text-gray-500">December 2022</p>
              <p className="text-sm text-gray-600 mt-2">Reported a CSRF vulnerability in our user settings page.</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact us to learn more about our security researcher recognition program
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
