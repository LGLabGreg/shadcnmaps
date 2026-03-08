'use client'

import { Map, type MapProps } from '../map'
import { ethiopiaMapData } from '../map-data/ethiopia'

export type RegionId = (typeof ethiopiaMapData)['regions'][number]['id']

export interface EthiopiaMapProps extends Omit<MapProps, 'data'> {}

export function EthiopiaMap(props: EthiopiaMapProps) {
  return <Map data={ethiopiaMapData} {...props} />
}
