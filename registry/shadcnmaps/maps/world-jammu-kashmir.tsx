'use client'

import { Map, type MapProps } from '../map'
import { worldJammuKashmirMapData } from '../map-data/world-jammu-kashmir'

export type RegionId =
  (typeof worldJammuKashmirMapData)['regions'][number]['id']

export interface WorldJammuKashmirMapProps extends Omit<MapProps, 'data'> {}

export function WorldJammuKashmirMap(props: WorldJammuKashmirMapProps) {
  return <Map data={worldJammuKashmirMapData} {...props} />
}
