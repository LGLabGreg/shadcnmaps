'use client'

import { Map, type MapProps } from '../map'
import { venezuelaMapData } from '../map-data/venezuela'

export type RegionId = (typeof venezuelaMapData)['regions'][number]['id']

export interface VenezuelaMapProps extends Omit<MapProps, 'data'> {}

export function VenezuelaMap(props: VenezuelaMapProps) {
  return <Map data={venezuelaMapData} {...props} />
}
