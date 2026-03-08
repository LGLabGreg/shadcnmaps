'use client'

import { Map, type MapProps } from '../map'
import { moroccoMapData } from '../map-data/morocco'

export type RegionId = (typeof moroccoMapData)['regions'][number]['id']

export interface MoroccoMapProps extends Omit<MapProps, 'data'> {}

export function MoroccoMap(props: MoroccoMapProps) {
  return <Map data={moroccoMapData} {...props} />
}
