'use client'

import { Map, type MapProps } from '../map'
import { denmarkMapData } from '../map-data/denmark'

export type RegionId = (typeof denmarkMapData)['regions'][number]['id']

export interface DenmarkMapProps extends Omit<MapProps, 'data'> {}

export function DenmarkMap(props: DenmarkMapProps) {
  return <Map data={denmarkMapData} {...props} />
}
