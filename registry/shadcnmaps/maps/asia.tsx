'use client'

import { Map, type MapProps } from '../map'
import { asiaMapData } from '../map-data/asia'

export type RegionId = (typeof asiaMapData)['regions'][number]['id']

export interface AsiaMapProps extends Omit<MapProps, 'data'> {}

export function AsiaMap(props: AsiaMapProps) {
  return <Map data={asiaMapData} {...props} />
}
