'use client'

import { Map, type MapProps } from '@/registry/shadcnmaps/map'
import { arkansasMapData } from '@/registry/shadcnmaps/map-data/arkansas'

export type RegionId = (typeof arkansasMapData)['regions'][number]['id']

export interface ArkansasMapProps extends Omit<MapProps, 'data'> {}

export function ArkansasMap(props: ArkansasMapProps) {
  return <Map data={arkansasMapData} {...props} />
}
