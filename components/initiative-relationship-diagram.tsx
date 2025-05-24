"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function InitiativeRelationshipDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (!container) return

      canvas.width = container.clientWidth
      canvas.height = 500
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Draw the diagram
    const draw = () => {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Set up dimensions
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.min(canvas.width, canvas.height) * 0.35

      // Draw central "Nexara" node
      ctx.beginPath()
      ctx.arc(centerX, centerY, 60, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(79, 70, 229, 0.1)"
      ctx.fill()
      ctx.lineWidth = 2
      ctx.strokeStyle = "rgba(79, 70, 229, 0.8)"
      ctx.stroke()

      // Draw "Nexara" text
      ctx.font = "bold 16px Inter, sans-serif"
      ctx.fillStyle = "rgba(79, 70, 229, 1)"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("Nexara", centerX, centerY)

      // Calculate positions for the three initiatives
      const yunusX = centerX - radius * Math.cos(Math.PI / 6)
      const yunusY = centerY - radius * Math.sin(Math.PI / 6)

      const trustedX = centerX + radius * Math.cos(Math.PI / 6)
      const trustedY = centerY - radius * Math.sin(Math.PI / 6)

      const infinityX = centerX
      const infinityY = centerY + radius

      // Draw Yunus Inspire node
      ctx.beginPath()
      ctx.arc(yunusX, yunusY, 50, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(59, 130, 246, 0.1)"
      ctx.fill()
      ctx.lineWidth = 2
      ctx.strokeStyle = "rgba(59, 130, 246, 0.8)"
      ctx.stroke()

      // Draw Trusted Ally node
      ctx.beginPath()
      ctx.arc(trustedX, trustedY, 50, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(16, 185, 129, 0.1)"
      ctx.fill()
      ctx.lineWidth = 2
      ctx.strokeStyle = "rgba(16, 185, 129, 0.8)"
      ctx.stroke()

      // Draw Infinity Nexus node
      ctx.beginPath()
      ctx.arc(infinityX, infinityY, 50, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(139, 92, 246, 0.1)"
      ctx.fill()
      ctx.lineWidth = 2
      ctx.strokeStyle = "rgba(139, 92, 246, 0.8)"
      ctx.stroke()

      // Draw connecting lines
      // Nexara to Yunus
      ctx.beginPath()
      ctx.moveTo(centerX - 40, centerY - 40)
      ctx.lineTo(yunusX + 35, yunusY + 35)
      ctx.lineWidth = 2
      ctx.strokeStyle = "rgba(59, 130, 246, 0.5)"
      ctx.stroke()

      // Nexara to Trusted
      ctx.beginPath()
      ctx.moveTo(centerX + 40, centerY - 40)
      ctx.lineTo(trustedX - 35, trustedY + 35)
      ctx.lineWidth = 2
      ctx.strokeStyle = "rgba(16, 185, 129, 0.5)"
      ctx.stroke()

      // Nexara to Infinity
      ctx.beginPath()
      ctx.moveTo(centerX, centerY + 50)
      ctx.lineTo(infinityX, infinityY - 50)
      ctx.lineWidth = 2
      ctx.strokeStyle = "rgba(139, 92, 246, 0.5)"
      ctx.stroke()

      // Draw initiative names
      // Yunus Inspire
      ctx.font = "bold 14px Inter, sans-serif"
      ctx.fillStyle = "rgba(59, 130, 246, 1)"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("Yunus Inspire", yunusX, yunusY)

      // Trusted Ally
      ctx.font = "bold 14px Inter, sans-serif"
      ctx.fillStyle = "rgba(16, 185, 129, 1)"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("Trusted Ally", trustedX, trustedY)

      // Infinity Nexus
      ctx.font = "bold 14px Inter, sans-serif"
      ctx.fillStyle = "rgba(139, 92, 246, 1)"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("Infinity Nexus", infinityX, infinityY)

      // Draw connecting lines between initiatives
      // Yunus to Trusted
      ctx.beginPath()
      ctx.moveTo(yunusX + 45, yunusY)
      ctx.lineTo(trustedX - 45, trustedY)
      ctx.lineWidth = 1.5
      ctx.setLineDash([5, 3])
      ctx.strokeStyle = "rgba(107, 114, 128, 0.5)"
      ctx.stroke()
      ctx.setLineDash([])

      // Yunus to Infinity
      ctx.beginPath()
      ctx.moveTo(yunusX, yunusY + 45)
      ctx.lineTo(infinityX - 40, infinityY - 40)
      ctx.lineWidth = 1.5
      ctx.setLineDash([5, 3])
      ctx.strokeStyle = "rgba(107, 114, 128, 0.5)"
      ctx.stroke()
      ctx.setLineDash([])

      // Trusted to Infinity
      ctx.beginPath()
      ctx.moveTo(trustedX, trustedY + 45)
      ctx.lineTo(infinityX + 40, infinityY - 40)
      ctx.lineWidth = 1.5
      ctx.setLineDash([5, 3])
      ctx.strokeStyle = "rgba(107, 114, 128, 0.5)"
      ctx.stroke()
      ctx.setLineDash([])
    }

    draw()
    window.addEventListener("resize", draw)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", draw)
    }
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Initiative Relationship Diagram</CardTitle>
        <CardDescription>
          Visual representation of how Yunus Inspire, Trusted Ally & Infinity Nexus interconnect within the Nexara
          ecosystem
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full relative">
          <canvas ref={canvasRef} className="w-full h-[500px]"></canvas>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-700 mb-1 flex items-center">
                <span className="inline-block h-3 w-3 rounded-full bg-blue-500 mr-2"></span>
                Yunus Inspire
              </h4>
              <p className="text-gray-700">Educational initiatives and community empowerment programs</p>
            </div>

            <div className="p-3 bg-emerald-50 rounded-lg">
              <h4 className="font-medium text-emerald-700 mb-1 flex items-center">
                <span className="inline-block h-3 w-3 rounded-full bg-emerald-500 mr-2"></span>
                Trusted Ally
              </h4>
              <p className="text-gray-700">Sustainable development and community support in Cox's Bazar</p>
            </div>

            <div className="p-3 bg-purple-50 rounded-lg">
              <h4 className="font-medium text-purple-700 mb-1 flex items-center">
                <span className="inline-block h-3 w-3 rounded-full bg-purple-500 mr-2"></span>
                Infinity Nexus
              </h4>
              <p className="text-gray-700">Technology innovation and future-focused development</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
