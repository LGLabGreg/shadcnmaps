'use client'

import { Map, type MapProps } from '../map'
import { southAfricaMapData } from '../map-data/south-africa'

export type RegionId = (typeof southAfricaMapData)['regions'][number]['id']

export interface SouthAfricaMapProps extends Omit<MapProps, 'data'> {}

export function SouthAfricaMap(props: SouthAfricaMapProps) {
  return <Map data={southAfricaMapData} {...props} />
}
