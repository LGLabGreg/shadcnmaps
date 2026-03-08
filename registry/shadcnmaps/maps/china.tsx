'use client'

import { Map, type MapProps } from '../map'
import { chinaMapData } from '../map-data/china'

export type RegionId = (typeof chinaMapData)['regions'][number]['id']

export interface ChinaMapProps extends Omit<MapProps, 'data'> {}

export function ChinaMap(props: ChinaMapProps) {
  return <Map data={chinaMapData} {...props} />
}
