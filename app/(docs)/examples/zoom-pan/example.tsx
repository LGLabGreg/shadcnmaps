'use client'

import { MapControls } from '@/registry/shadcnmaps/map-controls'
import { USAMap } from '@/registry/shadcnmaps/maps/usa'

export default function ZoomPanExample() {
  return (
    <USAMap
      enableZoom
      zoomConfig={{ maxZoom: 6 }}
      controls={<MapControls position='top-right' />}
    />
  )
}
