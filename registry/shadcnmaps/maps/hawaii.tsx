'use client'

import { Map, type MapProps } from '../map'
import { hawaiiMapData } from '../map-data/hawaii'

export type RegionId = (typeof hawaiiMapData)['regions'][number]['id']

export interface HawaiiMapProps extends Omit<MapProps, 'data'> {}

export function HawaiiMap(props: HawaiiMapProps) {
  return <Map data={hawaiiMapData} {...props} />
}
