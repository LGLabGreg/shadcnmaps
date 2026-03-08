'use client'

import { Map, type MapProps } from '../map'
import { usaCanadaMapData } from '../map-data/usa-canada'

export type RegionId = (typeof usaCanadaMapData)['regions'][number]['id']

export interface UsaCanadaMapProps extends Omit<MapProps, 'data'> {}

export function UsaCanadaMap(props: UsaCanadaMapProps) {
  return <Map data={usaCanadaMapData} {...props} />
}
