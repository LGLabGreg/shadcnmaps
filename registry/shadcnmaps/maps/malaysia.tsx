'use client'

import { Map, type MapProps } from '../map'
import { malaysiaMapData } from '../map-data/malaysia'

export type RegionId = (typeof malaysiaMapData)['regions'][number]['id']

export interface MalaysiaMapProps extends Omit<MapProps, 'data'> {}

export function MalaysiaMap(props: MalaysiaMapProps) {
  return <Map data={malaysiaMapData} {...props} />
}
