'use client'

import { Map, type MapProps } from '../map'
import { pakistanMapData } from '../map-data/pakistan'

export type RegionId = (typeof pakistanMapData)['regions'][number]['id']

export interface PakistanMapProps extends Omit<MapProps, 'data'> {}

export function PakistanMap(props: PakistanMapProps) {
  return <Map data={pakistanMapData} {...props} />
}
