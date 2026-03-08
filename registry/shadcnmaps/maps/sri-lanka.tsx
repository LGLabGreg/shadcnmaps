'use client'

import { Map, type MapProps } from '../map'
import { sriLankaMapData } from '../map-data/sri-lanka'

export type RegionId = (typeof sriLankaMapData)['regions'][number]['id']

export interface SriLankaMapProps extends Omit<MapProps, 'data'> {}

export function SriLankaMap(props: SriLankaMapProps) {
  return <Map data={sriLankaMapData} {...props} />
}
