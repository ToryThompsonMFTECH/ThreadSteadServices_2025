import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import ContactForm from '@/components/ContactForm'
import CallbackForm from '@/components/CallbackForm'
import GoogleMap from '@/components/GoogleMap'
import PageHeader from '@/components/PageHeader'
import { CheckIcon } from '@/components/Icons'

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
        image="/images/tools-hero.jpg"
        imageAlt="Contact us for home repair services"
      />

      {/* Contact Options */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center">
              <h3 className="text-2xl font-bold mb-4">Call Us</h3>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-3xl font-semibold text-white hover:text-gray-200 transition-colors block mb-2"
              >
                {siteConfig.phone}
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
            <div className="bg-accent/20 backdrop-blur-sm p-8 rounded-lg border-2 border-accent text-center">
              <h3 className="text-2xl font-bold mb-4">Request Callback</h3>
              <p className="text-gray-100 mb-4">Prefer we call you? Fill out the form below.</p>
              <a
                href="#callback-form"
                className="inline-block bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent-light transition-colors"
              >
                Request Callback
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Find Us in Southern Atlanta
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed">
                We're proud to serve Southern Atlanta and surrounding areas. Click on the map to get directions or view our service area.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <GoogleMap address={siteConfig.location} className="h-[400px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Callback Form */}
      <section className="py-16 px-4 bg-white" id="callback-form">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Request a Callback
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Fill out the form and we'll call you back at your preferred time. No obligation, just a friendly conversation about your project.
              </p>
              <div className="bg-gradient-to-br from-accent/10 to-accent/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-3">Why Request a Callback?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckIcon className="text-primary mr-2 flex-shrink-0" size={20} />
                    <span>Discuss your project in detail</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="text-primary mr-2 flex-shrink-0" size={20} />
                    <span>Get personalized recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="text-primary mr-2 flex-shrink-0" size={20} />
                    <span>Receive a free estimate</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-accent/5 p-8 rounded-lg shadow-lg border border-primary/20">
              <CallbackForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-gradient-to-br from-accent to-accent-dark text-white" id="estimate-form">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tell Us About Your Project
              </h2>
              <p className="text-lg text-gray-100 leading-relaxed mb-6">
                Fill out the form and we'll get back to you with a free estimate. No obligation, just honest communication about your project needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckIcon className="text-white mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold mb-1">Free Estimates</h3>
                    <p className="text-gray-200 text-sm">Get a detailed quote with no hidden fees</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="text-white mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold mb-1">Quick Response</h3>
                    <p className="text-gray-200 text-sm">We'll get back to you within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="text-white mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold mb-1">Expert Advice</h3>
                    <p className="text-gray-200 text-sm">Professional recommendations for your project</p>
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
    </div>
  )
}
