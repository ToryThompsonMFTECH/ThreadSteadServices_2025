import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { formatPhoneNumber } from '@/lib/utils'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Business Info */}
          <div>
            <h3 className="text-xl font-bold mb-2">{siteConfig.businessName}</h3>
            <p className="text-gray-200 text-base font-semibold mb-4 italic">
              {siteConfig.tagline}
            </p>
            <p className="text-gray-200 font-medium mb-4">
              Reliable home repair and improvement services in {siteConfig.location}
            </p>
            <div className="space-y-2 text-gray-200 font-medium">
              <p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {formatPhoneNumber(siteConfig.phone)}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-white font-medium transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-white font-medium transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-200 hover:text-white font-medium transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-white font-medium transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <p className="text-gray-200 font-medium mb-2">
              Proudly serving {siteConfig.location} and surrounding areas:
            </p>
            <ul className="text-gray-200 font-medium space-y-1">
              {siteConfig.serviceAreas.slice(0, 6).map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>

          {/* Thumbtack Profile */}
          <div>
            <h3 className="text-xl font-bold mb-4">Find Us On</h3>
            <a
              href="https://www.thumbtack.com/ga/griffin/affordable-plumbing-services/richard-threadgill/service/569174286233460742"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-200 hover:text-white font-medium transition-colors mb-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Thumbtack
            </a>
            <p className="text-gray-300 text-sm mt-1">
              ⭐ 5.0 Rating (5 reviews)
            </p>
            <p className="text-gray-300 text-sm">
              Check out our reviews!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

