import { TooltipProvider } from '@/components/ui/tooltip'
import { IS_PRODUCTION } from '@/lib/config'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

import './globals.css'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const BASE_URL = 'https://www.shadcnmaps.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'shadcnmaps',
    template: '%s — shadcnmaps',
  },
  description:
    'Interactive SVG map components for React. No dependencies, pure Tailwind.',
  keywords: [
    'React',
    'Tailwind CSS',
    'SVG maps',
    'shadcn',
    'interactive maps',
    'map component',
    'React map',
    'SVG map component',
    'interactive map component',
  ],
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'shadcnmaps',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.jpg'],
  },
  alternates: { canonical: BASE_URL },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/site.webmanifest',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={inter.variable} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
        {IS_PRODUCTION && (
          <Script
            src='https://cloud.umami.is/script.js'
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          />
        )}
      </body>
    </html>
  )
}
