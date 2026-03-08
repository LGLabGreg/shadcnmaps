'use client'

import { Map, type MapProps } from '../map'
import { azerbaijanMapData } from '../map-data/azerbaijan'

export type RegionId = (typeof azerbaijanMapData)['regions'][number]['id']

export interface AzerbaijanMapProps extends Omit<MapProps, 'data'> {}

export function AzerbaijanMap(props: AzerbaijanMapProps) {
  return <Map data={azerbaijanMapData} {...props} />
}
