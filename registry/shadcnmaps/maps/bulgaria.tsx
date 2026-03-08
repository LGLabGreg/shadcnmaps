'use client'

import { Map, type MapProps } from '@/registry/shadcnmaps/map'
import { bulgariaMapData } from '@/registry/shadcnmaps/map-data/bulgaria'

export type RegionId = (typeof bulgariaMapData)['regions'][number]['id']

export interface BulgariaMapProps extends Omit<MapProps, 'data'> {}

export function BulgariaMap(props: BulgariaMapProps) {
  return <Map data={bulgariaMapData} {...props} />
}
