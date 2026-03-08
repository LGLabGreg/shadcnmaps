'use client'

import { Map, type MapProps } from '../map'
import { montanaMapData } from '../map-data/montana'

export type RegionId = (typeof montanaMapData)['regions'][number]['id']

export interface MontanaMapProps extends Omit<MapProps, 'data'> {}

export function MontanaMap(props: MontanaMapProps) {
  return <Map data={montanaMapData} {...props} />
}
