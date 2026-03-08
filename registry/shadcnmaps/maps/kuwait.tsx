'use client'

import { Map, type MapProps } from '../map'
import { kuwaitMapData } from '../map-data/kuwait'

export type RegionId = (typeof kuwaitMapData)['regions'][number]['id']

export interface KuwaitMapProps extends Omit<MapProps, 'data'> {}

export function KuwaitMap(props: KuwaitMapProps) {
  return <Map data={kuwaitMapData} {...props} />
}
