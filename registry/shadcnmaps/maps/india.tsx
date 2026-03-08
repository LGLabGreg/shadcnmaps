'use client'

import { Map, type MapProps } from '../map'
import { indiaMapData } from '../map-data/india'

export type RegionId = (typeof indiaMapData)['regions'][number]['id']

export interface IndiaMapProps extends Omit<MapProps, 'data'> {}

export function IndiaMap(props: IndiaMapProps) {
  return <Map data={indiaMapData} {...props} />
}
