'use client'

import { Map, type MapProps } from '../map'
import { japanMapData } from '../map-data/japan'

export type RegionId = (typeof japanMapData)['regions'][number]['id']

export interface JapanMapProps extends Omit<MapProps, 'data'> {}

export function JapanMap(props: JapanMapProps) {
  return <Map data={japanMapData} {...props} />
}
