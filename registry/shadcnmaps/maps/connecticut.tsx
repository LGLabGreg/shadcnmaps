'use client'

import { Map, type MapProps } from '../map'
import { connecticutMapData } from '../map-data/connecticut'

export type RegionId = (typeof connecticutMapData)['regions'][number]['id']

export interface ConnecticutMapProps extends Omit<MapProps, 'data'> {}

export function ConnecticutMap(props: ConnecticutMapProps) {
  return <Map data={connecticutMapData} {...props} />
}
