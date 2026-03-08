import { FeatureStrip } from '@/components/feature-strip'
import { Hero } from '@/components/hero'
import MainNav from '@/components/main-nav'
import { MapShowcase } from '@/components/map-showcase'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'shadcnmaps — Interactive SVG Map Components for React',
  },
  description:
    '170+ interactive SVG map components for React. Countries, continents, and US states. No dependencies — install via shadcn CLI with pure Tailwind CSS styling.',
}

export default function Home() {
  return (
    <div className='flex flex-col'>
      <MainNav />
      <Hero />
      <FeatureStrip />
      <MapShowcase />
    </div>
  )
}
