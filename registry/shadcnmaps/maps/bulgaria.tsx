'use client'

import { Map, type MapProps } from '../map'
import { bulgariaMapData } from '../map-data/bulgaria'

export type RegionId = (typeof bulgariaMapData)['regions'][number]['id']

export interface BulgariaMapProps extends Omit<MapProps, 'data'> {}

export function BulgariaMap(props: BulgariaMapProps) {
  return <Map data={bulgariaMapData} {...props} />
}
