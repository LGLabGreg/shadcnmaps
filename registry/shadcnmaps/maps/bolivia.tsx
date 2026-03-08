'use client'

import { Map, type MapProps } from '@/registry/shadcnmaps/map'
import { boliviaMapData } from '@/registry/shadcnmaps/map-data/bolivia'

export type RegionId = (typeof boliviaMapData)['regions'][number]['id']

export interface BoliviaMapProps extends Omit<MapProps, 'data'> {}

export function BoliviaMap(props: BoliviaMapProps) {
  return <Map data={boliviaMapData} {...props} />
}
