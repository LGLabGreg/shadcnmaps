'use client'

import { Map, type MapProps } from '../map'
import { nebraskaMapData } from '../map-data/nebraska'

export type RegionId = (typeof nebraskaMapData)['regions'][number]['id']

export interface NebraskaMapProps extends Omit<MapProps, 'data'> {}

export function NebraskaMap(props: NebraskaMapProps) {
  return <Map data={nebraskaMapData} {...props} />
}
