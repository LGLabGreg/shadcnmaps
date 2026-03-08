'use client'

import { Map, type MapProps } from '../map'
import { tanzaniaMapData } from '../map-data/tanzania'

export type RegionId = (typeof tanzaniaMapData)['regions'][number]['id']

export interface TanzaniaMapProps extends Omit<MapProps, 'data'> {}

export function TanzaniaMap(props: TanzaniaMapProps) {
  return <Map data={tanzaniaMapData} {...props} />
}
