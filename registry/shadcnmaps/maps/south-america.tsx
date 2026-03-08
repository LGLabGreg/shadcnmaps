'use client'

import { Map, type MapProps } from '../map'
import { southAmericaMapData } from '../map-data/south-america'

export type RegionId = (typeof southAmericaMapData)['regions'][number]['id']

export interface SouthAmericaMapProps extends Omit<MapProps, 'data'> {}

export function SouthAmericaMap(props: SouthAmericaMapProps) {
  return <Map data={southAmericaMapData} {...props} />
}
