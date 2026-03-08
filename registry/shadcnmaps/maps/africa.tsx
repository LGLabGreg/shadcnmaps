'use client'

import { Map, type MapProps } from '../map'
import { africaMapData } from '../map-data/africa'

export type RegionId = (typeof africaMapData)['regions'][number]['id']

export interface AfricaMapProps extends Omit<MapProps, 'data'> {}

export function AfricaMap(props: AfricaMapProps) {
  return <Map data={africaMapData} {...props} />
}
