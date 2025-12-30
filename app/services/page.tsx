import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { slugify } from '@/lib/utils'
import { getServiceMainImage } from '@/lib/getServiceImages'
import PageHeader from '@/components/PageHeader'
import { HammerIcon, ArrowRightIcon, CheckIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: `Home Repair & Improvement Services in ${siteConfig.location}`,
  description: `Comprehensive home repair and improvement services in ${siteConfig.location}. From repairs to construction, we handle it all.`,
}

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title={`Professional Home Repair & Improvement Services in ${siteConfig.city}`}
        subtitle="One-stop solution for everything on your to-do list. Residential repair, maintenance, and improvement services."
        image="/images/tools-hero.jpg"
        imageAlt="Home repair and improvement tools"
      />

      {/* Intro */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quality Craftsmanship You Can Trust
              </h2>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                Whether you need a quick fix or a major home improvement project, we have the skills and experience to get the job done right. 
                We serve {siteConfig.city} and surrounding areas with quality craftsmanship and honest pricing.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="font-semibold">Free Estimates</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="font-semibold">{siteConfig.yearsExperience}+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-gray-100">
                <li className="flex items-start">
                  <CheckIcon className="text-white mr-3 flex-shrink-0" size={20} />
                  <span>Fast response times for urgent repairs</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="text-white mr-3 flex-shrink-0" size={20} />
                  <span>Experienced technicians with the right tools</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="text-white mr-3 flex-shrink-0" size={20} />
                  <span>Quality workmanship that lasts</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="text-white mr-3 flex-shrink-0" size={20} />
                  <span>Fair and transparent pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {siteConfig.serviceCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              id={slugify(category.name)} 
              className={`mb-20 scroll-mt-20 ${
                categoryIndex % 2 === 0 
                  ? 'bg-gradient-to-br from-accent/5 to-transparent p-8 rounded-lg' 
                  : 'bg-gradient-to-br from-accent/5 to-transparent p-8 rounded-lg'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {category.name}
                  </h2>
                  <p className="text-lg text-gray-700 font-medium">
                    {category.description}
                  </p>
                </div>
                <Link
                  href={`/services/category/${slugify(category.name)}`}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors whitespace-nowrap text-center flex items-center gap-2"
                >
                  View All {category.name} Services <ArrowRightIcon className="w-4 h-4" size={16} />
                </Link>
              </div>
              
              {/* Group by subcategory if they exist */}
              {category.services.some(s => s.subcategory) ? (
                <div className="space-y-8">
                  {Array.from(new Set(category.services.map(s => s.subcategory).filter(Boolean))).map((subcat) => (
                    <div key={subcat}>
                      <h3 className="text-xl font-semibold text-primary mb-4">
                        {subcat}
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.services
                          .filter(s => s.subcategory === subcat)
                          .map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={`/services/${slugify(service.name)}`}
                              className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg hover:border-accent transition-all overflow-hidden group block"
                            >
                              {/* Service Image */}
                              <div className="relative h-48 bg-gradient-to-br from-accent/10 to-accent/10 overflow-hidden">
                                {(() => {
                                  const serviceImage = getServiceMainImage(service.name, (service as any).image || '')
                                  return serviceImage && serviceImage !== '/images/tools-hero.jpg' ? (
                                    <img
                                      src={serviceImage}
                                      alt={(service as any).imageAlt || service.name}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                      <HammerIcon className="w-24 h-24 opacity-20 group-hover:opacity-30 transition-opacity text-primary" size={96} />
                                    </div>
                                  )
                                })()}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1">
                                  Learn More <ArrowRightIcon className="w-3 h-3" size={12} />
                                </div>
                              </div>
                              <div className="p-5">
                                <h4 className="text-lg md:text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                  {service.name}
                                </h4>
                                <p className="text-gray-800 font-medium text-base line-clamp-2">{service.description}</p>
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      href={`/services/${slugify(service.name)}`}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg hover:border-accent transition-all overflow-hidden group block"
                    >
                      {/* Service Image */}
                      <div className="relative h-48 bg-gradient-to-br from-accent/10 to-accent/10 overflow-hidden">
                        {(() => {
                          const serviceImage = getServiceMainImage(service.name, (service as any).image || '')
                          return serviceImage && serviceImage !== '/images/tools-hero.jpg' ? (
                            <img
                              src={serviceImage}
                              alt={(service as any).imageAlt || service.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                              <HammerIcon className="w-24 h-24 opacity-30 group-hover:opacity-40 transition-opacity text-primary" size={96} />
                            </div>
                          )
                        })()}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1">
                          Learn More <ArrowRightIcon className="w-3 h-3" size={12} />
                        </div>
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-gray-700 text-sm line-clamp-2">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas Highlight */}
      <section className="py-16 px-4 bg-gradient-to-br from-accent to-accent-dark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Serving Greater Atlanta
              </h2>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                We proudly serve {siteConfig.location} and surrounding communities. Our local expertise means we understand the unique needs of homes in our area.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {siteConfig.serviceAreas.slice(0, 6).map((area, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                    <span className="font-semibold">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Service Areas Include:</h3>
              <div className="grid grid-cols-2 gap-3">
                {siteConfig.serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <CheckIcon className="text-white mr-2 flex-shrink-0" size={16} />
                    <span className="text-gray-100">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 bg-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-xl mb-8 text-accent-light">
            Contact us for a free estimate. We'll help you figure out the best solution for your home or business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-accent px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </div>
  )
}
