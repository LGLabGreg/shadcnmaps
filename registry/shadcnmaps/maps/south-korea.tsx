'use client'

import { Map, type MapProps } from '../map'
import { southKoreaMapData } from '../map-data/south-korea'

export type RegionId = (typeof southKoreaMapData)['regions'][number]['id']

export interface SouthKoreaMapProps extends Omit<MapProps, 'data'> {}

export function SouthKoreaMap(props: SouthKoreaMapProps) {
  return <Map data={southKoreaMapData} {...props} />
}
