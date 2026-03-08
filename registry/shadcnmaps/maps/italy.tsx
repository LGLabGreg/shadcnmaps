'use client'

import { Map, type MapProps } from '../map'
import { italyMapData } from '../map-data/italy'

export type RegionId = (typeof italyMapData)['regions'][number]['id']

export interface ItalyMapProps extends Omit<MapProps, 'data'> {}

export function ItalyMap(props: ItalyMapProps) {
  return <Map data={italyMapData} {...props} />
}
