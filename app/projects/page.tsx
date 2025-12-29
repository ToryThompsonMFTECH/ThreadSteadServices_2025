import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: `Projects | Our Recent Work in ${siteConfig.location}`,
  description: `View our recent home repair and improvement projects in ${siteConfig.location}. Quality workmanship you can trust.`,
}

const projects = [
  {
    name: `Deck Repair in ${siteConfig.city}`,
    description: 'Complete deck restoration including board replacement, railings, and staining. Restored a 20-year-old deck to like-new condition.',
    tags: ['Deck', 'Exterior', 'Repair'],
  },
  {
    name: `Bathroom Renovation in ${siteConfig.serviceAreas[1]}`,
    description: 'Full bathroom remodel with new tile, fixtures, vanity, and lighting. Modern design with attention to detail.',
    tags: ['Bathroom', 'Renovation', 'Tile'],
  },
  {
    name: `Kitchen Backsplash Installation`,
    description: 'Custom tile backsplash installation with precise cuts and professional grout work. Enhanced the entire kitchen aesthetic.',
    tags: ['Kitchen', 'Tile', 'Installation'],
  },
  {
    name: `Fence Installation in ${siteConfig.serviceAreas[2]}`,
    description: 'New privacy fence installation for residential property. Durable materials and professional installation.',
    tags: ['Fence', 'Exterior', 'Installation'],
  },
  {
    name: `Drywall Repair & Painting`,
    description: 'Extensive drywall repair after water damage, including texture matching and full room repainting.',
    tags: ['Drywall', 'Painting', 'Repair'],
  },
  {
    name: `Plumbing System Update`,
    description: 'Replaced aging plumbing fixtures throughout home, including new faucets, shower heads, and toilet installations.',
    tags: ['Plumbing', 'Repair', 'Installation'],
  },
  {
    name: `Custom Shelving Installation`,
    description: 'Built-in shelving units for home office and living room. Custom design to maximize space and functionality.',
    tags: ['Carpentry', 'Custom', 'Interior'],
  },
  {
    name: `Exterior Painting Project`,
    description: 'Complete exterior house painting including prep work, primer, and two coats of premium paint.',
    tags: ['Painting', 'Exterior', 'Maintenance'],
  },
  {
    name: `Patio Construction`,
    description: 'New concrete patio installation with proper drainage and finishing. Created new outdoor living space.',
    tags: ['Patio', 'Construction', 'Exterior'],
  },
  {
    name: `Electrical Panel Upgrade`,
    description: 'Upgraded electrical panel to meet modern safety standards and accommodate increased power needs.',
    tags: ['Electrical', 'Upgrade', 'Safety'],
  },
  {
    name: `Window Trim Installation`,
    description: 'Custom window trim work throughout home. Professional finish that enhances architectural details.',
    tags: ['Carpentry', 'Trim', 'Interior'],
  },
  {
    name: `Gutter Repair & Installation`,
    description: 'Replaced damaged gutters and added gutter guards. Improved water management and home protection.',
    tags: ['Gutters', 'Exterior', 'Repair'],
  },
]

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Our Recent Projects"
        subtitle="Quality workmanship and attention to detail in every project we complete."
        image="/images/tools-hero.jpg"
        imageAlt="Our projects of home repair work"
      />

      {/* Intro Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quality Workmanship in Every Project
              </h2>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                Every project we complete reflects our commitment to quality, attention to detail, and customer satisfaction. 
                From small repairs to major renovations, we bring the same level of professionalism and craftsmanship.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="font-semibold">100% Satisfaction</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="font-semibold">Quality Materials</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="font-semibold">Expert Craftsmanship</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <ul className="space-y-3 text-gray-100">
                <li className="flex items-start">
                  <span className="text-white mr-3 text-xl">✓</span>
                  <span>Thorough planning and consultation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 text-xl">✓</span>
                  <span>Quality materials and tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 text-xl">✓</span>
                  <span>Attention to every detail</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 text-xl">✓</span>
                  <span>Clean finish and follow-up</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-lg overflow-hidden border-2 hover:shadow-xl transition-all ${
                  index % 3 === 0 
                    ? 'bg-gradient-to-br from-primary/5 to-transparent border-primary/20' 
                    : index % 3 === 1
                    ? 'bg-gradient-to-br from-accent/5 to-transparent border-accent/20'
                    : 'bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30'
                }`}
              >
                {/* Image Placeholders */}
                <div className="grid grid-cols-2 gap-2 p-2 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <span className="text-primary text-sm font-semibold">Before</span>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                    <span className="text-accent text-sm font-semibold">After</span>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-800 font-medium mb-4">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary text-white text-sm rounded-full font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-accent to-accent-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's discuss how we can bring the same quality and attention to detail to your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="inline-block bg-white text-accent px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Free Estimate
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

