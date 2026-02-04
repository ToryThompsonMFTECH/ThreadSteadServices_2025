'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site'
import ParallaxOverlay from './ParallaxOverlay'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-20 px-4 bg-gray-50 overflow-hidden border-t border-gray-200">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 drop-shadow-lg">
            Frequently Asked Questions
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold max-w-2xl mx-auto">
            We've been helping homeowners repair, maintain, and enhance their spaces for years. 
            Here are answers to some of your most frequently asked questions about home repair and improvement services.
          </p>
        </div>

        <div className="space-y-4">
          {siteConfig.faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-primary/20 rounded-lg overflow-hidden bg-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-primary/5 hover:bg-primary/10 transition-all duration-300 flex items-center justify-between"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg md:text-xl font-bold text-primary pr-4 drop-shadow-sm">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
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
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-800 font-medium text-base leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

