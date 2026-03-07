'use client'

import { Map, type MapProps } from '@/registry/shadcnmaps/map'
import { azerbaijanMapData } from '@/registry/shadcnmaps/map-data/azerbaijan'

export type RegionId = (typeof azerbaijanMapData)['regions'][number]['id']

export interface AzerbaijanMapProps extends Omit<MapProps, 'data'> {}

export function AzerbaijanMap(props: AzerbaijanMapProps) {
  return <Map data={azerbaijanMapData} {...props} />
}
