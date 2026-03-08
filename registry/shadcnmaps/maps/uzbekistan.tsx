'use client'

import { Map, type MapProps } from '../map'
import { uzbekistanMapData } from '../map-data/uzbekistan'

export type RegionId = (typeof uzbekistanMapData)['regions'][number]['id']

export interface UzbekistanMapProps extends Omit<MapProps, 'data'> {}

export function UzbekistanMap(props: UzbekistanMapProps) {
  return <Map data={uzbekistanMapData} {...props} />
}
