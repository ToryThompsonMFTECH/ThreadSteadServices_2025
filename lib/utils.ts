export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '')
  
  // Format as XXX-XXX-XXXX if 10 digits
  if (digits.length === 10) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`
  }
  
  // Return original if not 10 digits
  return phone
}

export function findServiceBySlug(slug: string) {
  const { siteConfig } = require('@/config/site')
  
  for (const category of siteConfig.serviceCategories) {
    const service = category.services.find((s: any) => slugify(s.name) === slug)
    if (service) {
      return { service, category: category.name }
    }
  }
  
  // Also check legacy services
  const legacyService = siteConfig.services.find((s: any) => slugify(s.name) === slug)
  if (legacyService) {
    return { service: legacyService, category: legacyService.category }
  }
  
  return null
}

export function getRelatedServices(currentServiceName: string, category: string, limit: number = 3) {
  const { siteConfig } = require('@/config/site')
  const related: any[] = []
  
  for (const cat of siteConfig.serviceCategories) {
    if (cat.name === category) {
      related.push(
        ...cat.services
          .filter((s: any) => s.name !== currentServiceName)
          .slice(0, limit)
      )
    }
  }
  
  return related
}

export function findCategoryBySlug(slug: string) {
  const { siteConfig } = require('@/config/site')
  
  const category = siteConfig.serviceCategories.find(
    (cat: any) => slugify(cat.name) === slug
  )
  
  return category || null
}

export function getAllCategories() {
  const { siteConfig } = require('@/config/site')
  return siteConfig.serviceCategories
}

