'use client'

import { useState, useEffect, useRef } from 'react'

const videoFiles = [
  '/vids/14496023-uhd_3840_2160_30fps.mp4',
  '/vids/3444433-hd_1920_1080_30fps.mp4',
  '/vids/3773488-hd_1920_1080_30fps.mp4',
  '/vids/6473942-uhd_2160_3840_25fps.mp4',
  '/vids/8293020-hd_1920_1080_30fps.mp4',
]

export default function VideoMontage() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoaded(true)
      video.play().catch(() => {
        // Autoplay was prevented, which is fine
      })
    }

    const handleEnded = () => {
      // Move to next video in montage
      setCurrentVideoIndex((prev) => (prev + 1) % videoFiles.length)
    }

    const handleError = () => {
      // If video fails to load, try next one
      setCurrentVideoIndex((prev) => (prev + 1) % videoFiles.length)
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('error', handleError)

    // Load the current video
    video.load()

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('error', handleError)
    }
  }, [currentVideoIndex])

  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        ref={videoRef}
        key={currentVideoIndex}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop={false}
        playsInline
      >
        <source src={videoFiles[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Fallback background in case videos don't load */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/tools-hero.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
    </div>
  )
}
