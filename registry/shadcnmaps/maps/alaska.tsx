'use client'

import { Map, type MapProps } from '@/registry/shadcnmaps/map'
import { alaskaMapData } from '@/registry/shadcnmaps/map-data/alaska'

export type RegionId = (typeof alaskaMapData)['regions'][number]['id']

export interface AlaskaMapProps extends Omit<MapProps, 'data'> {}

export function AlaskaMap(props: AlaskaMapProps) {
  return <Map data={alaskaMapData} {...props} />
}
