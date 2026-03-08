'use client'

import { Map, type MapProps } from '../map'
import { czechRepublicMapData } from '../map-data/czech-republic'

export type RegionId = (typeof czechRepublicMapData)['regions'][number]['id']

export interface CzechRepublicMapProps extends Omit<MapProps, 'data'> {}

export function CzechRepublicMap(props: CzechRepublicMapProps) {
  return <Map data={czechRepublicMapData} {...props} />
}
