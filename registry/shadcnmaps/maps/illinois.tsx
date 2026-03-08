'use client'

import { Map, type MapProps } from '../map'
import { illinoisMapData } from '../map-data/illinois'

export type RegionId = (typeof illinoisMapData)['regions'][number]['id']

export interface IllinoisMapProps extends Omit<MapProps, 'data'> {}

export function IllinoisMap(props: IllinoisMapProps) {
  return <Map data={illinoisMapData} {...props} />
}
