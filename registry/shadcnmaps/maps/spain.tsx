'use client'

import { Map, type MapProps } from '../map'
import { spainMapData } from '../map-data/spain'

export type RegionId = (typeof spainMapData)['regions'][number]['id']

export interface SpainMapProps extends Omit<MapProps, 'data'> {}

export function SpainMap(props: SpainMapProps) {
  return <Map data={spainMapData} {...props} />
}
