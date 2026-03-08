'use client'

import { Map, type MapProps } from '../map'
import { canadaMapData } from '../map-data/canada'

export type RegionId = (typeof canadaMapData)['regions'][number]['id']

export interface CanadaMapProps extends Omit<MapProps, 'data'> {}

export function CanadaMap(props: CanadaMapProps) {
  return <Map data={canadaMapData} {...props} />
}
