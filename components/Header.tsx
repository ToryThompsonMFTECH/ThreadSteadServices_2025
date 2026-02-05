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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gradient-to-b from-primary via-primary to-primary-dark shadow-[0_10px_40px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.1)]'
          : 'bg-gradient-to-b from-primary via-primary to-primary-dark shadow-[0_4px_20px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.1)]'
      }`}
      style={{
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      {/* Premium depth layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      
      <nav className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left Corner with Premium Styling */}
          <div className="flex items-center gap-3 md:gap-4">
            <Link href="/" className="flex items-center gap-2 md:gap-3 flex-shrink-0 group">
              <div className="relative flex-shrink-0 transition-all duration-300 group-hover:scale-105">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white/5 rounded-lg h-12 w-12 md:h-16 md:w-16 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/logo.png"
                    alt={`${siteConfig.businessName} Logo`}
                    fill
                    className="object-cover p-1 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
                    priority
                  />
                </div>
              </div>
              <div className="hidden sm:flex flex-col justify-center">
                <span className="text-lg md:text-xl lg:text-2xl font-display font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] tracking-tight leading-tight">
                  {siteConfig.businessName}
                </span>
              </div>
            </Link>
            
            {/* Slogan - Left Side with Premium Font */}
            <div className="hidden lg:flex items-center">
              <p className="text-white font-display italic text-sm md:text-base font-light tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                {siteConfig.tagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation - Premium with Depth - Right Aligned */}
          <div className="hidden md:flex items-center justify-end flex-1 space-x-6">
            <Link
              href="/"
              className={`relative font-semibold text-sm px-4 py-2 transition-all duration-300 ${
                isActive('/')
                  ? 'text-white'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {isActive('/') && (
                <>
                  <div className="absolute inset-0 bg-white/10 rounded-lg blur-sm" />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white shadow-[0_2px_8px_rgba(255,255,255,0.5)]" />
                </>
              )}
              <span className="relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Home
              </span>
            </Link>
            <Link
              href="/services"
              className={`relative font-semibold text-sm px-4 py-2 transition-all duration-300 ${
                isActive('/services')
                  ? 'text-white'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {isActive('/services') && (
                <>
                  <div className="absolute inset-0 bg-white/10 rounded-lg blur-sm" />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white shadow-[0_2px_8px_rgba(255,255,255,0.5)]" />
                </>
              )}
              <span className="relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Services
              </span>
            </Link>
            <Link
              href="/projects"
              className={`relative font-semibold text-sm px-4 py-2 transition-all duration-300 ${
                isActive('/projects')
                  ? 'text-white'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {isActive('/projects') && (
                <>
                  <div className="absolute inset-0 bg-white/10 rounded-lg blur-sm" />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white shadow-[0_2px_8px_rgba(255,255,255,0.5)]" />
                </>
              )}
              <span className="relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Projects
              </span>
            </Link>
            <Link
              href="/contact"
              className={`relative font-semibold text-sm px-4 py-2 transition-all duration-300 ${
                isActive('/contact')
                  ? 'text-white'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {isActive('/contact') && (
                <>
                  <div className="absolute inset-0 bg-white/10 rounded-lg blur-sm" />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white shadow-[0_2px_8px_rgba(255,255,255,0.5)]" />
                </>
              )}
              <span className="relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Contact
              </span>
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="relative bg-white/20 backdrop-blur-sm text-white font-bold text-base px-5 py-2.5 rounded-lg border-2 border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.4)] hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{formatPhoneNumber(siteConfig.phone)}</span>
            </a>
          </div>

          {/* Mobile Navigation - Premium */}
          <div className="md:hidden flex items-center space-x-3">
            <Link
              href="/"
              className={`font-semibold text-xs px-2 py-1 transition-all duration-300 ${
                isActive('/') 
                  ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' 
                  : 'text-white/90 hover:text-white hover:scale-110'
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`font-semibold text-xs px-2 py-1 transition-all duration-300 ${
                isActive('/services') 
                  ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' 
                  : 'text-white/90 hover:text-white hover:scale-110'
              }`}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className={`font-semibold text-xs px-2 py-1 transition-all duration-300 ${
                isActive('/projects') 
                  ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' 
                  : 'text-white/90 hover:text-white hover:scale-110'
              }`}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`font-semibold text-xs px-2 py-1 transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' 
                  : 'text-white/90 hover:text-white hover:scale-110'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

