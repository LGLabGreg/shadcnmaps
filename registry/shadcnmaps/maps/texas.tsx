'use client'

import { Map, type MapProps } from '../map'
import { texasMapData } from '../map-data/texas'

export type RegionId = (typeof texasMapData)['regions'][number]['id']

export interface TexasMapProps extends Omit<MapProps, 'data'> {}

export function TexasMap(props: TexasMapProps) {
  return <Map data={texasMapData} {...props} />
}
