'use client'

import { Map, type MapProps } from '@/registry/shadcnmaps/map'
import { alabamaMapData } from '@/registry/shadcnmaps/map-data/alabama'

export type RegionId = (typeof alabamaMapData)['regions'][number]['id']

export interface AlabamaMapProps extends Omit<MapProps, 'data'> {}

export function AlabamaMap(props: AlabamaMapProps) {
  return <Map data={alabamaMapData} {...props} />
}
