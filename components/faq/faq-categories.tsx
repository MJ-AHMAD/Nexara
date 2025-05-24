"use client"

import type React from "react"

import { useState } from "react"
import {
  Info,
  Lightbulb,
  ShoppingBag,
  User,
  HelpCircle,
  FileText,
  CreditCard,
  Truck,
  Shield,
  Globe,
} from "lucide-react"
import { cn } from "@/lib/utils"

type CategoryItem = {
  id: string
  name: string
  icon: React.ReactNode
  count: number
}

const categories: CategoryItem[] = [
  { id: "general", name: "General Information", icon: <Info className="h-5 w-5" />, count: 8 },
  { id: "initiatives", name: "Our Initiatives", icon: <Lightbulb className="h-5 w-5" />, count: 12 },
  { id: "products", name: "Products & Services", icon: <ShoppingBag className="h-5 w-5" />, count: 10 },
  { id: "account", name: "Account & Membership", icon: <User className="h-5 w-5" />, count: 9 },
  { id: "technical", name: "Technical Support", icon: <HelpCircle className="h-5 w-5" />, count: 7 },
  { id: "documentation", name: "Documentation", icon: <FileText className="h-5 w-5" />, count: 5 },
  { id: "billing", name: "Billing & Payments", icon: <CreditCard className="h-5 w-5" />, count: 6 },
  { id: "shipping", name: "Shipping & Delivery", icon: <Truck className="h-5 w-5" />, count: 4 },
  { id: "privacy", name: "Privacy & Security", icon: <Shield className="h-5 w-5" />, count: 5 },
  { id: "international", name: "International", icon: <Globe className="h-5 w-5" />, count: 3 },
]

export default function FAQCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <div className="space-y-1">
      <h3 className="font-medium text-lg mb-3">Categories</h3>
      <div
        className={cn(
          "flex items-center px-3 py-2 rounded-md cursor-pointer",
          activeCategory === "all" ? "bg-blue-50 text-blue-700" : "hover:bg-gray-100",
        )}
        onClick={() => setActiveCategory("all")}
      >
        <span className="flex-1">All Questions</span>
        <span className="text-sm text-gray-500">{categories.reduce((acc, cat) => acc + cat.count, 0)}</span>
      </div>

      {categories.map((category) => (
        <div
          key={category.id}
          className={cn(
            "flex items-center px-3 py-2 rounded-md cursor-pointer",
            activeCategory === category.id ? "bg-blue-50 text-blue-700" : "hover:bg-gray-100",
          )}
          onClick={() => setActiveCategory(category.id)}
        >
          <span className="mr-2">{category.icon}</span>
          <span className="flex-1">{category.name}</span>
          <span className="text-sm text-gray-500">{category.count}</span>
        </div>
      ))}
    </div>
  )
}
