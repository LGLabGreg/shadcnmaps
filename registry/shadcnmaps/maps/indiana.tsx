'use client'

import { Map, type MapProps } from '../map'
import { indianaMapData } from '../map-data/indiana'

export type RegionId = (typeof indianaMapData)['regions'][number]['id']

export interface IndianaMapProps extends Omit<MapProps, 'data'> {}

export function IndianaMap(props: IndianaMapProps) {
  return <Map data={indianaMapData} {...props} />
}
