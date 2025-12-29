import fs from 'fs'
import path from 'path'
import { slugify } from './utils'

const SUPPORTED_IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif']

/**
 * Get all images for a service from the filesystem
 * This function reads the service's image folder and returns all image files
 */
export function getServiceImagesFromFolder(serviceName: string): string[] {
  const slug = slugify(serviceName)
  const serviceFolder = path.join(process.cwd(), 'public', 'images', 'services', slug)
  
  // Check if folder exists
  if (!fs.existsSync(serviceFolder)) {
    return []
  }

  try {
    // Read all files in the folder
    const files = fs.readdirSync(serviceFolder)
    
    // Filter for image files and sort them
    const imageFiles = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase()
        return SUPPORTED_IMAGE_EXTENSIONS.includes(ext)
      })
      .sort() // Sort alphabetically for consistent ordering
    
    // Return full paths relative to public folder
    // URL encode filenames to handle spaces and special characters
    return imageFiles.map(file => {
      const encodedFile = encodeURIComponent(file)
      return `/images/services/${slug}/${encodedFile}`
    })
  } catch (error) {
    console.error(`Error reading images for service ${serviceName}:`, error)
    return []
  }
}

/**
 * Get the main/primary image for a service
 * Tries common names first, then falls back to first image found
 */
export function getServiceMainImage(serviceName: string, fallback: string = '/images/tools-hero.jpg'): string {
  const slug = slugify(serviceName)
  const serviceFolder = path.join(process.cwd(), 'public', 'images', 'services', slug)
  
  if (!fs.existsSync(serviceFolder)) {
    return fallback
  }

  try {
    const files = fs.readdirSync(serviceFolder)
    const imageFiles = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase()
        return SUPPORTED_IMAGE_EXTENSIONS.includes(ext)
      })
      .sort()

    if (imageFiles.length === 0) {
      return fallback
    }

    // Look for common main image names first (check original filename before encoding)
    const mainImageNames = ['main', 'primary', 'hero', 'featured']
    const mainImageFile = imageFiles.find(file => {
      const filename = path.basename(file, path.extname(file)).toLowerCase()
      return mainImageNames.some(name => filename.includes(name))
    })

    const selectedFile = mainImageFile || imageFiles[0]
    return `/images/services/${slug}/${encodeURIComponent(selectedFile)}`
  } catch (error) {
    console.error(`Error reading main image for service ${serviceName}:`, error)
    return fallback
  }
}

/**
 * Get all images for a service (excluding the main image)
 */
export function getServiceGalleryImages(serviceName: string): string[] {
  const images = getServiceImagesFromFolder(serviceName)
  const mainImage = getServiceMainImage(serviceName)
  
  // Return all images if there's only one, or all except the main if there are multiple
  if (images.length <= 1) {
    return images
  }
  
  return images.filter(img => img !== mainImage)
}

