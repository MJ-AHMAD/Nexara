"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { faqData } from "@/lib/faq-data"

export default function FAQSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (!searchQuery.trim()) {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    const query = searchQuery.toLowerCase()

    // Search through all FAQ items across categories
    const results = Object.entries(faqData).flatMap(([category, items]) =>
      items
        .filter((item) => item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query))
        .map((item) => ({
          ...item,
          category,
        })),
    )

    setSearchResults(results)
    setIsSearching(true)
  }

  const clearSearch = () => {
    setSearchQuery("")
    setSearchResults([])
    setIsSearching(false)
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for answers..."
            className="pl-10 py-6 text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-12 top-1/2 transform -translate-y-1/2 h-8 px-2 text-gray-500"
              onClick={clearSearch}
            >
              Clear
            </Button>
          )}
          <Button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
            Search
          </Button>
        </div>
      </form>

      {isSearching && (
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-4">
            {searchResults.length > 0
              ? `Found ${searchResults.length} result${searchResults.length === 1 ? "" : "s"} for "${searchQuery}"`
              : `No results found for "${searchQuery}"`}
          </h3>

          {searchResults.length > 0 && (
            <div className="space-y-4">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                >
                  <h4 className="font-medium text-lg mb-2">{result.question}</h4>
                  <p className="text-gray-600">{result.answer}</p>
                  <div className="mt-2">
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                      {result.category.charAt(0).toUpperCase() + result.category.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {searchResults.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">We couldn't find any answers matching your search.</p>
              <p className="text-gray-600">Try using different keywords or browse our FAQ categories below.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
