'use client'

import { Map, type MapProps } from '@/registry/shadcnmaps/map'
import { austriaMapData } from '@/registry/shadcnmaps/map-data/austria'

export type RegionId = (typeof austriaMapData)['regions'][number]['id']

export interface AustriaMapProps extends Omit<MapProps, 'data'> {}

export function AustriaMap(props: AustriaMapProps) {
  return <Map data={austriaMapData} {...props} />
}
