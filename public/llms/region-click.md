<DocPage llmsSlug="region-click">

# Region Click

Click a region to select it. Click again to deselect. The `onRegionClick` callback provides the region data for each click.

```tsx
'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { USAMap } from '@/components/shadcnmaps/maps/usa-map'
import { useState } from 'react'

export default function RegionClickExample() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <>
      <Dialog
        open={!!selected}
        onOpenChange={(open) => setSelected(open ? selected : null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selected}</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </DialogDescription>
        </DialogContent>
      </Dialog>
      <USAMap
        onRegionClick={({ region }) =>
          setSelected((prev) => (prev === region.name ? null : region.name))
        }
      />
    </>
  )
}
```
