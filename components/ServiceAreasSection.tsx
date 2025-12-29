import { siteConfig } from '@/config/site'
import GoogleMap from './GoogleMap'
import ParallaxOverlay from './ParallaxOverlay'

export default function ServiceAreasSection() {
  return (
    <section className="relative py-20 px-4 bg-black overflow-hidden border-t border-white/10">
      <ParallaxOverlay image="/images/overlays/8.png" opacity={0.31} speed={0.3} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proudly Serving {siteConfig.city} & Surrounding Areas
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 font-semibold mb-8 max-w-2xl mx-auto">
            We provide home repair and improvement services throughout {siteConfig.location} 
            and the surrounding communities. No matter where you are in our service area, 
            we're here to help.
          </p>
        </div>

        {/* Creative Map Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Service Areas List */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-white mb-6">
              Our Service Areas
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {siteConfig.serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md border-2 border-primary/20 hover:shadow-lg hover:border-primary transition-all flex items-center group"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  <span className="font-semibold text-gray-900 text-base group-hover:text-primary transition-colors">{area}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20">
              <p className="text-base text-gray-200 font-medium">
                <strong className="text-white font-bold">Service Area:</strong> We proudly serve Southern Atlanta 
                and all surrounding communities. Don't see your area? Give us a call - we may still be able to help!
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <GoogleMap address={siteConfig.location} className="h-[500px]" />
              <div className="absolute -bottom-4 -left-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg hidden lg:block">
                <p className="font-bold text-lg">We Come to You!</p>
                <p className="text-sm">Serving all of Southern Atlanta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

