'use client'

import { Map, type MapProps } from '../map'
import { uruguayMapData } from '../map-data/uruguay'

export type RegionId = (typeof uruguayMapData)['regions'][number]['id']

export interface UruguayMapProps extends Omit<MapProps, 'data'> {}

export function UruguayMap(props: UruguayMapProps) {
  return <Map data={uruguayMapData} {...props} />
}
