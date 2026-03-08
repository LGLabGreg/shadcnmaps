'use client'

import { Map, type MapProps } from '@/registry/shadcnmaps/map'
import { bangladeshMapData } from '@/registry/shadcnmaps/map-data/bangladesh'

export type RegionId = (typeof bangladeshMapData)['regions'][number]['id']

export interface BangladeshMapProps extends Omit<MapProps, 'data'> {}

export function BangladeshMap(props: BangladeshMapProps) {
  return <Map data={bangladeshMapData} {...props} />
}
