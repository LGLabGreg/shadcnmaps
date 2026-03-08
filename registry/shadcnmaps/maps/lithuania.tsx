'use client'

import { Map, type MapProps } from '../map'
import { lithuaniaMapData } from '../map-data/lithuania'

export type RegionId = (typeof lithuaniaMapData)['regions'][number]['id']

export interface LithuaniaMapProps extends Omit<MapProps, 'data'> {}

export function LithuaniaMap(props: LithuaniaMapProps) {
  return <Map data={lithuaniaMapData} {...props} />
}
