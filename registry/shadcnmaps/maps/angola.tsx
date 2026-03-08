'use client'

import { Map, type MapProps } from '../map'
import { angolaMapData } from '../map-data/angola'

export type RegionId = (typeof angolaMapData)['regions'][number]['id']

export interface AngolaMapProps extends Omit<MapProps, 'data'> {}

export function AngolaMap(props: AngolaMapProps) {
  return <Map data={angolaMapData} {...props} />
}
