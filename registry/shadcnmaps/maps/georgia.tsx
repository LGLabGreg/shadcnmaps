'use client'

import { Map, type MapProps } from '../map'
import { georgiaMapData } from '../map-data/georgia'

export type RegionId = (typeof georgiaMapData)['regions'][number]['id']

export interface GeorgiaMapProps extends Omit<MapProps, 'data'> {}

export function GeorgiaMap(props: GeorgiaMapProps) {
  return <Map data={georgiaMapData} {...props} />
}
