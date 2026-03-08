'use client'

import { Map, type MapProps } from '../map'
import { sloveniaMapData } from '../map-data/slovenia'

export type RegionId = (typeof sloveniaMapData)['regions'][number]['id']

export interface SloveniaMapProps extends Omit<MapProps, 'data'> {}

export function SloveniaMap(props: SloveniaMapProps) {
  return <Map data={sloveniaMapData} {...props} />
}
