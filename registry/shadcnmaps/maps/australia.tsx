'use client'

import { Map, type MapProps } from '@/registry/shadcnmaps/map'
import { australiaMapData } from '@/registry/shadcnmaps/map-data/australia'

export type RegionId = (typeof australiaMapData)['regions'][number]['id']

export interface AustraliaMapProps extends Omit<MapProps, 'data'> {}

export function AustraliaMap(props: AustraliaMapProps) {
  return <Map data={australiaMapData} {...props} />
}
