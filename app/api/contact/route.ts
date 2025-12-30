import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { siteConfig } from '@/config/site'

// Create transporter if email credentials are configured
const getTransporter = () => {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  address?: string
  details: string
  referral?: string
  honeypot?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Honeypot spam check
    if (body.honeypot) {
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      )
    }

    // Validation
    if (!body.name || !body.email || !body.phone || !body.details) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Phone validation (basic)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/
    if (!phoneRegex.test(body.phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      )
    }

    // Prepare email content
    const emailContent = `
New Contact Form Submission from ${siteConfig.businessName}

Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone}
Service Needed: ${body.service || 'Not specified'}
Address/Area: ${body.address || 'Not provided'}
Project Details:
${body.details}

${body.referral ? `How did you hear about us: ${body.referral}` : ''}
    `.trim()

    // Send email (if SMTP is configured)
    const transporter = getTransporter()
    if (transporter) {
      try {
        await transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: siteConfig.email,
          replyTo: body.email,
          subject: `New Contact Form: ${body.name} - ${body.service || 'General Inquiry'}`,
          text: emailContent,
          html: `
            <h2>New Contact Form Submission from ${siteConfig.businessName}</h2>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Phone:</strong> ${body.phone}</p>
            <p><strong>Service Needed:</strong> ${body.service || 'Not specified'}</p>
            <p><strong>Address/Area:</strong> ${body.address || 'Not provided'}</p>
            <p><strong>Project Details:</strong></p>
            <p>${body.details.replace(/\n/g, '<br>')}</p>
            ${body.referral ? `<p><strong>How did you hear about us:</strong> ${body.referral}</p>` : ''}
          `,
        })
      } catch (emailError) {
        // Log error but don't fail the request
        console.error('Email sending failed:', emailError)
      }
    } else {
      // Log to console if email is not configured
      console.log('=== CONTACT FORM SUBMISSION ===')
      console.log(emailContent)
      console.log('=== END SUBMISSION ===')
      console.log('\nTODO: Configure SMTP settings in .env.local to enable email sending')
    }

    return NextResponse.json(
      { success: true, message: 'Thank you! We\'ll get back to you soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}

