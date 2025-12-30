'use client'

import { useEffect } from 'react'
import { CheckCircleIcon, XMarkIcon } from './Icons'
import { siteConfig } from '@/config/site'
import { formatPhoneNumber } from '@/lib/utils'

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  message?: string
}

export default function SuccessModal({ 
  isOpen, 
  onClose, 
  title = 'Thank You!',
  message = 'Your message has been sent successfully. We will contact you within 24 hours.'
}: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        className="relative bg-white rounded-lg shadow-2xl max-w-md w-full p-6 md:p-8 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <XMarkIcon className="w-6 h-6" size={24} />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <CheckCircleIcon className="w-10 h-10 text-green-600" size={40} />
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            {title}
          </h3>

          {/* Message */}
          <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
            {message}
          </p>

          {/* Additional Info */}
          <div className="bg-primary/5 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700 font-medium">
              <strong className="text-primary">What's next?</strong>
              <br />
              We've received your message and will contact you within 24 hours. 
              If you have an urgent request, please call us directly at{' '}
              <a 
                href={`tel:${siteConfig.phone}`}
                className="text-primary hover:underline font-semibold"
              >
                {formatPhoneNumber(siteConfig.phone)}
              </a>
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  )
}

