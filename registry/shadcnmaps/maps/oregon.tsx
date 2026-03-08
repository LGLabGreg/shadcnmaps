'use client'

import { Map, type MapProps } from '../map'
import { oregonMapData } from '../map-data/oregon'

export type RegionId = (typeof oregonMapData)['regions'][number]['id']

export interface OregonMapProps extends Omit<MapProps, 'data'> {}

export function OregonMap(props: OregonMapProps) {
  return <Map data={oregonMapData} {...props} />
}
