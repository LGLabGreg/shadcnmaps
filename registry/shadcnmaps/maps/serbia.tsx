'use client'

import { Map, type MapProps } from '../map'
import { serbiaMapData } from '../map-data/serbia'

export type RegionId = (typeof serbiaMapData)['regions'][number]['id']

export interface SerbiaMapProps extends Omit<MapProps, 'data'> {}

export function SerbiaMap(props: SerbiaMapProps) {
  return <Map data={serbiaMapData} {...props} />
}
