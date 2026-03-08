'use client'

import { Map, type MapProps } from '../map'
import { omanMapData } from '../map-data/oman'

export type RegionId = (typeof omanMapData)['regions'][number]['id']

export interface OmanMapProps extends Omit<MapProps, 'data'> {}

export function OmanMap(props: OmanMapProps) {
  return <Map data={omanMapData} {...props} />
}
