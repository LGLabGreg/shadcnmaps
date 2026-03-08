'use client'

import { Map, type MapProps } from '../map'
import { tunisiaMapData } from '../map-data/tunisia'

export type RegionId = (typeof tunisiaMapData)['regions'][number]['id']

export interface TunisiaMapProps extends Omit<MapProps, 'data'> {}

export function TunisiaMap(props: TunisiaMapProps) {
  return <Map data={tunisiaMapData} {...props} />
}
