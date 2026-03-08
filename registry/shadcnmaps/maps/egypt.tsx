'use client'

import { Map, type MapProps } from '../map'
import { egyptMapData } from '../map-data/egypt'

export type RegionId = (typeof egyptMapData)['regions'][number]['id']

export interface EgyptMapProps extends Omit<MapProps, 'data'> {}

export function EgyptMap(props: EgyptMapProps) {
  return <Map data={egyptMapData} {...props} />
}
