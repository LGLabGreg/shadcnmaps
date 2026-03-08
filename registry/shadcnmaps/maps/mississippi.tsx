'use client'

import { Map, type MapProps } from '../map'
import { mississippiMapData } from '../map-data/mississippi'

export type RegionId = (typeof mississippiMapData)['regions'][number]['id']

export interface MississippiMapProps extends Omit<MapProps, 'data'> {}

export function MississippiMap(props: MississippiMapProps) {
  return <Map data={mississippiMapData} {...props} />
}
