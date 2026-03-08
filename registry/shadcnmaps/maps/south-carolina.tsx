'use client'

import { Map, type MapProps } from '../map'
import { southCarolinaMapData } from '../map-data/south-carolina'

export type RegionId = (typeof southCarolinaMapData)['regions'][number]['id']

export interface SouthCarolinaMapProps extends Omit<MapProps, 'data'> {}

export function SouthCarolinaMap(props: SouthCarolinaMapProps) {
  return <Map data={southCarolinaMapData} {...props} />
}
