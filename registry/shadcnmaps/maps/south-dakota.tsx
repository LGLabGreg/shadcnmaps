'use client'

import { Map, type MapProps } from '../map'
import { southDakotaMapData } from '../map-data/south-dakota'

export type RegionId = (typeof southDakotaMapData)['regions'][number]['id']

export interface SouthDakotaMapProps extends Omit<MapProps, 'data'> {}

export function SouthDakotaMap(props: SouthDakotaMapProps) {
  return <Map data={southDakotaMapData} {...props} />
}
