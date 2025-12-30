'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { formatPhoneNumber } from '@/lib/utils'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary shadow-lg'
          : 'bg-primary/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Name at Top - Mobile */}
        <div className="md:hidden flex items-center justify-center py-0 border-b border-white/20">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt={`${siteConfig.businessName} Logo`}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-white leading-tight">
                {siteConfig.businessName}
              </span>
              <span className="text-xs text-white/90 font-semibold leading-tight">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-between h-5 md:h-16">
          {/* Logo - Left Corner - Desktop */}
          <Link href="/" className="hidden md:flex items-center gap-3 flex-shrink-0 mr-4">
            <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt={`${siteConfig.businessName} Logo`}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-white">
                {siteConfig.businessName}
              </span>
              <span className="text-xs md:text-sm text-white/90 font-semibold">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`px-3 py-2 font-semibold text-sm transition-colors ${
                isActive('/')
                  ? 'text-white border-b-2 border-white'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`px-3 py-2 font-semibold text-sm transition-colors ${
                isActive('/services')
                  ? 'text-white border-b-2 border-white'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className={`px-3 py-2 font-semibold text-sm transition-colors ${
                isActive('/projects')
                  ? 'text-white border-b-2 border-white'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 font-semibold text-sm transition-colors ${
                isActive('/contact')
                  ? 'text-white border-b-2 border-white'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Contact
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-white font-semibold hover:text-white/80 transition-colors text-sm"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              className="bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent-light transition-colors"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="md:hidden py-0">
          {/* Horizontal Scrollable Nav */}
          <div className="overflow-x-auto scrollbar-hide -mx-2 px-2">
            <div className="flex items-center space-x-1.5 min-w-max">
              <Link
                href="/"
                className={`px-2.5 py-1 rounded-lg font-semibold text-xs whitespace-nowrap transition-all ${
                  isActive('/')
                    ? 'bg-white text-primary shadow-md'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`px-2.5 py-1 rounded-lg font-semibold text-xs whitespace-nowrap transition-all ${
                  isActive('/services')
                    ? 'bg-white text-primary shadow-md'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className={`px-2.5 py-1 rounded-lg font-semibold text-xs whitespace-nowrap transition-all ${
                  isActive('/projects')
                    ? 'bg-white text-primary shadow-md'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={`px-2.5 py-1 rounded-lg font-semibold text-xs whitespace-nowrap transition-all ${
                  isActive('/contact')
                    ? 'bg-white text-primary shadow-md'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Contact
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="px-2.5 py-1 rounded-lg font-semibold text-xs whitespace-nowrap text-white/90 hover:text-white hover:bg-white/10 transition-all bg-white/5"
              >
                📞 Call
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

