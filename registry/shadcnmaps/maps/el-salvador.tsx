'use client'

import { Map, type MapProps } from '../map'
import { elSalvadorMapData } from '../map-data/el-salvador'

export type RegionId = (typeof elSalvadorMapData)['regions'][number]['id']

export interface ElSalvadorMapProps extends Omit<MapProps, 'data'> {}

export function ElSalvadorMap(props: ElSalvadorMapProps) {
  return <Map data={elSalvadorMapData} {...props} />
}
