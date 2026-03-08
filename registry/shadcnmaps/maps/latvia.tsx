'use client'

import { Map, type MapProps } from '../map'
import { latviaMapData } from '../map-data/latvia'

export type RegionId = (typeof latviaMapData)['regions'][number]['id']

export interface LatviaMapProps extends Omit<MapProps, 'data'> {}

export function LatviaMap(props: LatviaMapProps) {
  return <Map data={latviaMapData} {...props} />
}
