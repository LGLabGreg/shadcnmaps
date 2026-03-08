'use client'

import { Map, type MapProps } from '../map'
import { northCarolinaMapData } from '../map-data/north-carolina'

export type RegionId = (typeof northCarolinaMapData)['regions'][number]['id']

export interface NorthCarolinaMapProps extends Omit<MapProps, 'data'> {}

export function NorthCarolinaMap(props: NorthCarolinaMapProps) {
  return <Map data={northCarolinaMapData} {...props} />
}
