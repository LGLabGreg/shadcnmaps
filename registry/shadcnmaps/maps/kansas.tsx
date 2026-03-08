'use client'

import { Map, type MapProps } from '../map'
import { kansasMapData } from '../map-data/kansas'

export type RegionId = (typeof kansasMapData)['regions'][number]['id']

export interface KansasMapProps extends Omit<MapProps, 'data'> {}

export function KansasMap(props: KansasMapProps) {
  return <Map data={kansasMapData} {...props} />
}
