'use client'

import { Map, type MapProps } from '../map'
import { swedenMapData } from '../map-data/sweden'

export type RegionId = (typeof swedenMapData)['regions'][number]['id']

export interface SwedenMapProps extends Omit<MapProps, 'data'> {}

export function SwedenMap(props: SwedenMapProps) {
  return <Map data={swedenMapData} {...props} />
}
