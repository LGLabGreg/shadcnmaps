'use client'

import { Map, type MapProps } from '../map'
import { germanyMapData } from '../map-data/germany'

export type RegionId = (typeof germanyMapData)['regions'][number]['id']

export interface GermanyMapProps extends Omit<MapProps, 'data'> {}

export function GermanyMap(props: GermanyMapProps) {
  return <Map data={germanyMapData} {...props} />
}
