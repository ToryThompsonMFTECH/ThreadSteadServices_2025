import { slugify } from './utils'

/**
 * Get the image path for a service's image folder
 * @param serviceName - The name of the service
 * @returns The path to the service's image folder
 */
export function getServiceImageFolder(serviceName: string): string {
  const slug = slugify(serviceName)
  return `/images/services/${slug}`
}

/**
 * Generate image paths for a service
 * This assumes images are named sequentially (image-1.jpg, image-2.jpg, etc.)
 * or with descriptive names (main.jpg, detail.jpg, etc.)
 * 
 * @param serviceName - The name of the service
 * @param imageNames - Optional array of specific image filenames
 * @returns Array of image paths
 */
export function getServiceImages(serviceName: string, imageNames?: string[]): string[] {
  const folder = getServiceImageFolder(serviceName)
  
  if (imageNames && imageNames.length > 0) {
    return imageNames.map(name => `${folder}/${name}`)
  }
  
  // Default: return common image names that might exist
  // The actual images will need to be added by the user
  return [
    `${folder}/main.jpg`,
    `${folder}/image-1.jpg`,
    `${folder}/image-2.jpg`,
    `${folder}/image-3.jpg`,
  ]
}

/**
 * Get the primary/main image for a service
 * @param serviceName - The name of the service
 * @param fallback - Fallback image path if no service image exists
 * @returns The path to the main service image
 */
export function getServiceMainImage(serviceName: string, fallback: string = '/images/tools-hero.jpg'): string {
  const folder = getServiceImageFolder(serviceName)
  // Try common main image names
  return `${folder}/main.jpg`
}

/**
 * Check if a service has images available
 * Note: This is a client-side check and will only work at runtime
 * For static generation, you'll need to check the filesystem
 */
export function hasServiceImages(serviceName: string): boolean {
  // This would need to be implemented server-side to check filesystem
  // For now, we'll assume images exist if the folder structure is set up
  return true
}

