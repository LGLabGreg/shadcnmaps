'use client'

import { Map, type MapProps } from '../map'
import { saudiArabiaMapData } from '../map-data/saudi-arabia'

export type RegionId = (typeof saudiArabiaMapData)['regions'][number]['id']

export interface SaudiArabiaMapProps extends Omit<MapProps, 'data'> {}

export function SaudiArabiaMap(props: SaudiArabiaMapProps) {
  return <Map data={saudiArabiaMapData} {...props} />
}
