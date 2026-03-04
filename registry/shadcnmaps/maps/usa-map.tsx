'use client'

import { Map, type MapProps } from '@/registry/shadcnmaps/map'
import { usaMapData } from '@/registry/shadcnmaps/map-data/usa'

export type StateId = (typeof usaMapData)['regions'][number]['id']

export interface USAMapProps extends Omit<MapProps, 'data'> {}

export function USAMap(props: USAMapProps) {
  return <Map data={usaMapData} {...props} />
}
