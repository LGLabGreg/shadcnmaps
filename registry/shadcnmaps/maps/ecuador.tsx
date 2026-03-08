'use client'

import { Map, type MapProps } from '../map'
import { ecuadorMapData } from '../map-data/ecuador'

export type RegionId = (typeof ecuadorMapData)['regions'][number]['id']

export interface EcuadorMapProps extends Omit<MapProps, 'data'> {}

export function EcuadorMap(props: EcuadorMapProps) {
  return <Map data={ecuadorMapData} {...props} />
}
