'use client'

import { Map, type MapProps } from '../map'
import { philippinesMapData } from '../map-data/philippines'

export type RegionId = (typeof philippinesMapData)['regions'][number]['id']

export interface PhilippinesMapProps extends Omit<MapProps, 'data'> {}

export function PhilippinesMap(props: PhilippinesMapProps) {
  return <Map data={philippinesMapData} {...props} />
}
