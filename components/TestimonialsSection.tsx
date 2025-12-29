import { siteConfig } from '@/config/site'
import { StarIcon } from './Icons'
import ParallaxOverlay from './ParallaxOverlay'

export default function TestimonialsSection() {
  const testimonials = siteConfig.testimonials.slice(0, 5)

  return (
    <section className="relative py-20 px-4 bg-black overflow-hidden border-t border-white/10">
      <ParallaxOverlay image="/images/overlays/9.png" opacity={0.29} speed={0.31} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 font-semibold max-w-2xl mx-auto">
            Don't just take our word for it—hear from homeowners we've helped.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-primary/20 hover:shadow-xl transition-all"
            >
              <div className="flex mb-4 gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-accent" size={20} />
                ))}
              </div>
              <p className="text-gray-800 mb-4 italic font-medium text-base leading-relaxed">"{testimonial.text}"</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                <p className="text-base text-gray-700 font-medium">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

