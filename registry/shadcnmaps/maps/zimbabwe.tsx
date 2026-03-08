'use client'

import { Map, type MapProps } from '../map'
import { zimbabweMapData } from '../map-data/zimbabwe'

export type RegionId = (typeof zimbabweMapData)['regions'][number]['id']

export interface ZimbabweMapProps extends Omit<MapProps, 'data'> {}

export function ZimbabweMap(props: ZimbabweMapProps) {
  return <Map data={zimbabweMapData} {...props} />
}
