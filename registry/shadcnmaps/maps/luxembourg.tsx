'use client'

import { Map, type MapProps } from '../map'
import { luxembourgMapData } from '../map-data/luxembourg'

export type RegionId = (typeof luxembourgMapData)['regions'][number]['id']

export interface LuxembourgMapProps extends Omit<MapProps, 'data'> {}

export function LuxembourgMap(props: LuxembourgMapProps) {
  return <Map data={luxembourgMapData} {...props} />
}
