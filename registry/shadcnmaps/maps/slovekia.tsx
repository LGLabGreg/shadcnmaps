'use client'

import { Map, type MapProps } from '../map'
import { slovekiaMapData } from '../map-data/slovekia'

export type RegionId = (typeof slovekiaMapData)['regions'][number]['id']

export interface SlovekiaMapProps extends Omit<MapProps, 'data'> {}

export function SlovekiaMap(props: SlovekiaMapProps) {
  return <Map data={slovekiaMapData} {...props} />
}
