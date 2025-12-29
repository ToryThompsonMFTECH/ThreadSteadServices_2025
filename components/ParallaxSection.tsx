'use client'

import { useEffect, useRef, ReactNode } from 'react'
import ParallaxOverlay from './ParallaxOverlay'

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
}

export default function ParallaxSection({ children, className = '' }: ParallaxSectionProps) {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && window.innerWidth > 768) {
        const rect = parallaxRef.current.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const rate = (scrolled - rect.top) * 0.3
        parallaxRef.current.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center bg-gradient-to-br from-primary/90 to-primary-dark/90"
        style={{
          backgroundImage: 'url("/images/tools-hero.jpg"), linear-gradient(to bottom right, var(--tw-gradient-stops))',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary-dark/75 to-primary/85" />
        <div className="absolute inset-0 bg-black/35" />
      </div>
      <ParallaxOverlay image="/images/overlays/1.png" opacity={0.4} speed={0.3} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

