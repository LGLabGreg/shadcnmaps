'use client'

import { Map, type MapProps } from '../map'
import { nicaraguaMapData } from '../map-data/nicaragua'

export type RegionId = (typeof nicaraguaMapData)['regions'][number]['id']

export interface NicaraguaMapProps extends Omit<MapProps, 'data'> {}

export function NicaraguaMap(props: NicaraguaMapProps) {
  return <Map data={nicaraguaMapData} {...props} />
}
