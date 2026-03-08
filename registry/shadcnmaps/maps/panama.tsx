'use client'

import { Map, type MapProps } from '../map'
import { panamaMapData } from '../map-data/panama'

export type RegionId = (typeof panamaMapData)['regions'][number]['id']

export interface PanamaMapProps extends Omit<MapProps, 'data'> {}

export function PanamaMap(props: PanamaMapProps) {
  return <Map data={panamaMapData} {...props} />
}
