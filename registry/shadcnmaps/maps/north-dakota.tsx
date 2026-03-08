'use client'

import { Map, type MapProps } from '../map'
import { northDakotaMapData } from '../map-data/north-dakota'

export type RegionId = (typeof northDakotaMapData)['regions'][number]['id']

export interface NorthDakotaMapProps extends Omit<MapProps, 'data'> {}

export function NorthDakotaMap(props: NorthDakotaMapProps) {
  return <Map data={northDakotaMapData} {...props} />
}
