'use client'

import { Map, type MapProps } from '../map'
import { oklahomaMapData } from '../map-data/oklahoma'

export type RegionId = (typeof oklahomaMapData)['regions'][number]['id']

export interface OklahomaMapProps extends Omit<MapProps, 'data'> {}

export function OklahomaMap(props: OklahomaMapProps) {
  return <Map data={oklahomaMapData} {...props} />
}
