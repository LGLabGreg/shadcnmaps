'use client'

import { USAMap } from '@/registry/shadcnmaps/maps/usa-map'
import { useState } from 'react'

export default function RegionClickExample() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className='space-y-3'>
      <p className='text-muted-foreground'>
        {selected ? (
          <>
            Selected:{' '}
            <span className='font-medium text-foreground'>{selected}</span>
          </>
        ) : (
          'Click a state to select it.'
        )}
      </p>
      <USAMap
        onRegionClick={({ region }) =>
          setSelected((prev) => (prev === region.name ? null : region.name))
        }
      />
    </div>
  )
}
