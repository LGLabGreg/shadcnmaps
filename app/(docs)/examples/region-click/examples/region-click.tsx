'use client'

import { USAMap } from '@/registry/shadcnmaps/maps/usa-map'
import { useState } from 'react'

export default function RegionClickExample() {
  const [clicked, setClicked] = useState<string | null>(null)

  return (
    <div className='space-y-3'>
      <p className='min-h-5 text-sm text-muted-foreground'>
        {clicked ? (
          <>
            Selected:{' '}
            <span className='font-medium text-foreground'>{clicked}</span>
          </>
        ) : (
          'Click a state to select it.'
        )}
      </p>
      <USAMap
        onRegionClick={({ region }) =>
          setClicked((prev) => (prev === region.name ? null : region.name))
        }
      />
    </div>
  )
}
