'use client'

import { Map, type MapProps } from '../map'
import { romaniaMapData } from '../map-data/romania'

export type RegionId = (typeof romaniaMapData)['regions'][number]['id']

export interface RomaniaMapProps extends Omit<MapProps, 'data'> {}

export function RomaniaMap(props: RomaniaMapProps) {
  return <Map data={romaniaMapData} {...props} />
}
