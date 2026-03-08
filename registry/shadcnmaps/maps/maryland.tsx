'use client'

import { Map, type MapProps } from '../map'
import { marylandMapData } from '../map-data/maryland'

export type RegionId = (typeof marylandMapData)['regions'][number]['id']

export interface MarylandMapProps extends Omit<MapProps, 'data'> {}

export function MarylandMap(props: MarylandMapProps) {
  return <Map data={marylandMapData} {...props} />
}
