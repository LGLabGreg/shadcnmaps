'use client'

import { Map, type MapProps } from '../map'
import { californiaMapData } from '../map-data/california'

export type RegionId = (typeof californiaMapData)['regions'][number]['id']

export interface CaliforniaMapProps extends Omit<MapProps, 'data'> {}

export function CaliforniaMap(props: CaliforniaMapProps) {
  return <Map data={californiaMapData} {...props} />
}
