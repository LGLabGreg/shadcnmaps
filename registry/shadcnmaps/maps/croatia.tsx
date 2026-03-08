'use client'

import { Map, type MapProps } from '../map'
import { croatiaMapData } from '../map-data/croatia'

export type RegionId = (typeof croatiaMapData)['regions'][number]['id']

export interface CroatiaMapProps extends Omit<MapProps, 'data'> {}

export function CroatiaMap(props: CroatiaMapProps) {
  return <Map data={croatiaMapData} {...props} />
}
