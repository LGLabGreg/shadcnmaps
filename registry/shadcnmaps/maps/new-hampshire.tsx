'use client'

import { Map, type MapProps } from '../map'
import { newHampshireMapData } from '../map-data/new-hampshire'

export type RegionId = (typeof newHampshireMapData)['regions'][number]['id']

export interface NewHampshireMapProps extends Omit<MapProps, 'data'> {}

export function NewHampshireMap(props: NewHampshireMapProps) {
  return <Map data={newHampshireMapData} {...props} />
}
