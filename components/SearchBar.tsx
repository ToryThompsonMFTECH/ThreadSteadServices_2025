'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { slugify } from '@/lib/utils'
import { findServicesByTerm } from '@/lib/searchDictionary'
import Link from 'next/link'

interface SearchResult {
  type: 'service' | 'category'
  name: string
  description: string
  category?: string
  subcategory?: string
  score: number
  matchType: 'exact' | 'starts' | 'contains' | 'word' | 'fuzzy'
}

// Helper function to highlight matching text
const highlightMatch = (text: string, query: string): string => {
  if (!query.trim()) return text
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  return text.replace(regex, '<mark class="bg-primary/20 text-primary font-semibold">$1</mark>')
}

// Calculate search score for ranking
const calculateScore = (text: string, query: string, field: 'name' | 'description'): number => {
  const lowerText = text.toLowerCase()
  const lowerQuery = query.toLowerCase()
  
  // Exact match gets highest score
  if (lowerText === lowerQuery) return field === 'name' ? 1000 : 500
  
  // Starts with query
  if (lowerText.startsWith(lowerQuery)) return field === 'name' ? 800 : 400
  
  // Word boundary match (starts with word)
  const words = lowerText.split(/\s+/)
  if (words.some(word => word.startsWith(lowerQuery))) return field === 'name' ? 600 : 300
  
  // Contains query
  if (lowerText.includes(lowerQuery)) return field === 'name' ? 400 : 200
  
  // Fuzzy match - check if all query characters appear in order
  let queryIndex = 0
  for (let i = 0; i < lowerText.length && queryIndex < lowerQuery.length; i++) {
    if (lowerText[i] === lowerQuery[queryIndex]) queryIndex++
  }
  if (queryIndex === lowerQuery.length) return field === 'name' ? 200 : 100
  
  return 0
}

// Determine match type for highlighting
const getMatchType = (text: string, query: string): SearchResult['matchType'] => {
  const lowerText = text.toLowerCase()
  const lowerQuery = query.toLowerCase()
  
  if (lowerText === lowerQuery) return 'exact'
  if (lowerText.startsWith(lowerQuery)) return 'starts'
  if (lowerText.includes(lowerQuery)) return 'contains'
  
  const words = lowerText.split(/\s+/)
  if (words.some(word => word.startsWith(lowerQuery))) return 'word'
  
  return 'fuzzy'
}

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Enhanced search with better matching and ranking
  const results = useMemo(() => {
    if (searchQuery.trim().length === 0) {
      return []
    }

    const query = searchQuery.trim()
    const queryWords = query.toLowerCase().split(/\s+/).filter(w => w.length > 0)
    const searchResults: SearchResult[] = []

    // First, check search dictionary for common terms
    const dictionaryMatches = findServicesByTerm(query)
    const dictionaryServiceNames = new Set(dictionaryMatches.serviceNames)
    const dictionaryCategories = new Set(dictionaryMatches.categories)

    // Search through all service categories and services
    siteConfig.serviceCategories.forEach((category) => {
      // Boost category if it matches dictionary
      const categoryBoost = dictionaryCategories.has(category.name) ? 200 : 0
      
      // Check category name
      const categoryScore = calculateScore(category.name, query, 'name')
      if (categoryScore > 0 || categoryBoost > 0) {
        searchResults.push({
          type: 'category',
          name: category.name,
          description: category.description,
          category: category.name,
          score: categoryScore + 50 + categoryBoost,
          matchType: getMatchType(category.name, query),
        })
      }

      // Search through services in this category
      category.services.forEach((service) => {
        let score = 0
        let matchType: SearchResult['matchType'] = 'fuzzy'
        
        // Check if service matches dictionary (high boost)
        const dictionaryBoost = dictionaryServiceNames.has(service.name) ? 300 : 0
        
        // Check service name (highest weight)
        const nameScore = calculateScore(service.name, query, 'name')
        if (nameScore > 0 || dictionaryBoost > 0) {
          score += nameScore + dictionaryBoost
          matchType = getMatchType(service.name, query)
        }
        
        // Check description
        const descScore = calculateScore(service.description, query, 'description')
        if (descScore > 0) {
          score += descScore * 0.5 // Lower weight for description matches
          if (matchType === 'fuzzy') matchType = getMatchType(service.description, query)
        }
        
        // Check subcategory
        if (service.subcategory) {
          const subcatScore = calculateScore(service.subcategory, query, 'name')
          if (subcatScore > 0) {
            score += subcatScore * 0.3
          }
        }
        
        // Multi-word search: check if all words match
        if (queryWords.length > 1) {
          const allWordsMatch = queryWords.every(word => 
            service.name.toLowerCase().includes(word) ||
            service.description.toLowerCase().includes(word) ||
            (service.subcategory && service.subcategory.toLowerCase().includes(word))
          )
          if (allWordsMatch) score += 100
        }
        
        // Also check individual words against dictionary
        queryWords.forEach(word => {
          const wordMatches = findServicesByTerm(word)
          if (wordMatches.serviceNames.includes(service.name)) {
            score += 150 // Boost for individual word matches
          }
        })
        
        if (score > 0) {
          searchResults.push({
            type: 'service',
            name: service.name,
            description: service.description,
            category: category.name,
            subcategory: service.subcategory,
            score,
            matchType,
          })
        }
      })
    })

    // Also search legacy services
    siteConfig.services.forEach((service) => {
      let score = 0
      let matchType: SearchResult['matchType'] = 'fuzzy'
      
      const nameScore = calculateScore(service.name, query, 'name')
      if (nameScore > 0) {
        score += nameScore
        matchType = getMatchType(service.name, query)
      }
      
      const descScore = calculateScore(service.description, query, 'description')
      if (descScore > 0) {
        score += descScore * 0.5
        if (matchType === 'fuzzy') matchType = getMatchType(service.description, query)
      }
      
      if (score > 0) {
        searchResults.push({
          type: 'service',
          name: service.name,
          description: service.description,
          category: service.category,
          score,
          matchType,
        })
      }
    })

    // Sort by score (highest first) and remove duplicates
    const uniqueResults = searchResults
      .sort((a, b) => b.score - a.score)
      .filter((result, index, self) => 
        index === self.findIndex(r => r.name === result.name && r.type === result.type)
      )
      .slice(0, 12) // Show top 12 results

    return uniqueResults
  }, [searchQuery])

  const handleResultClick = () => {
    setIsOpen(false)
    setSearchQuery('')
  }
  
  const handleResultClickWithHref = (href: string) => {
    setIsOpen(false)
    setSearchQuery('')
    // Navigate to the service page
    router.push(href)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setIsOpen(e.target.value.trim().length > 0)
  }

  return (
    <div ref={searchRef} className="relative w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for services, issues, or problems..."
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => {
            if (searchQuery.trim().length > 0 && results.length > 0) setIsOpen(true)
          }}
          className="w-full px-4 py-3 pl-12 pr-12 border-2 border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-white bg-white/95 text-gray-900 placeholder-gray-500 text-base"
        />
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('')
              setIsOpen(false)
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Clear search"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border-2 border-primary/20 rounded-lg shadow-2xl max-h-[500px] overflow-y-auto">
          <div className="p-2">
            {results.map((result, index) => {
              const href = result.type === 'category' 
                ? `/services/category/${slugify(result.name)}`
                : `/services/${slugify(result.name)}`
              
              return (
                <div
                  key={`${result.type}-${result.name}-${index}`}
                  onClick={() => handleResultClickWithHref(href)}
                  className="block p-4 hover:bg-primary/5 rounded-lg transition-colors border-b border-gray-100 last:border-b-0 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {result.type === 'category' ? (
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-accent"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p 
                        className="text-base font-bold text-primary mb-1"
                        dangerouslySetInnerHTML={{ 
                          __html: highlightMatch(result.name, searchQuery) 
                        }}
                      />
                      <p 
                        className="text-sm text-gray-700 mt-1 line-clamp-2"
                        dangerouslySetInnerHTML={{ 
                          __html: highlightMatch(result.description, searchQuery) 
                        }}
                      />
                      {result.category && (
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {result.category}
                          </span>
                          {result.subcategory && (
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              {result.subcategory}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          {results.length >= 12 && (
            <div className="border-t border-gray-200 p-3 bg-gray-50">
              <Link
                href="/services"
                onClick={handleResultClick}
                className="block text-center text-sm text-primary font-bold hover:text-primary-dark transition-colors"
              >
                View All {results.length}+ Results →
              </Link>
            </div>
          )}
        </div>
      )}

      {/* No Results Message */}
      {isOpen && searchQuery.trim().length > 0 && results.length === 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border-2 border-primary/20 rounded-lg shadow-2xl p-6">
          <div className="text-center">
            <svg
              className="w-12 h-12 text-gray-400 mx-auto mb-3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="text-gray-700 font-semibold mb-2">No results found</p>
            <p className="text-gray-600 text-sm mb-4">
              Try different keywords or search for specific services
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/services"
                onClick={handleResultClick}
                className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-light transition-colors text-sm"
              >
                Browse All Services
              </Link>
              <Link
                href="/contact"
                onClick={handleResultClick}
                className="inline-block bg-gray-100 text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

