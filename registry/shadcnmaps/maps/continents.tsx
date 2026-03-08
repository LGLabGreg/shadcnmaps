'use client'

import { Map, type MapProps } from '../map'
import { continentsMapData } from '../map-data/continents'

export type RegionId = (typeof continentsMapData)['regions'][number]['id']

export interface ContinentsMapProps extends Omit<MapProps, 'data'> {}

export function ContinentsMap(props: ContinentsMapProps) {
  return <Map data={continentsMapData} {...props} />
}
