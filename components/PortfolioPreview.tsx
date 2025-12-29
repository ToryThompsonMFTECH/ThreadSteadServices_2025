import Link from 'next/link'
import { siteConfig } from '@/config/site'
import ParallaxOverlay from './ParallaxOverlay'

const featuredProjects = [
  {
    name: `Deck Repair in ${siteConfig.city}`,
    description: 'Complete deck restoration with new boards, railings, and professional staining.',
    tags: ['Deck', 'Exterior'],
  },
  {
    name: `Bathroom Renovation`,
    description: 'Full bathroom remodel with modern tile, fixtures, and custom vanity installation.',
    tags: ['Bathroom', 'Renovation'],
  },
  {
    name: `Kitchen Backsplash`,
    description: 'Custom tile backsplash installation with precise cuts and professional finish.',
    tags: ['Kitchen', 'Tile'],
  },
  {
    name: `Fence Installation`,
    description: 'New privacy fence installation with durable materials and expert craftsmanship.',
    tags: ['Fence', 'Exterior'],
  },
]

export default function PortfolioPreview() {
  return (
    <section className="relative py-20 px-4 bg-black overflow-hidden border-t border-white/10">
      <ParallaxOverlay image="/images/overlays/5.png" opacity={0.3} speed={0.28} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Quality workmanship and attention to detail in every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border-2 border-primary/20 hover:shadow-xl hover:border-primary transition-all"
            >
              <div className="grid grid-cols-2 gap-1 bg-gray-100">
                <div className="aspect-square bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Before</span>
                </div>
                <div className="aspect-square bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">After</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-700 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors"
          >
            View More Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

