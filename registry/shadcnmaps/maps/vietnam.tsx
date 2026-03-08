'use client'

import { Map, type MapProps } from '../map'
import { vietnamMapData } from '../map-data/vietnam'

export type RegionId = (typeof vietnamMapData)['regions'][number]['id']

export interface VietnamMapProps extends Omit<MapProps, 'data'> {}

export function VietnamMap(props: VietnamMapProps) {
  return <Map data={vietnamMapData} {...props} />
}
