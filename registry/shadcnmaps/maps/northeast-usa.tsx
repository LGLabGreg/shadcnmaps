'use client'

import { Map, type MapProps } from '../map'
import { northeastUSAMapData } from '../map-data/northeast-usa'

export type RegionId = (typeof northeastUSAMapData)['regions'][number]['id']

export interface NortheastUSAMapProps extends Omit<MapProps, 'data'> {}

export function NortheastUSAMap(props: NortheastUSAMapProps) {
  return <Map data={northeastUSAMapData} {...props} />
}
