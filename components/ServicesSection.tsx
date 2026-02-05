import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function ServicesSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden border-t border-gray-200">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 drop-shadow-lg">
          What Can We Do For You?
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          From quick fixes to major renovations, we handle it all. Plumbing, electrical, drywall, painting, carpentry, and more—we're your one-stop solution for home repair and improvement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/services"
            className="bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-light transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-110"
          >
            View All Services
          </Link>
          <Link
            href="/contact"
            className="bg-white text-primary border-2 border-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-110"
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  )
}
