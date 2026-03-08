'use client'

import { Map, type MapProps } from '../map'
import { middleEastMapData } from '../map-data/middle-east'

export type RegionId = (typeof middleEastMapData)['regions'][number]['id']

export interface MiddleEastMapProps extends Omit<MapProps, 'data'> {}

export function MiddleEastMap(props: MiddleEastMapProps) {
  return <Map data={middleEastMapData} {...props} />
}
