'use client'

import { Map, type MapProps } from '@/registry/shadcnmaps/map'
import { belgiumMapData } from '@/registry/shadcnmaps/map-data/belgium'

export type RegionId = (typeof belgiumMapData)['regions'][number]['id']

export interface BelgiumMapProps extends Omit<MapProps, 'data'> {}

export function BelgiumMap(props: BelgiumMapProps) {
  return <Map data={belgiumMapData} {...props} />
}
