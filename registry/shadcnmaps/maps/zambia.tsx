'use client'

import { Map, type MapProps } from '../map'
import { zambiaMapData } from '../map-data/zambia'

export type RegionId = (typeof zambiaMapData)['regions'][number]['id']

export interface ZambiaMapProps extends Omit<MapProps, 'data'> {}

export function ZambiaMap(props: ZambiaMapProps) {
  return <Map data={zambiaMapData} {...props} />
}
