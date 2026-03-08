'use client'

import { Map, type MapProps } from '../map'
import { cubaMapData } from '../map-data/cuba'

export type RegionId = (typeof cubaMapData)['regions'][number]['id']

export interface CubaMapProps extends Omit<MapProps, 'data'> {}

export function CubaMap(props: CubaMapProps) {
  return <Map data={cubaMapData} {...props} />
}
