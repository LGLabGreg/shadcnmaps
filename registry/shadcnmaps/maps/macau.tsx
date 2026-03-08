'use client'

import { Map, type MapProps } from '../map'
import { macauMapData } from '../map-data/macau'

export type RegionId = (typeof macauMapData)['regions'][number]['id']

export interface MacauMapProps extends Omit<MapProps, 'data'> {}

export function MacauMap(props: MacauMapProps) {
  return <Map data={macauMapData} {...props} />
}
