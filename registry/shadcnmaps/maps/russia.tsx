'use client'

import { Map, type MapProps } from '../map'
import { russiaMapData } from '../map-data/russia'

export type RegionId = (typeof russiaMapData)['regions'][number]['id']

export interface RussiaMapProps extends Omit<MapProps, 'data'> {}

export function RussiaMap(props: RussiaMapProps) {
  return <Map data={russiaMapData} {...props} />
}
