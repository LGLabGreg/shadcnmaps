'use client'

import { Map, type MapProps } from '../map'
import { kenyaMapData } from '../map-data/kenya'

export type RegionId = (typeof kenyaMapData)['regions'][number]['id']

export interface KenyaMapProps extends Omit<MapProps, 'data'> {}

export function KenyaMap(props: KenyaMapProps) {
  return <Map data={kenyaMapData} {...props} />
}
