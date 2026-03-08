'use client'

import { Map, type MapProps } from '../map'
import { nigeriaMapData } from '../map-data/nigeria'

export type RegionId = (typeof nigeriaMapData)['regions'][number]['id']

export interface NigeriaMapProps extends Omit<MapProps, 'data'> {}

export function NigeriaMap(props: NigeriaMapProps) {
  return <Map data={nigeriaMapData} {...props} />
}
