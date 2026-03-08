'use client'

import { Map, type MapProps } from '@/registry/shadcnmaps/map'
import { brazilMapData } from '@/registry/shadcnmaps/map-data/brazil'

export type RegionId = (typeof brazilMapData)['regions'][number]['id']

export interface BrazilMapProps extends Omit<MapProps, 'data'> {}

export function BrazilMap(props: BrazilMapProps) {
  return <Map data={brazilMapData} {...props} />
}
