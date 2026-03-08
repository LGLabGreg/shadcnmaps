'use client'

import { Map, type MapProps } from '../map'
import { colombiaMapData } from '../map-data/colombia'

export type RegionId = (typeof colombiaMapData)['regions'][number]['id']

export interface ColombiaMapProps extends Omit<MapProps, 'data'> {}

export function ColombiaMap(props: ColombiaMapProps) {
  return <Map data={colombiaMapData} {...props} />
}
