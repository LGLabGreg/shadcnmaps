'use client'

import { Map, type MapProps } from '../map'
import { centralAmericaMapData } from '../map-data/central-america'

export type RegionId = (typeof centralAmericaMapData)['regions'][number]['id']

export interface CentralAmericaMapProps extends Omit<MapProps, 'data'> {}

export function CentralAmericaMap(props: CentralAmericaMapProps) {
  return <Map data={centralAmericaMapData} {...props} />
}
