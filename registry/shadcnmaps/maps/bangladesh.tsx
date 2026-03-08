'use client'

import { Map, type MapProps } from '../map'
import { bangladeshMapData } from '../map-data/bangladesh'

export type RegionId = (typeof bangladeshMapData)['regions'][number]['id']

export interface BangladeshMapProps extends Omit<MapProps, 'data'> {}

export function BangladeshMap(props: BangladeshMapProps) {
  return <Map data={bangladeshMapData} {...props} />
}
