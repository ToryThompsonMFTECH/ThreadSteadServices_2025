import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/config/site'

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent text-lg font-semibold mb-2">
            {siteConfig.tagline}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About {siteConfig.businessName}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Meet {siteConfig.ownerName}
            </h3>
            <p className="text-gray-800 font-medium text-base mb-4 leading-relaxed">
              With over {siteConfig.yearsExperience} years of hands-on experience in home repair and light construction, 
              {siteConfig.ownerName} founded {siteConfig.businessName} with a simple mission: provide reliable, 
              honest, and quality home repair and improvement services to homeowners throughout {siteConfig.location}. What started 
              as a one-person operation has grown into a trusted local business, but the core values remain the same.
            </p>
            <p className="text-gray-800 font-medium text-base mb-4 leading-relaxed">
              When you call {siteConfig.businessName}, you're talking directly to Richard—the person who will 
              be doing the work or overseeing your project. That means clear communication, honest pricing, 
              and work you can trust. We're not a big corporation; we're your neighbors who take pride in 
              building long-term relationships with our clients.
            </p>
            <p className="text-gray-800 font-medium text-base leading-relaxed">
              Richard brings a personal touch to every project, treating your home with the same care and 
              attention he'd give his own. We serve {siteConfig.location} and surrounding areas with 
              integrity, craftsmanship, and a commitment to making your homestead truly feel like home.
            </p>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/richard-threadgill.jpg"
              alt={`${siteConfig.ownerName}, Owner of ${siteConfig.businessName}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/about"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  )
}

