'use client'

import { Map, type MapProps } from '../map'
import { yemenMapData } from '../map-data/yemen'

export type RegionId = (typeof yemenMapData)['regions'][number]['id']

export interface YemenMapProps extends Omit<MapProps, 'data'> {}

export function YemenMap(props: YemenMapProps) {
  return <Map data={yemenMapData} {...props} />
}
