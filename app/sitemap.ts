import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { slugify } from '@/lib/utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'
  
  // Get all service slugs
  const servicePages = siteConfig.serviceCategories.flatMap(category => 
    category.services.map(service => ({
      url: `${baseUrl}/services/${slugify(service.name)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )

  // Get all category slugs
  const categoryPages = siteConfig.serviceCategories.map(category => ({
    url: `${baseUrl}/services/category/${slugify(category.name)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...servicePages,
    ...categoryPages,
  ]
}



