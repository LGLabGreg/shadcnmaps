'use client'

import { Map, type MapProps } from '../map'
import { ukMapData } from '../map-data/uk'

export type RegionId = (typeof ukMapData)['regions'][number]['id']

export interface UkMapProps extends Omit<MapProps, 'data'> {}

export function UkMap(props: UkMapProps) {
  return <Map data={ukMapData} {...props} />
}
