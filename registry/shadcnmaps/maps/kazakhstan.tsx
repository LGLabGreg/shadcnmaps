'use client'

import { Map, type MapProps } from '../map'
import { kazakhstanMapData } from '../map-data/kazakhstan'

export type RegionId = (typeof kazakhstanMapData)['regions'][number]['id']

export interface KazakhstanMapProps extends Omit<MapProps, 'data'> {}

export function KazakhstanMap(props: KazakhstanMapProps) {
  return <Map data={kazakhstanMapData} {...props} />
}
