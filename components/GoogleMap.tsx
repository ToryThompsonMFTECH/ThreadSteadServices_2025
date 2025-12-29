'use client'

import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/config/site'

interface GoogleMapProps {
  address?: string
  className?: string
}

declare global {
  interface Window {
    google: any
    initMap: () => void
  }
}

export default function GoogleMap({ address, className = '' }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const [mapError, setMapError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap()
        return
      }

      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
      
      if (!apiKey) {
        // No API key - show embedded map as fallback
        setIsLoading(false)
        setMapError(true)
        showFallbackMap()
        return
      }

      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`
      script.async = true
      script.defer = true
      
      window.initMap = initializeMap
      script.onerror = () => {
        setIsLoading(false)
        setMapError(true)
        showFallbackMap()
      }
      
      document.head.appendChild(script)
    }

    const showFallbackMap = () => {
      if (mapRef.current) {
        const searchAddress = encodeURIComponent(address || siteConfig.location)
        mapRef.current.innerHTML = `
          <iframe
            width="100%"
            height="100%"
            style="border:0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=${searchAddress}&output=embed&zoom=11">
          </iframe>
        `
      }
    }

    const initializeMap = () => {
      if (!mapRef.current || !window.google || !window.google.maps) {
        setIsLoading(false)
        setMapError(true)
        showFallbackMap()
        return
      }

      setIsLoading(true)
      const defaultAddress = address || siteConfig.location
      const geocoder = new window.google.maps.Geocoder()
      
      geocoder.geocode({ address: defaultAddress }, (results: any, status: string) => {
        setIsLoading(false)
        
        if (status === 'OK' && results && results[0]) {
          const location = results[0].geometry.location
          
          const map = new window.google.maps.Map(mapRef.current!, {
            center: location,
            zoom: 11,
            styles: [
              {
                featureType: 'all',
                elementType: 'geometry',
                stylers: [{ saturation: -20 }]
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#BA0C2F' }]
              },
              {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#ffffff' }]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#BA0C2F' }]
              }
            ],
            mapTypeControl: false,
            fullscreenControl: true,
            streetViewControl: false,
          })

          const marker = new window.google.maps.Marker({
            position: location,
            map: map,
            title: siteConfig.businessName,
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 12,
              fillColor: '#BA0C2F',
              fillOpacity: 1,
              strokeColor: '#ffffff',
              strokeWeight: 3,
            },
          })

          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 12px; max-width: 280px; font-family: system-ui;">
                <h3 style="margin: 0 0 8px 0; color: #BA0C2F; font-weight: bold; font-size: 18px;">${siteConfig.businessName}</h3>
                <p style="margin: 0 0 4px 0; color: #666; font-size: 14px;">${siteConfig.tagline}</p>
                <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">${siteConfig.location}</p>
                <a href="tel:${siteConfig.phone}" style="color: #BA0C2F; text-decoration: none; font-weight: bold; font-size: 16px;">${siteConfig.phone}</a>
              </div>
            `,
          })

          marker.addListener('click', () => {
            infoWindow.open(map, marker)
          })

          // Open info window by default
          infoWindow.open(map, marker)

          mapInstanceRef.current = map
          setMapError(false)
        } else {
          setMapError(true)
          showFallbackMap()
        }
      })
    }

    loadGoogleMaps()

    return () => {
      // Cleanup
      if ((window as any).initMap) {
        delete (window as any).initMap
      }
    }
  }, [address])

  return (
    <div className={`relative ${className}`}>
      <div
        ref={mapRef}
        className="w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg bg-gray-100"
      />
      {isLoading && !mapError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg z-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      )}
      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md z-10">
        <p className="text-sm font-semibold text-primary">{siteConfig.businessName}</p>
        <p className="text-xs text-gray-600">{siteConfig.location}</p>
      </div>
    </div>
  )
}
