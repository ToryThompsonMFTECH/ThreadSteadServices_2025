import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Category Not Found
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Sorry, we couldn't find the service category you're looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors"
          >
            View All Services
          </Link>
          <Link
            href="/"
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}

