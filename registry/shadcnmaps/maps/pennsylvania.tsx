'use client'

import { Map, type MapProps } from '../map'
import { pennsylvaniaMapData } from '../map-data/pennsylvania'

export type RegionId = (typeof pennsylvaniaMapData)['regions'][number]['id']

export interface PennsylvaniaMapProps extends Omit<MapProps, 'data'> {}

export function PennsylvaniaMap(props: PennsylvaniaMapProps) {
  return <Map data={pennsylvaniaMapData} {...props} />
}
