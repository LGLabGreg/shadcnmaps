'use client'

import { Map, type MapProps } from '../map'
import { floridaMapData } from '../map-data/florida'

export type RegionId = (typeof floridaMapData)['regions'][number]['id']

export interface FloridaMapProps extends Omit<MapProps, 'data'> {}

export function FloridaMap(props: FloridaMapProps) {
  return <Map data={floridaMapData} {...props} />
}
