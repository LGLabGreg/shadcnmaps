'use client'

import { Map, type MapProps } from '../map'
import { newZealandMapData } from '../map-data/new-zealand'

export type RegionId = (typeof newZealandMapData)['regions'][number]['id']

export interface NewZealandMapProps extends Omit<MapProps, 'data'> {}

export function NewZealandMap(props: NewZealandMapProps) {
  return <Map data={newZealandMapData} {...props} />
}
