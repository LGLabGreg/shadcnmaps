'use client'

import { Map, type MapProps } from '../map'
import { rhodeIslandMapData } from '../map-data/rhode-island'

export type RegionId = (typeof rhodeIslandMapData)['regions'][number]['id']

export interface RhodeIslandMapProps extends Omit<MapProps, 'data'> {}

export function RhodeIslandMap(props: RhodeIslandMapProps) {
  return <Map data={rhodeIslandMapData} {...props} />
}
