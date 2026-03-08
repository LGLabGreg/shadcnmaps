'use client'

import { Map, type MapProps } from '../map'
import { tennesseeMapData } from '../map-data/tennessee'

export type RegionId = (typeof tennesseeMapData)['regions'][number]['id']

export interface TennesseeMapProps extends Omit<MapProps, 'data'> {}

export function TennesseeMap(props: TennesseeMapProps) {
  return <Map data={tennesseeMapData} {...props} />
}
