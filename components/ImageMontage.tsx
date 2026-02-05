'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ImageMontageProps {
  images: string[]
  alt?: string
}

export default function ImageMontage({ images, alt = 'Service images' }: ImageMontageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  if (images.length === 0) return null

  return (
    <div className="relative h-full w-full">
      {images.map((src, index) => {
        // Encode the path to handle spaces in filenames
        const encodedSrc = src.split('/').map((part, i) => {
          if (i === 0) return part // Keep the first part as is
          return encodeURIComponent(part)
        }).join('/')
        
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={encodedSrc}
              alt={`${alt} ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        )
      })}
    </div>
  )
}
