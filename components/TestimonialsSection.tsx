import { siteConfig } from '@/config/site'
import { StarIcon } from './Icons'
import ParallaxOverlay from './ParallaxOverlay'

export default function TestimonialsSection() {
  const testimonials = siteConfig.testimonials.slice(0, 5)

  return (
    <section className="relative py-20 px-4 bg-gray-50 overflow-hidden border-t border-gray-200">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 drop-shadow-lg">
            What Our Customers Say
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold max-w-2xl mx-auto">
            Don't just take our word for it—hear from homeowners we've helped.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-2xl border-2 border-primary/20 hover:shadow-3xl hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="flex mb-4 gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-accent drop-shadow-md" size={20} />
                ))}
              </div>
              <p className="text-gray-800 mb-4 italic font-medium text-base leading-relaxed">"{testimonial.text}"</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-primary text-lg drop-shadow-sm">{testimonial.name}</p>
                <p className="text-base text-gray-700 font-medium">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

