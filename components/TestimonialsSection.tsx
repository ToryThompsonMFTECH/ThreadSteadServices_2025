import { siteConfig } from '@/config/site'
import { StarIcon } from './Icons'
import ParallaxOverlay from './ParallaxOverlay'

export default function TestimonialsSection() {
  const testimonials = siteConfig.testimonials.slice(0, 5)

  return (
    <section className="relative py-20 px-4 bg-gray-50 overflow-hidden border-t border-gray-200">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 drop-shadow-lg">
            What Our Customers Say
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold max-w-2xl mx-auto mb-6">
            Don't just take our word for it—hear from homeowners we've helped.
          </p>
          <a
            href="https://www.thumbtack.com/ga/griffin/affordable-plumbing-services/richard-threadgill/service/569174286233460742"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-light transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            <span className="text-2xl">⭐</span>
            <div className="text-left">
              <div className="text-lg font-bold">5.0 Rating on Thumbtack</div>
              <div className="text-sm font-medium">Read All Reviews</div>
            </div>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-white via-gray-50 to-white p-8 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15),0_0_0_1px_rgba(186,12,47,0.1)] border-2 border-primary/10 hover:shadow-[0_30px_80px_rgba(186,12,47,0.25),0_0_0_2px_rgba(186,12,47,0.2)] hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] group overflow-hidden"
            >
              {/* Premium depth layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex mb-5 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400 drop-shadow-[0_2px_8px_rgba(251,191,36,0.5)] group-hover:scale-110 transition-transform duration-300" size={24} />
                  ))}
                </div>
                <div className="relative mb-6">
                  <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="text-gray-800 italic font-medium text-base md:text-lg leading-relaxed pl-2">"{testimonial.text}"</p>
                </div>
                <div className="border-t-2 border-gradient-to-r from-primary/20 via-primary/10 to-transparent pt-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-primary text-xl drop-shadow-sm group-hover:text-primary-dark transition-colors duration-300">{testimonial.name}</p>
                    {testimonial.timeAgo && (
                      <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2 py-1 rounded-full">{testimonial.timeAgo}</span>
                    )}
                  </div>
                  <p className="text-base text-gray-700 font-semibold">{testimonial.location}</p>
                  {testimonial.serviceType && (
                    <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-sm font-semibold mt-2 border border-primary/20">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                      {testimonial.serviceType}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Premium corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

