'use client'

import { Map, type MapProps } from '../map'
import { newYorkMapData } from '../map-data/new-york'

export type RegionId = (typeof newYorkMapData)['regions'][number]['id']

export interface NewYorkMapProps extends Omit<MapProps, 'data'> {}

export function NewYorkMap(props: NewYorkMapProps) {
  return <Map data={newYorkMapData} {...props} />
}
