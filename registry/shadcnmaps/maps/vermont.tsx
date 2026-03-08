'use client'

import { Map, type MapProps } from '../map'
import { vermontMapData } from '../map-data/vermont'

export type RegionId = (typeof vermontMapData)['regions'][number]['id']

export interface VermontMapProps extends Omit<MapProps, 'data'> {}

export function VermontMap(props: VermontMapProps) {
  return <Map data={vermontMapData} {...props} />
}
