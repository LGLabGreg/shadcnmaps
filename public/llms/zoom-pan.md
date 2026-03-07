<DocPage llmsSlug="zoom-pan">

# Zoom & Pan

Enable zoom and pan on any map with the `enableZoom` prop and optional `MapControls` overlay.

- **Mouse wheel** zooms toward the cursor
- **Click and drag** pans the map
- **Pinch to zoom** on touch devices
- **Keyboard**: `+`/`=` zoom in, `-` zoom out, `0` reset
- **Control buttons**: zoom in/out, reset, and directional pan

```tsx
'use client'

import { MapControls } from '@/components/shadcnmaps/map-controls'
import { USAMap } from '@/components/shadcnmaps/maps/usa'

export default function ZoomPanExample() {
  return (
    <USAMap
      enableZoom
      zoomConfig={{ maxZoom: 6 }}
      controls={<MapControls position='top-right' />}
    />
  )
}
```

## Gestures only (no controls UI)

You can enable zoom gestures without rendering the control buttons:

```tsx
<USAMap enableZoom />
```

## Custom zoom configuration

Override zoom limits and step size via `zoomConfig`:

```tsx
<WorldMap
  enableZoom
  zoomConfig={{ minZoom: 1, maxZoom: 12, zoomStep: 1, panStep: 80 }}
  controls={<MapControls position="bottom-left" showPanButtons={false} />}
/>
```
