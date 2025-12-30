import { Metadata } from 'next'
import Image from 'next/image'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import ParallaxOverlay from '@/components/ParallaxOverlay'
import { formatPhoneNumber } from '@/lib/utils'

export const metadata: Metadata = {
  title: `${siteConfig.businessName} - Quick Contact`,
  description: `Quick contact information for ${siteConfig.businessName}`,
  robots: 'noindex, nofollow', // Hide from search engines
}

export default function QRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
      {/* Background Overlay */}
      <ParallaxOverlay image="/images/overlays/3.png" opacity={0.25} speed={0.3} />
      
      <div className="relative z-10 py-4 sm:py-6 md:py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Thank You Message */}
          <div className="bg-white/15 backdrop-blur-md rounded-xl shadow-xl p-4 sm:p-5 md:p-6 mb-4 sm:mb-6 text-center border border-white/30">
            <div className="flex justify-center mb-3">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                <Image
                  src="/images/logo.png"
                  alt={`${siteConfig.businessName} Logo`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="text-white text-base sm:text-lg md:text-xl font-bold mb-1">
              Thank you for scanning our card!
            </p>
            <p className="text-white/95 text-xs sm:text-sm md:text-base">
              We're here to help with all your home repair and improvement needs.
            </p>
          </div>

          {/* Main Content - Horizontal Layout */}
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 items-start">
            {/* Left Side - Contact Info */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-5 sm:p-6 md:p-8 relative overflow-hidden">
              {/* Decorative overlay */}
              <ParallaxOverlay image="/images/overlays/5.png" opacity={0.15} speed={0.2} />
              <div className="relative z-10">
                {/* Logo and Business Info */}
                <div className="text-center mb-5 sm:mb-6">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                      <Image
                        src="/images/logo.png"
                        alt={`${siteConfig.businessName} Logo`}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
                    {siteConfig.businessName}
                  </h1>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">{siteConfig.tagline}</p>
                </div>
                
                {/* Contact Buttons */}
                <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                  {/* Phone */}
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="block bg-primary text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-primary-light transition-all shadow-lg text-center transform hover:scale-105"
                  >
                    Call: {formatPhoneNumber(siteConfig.phone)}
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="block bg-gray-100 text-gray-800 px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all shadow-md text-center text-sm sm:text-base"
                  >
                    Email: {siteConfig.email}
                  </a>
                </div>

                {/* Service Area Info */}
                <div className="pt-4 border-t border-gray-200 text-center">
                  <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                    Serving {siteConfig.location}
                  </p>
                  <Link
                    href="/"
                    className="text-primary hover:underline font-semibold text-xs sm:text-sm inline-block"
                  >
                    Visit Full Website →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-5 sm:p-6 md:p-8 relative overflow-hidden">
              {/* Decorative overlay */}
              <ParallaxOverlay image="/images/overlays/7.png" opacity={0.15} speed={0.2} />
              <div className="relative z-10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-3 text-center">
                  Tell Us About Your Project
                </h2>
                <p className="text-gray-600 text-center mb-4 sm:mb-6 text-xs sm:text-sm">
                  Fill out the form and we'll get back to you with a free estimate.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

