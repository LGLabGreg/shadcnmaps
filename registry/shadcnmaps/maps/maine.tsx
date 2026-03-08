'use client'

import { Map, type MapProps } from '../map'
import { maineMapData } from '../map-data/maine'

export type RegionId = (typeof maineMapData)['regions'][number]['id']

export interface MaineMapProps extends Omit<MapProps, 'data'> {}

export function MaineMap(props: MaineMapProps) {
  return <Map data={maineMapData} {...props} />
}
