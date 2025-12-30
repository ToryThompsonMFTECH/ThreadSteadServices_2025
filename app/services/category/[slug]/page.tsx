import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { slugify, findCategoryBySlug } from '@/lib/utils'
import GoogleMap from '@/components/GoogleMap'
import PageHeader from '@/components/PageHeader'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return siteConfig.serviceCategories.map((category) => ({
    slug: slugify(category.name),
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = findCategoryBySlug(params.slug)
  
  if (!category) {
    return {
      title: 'Category Not Found',
    }
  }
  
  return {
    title: `${category.name} Services | ${siteConfig.businessName}`,
    description: `${category.description} in ${siteConfig.location}. Professional ${category.name.toLowerCase()} services for your home or business.`,
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = findCategoryBySlug(params.slug)
  
  if (!category) {
    notFound()
  }

  // Group services by subcategory if they exist
  const hasSubcategories = category.services.some((s: any) => s.subcategory)
  const subcategories: string[] = hasSubcategories
    ? Array.from(new Set(category.services.map((s: any) => s.subcategory).filter(Boolean))) as string[]
    : []

  const categoryDescriptions: Record<string, string> = {
    'Repair': `Our comprehensive repair services cover everything from interior fixes to exterior maintenance. Whether you need help with small tasks around the house or major repair work, our experienced team is ready to assist. We understand that repairs can't always wait, which is why we offer fast response times and quality workmanship.`,
    'Drywall and Ceiling': `Professional drywall and ceiling services to restore and enhance your interior spaces. From minor patching to complete installations, we handle all aspects of drywall work with precision and attention to detail. Our team ensures seamless finishes that match your existing walls and ceilings.`,
    'Remodel': `Transform your home with our complete remodeling services. We handle everything from design consultation to final touches, ensuring your vision becomes reality. Whether you're remodeling a single room or multiple areas, we bring expertise and quality craftsmanship to every project.`,
    'Window and Door Services': `Enhance your home's energy efficiency, security, and appearance with our professional window and door services. We install, repair, and replace windows and doors using quality materials and proven installation techniques.`,
    'Floor Installation and Repair': `Beautiful, durable flooring solutions for every room in your home. We install and repair all types of flooring, from hardwood and tile to laminate and vinyl. Our expert installation ensures your floors look great and last for years.`,
    'Painting': `Professional interior and exterior painting services to refresh and protect your home. We use quality paints and proper preparation techniques to ensure beautiful, long-lasting results. From single rooms to entire homes, we've got you covered.`,
    'Carpentry Installation and Repair': `Custom carpentry work to enhance your home's functionality and beauty. From built-in shelving to deck construction, our skilled carpenters bring precision and craftsmanship to every project.`,
    'Plumbing': `Reliable plumbing services to keep your home's water systems running smoothly. We handle everything from minor repairs to fixture replacements, always using quality parts and professional techniques.`,
    'Lighting and Electrical': `Safe, professional electrical and lighting services for your home. From simple fixture installations to complete electrical upgrades, our licensed electricians ensure everything is done safely and to code.`,
    'Assembly Service': `Professional assembly services to save you time and ensure everything is put together correctly. We assemble furniture, cabinets, grills, and more, so you can enjoy your new items without the hassle.`,
  }

  const categoryBenefits: Record<string, string[]> = {
    'Repair': [
      'Fast response times for urgent repairs',
      'Experienced technicians with the right tools',
      'Quality workmanship that lasts',
      'Fair and transparent pricing',
    ],
    'Drywall and Ceiling': [
      'Seamless texture matching',
      'Professional finishing techniques',
      'Minimal disruption to your home',
      'Clean, dust-free work environment',
    ],
    'Remodel': [
      'Complete project management',
      'Quality materials and craftsmanship',
      'Timeline and budget transparency',
      'Design consultation available',
    ],
    'Window and Door Services': [
      'Energy-efficient solutions',
      'Improved home security',
      'Enhanced curb appeal',
      'Professional weatherproofing',
    ],
    'Floor Installation and Repair': [
      'Expert installation techniques',
      'Wide selection of flooring options',
      'Proper subfloor preparation',
      'Long-lasting results',
    ],
    'Painting': [
      'Proper surface preparation',
      'Quality paint products',
      'Clean, professional finish',
      'Interior and exterior expertise',
    ],
    'Carpentry Installation and Repair': [
      'Custom design solutions',
      'Precision craftsmanship',
      'Quality materials',
      'Built to last',
    ],
    'Plumbing': [
      'Quality parts and fixtures',
      'Emergency service available',
      'Preventive maintenance options',
    ],
    'Lighting and Electrical': [
      'Licensed electricians',
      'Code-compliant installations',
      'Energy-efficient solutions',
      'Safety-focused approach',
    ],
    'Assembly Service': [
      'Save time and frustration',
      'Proper tool usage',
      'Correct assembly guaranteed',
      'Cleanup included',
    ],
  }

  return (
    <div className="bg-white">
      <PageHeader
        title={`${category.name} Services`}
        subtitle={category.description}
        image="/images/tools-hero.jpg"
        imageAlt={`${category.name} services`}
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
            <span className="text-primary font-semibold">{category.name}</span>
          </nav>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Professional {category.name} Services in {siteConfig.location}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {categoryDescriptions[category.name] || category.description}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At {siteConfig.businessName}, we specialize in providing top-quality {category.name.toLowerCase()} services 
                  to homeowners and businesses throughout {siteConfig.location}. With over {siteConfig.yearsExperience} years of 
                  experience, {siteConfig.ownerName} and our team bring expertise, reliability, and attention to detail to every project.
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-accent/5 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Why Choose Us for {category.name}?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {(categoryBenefits[category.name] || []).map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-primary mr-3 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services Grid */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Our {category.name} Services
                </h3>
                
                {hasSubcategories ? (
                  <div className="space-y-12">
                    {subcategories.map((subcat) => {
                      const subcatServices = category.services.filter(
                        (s: any) => s.subcategory === subcat
                      )
                      return (
                        <div key={subcat} className="space-y-6">
                          <h4 className="text-xl font-semibold text-primary border-b border-gray-200 pb-2">
                            {subcat}
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {subcatServices.map((service: any, index: number) => (
                              <Link
                                key={index}
                                href={`/services/${slugify(service.name)}`}
                                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-accent hover:shadow-md transition-all group"
                              >
                                <h5 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                                  {service.name}
                                </h5>
                                <p className="text-gray-700 text-sm line-clamp-2 mb-3">
                                  {service.description}
                                </p>
                                <span className="text-accent text-sm font-medium group-hover:underline">
                                  Learn more →
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.services.map((service: any, index: number) => (
                      <Link
                        key={index}
                        href={`/services/${slugify(service.name)}`}
                        className="bg-white border border-gray-200 rounded-lg p-5 hover:border-accent hover:shadow-md transition-all group"
                      >
                        <h5 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                          {service.name}
                        </h5>
                        <p className="text-gray-700 text-sm line-clamp-2 mb-3">
                          {service.description}
                        </p>
                        <span className="text-accent text-sm font-medium group-hover:underline">
                          Learn more →
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-primary text-white rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Get Started Today</h3>
                <p className="text-gray-200 mb-6 text-sm">
                  Ready to discuss your {category.name.toLowerCase()} project? Contact us for a free, no-obligation estimate.
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
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-gray-200 mb-2">Service Area:</p>
                  <p className="text-white font-semibold">{siteConfig.location}</p>
                </div>
              </div>

              {/* Category Stats */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Service Overview</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-600">Total Services</dt>
                    <dd className="text-2xl font-bold text-primary">{category.services.length}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-600">Service Area</dt>
                    <dd className="text-gray-900 font-semibold">{siteConfig.location}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-600">Response Time</dt>
                    <dd className="text-gray-900 font-semibold">Same day available</dd>
                  </div>
                </dl>
              </div>

              {/* Other Categories */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Other Services</h3>
                <ul className="space-y-2">
                  {siteConfig.serviceCategories
                    .filter((cat: any) => cat.name !== category.name)
                    .slice(0, 5)
                    .map((cat: any, index: number) => (
                      <li key={index}>
                        <Link
                          href={`/services/category/${slugify(cat.name)}`}
                          className="text-gray-700 hover:text-primary transition-colors flex items-start group text-sm"
                        >
                          <span className="text-accent mr-2 group-hover:mr-3 transition-all">→</span>
                          <span className="group-hover:underline">{cat.name}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
                <Link
                  href="/services"
                  className="mt-4 inline-block text-sm text-primary font-semibold hover:text-accent transition-colors"
                >
                  View All Categories →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">
              We Serve {siteConfig.location}
            </h2>
            <p className="text-lg text-gray-700">
              Our {category.name.toLowerCase()} services are available throughout Greater Atlanta and surrounding areas.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <GoogleMap address={siteConfig.location} className="h-[400px]" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started with {category.name} Services?
          </h2>
          <p className="text-xl mb-8 text-accent-light">
            Contact us today for a free estimate. No obligation, just honest advice and fair pricing.
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

