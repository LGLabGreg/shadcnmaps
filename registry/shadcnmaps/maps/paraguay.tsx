'use client'

import { Map, type MapProps } from '../map'
import { paraguayMapData } from '../map-data/paraguay'

export type RegionId = (typeof paraguayMapData)['regions'][number]['id']

export interface ParaguayMapProps extends Omit<MapProps, 'data'> {}

export function ParaguayMap(props: ParaguayMapProps) {
  return <Map data={paraguayMapData} {...props} />
}
