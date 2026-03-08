'use client'

import { Map, type MapProps } from '../map'
import { turkeyMapData } from '../map-data/turkey'

export type RegionId = (typeof turkeyMapData)['regions'][number]['id']

export interface TurkeyMapProps extends Omit<MapProps, 'data'> {}

export function TurkeyMap(props: TurkeyMapProps) {
  return <Map data={turkeyMapData} {...props} />
}
