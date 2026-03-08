'use client'

import { Map, type MapProps } from '../map'
import { northAmericaMapData } from '../map-data/north-america'

export type RegionId = (typeof northAmericaMapData)['regions'][number]['id']

export interface NorthAmericaMapProps extends Omit<MapProps, 'data'> {}

export function NorthAmericaMap(props: NorthAmericaMapProps) {
  return <Map data={northAmericaMapData} {...props} />
}
