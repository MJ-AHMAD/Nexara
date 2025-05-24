"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Lock, Key, AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface PasswordProtectionProps {
  correctPassword: string
  onAuthenticated?: () => void
}

export function PasswordProtection({ correctPassword, onAuthenticated }: PasswordProtectionProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const router = useRouter()

  // Check if user is already authenticated in localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const authenticated = localStorage.getItem("personal-notes-authenticated") === "true"
      if (authenticated) {
        setIsAuthenticated(true)
        onAuthenticated?.()
      }
    }
  }, [onAuthenticated])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password === correctPassword) {
      setIsAuthenticated(true)
      setError(null)
      localStorage.setItem("personal-notes-authenticated", "true")
      onAuthenticated?.()
    } else {
      setAttempts((prev) => prev + 1)
      setError("Incorrect password. Please try again.")

      // If too many failed attempts, redirect to home
      if (attempts >= 4) {
        setTimeout(() => {
          router.push("/")
        }, 2000)
      }
    }
  }

  if (isAuthenticated) {
    return null
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center p-4 bg-gradient-to-b from-muted/50 to-muted">
      <Card className="w-full max-w-md shadow-lg animate-fadeIn">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl text-center">Protected Content</CardTitle>
          <CardDescription className="text-center">
            Please enter the password to access your personal notes.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive" className="animate-shake">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <div className="relative">
                <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  autoFocus
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Unlock
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
