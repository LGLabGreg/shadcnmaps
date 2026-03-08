'use client'

import { Map, type MapProps } from '../map'
import { alabamaMapData } from '../map-data/alabama'

export type RegionId = (typeof alabamaMapData)['regions'][number]['id']

export interface AlabamaMapProps extends Omit<MapProps, 'data'> {}

export function AlabamaMap(props: AlabamaMapProps) {
  return <Map data={alabamaMapData} {...props} />
}
