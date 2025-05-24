"use client"

import { useEffect, useRef, useState } from "react"
import { Loader2 } from "lucide-react"

export function SpaceVideoBackground() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState("")
  const [coordinates, setCoordinates] = useState({ lat: "51.6032", long: "0.1410" })
  const [dataStream, setDataStream] = useState<string[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles: Particle[] = []

  interface Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    color: string
  }

  // Initialize canvas and particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initParticles()
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Create particles
    function initParticles() {
      particles.length = 0
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, 255, ${Math.random() * 0.5 + 0.25})`,
        })
      }
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(10, 20, 50, 1)")
      gradient.addColorStop(0.5, "rgba(20, 30, 70, 1)")
      gradient.addColorStop(1, "rgba(30, 40, 90, 1)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particles.forEach((particle) => {
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })

      // Draw grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"
      ctx.lineWidth = 0.5

      const gridSize = 50
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Scanning effect
      const scanLineY = ((Date.now() % 5000) / 5000) * canvas.height
      const scanGradient = ctx.createLinearGradient(0, scanLineY - 20, 0, scanLineY + 20)
      scanGradient.addColorStop(0, "rgba(100, 150, 255, 0)")
      scanGradient.addColorStop(0.5, "rgba(100, 150, 255, 0.1)")
      scanGradient.addColorStop(1, "rgba(100, 150, 255, 0)")

      ctx.fillStyle = scanGradient
      ctx.fillRect(0, scanLineY - 20, canvas.width, 40)

      requestAnimationFrame(animate)
    }

    animate()

    setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  // Simulate data stream
  useEffect(() => {
    const dataPoints = [
      "Oxygen levels: 21.2%",
      "Temperature: -4.3°C",
      "Radiation: 12.4 μSv/h",
      "Altitude: 408.8 km",
      "Velocity: 27,600 km/h",
      "Solar array output: 98.7%",
      "Communication signal: Strong",
      "Research module status: Nominal",
      "Crew activity: Scientific research",
      "Next orbital pass: 42 min",
    ]

    const interval = setInterval(() => {
      setDataStream((prev) => {
        const newData = [...prev, dataPoints[Math.floor(Math.random() * dataPoints.length)]]
        return newData.slice(-5) // Keep only the last 5 items
      })

      // Update coordinates slightly to simulate movement
      setCoordinates({
        lat: (Number.parseFloat(coordinates.lat) + (Math.random() * 0.01 - 0.005)).toFixed(4),
        long: (Number.parseFloat(coordinates.long) + (Math.random() * 0.01 - 0.005)).toFixed(4),
      })

      // Update time
      const now = new Date()
      setCurrentTime(
        `${now.getUTCHours().toString().padStart(2, "0")}:${now
          .getUTCMinutes()
          .toString()
          .padStart(2, "0")}:${now.getUTCSeconds().toString().padStart(2, "0")} UTC`,
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [coordinates])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <Loader2 className="h-12 w-12 text-white animate-spin" />
          <span className="ml-2 text-white text-lg">Establishing connection to ISS feed...</span>
        </div>
      )}

      {/* Canvas background instead of video */}
      <canvas ref={canvasRef} className="absolute w-full h-full object-cover" />

      {/* Overlay with data visualization elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-purple-900/30">
        {/* Additional effects handled by canvas */}
      </div>

      {/* HUD Elements */}
      <div className="absolute top-4 left-4 text-blue-300 text-xs font-mono opacity-70">
        <div>LIVE FEED: INTERNATIONAL RESEARCH STATION</div>
        <div>TIME: {currentTime}</div>
        <div>
          COORDINATES: {coordinates.lat}° N, {coordinates.long}° E
        </div>
        <div>STATUS: TRANSMITTING</div>
      </div>

      {/* Data Stream */}
      <div className="absolute bottom-4 left-4 text-green-300 text-xs font-mono opacity-70">
        <div>DATA STREAM:</div>
        {dataStream.map((data, index) => (
          <div key={index} className="animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}>
            &gt; {data}
          </div>
        ))}
      </div>

      {/* Connection Status */}
      <div className="absolute top-4 right-4 flex items-center text-xs font-mono text-blue-300 opacity-70">
        <div className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
        SECURE CONNECTION ESTABLISHED
      </div>
    </div>
  )
}
