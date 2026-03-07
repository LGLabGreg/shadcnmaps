'use client'

import { Map, type MapProps } from '@/registry/shadcnmaps/map'
import { algeriaMapData } from '@/registry/shadcnmaps/map-data/algeria'

export type RegionId = (typeof algeriaMapData)['regions'][number]['id']

export interface AlgeriaMapProps extends Omit<MapProps, 'data'> {}

export function AlgeriaMap(props: AlgeriaMapProps) {
  return <Map data={algeriaMapData} {...props} />
}
