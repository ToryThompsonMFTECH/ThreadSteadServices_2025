'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config/site'
import SearchBar from './SearchBar'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left Corner */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 mr-4">
            <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt={`${siteConfig.businessName} Logo`}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col hidden sm:flex">
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Search Bar - Separate Bar Below Nav */}
        <div className="hidden md:block border-t border-white/20 py-3">
          <div className="max-w-6xl mx-auto px-4">
            <SearchBar />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-3">
              {/* Search Bar - Mobile */}
              <div className="mb-4">
                <SearchBar />
              </div>
              <Link
                href="/"
                className={`px-4 py-2 font-medium transition-colors ${
                  isActive('/')
                    ? 'text-white font-semibold'
                    : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`px-4 py-2 font-medium transition-colors ${
                  isActive('/services')
                    ? 'text-white font-semibold'
                    : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className={`px-4 py-2 font-medium transition-colors ${
                  isActive('/projects')
                    ? 'text-white font-semibold'
                    : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={`px-4 py-2 font-medium transition-colors ${
                  isActive('/contact')
                    ? 'text-white font-semibold'
                    : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-white font-semibold px-4 py-2"
              >
                Call Now: {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="bg-accent text-white px-6 py-3 rounded-lg font-semibold text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

