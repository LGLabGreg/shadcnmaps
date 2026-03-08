'use client'

import { Map, type MapProps } from '../map'
import { mexicoMapData } from '../map-data/mexico'

export type RegionId = (typeof mexicoMapData)['regions'][number]['id']

export interface MexicoMapProps extends Omit<MapProps, 'data'> {}

export function MexicoMap(props: MexicoMapProps) {
  return <Map data={mexicoMapData} {...props} />
}
