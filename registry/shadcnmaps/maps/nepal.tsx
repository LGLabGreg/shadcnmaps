'use client'

import { Map, type MapProps } from '../map'
import { nepalMapData } from '../map-data/nepal'

export type RegionId = (typeof nepalMapData)['regions'][number]['id']

export interface NepalMapProps extends Omit<MapProps, 'data'> {}

export function NepalMap(props: NepalMapProps) {
  return <Map data={nepalMapData} {...props} />
}
