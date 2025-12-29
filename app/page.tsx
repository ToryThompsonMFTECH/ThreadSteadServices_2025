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

