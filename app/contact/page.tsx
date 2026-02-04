import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import ContactForm from '@/components/ContactForm'
import PageHeader from '@/components/PageHeader'
import { CheckIcon } from '@/components/Icons'
import { formatPhoneNumber } from '@/lib/utils'

export const metadata: Metadata = {
  title: `Contact Us | Request a Free Estimate in ${siteConfig.location}`,
  description: `Contact ${siteConfig.businessName} for a free estimate on your home repair or improvement project. Serving ${siteConfig.location}.`,
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Request a Free Estimate"
        subtitle="No obligation. Quick response. We'll help you figure out the best solution for your home."
        image="/images/contactHeader.png"
        imageAlt="Contact us for home repair services"
      />

      {/* Contact Form */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white" id="estimate-form">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Tell Us About Your Project
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Fill out the form and we'll get back to you with a free estimate. No obligation, just honest communication about your project needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckIcon className="text-primary mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold mb-1 text-gray-900">Free Estimates</h3>
                    <p className="text-gray-600 text-sm">Get a detailed quote with no hidden fees</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="text-primary mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold mb-1 text-gray-900">Quick Response</h3>
                    <p className="text-gray-600 text-sm">We'll get back to you within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="text-primary mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold mb-1 text-gray-900">Expert Advice</h3>
                    <p className="text-gray-600 text-sm">Professional recommendations for your project</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center">
              <h3 className="text-2xl font-bold mb-4">Call Us</h3>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-3xl font-semibold text-white hover:text-gray-200 transition-colors block mb-2"
              >
                {formatPhoneNumber(siteConfig.phone)}
              </a>
              <p className="text-gray-200">Click to call directly</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center">
              <h3 className="text-2xl font-bold mb-4">Email Us</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-xl font-semibold text-white hover:text-gray-200 transition-colors break-all block mb-2"
              >
                {siteConfig.email}
              </a>
              <p className="text-gray-200">We respond within 24 hours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center">
              <h3 className="text-2xl font-bold mb-4">Find Us On</h3>
              <a
                href="https://www.thumbtack.com/ga/griffin/affordable-plumbing-services/richard-threadgill/service/569174286233460742"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-white hover:text-gray-200 transition-colors block mb-2"
              >
                Thumbtack
              </a>
              <p className="text-gray-200">⭐ 5.0 Rating (5 reviews)</p>
              <p className="text-gray-300 text-sm mt-1">Check out our reviews!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
