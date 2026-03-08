'use client'

import { Map, type MapProps } from '../map'
import { wyomingMapData } from '../map-data/wyoming'

export type RegionId = (typeof wyomingMapData)['regions'][number]['id']

export interface WyomingMapProps extends Omit<MapProps, 'data'> {}

export function WyomingMap(props: WyomingMapProps) {
  return <Map data={wyomingMapData} {...props} />
}
