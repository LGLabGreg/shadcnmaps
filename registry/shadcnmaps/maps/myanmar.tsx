'use client'

import { Map, type MapProps } from '../map'
import { myanmarMapData } from '../map-data/myanmar'

export type RegionId = (typeof myanmarMapData)['regions'][number]['id']

export interface MyanmarMapProps extends Omit<MapProps, 'data'> {}

export function MyanmarMap(props: MyanmarMapProps) {
  return <Map data={myanmarMapData} {...props} />
}
