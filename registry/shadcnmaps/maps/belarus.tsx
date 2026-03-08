'use client'

import { Map, type MapProps } from '../map'
import { belarusMapData } from '../map-data/belarus'

export type RegionId = (typeof belarusMapData)['regions'][number]['id']

export interface BelarusMapProps extends Omit<MapProps, 'data'> {}

export function BelarusMap(props: BelarusMapProps) {
  return <Map data={belarusMapData} {...props} />
}
