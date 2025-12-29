'use client'

import { useState, FormEvent } from 'react'

interface CallbackFormData {
  name: string
  phone: string
  preferredTime: string
  message: string
  honeypot: string
}

interface FormErrors {
  name?: string
  phone?: string
}

export default function CallbackForm() {
  const [formData, setFormData] = useState<CallbackFormData>({
    name: '',
    phone: '',
    preferredTime: '',
    message: '',
    honeypot: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          callbackRequest: true,
          email: 'callback@threadsteads.com', // Placeholder
          service: 'Callback Request',
          details: `Callback Request\nPreferred Time: ${formData.preferredTime || 'Any time'}\n\nMessage: ${formData.message || 'No message provided'}`,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage(data.message || 'Thank you! We\'ll call you soon.')
        setFormData({
          name: '',
          phone: '',
          preferredTime: '',
          message: '',
          honeypot: '',
        })
        setErrors({})
      } else {
        setSubmitStatus('error')
        setSubmitMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Network error. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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

      {/* Name */}
      <div>
        <label htmlFor="callback-name" className="block text-sm font-medium text-gray-700 mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="callback-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'callback-name-error' : undefined}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && (
          <p id="callback-name-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="callback-phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="callback-phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="(678) 123-4567"
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'callback-phone-error' : undefined}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.phone && (
          <p id="callback-phone-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Preferred Time */}
      <div>
        <label htmlFor="callback-time" className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Callback Time (Optional)
        </label>
        <select
          id="callback-time"
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">Any time</option>
          <option value="morning">Morning (8 AM - 12 PM)</option>
          <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
          <option value="evening">Evening (5 PM - 8 PM)</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="callback-message" className="block text-sm font-medium text-gray-700 mb-1">
          What can we help you with? (Optional)
        </label>
        <textarea
          id="callback-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Brief description of your project or issue..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Request a Callback'}
      </button>

      {/* Status Message */}
      {submitStatus !== 'idle' && (
        <div
          className={`p-4 rounded-lg ${
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
  )
}

