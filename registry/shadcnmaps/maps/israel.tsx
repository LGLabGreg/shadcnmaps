'use client'

import { Map, type MapProps } from '../map'
import { israelMapData } from '../map-data/israel'

export type RegionId = (typeof israelMapData)['regions'][number]['id']

export interface IsraelMapProps extends Omit<MapProps, 'data'> {}

export function IsraelMap(props: IsraelMapProps) {
  return <Map data={israelMapData} {...props} />
}
