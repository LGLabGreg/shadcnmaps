'use client'

import { Map, type MapProps } from '../map'
import { norwayMapData } from '../map-data/norway'

export type RegionId = (typeof norwayMapData)['regions'][number]['id']

export interface NorwayMapProps extends Omit<MapProps, 'data'> {}

export function NorwayMap(props: NorwayMapProps) {
  return <Map data={norwayMapData} {...props} />
}
