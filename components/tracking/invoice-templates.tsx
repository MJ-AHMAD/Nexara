"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, Edit, Plus, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export type InvoiceTemplate = "classic" | "modern" | "minimal" | "professional" | "branded"

type TemplateOption = {
  id: InvoiceTemplate
  name: string
  description: string
  image: string
}

const defaultTemplates: TemplateOption[] = [
  {
    id: "classic",
    name: "Classic",
    description: "Traditional professional invoice layout",
    image: "/classic-invoice-template.png",
  },
  {
    id: "modern",
    name: "Modern",
    description: "Clean, contemporary design with emphasis on clarity",
    image: "/corporate-invoice-template.png",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Simplified design focusing on essential information",
    image: "/creative-invoice-template.png",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Formal business style with detailed sections",
    image: "/classic-invoice-template.png",
  },
  {
    id: "branded",
    name: "Branded",
    description: "Customizable template with prominent branding",
    image: "/corporate-invoice-template.png",
  },
]

type CustomTemplate = {
  id: string
  name: string
  description: string
  html: string
  css: string
}

interface InvoiceTemplatesProps {
  selectedTemplate?: InvoiceTemplate
  onSelectTemplate?: (template: InvoiceTemplate) => void
  showPreview?: boolean
  previewData?: any
}

export function InvoiceTemplates({
  selectedTemplate = "classic",
  onSelectTemplate,
  showPreview = true,
  previewData,
}: InvoiceTemplatesProps) {
  const [templates, setTemplates] = useState<TemplateOption[]>(defaultTemplates)
  const [customTemplates, setCustomTemplates] = useState<CustomTemplate[]>([])
  const [newTemplate, setNewTemplate] = useState<CustomTemplate>({
    id: "",
    name: "",
    description: "",
    html: "",
    css: "",
  })
  const [isCreatingTemplate, setIsCreatingTemplate] = useState(false)
  const [isEditingTemplate, setIsEditingTemplate] = useState<string | null>(null)

  const handleSelectTemplate = (template: InvoiceTemplate) => {
    if (onSelectTemplate) {
      onSelectTemplate(template)
    }
  }

  const handleSaveCustomTemplate = () => {
    if (!newTemplate.name) {
      toast({
        title: "Template name required",
        description: "Please provide a name for your custom template",
        variant: "destructive",
      })
      return
    }

    const id = `custom-${Date.now()}`
    const template = { ...newTemplate, id }

    setCustomTemplates([...customTemplates, template])
    setNewTemplate({
      id: "",
      name: "",
      description: "",
      html: "",
      css: "",
    })

    setIsCreatingTemplate(false)

    toast({
      title: "Template created",
      description: "Your custom template has been saved",
    })
  }

  const handleUpdateCustomTemplate = () => {
    if (!isEditingTemplate) return

    setCustomTemplates(customTemplates.map((template) => (template.id === isEditingTemplate ? newTemplate : template)))

    setIsEditingTemplate(null)
    setNewTemplate({
      id: "",
      name: "",
      description: "",
      html: "",
      css: "",
    })

    toast({
      title: "Template updated",
      description: "Your custom template has been updated",
    })
  }

  const handleDeleteCustomTemplate = (id: string) => {
    setCustomTemplates(customTemplates.filter((template) => template.id !== id))

    toast({
      title: "Template deleted",
      description: "The custom template has been removed",
    })
  }

  const handleEditCustomTemplate = (template: CustomTemplate) => {
    setNewTemplate(template)
    setIsEditingTemplate(template.id)
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="gallery">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="gallery">Template Gallery</TabsTrigger>
          <TabsTrigger value="custom">Custom Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="gallery" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((template) => (
              <Card
                key={template.id}
                className={`cursor-pointer transition-all hover:shadow-md ${selectedTemplate === template.id ? "ring-2 ring-primary" : ""}`}
                onClick={() => handleSelectTemplate(template.id)}
              >
                <CardHeader className="p-4">
                  <CardTitle className="text-lg flex items-center justify-between">
                    {template.name}
                    {selectedTemplate === template.id && <Check className="h-5 w-5 text-primary" />}
                  </CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={template.image || "/placeholder.svg"}
                      alt={template.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSelectTemplate(template.id)
                    }}
                  >
                    {selectedTemplate === template.id ? "Selected" : "Select Template"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="custom" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Your Custom Templates</h3>
            <Dialog open={isCreatingTemplate} onOpenChange={setIsCreatingTemplate}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Template
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Create Custom Invoice Template</DialogTitle>
                  <DialogDescription>Design your own invoice template with HTML and CSS</DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={newTemplate.name}
                      onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                      Description
                    </Label>
                    <Input
                      id="description"
                      value={newTemplate.description}
                      onChange={(e) => setNewTemplate({ ...newTemplate, description: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-start gap-4">
                    <Label htmlFor="html" className="text-right pt-2">
                      HTML
                    </Label>
                    <Textarea
                      id="html"
                      value={newTemplate.html}
                      onChange={(e) => setNewTemplate({ ...newTemplate, html: e.target.value })}
                      className="col-span-3 font-mono text-sm h-40"
                      placeholder="<div class='invoice'>...</div>"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-start gap-4">
                    <Label htmlFor="css" className="text-right pt-2">
                      CSS
                    </Label>
                    <Textarea
                      id="css"
                      value={newTemplate.css}
                      onChange={(e) => setNewTemplate({ ...newTemplate, css: e.target.value })}
                      className="col-span-3 font-mono text-sm h-40"
                      placeholder=".invoice { ... }"
                    />
                  </div>
                </div>

                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsCreatingTemplate(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSaveCustomTemplate}>Save Template</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {customTemplates.length === 0 ? (
            <div className="text-center p-8 border rounded-lg bg-muted/20">
              <p className="text-muted-foreground">You haven't created any custom templates yet</p>
              <Button variant="outline" className="mt-4" onClick={() => setIsCreatingTemplate(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Template
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {customTemplates.map((template) => (
                <Card key={template.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleEditCustomTemplate(template)}>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => handleDeleteCustomTemplate(template.id)}>
                        <Trash className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => {
                        // Handle using custom template
                        toast({
                          title: "Custom template selected",
                          description: `Using ${template.name} template`,
                        })
                      }}
                    >
                      Use Template
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}

          {isEditingTemplate && (
            <Dialog open={!!isEditingTemplate} onOpenChange={(open) => !open && setIsEditingTemplate(null)}>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Edit Custom Template</DialogTitle>
                  <DialogDescription>Update your custom invoice template</DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="edit-name"
                      value={newTemplate.name}
                      onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-description" className="text-right">
                      Description
                    </Label>
                    <Input
                      id="edit-description"
                      value={newTemplate.description}
                      onChange={(e) => setNewTemplate({ ...newTemplate, description: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-start gap-4">
                    <Label htmlFor="edit-html" className="text-right pt-2">
                      HTML
                    </Label>
                    <Textarea
                      id="edit-html"
                      value={newTemplate.html}
                      onChange={(e) => setNewTemplate({ ...newTemplate, html: e.target.value })}
                      className="col-span-3 font-mono text-sm h-40"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-start gap-4">
                    <Label htmlFor="edit-css" className="text-right pt-2">
                      CSS
                    </Label>
                    <Textarea
                      id="edit-css"
                      value={newTemplate.css}
                      onChange={(e) => setNewTemplate({ ...newTemplate, css: e.target.value })}
                      className="col-span-3 font-mono text-sm h-40"
                    />
                  </div>
                </div>

                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsEditingTemplate(null)}>
                    Cancel
                  </Button>
                  <Button onClick={handleUpdateCustomTemplate}>Update Template</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </TabsContent>
      </Tabs>

      {showPreview && selectedTemplate && (
        <div className="mt-8 border rounded-lg p-4">
          <h3 className="text-lg font-medium mb-4">Template Preview</h3>
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
            {/* This would be replaced with actual template preview rendering */}
            <div className="aspect-[8.5/11] bg-white border rounded-lg overflow-hidden">
              <Image
                src={templates.find((t) => t.id === selectedTemplate)?.image || "/classic-invoice-template.png"}
                alt="Invoice Preview"
                width={850}
                height={1100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
