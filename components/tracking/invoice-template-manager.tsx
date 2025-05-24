"use client"

import { useState } from "react"
import { Layout, Plus, Settings } from "lucide-react"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { invoiceTemplates } from "./invoice-template-selector"

interface InvoiceTemplateManagerProps {
  currentTemplate: string
  onTemplateChange: (templateId: string) => void
}

export function InvoiceTemplateManager({ currentTemplate = "classic", onTemplateChange }: InvoiceTemplateManagerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("browse")
  const [selectedTemplate, setSelectedTemplate] = useState(currentTemplate)

  // For custom template creation
  const [customTemplate, setCustomTemplate] = useState({
    name: "",
    primaryColor: "#3b82f6",
    accentColor: "#dbeafe",
    fontFamily: "Inter, sans-serif",
    headerStyle: "standard",
    footerStyle: "standard",
  })

  const handleSave = () => {
    onTemplateChange(selectedTemplate)
    setIsOpen(false)
    toast({
      title: "Template updated",
      description: `Invoice template changed to ${invoiceTemplates.find((t) => t.id === selectedTemplate)?.name}`,
    })
  }

  const handleCreateCustomTemplate = () => {
    if (!customTemplate.name) {
      toast({
        title: "Template name required",
        description: "Please provide a name for your custom template",
        variant: "destructive",
      })
      return
    }

    // In a real app, this would save the custom template to storage
    toast({
      title: "Custom template created",
      description: `Template "${customTemplate.name}" has been created`,
    })

    setActiveTab("browse")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Layout className="h-4 w-4" />
          Manage Templates
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Invoice Templates</DialogTitle>
          <DialogDescription>Browse available templates or create your own custom template.</DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="browse">Browse Templates</TabsTrigger>
            <TabsTrigger value="create">Create Custom</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {invoiceTemplates.map((template) => (
                <div
                  key={template.id}
                  className={`relative border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedTemplate === template.id
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{template.name}</h3>
                      <p className="text-xs text-muted-foreground">{template.description}</p>
                    </div>
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
                  </div>

                  {selectedTemplate === template.id && (
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
                      <Settings className="h-3 w-3" />
                    </div>
                  )}
                </div>
              ))}

              {/* Custom template placeholder */}
              <div
                className="border border-dashed rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 transition-all"
                onClick={() => setActiveTab("create")}
              >
                <Plus className="h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm font-medium">Create Custom Template</p>
                <p className="text-xs text-muted-foreground">Design your own invoice template</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="create" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="template-name">Template Name</Label>
                  <Input
                    id="template-name"
                    value={customTemplate.name}
                    onChange={(e) => setCustomTemplate({ ...customTemplate, name: e.target.value })}
                    placeholder="My Custom Template"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="primary-color">Primary Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="primary-color"
                      type="color"
                      value={customTemplate.primaryColor}
                      onChange={(e) => setCustomTemplate({ ...customTemplate, primaryColor: e.target.value })}
                      className="w-12 h-10 p-1"
                    />
                    <Input
                      value={customTemplate.primaryColor}
                      onChange={(e) => setCustomTemplate({ ...customTemplate, primaryColor: e.target.value })}
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accent-color">Accent Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="accent-color"
                      type="color"
                      value={customTemplate.accentColor}
                      onChange={(e) => setCustomTemplate({ ...customTemplate, accentColor: e.target.value })}
                      className="w-12 h-10 p-1"
                    />
                    <Input
                      value={customTemplate.accentColor}
                      onChange={(e) => setCustomTemplate({ ...customTemplate, accentColor: e.target.value })}
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="font-family">Font Family</Label>
                  <select
                    id="font-family"
                    value={customTemplate.fontFamily}
                    onChange={(e) => setCustomTemplate({ ...customTemplate, fontFamily: e.target.value })}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="Inter, sans-serif">Inter (Sans-serif)</option>
                    <option value="Georgia, serif">Georgia (Serif)</option>
                    <option value="Courier New, monospace">Courier New (Monospace)</option>
                    <option value="Arial, sans-serif">Arial (Sans-serif)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="header-style">Header Style</Label>
                  <select
                    id="header-style"
                    value={customTemplate.headerStyle}
                    onChange={(e) => setCustomTemplate({ ...customTemplate, headerStyle: e.target.value })}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="standard">Standard</option>
                    <option value="modern">Modern</option>
                    <option value="minimal">Minimal</option>
                    <option value="bold">Bold</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="footer-style">Footer Style</Label>
                  <select
                    id="footer-style"
                    value={customTemplate.footerStyle}
                    onChange={(e) => setCustomTemplate({ ...customTemplate, footerStyle: e.target.value })}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="standard">Standard</option>
                    <option value="centered">Centered</option>
                    <option value="minimal">Minimal</option>
                    <option value="detailed">Detailed</option>
                  </select>
                </div>

                <div className="border rounded-md p-4 bg-muted/30">
                  <h3 className="font-medium mb-2">Preview</h3>
                  <div
                    className="h-40 border rounded-md overflow-hidden"
                    style={{
                      backgroundColor: "white",
                      fontFamily: customTemplate.fontFamily.split(",")[0],
                    }}
                  >
                    <div className="p-3 text-white" style={{ backgroundColor: customTemplate.primaryColor }}>
                      <div className="flex justify-between">
                        <div className="font-bold">Your Company</div>
                        <div>INVOICE</div>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="text-sm mb-2">Invoice #INV-001</div>
                      <div
                        className="w-full h-4 mb-2 rounded"
                        style={{ backgroundColor: customTemplate.accentColor }}
                      ></div>
                      <div
                        className="w-3/4 h-4 mb-2 rounded"
                        style={{ backgroundColor: customTemplate.accentColor }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setActiveTab("browse")}>
                Cancel
              </Button>
              <Button onClick={handleCreateCustomTemplate}>Create Template</Button>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={activeTab === "create"}>
            Apply Template
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
