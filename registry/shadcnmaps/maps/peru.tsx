'use client'

import { Map, type MapProps } from '../map'
import { peruMapData } from '../map-data/peru'

export type RegionId = (typeof peruMapData)['regions'][number]['id']

export interface PeruMapProps extends Omit<MapProps, 'data'> {}

export function PeruMap(props: PeruMapProps) {
  return <Map data={peruMapData} {...props} />
}
