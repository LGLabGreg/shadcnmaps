'use client'

import { Map, type MapProps } from '../map'
import { nevadaMapData } from '../map-data/nevada'

export type RegionId = (typeof nevadaMapData)['regions'][number]['id']

export interface NevadaMapProps extends Omit<MapProps, 'data'> {}

export function NevadaMap(props: NevadaMapProps) {
  return <Map data={nevadaMapData} {...props} />
}
