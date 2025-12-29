'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import ParallaxOverlay from './ParallaxOverlay'

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && window.innerWidth > 768) {
        const scrolled = window.pageYOffset
        const rate = scrolled * 0.5
        parallaxRef.current.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-[60vh] md:min-h-[65vh] flex items-center overflow-hidden pt-24 md:pt-28 pb-8 md:pb-12">
      {/* Background Image with Parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/tools-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
      </div>
      {/* Parallax Overlay */}
      <ParallaxOverlay image="/images/overlays/1.png" opacity={0.35} speed={0.4} />

      {/* Text Content - Full Width */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12 pb-12 md:pb-16 w-full">
          {/* Headline */}
          <p className="text-white text-lg md:text-xl font-semibold mb-4">
            Home Repair & Improvement Services in {siteConfig.location}
          </p>

          {/* Main Title */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            We Have the Skills and Tools to Deliver High-Quality Results
          </h1>

          {/* Body Text */}
          <p className="text-white text-sm md:text-base mb-6 leading-relaxed max-w-2xl">
            At {siteConfig.businessName}, our team of experienced repair professionals can help you cross off all tasks that need doing. We make sure every job is done right the first time, thanks to our knowledgeable skills and state-of-the-art tools and equipment.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-semibold">{siteConfig.yearsExperience}+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-semibold">Free Estimates</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-base hover:bg-primary-light transition-all shadow-lg text-center"
            >
              Request a Free Estimate
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-primary px-6 py-2.5 rounded-lg font-bold text-base hover:bg-gray-100 transition-all shadow-lg text-center"
            >
              Call Now: {siteConfig.phone}
            </a>
          </div>
        </div>
    </section>
  )
}

