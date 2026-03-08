'use client'

import { Map, type MapProps } from '../map'
import { slovakiaMapData } from '../map-data/slovakia'

export type RegionId = (typeof slovakiaMapData)['regions'][number]['id']

export interface SlovakiaMapProps extends Omit<MapProps, 'data'> {}

export function SlovakiaMap(props: SlovakiaMapProps) {
  return <Map data={slovakiaMapData} {...props} />
}
