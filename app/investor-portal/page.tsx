"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import {
  LockIcon,
  UserIcon,
  KeyIcon,
  ShieldIcon,
  TrendingUpIcon,
  BarChart3Icon,
  ArrowRightIcon,
  EyeIcon,
  EyeOffIcon,
} from "lucide-react"

export default function InvestorPortalPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would handle authentication
    // For demo purposes, redirect to dashboard
    window.location.href = "/investor-portal/dashboard"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/digital-network-data-visualization.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600 hover:bg-blue-700">
              <ShieldIcon className="h-4 w-4 mr-2" />
              Secure Investor Portal
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Investor{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Portal Access
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Access real-time portfolio performance, AI-powered insights, and comprehensive investment analytics for
              your Nexara investments.
            </p>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-20 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="bg-white shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-emerald-50 text-center">
                <CardTitle className="flex items-center justify-center text-slate-900">
                  <LockIcon className="h-6 w-6 mr-2 text-blue-600" />
                  Secure Login
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <Label htmlFor="email" className="text-base font-medium">
                      Email Address
                    </Label>
                    <div className="relative mt-2">
                      <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="investor@example.com"
                        className="pl-10 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="password" className="text-base font-medium">
                      Password
                    </Label>
                    <div className="relative mt-2">
                      <KeyIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="pl-10 pr-10 h-12"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700">
                    <ShieldIcon className="mr-2 h-5 w-5" />
                    Access Portal
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <Link href="/contact" className="text-blue-600 hover:text-blue-800 text-sm">
                    Forgot your password? Contact support
                  </Link>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Demo Access</h4>
                  <p className="text-sm text-blue-700 mb-3">
                    For demonstration purposes, use any email and password to access the portal.
                  </p>
                  <Button
                    onClick={() => (window.location.href = "/investor-portal/dashboard")}
                    variant="outline"
                    className="w-full border-blue-300 text-blue-700 hover:bg-blue-100"
                  >
                    <ArrowRightIcon className="mr-2 h-4 w-4" />
                    Enter Demo Portal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Portal Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our investor portal provides comprehensive tools and insights to track your investment performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUpIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Real-time Performance</h3>
                <p className="text-slate-600">
                  Track your portfolio performance with live updates, detailed analytics, and comprehensive reporting.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3Icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI-Powered Insights</h3>
                <p className="text-slate-600">
                  Get intelligent market analysis, risk assessments, and investment recommendations powered by AI.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Secure & Private</h3>
                <p className="text-slate-600">
                  Bank-level security with encrypted data transmission and secure authentication protocols.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-emerald-200 bg-emerald-50">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <ShieldIcon className="h-6 w-6 text-emerald-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800 mb-4">Security & Privacy</h3>
                    <div className="text-emerald-700 space-y-3">
                      <p>
                        Your investment data is protected with industry-leading security measures including 256-bit SSL
                        encryption, two-factor authentication, and regular security audits.
                      </p>
                      <p>
                        We never share your personal or financial information with third parties without your explicit
                        consent. All data is stored in secure, compliant data centers.
                      </p>
                      <p>
                        If you experience any issues accessing your account or have security concerns, please contact
                        our support team immediately.
                      </p>
                    </div>
                    <div className="mt-6">
                      <Link href="/contact">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                          Contact Support
                          <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
