'use client'

import { Map, type MapProps } from '../map'
import { sudanMapData } from '../map-data/sudan'

export type RegionId = (typeof sudanMapData)['regions'][number]['id']

export interface SudanMapProps extends Omit<MapProps, 'data'> {}

export function SudanMap(props: SudanMapProps) {
  return <Map data={sudanMapData} {...props} />
}
