'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isQRPage = pathname === '/qr'

  return (
    <>
      {!isQRPage && <Header />}
      <main className="min-h-screen">{children}</main>
      {!isQRPage && <Footer />}
      {!isQRPage && <ScrollToTop />}
    </>
  )
}



