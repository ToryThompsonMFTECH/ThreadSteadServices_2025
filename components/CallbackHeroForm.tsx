'use client'

import { useState, FormEvent } from 'react'
import { siteConfig } from '@/config/site'

interface CallbackHeroFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  zipCode: string
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
    smsOptIn: false,
    honeypot: '',
  })
  const [errors, setErrors] = useState<CallbackHeroFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          service: 'Callback Request',
          details: `ZIP Code: ${formData.zipCode}, SMS Opt-in: ${formData.smsOptIn ? 'Yes' : 'No'}`,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you! We\'ll call you soon.')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          zipCode: '',
          smsOptIn: false,
          honeypot: '',
        })
        setErrors({})
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

        {/* Submit Status */}
        {submitStatus !== 'idle' && (
          <div
            className={`p-3 rounded-lg text-sm ${
              submitStatus === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
            role="alert"
          >
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  )
}

