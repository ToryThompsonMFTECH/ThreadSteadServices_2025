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
import VideoMontage from '@/components/VideoMontage'
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
      {/* Combined Hero and Form Section - Premium */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden pt-28 md:pt-36 pb-8 md:pb-16">
        {/* Video Montage Background */}
        <VideoMontage />
        {/* Premium Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-[1]" />
        {/* Premium depth layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/10 z-[1]" />

        {/* Content Grid - Hero Left, Form Right */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Hero Content - Left Side - Premium */}
            <div className="flex flex-col justify-center space-y-6 md:space-y-8">
              <div className="space-y-4">
                <p className="text-white/90 text-sm md:text-base font-medium tracking-wider uppercase">
                  Professional Home Repair Services
                </p>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                  Quality Craftsmanship You Can Trust
                </h1>
              </div>
              
              <div className="flex flex-wrap gap-4 md:gap-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white font-semibold">{siteConfig.yearsExperience}+ Years</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white font-semibold">Free Estimates</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-lg font-bold text-base md:text-lg hover:bg-primary-light transition-all duration-300 shadow-[0_10px_40px_rgba(186,12,47,0.5)] hover:shadow-[0_15px_50px_rgba(186,12,47,0.6)] transform hover:scale-105 text-center"
                >
                  Request a Free Estimate
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 md:px-10 py-4 md:py-5 rounded-lg font-bold text-base md:text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.4)] transform hover:scale-105 text-center"
                >
                  Call: {formatPhoneNumber(siteConfig.phone)}
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

