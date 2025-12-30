import { Metadata } from 'next'
import Link from 'next/link'
import CallbackHeroForm from '@/components/CallbackHeroForm'
import FactsTicker from '@/components/FactsTicker'
import ServicesSection from '@/components/ServicesSection'
import PortfolioPreview from '@/components/PortfolioPreview'
import TestimonialsSection from '@/components/TestimonialsSection'
import ProcessSection from '@/components/ProcessSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import ParallaxOverlay from '@/components/ParallaxOverlay'
import { siteConfig } from '@/config/site'
import { formatPhoneNumber } from '@/lib/utils'

export const metadata: Metadata = {
  title: `Home Repair & Improvement Services in ${siteConfig.location} | ${siteConfig.businessName}`,
  description: `Professional home repair and improvement services in ${siteConfig.location}. ${siteConfig.businessName} offers expert handyman services, plumbing, electrical, drywall, painting, and more. Free estimates, fast response. Serving ${siteConfig.serviceAreas.slice(0, 5).join(', ')}, and more.`,
  keywords: `home repair ${siteConfig.location}, handyman ${siteConfig.city}, home improvement ${siteConfig.state}, plumbing repair, electrical repair, drywall repair, painting services, ${siteConfig.serviceAreas.join(', ')}`,
  openGraph: {
    title: `${siteConfig.businessName} | Home Repair Services in ${siteConfig.location}`,
    description: `Professional home repair and improvement services. Free estimates, quality workmanship. Serving ${siteConfig.location} and surrounding areas.`,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
    siteName: siteConfig.businessName,
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: siteConfig.businessName,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      {/* Combined Hero and Form Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden pt-28 md:pt-36 pb-4 md:pb-12">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/tools-hero.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        </div>
        {/* Parallax Overlay */}
        <ParallaxOverlay image="/images/overlays/1.png" opacity={0.35} speed={0.4} />

        {/* Content Grid - Hero Left, Form Right */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 md:py-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
            {/* Hero Content - Left Side */}
            <div className="flex flex-col justify-center">
              <p className="text-white text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-4">
                Home Repair & Improvement Services in {siteConfig.location}
              </p>
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 leading-tight">
                We Have the Skills and Tools to Deliver High-Quality Results
              </h1>
              <p className="text-white text-xs md:text-base mb-3 md:mb-6 leading-relaxed hidden md:block">
                At {siteConfig.businessName}, our team of experienced repair professionals can help you cross off all tasks that need doing. We make sure every job is done right the first time, thanks to our knowledgeable skills and state-of-the-art tools and equipment.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-4 mb-3 md:mb-6">
                <div className="flex items-center gap-1 md:gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white text-xs md:text-base font-semibold">{siteConfig.yearsExperience}+ Years Experience</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white text-xs md:text-base font-semibold">Free Estimates</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-bold text-sm md:text-base hover:bg-primary-light transition-all shadow-lg text-center"
                >
                  Request a Free Estimate
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="bg-white text-primary px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-bold text-sm md:text-base hover:bg-gray-100 transition-all shadow-lg text-center"
                >
                  Call Now: {formatPhoneNumber(siteConfig.phone)}
                </a>
              </div>
            </div>

            {/* Form - Right Side */}
            <div className="flex flex-col justify-center">
              <CallbackHeroForm />
            </div>
          </div>
        </div>
      </section>
      <FactsTicker />
      <ServicesSection />
      <PortfolioPreview />
      <TestimonialsSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </>
  )
}

