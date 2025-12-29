import Link from 'next/link'
import ParallaxSection from './ParallaxSection'
import { siteConfig } from '@/config/site'

export default function CTASection() {
  return (
    <ParallaxSection className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Fix It Once and For All?
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Get a free estimate today. No obligation, just honest advice and fair pricing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Request a Free Estimate
          </Link>
          <a
            href={`tel:${siteConfig.phone}`}
            className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-colors shadow-lg"
          >
            Call Now
          </a>
        </div>
      </div>
    </ParallaxSection>
  )
}

