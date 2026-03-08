'use client'

import { Map, type MapProps } from '../map'
import { qatarMapData } from '../map-data/qatar'

export type RegionId = (typeof qatarMapData)['regions'][number]['id']

export interface QatarMapProps extends Omit<MapProps, 'data'> {}

export function QatarMap(props: QatarMapProps) {
  return <Map data={qatarMapData} {...props} />
}
