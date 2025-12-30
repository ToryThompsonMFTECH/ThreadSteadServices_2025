import { siteConfig } from '@/config/site'

export default function StructuredData() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}#organization`,
    name: siteConfig.businessName,
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}/images/logo.png`,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
    telephone: `+1${siteConfig.phone.replace(/\D/g, '')}`,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: 'US',
    },
    // geo: {
    //   '@type': 'GeoCoordinates',
    //   latitude: '33.7490', // Update with your actual coordinates
    //   longitude: '-84.3880', // Update with your actual coordinates
    // },
    areaServed: siteConfig.serviceAreas.map(area => ({
      '@type': 'City',
      name: area,
    })),
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '08:00',
      closes: '18:00',
    },
    sameAs: [
      // Add your social media profiles here when available
      // 'https://www.facebook.com/yourpage',
      // 'https://www.instagram.com/yourpage',
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Home Repair and Improvement Services',
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.businessName,
    },
    areaServed: siteConfig.serviceAreas.map(area => ({
      '@type': 'City',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Home Repair Services',
      itemListElement: siteConfig.serviceCategories.flatMap((category, catIndex) =>
        category.services.map((service, serviceIndex) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
            category: category.name,
          },
          position: catIndex * 100 + serviceIndex + 1,
        }))
      ),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}

