'use client'

import { Map, type MapProps } from '../map'
import { ghanaMapData } from '../map-data/ghana'

export type RegionId = (typeof ghanaMapData)['regions'][number]['id']

export interface GhanaMapProps extends Omit<MapProps, 'data'> {}

export function GhanaMap(props: GhanaMapProps) {
  return <Map data={ghanaMapData} {...props} />
}
