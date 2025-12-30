import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { siteConfig } from '@/config/site'
import { formatPhoneNumber } from '@/lib/utils'

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
    let formData: FormData
    let body: ContactFormData
    let photos: File[] = []

    try {
      formData = await request.formData()
      
      body = {
        name: (formData.get('name') as string) || '',
        email: (formData.get('email') as string) || '',
        phone: (formData.get('phone') as string) || '',
        service: (formData.get('service') as string) || '',
        address: (formData.get('address') as string) || '',
        details: (formData.get('details') as string) || '',
        referral: (formData.get('referral') as string) || '',
        honeypot: (formData.get('honeypot') as string) || '',
      }

      // Extract photos from form data
      let photoIndex = 0
      let photo = formData.get(`photo_${photoIndex}`)
      while (photo) {
        if (photo instanceof File && photo.size > 0) {
          photos.push(photo)
        }
        photoIndex++
        photo = formData.get(`photo_${photoIndex}`)
      }
    } catch (parseError) {
      console.error('Error parsing form data:', parseError)
      return NextResponse.json(
        { error: 'Invalid form data. Please try again.' },
        { status: 400 }
      )
    }

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
${photos.length > 0 ? `\nPhotos: ${photos.length} photo${photos.length > 1 ? 's' : ''} attached to this email` : ''}
    `.trim()

    // Send email (if SMTP is configured)
    const transporter = getTransporter()
    console.log('Email configuration check:', {
      hasTransporter: !!transporter,
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_USER: process.env.SMTP_USER ? '***configured***' : 'missing',
      SMTP_PASS: process.env.SMTP_PASS ? '***configured***' : 'missing',
      to: siteConfig.email,
    })
    
    if (transporter) {
      try {
        // Prepare email attachments from photos
        const attachments = photos.length > 0 ? await Promise.all(
          photos.map(async (photo, index) => {
            try {
              const arrayBuffer = await photo.arrayBuffer()
              return {
                filename: photo.name || `photo-${index + 1}.jpg`,
                content: Buffer.from(arrayBuffer),
              }
            } catch (error) {
              console.error(`Error processing photo ${index + 1}:`, error)
              return null
            }
          })
        ).then(results => results.filter((r): r is { filename: string; content: Buffer } => r !== null)) : []

        // Send notification email to business
        const info = await transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: siteConfig.email,
          replyTo: body.email,
          subject: `New Contact Form: ${body.name} - ${body.service || 'General Inquiry'}${photos.length > 0 ? ` (${photos.length} photo${photos.length > 1 ? 's' : ''})` : ''}`,
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
            ${photos.length > 0 ? `<p><strong>Photos:</strong> ${photos.length} photo${photos.length > 1 ? 's' : ''} attached</p>` : ''}
          `,
          attachments: attachments,
        })
        console.log('Notification email sent successfully:', info.messageId)

        // Send confirmation email to customer
        try {
          const confirmationInfo = await transporter.sendMail({
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: body.email,
            subject: `Thank You for Contacting ${siteConfig.businessName}`,
            text: `
Thank you for contacting ${siteConfig.businessName}!

We've received your request and will contact you within 24 hours.

Here's a summary of your submission:
Name: ${body.name}
Phone: ${body.phone}
Service: ${body.service || 'Not specified'}
Area: ${body.address || 'Not provided'}
Project Details:
${body.details}

If you have any urgent questions, please call us directly at ${formatPhoneNumber(siteConfig.phone)}.

Best regards,
${siteConfig.ownerName}
${siteConfig.businessName}
${formatPhoneNumber(siteConfig.phone)}
            `.trim(),
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #BA0C2F; margin-bottom: 20px;">Thank You for Contacting ${siteConfig.businessName}!</h2>
                
                <p style="font-size: 16px; line-height: 1.6; color: #333;">
                  We've received your request and will contact you within <strong>24 hours</strong>.
                </p>
                
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="color: #BA0C2F; margin-top: 0;">Your Submission Summary:</h3>
                  <p style="margin: 8px 0;"><strong>Name:</strong> ${body.name}</p>
                  <p style="margin: 8px 0;"><strong>Phone:</strong> ${body.phone}</p>
                  <p style="margin: 8px 0;"><strong>Service:</strong> ${body.service || 'Not specified'}</p>
                  <p style="margin: 8px 0;"><strong>Area:</strong> ${body.address || 'Not provided'}</p>
                  <p style="margin: 8px 0;"><strong>Project Details:</strong></p>
                  <p style="margin: 8px 0 8px 20px; white-space: pre-wrap;">${body.details.replace(/\n/g, '<br>')}</p>
                </div>
                
                <p style="font-size: 16px; line-height: 1.6; color: #333;">
                  If you have any urgent questions, please call us directly at 
                  <a href="tel:${formatPhoneNumber(siteConfig.phone)}" style="color: #BA0C2F; text-decoration: none; font-weight: bold;">
                    ${formatPhoneNumber(siteConfig.phone)}
                  </a>.
                </p>
                
                <p style="margin-top: 30px; color: #666; font-size: 14px;">
                  Best regards,<br>
                  <strong>${siteConfig.ownerName}</strong><br>
                  ${siteConfig.businessName}<br>
                  <a href="tel:${formatPhoneNumber(siteConfig.phone)}" style="color: #BA0C2F; text-decoration: none;">${formatPhoneNumber(siteConfig.phone)}</a>
                </p>
              </div>
            `,
          })
          console.log('Confirmation email sent successfully:', confirmationInfo.messageId)
        } catch (confirmationError: any) {
          console.error('Confirmation email failed (but notification sent):', confirmationError.message)
          // Don't fail the request if confirmation email fails
        }
      } catch (emailError: any) {
        // Log detailed error
        console.error('Email sending failed:', {
          message: emailError.message,
          code: emailError.code,
          command: emailError.command,
          response: emailError.response,
          responseCode: emailError.responseCode,
        })
        // Still return success to user, but log the error
      }
    } else {
      // Log to console if email is not configured
      console.log('=== CONTACT FORM SUBMISSION ===')
      console.log('SMTP not configured. Missing:', {
        SMTP_HOST: !process.env.SMTP_HOST,
        SMTP_USER: !process.env.SMTP_USER,
        SMTP_PASS: !process.env.SMTP_PASS,
      })
      console.log(emailContent)
      console.log('=== END SUBMISSION ===')
    }

    return NextResponse.json(
      { success: true, message: 'Thank you! We\'ll get back to you soon.' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Contact form error:', error)
    console.error('Error details:', {
      message: error?.message,
      stack: error?.stack,
      name: error?.name,
    })
    return NextResponse.json(
      { error: error?.message || 'Something went wrong. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}

