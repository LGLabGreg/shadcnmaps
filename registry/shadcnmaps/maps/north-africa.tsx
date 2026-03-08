'use client'

import { Map, type MapProps } from '../map'
import { northAfricaMapData } from '../map-data/north-africa'

export type RegionId = (typeof northAfricaMapData)['regions'][number]['id']

export interface NorthAfricaMapProps extends Omit<MapProps, 'data'> {}

export function NorthAfricaMap(props: NorthAfricaMapProps) {
  return <Map data={northAfricaMapData} {...props} />
}
