'use client'

import { Map, type MapProps } from '../map'
import { virginiaMapData } from '../map-data/virginia'

export type RegionId = (typeof virginiaMapData)['regions'][number]['id']

export interface VirginiaMapProps extends Omit<MapProps, 'data'> {}

export function VirginiaMap(props: VirginiaMapProps) {
  return <Map data={virginiaMapData} {...props} />
}
