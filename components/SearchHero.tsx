'use client'

import SearchBar from './SearchBar'
import ParallaxOverlay from './ParallaxOverlay'

export default function SearchHero() {
  return (
    <section className="relative py-12 px-4 bg-black overflow-hidden border-t border-white/10">
      <ParallaxOverlay image="/images/overlays/3.png" opacity={0.32} speed={0.3} />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          What Can We Help You With?
        </h2>
        <p className="text-lg md:text-xl text-gray-200 font-semibold mb-8">
          Search for services or describe your issue. We're here to help with all your home repair and improvement needs.
        </p>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  )
}

