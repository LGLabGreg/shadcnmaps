# USA Map

Interactive SVG map of the United States with all 50 states and DC. Supports click, hover, keyboard navigation, tooltips, and custom markers.

## Installation

```bash
npx shadcn add https://shadcnmaps.com/r/usa-map.json
```

Installs to: `components/shadcnmaps/maps/usa-map.tsx`

## Basic Usage

```tsx
import { USAMap } from '@/components/shadcnmaps/maps/usa-map'

export default function Page() {
  return <USAMap />
}
```

## Selection Example

```tsx
'use client'

import { useState } from 'react'
import { USAMap, type StateId } from '@/components/shadcnmaps/maps/usa-map'

export function StatePicker() {
  const [selected, setSelected] = useState<StateId | null>(null)

  return (
    <USAMap
      states={selected ? [{ id: selected, className: 'fill-map-region-selected' }] : []}
      onRegionClick={({ region }) =>
        setSelected((prev) => (prev === region.id ? null : region.id as StateId))
      }
      renderTooltip={(region) => <span>{region.name}</span>}
    />
  )
}
```

## Choropleth Example

```tsx
'use client'

import { USAMap, type StateId } from '@/components/shadcnmaps/maps/usa-map'

const data: Partial<Record<StateId, number>> = {
  CA: 39538223,
  TX: 29145505,
  FL: 21538187,
  // ...
}

export function ChoroplethMap() {
  const max = Math.max(...Object.values(data) as number[])
  const states = (Object.keys(data) as StateId[]).map((id) => {
    const r = (data[id]! / max)
    return {
      id,
      className: r > 0.5 ? 'fill-blue-600' : r > 0.2 ? 'fill-blue-400' : 'fill-blue-200',
    }
  })

  return <USAMap states={states} />
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `states` | `StateOverride[]` | `[]` | Per-state overrides (className, tooltipContent, etc.) |
| `disabledStates` | `StateId[]` | `[]` | States to mark as non-interactive |
| `markers` | `MapMarkerData[]` | `[]` | SVG markers to overlay on the map |
| `onRegionClick` | `(event: RegionEvent) => void` | — | Click / keyboard activation handler |
| `onRegionEnter` | `(event: RegionEvent) => void` | — | Hover enter / focus handler |
| `onRegionLeave` | `(event: RegionEvent) => void` | — | Hover leave / blur handler |
| `onMarkerClick` | `(event: MarkerEvent) => void` | — | Marker click handler |
| `renderTooltip` | `(region: MapRegionData) => ReactNode` | — | Custom tooltip renderer |
| `showLabels` | `boolean` | `true` | Show state abbreviation labels |
| `showTooltips` | `boolean` | `true` | Enable tooltips |
| `className` | `string` | — | Class on the root SVG element |
| `aria-label` | `string` | `"United States"` | Accessible map label |

## StateId

All valid state IDs: `AK AL AR AZ CA CO CT DC DE FL GA HI IA ID IL IN KS KY LA MA MD ME MI MN MO MS MT NC ND NE NH NJ NM NV NY OH OK OR PA RI SC SD TN TX UT VA VT WA WI WV WY`

## CSS Variables

Override map colors in your `globals.css`:

```css
:root {
  --map-region: oklch(44.6% 0.043 257.281);
  --map-region-hover: oklch(37.2% 0.044 257.287);
  --map-region-selected: oklch(48.8% 0.243 264.376);
}
```
