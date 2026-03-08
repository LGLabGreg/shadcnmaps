'use client'

import { Map, type MapProps } from '../map'
import { washingtonMapData } from '../map-data/washington'

export type RegionId = (typeof washingtonMapData)['regions'][number]['id']

export interface WashingtonMapProps extends Omit<MapProps, 'data'> {}

export function WashingtonMap(props: WashingtonMapProps) {
  return <Map data={washingtonMapData} {...props} />
}
