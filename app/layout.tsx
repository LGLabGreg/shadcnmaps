import { TooltipProvider } from '@/components/ui/tooltip'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Geist, Geist_Mono, Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const BASE_URL = 'https://shadcnmaps.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'shadcnmaps',
    template: '%s — shadcnmaps',
  },
  description:
    'Interactive SVG map components for React. No dependencies, pure Tailwind.',
  keywords: ['React', 'Tailwind CSS', 'SVG maps', 'shadcn', 'interactive maps'],
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'shadcnmaps',
    images: [{ url: '/og/home', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/home'],
  },
  alternates: { canonical: BASE_URL },
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
      </body>
    </html>
  )
}
