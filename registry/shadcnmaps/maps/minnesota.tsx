'use client'

import { Map, type MapProps } from '../map'
import { minnesotaMapData } from '../map-data/minnesota'

export type RegionId = (typeof minnesotaMapData)['regions'][number]['id']

export interface MinnesotaMapProps extends Omit<MapProps, 'data'> {}

export function MinnesotaMap(props: MinnesotaMapProps) {
  return <Map data={minnesotaMapData} {...props} />
}
