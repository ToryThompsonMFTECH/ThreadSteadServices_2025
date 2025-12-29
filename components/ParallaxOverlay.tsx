'use client'

import { useEffect, useRef } from 'react'

interface ParallaxOverlayProps {
  className?: string
  opacity?: number
  speed?: number
  image?: string
}

export default function ParallaxOverlay({ 
  className = '', 
  opacity = 0.3,
  speed = 0.5,
  image = '/images/overlays/1.png'
}: ParallaxOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (overlayRef.current && window.innerWidth > 768) {
        const scrolled = window.pageYOffset
        const rate = scrolled * speed
        overlayRef.current.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div 
      ref={overlayRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity, overflow: 'hidden' }}
    >
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover"
        style={{ objectFit: 'cover', maxHeight: '100%' }}
      />
    </div>
  )
}

