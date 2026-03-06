'use client'

import { Map, type MapProps } from '@/registry/shadcnmaps/map'
import { franceMapData } from '@/registry/shadcnmaps/map-data/france'

export type RegionId = (typeof franceMapData)['regions'][number]['id']

export interface FranceMapProps extends Omit<MapProps, 'data'> {}

export function FranceMap(props: FranceMapProps) {
  return <Map data={franceMapData} {...props} />
}
