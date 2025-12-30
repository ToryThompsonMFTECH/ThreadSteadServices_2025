'use client'

import { useState, FormEvent, useRef } from 'react'
import { siteConfig } from '@/config/site'
import SuccessModal from './SuccessModal'

interface CallbackHeroFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  zipCode: string
  service: string
  area: string
  smsOptIn: boolean
  honeypot?: string
}

interface CallbackHeroFormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  zipCode?: string
}

export default function CallbackHeroForm() {
  const [formData, setFormData] = useState<CallbackHeroFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    service: '',
    area: '',
    smsOptIn: false,
    honeypot: '',
  })

  // Get all services from categories and sort alphabetically
  const allServices = siteConfig.serviceCategories
    .flatMap(category => category.services.map(service => service.name))
    .sort()
  
  // Sort service areas alphabetically
  const sortedServiceAreas = [...siteConfig.serviceAreas].sort()
  const [errors, setErrors] = useState<CallbackHeroFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [photos, setPhotos] = useState<File[]>([])
  const [showCamera, setShowCamera] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const validate = (): boolean => {
    const newErrors: CallbackHeroFormErrors = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'ZIP code is required'
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      newErrors.zipCode = 'Please enter a valid ZIP code'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Honeypot check
    if (formData.honeypot) {
      return
    }
    
    if (!validate()) {
      setSubmitStatus('error')
      setSubmitMessage('Please fix the errors below and try again.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', `${formData.firstName} ${formData.lastName}`)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('service', formData.service || 'Callback Request')
      formDataToSend.append('address', formData.area || formData.zipCode)
      formDataToSend.append('details', `Service: ${formData.service || 'Not specified'}\nArea: ${formData.area || 'Not specified'}\nZIP Code: ${formData.zipCode}\nSMS Opt-in: ${formData.smsOptIn ? 'Yes' : 'No'}`)
      formDataToSend.append('honeypot', formData.honeypot || '')

      // Add photos
      photos.forEach((photo, index) => {
        formDataToSend.append(`photo_${index}`, photo)
      })

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend,
      })

      const data = await response.json()

      if (response.ok) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          zipCode: '',
          service: '',
          area: '',
          smsOptIn: false,
          honeypot: '',
        })
        setPhotos([])
        setErrors({})
        setShowSuccessModal(true)
      } else {
        setSubmitStatus('error')
        setSubmitMessage(data.error || 'Failed to send request. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Network error. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
    
    // Clear error when user starts typing
    if (errors[name as keyof CallbackHeroFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setPhotos((prev) => [...prev, ...newFiles].slice(0, 5)) // Limit to 5 photos
    }
  }

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index))
  }

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setShowCamera(true)
      }
    } catch (error) {
      alert('Unable to access camera. Please check your permissions.')
    }
  }

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      stream.getTracks().forEach(track => track.stop())
      videoRef.current.srcObject = null
    }
    setShowCamera(false)
  }

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current
      const video = videoRef.current
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(video, 0, 0)
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], `camera-photo-${Date.now()}.jpg`, { type: 'image/jpeg' })
            setPhotos((prev) => [...prev, file].slice(0, 5))
            stopCamera()
          }
        }, 'image/jpeg', 0.8)
      }
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          Let Us Call You
        </h2>
        <button
          type="submit"
          form="callback-form"
          disabled={isSubmitting}
          className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold hover:bg-primary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {isSubmitting ? 'Sending...' : 'Request A Call'}
        </button>
      </div>
      
      <form id="callback-form" onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Service and Area Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="callback-service" className="block text-sm font-semibold text-gray-800 mb-1">
              Service Needed (Optional)
            </label>
            <select
              id="callback-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">Select a service...</option>
              {allServices.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="callback-area" className="block text-sm font-semibold text-gray-800 mb-1">
              Service Area (Optional)
            </label>
            <select
              id="callback-area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">Select your area...</option>
              {sortedServiceAreas.map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Personal Information - Single Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div>
            <label htmlFor="callback-firstName" className="block text-sm font-semibold text-gray-800 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="callback-firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="ex. John"
              required
              aria-invalid={errors.firstName ? 'true' : 'false'}
              aria-describedby={errors.firstName ? 'callback-firstName-error' : undefined}
              className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.firstName && (
              <p id="callback-firstName-error" className="mt-1 text-xs text-red-500" role="alert">
                {errors.firstName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="callback-lastName" className="block text-sm font-semibold text-gray-800 mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="callback-lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="ex. Smith"
              required
              aria-invalid={errors.lastName ? 'true' : 'false'}
              aria-describedby={errors.lastName ? 'callback-lastName-error' : undefined}
              className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.lastName && (
              <p id="callback-lastName-error" className="mt-1 text-xs text-red-500" role="alert">
                {errors.lastName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="callback-email" className="block text-sm font-semibold text-gray-800 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="callback-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ex. johnsmith@example.com"
              required
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'callback-email-error' : undefined}
              className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p id="callback-email-error" className="mt-1 text-xs text-red-500" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="callback-phone" className="block text-sm font-semibold text-gray-800 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="callback-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="ex. (555) 555-5555"
              required
              aria-invalid={errors.phone ? 'true' : 'false'}
              aria-describedby={errors.phone ? 'callback-phone-error' : undefined}
              className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.phone && (
              <p id="callback-phone-error" className="mt-1 text-xs text-red-500" role="alert">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="callback-zipCode" className="block text-sm font-semibold text-gray-800 mb-1">
              ZIP/Postal Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="callback-zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="ex. 33770"
              required
              aria-invalid={errors.zipCode ? 'true' : 'false'}
              aria-describedby={errors.zipCode ? 'callback-zipCode-error' : undefined}
              className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                errors.zipCode ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.zipCode && (
              <p id="callback-zipCode-error" className="mt-1 text-xs text-red-500" role="alert">
                {errors.zipCode}
              </p>
            )}
          </div>
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Add Photos (Optional) - Up to 5 photos
          </label>
          <div className="space-y-3">
            {/* Photo Preview Grid */}
            {photos.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {photos.map((photo, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg border border-gray-300"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                      aria-label="Remove photo"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Upload Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                📷 Upload Photo
              </button>
              <button
                type="button"
                onClick={showCamera ? stopCamera : startCamera}
                className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                {showCamera ? '📷 Stop Camera' : '📸 Take Photo'}
              </button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              className="hidden"
            />

            {/* Camera View */}
            {showCamera && (
              <div className="relative bg-black rounded-lg overflow-hidden">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-auto max-h-64"
                />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={capturePhoto}
                    className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-light"
                  >
                    Capture
                  </button>
                  <button
                    type="button"
                    onClick={stopCamera}
                    className="bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <canvas ref={canvasRef} className="hidden" />
          </div>
        </div>

        {/* SMS Opt-in */}
        <div className="pt-2">
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              name="smsOptIn"
              checked={formData.smsOptIn}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-primary focus:ring-primary rounded border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-700">
              Yes! You can text me service reminders and other messages.
            </span>
          </label>
          {formData.smsOptIn && (
            <p className="mt-2 text-xs text-gray-500 ml-6">
              By checking this box, I agree to opt in to receive automated SMS and/or MMS messages from {siteConfig.businessName} to the provided mobile number(s). Message data rates may apply. Reply STOP to opt out of future messages. Reply HELP for help.
            </p>
          )}
        </div>

        {/* Email Opt-in Disclaimer */}
        <p className="text-xs text-gray-500 pt-2">
          By entering your email address, you agree to receive emails about services, updates or promotions from {siteConfig.businessName}. You may unsubscribe at any time.
        </p>

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div
            className="p-3 rounded-lg text-sm bg-red-50 text-red-800 border border-red-200"
            role="alert"
          >
            {submitMessage}
          </div>
        )}
      </form>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Thank You!"
        message="Your callback request has been sent successfully. We will contact you within 24 hours."
      />
    </div>
  )
}

