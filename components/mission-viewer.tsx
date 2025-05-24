"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface MissionData {
  project: {
    name: string
    slogan: string
    mission: string
    vision: string
    key_values: Record<string, string>
  }
}

interface MissionViewerProps {
  data: MissionData
}

export function MissionViewer({ data }: MissionViewerProps) {
  const { project } = data
  const keyValues = Object.entries(project.key_values)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{project.name}</CardTitle>
          <CardDescription className="text-lg italic">{project.slogan}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Mission</h3>
            <p className="text-muted-foreground">{project.mission}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Vision</h3>
            <p className="text-muted-foreground">{project.vision}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Values</CardTitle>
          <CardDescription>The core principles that guide our work</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyValues.map(([key, value]) => (
              <div key={key} className="p-3 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="capitalize">
                    {key}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
