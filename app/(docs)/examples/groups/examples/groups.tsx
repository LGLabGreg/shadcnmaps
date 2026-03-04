'use client'

import { USAMap } from '@/registry/shadcnmaps/maps/usa-map'
import type { RegionGroup } from '@/registry/shadcnmaps/types'
import { useState } from 'react'

const GROUPS: RegionGroup[] = [
  {
    id: 'west-coast',
    name: 'West Coast',
    regionIds: ['WA', 'OR', 'CA'],
    className: 'fill-blue-500 hover:fill-blue-600',
  },
  {
    id: 'northeast',
    name: 'Northeast',
    regionIds: ['ME', 'NH', 'VT', 'MA', 'CT', 'RI', 'NY', 'NJ', 'PA'],
  },
  {
    id: 'southeast',
    name: 'Southeast',
    regionIds: ['FL', 'GA', 'SC', 'NC', 'VA', 'AL', 'MS', 'TN', 'LA'],
  },
]

export default function GroupsExample() {
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
          'Hover or click a region to interact with its group.'
        )}
      </p>
      <USAMap
        groups={GROUPS}
        onGroupClick={({ group }) =>
          setSelected((prev) => (prev === group.name ? null : group.name))
        }
        onRegionClick={({ region }) => {
          const inGroup = GROUPS.some((g) => g.regionIds.includes(region.id))
          if (!inGroup) {
            setSelected((prev) => (prev === region.name ? null : region.name))
          }
        }}
      />
    </div>
  )
}
