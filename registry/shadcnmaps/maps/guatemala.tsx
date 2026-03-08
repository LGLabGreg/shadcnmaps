'use client'

import { Map, type MapProps } from '../map'
import { guatemalaMapData } from '../map-data/guatemala'

export type RegionId = (typeof guatemalaMapData)['regions'][number]['id']

export interface GuatemalaMapProps extends Omit<MapProps, 'data'> {}

export function GuatemalaMap(props: GuatemalaMapProps) {
  return <Map data={guatemalaMapData} {...props} />
}
