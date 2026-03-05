<DocPage llmsSlug="region-click">

# Region Click

Click a region to select it. Click again to deselect. The `onRegionClick` callback provides the region data for each click.

```tsx
'use client'

import { USAMap } from '@/components/shadcnmaps/maps/usa-map'
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
```
