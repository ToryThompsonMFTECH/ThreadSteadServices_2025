import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ConditionalLayout from '@/components/ConditionalLayout'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.businessName} | Reliable Home Repair & Improvement Services in ${siteConfig.location}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: `${siteConfig.tagline} - Professional home repair and improvement services in ${siteConfig.location}. Fast response, quality workmanship, and fair pricing. Serving ${siteConfig.serviceAreas.join(', ')}.`,
  keywords: [
    'home repair',
    'home repair',
    'home improvement',
    'construction',
    siteConfig.city,
    siteConfig.state,
    ...siteConfig.serviceAreas,
  ].join(', '),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}

