'use client'

import { Map, type MapProps } from '../map'
import { netherlandsMapData } from '../map-data/netherlands'

export type RegionId = (typeof netherlandsMapData)['regions'][number]['id']

export interface NetherlandsMapProps extends Omit<MapProps, 'data'> {}

export function NetherlandsMap(props: NetherlandsMapProps) {
  return <Map data={netherlandsMapData} {...props} />
}
