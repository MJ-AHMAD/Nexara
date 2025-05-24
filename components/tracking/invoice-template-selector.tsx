"use client"

import { useState } from "react"
import { Check, Layout } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

// Define available templates
export const invoiceTemplates = [
  {
    id: "classic",
    name: "Classic",
    description: "Traditional professional invoice layout",
    previewImage: "/placeholder.svg?key=f4w3q",
    primaryColor: "#2563eb",
    accentColor: "#dbeafe",
    fontFamily: "Inter, sans-serif",
  },
  {
    id: "modern",
    name: "Modern",
    description: "Clean and minimal design with bold accents",
    previewImage: "/placeholder.svg?key=lgq9o",
    primaryColor: "#7c3aed",
    accentColor: "#f3e8ff",
    fontFamily: "Inter, sans-serif",
  },
  {
    id: "elegant",
    name: "Elegant",
    description: "Sophisticated design with serif fonts",
    previewImage: "/placeholder.svg?key=qsy5t",
    primaryColor: "#0f766e",
    accentColor: "#ccfbf1",
    fontFamily: "Georgia, serif",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Colorful design with modern layout",
    previewImage: "/creative-invoice-template.png",
    primaryColor: "#c2410c",
    accentColor: "#ffedd5",
    fontFamily: "Inter, sans-serif",
  },
  {
    id: "corporate",
    name: "Corporate",
    description: "Professional design for business use",
    previewImage: "/corporate-invoice-template.png",
    primaryColor: "#1e40af",
    accentColor: "#dbeafe",
    fontFamily: "Inter, sans-serif",
  },
]

interface InvoiceTemplateSelectorProps {
  currentTemplate: string
  onTemplateChange: (templateId: string) => void
}

export function InvoiceTemplateSelector({
  currentTemplate = "classic",
  onTemplateChange,
}: InvoiceTemplateSelectorProps) {
  const [selectedTemplate, setSelectedTemplate] = useState(currentTemplate)
  const [isOpen, setIsOpen] = useState(false)

  const handleSave = () => {
    onTemplateChange(selectedTemplate)
    setIsOpen(false)
    toast({
      title: "Template updated",
      description: `Invoice template changed to ${invoiceTemplates.find((t) => t.id === selectedTemplate)?.name}`,
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Layout className="h-4 w-4" />
          Change Template
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Select Invoice Template</DialogTitle>
          <DialogDescription>
            Choose a template design for your invoices. This will apply to newly generated invoices.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <RadioGroup
            value={selectedTemplate}
            onValueChange={setSelectedTemplate}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {invoiceTemplates.map((template) => (
              <div
                key={template.id}
                className={`relative border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedTemplate === template.id
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <RadioGroupItem value={template.id} id={`template-${template.id}`} className="sr-only" />
                <Label htmlFor={`template-${template.id}`} className="cursor-pointer flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{template.name}</h3>
                      <p className="text-sm text-muted-foreground">{template.description}</p>
                    </div>
                    {selectedTemplate === template.id && (
                      <div className="bg-primary text-primary-foreground rounded-full p-1">
                        <Check className="h-3 w-3" />
                      </div>
                    )}
                  </div>

                  <div className="mt-2 border rounded overflow-hidden">
                    <img
                      src={template.previewImage || "/placeholder.svg"}
                      alt={`${template.name} template preview`}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: template.primaryColor }}
                      title="Primary color"
                    />
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: template.accentColor }}
                      title="Accent color"
                    />
                    <span className="text-xs text-muted-foreground ml-auto">{template.fontFamily.split(",")[0]}</span>
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Apply Template</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
