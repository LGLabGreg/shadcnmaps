'use client'

import { Map, type MapProps } from '../map'
import { massachusettsMapData } from '../map-data/massachusetts'

export type RegionId = (typeof massachusettsMapData)['regions'][number]['id']

export interface MassachusettsMapProps extends Omit<MapProps, 'data'> {}

export function MassachusettsMap(props: MassachusettsMapProps) {
  return <Map data={massachusettsMapData} {...props} />
}
