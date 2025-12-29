import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { slugify, findServiceBySlug, getRelatedServices } from '@/lib/utils'
import { getServiceFAQs } from '@/lib/serviceFAQs'
import { getServiceImagesFromFolder, getServiceMainImage } from '@/lib/getServiceImages'
import ServiceImageGallery from '@/components/ServiceImageGallery'
import ServiceFAQ from '@/components/ServiceFAQ'
import PageHeader from '@/components/PageHeader'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const params: { slug: string }[] = []
  
  siteConfig.serviceCategories.forEach((category) => {
    category.services.forEach((service) => {
      params.push({ slug: slugify(service.name) })
    })
  })
  
  siteConfig.services.forEach((service) => {
    params.push({ slug: slugify(service.name) })
  })
  
  return params
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const result = findServiceBySlug(params.slug)
  
  if (!result) {
    return {
      title: 'Service Not Found',
    }
  }
  
  return {
    title: `${result.service.name} | ${siteConfig.businessName}`,
    description: result.service.description,
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const result = findServiceBySlug(params.slug)
  
  if (!result) {
    console.error(`Service not found for slug: ${params.slug}`)
    notFound()
  }
  
  const { service, category } = result
  const relatedServices = getRelatedServices(service.name, category, 3)
  
  // Get images from the service folder
  const serviceImages = getServiceImagesFromFolder(service.name)
  const mainImage = getServiceMainImage(service.name, service.image || "/images/tools-hero.jpg")
  
  return (
    <div className="bg-white">
      <PageHeader
        title={service.name}
        subtitle={service.description}
        image={mainImage}
        imageAlt={service.imageAlt || service.name}
      />

      {/* Breadcrumb */}
      <section className="py-4 px-4 bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">
              Services
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-primary font-semibold">{service.name}</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Service Image Gallery */}
              {serviceImages.length > 0 && (
                <ServiceImageGallery
                  images={serviceImages}
                  serviceName={service.name}
                />
              )}

              {/* Service Details */}
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  About {service.name}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    What We Offer
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-3 text-xl">✓</span>
                      <span className="text-gray-700">
                        Professional installation and repair services
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 text-xl">✓</span>
                      <span className="text-gray-700">
                        Quality materials and craftsmanship
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 text-xl">✓</span>
                      <span className="text-gray-700">
                        Free estimates and consultations
                      </span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-primary mb-4">
                  Why Choose Us for {service.name}?
                </h3>
                <p className="text-gray-700 mb-4">
                  At {siteConfig.businessName}, we understand that your home is your most important investment. 
                  When you need {service.name.toLowerCase()} services, you want professionals who will treat your 
                  property with care and respect.
                </p>
                <p className="text-gray-700 mb-4">
                  Our team brings years of experience and attention to detail to every project. We use quality 
                  materials and proven techniques to ensure your {service.name.toLowerCase()} work stands the test of time.
                </p>
                <p className="text-gray-700">
                  Serving {siteConfig.location} and surrounding areas, we're committed to providing exceptional 
                  service and honest pricing. When you choose {siteConfig.businessName}, you're choosing reliability, 
                  quality, and peace of mind.
                </p>
              </div>

              {/* Process Section */}
              <div className="bg-accent/5 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Our Process
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4 group-hover:scale-110 transition-transform">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Initial Consultation</h4>
                      <p className="text-gray-700 text-sm">We'll assess your needs and provide a detailed estimate.</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4 group-hover:scale-110 transition-transform">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Planning & Preparation</h4>
                      <p className="text-gray-700 text-sm">We'll plan the work and prepare your space.</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4 group-hover:scale-110 transition-transform">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Professional Service</h4>
                      <p className="text-gray-700 text-sm">Our team performs the work with attention to detail.</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4 group-hover:scale-110 transition-transform">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Quality Check</h4>
                      <p className="text-gray-700 text-sm">We ensure everything meets our high standards.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <ServiceFAQ
                faqs={getServiceFAQs(service.name, category, service.subcategory)}
                serviceName={service.name}
              />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-primary text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Get a Free Estimate</h3>
                <p className="text-gray-200 mb-6">
                  Ready to get started? Contact us today for a free, no-obligation estimate.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="block w-full bg-accent text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors"
                  >
                    Call Now
                  </a>
                  <Link
                    href="/contact"
                    className="block w-full bg-white text-primary text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Request Estimate
                  </Link>
                </div>
              </div>

              {/* Service Info */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Service Details</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-600">Category</dt>
                    <dd className="text-gray-900 font-semibold">{category}</dd>
                  </div>
                  {service.subcategory && (
                    <div>
                      <dt className="text-sm font-medium text-gray-600">Type</dt>
                      <dd className="text-gray-900 font-semibold">{service.subcategory}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-sm font-medium text-gray-600">Service Area</dt>
                    <dd className="text-gray-900 font-semibold">{siteConfig.location}</dd>
                  </div>
                </dl>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-primary mb-4">Related Services</h3>
                  <ul className="space-y-3">
                    {relatedServices.map((related, index) => (
                      <li key={index}>
                        <Link
                          href={`/services/${slugify(related.name)}`}
                          className="text-gray-700 hover:text-primary transition-colors flex items-start group"
                        >
                          <span className="text-accent mr-2 group-hover:mr-3 transition-all transform group-hover:scale-110">→</span>
                          <span className="group-hover:underline font-medium">{related.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="mt-4 inline-block text-sm text-primary font-semibold hover:text-accent transition-colors"
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-accent-light">
            Contact us today for a free estimate on {service.name.toLowerCase()} services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-accent px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

