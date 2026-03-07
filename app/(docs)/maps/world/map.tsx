'use client'

import { MapControls } from '@/registry/shadcnmaps/map-controls'
import { WorldMap } from '@/registry/shadcnmaps/maps/world'

export default function SimpleExample() {
  return <WorldMap enableZoom controls={<MapControls position='top-right' />} />
}
