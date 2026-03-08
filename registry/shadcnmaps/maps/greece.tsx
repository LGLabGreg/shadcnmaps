'use client'

import { Map, type MapProps } from '../map'
import { greeceMapData } from '../map-data/greece'

export type RegionId = (typeof greeceMapData)['regions'][number]['id']

export interface GreeceMapProps extends Omit<MapProps, 'data'> {}

export function GreeceMap(props: GreeceMapProps) {
  return <Map data={greeceMapData} {...props} />
}
