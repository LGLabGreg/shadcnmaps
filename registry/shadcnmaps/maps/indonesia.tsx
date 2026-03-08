'use client'

import { Map, type MapProps } from '../map'
import { indonesiaMapData } from '../map-data/indonesia'

export type RegionId = (typeof indonesiaMapData)['regions'][number]['id']

export interface IndonesiaMapProps extends Omit<MapProps, 'data'> {}

export function IndonesiaMap(props: IndonesiaMapProps) {
  return <Map data={indonesiaMapData} {...props} />
}
