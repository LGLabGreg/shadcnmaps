<DocPage llmsSlug="markers">

# Markers

Place custom SVG elements at specific coordinates on the map. Markers support tooltips and click handlers just like regions.

This pattern uses the `markers` prop with an array of `MapMarkerData` objects, each providing coordinates, a label, and custom SVG content.

```tsx
'use client'

import { USAMap } from '@/components/shadcnmaps/maps/usa'
import type { MapMarkerData } from '@/components/shadcnmaps/types'

const CITIES: (Omit<MapMarkerData, 'content'> & {
  city: string
  state: string
})[] = [
  {
    id: 'nyc',
    x: 751,
    y: 176,
    city: 'New York',
    state: 'NY',
    label: 'New York, NY',
  },
  {
    id: 'la',
    x: 94,
    y: 313,
    city: 'Los Angeles',
    state: 'CA',
    label: 'Los Angeles, CA',
  },
  {
    id: 'chi',
    x: 579,
    y: 207,
    city: 'Chicago',
    state: 'IL',
    label: 'Chicago, IL',
  },
  {
    id: 'hou',
    x: 449,
    y: 458,
    city: 'Houston',
    state: 'TX',
    label: 'Houston, TX',
  },
  {
    id: 'sea',
    x: 84,
    y: 89,
    city: 'Seattle',
    state: 'WA',
    label: 'Seattle, WA',
  },
]

export default function MarkersExample() {
  const markers: MapMarkerData[] = CITIES.map(
    ({ id, x, y, label, city, state }) => ({
      id,
      x,
      y,
      label,
      content: (
        <circle
          cx={0}
          cy={0}
          r={8}
          className='fill-primary stroke-background stroke-[1.5]'
        />
      ),
      tooltipContent: (
        <div>
          <p className='font-medium'>{city}</p>
          <p className='text-muted-foreground'>{state}</p>
        </div>
      ),
    })
  )

  return <USAMap markers={markers} />
}
```
