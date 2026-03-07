'use client'

import { Map, type MapProps } from '@/registry/shadcnmaps/map'
import { asiaMapData } from '@/registry/shadcnmaps/map-data/asia'

export type RegionId = (typeof asiaMapData)['regions'][number]['id']

export interface AsiaMapProps extends Omit<MapProps, 'data'> {}

export function AsiaMap(props: AsiaMapProps) {
  return <Map data={asiaMapData} {...props} />
}
