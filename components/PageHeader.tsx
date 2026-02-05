import Image from 'next/image'
import { HammerIcon } from './Icons'
import ParallaxOverlay from './ParallaxOverlay'
import ImageMontage from './ImageMontage'

interface PageHeaderProps {
  title: string
  subtitle?: string
  image?: string
  imageAlt?: string
  images?: string[]
}

export default function PageHeader({ title, subtitle, image, imageAlt, images }: PageHeaderProps) {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 pt-24 md:pt-28 overflow-hidden">
      {/* Premium depth layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text - Left */}
          <div className="order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Image - Right */}
          <div className="order-2">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)] bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-white/10 group">
              {/* Premium overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              {images && images.length > 0 ? (
                <div className="p-2 h-full">
                  <ImageMontage images={images} alt={imageAlt || title} />
                </div>
              ) : image ? (
                <Image
                  src={image}
                  alt={imageAlt || title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
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

