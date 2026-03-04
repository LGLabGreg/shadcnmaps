'use client'

import { USAMap, type StateId } from '@/registry/shadcnmaps/maps/usa-map'
import { useState } from 'react'

export default function SelectionExample() {
  const [selected, setSelected] = useState<StateId | null>(null)

  return (
    <div className='space-y-3'>
      <p className='min-h-5 text-sm text-muted-foreground'>
        {selected ? `Selected: ${selected}` : 'Click a state.'}
      </p>
      <USAMap
        regions={
          selected
            ? [{ id: selected, className: 'fill-map-region-selected' }]
            : []
        }
        onRegionClick={({ region }) =>
          setSelected((prev) =>
            prev === region.id ? null : (region.id as StateId)
          )
        }
        renderTooltip={(region) => (
          <span className='font-medium'>{region.name}</span>
        )}
      />
    </div>
  )
}
