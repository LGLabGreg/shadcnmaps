'use client'

import { Map, type MapProps } from '../map'
import { ugandaMapData } from '../map-data/uganda'

export type RegionId = (typeof ugandaMapData)['regions'][number]['id']

export interface UgandaMapProps extends Omit<MapProps, 'data'> {}

export function UgandaMap(props: UgandaMapProps) {
  return <Map data={ugandaMapData} {...props} />
}
