'use client'

import { Map, type MapProps } from '../map'
import { syriaMapData } from '../map-data/syria'

export type RegionId = (typeof syriaMapData)['regions'][number]['id']

export interface SyriaMapProps extends Omit<MapProps, 'data'> {}

export function SyriaMap(props: SyriaMapProps) {
  return <Map data={syriaMapData} {...props} />
}
