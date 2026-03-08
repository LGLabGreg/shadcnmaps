'use client'

import { Map, type MapProps } from '../map'
import { michiganMapData } from '../map-data/michigan'

export type RegionId = (typeof michiganMapData)['regions'][number]['id']

export interface MichiganMapProps extends Omit<MapProps, 'data'> {}

export function MichiganMap(props: MichiganMapProps) {
  return <Map data={michiganMapData} {...props} />
}
