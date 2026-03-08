'use client'

import { Map, type MapProps } from '../map'
import { caribbeanMapData } from '../map-data/caribbean'

export type RegionId = (typeof caribbeanMapData)['regions'][number]['id']

export interface CaribbeanMapProps extends Omit<MapProps, 'data'> {}

export function CaribbeanMap(props: CaribbeanMapProps) {
  return <Map data={caribbeanMapData} {...props} />
}
