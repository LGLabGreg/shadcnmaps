'use client'

import { Map, type MapProps } from '../map'
import { delawareMapData } from '../map-data/delaware'

export type RegionId = (typeof delawareMapData)['regions'][number]['id']

export interface DelawareMapProps extends Omit<MapProps, 'data'> {}

export function DelawareMap(props: DelawareMapProps) {
  return <Map data={delawareMapData} {...props} />
}
