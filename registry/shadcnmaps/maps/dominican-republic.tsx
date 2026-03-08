'use client'

import { Map, type MapProps } from '../map'
import { dominicanRepublicMapData } from '../map-data/dominican-republic'

export type RegionId =
  (typeof dominicanRepublicMapData)['regions'][number]['id']

export interface DominicanRepublicMapProps extends Omit<MapProps, 'data'> {}

export function DominicanRepublicMap(props: DominicanRepublicMapProps) {
  return <Map data={dominicanRepublicMapData} {...props} />
}
