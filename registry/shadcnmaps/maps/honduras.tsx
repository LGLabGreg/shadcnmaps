'use client'

import { Map, type MapProps } from '../map'
import { hondurasMapData } from '../map-data/honduras'

export type RegionId = (typeof hondurasMapData)['regions'][number]['id']

export interface HondurasMapProps extends Omit<MapProps, 'data'> {}

export function HondurasMap(props: HondurasMapProps) {
  return <Map data={hondurasMapData} {...props} />
}
