import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ConditionalLayout from '@/components/ConditionalLayout'
import StructuredData from '@/components/StructuredData'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'),
  title: {
    default: `${siteConfig.businessName} | Reliable Home Repair & Improvement Services in ${siteConfig.location}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: `${siteConfig.tagline} - Professional home repair and improvement services in ${siteConfig.location}. Fast response, quality workmanship, and fair pricing. Serving ${siteConfig.serviceAreas.join(', ')}.`,
  keywords: [
    'home repair',
    'home improvement',
    'handyman services',
    'home maintenance',
    'construction',
    'plumbing repair',
    'electrical repair',
    'drywall repair',
    'painting services',
    siteConfig.city,
    siteConfig.state,
    ...siteConfig.serviceAreas,
  ].join(', '),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
    siteName: siteConfig.businessName,
    title: `${siteConfig.businessName} | Home Repair & Improvement Services`,
    description: `${siteConfig.tagline} - Professional home repair and improvement services in ${siteConfig.location}.`,
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: siteConfig.businessName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.businessName} | Home Repair Services`,
    description: `${siteConfig.tagline} - Professional home repair services in ${siteConfig.location}.`,
    images: ['/images/logo.png'],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StructuredData />
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}

