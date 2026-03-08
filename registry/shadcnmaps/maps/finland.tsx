'use client'

import { Map, type MapProps } from '../map'
import { finlandMapData } from '../map-data/finland'

export type RegionId = (typeof finlandMapData)['regions'][number]['id']

export interface FinlandMapProps extends Omit<MapProps, 'data'> {}

export function FinlandMap(props: FinlandMapProps) {
  return <Map data={finlandMapData} {...props} />
}
