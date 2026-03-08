'use client'

import { Map, type MapProps } from '../map'
import { thailandMapData } from '../map-data/thailand'

export type RegionId = (typeof thailandMapData)['regions'][number]['id']

export interface ThailandMapProps extends Omit<MapProps, 'data'> {}

export function ThailandMap(props: ThailandMapProps) {
  return <Map data={thailandMapData} {...props} />
}
