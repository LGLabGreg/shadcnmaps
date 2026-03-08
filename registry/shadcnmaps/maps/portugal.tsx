'use client'

import { Map, type MapProps } from '../map'
import { portugalMapData } from '../map-data/portugal'

export type RegionId = (typeof portugalMapData)['regions'][number]['id']

export interface PortugalMapProps extends Omit<MapProps, 'data'> {}

export function PortugalMap(props: PortugalMapProps) {
  return <Map data={portugalMapData} {...props} />
}
