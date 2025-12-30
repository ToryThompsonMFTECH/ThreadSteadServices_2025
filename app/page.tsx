import { Metadata } from 'next'
import Hero from '@/components/Hero'
import CallbackHeroForm from '@/components/CallbackHeroForm'
import FactsTicker from '@/components/FactsTicker'
import ServicesSection from '@/components/ServicesSection'
import PortfolioPreview from '@/components/PortfolioPreview'
import TestimonialsSection from '@/components/TestimonialsSection'
import ProcessSection from '@/components/ProcessSection'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import ParallaxOverlay from '@/components/ParallaxOverlay'
import { siteConfig } from '@/config/site'

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
      <Hero />
      <section className="relative py-12 px-4 bg-black -mt-12 overflow-hidden border-t border-white/10">
        <ParallaxOverlay image="/images/overlays/2.png" opacity={0.3} speed={0.3} />
        <div className="relative z-10">
          <CallbackHeroForm />
        </div>
      </section>
      <FactsTicker />
      <ServicesSection />
      <PortfolioPreview />
      <TestimonialsSection />
      <ProcessSection />
      <ServiceAreasSection />
      <FAQSection />
      <CTASection />
    </>
  )
}

