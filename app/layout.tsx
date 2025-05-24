import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AudioControllerComponent } from "@/components/audio-controller-component"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "NEXARA",
  description: "Empowering communities through education, technology, and sustainable development initiatives.",
  keywords:
    "NEXARA, MJ-AHMAD, Md Jafor Ahmad, Bangladesh, Yunus Inspire, Trusted Ally, Infinity Nexus, education, technology, sustainable development",
  authors: [{ name: "NEXARA", url: "https://mj-ahmad.vercel.app" }],
  creator: "NEXARA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mj-ahmad.vercel.app",
    title: "NEXARA",
    description: "Empowering communities through education, technology, and sustainable development initiatives.",
    siteName: "NEXARA",
    images: [
      {
        url: "/mjahmad.png",
        width: 1200,
        height: 630,
        alt: "NEXARA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXARA",
    description: "Empowering communities through education, technology, and sustainable development initiatives.",
    images: ["/mjahmad.png"],
    creator: "@nexara",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AudioControllerComponent />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
