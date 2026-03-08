'use client'

import { Map, type MapProps } from '../map'
import { uaeMapData } from '../map-data/uae'

export type RegionId = (typeof uaeMapData)['regions'][number]['id']

export interface UaeMapProps extends Omit<MapProps, 'data'> {}

export function UaeMap(props: UaeMapProps) {
  return <Map data={uaeMapData} {...props} />
}
