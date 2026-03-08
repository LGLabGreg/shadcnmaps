'use client'

import { Map, type MapProps } from '../map'
import { turkmenistanMapData } from '../map-data/turkmenistan'

export type RegionId = (typeof turkmenistanMapData)['regions'][number]['id']

export interface TurkmenistanMapProps extends Omit<MapProps, 'data'> {}

export function TurkmenistanMap(props: TurkmenistanMapProps) {
  return <Map data={turkmenistanMapData} {...props} />
}
