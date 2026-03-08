'use client'

import { Map, type MapProps } from '../map'
import { polandMapData } from '../map-data/poland'

export type RegionId = (typeof polandMapData)['regions'][number]['id']

export interface PolandMapProps extends Omit<MapProps, 'data'> {}

export function PolandMap(props: PolandMapProps) {
  return <Map data={polandMapData} {...props} />
}
