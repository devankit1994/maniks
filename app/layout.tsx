import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Maniks International - Global Trade Excellence',
  description: 'Leading import-export solutions with trusted logistics, competitive pricing, and premium customer service. Connect globally with Maniks International.',
  generator: 'v0.app',
  openGraph: {
    title: 'Maniks International - Global Trade Excellence',
    description: 'Leading import-export solutions with trusted logistics, competitive pricing, and premium customer service.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maniks International - Global Trade Excellence',
    description: 'Leading import-export solutions with trusted logistics, competitive pricing, and premium customer service.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
