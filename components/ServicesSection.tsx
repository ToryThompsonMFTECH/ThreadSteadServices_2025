'use client'

import { useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { slugify } from '@/lib/utils'
import { ArrowRightIcon } from './Icons'
import ParallaxOverlay from './ParallaxOverlay'

export default function ServicesSection() {
  const [openCategory, setOpenCategory] = useState<number | null>(0)
  const featuredCategories = siteConfig.serviceCategories.slice(0, 8)

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index)
  }

  return (
    <section className="relative py-20 px-4 bg-black overflow-hidden border-t border-white/10">
      <ParallaxOverlay image="/images/overlays/4.png" opacity={0.28} speed={0.32} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-2xl mx-auto">
            One-stop solution for everything on your to-do list. From quick fixes to major improvements, we handle it all with professionalism and care.
          </p>
        </div>

        {/* Interactive Accordion List */}
        <div className="space-y-3 mb-12">
          {featuredCategories.map((category, index) => {
            const isOpen = openCategory === index
            
            return (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-lg border-2 border-primary/20 hover:border-primary transition-all overflow-hidden shadow-md hover:shadow-xl"
              >
                {/* Category Header - Clickable */}
                <button
                  onClick={() => toggleCategory(index)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-primary/5 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1 text-left">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-700 font-medium hidden md:block">
                        {category.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-semibold text-sm hidden sm:block">
                        {category.services.length} services
                      </span>
                      <svg
                        className={`w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? 'transform rotate-180' : ''
                        }`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Services Dropdown */}
                {isOpen && (
                  <div className="border-t border-primary/20 bg-gradient-to-br from-accent/5 to-transparent">
                    <div className="px-6 py-4">
                      <p className="text-sm text-gray-700 font-medium mb-4 md:hidden">
                        {category.description}
                      </p>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {category.services.slice(0, 9).map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={`/services/${slugify(service.name)}`}
                            className="group flex items-center gap-3 p-3 rounded-lg bg-white/80 hover:bg-primary hover:text-white transition-all border border-primary/10 hover:border-primary"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-sm text-gray-900 group-hover:text-white transition-colors truncate">
                                {service.name}
                              </p>
                            </div>
                            <ArrowRightIcon className="w-4 h-4 text-primary group-hover:text-white opacity-0 group-hover:opacity-100 transition-all flex-shrink-0" size={16} />
                          </Link>
                        ))}
                      </div>
                      {category.services.length > 9 && (
                        <div className="mt-4 pt-4 border-t border-primary/20">
                          <Link
                            href={`/services/category/${slugify(category.name)}`}
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
                          >
                            View all {category.services.length} {category.name} services
                            <ArrowRightIcon className="w-5 h-5" size={20} />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
