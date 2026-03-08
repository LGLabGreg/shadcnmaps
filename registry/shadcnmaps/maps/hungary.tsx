'use client'

import { Map, type MapProps } from '../map'
import { hungaryMapData } from '../map-data/hungary'

export type RegionId = (typeof hungaryMapData)['regions'][number]['id']

export interface HungaryMapProps extends Omit<MapProps, 'data'> {}

export function HungaryMap(props: HungaryMapProps) {
  return <Map data={hungaryMapData} {...props} />
}
