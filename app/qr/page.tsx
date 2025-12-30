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
    <div className="min-h-screen bg-black">
      {/* Thank You Section - Similar to Hero */}
      <section className="relative py-12 md:py-16 px-4 bg-black overflow-hidden border-b border-white/10">
        <ParallaxOverlay image="/images/overlays/1.png" opacity={0.35} speed={0.4} />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
              <Image
                src="/images/logo.png"
                alt={`${siteConfig.businessName} Logo`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Thank you for scanning our card!
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-medium max-w-2xl mx-auto">
            We're here to help with all your home repair and improvement needs in {siteConfig.location}.
          </p>
        </div>
      </section>

      {/* Contact Info Section - Similar to CallbackHeroForm section */}
      <section className="relative py-12 px-4 bg-black overflow-hidden border-b border-white/10">
        <ParallaxOverlay image="/images/overlays/2.png" opacity={0.3} speed={0.3} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Call Us</h3>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-2xl font-semibold text-white hover:text-gray-200 transition-colors block mb-2"
              >
                {formatPhoneNumber(siteConfig.phone)}
              </a>
              <p className="text-gray-300 text-sm">Click to call directly</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Email Us</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-lg font-semibold text-white hover:text-gray-200 transition-colors break-all block mb-2"
              >
                {siteConfig.email}
              </a>
              <p className="text-gray-300 text-sm">We respond within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Similar to homepage sections */}
      <section className="relative py-16 px-4 bg-black overflow-hidden border-b border-white/10">
        <ParallaxOverlay image="/images/overlays/3.png" opacity={0.3} speed={0.3} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center">
              Tell Us About Your Project
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Fill out the form and we'll get back to you with a free estimate.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Link to Full Website */}
      <section className="relative py-8 px-4 bg-black overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Link
            href="/"
            className="text-white hover:text-primary font-semibold text-lg transition-colors inline-block"
          >
            Visit Full Website →
          </Link>
        </div>
      </section>
    </div>
  )
}

