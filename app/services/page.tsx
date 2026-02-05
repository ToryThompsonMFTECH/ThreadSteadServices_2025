import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { slugify } from '@/lib/utils'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: `Home Repair & Improvement Services in ${siteConfig.location}`,
  description: `Comprehensive home repair and improvement services in ${siteConfig.location}. From repairs to construction, we handle it all.`,
}

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Our Services"
        subtitle=""
        image="/images/tools-hero.jpg"
        imageAlt="Home repair tools and services"
      />

      {/* Services by Category */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {siteConfig.serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} id={slugify(category.name)} className="scroll-mt-20">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                  {category.name}
                </h2>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      href={`/services/${slugify(service.name)}`}
                      className="bg-white p-4 rounded-lg border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 text-center"
                    >
                      <h3 className="text-base font-bold text-gray-900 hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-110"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </div>
  )
}
