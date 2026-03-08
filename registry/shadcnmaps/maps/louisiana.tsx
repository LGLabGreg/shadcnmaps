'use client'

import { Map, type MapProps } from '../map'
import { louisianaMapData } from '../map-data/louisiana'

export type RegionId = (typeof louisianaMapData)['regions'][number]['id']

export interface LouisianaMapProps extends Omit<MapProps, 'data'> {}

export function LouisianaMap(props: LouisianaMapProps) {
  return <Map data={louisianaMapData} {...props} />
}
