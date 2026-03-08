'use client'

import { Map, type MapProps } from '../map'
import { switzerlandMapData } from '../map-data/switzerland'

export type RegionId = (typeof switzerlandMapData)['regions'][number]['id']

export interface SwitzerlandMapProps extends Omit<MapProps, 'data'> {}

export function SwitzerlandMap(props: SwitzerlandMapProps) {
  return <Map data={switzerlandMapData} {...props} />
}
