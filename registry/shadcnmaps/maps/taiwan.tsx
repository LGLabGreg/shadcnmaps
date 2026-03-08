'use client'

import { Map, type MapProps } from '../map'
import { taiwanMapData } from '../map-data/taiwan'

export type RegionId = (typeof taiwanMapData)['regions'][number]['id']

export interface TaiwanMapProps extends Omit<MapProps, 'data'> {}

export function TaiwanMap(props: TaiwanMapProps) {
  return <Map data={taiwanMapData} {...props} />
}
