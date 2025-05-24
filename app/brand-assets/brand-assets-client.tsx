"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileImage, FileText, Palette, Layout, Mail, Package } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface AssetItem {
  name: string
  description: string
  format: string
  size: string
  category: string
  downloadUrl: string
  previewUrl: string
}

const brandAssets: AssetItem[] = [
  // Logos
  {
    name: "Nexara Primary Logo",
    description: "Main Nexara logo with full color",
    format: "PNG, SVG, PDF",
    size: "Various sizes",
    category: "logos",
    downloadUrl: "/assets/nexara-logo-primary.zip",
    previewUrl: "/nexara-logo-primary.png",
  },
  {
    name: "Nexara Monochrome Logo",
    description: "Single color version for dark backgrounds",
    format: "PNG, SVG, PDF",
    size: "Various sizes",
    category: "logos",
    downloadUrl: "/assets/nexara-logo-mono.zip",
    previewUrl: "/nexara-logo-mono.png",
  },
  {
    name: "Yunus Inspire Logo",
    description: "Initiative-specific logo with brand colors",
    format: "PNG, SVG, PDF",
    size: "Various sizes",
    category: "logos",
    downloadUrl: "/assets/yunus-inspire-logo.zip",
    previewUrl: "/yunus-inspire-logo.png",
  },
  {
    name: "Trusted Ally Logo",
    description: "Initiative-specific logo with brand colors",
    format: "PNG, SVG, PDF",
    size: "Various sizes",
    category: "logos",
    downloadUrl: "/assets/trusted-ally-logo.zip",
    previewUrl: "/trusted-ally-logo.png",
  },
  {
    name: "Infinity Nexus Logo",
    description: "Initiative-specific logo with brand colors",
    format: "PNG, SVG, PDF",
    size: "Various sizes",
    category: "logos",
    downloadUrl: "/assets/infinity-nexus-logo.zip",
    previewUrl: "/infinity-nexus-logo.png",
  },

  // Templates
  {
    name: "Business Card Template",
    description: "Professional business card design",
    format: "AI, PSD, PDF",
    size: "Standard 3.5x2 inches",
    category: "templates",
    downloadUrl: "/assets/business-card-template.zip",
    previewUrl: "/business-card-template.png",
  },
  {
    name: "Letterhead Template",
    description: "Official letterhead design",
    format: "AI, PSD, DOCX",
    size: "A4, Letter",
    category: "templates",
    downloadUrl: "/assets/letterhead-template.zip",
    previewUrl: "/letterhead-template.png",
  },
  {
    name: "Presentation Template",
    description: "PowerPoint/Google Slides template",
    format: "PPTX, KEY",
    size: "16:9, 4:3",
    category: "templates",
    downloadUrl: "/assets/presentation-template.zip",
    previewUrl: "/presentation-template.png",
  },
  {
    name: "Email Signature Template",
    description: "HTML email signature with branding",
    format: "HTML, PNG",
    size: "Responsive",
    category: "templates",
    downloadUrl: "/assets/email-signature-template.zip",
    previewUrl: "/email-signature-template.png",
  },
  {
    name: "Social Media Kit",
    description: "Templates for all major social platforms",
    format: "PSD, PNG, AI",
    size: "Platform optimized",
    category: "templates",
    downloadUrl: "/assets/social-media-kit.zip",
    previewUrl: "/social-media-kit.png",
  },

  // Brand Elements
  {
    name: "Color Palette Swatches",
    description: "Official brand colors in various formats",
    format: "ASE, ACO, SCSS",
    size: "Digital swatches",
    category: "elements",
    downloadUrl: "/assets/color-palette.zip",
    previewUrl: "/color-palette.png",
  },
  {
    name: "Typography Package",
    description: "Brand fonts and usage guidelines",
    format: "TTF, OTF, WOFF2",
    size: "Font family",
    category: "elements",
    downloadUrl: "/assets/typography-package.zip",
    previewUrl: "/typography-package.png",
  },
  {
    name: "Icon Set",
    description: "Custom icons for Nexara initiatives",
    format: "SVG, PNG, AI",
    size: "16px to 512px",
    category: "elements",
    downloadUrl: "/assets/icon-set.zip",
    previewUrl: "/icon-set.png",
  },
  {
    name: "Pattern Library",
    description: "Background patterns and textures",
    format: "PNG, SVG, AI",
    size: "Tileable patterns",
    category: "elements",
    downloadUrl: "/assets/pattern-library.zip",
    previewUrl: "/pattern-library.png",
  },
]

const categoryIcons = {
  logos: FileImage,
  templates: Layout,
  elements: Palette,
}

const categoryDescriptions = {
  logos: "Official logos for Nexara and all initiatives",
  templates: "Ready-to-use design templates for various materials",
  elements: "Brand elements including colors, fonts, and icons",
}

export default function BrandAssetsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const { toast } = useToast()

  const filteredAssets =
    selectedCategory === "all" ? brandAssets : brandAssets.filter((asset) => asset.category === selectedCategory)

  const handleDownload = (asset: AssetItem) => {
    toast({
      title: "Download Started",
      description: `${asset.name} is being downloaded...`,
    })
    // In a real implementation, this would trigger the actual download
    console.log(`Downloading: ${asset.downloadUrl}`)
  }

  const handleDownloadAll = () => {
    toast({
      title: "Complete Brand Package",
      description: "All brand assets are being prepared for download...",
    })
    // In a real implementation, this would download the complete package
    console.log("Downloading complete brand package")
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/20 px-4 py-2 rounded-full">
          <Package className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Brand Assets Package</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Download Brand Assets</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Access official Nexara logos, templates, and brand elements. All assets are optimized for digital and print
          use.
        </p>
        <Button onClick={handleDownloadAll} size="lg" className="mt-4">
          <Download className="mr-2 h-5 w-5" />
          Download Complete Package (25.4 MB)
        </Button>
      </div>

      {/* Usage Guidelines */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-blue-900 dark:text-blue-100">Usage Guidelines</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-blue-800 dark:text-blue-200">
          <p>• All assets are licensed for use by Nexara partners, team members, and authorized representatives</p>
          <p>• Maintain logo integrity - do not modify, stretch, or alter the official logos</p>
          <p>• Use appropriate file formats: SVG for web, PNG for presentations, PDF for print</p>
          <p>• Follow the brand guidelines for proper spacing, colors, and placement</p>
          <p>• For questions about usage rights, contact the brand team</p>
        </CardContent>
      </Card>

      {/* Category Tabs */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Assets</TabsTrigger>
          <TabsTrigger value="logos">Logos</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="elements">Elements</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {brandAssets.map((asset, index) => (
              <AssetCard key={index} asset={asset} onDownload={handleDownload} />
            ))}
          </div>
        </TabsContent>

        {["logos", "templates", "elements"].map((category) => (
          <TabsContent key={category} value={category} className="space-y-6">
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              {(() => {
                const IconComponent = categoryIcons[category as keyof typeof categoryIcons]
                return <IconComponent className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              })()}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 capitalize">{category}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredAssets.map((asset, index) => (
                <AssetCard key={index} asset={asset} onDownload={handleDownload} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Need Custom Assets?
          </CardTitle>
          <CardDescription>
            Can't find what you're looking for? Our design team can create custom assets for your specific needs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              Contact Design Team
            </Button>
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Request Custom Asset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function AssetCard({ asset, onDownload }: { asset: AssetItem; onDownload: (asset: AssetItem) => void }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
          <img
            src={asset.previewUrl || "/placeholder.svg"}
            alt={asset.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = `/placeholder.svg?height=200&width=300&text=${encodeURIComponent(asset.name)}`
            }}
          />
        </div>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg leading-tight">{asset.name}</CardTitle>
            <Badge variant="secondary" className="text-xs">
              {asset.category}
            </Badge>
          </div>
        </div>
        <CardDescription className="text-sm">{asset.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Format: {asset.format}</span>
            <span>{asset.size}</span>
          </div>
          <Button
            onClick={() => onDownload(asset)}
            className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
            variant="outline"
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
