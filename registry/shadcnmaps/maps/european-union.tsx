'use client'

import { Map, type MapProps } from '../map'
import { europeanUnionMapData } from '../map-data/european-union'

export type RegionId = (typeof europeanUnionMapData)['regions'][number]['id']

export interface EuropeanUnionMapProps extends Omit<MapProps, 'data'> {}

export function EuropeanUnionMap(props: EuropeanUnionMapProps) {
  return <Map data={europeanUnionMapData} {...props} />
}
