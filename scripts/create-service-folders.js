const fs = require('fs');
const path = require('path');

// Import slugify function logic
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Get all services from site config
const siteConfig = require('../config/site.ts');

const servicesDir = path.join(__dirname, '../public/images/services');

// Ensure services directory exists
if (!fs.existsSync(servicesDir)) {
  fs.mkdirSync(servicesDir, { recursive: true });
}

// Collect all unique services
const allServices = new Set();

// Add services from serviceCategories
siteConfig.siteConfig.serviceCategories.forEach((category) => {
  category.services.forEach((service) => {
    allServices.add(service.name);
  });
});

// Add legacy services
siteConfig.siteConfig.services.forEach((service) => {
  allServices.add(service.name);
});

// Create folders for each service
let created = 0;
let skipped = 0;

allServices.forEach((serviceName) => {
  const slug = slugify(serviceName);
  const serviceFolder = path.join(servicesDir, slug);
  
  if (!fs.existsSync(serviceFolder)) {
    fs.mkdirSync(serviceFolder, { recursive: true });
    // Create .gitkeep file
    fs.writeFileSync(path.join(serviceFolder, '.gitkeep'), '');
    created++;
    console.log(`Created folder: ${slug}`);
  } else {
    skipped++;
    console.log(`Skipped (already exists): ${slug}`);
  }
});

console.log(`\n✅ Created ${created} folders, skipped ${skipped} existing folders.`);
console.log(`📁 Service images should be placed in: public/images/services/[service-slug]/`);

