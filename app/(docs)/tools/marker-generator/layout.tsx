import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marker Generator',
  description:
    'Click on any map to place markers and generate the SVG coordinates and code for your shadcnmaps component.',
  alternates: { canonical: '/tools/marker-generator' },
}

export default function MarkerGeneratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
