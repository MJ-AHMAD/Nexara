"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Check } from "lucide-react"
import { validateJson } from "@/lib/validate-json"

interface JsonEditorProps {
  initialData: any
  onUpdate: (data: any) => void
}

export function JsonEditor({ initialData, onUpdate }: JsonEditorProps) {
  const [jsonText, setJsonText] = useState(() => JSON.stringify(initialData, null, 2))
  const [error, setError] = useState<string | null>(null)
  const [isValid, setIsValid] = useState(true)

  useEffect(() => {
    // Update the text when initialData changes
    setJsonText(JSON.stringify(initialData, null, 2))
  }, [initialData])

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value
    setJsonText(newText)

    // Validate on each change
    const { isValid, error } = validateJson(newText)
    setIsValid(isValid)
    setError(error)
  }

  const handleApply = () => {
    try {
      const parsedData = JSON.parse(jsonText)
      onUpdate(parsedData)
      setError(null)
      setIsValid(true)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("Invalid JSON")
      }
      setIsValid(false)
    }
  }

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(jsonText)
      setJsonText(JSON.stringify(parsed, null, 2))
      setError(null)
      setIsValid(true)
    } catch (err) {
      // Don't update the text if it's invalid
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("Invalid JSON")
      }
      setIsValid(false)
    }
  }

  return (
    <div className="space-y-4">
      <Textarea
        value={jsonText}
        onChange={handleTextChange}
        className="font-mono text-sm min-h-[300px] resize-y"
        placeholder="Enter JSON here..."
      />

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {isValid && !error && jsonText.trim() !== "" && (
        <Alert className="bg-green-50 text-green-800 border-green-200">
          <Check className="h-4 w-4 text-green-600" />
          <AlertDescription>Valid JSON</AlertDescription>
        </Alert>
      )}

      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={handleFormat}>
          Format
        </Button>
        <Button onClick={handleApply} disabled={!isValid}>
          Apply Changes
        </Button>
      </div>
    </div>
  )
}
