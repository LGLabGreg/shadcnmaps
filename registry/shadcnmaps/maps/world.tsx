'use client'

import { Map, type MapProps } from '@/registry/shadcnmaps/map'
import { worldMapData } from '@/registry/shadcnmaps/map-data/world'

export type RegionId = (typeof worldMapData)['regions'][number]['id']

export interface WorldMapProps extends Omit<MapProps, 'data'> {}

export function WorldMap(props: WorldMapProps) {
  return <Map data={worldMapData} {...props} />
}
