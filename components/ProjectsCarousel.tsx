'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Project {
  name: string
  description: string
  tags: string[]
  image?: string
}

interface ProjectsCarouselProps {
  projects: Project[]
}

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToProject = (index: number) => {
    setCurrentIndex(index)
  }

  if (projects.length === 0) return null

  const currentProject = projects[currentIndex]

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-primary/20 shadow-2xl">
        {/* Project Card */}
        <div className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
              {currentProject.image ? (
                <Image
                  src={currentProject.image}
                  alt={currentProject.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                  <span className="text-gray-400 text-lg font-semibold">Project Image</span>
                </div>
              )}
            </div>

            {/* Right Side - Project Info */}
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">
                {currentProject.name}
              </h3>
              <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                {currentProject.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {currentProject.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-4 py-2 bg-primary text-white text-sm rounded-full font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevProject}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg border-2 border-primary/20 transition-all duration-300 hover:scale-110 z-10"
          aria-label="Previous project"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextProject}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg border-2 border-primary/20 transition-all duration-300 hover:scale-110 z-10"
          aria-label="Next project"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 pb-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-primary'
                  : 'w-3 bg-gray-300 hover:bg-primary/50'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Project Counter */}
      <div className="text-center mt-4 text-white font-semibold">
        {currentIndex + 1} of {projects.length}
      </div>
    </div>
  )
}
