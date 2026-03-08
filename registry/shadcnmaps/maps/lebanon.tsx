'use client'

import { Map, type MapProps } from '../map'
import { lebanonMapData } from '../map-data/lebanon'

export type RegionId = (typeof lebanonMapData)['regions'][number]['id']

export interface LebanonMapProps extends Omit<MapProps, 'data'> {}

export function LebanonMap(props: LebanonMapProps) {
  return <Map data={lebanonMapData} {...props} />
}
