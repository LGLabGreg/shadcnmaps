'use client'

import { Map, type MapProps } from '../map'
import { palestineIsraelMapData } from '../map-data/palestine-israel'

export type RegionId = (typeof palestineIsraelMapData)['regions'][number]['id']

export interface PalestineIsraelMapProps extends Omit<MapProps, 'data'> {}

export function PalestineIsraelMap(props: PalestineIsraelMapProps) {
  return <Map data={palestineIsraelMapData} {...props} />
}
