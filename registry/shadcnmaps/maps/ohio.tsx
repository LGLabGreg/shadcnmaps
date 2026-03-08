'use client'

import { Map, type MapProps } from '../map'
import { ohioMapData } from '../map-data/ohio'

export type RegionId = (typeof ohioMapData)['regions'][number]['id']

export interface OhioMapProps extends Omit<MapProps, 'data'> {}

export function OhioMap(props: OhioMapProps) {
  return <Map data={ohioMapData} {...props} />
}
