'use client'

import { Map, type MapProps } from '../map'
import { libyaMapData } from '../map-data/libya'

export type RegionId = (typeof libyaMapData)['regions'][number]['id']

export interface LibyaMapProps extends Omit<MapProps, 'data'> {}

export function LibyaMap(props: LibyaMapProps) {
  return <Map data={libyaMapData} {...props} />
}
