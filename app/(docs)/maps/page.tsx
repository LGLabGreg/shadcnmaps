import { MapsIndex } from '@/components/docs/maps-index'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maps',
  description:
    'Browse all available interactive SVG map components. Search by name or filter by category.',
}

export default function MapsPage() {
  return (
    <div className='p-6 md:p-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight'>Maps</h1>
        <p className='mt-2 text-muted-foreground'>
          Browse all available interactive SVG map components.
        </p>
      </div>
      <MapsIndex />
    </div>
  )
}
