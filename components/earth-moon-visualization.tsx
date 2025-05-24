"use client"

import { useEffect, useRef, useState } from "react"

export function EarthMoonVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create stars - fewer on mobile
    const starCount = isMobile ? 50 : 150
    const stars: { x: number; y: number; radius: number; opacity: number }[] = []
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * (isMobile ? 1 : 1.5),
        opacity: Math.random() * 0.7 + 0.3,
      })
    }

    // Animation variables
    let earthAngle = 0
    let moonAngle = 0
    let animationFrameId: number

    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.fillStyle = "rgba(0, 0, 20, 1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })

      // Center of canvas
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2

      // Earth parameters - smaller on mobile
      const earthRadius = Math.min(window.innerWidth, window.innerHeight) * (isMobile ? 0.08 : 0.1)
      const earthX = centerX
      const earthY = centerY

      // Draw Earth
      const gradient = ctx.createRadialGradient(earthX, earthY, 0, earthX, earthY, earthRadius)
      gradient.addColorStop(0, "#1e3a8a")
      gradient.addColorStop(0.5, "#3b82f6")
      gradient.addColorStop(1, "#1e3a8a")

      ctx.beginPath()
      ctx.arc(earthX, earthY, earthRadius, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Draw Earth "continents" - fewer on mobile
      ctx.fillStyle = "#10b981"
      const continentCount = isMobile ? 4 : 7
      for (let i = 0; i < continentCount; i++) {
        const angle = earthAngle + i * (Math.PI / 3.5)
        const x = earthX + earthRadius * 0.7 * Math.cos(angle)
        const y = earthY + earthRadius * 0.7 * Math.sin(angle)
        const size = earthRadius * (0.2 + Math.random() * 0.3)

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      // Moon parameters
      const moonRadius = earthRadius * 0.3
      const moonDistance = earthRadius * 3
      const moonX = earthX + moonDistance * Math.cos(moonAngle)
      const moonY = earthY + moonDistance * Math.sin(moonAngle)

      // Draw Moon
      ctx.beginPath()
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2)
      ctx.fillStyle = "#e5e7eb"
      ctx.fill()

      // Draw Moon craters - fewer on mobile
      ctx.fillStyle = "#9ca3af"
      const craterCount = isMobile ? 2 : 3
      for (let i = 0; i < craterCount; i++) {
        const craterAngle = i * (Math.PI / 1.5)
        const craterX = moonX + moonRadius * 0.5 * Math.cos(craterAngle)
        const craterY = moonY + moonRadius * 0.5 * Math.sin(craterAngle)
        const craterSize = moonRadius * (0.2 + Math.random() * 0.1)

        ctx.beginPath()
        ctx.arc(craterX, craterY, craterSize, 0, Math.PI * 2)
        ctx.fill()
      }

      // Update angles for next frame - slower on mobile
      earthAngle += isMobile ? 0.003 : 0.005
      moonAngle += isMobile ? 0.006 : 0.01

      animationFrameId = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("resize", checkMobile)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  return (
    <div className="absolute inset-0 z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: "linear-gradient(to bottom, #000000, #0a0a2a)" }}
      />
    </div>
  )
}
