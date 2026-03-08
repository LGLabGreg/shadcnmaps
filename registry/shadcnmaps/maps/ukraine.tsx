'use client'

import { Map, type MapProps } from '../map'
import { ukraineMapData } from '../map-data/ukraine'

export type RegionId = (typeof ukraineMapData)['regions'][number]['id']

export interface UkraineMapProps extends Omit<MapProps, 'data'> {}

export function UkraineMap(props: UkraineMapProps) {
  return <Map data={ukraineMapData} {...props} />
}
