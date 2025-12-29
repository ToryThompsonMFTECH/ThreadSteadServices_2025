import Image from 'next/image'
import { HammerIcon } from './Icons'
import ParallaxOverlay from './ParallaxOverlay'

interface PageHeaderProps {
  title: string
  subtitle?: string
  image?: string
  imageAlt?: string
}

export default function PageHeader({ title, subtitle, image, imageAlt }: PageHeaderProps) {
  return (
    <section className="relative bg-black border-b border-primary/20 pt-24 md:pt-28 overflow-hidden">
      <ParallaxOverlay image="/images/overlays/2.png" opacity={0.3} speed={0.35} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text - Left */}
          <div className="order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Image - Right */}
          <div className="order-2">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-primary/20 to-accent/20">
              {image ? (
                <Image
                  src={image}
                  alt={imageAlt || title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <HammerIcon className="w-24 h-24 opacity-20 text-primary" size={96} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

